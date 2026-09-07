"use client";

import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { RETENTION_NOTE, RETENTION_STATS } from "@/lib/data/retention";
import { useRetention } from "@/lib/supabase/operational";
import { STATUS_TO_TONE, TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

export function RetentionScreen() {
  const { retention, live } = useRetention();
  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={RETENTION_STATS} />

      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55] text-ink-mid">{RETENTION_NOTE}</p>
      </div>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Schedule</h2>
          <SourcePill live={live} />
          <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="plus" size={14} className="flex-none" />
            Add record type
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-[12.5px]">
            <thead>
              <tr>
                <th className={`${TH} pl-5`}>Record type</th>
                <th className={TH}>Retention period</th>
                <th className={TH}>Where the period comes from</th>
                <th className={TH}>Disposal</th>
                <th className={TH}>Next review</th>
                <th className={`${TH} pr-5`}>Record</th>
              </tr>
            </thead>
            <tbody>
              {retention.map((r) => {
                const tone = TONE3[STATUS_TO_TONE[r.status]];
                const noLaw = r.source.includes("no statutory source") || r.source.includes("no fixed period");
                return (
                  <tr
                    key={r.record}
                    onClick={() => useUI.getState().flash(`${r.record} — ${r.period}`)}
                    className="cursor-pointer border-b border-ground align-top hover:bg-[#fbfcfc]"
                  >
                    <td className="px-5 py-3 font-medium">{r.record}</td>
                    <td className="px-3 py-3 text-ink-mid">{r.period}</td>
                    <td className="max-w-[230px] px-3 py-3 [text-wrap:pretty]">
                      <div className="text-ink-muted">{r.source}</div>
                      {noLaw && (
                        <div className="mt-1 inline-flex items-center gap-1 text-[10.5px] font-semibold text-high-fg">
                          <Icon name="triangle-alert" size={11} />
                          No statutory source
                        </div>
                      )}
                    </td>
                    <td className="max-w-[160px] px-3 py-3 text-ink-muted [text-wrap:pretty]">{r.disposal}</td>
                    <td className="px-3 py-3 font-medium" style={{ color: r.next === "Overdue" ? "#b23a2f" : "#5b6b6e" }}>{r.next}</td>
                    <td className="px-5 py-3">
                      <Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{r.status}</Pill>
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
