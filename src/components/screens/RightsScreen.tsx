"use client";

import { Icon } from "@/components/ui/Icon";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { REQUEST_STATS, RIGHTS_NOTE } from "@/lib/data/rights";
import { useRights } from "@/lib/supabase/operational";
import { useUI } from "@/lib/store";

export function RightsScreen() {
  const go = useUI((s) => s.go);
  const openPortal = useUI((s) => s.openPortal);
  const { requests, live } = useRights();

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={REQUEST_STATS} />

      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55] text-ink-mid">{RIGHTS_NOTE}</p>
      </div>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Request queue</h2>
          <SourcePill live={live} />
          <button onClick={openPortal} className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line-strong bg-surface px-3 py-[7px] text-[12px] font-semibold hover:border-teal hover:text-teal">
            <Icon name="external-link" size={14} className="flex-none" />
            View public portal
          </button>
          <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="plus" size={14} className="flex-none" />
            Log a request
          </button>
        </div>
        {requests.map((r) => {
          const closed = r.stage === "Closed";
          const dayLabel = closed ? `Closed in ${r.days} days` : r.days <= 0 ? "Received today" : `${r.days} days elapsed`;
          const dayColor = closed ? "#16775a" : r.days >= 9 ? "#b23a2f" : r.days >= 5 ? "#a4501f" : "#5b6b6e";
          const stageColor = closed ? "#16775a" : "#2b5f9e";
          const stageBg = closed ? "#e3f2ea" : "#e8effa";
          return (
            <div key={r.id} className="flex flex-wrap items-center gap-3.5 border-b border-ground px-5 py-3.5">
              <div className="min-w-0 flex-[1_1_300px]">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[13.5px] font-medium">{r.subject}</span>
                  <span className="rounded-full border border-line bg-[#f2f5f5] px-[9px] py-0.5 text-[11px] font-semibold text-ink-mid">{r.type}</span>
                  {r.verified ? (
                    <span className="inline-flex items-center gap-1 rounded bg-good-bg px-1.5 py-0.5 text-[10.5px] font-semibold text-good-fg">
                      <Icon name="user-round-check" size={11} />
                      Verified
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded bg-crit-bg px-1.5 py-0.5 text-[10.5px] font-semibold text-crit-fg">
                      <Icon name="user-round-x" size={11} />
                      Identity not verified
                    </span>
                  )}
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-2.5 text-[11px] text-ink-faint">
                  <span className="rounded border border-line bg-panel px-1.5 py-px font-mono text-[10.5px] text-ink-muted">{r.id}</span>
                  <span>{r.activity}</span>
                  <span>·</span>
                  <span>{r.channel}</span>
                  <span>·</span>
                  <span>{r.owner}</span>
                </div>
              </div>
              <div className="flex-none text-right">
                <div className="tnum text-[12.5px] font-semibold" style={{ color: dayColor }}>{dayLabel}</div>
                <div className="mt-0.5 text-[11px] text-ink-faint">Received {r.received}</div>
              </div>
              <span className="inline-flex flex-none items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-[3px] text-[11px] font-semibold" style={{ color: stageColor, background: stageBg }}>
                {r.stage}
              </span>
              <button
                onClick={() => go("rightsCase")}
                aria-label="Open request"
                className="grid h-8 w-8 flex-none place-items-center rounded-[9px] border border-line bg-surface text-ink-muted hover:border-teal hover:text-teal"
              >
                <Icon name="arrow-up-right" size={15} />
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}
