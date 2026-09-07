"use client";

import { Icon } from "@/components/ui/Icon";
import { StatTiles } from "@/components/ui/StatTiles";
import { INC_TIMELINE, INCIDENT_NOTE, INCIDENT_STATS, INCIDENTS } from "@/lib/data/incidents";
import { RISK_TONE } from "@/lib/tokens";
import { useUI } from "@/lib/store";

export function IncidentsScreen() {
  const go = useUI((s) => s.go);

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={INCIDENT_STATS} />

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_400px]">
        <section className="overflow-hidden rounded-card border border-line bg-surface">
          <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
            <h2 className="m-0 flex-1 text-[13px] font-semibold">Incident cases</h2>
            <button onClick={() => go("incidentIntake")} className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-alert px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-crit-fg">
              <Icon name="siren" size={14} className="flex-none" />
              Report a breach
            </button>
          </div>
          {INCIDENTS.map((i) => {
            const tone = RISK_TONE[i.severity];
            const closed = i.stage === "Closed";
            return (
              <div
                key={i.id}
                onClick={() => useUI.getState().flash(`${i.id} opened. ${i.title}`)}
                className="flex cursor-pointer flex-wrap items-center gap-3.5 border-b border-ground px-5 py-3.5 hover:bg-[#fbfcfc]"
              >
                <span className="min-h-[34px] w-[3px] flex-none self-stretch rounded-full" style={{ background: tone.color }} />
                <div className="min-w-0 flex-[1_1_260px]">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-bold tracking-[0.4px]" style={{ color: tone.color, background: tone.bg }}>
                      <Icon name={tone.icon} size={11} />
                      {i.severity}
                    </span>
                    <span className="text-[13.5px] font-medium [text-wrap:pretty]">{i.title}</span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2.5 text-[11px] text-ink-faint">
                    <span className="rounded border border-line bg-panel px-1.5 py-px font-mono text-[10.5px] text-ink-muted">{i.id}</span>
                    <span>Detected {i.detected}</span>
                    <span>·</span>
                    <span>{i.records}</span>
                    <span>·</span>
                    <span>{i.source}</span>
                  </div>
                </div>
                <div className="flex flex-none items-center gap-2.5">
                  <span className="whitespace-nowrap text-[11px] font-medium" style={{ color: i.notified ? "#16775a" : "#5b6b6e" }}>
                    {i.notified ? "Commission notified" : "Assessed as not notifiable"}
                  </span>
                  <span
                    className="whitespace-nowrap rounded-full px-2.5 py-[3px] text-[11px] font-semibold"
                    style={closed ? { color: "#16775a", background: "#e3f2ea" } : { color: "#2b5f9e", background: "#e8effa" }}
                  >
                    {i.stage}
                  </span>
                </div>
              </div>
            );
          })}
        </section>

        <aside className="rounded-card border border-line bg-surface p-[22px] xl:sticky xl:top-[76px]">
          <div className="mb-1 flex flex-wrap items-center gap-2.5">
            <span className="rounded-[5px] border border-line bg-panel px-[7px] py-0.5 font-mono text-[10.5px] text-ink-muted">INC-2026-004</span>
            <span className="rounded bg-high-bg px-1.5 py-0.5 text-[10px] font-bold tracking-[0.4px] text-high-fg">HIGH</span>
          </div>
          <h2 className="m-0 mb-[3px] mt-2 text-[15px] font-semibold leading-[1.35] [text-wrap:pretty]">Beneficiary list emailed to the wrong ward officer</h2>
          <p className="m-0 mb-[18px] text-[11.5px] text-ink-muted">Section 27(5) notification timeline</p>
          <div className="flex flex-col">
            {INC_TIMELINE.map((e, idx) => {
              const dotColor = e.state === "done" ? "#16775a" : e.state === "active" ? "#2b5f9e" : "#cfd8d9";
              const dotBg = e.state === "done" ? "#e3f2ea" : e.state === "active" ? "#e8effa" : "#f2f5f5";
              const dotIcon = e.state === "done" ? "check" : e.state === "active" ? "loader" : "circle-dashed";
              return (
                <div key={idx} className="flex gap-3">
                  <div className="flex flex-none flex-col items-center">
                    <span className="grid h-[22px] w-[22px] place-items-center rounded-full" style={{ background: dotBg, color: dotColor, border: `1px solid ${dotColor}` }}>
                      <Icon name={dotIcon} size={11} />
                    </span>
                    {idx < INC_TIMELINE.length - 1 && <span className="my-[3px] w-px flex-1 bg-ground" />}
                  </div>
                  <div className="min-w-0 pb-4">
                    <div className="text-[12.5px] font-semibold" style={{ color: e.state === "todo" ? "#93a1a4" : "#0e1a1c" }}>{e.label}</div>
                    <div className="mt-0.5 text-[11px] text-ink-faint">{e.t} · {e.who}</div>
                    <p className="m-0 mt-1.5 text-[11.5px] leading-[1.55] text-ink-mid [text-wrap:pretty]">{e.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="m-0 border-t border-ground pt-3.5 text-[11px] leading-[1.55] text-ink-faint [text-wrap:pretty]">{INCIDENT_NOTE}</p>
        </aside>
      </div>
    </div>
  );
}
