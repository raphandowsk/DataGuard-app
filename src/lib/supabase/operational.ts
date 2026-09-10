"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./auth";
import { useUI } from "@/lib/store";
import { TASKS as TASK_FIXTURES, type Task } from "@/lib/data/tasks";
import { RISKS as RISK_FIXTURES, type Risk } from "@/lib/data/risks";
import { CLIENTS as CLIENT_FIXTURES, type Client } from "@/lib/data/portfolio";
import { ACTIVITIES as ACTIVITY_FIXTURES, type Activity } from "@/lib/data/inventory";
import { PROCESSORS as PROCESSOR_FIXTURES, CONTRACTS as CONTRACT_FIXTURES, type Processor, type Contract } from "@/lib/data/processors";
import { RETENTION as RETENTION_FIXTURES, type RetentionRow } from "@/lib/data/retention";
import { SENSITIVE as SENSITIVE_FIXTURES, type SensitiveRow } from "@/lib/data/sensitive";
import { POLICIES as POLICY_FIXTURES, EVIDENCE as EVIDENCE_FIXTURES, AUDIT as AUDIT_FIXTURES, type Policy, type Evidence, type AuditRow } from "@/lib/data/records";
import { REQUESTS as REQUEST_FIXTURES, type RightsRequest } from "@/lib/data/rights";
import { CONSENT as CONSENT_FIXTURES, type ConsentRow } from "@/lib/data/consent";
import { INCIDENTS as INCIDENT_FIXTURES, INC_TIMELINE as TIMELINE_FIXTURES, type Incident, type TimelineEntry } from "@/lib/data/incidents";
import { TRANSFERS as TRANSFER_FIXTURES, type Transfer } from "@/lib/data/transfers";

export type Source = "loading" | "live" | "fixtures";

interface ActiveOrg {
  id: string;
  slug: string;
  name: string;
  sector: string | null;
}

// Session-scoped cache so switching screens doesn't refetch the active org.
let orgCache: { userId: string; org: ActiveOrg | null } | null = null;

/** Clear the cached active org (e.g. after provisioning a new workspace). */
export function resetOrgCache() {
  orgCache = null;
}

/** Resolves the signed-in user's primary tenant (Mazingira Trust). */
export function useActiveOrg(): { org: ActiveOrg | null; source: Source } {
  const { client, userId, ready } = useAuth();
  const cached = userId && orgCache?.userId === userId ? orgCache.org : undefined;
  const [org, setOrg] = useState<ActiveOrg | null>(cached ?? null);
  const [source, setSource] = useState<Source>(cached !== undefined ? "live" : "loading");

  useEffect(() => {
    if (!ready) return;
    if (!client || !userId) {
      setOrg(null);
      setSource("fixtures");
      return;
    }
    if (orgCache?.userId === userId) {
      setOrg(orgCache.org);
      setSource(orgCache.org ? "live" : "fixtures");
      return;
    }
    let cancelled = false;
    client
      .from("organisations")
      .select("id,slug,name,sector")
      .eq("is_primary", true)
      .maybeSingle()
      .then(({ data }) => {
        if (cancelled) return;
        const row = data as unknown as ActiveOrg | null;
        orgCache = { userId, org: row };
        setOrg(row);
        setSource(row ? "live" : "fixtures");
      });
    return () => {
      cancelled = true;
    };
  }, [client, userId, ready]);

  return { org, source };
}

/** Live tasks for the active org, with an optimistic + persisted status setter. */
export function useTasks() {
  const { client, email } = useAuth();
  const { org, source: orgSource } = useActiveOrg();
  const dataRev = useUI((s) => s.dataRev);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [source, setSource] = useState<Source>("loading");

  useEffect(() => {
    if (orgSource === "loading") return;
    if (!client || !org) {
      setTasks(TASK_FIXTURES);
      setSource("fixtures");
      return;
    }
    let cancelled = false;
    client
      .from("tasks")
      .select("code,title,control_id,priority,status,owner,due,overdue,reason")
      .eq("org_id", org.id)
      .order("display_order", { ascending: true })
      .then(({ data, error }) => {
        if (cancelled || error || !data) {
          if (!cancelled) { setTasks([]); setSource("live"); }
          return;
        }
        setTasks(
          (data as unknown as Array<Record<string, unknown>>).map((r) => ({
            id: String(r.code),
            title: String(r.title),
            control: String(r.control_id ?? ""),
            priority: r.priority as Task["priority"],
            status: r.status as Task["status"],
            owner: String(r.owner ?? ""),
            due: String(r.due ?? ""),
            overdue: Boolean(r.overdue),
            reason: String(r.reason ?? ""),
          })),
        );
        setSource("live");
      });
    return () => {
      cancelled = true;
    };
  }, [client, org, orgSource, dataRev]);

  const setStatus = useCallback(
    (code: string, status: Task["status"]) => {
      const prevStatus = tasks.find((t) => t.id === code)?.status;
      setTasks((prev) => prev.map((t) => (t.id === code ? { ...t, status } : t)));
      if (client && org) {
        client.from("tasks").update({ status } as never).eq("org_id", org.id).eq("code", code).then(() => {});
        logAudit(client, org.id, email ?? "", { action: "Changed task status", object: code, from: prevStatus, to: status });
      }
    },
    [client, org, email, tasks],
  );

  /**
   * Create a remediation task from a control. One open task per control: if the
   * control already has a task it is returned rather than duplicated. Persists
   * to the tasks table and updates local state optimistically.
   */
  const createFromControl = useCallback(
    async (
      c: { id: string; title: string; task: string; risk: string; remediation: string },
      opts?: { owner?: string; due?: string; overdue?: boolean },
    ): Promise<{ ok: true; created: boolean } | { ok: false; error: string }> => {
      if (!client || !org) return { ok: false, error: "No active workspace." };
      const existing = tasks.find((t) => t.control === c.id);
      if (existing) return { ok: true, created: false };

      const code = `RT-${c.id}`;
      const priority = c.risk as Task["priority"];
      const owner = opts?.owner?.trim() || "";
      const due = opts?.due?.trim() || "";
      const overdue = opts?.overdue ?? false;
      const row = {
        org_id: org.id,
        code,
        title: c.task || `Remediate ${c.title}`,
        control_id: c.id,
        priority,
        status: "Open",
        owner: owner || null,
        due: due || null,
        reason: c.remediation,
        overdue,
        display_order: tasks.length + 1,
      };
      const { error } = await client.from("tasks").insert(row as never);
      if (error) return { ok: false, error: error.message };

      logAudit(client, org.id, email ?? "", { action: "Created remediation task", object: code });
      // Let every other live tasks hook (e.g. the sidebar badge) refetch.
      useUI.getState().bumpData();
      setTasks((prev) => [
        ...prev,
        { id: code, title: row.title, control: c.id, priority, status: "Open", owner, due, overdue, reason: c.remediation },
      ]);
      return { ok: true, created: true };
    },
    [client, org, tasks, email],
  );

  /** Delete a task by code (used to undo a remediation task). */
  const removeTask = useCallback(
    async (code: string): Promise<{ ok: boolean; error?: string }> => {
      if (!client || !org) return { ok: false, error: "No active workspace." };
      const { error } = await client.from("tasks").delete().eq("org_id", org.id).eq("code", code);
      if (error) return { ok: false, error: error.message };
      logAudit(client, org.id, email ?? "", { action: "Removed task", object: code });
      useUI.getState().bumpData();
      setTasks((prev) => prev.filter((t) => t.id !== code));
      return { ok: true };
    },
    [client, org, email],
  );

  return { tasks, source, setStatus, createFromControl, removeTask, live: source === "live" };
}

export function useRisks() {
  const { client } = useAuth();
  const { org, source: orgSource } = useActiveOrg();
  const [risks, setRisks] = useState<Risk[]>([]);
  const [source, setSource] = useState<Source>("loading");

  useEffect(() => {
    if (orgSource === "loading") return;
    if (!client || !org) {
      setRisks(RISK_FIXTURES);
      setSource("fixtures");
      return;
    }
    let cancelled = false;
    client
      .from("risks")
      .select("code,control_id,title,domain,likelihood,impact,owner,due,overdue")
      .eq("org_id", org.id)
      .order("display_order", { ascending: true })
      .then(({ data, error }) => {
        if (cancelled || error || !data) {
          if (!cancelled) { setRisks([]); setSource("live"); }
          return;
        }
        setRisks(
          (data as unknown as Array<Record<string, unknown>>).map((r) => ({
            id: String(r.code),
            control: String(r.control_id ?? ""),
            title: String(r.title),
            domain: String(r.domain ?? ""),
            l: Number(r.likelihood ?? 0),
            i: Number(r.impact ?? 0),
            owner: String(r.owner ?? ""),
            due: String(r.due ?? ""),
            overdue: Boolean(r.overdue),
          })),
        );
        setSource("live");
      });
    return () => {
      cancelled = true;
    };
  }, [client, org, orgSource]);

  return { risks, source, live: source === "live" };
}

/** Generic read hook for an org-scoped register table with a fixture fallback. */
export type RegisterTable =
  | "activities" | "processors" | "contracts" | "retention_schedule" | "sensitive_data"
  | "policies" | "evidence" | "audit_log" | "rights_requests" | "consent_records"
  | "incidents" | "incident_timeline" | "transfers";

function useRegister<T>(
  table: RegisterTable,
  columns: string,
  map: (row: Record<string, unknown>) => T,
  fixture: T[],
  orderBy: { col: string; ascending: boolean } = { col: "display_order", ascending: true },
) {
  const { client } = useAuth();
  const { org, source: orgSource } = useActiveOrg();
  const dataRev = useUI((s) => s.dataRev);
  // Start empty, never with fixtures — a signed-in user must only ever see their
  // own org's live rows (or a clean empty state), not the demo sample data.
  const [rows, setRows] = useState<T[]>([]);
  const [source, setSource] = useState<Source>("loading");

  useEffect(() => {
    if (orgSource === "loading") return;
    if (!client || !org) {
      setRows(fixture);
      setSource("fixtures");
      return;
    }
    let cancelled = false;
    client
      .from(table)
      .select(columns)
      .eq("org_id", org.id)
      .order(orderBy.col, { ascending: orderBy.ascending })
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error || !data) { setRows([]); setSource("live"); return; }
        setRows((data as unknown as Array<Record<string, unknown>>).map(map));
        setSource("live");
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client, org, orgSource, dataRev]);

  return { rows, source, live: source === "live" };
}

/** Insert / delete for an org-scoped register table. Every write bumps dataRev
 *  so the read hooks (and sidebar badges) refetch and stay in sync. */
export function useRegisterActions(table: RegisterTable) {
  const { client, email } = useAuth();
  const { org } = useActiveOrg();
  const label = TABLE_LABEL[table] ?? "record";
  const keyOf = (o: Record<string, unknown>) =>
    String(o.code ?? o.name ?? o.cat ?? o.record ?? o.processor ?? o.purpose ?? o.title ?? "");

  const insert = useCallback(
    async (values: Record<string, unknown>): Promise<{ ok: boolean; error?: string }> => {
      if (!client || !org) return { ok: false, error: "No active workspace." };
      const { error } = await client.from(table).insert({ org_id: org.id, ...values } as never);
      if (error) return { ok: false, error: error.message };
      logAudit(client, org.id, email ?? "", { action: `Added ${label}`, object: keyOf(values) });
      useUI.getState().bumpData();
      return { ok: true };
    },
    [client, org, table, label, email],
  );

  const remove = useCallback(
    async (match: Record<string, unknown>): Promise<{ ok: boolean; error?: string }> => {
      if (!client || !org) return { ok: false, error: "No active workspace." };
      let q = client.from(table).delete().eq("org_id", org.id);
      for (const [k, v] of Object.entries(match)) q = q.eq(k, v as never);
      const { error } = await q;
      if (error) return { ok: false, error: error.message };
      logAudit(client, org.id, email ?? "", { action: `Removed ${label}`, object: keyOf(match) });
      useUI.getState().bumpData();
      return { ok: true };
    },
    [client, org, table, label, email],
  );

  const update = useCallback(
    async (match: Record<string, unknown>, values: Record<string, unknown>): Promise<{ ok: boolean; error?: string }> => {
      if (!client || !org) return { ok: false, error: "No active workspace." };
      let q = client.from(table).update(values as never).eq("org_id", org.id);
      for (const [k, v] of Object.entries(match)) q = q.eq(k, v as never);
      const { error } = await q;
      if (error) return { ok: false, error: error.message };
      logAudit(client, org.id, email ?? "", { action: `Updated ${label}`, object: keyOf(match) });
      useUI.getState().bumpData();
      return { ok: true };
    },
    [client, org, table, label, email],
  );

  return { insert, remove, update };
}

export function useActivities() {
  const { rows, live } = useRegister<Activity>(
    "activities",
    "code,name,dept,subjects,cats,sensitive,basis,purpose,systems,recipients,country,retention,status",
    (r) => ({
      id: String(r.code), name: String(r.name), dept: String(r.dept ?? ""), subjects: String(r.subjects ?? ""),
      cats: String(r.cats ?? ""), sensitive: Boolean(r.sensitive), basis: String(r.basis ?? ""),
      purpose: String(r.purpose ?? ""), systems: String(r.systems ?? ""), recipients: String(r.recipients ?? ""),
      country: String(r.country ?? ""), retention: String(r.retention ?? ""), status: r.status as Activity["status"],
    }),
    ACTIVITY_FIXTURES,
  );
  return { activities: rows, live };
}

export function useProcessors() {
  const { rows, live } = useRegister<Processor>(
    "processors",
    "name,service,country,data,contract,tone,review,activities",
    (r) => ({
      name: String(r.name), service: String(r.service ?? ""), country: String(r.country ?? ""),
      data: String(r.data ?? ""), contract: String(r.contract ?? ""), tone: r.tone as Processor["tone"],
      review: String(r.review ?? ""), activities: Number(r.activities ?? 0),
    }),
    PROCESSOR_FIXTURES,
  );
  return { processors: rows, live };
}

export function useContracts() {
  const { rows, live } = useRegister<Contract>(
    "contracts",
    "processor,signed,expires,have,status,tone",
    (r) => ({
      processor: String(r.processor), signed: String(r.signed ?? ""), expires: String(r.expires ?? ""),
      have: Number(r.have ?? 0), status: String(r.status ?? ""), tone: r.tone as Contract["tone"],
    }),
    CONTRACT_FIXTURES,
  );
  return { contracts: rows, live };
}

export function useRetention() {
  const { rows, live } = useRegister<RetentionRow>(
    "retention_schedule",
    "record,period,source,disposal,next,status",
    (r) => ({
      record: String(r.record), period: String(r.period ?? ""), source: String(r.source ?? ""),
      disposal: String(r.disposal ?? ""), next: String(r.next ?? ""), status: r.status as RetentionRow["status"],
    }),
    RETENTION_FIXTURES,
  );
  return { retention: rows, live };
}

export function useSensitive() {
  const { rows, live } = useRegister<SensitiveRow>(
    "sensitive_data",
    "cat,activity,subjects,n,basis,access,status,masked",
    (r) => ({
      cat: String(r.cat), activity: String(r.activity ?? ""), subjects: String(r.subjects ?? ""),
      n: String(r.n ?? ""), basis: String(r.basis ?? ""), access: String(r.access ?? ""),
      status: r.status as SensitiveRow["status"], masked: Boolean(r.masked),
    }),
    SENSITIVE_FIXTURES,
  );
  return { sensitive: rows, live };
}

export function usePolicies() {
  const { rows, live } = useRegister<Policy>(
    "policies",
    "name,version,owner,approved,next,controls,status",
    (r) => ({
      name: String(r.name), version: String(r.version ?? ""), owner: String(r.owner ?? ""),
      approved: String(r.approved ?? ""), next: String(r.next ?? ""), controls: Number(r.controls ?? 0),
      status: r.status as Policy["status"],
    }),
    POLICY_FIXTURES,
  );
  return { policies: rows, live };
}

export function useEvidence() {
  const { rows, live } = useRegister<Evidence>(
    "evidence",
    "name,kind,controls,owner,added,expiry,strength,size",
    (r) => ({
      name: String(r.name), kind: String(r.kind ?? ""), controls: Number(r.controls ?? 0),
      owner: String(r.owner ?? ""), added: String(r.added ?? ""), expiry: String(r.expiry ?? ""),
      strength: r.strength as Evidence["strength"], size: String(r.size ?? ""),
    }),
    EVIDENCE_FIXTURES,
  );
  return { evidence: rows, live };
}

export function useAudit() {
  const { rows, live } = useRegister<AuditRow>(
    "audit_log",
    "t,who,role,action,object,from_val,to_val,ip,created_at",
    (r) => ({
      t: String(r.t ?? ""), who: String(r.who ?? ""), role: String(r.role ?? ""), action: String(r.action ?? ""),
      object: String(r.object ?? ""), from: String(r.from_val ?? ""), to: String(r.to_val ?? ""), ip: String(r.ip ?? ""),
    }),
    AUDIT_FIXTURES,
    { col: "created_at", ascending: false },
  );
  return { audit: rows, live };
}

// --- Audit logging -------------------------------------------------------
const TABLE_LABEL: Record<string, string> = {
  activities: "processing activity", sensitive_data: "sensitive category", retention_schedule: "retention record",
  transfers: "transfer", rights_requests: "rights request", consent_records: "consent record",
  processors: "processor", contracts: "contract", policies: "policy", evidence: "evidence document", incidents: "incident",
};

type AuditClient = { from: (t: string) => { insert: (v: unknown) => Promise<{ error: unknown }> } };

/** Append one entry to the org's audit trail. Best-effort: never blocks or
 *  throws into the caller. */
export async function logAudit(
  client: unknown,
  orgId: string,
  who: string,
  entry: { action: string; object?: string; from?: string; to?: string; role?: string },
): Promise<void> {
  try {
    const now = new Date();
    const t = `${now.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}, ${now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}`;
    await (client as AuditClient).from("audit_log").insert({
      org_id: orgId, t, who: who || "—", role: entry.role || "Member", action: entry.action,
      object: entry.object ?? null, from_val: entry.from ?? null, to_val: entry.to ?? null, ip: "—",
    });
  } catch {
    /* audit logging must never break the primary action */
  }
}

export function useRights() {
  const { rows, live } = useRegister<RightsRequest>(
    "rights_requests",
    "code,subject,type,received,days,stage,verified,activity,owner,channel",
    (r) => ({
      id: String(r.code), subject: String(r.subject ?? ""), type: String(r.type ?? ""), received: String(r.received ?? ""),
      days: Number(r.days ?? 0), stage: String(r.stage ?? ""), verified: Boolean(r.verified),
      activity: String(r.activity ?? ""), owner: String(r.owner ?? ""), channel: String(r.channel ?? ""),
    }),
    REQUEST_FIXTURES,
  );
  return { requests: rows, live };
}

export function useConsent() {
  const { rows, live } = useRegister<ConsentRow>(
    "consent_records",
    "purpose,version,method,held,withdrawn,updated,status",
    (r) => ({
      purpose: String(r.purpose), version: String(r.version ?? ""), method: String(r.method ?? ""),
      held: String(r.held ?? ""), withdrawn: String(r.withdrawn ?? ""), updated: String(r.updated ?? ""),
      status: r.status as ConsentRow["status"],
    }),
    CONSENT_FIXTURES,
  );
  return { consent: rows, live };
}

export function useIncidents() {
  const inc = useRegister<Incident>(
    "incidents",
    "code,title,detected,severity,stage,records,notified,source",
    (r) => ({
      id: String(r.code), title: String(r.title ?? ""), detected: String(r.detected ?? ""),
      severity: r.severity as Incident["severity"], stage: String(r.stage ?? ""), records: String(r.records ?? ""),
      notified: Boolean(r.notified), source: String(r.source ?? ""),
    }),
    INCIDENT_FIXTURES,
  );
  const tl = useRegister<TimelineEntry>(
    "incident_timeline",
    "t,label,who,state,note",
    (r) => ({
      t: String(r.t ?? ""), label: String(r.label ?? ""), who: String(r.who ?? ""),
      state: r.state as TimelineEntry["state"], note: String(r.note ?? ""),
    }),
    TIMELINE_FIXTURES,
  );
  return { incidents: inc.rows, timeline: tl.rows, live: inc.live };
}

export function useTransfers() {
  const { rows, live } = useRegister<Transfer>(
    "transfers",
    "code,dest,processor,data,volume,basis,status,tone,owner,note",
    (r) => ({
      id: String(r.code), dest: String(r.dest ?? ""), processor: String(r.processor ?? ""), data: String(r.data ?? ""),
      volume: String(r.volume ?? ""), basis: String(r.basis ?? ""), status: String(r.status ?? ""),
      tone: r.tone as Transfer["tone"], owner: String(r.owner ?? ""), note: String(r.note ?? ""),
    }),
    TRANSFER_FIXTURES,
  );
  return { transfers: rows, live };
}

/** All organisations the consultant can see (for the portfolio). */
export function useOrganisations() {
  const { client, userId, ready } = useAuth();
  const [orgs, setOrgs] = useState<Client[]>([]);
  const [source, setSource] = useState<Source>("loading");

  useEffect(() => {
    if (!ready) return;
    if (!client || !userId) {
      setOrgs(CLIENT_FIXTURES);
      setSource("fixtures");
      return;
    }
    let cancelled = false;
    client
      .from("organisations")
      .select("name,sector,coverage_pct,open_tasks,critical_risks,next_review")
      .order("coverage_pct", { ascending: true })
      .then(({ data, error }) => {
        if (cancelled || error || !data) {
          if (!cancelled) { setOrgs([]); setSource("live"); }
          return;
        }
        setOrgs(
          (data as unknown as Array<Record<string, unknown>>).map((r) => ({
            name: String(r.name),
            sector: String(r.sector ?? ""),
            pct: Number(r.coverage_pct ?? 0),
            tasks: Number(r.open_tasks ?? 0),
            crit: Number(r.critical_risks ?? 0),
            review: String(r.next_review ?? ""),
          })),
        );
        setSource("live");
      });
    return () => {
      cancelled = true;
    };
  }, [client, userId, ready]);

  return { orgs, source, live: source === "live" };
}

/**
 * Live "needs attention" counts for the sidebar badges, keyed by screen id.
 * Each count reflects the active org's own records; an empty org yields zeros
 * (the badge is then hidden), so the numbers always match the section content.
 */
export function useNavCounts(): Partial<Record<string, number>> {
  const { tasks } = useTasks();
  const { requests } = useRights();
  const { sensitive } = useSensitive();
  const { transfers } = useTransfers();
  const { processors } = useProcessors();
  const { contracts } = useContracts();
  const { policies } = usePolicies();

  return {
    tasks: tasks.filter((t) => t.status !== "Completed" && t.status !== "Cancelled").length,
    rights: requests.filter((r) => r.stage !== "Closed").length,
    sensitive: sensitive.filter((s) => s.status !== "Complete").length,
    transfers: transfers.filter((t) => t.tone !== "good").length,
    processors: processors.filter((p) => p.tone !== "good").length,
    contracts: contracts.filter((c) => c.tone !== "good").length,
    policies: policies.filter((p) => p.status !== "Current").length,
  };
}

export interface OrgMember { userId: string; email: string; role: string; isYou: boolean; }
export interface OrgInvite { id: string; email: string; role: string; status: string; }

// Loose rpc signature that keeps `this` bound (call as a member of the client).
type RpcClient = { rpc: (fn: string, args: Record<string, unknown>) => Promise<{ data: unknown; error: { message: string } | null }> };

/** Team, invitations and workspace administration for the Settings module. */
export function useOrgAdmin() {
  const { client, email } = useAuth();
  const { org } = useActiveOrg();
  const dataRev = useUI((s) => s.dataRev);
  const [members, setMembers] = useState<OrgMember[]>([]);
  const [invites, setInvites] = useState<OrgInvite[]>([]);

  useEffect(() => {
    if (!client || !org) { setMembers([]); setInvites([]); return; }
    let cancelled = false;
    (client as unknown as RpcClient).rpc("list_org_members", { p_org: org.id }).then(({ data }) => {
      if (cancelled || !data) return;
      setMembers((data as Array<{ user_id: string; email: string; role: string; is_you: boolean }>).map((r) => ({ userId: r.user_id, email: r.email, role: r.role, isYou: r.is_you })));
    });
    client.from("org_invitations").select("id,email,role,status").eq("org_id", org.id).order("created_at", { ascending: true }).then(({ data }) => {
      if (cancelled || !data) return;
      setInvites((data as unknown as Array<{ id: string; email: string; role: string; status: string }>).map((r) => ({ id: r.id, email: r.email, role: r.role, status: r.status })));
    });
    return () => { cancelled = true; };
  }, [client, org, dataRev]);

  const updateProfile = useCallback(async (name: string, sector: string) => {
    if (!client || !org) return { ok: false, error: "No active workspace." };
    const { error } = await client.from("organisations").update({ name, sector: sector || null } as never).eq("id", org.id);
    if (error) return { ok: false, error: error.message };
    logAudit(client, org.id, email ?? "", { action: "Updated organisation profile", object: name, role: "DPO" });
    resetOrgCache(); useUI.getState().bumpData(); return { ok: true };
  }, [client, org, email]);

  const setRole = useCallback(async (userId: string, role: string) => {
    if (!client || !org) return { ok: false, error: "No active workspace." };
    const { error } = await client.from("organisation_members").update({ role } as never).eq("org_id", org.id).eq("user_id", userId);
    if (error) return { ok: false, error: error.message };
    logAudit(client, org.id, email ?? "", { action: "Changed member role", object: userId, to: role, role: "DPO" });
    useUI.getState().bumpData(); return { ok: true };
  }, [client, org, email]);

  const removeMember = useCallback(async (userId: string) => {
    if (!client || !org) return { ok: false, error: "No active workspace." };
    const { error } = await client.from("organisation_members").delete().eq("org_id", org.id).eq("user_id", userId);
    if (error) return { ok: false, error: error.message };
    logAudit(client, org.id, email ?? "", { action: "Removed member", object: userId, role: "DPO" });
    useUI.getState().bumpData(); return { ok: true };
  }, [client, org, email]);

  const invite = useCallback(async (inviteEmail: string, role: string) => {
    if (!client || !org) return { ok: false, error: "No active workspace." };
    const { error } = await client.from("org_invitations").insert({ org_id: org.id, email: inviteEmail, role, status: "pending" } as never);
    if (error) return { ok: false, error: error.message };
    logAudit(client, org.id, email ?? "", { action: "Invited member", object: inviteEmail, to: role, role: "DPO" });
    useUI.getState().bumpData(); return { ok: true };
  }, [client, org, email]);

  const cancelInvite = useCallback(async (id: string) => {
    if (!client || !org) return { ok: false, error: "No active workspace." };
    const { error } = await client.from("org_invitations").delete().eq("org_id", org.id).eq("id", id);
    if (error) return { ok: false, error: error.message };
    logAudit(client, org.id, email ?? "", { action: "Cancelled invitation", object: id, role: "DPO" });
    useUI.getState().bumpData(); return { ok: true };
  }, [client, org, email]);

  const deleteWorkspace = useCallback(async () => {
    if (!client || !org) return { ok: false, error: "No active workspace." };
    const { error } = await (client as unknown as RpcClient).rpc("delete_org", { p_org: org.id });
    if (error) return { ok: false, error: error.message };
    resetOrgCache(); return { ok: true };
  }, [client, org]);

  const leaveWorkspace = useCallback(async (userId: string) => {
    if (!client || !org) return { ok: false, error: "No active workspace." };
    const { error } = await client.from("organisation_members").delete().eq("org_id", org.id).eq("user_id", userId);
    if (error) return { ok: false, error: error.message };
    resetOrgCache(); return { ok: true };
  }, [client, org]);

  return { members, invites, updateProfile, setRole, removeMember, invite, cancelInvite, deleteWorkspace, leaveWorkspace };
}
