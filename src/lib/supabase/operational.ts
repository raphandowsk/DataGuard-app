"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./auth";
import { TASKS as TASK_FIXTURES, type Task } from "@/lib/data/tasks";
import { RISKS as RISK_FIXTURES, type Risk } from "@/lib/data/risks";
import { CLIENTS as CLIENT_FIXTURES, type Client } from "@/lib/data/portfolio";
import { ACTIVITIES as ACTIVITY_FIXTURES, type Activity } from "@/lib/data/inventory";
import { PROCESSORS as PROCESSOR_FIXTURES, CONTRACTS as CONTRACT_FIXTURES, type Processor, type Contract } from "@/lib/data/processors";
import { RETENTION as RETENTION_FIXTURES, type RetentionRow } from "@/lib/data/retention";
import { SENSITIVE as SENSITIVE_FIXTURES, type SensitiveRow } from "@/lib/data/sensitive";

export type Source = "loading" | "live" | "fixtures";

interface ActiveOrg {
  id: string;
  slug: string;
  name: string;
}

// Session-scoped cache so switching screens doesn't refetch the active org.
let orgCache: { userId: string; org: ActiveOrg | null } | null = null;

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
      .select("id,slug,name")
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
  const { client } = useAuth();
  const { org, source: orgSource } = useActiveOrg();
  const [tasks, setTasks] = useState<Task[]>(TASK_FIXTURES);
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
          if (!cancelled) { setTasks(TASK_FIXTURES); setSource("fixtures"); }
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
  }, [client, org, orgSource]);

  const setStatus = useCallback(
    (code: string, status: Task["status"]) => {
      setTasks((prev) => prev.map((t) => (t.id === code ? { ...t, status } : t)));
      if (client && org) {
        client.from("tasks").update({ status } as never).eq("org_id", org.id).eq("code", code).then(() => {});
      }
    },
    [client, org],
  );

  return { tasks, source, setStatus, live: source === "live" };
}

export function useRisks() {
  const { client } = useAuth();
  const { org, source: orgSource } = useActiveOrg();
  const [risks, setRisks] = useState<Risk[]>(RISK_FIXTURES);
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
          if (!cancelled) { setRisks(RISK_FIXTURES); setSource("fixtures"); }
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
function useRegister<T>(
  table: "activities" | "processors" | "contracts" | "retention_schedule" | "sensitive_data",
  columns: string,
  map: (row: Record<string, unknown>) => T,
  fixture: T[],
) {
  const { client } = useAuth();
  const { org, source: orgSource } = useActiveOrg();
  const [rows, setRows] = useState<T[]>(fixture);
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
      .order("display_order", { ascending: true })
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error || !data) { setRows(fixture); setSource("fixtures"); return; }
        setRows((data as unknown as Array<Record<string, unknown>>).map(map));
        setSource("live");
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client, org, orgSource]);

  return { rows, source, live: source === "live" };
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

/** All organisations the consultant can see (for the portfolio). */
export function useOrganisations() {
  const { client, userId, ready } = useAuth();
  const [orgs, setOrgs] = useState<Client[]>(CLIENT_FIXTURES);
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
          if (!cancelled) { setOrgs(CLIENT_FIXTURES); setSource("fixtures"); }
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
