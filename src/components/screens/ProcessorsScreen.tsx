"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { AddRecordDialog, type Field } from "@/components/shell/AddRecordDialog";
import { RowRemove } from "@/components/screens/RowRemove";
import { PROCESSOR_NOTE } from "@/lib/data/processors";
import { useProcessors, useRegisterActions } from "@/lib/supabase/operational";
import { TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";
const CONTRACTS = ["No contract", "In negotiation", "Signed", "Legacy, predates the Act"];
const toneFor = (contract: string) => (contract === "Signed" ? "good" : contract === "No contract" ? "bad" : "warn");

const FIELDS: Field[] = [
  { name: "name", label: "Processor", required: true, placeholder: "e.g. Salesforce NPSP" },
  { name: "service", label: "Service", placeholder: "e.g. Donor CRM" },
  { name: "country", label: "Location", placeholder: "Tanzania" },
  { name: "data", label: "Data handled", type: "textarea", placeholder: "e.g. Donor contact details", full: true },
  { name: "contract", label: "Contract", type: "select", options: CONTRACTS },
  { name: "review", label: "Security review", placeholder: "e.g. Due Mar 2027" },
];

export function ProcessorsScreen() {
  const { processors, live } = useProcessors();
  const { insert, remove } = useRegisterActions("processors");
  const flash = useUI((s) => s.flash);
  const [adding, setAdding] = useState(false);

  const noContract = processors.filter((p) => p.tone === "bad").length;
  const abroad = processors.filter((p) => p.country && p.country !== "Tanzania").length;
  const stats = [
    { v: String(processors.length), k: "Processors", sub: "Acting on your behalf" },
    { v: String(noContract), k: "Without a contract", sub: noContract ? "Section 27(4) gap" : "All covered" },
    { v: String(abroad), k: "Located abroad", sub: abroad ? "May need a transfer decision" : "All in Tanzania" },
  ];

  const onSubmit = async (v: Record<string, string | boolean>) => {
    const contract = (v.contract as string) || "No contract";
    const res = await insert({
      name: v.name, service: v.service || null, country: (v.country as string) || "Tanzania",
      data: v.data || null, contract, tone: toneFor(contract), review: v.review || null, activities: 0,
    });
    if (res.ok) flash(`Added ${v.name}.`);
    return res;
  };

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={stats} />

      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55] text-ink-mid">{PROCESSOR_NOTE}</p>
      </div>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Processors</h2>
          <SourcePill live={live} />
          <button onClick={() => setAdding(true)} className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="plus" size={14} className="flex-none" />
            Add processor
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[880px] text-[12.5px]">
            <thead>
              <tr>
                <th className={`${TH} pl-5`}>Processor</th>
                <th className={TH}>Service</th>
                <th className={TH}>Data handled</th>
                <th className={TH}>Location</th>
                <th className={TH}>Contract</th>
                <th className={TH}>Security review</th>
                <th className={`${TH} pr-5`}></th>
              </tr>
            </thead>
            <tbody>
              {processors.length === 0 && (
                <tr><td colSpan={7} className="px-5 py-8 text-center text-[12.5px] text-ink-muted">No processors recorded yet.</td></tr>
              )}
              {processors.map((p) => {
                const tone = TONE3[p.tone];
                const cross = p.country && p.country !== "Tanzania";
                return (
                  <tr key={p.name} onClick={() => flash(`${p.name} — contract: ${p.contract}.`)} className="cursor-pointer border-b border-ground hover:bg-[#fbfcfc]">
                    <td className="px-5 py-3">
                      <div className="font-medium">{p.name}</div>
                      <div className="mt-[3px] text-[10.5px] text-ink-faint">{p.activities} linked activities</div>
                    </td>
                    <td className="px-3 py-3 text-ink-muted">{p.service}</td>
                    <td className="max-w-[200px] px-3 py-3 text-ink-muted [text-wrap:pretty]">{p.data}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1.5">
                        {cross && <Icon name="globe" size={12} className="flex-none text-high-fg" />}
                        <span className="text-ink-mid">{p.country}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3"><Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{p.contract}</Pill></td>
                    <td className="px-3 py-3 text-ink-muted">{p.review}</td>
                    <td className="px-5 py-3 text-right"><RowRemove onConfirm={async () => { const res = await remove({ name: p.name }); flash(res.ok ? `Removed ${p.name}.` : res.error ?? "Could not remove."); }} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <AddRecordDialog open={adding} title="Add processor" fields={FIELDS} submitLabel="Add processor" onClose={() => setAdding(false)} onSubmit={onSubmit} />
    </div>
  );
}
