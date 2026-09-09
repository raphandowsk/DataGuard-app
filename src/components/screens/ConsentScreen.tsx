"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { AddRecordDialog, type Field } from "@/components/shell/AddRecordDialog";
import { RowRemove } from "@/components/screens/RowRemove";
import { CONSENT_NOTE } from "@/lib/data/consent";
import { useConsent, useRegisterActions } from "@/lib/supabase/operational";
import { STATUS_TO_TONE, TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

const FIELDS: Field[] = [
  { name: "purpose", label: "Purpose", required: true, placeholder: "What people agreed to", full: true },
  { name: "version", label: "Wording version", placeholder: "e.g. v1.0, Swahili and English" },
  { name: "method", label: "Method", type: "select", options: ["Web form double opt-in", "Signed paper form", "Verbal at enrolment", "Imported"] },
  { name: "status", label: "Status", type: "select", options: ["Gap", "Review", "Complete"] },
  { name: "held", label: "Consents held", placeholder: "e.g. 14,200" },
  { name: "withdrawn", label: "Withdrawn", placeholder: "e.g. 112" },
  { name: "updated", label: "Last updated", placeholder: "e.g. 14 Mar 2026" },
];

export function ConsentScreen() {
  const go = useUI((s) => s.go);
  const flash = useUI((s) => s.flash);
  const { consent, live } = useConsent();
  const { insert, remove } = useRegisterActions("consent_records");
  const [adding, setAdding] = useState(false);

  const review = consent.filter((c) => c.status !== "Complete").length;
  const stats = [
    { v: String(consent.length), k: "Consent purposes", sub: "Tracked" },
    { v: String(consent.length - review), k: "Complete", sub: "Wording and records in order" },
    { v: String(review), k: "Need review", sub: review ? "Missing wording or records" : "All complete" },
  ];

  const onSubmit = async (v: Record<string, string | boolean>) => {
    const res = await insert({
      purpose: v.purpose, version: v.version || null, method: v.method || null, held: v.held || null,
      withdrawn: v.withdrawn || null, updated: v.updated || null, status: v.status || "Gap",
    });
    if (res.ok) flash("Added consent record.");
    return res;
  };

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={stats} />

      <div className="flex items-center gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="flex-none text-ink-muted" />
        <p className="m-0 flex-1 text-[12px] leading-[1.55] text-ink-mid">{CONSENT_NOTE}</p>
        <SourcePill live={live} />
        <button onClick={() => setAdding(true)} className="flex flex-none items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
          <Icon name="plus" size={14} className="flex-none" />
          Add record
        </button>
      </div>

      {consent.length === 0 && (
        <div className="rounded-card border border-dashed border-line-strong bg-panel px-5 py-10 text-center text-[12.5px] text-ink-muted">
          No consent records yet. Record each purpose people consent to, the wording, and how many hold it.
        </div>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-3.5">
        {consent.map((c) => {
          const tone = TONE3[STATUS_TO_TONE[c.status]];
          return (
            <section key={c.purpose} className="rounded-card border border-line bg-surface px-[22px] py-5">
              <div className="mb-3.5 flex items-start gap-2.5">
                <h2 className="m-0 flex-1 text-[14px] font-semibold leading-[1.35] [text-wrap:pretty]">{c.purpose}</h2>
                <Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{c.status}</Pill>
                <RowRemove onConfirm={async () => { const res = await remove({ purpose: c.purpose }); flash(res.ok ? "Removed consent record." : res.error ?? "Could not remove."); }} />
              </div>
              <div className="mb-3.5 flex gap-5 border-y border-ground py-3.5">
                <div>
                  <div className="tnum text-[19px] font-semibold">{c.held}</div>
                  <div className="text-[11px] text-ink-muted">Held</div>
                </div>
                <div>
                  <div className="tnum text-[19px] font-semibold text-high-fg">{c.withdrawn}</div>
                  <div className="text-[11px] text-ink-muted">Withdrawn</div>
                </div>
              </div>
              <div className="flex flex-col gap-[9px]">
                <Row k="Wording" v={c.version} />
                <Row k="Method" v={c.method} />
                <Row k="Last updated" v={c.updated} />
              </div>
              <button
                onClick={() => go("consentHistory")}
                className="mt-4 flex w-full items-center justify-center gap-[7px] rounded-full border border-line-strong bg-surface px-3.5 py-[9px] text-[12.5px] font-semibold hover:border-teal hover:text-teal"
              >
                <Icon name="file-text" size={14} className="flex-none" />
                View wording history
              </button>
            </section>
          );
        })}
      </div>

      <AddRecordDialog open={adding} title="Add consent record" fields={FIELDS} submitLabel="Add record" onClose={() => setAdding(false)} onSubmit={onSubmit} />
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-2.5">
      <span className="w-[84px] flex-none text-[11.5px] text-ink-faint">{k}</span>
      <span className="flex-1 text-[12px] [text-wrap:pretty]">{v}</span>
    </div>
  );
}
