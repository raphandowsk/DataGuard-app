"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { AddRecordDialog, type Field } from "@/components/shell/AddRecordDialog";
import { RowRemove } from "@/components/screens/RowRemove";
import { SENSITIVE_NOTE } from "@/lib/data/sensitive";
import { useSensitive, useRegisterActions } from "@/lib/supabase/operational";
import { STATUS_TO_TONE, TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

const FIELDS: Field[] = [
  { name: "cat", label: "Category", required: true, placeholder: "e.g. National ID numbers" },
  { name: "activity", label: "Activity", placeholder: "e.g. Beneficiary enrolment" },
  { name: "subjects", label: "Data subjects", placeholder: "e.g. Beneficiaries" },
  { name: "n", label: "Records", placeholder: "e.g. 14,200" },
  { name: "basis", label: "Lawful basis", type: "select", options: ["Consent", "Legal obligation", "Vital interest", "Public task", "Legitimate interest"] },
  { name: "status", label: "Status", type: "select", options: ["Gap", "Review", "Complete"] },
  { name: "access", label: "Who can reach it", type: "textarea", placeholder: "e.g. Programme leads only", full: true },
  { name: "masked", label: "Masked at rest", type: "checkbox" },
];

export function SensitiveScreen() {
  const { sensitive, live } = useSensitive();
  const { insert, remove } = useRegisterActions("sensitive_data");
  const flash = useUI((s) => s.flash);
  const [adding, setAdding] = useState(false);

  const gaps = sensitive.filter((r) => r.status !== "Complete").length;
  const masked = sensitive.filter((r) => r.masked).length;
  const stats = [
    { v: String(sensitive.length), k: "Sensitive categories", sub: `${gaps} need attention` },
    { v: String(masked), k: "Masked at rest", sub: masked ? `${sensitive.length - masked} not masked` : "None masked" },
    { v: String(gaps), k: "Categories with gaps", sub: gaps ? "Missing basis or access" : "All complete" },
  ];

  const onSubmit = async (v: Record<string, string | boolean>) => {
    const res = await insert({
      cat: v.cat, activity: v.activity || null, subjects: v.subjects || null, n: v.n || null,
      basis: v.basis || null, access: v.access || null, masked: Boolean(v.masked), status: v.status || "Gap",
    });
    if (res.ok) flash(`Added ${v.cat}.`);
    return res;
  };

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={stats} />

      <div className="flex items-start gap-[11px] rounded-xl border border-[#f3cec8] bg-crit-bg px-4 py-3">
        <Icon name="shield-alert" size={16} className="mt-px flex-none text-crit-fg" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55]" style={{ color: "#7a2a22" }}>{SENSITIVE_NOTE}</p>
      </div>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Sensitive categories</h2>
          <SourcePill live={live} />
          <button onClick={() => setAdding(true)} className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
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
                <th className={TH}>Record</th>
                <th className={`${TH} pr-5`}></th>
              </tr>
            </thead>
            <tbody>
              {sensitive.length === 0 && (
                <tr><td colSpan={7} className="px-5 py-8 text-center text-[12.5px] text-ink-muted">No sensitive categories recorded yet.</td></tr>
              )}
              {sensitive.map((r) => {
                const tone = TONE3[STATUS_TO_TONE[r.status]];
                return (
                  <tr key={r.cat} onClick={() => flash(`${r.cat} — basis: ${r.basis}`)} className="cursor-pointer border-b border-ground align-top hover:bg-[#fbfcfc]">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{r.cat}</span>
                        {r.masked && <Icon name="eye-off" size={12} className="flex-none text-ink-muted" />}
                      </div>
                      <div className="mt-[3px] text-[10.5px] text-ink-faint">{r.subjects}</div>
                    </td>
                    <td className="px-3 py-3 text-ink-muted">{r.activity}</td>
                    <td className="tnum px-3 py-3 text-right font-medium">{r.n}</td>
                    <td className="max-w-[190px] px-3 py-3 [text-wrap:pretty]"><span className={r.masked ? "text-ink-mid" : "font-semibold text-crit-fg"}>{r.basis}</span></td>
                    <td className="max-w-[180px] px-3 py-3 text-ink-muted [text-wrap:pretty]">{r.access}</td>
                    <td className="px-3 py-3"><Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{r.status}</Pill></td>
                    <td className="px-5 py-3 text-right"><RowRemove onConfirm={async () => { const res = await remove({ cat: r.cat }); flash(res.ok ? `Removed ${r.cat}.` : res.error ?? "Could not remove."); }} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <AddRecordDialog open={adding} title="Add sensitive category" fields={FIELDS} submitLabel="Add category" onClose={() => setAdding(false)} onSubmit={onSubmit} />
    </div>
  );
}
