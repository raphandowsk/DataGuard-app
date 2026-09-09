"use client";

import { useFrameworkSummary } from "@/lib/supabase/useFramework";

/**
 * Small indicator of where the framework figures come from. Green pulse = live
 * from Supabase, grey = local fixtures (env not set), amber = query error.
 */
export function LiveBadge() {
  const s = useFrameworkSummary();
  const map = {
    live: { dot: "#16775a", label: "Live", bg: "#e3f2ea", fg: "#12503c" },
    loading: { dot: "#93a1a4", label: "Connecting…", bg: "#f2f5f5", fg: "#5b6b6e" },
    unconfigured: { dot: "#93a1a4", label: "Local fixtures", bg: "#f2f5f5", fg: "#5b6b6e" },
    error: { dot: "#a4501f", label: "Data error", bg: "#f8ece1", fg: "#8a4d1f" },
  } as const;
  const v = map[s.status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10.5px] font-semibold"
      style={{ background: v.bg, color: v.fg }}
      title={s.status === "error" ? s.error : undefined}
    >
      <span className="h-[6px] w-[6px] rounded-full" style={{ background: v.dot }} />
      {v.label}
    </span>
  );
}
