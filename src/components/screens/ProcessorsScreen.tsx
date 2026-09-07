"use client";

import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { PROCESSOR_NOTE, PROCESSOR_STATS, PROCESSORS } from "@/lib/data/processors";
import { TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

export function ProcessorsScreen() {
  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={PROCESSOR_STATS} />

      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55] text-ink-mid">{PROCESSOR_NOTE}</p>
      </div>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Processors</h2>
          <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="plus" size={14} className="flex-none" />
            Add processor
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[880px] text-[12.5px]">
            <thead>
              <tr>
                <th className={`${TH} pl-5`}>Processor</th>
                <th className={TH}>Service</th>
                <th className={TH}>Data handled</th>
                <th className={TH}>Location</th>
                <th className={TH}>Contract</th>
                <th className={`${TH} pr-5`}>Security review</th>
              </tr>
            </thead>
            <tbody>
              {PROCESSORS.map((p) => {
                const tone = TONE3[p.tone];
                const cross = p.country !== "Tanzania";
                return (
                  <tr
                    key={p.name}
                    onClick={() => useUI.getState().flash(`${p.name} opened. Contract status: ${p.contract}.`)}
                    className="cursor-pointer border-b border-ground hover:bg-[#fbfcfc]"
                  >
                    <td className="px-5 py-3">
                      <div className="font-medium">{p.name}</div>
                      <div className="mt-[3px] text-[10.5px] text-ink-faint">{p.activities} linked activities</div>
                    </td>
                    <td className="px-3 py-3 text-ink-muted">{p.service}</td>
                    <td className="max-w-[200px] px-3 py-3 text-ink-muted [text-wrap:pretty]">{p.data}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1.5">
                        {cross && <Icon name="globe" size={12} className="flex-none text-high-fg" />}
                        <span className="text-ink-mid">{p.country}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      <Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{p.contract}</Pill>
                    </td>
                    <td className="px-5 py-3 text-ink-muted">{p.review}</td>
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
