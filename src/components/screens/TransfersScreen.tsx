"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { SourcePill } from "@/components/ui/SourcePill";
import { AddRecordDialog, type Field } from "@/components/shell/AddRecordDialog";
import { RowRemove } from "@/components/screens/RowRemove";
import { RowEdit } from "@/components/screens/RowEdit";
import { prefillFrom } from "@/components/screens/prefill";
import { TRANSFER_NOTE, type Transfer } from "@/lib/data/transfers";
import { useTransfers, useRegisterActions } from "@/lib/supabase/operational";
import { TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const STATUSES = ["Not assessed", "Assessment open", "Approved"];
const toneFor = (s: string) => (s === "Approved" ? "good" : s === "Not assessed" ? "bad" : "warn");

const FIELDS: Field[] = [
  { name: "dest", label: "Destination country", required: true, placeholder: "e.g. Ireland" },
  { name: "processor", label: "Processor", placeholder: "e.g. Salesforce NPSP" },
  { name: "status", label: "Status", type: "select", options: STATUSES },
  { name: "owner", label: "Owner", placeholder: "Who owns it" },
  { name: "data", label: "Data transferred", type: "textarea", placeholder: "e.g. Donor contact details", full: true },
  { name: "volume", label: "Volume", placeholder: "e.g. 3,480 records" },
  { name: "basis", label: "Stated basis", placeholder: "e.g. Adequacy / consent" },
  { name: "note", label: "Note", type: "textarea", placeholder: "Context for the recorded decision", full: true },
];

type Dialog = { mode: "add" } | { mode: "edit"; row: Transfer } | null;

export function TransfersScreen() {
  const flash = useUI((s) => s.flash);
  const { transfers, live } = useTransfers();
  const { insert, remove, update } = useRegisterActions("transfers");
  const [dialog, setDialog] = useState<Dialog>(null);

  const cols = (v: Record<string, string | boolean>) => {
    const status = (v.status as string) || "Not assessed";
    return { dest: v.dest, processor: v.processor || null, data: v.data || null, volume: v.volume || null, basis: v.basis || null, status, tone: toneFor(status), owner: v.owner || null, note: v.note || null };
  };

  const onSubmit = async (v: Record<string, string | boolean>) => {
    if (dialog?.mode === "edit") {
      const res = await update({ code: dialog.row.id }, cols(v));
      if (res.ok) flash(`Updated transfer to ${v.dest}.`);
      return res;
    }
    const res = await insert({ code: "TR-" + Math.random().toString(36).slice(2, 6).toUpperCase(), ...cols(v) });
    if (res.ok) flash(`Added transfer to ${v.dest}.`);
    return res;
  };

  return (
    <div className="flex animate-fade flex-col gap-4">
      <div className="flex items-center gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="flex-none text-ink-muted" />
        <p className="m-0 flex-1 text-[12px] leading-[1.55] text-ink-mid">{TRANSFER_NOTE}</p>
        <SourcePill live={live} />
        <button onClick={() => setDialog({ mode: "add" })} className="flex flex-none items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
          <Icon name="plus" size={14} className="flex-none" />
          Add transfer
        </button>
      </div>

      {transfers.length === 0 && (
        <div className="rounded-card border border-dashed border-line-strong bg-panel px-5 py-10 text-center text-[12.5px] text-ink-muted">
          No cross-border routes recorded. Add a transfer for every route that takes personal data outside Tanzania.
        </div>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-3.5">
        {transfers.map((t) => {
          const tone = TONE3[t.tone];
          return (
            <section key={t.id} className="rounded-card border border-line bg-surface px-[22px] py-5">
              <div className="mb-3.5 flex flex-wrap items-center gap-2.5">
                <span className="rounded-[5px] border border-line bg-panel px-[7px] py-0.5 font-mono text-[10.5px] text-ink-muted">{t.id}</span>
                <Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{t.status}</Pill>
                <span className="ml-auto inline-flex items-center gap-0.5">
                  <RowEdit onEdit={() => setDialog({ mode: "edit", row: t })} />
                  <RowRemove onConfirm={async () => { const res = await remove({ code: t.id }); flash(res.ok ? `Removed transfer ${t.id}.` : res.error ?? "Could not remove."); }} />
                </span>
              </div>
              <div className="mb-4 flex items-center gap-3">
                <div className="text-center">
                  <div className="text-[11px] text-ink-faint">From</div>
                  <div className="mt-0.5 text-[13.5px] font-semibold">Tanzania</div>
                </div>
                <div className="relative h-0.5 min-w-[24px] flex-1 bg-line">
                  <Icon name="arrow-right" size={15} className="absolute -right-1 -top-[7px] bg-surface text-ink-faint" />
                </div>
                <div className="text-center">
                  <div className="text-[11px] text-ink-faint">To</div>
                  <div className="mt-0.5 text-[13.5px] font-semibold">{t.dest}</div>
                </div>
              </div>
              <div className="flex flex-col gap-[9px] border-t border-ground pt-3.5">
                <Row k="Processor" v={t.processor} bold />
                <Row k="Data" v={t.data} />
                <Row k="Volume" v={t.volume} />
                <Row k="Stated basis" v={t.basis} />
                <Row k="Owner" v={t.owner} />
              </div>
              {t.note && <p className="m-0 mt-3.5 rounded-[11px] border border-line bg-[#fbfcfc] px-3.5 py-3 text-[12px] leading-[1.55] text-ink-mid [text-wrap:pretty]">{t.note}</p>}
              <button
                onClick={() => useUI.getState().openDetail("transferAssess", t.id, `Transfer to ${t.dest}`)}
                className="mt-3.5 flex w-full items-center justify-center gap-[7px] rounded-full border border-line-strong bg-surface px-3.5 py-[9px] text-[12.5px] font-semibold hover:border-teal hover:text-teal"
              >
                <Icon name="clipboard-list" size={14} className="flex-none" />
                Open transfer assessment
              </button>
            </section>
          );
        })}
      </div>

      <AddRecordDialog
        open={!!dialog}
        title={dialog?.mode === "edit" ? "Edit transfer" : "Add cross-border transfer"}
        submitLabel={dialog?.mode === "edit" ? "Save changes" : "Add transfer"}
        fields={FIELDS}
        initial={dialog?.mode === "edit" ? prefillFrom(FIELDS, dialog.row as unknown as Record<string, unknown>) : undefined}
        onClose={() => setDialog(null)}
        onSubmit={onSubmit}
      />
    </div>
  );
}

function Row({ k, v, bold }: { k: string; v: string; bold?: boolean }) {
  return (
    <div className="flex gap-2.5">
      <span className="w-[92px] flex-none text-[11.5px] text-ink-faint">{k}</span>
      <span className={`flex-1 text-[12px] [text-wrap:pretty] ${bold ? "font-medium" : ""}`}>{v}</span>
    </div>
  );
}
