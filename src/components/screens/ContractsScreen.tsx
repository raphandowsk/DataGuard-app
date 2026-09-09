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
import { CLAUSES, CONTRACT_NOTE, type Contract } from "@/lib/data/processors";
import { useContracts, useRegisterActions } from "@/lib/supabase/operational";
import { TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";
const STATUSES = ["No contract", "In negotiation", "Signed", "Legacy, predates the Act"];
const toneFor = (s: string) => (s === "Signed" ? "good" : s === "No contract" ? "bad" : "warn");

const FIELDS: Field[] = [
  { name: "processor", label: "Processor", required: true, placeholder: "e.g. Salesforce NPSP" },
  { name: "status", label: "Status", type: "select", options: STATUSES },
  { name: "have", label: "Clauses present (0–7)", type: "select", options: ["0", "1", "2", "3", "4", "5", "6", "7"] },
  { name: "signed", label: "Signed", placeholder: "e.g. 12 Mar 2026" },
  { name: "expires", label: "Expires", placeholder: "e.g. 12 Mar 2028" },
];

type Dialog = { mode: "add" } | { mode: "edit"; row: Contract } | null;

export function ContractsScreen() {
  const { contracts, live } = useContracts();
  const { insert, remove, update } = useRegisterActions("contracts");
  const flash = useUI((s) => s.flash);
  const [dialog, setDialog] = useState<Dialog>(null);

  const full = contracts.filter((c) => c.have === 7).length;
  const missing = contracts.filter((c) => c.tone === "bad" || c.have < 7).length;
  const stats = [
    { v: String(contracts.length), k: "Processor contracts", sub: "Tracked" },
    { v: String(full), k: "Fully covered", sub: "All 7 clauses present" },
    { v: String(missing), k: "Need attention", sub: missing ? "Missing clauses or unsigned" : "All complete" },
  ];

  const cols = (v: Record<string, string | boolean>) => {
    const status = (v.status as string) || "No contract";
    return { processor: v.processor, status, tone: toneFor(status), have: Number(v.have || 0), signed: v.signed || null, expires: v.expires || null };
  };

  const onSubmit = async (v: Record<string, string | boolean>) => {
    if (dialog?.mode === "edit") {
      const res = await update({ processor: dialog.row.processor }, cols(v));
      if (res.ok) flash(`Updated contract for ${v.processor}.`);
      return res;
    }
    const res = await insert(cols(v));
    if (res.ok) flash(`Added contract for ${v.processor}.`);
    return res;
  };

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={stats} />

      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55] text-ink-mid">{CONTRACT_NOTE}</p>
      </div>

      <section className="rounded-card border border-line bg-surface px-[22px] py-[18px]">
        <h2 className="m-0 mb-[11px] text-[13px] font-semibold">The seven clauses tracked</h2>
        <div className="flex flex-wrap gap-[7px]">
          {CLAUSES.map((c) => (
            <span key={c} className="rounded-full border border-line bg-panel px-[11px] py-[5px] text-[11.5px] text-ink-mid">{c}</span>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Contracts by processor</h2>
          <SourcePill live={live} />
          <button onClick={() => setDialog({ mode: "add" })} className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="plus" size={14} className="flex-none" />
            Add contract
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-[12.5px]">
            <thead>
              <tr>
                <th className={`${TH} pl-5`}>Processor</th>
                <th className={TH}>Status</th>
                <th className={`${TH} w-[200px]`}>Clause coverage</th>
                <th className={TH}>Signed</th>
                <th className={TH}>Expires</th>
                <th className={`${TH} pr-5`}></th>
              </tr>
            </thead>
            <tbody>
              {contracts.length === 0 && (
                <tr><td colSpan={6} className="px-5 py-8 text-center text-[12.5px] text-ink-muted">No contracts recorded yet.</td></tr>
              )}
              {contracts.map((c) => {
                const tone = TONE3[c.tone];
                const pct = Math.round((c.have / 7) * 100);
                const barColor = c.have === 7 ? "#16775a" : c.have >= 4 ? "#c67139" : "#b23a2f";
                return (
                  <tr key={c.processor} onClick={() => flash(`${c.processor} — ${c.status}, ${c.have} of 7 clauses present.`)} className="cursor-pointer border-b border-ground hover:bg-[#fbfcfc]">
                    <td className="px-5 py-3 font-medium">{c.processor}</td>
                    <td className="px-3 py-3"><Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{c.status}</Pill></td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2.5">
                        <span className="block h-1.5 min-w-[40px] flex-1 overflow-hidden rounded-full bg-ground"><span className="block h-full" style={{ width: `${pct}%`, background: barColor }} /></span>
                        <span className="tnum whitespace-nowrap text-[11.5px] font-semibold">{c.have} of 7</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-ink-muted">{c.signed}</td>
                    <td className="px-3 py-3 text-ink-muted">{c.expires}</td>
                    <td className="px-5 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="inline-flex items-center gap-0.5">
                        <RowEdit onEdit={() => setDialog({ mode: "edit", row: c })} />
                        <RowRemove onConfirm={async () => { const res = await remove({ processor: c.processor }); flash(res.ok ? `Removed contract for ${c.processor}.` : res.error ?? "Could not remove."); }} />
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
        title={dialog?.mode === "edit" ? "Edit contract" : "Add contract"}
        submitLabel={dialog?.mode === "edit" ? "Save changes" : "Add contract"}
        fields={FIELDS}
        initial={dialog?.mode === "edit" ? prefillFrom(FIELDS, dialog.row as unknown as Record<string, unknown>) : undefined}
        onClose={() => setDialog(null)}
        onSubmit={onSubmit}
      />
    </div>
  );
}
