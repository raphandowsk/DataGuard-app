"use client";

import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { POLICIES, POLICY_STATS } from "@/lib/data/records";
import { TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

export function PoliciesScreen() {
  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={POLICY_STATS} />

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Policies and procedures</h2>
          <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="plus" size={14} className="flex-none" />
            Add policy
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[840px] text-[12.5px]">
            <thead>
              <tr>
                <th className={`${TH} pl-5`}>Policy</th>
                <th className={TH}>Version</th>
                <th className={TH}>Owner</th>
                <th className={TH}>Approved</th>
                <th className={TH}>Next review</th>
                <th className={`${TH} text-center`}>Controls</th>
                <th className={`${TH} pr-5`}>Status</th>
              </tr>
            </thead>
            <tbody>
              {POLICIES.map((p) => {
                const tone = TONE3[p.status === "Current" ? "good" : p.status === "Draft" ? "warn" : "bad"];
                return (
                  <tr
                    key={p.name}
                    onClick={() => useUI.getState().flash(`${p.name} ${p.version} — supports ${p.controls} controls.`)}
                    className="cursor-pointer border-b border-ground hover:bg-[#fbfcfc]"
                  >
                    <td className="px-5 py-3 font-medium">{p.name}</td>
                    <td className="px-3 py-3 text-ink-mid">{p.version}</td>
                    <td className="px-3 py-3 text-ink-muted">{p.owner}</td>
                    <td className="px-3 py-3 text-ink-muted">{p.approved}</td>
                    <td className="px-3 py-3 font-medium" style={{ color: p.next.includes("Overdue") ? "#b23a2f" : "#5b6b6e" }}>{p.next}</td>
                    <td className="tnum px-3 py-3 text-center font-medium">{p.controls}</td>
                    <td className="px-5 py-3">
                      <Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{p.status}</Pill>
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
