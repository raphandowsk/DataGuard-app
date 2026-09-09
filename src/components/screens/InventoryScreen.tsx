"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { AddRecordDialog, type Field } from "@/components/shell/AddRecordDialog";
import { RowRemove } from "@/components/screens/RowRemove";
import { RowEdit } from "@/components/screens/RowEdit";
import { prefillFrom } from "@/components/screens/prefill";
import { useActivities, useRegisterActions } from "@/lib/supabase/operational";
import type { Activity } from "@/lib/data/inventory";
import { STATUS_TO_TONE, TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

const FIELDS: Field[] = [
  { name: "name", label: "Activity name", required: true, placeholder: "e.g. Beneficiary enrolment" },
  { name: "dept", label: "Department", placeholder: "e.g. Programmes" },
  { name: "subjects", label: "Data subjects", placeholder: "e.g. Beneficiaries" },
  { name: "cats", label: "Data categories", type: "textarea", placeholder: "Name, national ID, phone…", full: true },
  { name: "basis", label: "Lawful basis", type: "select", options: ["Consent", "Legitimate interest", "Legal obligation", "Contract", "Vital interest", "Public task"] },
  { name: "status", label: "Record status", type: "select", options: ["Gap", "Review", "Complete"] },
  { name: "purpose", label: "Purpose", type: "textarea", placeholder: "Why you hold this data", full: true },
  { name: "systems", label: "Systems", placeholder: "e.g. Beneficiary DB" },
  { name: "country", label: "Country", placeholder: "Tanzania" },
  { name: "retention", label: "Retention", placeholder: "e.g. 7 years after close" },
  { name: "sensitive", label: "Involves sensitive data", type: "checkbox" },
];

type Dialog = { mode: "add" } | { mode: "edit"; row: Activity } | null;

export function InventoryScreen() {
  const { activities, live } = useActivities();
  const { insert, remove, update } = useRegisterActions("activities");
  const flash = useUI((s) => s.flash);
  const go = useUI((s) => s.go);
  const [dialog, setDialog] = useState<Dialog>(null);
  const [dept, setDept] = useState("all");

  const depts = useMemo(() => [...new Set(activities.map((a) => a.dept).filter(Boolean))].sort(), [activities]);
  const rows = dept === "all" ? activities : activities.filter((a) => a.dept === dept);

  const gaps = activities.filter((a) => a.status === "Gap").length;
  const sensitiveN = activities.filter((a) => a.sensitive).length;
  const abroad = activities.filter((a) => a.country && a.country !== "Tanzania");
  const abroadCountries = [...new Set(abroad.map((a) => a.country))];
  const systems = [...new Set(activities.map((a) => a.systems).filter(Boolean))];
  const abroadSystems = [...new Set(abroad.map((a) => a.systems).filter(Boolean))];
  const stats = [
    { v: String(activities.length), k: "Processing activities", sub: `${gaps} with open gaps` },
    { v: String(sensitiveN), k: "Involving sensitive data", sub: sensitiveN ? "Higher-standard categories" : "None recorded" },
    { v: String(abroad.length), k: "Leaving Tanzania", sub: abroadCountries.join(", ") || "None" },
    { v: String(systems.length), k: "Systems in scope", sub: `${abroadSystems.length} hosted abroad` },
  ];

  const cols = (v: Record<string, string | boolean>) => ({
    name: v.name, dept: v.dept || null, subjects: v.subjects || null, cats: v.cats || null,
    sensitive: Boolean(v.sensitive), basis: v.basis || null, purpose: v.purpose || null,
    systems: v.systems || null, country: (v.country as string) || "Tanzania", retention: v.retention || null,
    status: v.status || "Gap",
  });

  const onSubmit = async (v: Record<string, string | boolean>) => {
    if (dialog?.mode === "edit") {
      const res = await update({ code: dialog.row.id }, cols(v));
      if (res.ok) flash(`Updated ${v.name}.`);
      return res;
    }
    const res = await insert({ code: "PA-" + Math.random().toString(36).slice(2, 6).toUpperCase(), ...cols(v) });
    if (res.ok) flash(`Added ${v.name}.`);
    return res;
  };

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={stats} />

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Processing activities</h2>
          <SourcePill live={live} />
          <select value={dept} onChange={(e) => setDept(e.target.value)} className="rounded-lg border border-line bg-panel px-2.5 py-1.5 text-[11.5px]">
            <option value="all">All departments</option>
            {depts.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <button onClick={() => setDialog({ mode: "add" })} className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
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
                <th className={TH}>Record</th>
                <th className={`${TH} pr-5`}></th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr><td colSpan={8} className="px-5 py-8 text-center text-[12.5px] text-ink-muted">No processing activities yet. Use “Add activity” to record one.</td></tr>
              )}
              {rows.map((a) => {
                const tone = TONE3[STATUS_TO_TONE[a.status]];
                return (
                  <tr key={a.id} onClick={() => { go("map"); flash(`Opened ${a.name} on the data map.`); }} className="cursor-pointer border-b border-ground align-top hover:bg-[#fbfcfc]">
                    <td className="px-5 py-3">
                      <div className="font-medium">{a.name}</div>
                      <div className="mt-1 flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[10.5px] text-ink-faint">{a.id}</span>
                        <span className="text-[10.5px] text-ink-muted">{a.dept}</span>
                        {a.sensitive && <span className="rounded bg-crit-bg px-[5px] py-px text-[9.5px] font-bold tracking-[0.3px] text-crit-fg">SENSITIVE</span>}
                      </div>
                    </td>
                    <td className="px-3 py-3 text-ink-mid">{a.subjects}</td>
                    <td className="max-w-[210px] px-3 py-3 text-ink-muted [text-wrap:pretty]">{a.cats}</td>
                    <td className="px-3 py-3 text-ink-mid">{a.basis}</td>
                    <td className="px-3 py-3 text-ink-muted">
                      <div>{a.systems}</div>
                      {a.country && a.country !== "Tanzania" && (
                        <div className="mt-1 inline-flex items-center gap-1 text-[10.5px] font-semibold text-high-fg"><Icon name="globe" size={11} />{a.country}</div>
                      )}
                    </td>
                    <td className="max-w-[170px] px-3 py-3 text-ink-muted [text-wrap:pretty]">{a.retention}</td>
                    <td className="px-3 py-3"><Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{a.status}</Pill></td>
                    <td className="px-5 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="inline-flex items-center gap-0.5">
                        <RowEdit onEdit={() => setDialog({ mode: "edit", row: a })} />
                        <RowRemove onConfirm={async () => { const res = await remove({ code: a.id }); flash(res.ok ? `Removed ${a.name}.` : res.error ?? "Could not remove."); }} />
                      </div>
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

      <AddRecordDialog
        open={!!dialog}
        title={dialog?.mode === "edit" ? "Edit processing activity" : "Add processing activity"}
        submitLabel={dialog?.mode === "edit" ? "Save changes" : "Add activity"}
        fields={FIELDS}
        initial={dialog?.mode === "edit" ? prefillFrom(FIELDS, dialog.row as unknown as Record<string, unknown>) : undefined}
        onClose={() => setDialog(null)}
        onSubmit={onSubmit}
      />
    </div>
  );
}
