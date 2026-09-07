"use client";

import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { CLAUSES, CONTRACT_NOTE, CONTRACT_STATS } from "@/lib/data/processors";
import { useContracts } from "@/lib/supabase/operational";
import { TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

export function ContractsScreen() {
  const { contracts, live } = useContracts();
  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={CONTRACT_STATS} />

      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55] text-ink-mid">{CONTRACT_NOTE}</p>
      </div>

      <section className="rounded-card border border-line bg-surface px-[22px] py-[18px]">
        <h2 className="m-0 mb-[11px] text-[13px] font-semibold">The seven clauses tracked</h2>
        <div className="flex flex-wrap gap-[7px]">
          {CLAUSES.map((c) => (
            <span key={c} className="rounded-full border border-line bg-panel px-[11px] py-[5px] text-[11.5px] text-ink-mid">{c}</span>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Contracts by processor</h2>
          <SourcePill live={live} />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-[12.5px]">
            <thead>
              <tr>
                <th className={`${TH} pl-5`}>Processor</th>
                <th className={TH}>Status</th>
                <th className={`${TH} w-[200px]`}>Clause coverage</th>
                <th className={TH}>Signed</th>
                <th className={`${TH} pr-5`}>Expires</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((c) => {
                const tone = TONE3[c.tone];
                const pct = Math.round((c.have / 7) * 100);
                const barColor = c.have === 7 ? "#16775a" : c.have >= 4 ? "#c67139" : "#b23a2f";
                return (
                  <tr
                    key={c.processor}
                    onClick={() => useUI.getState().flash(`${c.processor} — ${c.status}, ${c.have} of 7 clauses present.`)}
                    className="cursor-pointer border-b border-ground hover:bg-[#fbfcfc]"
                  >
                    <td className="px-5 py-3 font-medium">{c.processor}</td>
                    <td className="px-3 py-3">
                      <Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{c.status}</Pill>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2.5">
                        <span className="block h-1.5 min-w-[40px] flex-1 overflow-hidden rounded-full bg-ground">
                          <span className="block h-full" style={{ width: `${pct}%`, background: barColor }} />
                        </span>
                        <span className="tnum whitespace-nowrap text-[11.5px] font-semibold">{c.have} of 7</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-ink-muted">{c.signed}</td>
                    <td className="px-5 py-3 text-ink-muted">{c.expires}</td>
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
