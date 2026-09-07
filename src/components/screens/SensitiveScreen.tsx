"use client";

import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { SENSITIVE, SENSITIVE_NOTE, SENSITIVE_STATS } from "@/lib/data/sensitive";
import { STATUS_TO_TONE, TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

export function SensitiveScreen() {
  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={SENSITIVE_STATS} />

      <div className="flex items-start gap-[11px] rounded-xl border border-[#f3cec8] bg-crit-bg px-4 py-3">
        <Icon name="shield-alert" size={16} className="mt-px flex-none text-crit-fg" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55]" style={{ color: "#7a2a22" }}>{SENSITIVE_NOTE}</p>
      </div>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Sensitive categories</h2>
          <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="plus" size={14} className="flex-none" />
            Add category
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-[12.5px]">
            <thead>
              <tr>
                <th className={`${TH} pl-5`}>Category</th>
                <th className={TH}>Activity</th>
                <th className={`${TH} text-right`}>Records</th>
                <th className={TH}>Lawful basis</th>
                <th className={TH}>Who can reach it</th>
                <th className={`${TH} pr-5`}>Record</th>
              </tr>
            </thead>
            <tbody>
              {SENSITIVE.map((r) => {
                const tone = TONE3[STATUS_TO_TONE[r.status]];
                return (
                  <tr
                    key={r.cat}
                    onClick={() => useUI.getState().flash(`${r.cat} — basis: ${r.basis}`)}
                    className="cursor-pointer border-b border-ground align-top hover:bg-[#fbfcfc]"
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{r.cat}</span>
                        {r.masked && <Icon name="eye-off" size={12} className="flex-none text-ink-muted" />}
                      </div>
                      <div className="mt-[3px] text-[10.5px] text-ink-faint">{r.subjects}</div>
                    </td>
                    <td className="px-3 py-3 text-ink-muted">{r.activity}</td>
                    <td className="tnum px-3 py-3 text-right font-medium">{r.n}</td>
                    <td className="max-w-[190px] px-3 py-3 [text-wrap:pretty]">
                      <span className={r.masked ? "text-ink-mid" : "font-semibold text-crit-fg"}>{r.basis}</span>
                    </td>
                    <td className="max-w-[180px] px-3 py-3 text-ink-muted [text-wrap:pretty]">{r.access}</td>
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
