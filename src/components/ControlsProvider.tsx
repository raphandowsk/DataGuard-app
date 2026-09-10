"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CONTROLS as FIXTURE, type Control } from "@/lib/data/controls";
import { fetchControls } from "@/lib/supabase/controls";

type Status = "loading" | "live" | "fixtures" | "error";

interface ControlsValue {
  status: Status;
  error: string | null;
  list: Control[]; // all controls, matrix order
  section27: Control[]; // the assessment queue
  byId: Record<string, Control>;
  total: number;
}

const ControlsContext = createContext<ControlsValue | null>(null);

export function ControlsProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ status: Status; error: string | null; list: Control[] }>({
    status: "loading",
    error: null,
    list: FIXTURE,
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const rows = await fetchControls();
        if (cancelled) return;
        if (!rows) {
          setState({ status: "fixtures", error: null, list: FIXTURE });
          return;
        }
        setState({ status: "live", error: null, list: rows });
      } catch (e) {
        if (!cancelled) setState({ status: "fixtures", error: e instanceof Error ? e.message : String(e), list: FIXTURE });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<ControlsValue>(() => {
    const byId: Record<string, Control> = {};
    for (const c of state.list) byId[c.id] = c;
    // Assessment queue = Section 27 by section_number (live rows), or the
    // Section-27 fixture slice when running on fixtures (no section field).
    const section27 = state.list.filter((c) => (c.section ? c.section === "27" : c.id.startsWith("PDPA-027")));
    return {
      status: state.error && state.status === "fixtures" ? "error" : state.status,
      error: state.error,
      list: state.list,
      section27: section27.length ? section27 : state.list,
      byId,
      total: state.list.length,
    };
  }, [state]);

  return <ControlsContext.Provider value={value}>{children}</ControlsContext.Provider>;
}

export function useControls(): ControlsValue {
  const v = useContext(ControlsContext);
  if (!v) throw new Error("useControls must be used within ControlsProvider");
  return v;
}
