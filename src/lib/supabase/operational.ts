"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./auth";
import { TASKS as TASK_FIXTURES, type Task } from "@/lib/data/tasks";
import { RISKS as RISK_FIXTURES, type Risk } from "@/lib/data/risks";
import { CLIENTS as CLIENT_FIXTURES, type Client } from "@/lib/data/portfolio";

export type Source = "loading" | "live" | "fixtures";

interface ActiveOrg {
  id: string;
  slug: string;
  name: string;
}

/** Resolves the signed-in user's primary tenant (Mazingira Trust). */
export function useActiveOrg(): { org: ActiveOrg | null; source: Source } {
  const { client, userId, ready } = useAuth();
  const [org, setOrg] = useState<ActiveOrg | null>(null);
  const [source, setSource] = useState<Source>("loading");

  useEffect(() => {
    if (!ready) return;
    if (!client || !userId) {
      setOrg(null);
      setSource("fixtures");
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
