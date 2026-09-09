"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { LiveBadge } from "@/components/ui/LiveBadge";
import { useControls } from "@/components/ControlsProvider";
import { RISK_TONE } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

type StatusFilter = "all" | "assessed" | "unassessed" | "gaps";

const STATUS_TONE: Record<string, { color: string; bg: string }> = {
  Implemented: { color: "#12503c", bg: "#e3f2ea" },
  "Partially implemented": { color: "#8a4d1f", bg: "#f8ece1" },
  "Not implemented": { color: "#8e2b22", bg: "#fbe7e4" },
  "Not applicable": { color: "#5b6b6e", bg: "#f2f5f5" },
  "I do not know": { color: "#5b6b6e", bg: "#f2f5f5" },
};

export function ControlsScreen() {
  const { list, total } = useControls();
  const goControl = useUI((s) => s.goControl);
  const answers = useUI((s) => s.answers);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [domain, setDomain] = useState("all");

  const domains = useMemo(() => {
    const set: string[] = [];
    for (const c of list) {
      const k = c.category || "Other";
      if (!set.includes(k)) set.push(k);
    }
    return set.sort();
  }, [list]);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return list.filter((c) => {
      if (domain !== "all" && (c.category || "Other") !== domain) return false;
      const a = answers[c.id];
      if (status === "assessed" && !a) return false;
      if (status === "unassessed" && a) return false;
      if (status === "gaps" && a !== "Not implemented" && a !== "Partially implemented") return false;
      if (q && !(`${c.id} ${c.title} ${c.ref} ${c.category}`.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [list, query, status, domain, answers]);

  const assessed = list.filter((c) => answers[c.id]).length;

  const chips: Array<{ key: StatusFilter; label: string }> = [
    { key: "all", label: "All" },
    { key: "assessed", label: "Assessed" },
    { key: "unassessed", label: "Not assessed" },
    { key: "gaps", label: "Gaps" },
  ];

  return (
    <div className="flex animate-fade flex-col gap-4">
      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-3 border-b border-line px-5 py-4">
          <div className="flex-1">
            <h2 className="m-0 text-[13px] font-semibold">All controls</h2>
            <p className="m-0 mt-[3px] text-[11.5px] text-ink-muted">{assessed} of {total} assessed · every mapped requirement of the Act</p>
          </div>
          <LiveBadge />
          <div className="flex min-w-[210px] flex-[1_1_210px] items-center gap-[7px] rounded-lg border border-line bg-panel px-2.5 py-1.5">
            <Icon name="search" size={14} className="flex-none text-ink-faint" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by id, title or reference…"
              className="min-w-0 flex-1 bg-transparent text-[12.5px] outline-none placeholder:text-ink-faint"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-b border-line px-5 py-3">
          <div className="flex gap-1.5">
            {chips.map((c) => (
              <button
                key={c.key}
                onClick={() => setStatus(c.key)}
                className={`rounded-full px-3 py-1 text-[11.5px] font-semibold ${status === c.key ? "bg-ink text-white" : "border border-line-strong bg-surface text-ink-muted hover:border-ink-faint"}`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <select
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="ml-auto rounded-lg border border-line-strong bg-surface px-2.5 py-1.5 text-[12px]"
          >
            <option value="all">All domains</option>
            {domains.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-[12.5px]">
            <thead>
              <tr>
                <th className={`${TH} pl-5`}>Control</th>
                <th className={TH}>Domain</th>
                <th className={TH}>Legal reference</th>
                <th className={TH}>Risk</th>
                <th className={`${TH} pr-5`}>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-[12.5px] text-ink-muted">No controls match your filters.</td>
                </tr>
              )}
              {rows.map((c) => {
                const tone = RISK_TONE[c.risk] ?? RISK_TONE.MEDIUM;
                const a = answers[c.id];
                const st = a ? STATUS_TONE[a] ?? STATUS_TONE["I do not know"] : { color: "#5b6b6e", bg: "#f2f5f5" };
                return (
                  <tr
                    key={c.id}
                    onClick={() => goControl(c.id)}
                    className="cursor-pointer border-b border-ground hover:bg-[#fbfcfc]"
                  >
                    <td className="px-5 py-[11px]">
                      <div className="flex items-center gap-2.5">
                        <span className="rounded-[5px] border border-line bg-panel px-1.5 py-0.5 font-mono text-[10.5px] text-ink-muted">{c.id}</span>
                        <span className="font-medium">{c.title}</span>
                      </div>
                    </td>
                    <td className="px-3 py-[11px] text-ink-muted">{c.category}</td>
                    <td className="px-3 py-[11px] text-ink-muted">{c.ref}</td>
                    <td className="px-3 py-[11px]">
                      <span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-bold tracking-[0.4px]" style={{ color: tone.color, background: tone.bg }}>
                        <Icon name={tone.icon} size={11} />
                        {c.risk}
                      </span>
                    </td>
                    <td className="px-5 py-[11px]">
                      <span className="inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ color: st.color, background: st.bg }}>
                        {a ?? "Not assessed"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
