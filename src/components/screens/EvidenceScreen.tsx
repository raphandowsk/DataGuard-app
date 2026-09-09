"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { AddRecordDialog, type Field } from "@/components/shell/AddRecordDialog";
import { RowRemove } from "@/components/screens/RowRemove";
import { EVIDENCE_NOTE, evidenceIcon } from "@/lib/data/records";
import { useEvidence, useRegisterActions } from "@/lib/supabase/operational";
import { TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const FIELDS: Field[] = [
  { name: "name", label: "Document name", required: true, placeholder: "e.g. Access Control Procedure v3.pdf" },
  { name: "kind", label: "Type", type: "select", options: ["Policy", "Procedure", "Record", "Report", "Register", "Certificate", "Log"] },
  { name: "owner", label: "Owner", placeholder: "Who owns it" },
  { name: "strength", label: "Strength", type: "select", options: ["Missing", "Weak", "Moderate", "Strong"] },
  { name: "added", label: "Added", placeholder: "e.g. 12 Mar 2026" },
  { name: "expiry", label: "Expiry / review", placeholder: "e.g. Reviewed quarterly" },
  { name: "controls", label: "Controls linked", placeholder: "e.g. 9" },
  { name: "size", label: "Size", placeholder: "e.g. 340 KB" },
];

export function EvidenceScreen() {
  const { evidence, live } = useEvidence();
  const { insert, remove } = useRegisterActions("evidence");
  const flash = useUI((s) => s.flash);
  const [adding, setAdding] = useState(false);

  const strong = evidence.filter((e) => e.strength === "Strong").length;
  const missing = evidence.filter((e) => e.strength === "Missing").length;
  const expiring = evidence.filter((e) => (e.expiry || "").includes("Expires") || (e.expiry || "").includes("Superseded")).length;
  const stats = [
    { v: String(evidence.length), k: "Documents", sub: "In the vault" },
    { v: String(strong), k: "Strong evidence", sub: "Operating records" },
    { v: String(missing), k: "Required, not uploaded", sub: missing ? "Gaps to close" : "None" },
    { v: String(expiring), k: "Expiring or superseded", sub: expiring ? "Review soon" : "None" },
  ];

  const onSubmit = async (v: Record<string, string | boolean>) => {
    const res = await insert({
      name: v.name, kind: v.kind || null, owner: v.owner || null, strength: v.strength || "Weak",
      added: v.added || null, expiry: v.expiry || null, controls: Number(v.controls || 0), size: v.size || null,
    });
    if (res.ok) flash(`Added ${v.name}.`);
    return res;
  };

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={stats} />

      <div className="flex items-start gap-[11px] rounded-xl border border-[#d3e0f4] bg-info-bg px-4 py-[11px]">
        <Icon name="info" size={16} className="mt-px flex-none text-info-fg" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55]" style={{ color: "#1f4a7d" }}>{EVIDENCE_NOTE}</p>
      </div>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Documents</h2>
          <SourcePill live={live} />
          <button onClick={() => setAdding(true)} className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="plus" size={14} className="flex-none" />
            Add document
          </button>
        </div>
        {evidence.length === 0 && (
          <p className="m-0 px-5 py-8 text-center text-[12.5px] text-ink-muted">No evidence documents yet. Add the records that prove your controls operate.</p>
        )}
        {evidence.map((e) => {
          const tone = e.strength === "Strong" ? TONE3.good : e.strength === "Moderate" ? TONE3.warn : TONE3.bad;
          const isMissing = e.strength === "Missing";
          const expiryColor = (e.expiry || "").includes("Expires") || (e.expiry || "").includes("Superseded") ? "#a4501f" : "#5b6b6e";
          return (
            <div key={e.name} onClick={() => flash(`${e.name} — linked to ${e.controls} controls.`)} className="flex cursor-pointer flex-wrap items-center gap-3.5 border-b border-ground px-5 py-3.5 hover:bg-[#fbfcfc]">
              <span className="grid h-8 w-8 flex-none place-items-center rounded-[9px]" style={{ background: tone.bg, color: tone.color }}>
                <Icon name={evidenceIcon(e.kind)} size={16} />
              </span>
              <div className="min-w-0 flex-[1_1_260px]">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[13px] font-medium">{e.name}</span>
                  {isMissing && <span className="rounded bg-crit-bg px-1.5 py-0.5 text-[10px] font-bold tracking-[0.4px] text-crit-fg">REQUIRED, NOT UPLOADED</span>}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2.5 text-[11px] text-ink-faint">
                  <span>{e.kind}</span><span>·</span><span>{e.owner}</span><span>·</span><span>Added {e.added}</span><span>·</span><span>{e.size}</span>
                </div>
              </div>
              <div className="flex flex-none items-center gap-3.5">
                <div className="text-right">
                  <div className="tnum text-[12px] font-semibold">{e.controls}</div>
                  <div className="text-[10.5px] text-ink-faint">controls</div>
                </div>
                <span className="whitespace-nowrap text-[11px]" style={{ color: expiryColor }}>{e.expiry}</span>
                <span className="whitespace-nowrap rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold" style={{ color: tone.color, background: tone.bg }}>{e.strength}</span>
                <RowRemove onConfirm={async () => { const res = await remove({ name: e.name }); flash(res.ok ? `Removed ${e.name}.` : res.error ?? "Could not remove."); }} />
              </div>
            </div>
          );
        })}
      </section>

      <AddRecordDialog open={adding} title="Add evidence document" fields={FIELDS} submitLabel="Add document" onClose={() => setAdding(false)} onSubmit={onSubmit} />
    </div>
  );
}
