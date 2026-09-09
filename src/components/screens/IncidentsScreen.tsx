"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { AddRecordDialog, type Field } from "@/components/shell/AddRecordDialog";
import { RowRemove } from "@/components/screens/RowRemove";
import { RowEdit } from "@/components/screens/RowEdit";
import { prefillFrom } from "@/components/screens/prefill";
import { INCIDENT_NOTE, type Incident } from "@/lib/data/incidents";
import { useIncidents, useRegisterActions } from "@/lib/supabase/operational";
import { RISK_TONE } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const FIELDS: Field[] = [
  { name: "title", label: "What happened", required: true, type: "textarea", placeholder: "e.g. Beneficiary list emailed to the wrong ward officer", full: true },
  { name: "severity", label: "Severity", type: "select", options: ["CRITICAL", "HIGH", "MEDIUM", "LOW"] },
  { name: "stage", label: "Stage", type: "select", options: ["Investigating", "Assessing", "Notified", "Closed"] },
  { name: "detected", label: "Detected", placeholder: "e.g. 3 Sep 2026" },
  { name: "records", label: "Records affected", placeholder: "e.g. ~40 beneficiaries" },
  { name: "source", label: "Source", placeholder: "e.g. Staff report", full: true },
  { name: "notified", label: "Commission notified", type: "checkbox" },
];

type Dialog = { mode: "add" } | { mode: "edit"; row: Incident } | null;

export function IncidentsScreen() {
  const go = useUI((s) => s.go);
  const flash = useUI((s) => s.flash);
  const { incidents, timeline, live } = useIncidents();
  const { insert, remove, update } = useRegisterActions("incidents");
  const [dialog, setDialog] = useState<Dialog>(null);

  const open = incidents.filter((i) => i.stage !== "Closed").length;
  const notified = incidents.filter((i) => i.notified).length;
  const severe = incidents.filter((i) => i.severity === "CRITICAL" || i.severity === "HIGH").length;
  const stats = [
    { v: String(incidents.length), k: "Incident cases", sub: "All time" },
    { v: String(open), k: "Open", sub: open ? "In progress" : "None open" },
    { v: String(notified), k: "Commission notified", sub: "Section 27(5)" },
    { v: String(severe), k: "Critical or high", sub: severe ? "Priority" : "None" },
  ];

  const featured = incidents[0];

  const cols = (v: Record<string, string | boolean>) => ({
    title: v.title, detected: v.detected || null, severity: v.severity || "MEDIUM",
    stage: v.stage || "Investigating", records: v.records || null, notified: Boolean(v.notified), source: v.source || null,
  });

  const onSubmit = async (v: Record<string, string | boolean>) => {
    if (dialog?.mode === "edit") {
      const res = await update({ code: dialog.row.id }, cols(v));
      if (res.ok) flash(`Updated ${dialog.row.id}.`);
      return res;
    }
    const code = "INC-2026-" + String(Math.floor(100 + Math.random() * 900));
    const res = await insert({ code, ...cols(v) });
    if (res.ok) flash(`Logged incident ${code}.`);
    return res;
  };

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={stats} />

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_400px]">
        <section className="overflow-hidden rounded-card border border-line bg-surface">
          <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
            <h2 className="m-0 flex-1 text-[13px] font-semibold">Incident cases</h2>
            <SourcePill live={live} />
            <button onClick={() => go("incidentIntake")} className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line-strong bg-surface px-3 py-[7px] text-[12px] font-semibold hover:border-teal hover:text-teal">
              <Icon name="clipboard-list" size={14} className="flex-none" />
              Guided intake
            </button>
            <button onClick={() => setDialog({ mode: "add" })} className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-alert px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-crit-fg">
              <Icon name="siren" size={14} className="flex-none" />
              Log incident
            </button>
          </div>
          {incidents.length === 0 && (
            <p className="m-0 px-5 py-8 text-center text-[12.5px] text-ink-muted">No incidents recorded. Log a breach case from detection through to closure.</p>
          )}
          {incidents.map((i) => {
            const tone = RISK_TONE[i.severity];
            const closed = i.stage === "Closed";
            return (
              <div key={i.id} onClick={() => flash(`${i.id} — ${i.title}`)} className="flex cursor-pointer flex-wrap items-center gap-3.5 border-b border-ground px-5 py-3.5 hover:bg-[#fbfcfc]">
                <span className="min-h-[34px] w-[3px] flex-none self-stretch rounded-full" style={{ background: tone.color }} />
                <div className="min-w-0 flex-[1_1_240px]">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-bold tracking-[0.4px]" style={{ color: tone.color, background: tone.bg }}>
                      <Icon name={tone.icon} size={11} />{i.severity}
                    </span>
                    <span className="text-[13.5px] font-medium [text-wrap:pretty]">{i.title}</span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2.5 text-[11px] text-ink-faint">
                    <span className="rounded border border-line bg-panel px-1.5 py-px font-mono text-[10.5px] text-ink-muted">{i.id}</span>
                    <span>Detected {i.detected}</span><span>·</span><span>{i.records}</span><span>·</span><span>{i.source}</span>
                  </div>
                </div>
                <div className="flex flex-none items-center gap-2.5" onClick={(e) => e.stopPropagation()}>
                  <span className="whitespace-nowrap text-[11px] font-medium" style={{ color: i.notified ? "#16775a" : "#5b6b6e" }}>
                    {i.notified ? "Commission notified" : "Assessed as not notifiable"}
                  </span>
                  <span className="whitespace-nowrap rounded-full px-2.5 py-[3px] text-[11px] font-semibold" style={closed ? { color: "#16775a", background: "#e3f2ea" } : { color: "#2b5f9e", background: "#e8effa" }}>{i.stage}</span>
                  <RowEdit onEdit={() => setDialog({ mode: "edit", row: i })} />
                  <RowRemove onConfirm={async () => { const res = await remove({ code: i.id }); flash(res.ok ? `Removed ${i.id}.` : res.error ?? "Could not remove."); }} />
                </div>
              </div>
            );
          })}
        </section>

        <aside className="rounded-card border border-line bg-surface p-[22px] xl:sticky xl:top-[76px]">
          {featured ? (
            <>
              <div className="mb-1 flex flex-wrap items-center gap-2.5">
                <span className="rounded-[5px] border border-line bg-panel px-[7px] py-0.5 font-mono text-[10.5px] text-ink-muted">{featured.id}</span>
                <span className="rounded px-1.5 py-0.5 text-[10px] font-bold tracking-[0.4px]" style={{ color: (RISK_TONE[featured.severity] ?? RISK_TONE.MEDIUM).color, background: (RISK_TONE[featured.severity] ?? RISK_TONE.MEDIUM).bg }}>{featured.severity}</span>
              </div>
              <h2 className="m-0 mb-[3px] mt-2 text-[15px] font-semibold leading-[1.35] [text-wrap:pretty]">{featured.title}</h2>
              <p className="m-0 mb-[18px] text-[11.5px] text-ink-muted">Section 27(5) notification timeline</p>
              {timeline.length === 0 ? (
                <p className="m-0 text-[11.5px] leading-[1.55] text-ink-muted">No timeline entries recorded for this case yet.</p>
              ) : (
                <div className="flex flex-col">
                  {timeline.map((e, idx) => {
                    const dotColor = e.state === "done" ? "#16775a" : e.state === "active" ? "#2b5f9e" : "#cfd8d9";
                    const dotBg = e.state === "done" ? "#e3f2ea" : e.state === "active" ? "#e8effa" : "#f2f5f5";
                    const dotIcon = e.state === "done" ? "check" : e.state === "active" ? "loader" : "circle-dashed";
                    return (
                      <div key={idx} className="flex gap-3">
                        <div className="flex flex-none flex-col items-center">
                          <span className="grid h-[22px] w-[22px] place-items-center rounded-full" style={{ background: dotBg, color: dotColor, border: `1px solid ${dotColor}` }}>
                            <Icon name={dotIcon} size={11} />
                          </span>
                          {idx < timeline.length - 1 && <span className="my-[3px] w-px flex-1 bg-ground" />}
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
              )}
              <p className="m-0 border-t border-ground pt-3.5 text-[11px] leading-[1.55] text-ink-faint [text-wrap:pretty]">{INCIDENT_NOTE}</p>
            </>
          ) : (
            <p className="m-0 text-[12px] leading-[1.55] text-ink-muted">Select or log an incident to see its Section 27(5) notification timeline here.</p>
          )}
        </aside>
      </div>

      <AddRecordDialog
        open={!!dialog}
        title={dialog?.mode === "edit" ? "Edit incident" : "Log incident"}
        submitLabel={dialog?.mode === "edit" ? "Save changes" : "Log incident"}
        fields={FIELDS}
        initial={dialog?.mode === "edit" ? prefillFrom(FIELDS, dialog.row as unknown as Record<string, unknown>) : undefined}
        onClose={() => setDialog(null)}
        onSubmit={onSubmit}
      />
    </div>
  );
}
