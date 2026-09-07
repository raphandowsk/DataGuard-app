"use client";

import { Icon } from "@/components/ui/Icon";
import { severityOf } from "@/lib/data/risks";
import { RISK_COUNTS } from "@/lib/data/dashboard";
import { RISK_TONE } from "@/lib/tokens";
import { useRisks } from "@/lib/supabase/operational";
import { useUI } from "@/lib/store";

function cellTone(sc: number) {
  if (sc >= 15) return { bg: "#fbe7e4", fg: "#8e2b22" };
  if (sc >= 10) return { bg: "#f8ece1", fg: "#a4501f" };
  if (sc >= 5) return { bg: "#fbf5e0", fg: "#7a6212" };
  return { bg: "#eef1e7", fg: "#4d5c38" };
}

export function RisksScreen() {
  const goControl = useUI((s) => s.goControl);
  const { risks, live } = useRisks();

  const rows = risks.map((r) => {
    const score = r.l * r.i;
    const sev = severityOf(score);
    const tone = RISK_TONE[sev];
    return { ...r, score, sev, sevLabel: sev.charAt(0) + sev.slice(1).toLowerCase(), tone };
  });

  const matrixRows = [5, 4, 3, 2, 1].map((i) => ({
    i,
    cells: [1, 2, 3, 4, 5].map((l) => {
      const t = cellTone(l * i);
      const count = risks.filter((r) => r.l === l && r.i === i).length;
      return { ...t, count: count || null };
    }),
  }));

  return (
    <div className="flex animate-fade flex-col gap-4">
      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55] text-ink-mid">
          <strong>Product risk scoring methodology.</strong> Severity is likelihood × impact on a 5×5 scale set by
          DataGuard. It is not a statutory classification under the Personal Data Protection Act, 2022 and does not
          correspond to any penalty in the Act.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,1fr)]">
        <section className="overflow-hidden rounded-card border border-line bg-surface">
          <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
            <h2 className="m-0 flex-1 text-[13px] font-semibold">Risk register</h2>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10.5px] font-semibold"
              style={live ? { background: "#e3f2ea", color: "#12503c" } : { background: "#f2f5f5", color: "#5b6b6e" }}
            >
              <span className="h-[6px] w-[6px] rounded-full" style={{ background: live ? "#16775a" : "#93a1a4" }} />
              {live ? "Live · Supabase" : "Local fixtures"}
            </span>
            <div className="flex items-center gap-[7px] rounded-lg border border-line bg-panel px-[9px] py-[5px]">
              <Icon name="filter" size={13} className="text-ink-faint" />
              <span className="text-[11.5px] text-ink-muted">All domains</span>
            </div>
            <span className="text-[11.5px] text-ink-muted">{risks.length} open</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-[12.5px]">
              <thead>
                <tr className="[&>th]:border-b [&>th]:border-line [&>th]:text-[10.5px] [&>th]:font-bold [&>th]:uppercase [&>th]:tracking-[0.5px] [&>th]:text-ink-faint">
                  <th className="px-5 py-2.5 text-left">Risk</th>
                  <th className="px-3 py-2.5 text-left">Domain</th>
                  <th className="px-2 py-2.5 text-center">L</th>
                  <th className="px-2 py-2.5 text-center">I</th>
                  <th className="px-2 py-2.5 text-center">Score</th>
                  <th className="px-3 py-2.5 text-left">Severity</th>
                  <th className="px-3 py-2.5 text-left">Owner</th>
                  <th className="px-5 py-2.5 text-left">Due</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} onClick={() => goControl(r.control)} className="cursor-pointer border-b border-ground hover:bg-[#fbfcfc]">
                    <td className="px-5 py-3">
                      <div className="max-w-[34ch] font-medium [text-wrap:pretty]">{r.title}</div>
                      <div className="mt-[3px] font-mono text-[10.5px] text-ink-faint">{r.id} · {r.control}</div>
                    </td>
                    <td className="px-3 py-3 text-ink-muted">{r.domain}</td>
                    <td className="tnum px-2 py-3 text-center">{r.l}</td>
                    <td className="tnum px-2 py-3 text-center">{r.i}</td>
                    <td className="tnum px-2 py-3 text-center font-semibold">{r.score}</td>
                    <td className="px-3 py-3">
                      <span className="inline-flex items-center gap-1 rounded-full px-[9px] py-0.5 text-[11px] font-semibold" style={{ color: r.tone.color, background: r.tone.bg }}>
                        <Icon name={r.tone.icon} size={11} />
                        {r.sevLabel}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-ink-muted">{r.owner}</td>
                    <td className="px-5 py-3" style={{ color: r.overdue ? "#b23a2f" : "#5b6b6e" }}>{r.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-card border border-line bg-surface p-5">
          <h2 className="m-0 mb-[3px] text-[13px] font-semibold">Likelihood × impact</h2>
          <p className="m-0 mb-4 text-[11.5px] text-ink-muted">Open risks plotted on the product 5×5 scale</p>
          <div className="flex gap-2">
            <div className="grid place-items-center py-1 text-[10px] font-bold tracking-[0.7px] text-ink-faint [writing-mode:vertical-rl] [transform:rotate(180deg)]">
              IMPACT
            </div>
            <div className="min-w-0 flex-1">
              {matrixRows.map((row) => (
                <div key={row.i} className="mb-1 grid grid-cols-[18px_repeat(5,1fr)] gap-1">
                  <div className="tnum grid place-items-center text-[10.5px] text-ink-faint">{row.i}</div>
                  {row.cells.map((c, ci) => (
                    <div key={ci} className="grid aspect-[1.35] place-items-center rounded-[7px]" style={{ background: c.bg }}>
                      {c.count && <span className="tnum text-[12px] font-bold" style={{ color: c.fg }}>{c.count}</span>}
                    </div>
                  ))}
                </div>
              ))}
              <div className="mt-0.5 grid grid-cols-[18px_repeat(5,1fr)] gap-1">
                <div />
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="tnum text-center text-[10.5px] text-ink-faint">{n}</div>
                ))}
              </div>
              <div className="mt-1.5 text-center text-[10px] font-bold tracking-[0.7px] text-ink-faint">LIKELIHOOD</div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5 border-t border-ground pt-3.5">
            {RISK_COUNTS.map((r) => (
              <div key={r.label} className="flex items-center gap-1.5">
                <span className="h-[9px] w-[9px] rounded-[3px]" style={{ background: r.color }} />
                <span className="text-[11.5px] text-ink-muted">{r.label} {r.range}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
