"use client";

import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { ACTIVITIES, INVENTORY_STATS } from "@/lib/data/inventory";
import { STATUS_TO_TONE, TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

export function InventoryScreen() {
  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={INVENTORY_STATS} />

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Processing activities</h2>
          <div className="flex items-center gap-[7px] rounded-lg border border-line bg-panel px-2.5 py-1.5">
            <Icon name="filter" size={13} className="text-ink-faint" />
            <span className="text-[11.5px] text-ink-muted">All departments</span>
          </div>
          <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="plus" size={14} className="flex-none" />
            Add activity
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1020px] text-[12.5px]">
            <thead>
              <tr>
                <th className={`${TH} pl-5`}>Activity</th>
                <th className={TH}>Data subjects</th>
                <th className={TH}>Categories</th>
                <th className={TH}>Lawful basis</th>
                <th className={TH}>Systems</th>
                <th className={TH}>Retention</th>
                <th className={`${TH} pr-5`}>Record</th>
              </tr>
            </thead>
            <tbody>
              {ACTIVITIES.map((a) => {
                const tone = TONE3[STATUS_TO_TONE[a.status]];
                return (
                  <tr
                    key={a.id}
                    onClick={() => {
                      useUI.getState().go("map");
                      useUI.getState().flash(`Opened ${a.name} on the data map.`);
                    }}
                    className="cursor-pointer border-b border-ground align-top hover:bg-[#fbfcfc]"
                  >
                    <td className="px-5 py-3">
                      <div className="font-medium">{a.name}</div>
                      <div className="mt-1 flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[10.5px] text-ink-faint">{a.id}</span>
                        <span className="text-[10.5px] text-ink-muted">{a.dept}</span>
                        {a.sensitive && (
                          <span className="rounded bg-crit-bg px-[5px] py-px text-[9.5px] font-bold tracking-[0.3px] text-crit-fg">SENSITIVE</span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-3 text-ink-mid">{a.subjects}</td>
                    <td className="max-w-[210px] px-3 py-3 text-ink-muted [text-wrap:pretty]">{a.cats}</td>
                    <td className="px-3 py-3 text-ink-mid">{a.basis}</td>
                    <td className="px-3 py-3 text-ink-muted">
                      <div>{a.systems}</div>
                      {a.country !== "Tanzania" && (
                        <div className="mt-1 inline-flex items-center gap-1 text-[10.5px] font-semibold text-high-fg">
                          <Icon name="globe" size={11} />
                          {a.country}
                        </div>
                      )}
                    </td>
                    <td className="max-w-[170px] px-3 py-3 text-ink-muted [text-wrap:pretty]">{a.retention}</td>
                    <td className="px-5 py-3">
                      <Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{a.status}</Pill>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55] text-ink-mid">
          Sections 22 to 26 turn on purpose, necessity and disclosure, which are questions about a specific activity
          rather than the organisation as a whole. A record marked <strong>Gap</strong> is missing at least one field the
          assessment needs.
        </p>
      </div>
    </div>
  );
}
