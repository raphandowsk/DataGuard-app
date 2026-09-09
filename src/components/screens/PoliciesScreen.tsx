"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { AddRecordDialog, type Field } from "@/components/shell/AddRecordDialog";
import { RowRemove } from "@/components/screens/RowRemove";
import { usePolicies, useRegisterActions } from "@/lib/supabase/operational";
import { TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

const FIELDS: Field[] = [
  { name: "name", label: "Policy name", required: true, placeholder: "e.g. Data Protection Policy" },
  { name: "version", label: "Version", placeholder: "e.g. v1.0" },
  { name: "owner", label: "Owner", placeholder: "Who owns it" },
  { name: "status", label: "Status", type: "select", options: ["Missing", "Draft", "Current", "Expired"] },
  { name: "approved", label: "Approved", placeholder: "e.g. 12 Mar 2026" },
  { name: "next", label: "Next review", placeholder: "e.g. 12 Mar 2027" },
  { name: "controls", label: "Controls supported", placeholder: "e.g. 8", full: true },
];

export function PoliciesScreen() {
  const { policies, live } = usePolicies();
  const { insert, remove } = useRegisterActions("policies");
  const flash = useUI((s) => s.flash);
  const [adding, setAdding] = useState(false);

  const current = policies.filter((p) => p.status === "Current").length;
  const attention = policies.filter((p) => p.status === "Expired" || p.status === "Missing").length;
  const stats = [
    { v: String(policies.length), k: "Policies & procedures", sub: "In the library" },
    { v: String(current), k: "Current", sub: "Approved and in date" },
    { v: String(attention), k: "Expired or missing", sub: attention ? "Weak evidence" : "None" },
  ];

  const onSubmit = async (v: Record<string, string | boolean>) => {
    const res = await insert({
      name: v.name, version: v.version || null, owner: v.owner || null, approved: v.approved || null,
      next: v.next || null, controls: Number(v.controls || 0), status: v.status || "Draft",
    });
    if (res.ok) flash(`Added ${v.name}.`);
    return res;
  };

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={stats} />

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Policies and procedures</h2>
          <SourcePill live={live} />
          <button onClick={() => setAdding(true)} className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
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
                <th className={TH}>Status</th>
                <th className={`${TH} pr-5`}></th>
              </tr>
            </thead>
            <tbody>
              {policies.length === 0 && (
                <tr><td colSpan={8} className="px-5 py-8 text-center text-[12.5px] text-ink-muted">No policies recorded yet.</td></tr>
              )}
              {policies.map((p) => {
                const tone = TONE3[p.status === "Current" ? "good" : p.status === "Draft" ? "warn" : "bad"];
                return (
                  <tr key={p.name} onClick={() => flash(`${p.name} ${p.version} — supports ${p.controls} controls.`)} className="cursor-pointer border-b border-ground hover:bg-[#fbfcfc]">
                    <td className="px-5 py-3 font-medium">{p.name}</td>
                    <td className="px-3 py-3 text-ink-mid">{p.version}</td>
                    <td className="px-3 py-3 text-ink-muted">{p.owner}</td>
                    <td className="px-3 py-3 text-ink-muted">{p.approved}</td>
                    <td className="px-3 py-3 font-medium" style={{ color: (p.next || "").includes("Overdue") ? "#b23a2f" : "#5b6b6e" }}>{p.next}</td>
                    <td className="tnum px-3 py-3 text-center font-medium">{p.controls}</td>
                    <td className="px-3 py-3"><Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{p.status}</Pill></td>
                    <td className="px-5 py-3 text-right"><RowRemove onConfirm={async () => { const res = await remove({ name: p.name }); flash(res.ok ? `Removed ${p.name}.` : res.error ?? "Could not remove."); }} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <AddRecordDialog open={adding} title="Add policy" fields={FIELDS} submitLabel="Add policy" onClose={() => setAdding(false)} onSubmit={onSubmit} />
    </div>
  );
}
