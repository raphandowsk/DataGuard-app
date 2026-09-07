"use client";

import { Icon } from "@/components/ui/Icon";
import { StatTiles } from "@/components/ui/StatTiles";
import { EVIDENCE, EVIDENCE_NOTE, EVIDENCE_STATS, evidenceIcon } from "@/lib/data/records";
import { TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

export function EvidenceScreen() {
  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={EVIDENCE_STATS} />

      <div className="flex items-start gap-[11px] rounded-xl border border-[#d3e0f4] bg-info-bg px-4 py-[11px]">
        <Icon name="info" size={16} className="mt-px flex-none text-info-fg" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55]" style={{ color: "#1f4a7d" }}>{EVIDENCE_NOTE}</p>
      </div>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Documents</h2>
          <div className="flex items-center gap-[7px] rounded-lg border border-line bg-panel px-2.5 py-1.5">
            <Icon name="filter" size={13} className="text-ink-faint" />
            <span className="text-[11.5px] text-ink-muted">All types</span>
          </div>
          <button onClick={() => useUI.getState().openEvidence()} className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="upload" size={14} className="flex-none" />
            Upload
          </button>
        </div>
        {EVIDENCE.map((e) => {
          const tone = e.strength === "Strong" ? TONE3.good : e.strength === "Moderate" ? TONE3.warn : TONE3.bad;
          const missing = e.strength === "Missing";
          const expiryColor = e.expiry.includes("Expires") || e.expiry.includes("Superseded") ? "#a4501f" : "#5b6b6e";
          return (
            <div
              key={e.name}
              onClick={() => useUI.getState().flash(`${e.name} — linked to ${e.controls} controls.`)}
              className="flex cursor-pointer flex-wrap items-center gap-3.5 border-b border-ground px-5 py-3.5 hover:bg-[#fbfcfc]"
            >
              <span className="grid h-8 w-8 flex-none place-items-center rounded-[9px]" style={{ background: tone.bg, color: tone.color }}>
                <Icon name={evidenceIcon(e.kind)} size={16} />
              </span>
              <div className="min-w-0 flex-[1_1_260px]">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[13px] font-medium">{e.name}</span>
                  {missing && <span className="rounded bg-crit-bg px-1.5 py-0.5 text-[10px] font-bold tracking-[0.4px] text-crit-fg">REQUIRED, NOT UPLOADED</span>}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2.5 text-[11px] text-ink-faint">
                  <span>{e.kind}</span>
                  <span>·</span>
                  <span>{e.owner}</span>
                  <span>·</span>
                  <span>Added {e.added}</span>
                  <span>·</span>
                  <span>{e.size}</span>
                </div>
              </div>
              <div className="flex flex-none items-center gap-3.5">
                <div className="text-right">
                  <div className="tnum text-[12px] font-semibold">{e.controls}</div>
                  <div className="text-[10.5px] text-ink-faint">controls</div>
                </div>
                <span className="whitespace-nowrap text-[11px]" style={{ color: expiryColor }}>{e.expiry}</span>
                <span className="whitespace-nowrap rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold" style={{ color: tone.color, background: tone.bg }}>{e.strength}</span>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
