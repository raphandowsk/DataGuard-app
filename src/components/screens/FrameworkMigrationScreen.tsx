"use client";

import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { MIGRATION, MIGRATION_NOTE, MIGRATION_STATS } from "@/lib/data/settings";
import { TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

export function FrameworkMigrationScreen() {
  const apply = () => {
    useUI.getState().go("assessment");
    useUI.getState().flash("Matrix v1.1.0 applied. 1 new control and 1 reassessment added to your queue.");
  };

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={MIGRATION_STATS} />

      <section className="flex flex-wrap items-center gap-4 rounded-card border border-line bg-surface px-[22px] py-5">
        <div className="flex items-center gap-3">
          <div className="rounded-[10px] border border-line bg-panel px-3.5 py-2.5">
            <div className="text-[10.5px] text-ink-faint">In use</div>
            <div className="text-[13px] font-semibold">Matrix v1.0.0</div>
          </div>
          <Icon name="arrow-right" size={16} className="flex-none text-ink-faint" />
          <div className="rounded-[10px] border-[1.5px] border-teal bg-teal-bg px-3.5 py-2.5">
            <div className="text-[10.5px] text-teal-dark">Available</div>
            <div className="text-[13px] font-semibold">Matrix v1.1.0</div>
          </div>
        </div>
        <p className="m-0 flex-[1_1_300px] text-[12px] leading-[1.55] text-ink-mid [text-wrap:pretty]">{MIGRATION_NOTE}</p>
        <button onClick={apply} className="flex flex-none items-center gap-[7px] whitespace-nowrap rounded-full bg-teal px-[18px] py-[11px] text-[12.5px] font-semibold text-white hover:bg-teal-dark">
          <Icon name="arrow-up-circle" size={15} className="flex-none" />
          Apply v1.1.0
        </button>
      </section>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="border-b border-line px-5 py-4">
          <h2 className="m-0 text-[13px] font-semibold">Controls that changed</h2>
        </div>
        {MIGRATION.map((m) => {
          const tone = TONE3[m.impact === "Reassessment needed" ? "warn" : m.impact === "Unanswered" ? "bad" : "good"];
          return (
            <div key={m.id} className="flex flex-wrap items-start gap-3.5 border-b border-ground px-5 py-3.5">
              <div className="min-w-0 flex-[1_1_300px]">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded border border-line bg-panel px-1.5 py-px font-mono text-[10.5px] text-ink-muted">{m.id}</span>
                  <span className="text-[13px] font-medium">{m.title}</span>
                  {m.act && <span className="rounded bg-info-bg px-[5px] py-0.5 text-[9.5px] font-bold tracking-[0.3px] text-info-fg">ACT EXPLICIT</span>}
                </div>
                <p className="m-0 mt-1.5 max-w-[84ch] text-[11.5px] leading-[1.55] text-ink-muted [text-wrap:pretty]">{m.detail}</p>
              </div>
              <div className="flex flex-none flex-wrap items-center gap-2.5">
                <span className="whitespace-nowrap rounded-full border border-line bg-panel px-2.5 py-[3px] text-[11px] text-ink-mid">{m.change}</span>
                <Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{m.impact}</Pill>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
