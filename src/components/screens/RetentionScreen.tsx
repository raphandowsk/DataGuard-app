"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { AddRecordDialog, type Field } from "@/components/shell/AddRecordDialog";
import { RowRemove } from "@/components/screens/RowRemove";
import { RowEdit } from "@/components/screens/RowEdit";
import { prefillFrom } from "@/components/screens/prefill";
import { RETENTION_NOTE, type RetentionRow } from "@/lib/data/retention";
import { useRetention, useRegisterActions } from "@/lib/supabase/operational";
import { STATUS_TO_TONE, TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

const FIELDS: Field[] = [
  { name: "record", label: "Record type", required: true, placeholder: "e.g. Beneficiary files" },
  { name: "period", label: "Retention period", placeholder: "e.g. 7 years after close" },
  { name: "source", label: "Where the period comes from", type: "textarea", placeholder: "e.g. Grant agreement clause 9", full: true },
  { name: "disposal", label: "Disposal method", placeholder: "e.g. Secure deletion" },
  { name: "next", label: "Next review", placeholder: "e.g. Mar 2027" },
  { name: "status", label: "Status", type: "select", options: ["Gap", "Review", "Complete"] },
];

type Dialog = { mode: "add" } | { mode: "edit"; row: RetentionRow } | null;

export function RetentionScreen() {
  const { retention, live } = useRetention();
  const { insert, remove, update } = useRegisterActions("retention_schedule");
  const flash = useUI((s) => s.flash);
  const [dialog, setDialog] = useState<Dialog>(null);

  const overdue = retention.filter((r) => (r.next || "").includes("Overdue")).length;
  const noLaw = retention.filter((r) => (r.source || "").includes("no statutory source") || (r.source || "").includes("no fixed period")).length;
  const stats = [
    { v: String(retention.length), k: "Record types", sub: "On the schedule" },
    { v: String(overdue), k: "Reviews overdue", sub: overdue ? "Need attention" : "All current" },
    { v: String(noLaw), k: "No statutory source", sub: noLaw ? "Justify or shorten" : "All sourced" },
  ];

  const cols = (v: Record<string, string | boolean>) => ({
    record: v.record, period: v.period || null, source: v.source || null,
    disposal: v.disposal || null, next: v.next || null, status: v.status || "Gap",
  });

  const onSubmit = async (v: Record<string, string | boolean>) => {
    if (dialog?.mode === "edit") {
      const res = await update({ record: dialog.row.record }, cols(v));
      if (res.ok) flash(`Updated ${v.record}.`);
      return res;
    }
    const res = await insert(cols(v));
    if (res.ok) flash(`Added ${v.record}.`);
    return res;
  };

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={stats} />

      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55] text-ink-mid">{RETENTION_NOTE}</p>
      </div>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Schedule</h2>
          <SourcePill live={live} />
          <button onClick={() => setDialog({ mode: "add" })} className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="plus" size={14} className="flex-none" />
            Add record type
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-[12.5px]">
            <thead>
              <tr>
                <th className={`${TH} pl-5`}>Record type</th>
                <th className={TH}>Retention period</th>
                <th className={TH}>Where the period comes from</th>
                <th className={TH}>Disposal</th>
                <th className={TH}>Next review</th>
                <th className={TH}>Record</th>
                <th className={`${TH} pr-5`}></th>
              </tr>
            </thead>
            <tbody>
              {retention.length === 0 && (
                <tr><td colSpan={7} className="px-5 py-8 text-center text-[12.5px] text-ink-muted">No retention records yet.</td></tr>
              )}
              {retention.map((r) => {
                const tone = TONE3[STATUS_TO_TONE[r.status]];
                const noSrc = (r.source || "").includes("no statutory source") || (r.source || "").includes("no fixed period");
                return (
                  <tr key={r.record} onClick={() => flash(`${r.record} — ${r.period}`)} className="cursor-pointer border-b border-ground align-top hover:bg-[#fbfcfc]">
                    <td className="px-5 py-3 font-medium">{r.record}</td>
                    <td className="px-3 py-3 text-ink-mid">{r.period}</td>
                    <td className="max-w-[230px] px-3 py-3 [text-wrap:pretty]">
                      <div className="text-ink-muted">{r.source}</div>
                      {noSrc && <div className="mt-1 inline-flex items-center gap-1 text-[10.5px] font-semibold text-high-fg"><Icon name="triangle-alert" size={11} />No statutory source</div>}
                    </td>
                    <td className="max-w-[160px] px-3 py-3 text-ink-muted [text-wrap:pretty]">{r.disposal}</td>
                    <td className="px-3 py-3 font-medium" style={{ color: (r.next || "").includes("Overdue") ? "#b23a2f" : "#5b6b6e" }}>{r.next}</td>
                    <td className="px-3 py-3"><Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{r.status}</Pill></td>
                    <td className="px-5 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="inline-flex items-center gap-0.5">
                        <RowEdit onEdit={() => setDialog({ mode: "edit", row: r })} />
                        <RowRemove onConfirm={async () => { const res = await remove({ record: r.record }); flash(res.ok ? `Removed ${r.record}.` : res.error ?? "Could not remove."); }} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <AddRecordDialog
        open={!!dialog}
        title={dialog?.mode === "edit" ? "Edit record type" : "Add record type"}
        submitLabel={dialog?.mode === "edit" ? "Save changes" : "Add record type"}
        fields={FIELDS}
        initial={dialog?.mode === "edit" ? prefillFrom(FIELDS, dialog.row as unknown as Record<string, unknown>) : undefined}
        onClose={() => setDialog(null)}
        onSubmit={onSubmit}
      />
    </div>
  );
}
