"use client";

import { useEffect, useState } from "react";
import { getSupabaseBrowser } from "./client";

const FRAMEWORK_CODE = "TZ-PDPA";
const VERSION_CODE = "2022";

export interface FrameworkSummary {
  code: string;
  name: string;
  matrixVersion: string;
  controls: number;
  requirements: number;
  sections: number;
  parts: number;
}

type State =
  | { status: "loading" | "unconfigured" }
  | { status: "error"; error: string }
  | { status: "live"; data: FrameworkSummary };

/**
 * Reads the live framework summary from Supabase. The result carries a status so
 * the UI can show a "Live · Supabase" indicator, fall back to fixtures when the
 * project is not configured, or surface an error without breaking the page.
 */
export function useFrameworkSummary(): State {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    const sb = getSupabaseBrowser();
    if (!sb) {
      setState({ status: "unconfigured" });
      return;
    }
    let cancelled = false;

    (async () => {
      try {
        const base = { framework_code: FRAMEWORK_CODE, version_code: VERSION_CODE } as const;
        const head = { count: "exact" as const, head: true };
        const [fw, controls, requirements, sections, parts] = await Promise.all([
          sb.from("frameworks").select("code,name").eq("code", FRAMEWORK_CODE).maybeSingle(),
          sb.from("framework_controls").select("control_id", head).match(base),
          sb.from("framework_requirements").select("requirement_id", head).match(base),
          sb.from("framework_sections").select("section_number", head).match(base),
          sb.from("framework_parts").select("part_number", head).match(base),
        ]);
        const version = await sb
          .from("framework_versions")
          .select("matrix_version")
          .match(base)
          .maybeSingle();

        if (cancelled) return;
        const firstError = fw.error || controls.error || requirements.error || sections.error || parts.error;
        if (firstError) {
          setState({ status: "error", error: firstError.message });
          return;
        }
        const fwData = fw.data as unknown as { code: string; name: string } | null;
        const verData = version.data as unknown as { matrix_version: string | null } | null;
        setState({
          status: "live",
          data: {
            code: fwData?.code ?? FRAMEWORK_CODE,
            name: fwData?.name ?? "Personal Data Protection Act",
            matrixVersion: verData?.matrix_version ?? "1.0.0",
            controls: controls.count ?? 0,
            requirements: requirements.count ?? 0,
            sections: sections.count ?? 0,
            parts: parts.count ?? 0,
          },
        });
      } catch (e) {
        if (!cancelled) setState({ status: "error", error: e instanceof Error ? e.message : String(e) });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
