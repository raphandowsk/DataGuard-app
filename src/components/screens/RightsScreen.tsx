"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { AddRecordDialog, type Field } from "@/components/shell/AddRecordDialog";
import { RowRemove } from "@/components/screens/RowRemove";
import { RIGHTS_NOTE } from "@/lib/data/rights";
import { useRights, useRegisterActions } from "@/lib/supabase/operational";
import { useUI } from "@/lib/store";

const FIELDS: Field[] = [
  { name: "subject", label: "Data subject", required: true, placeholder: "Name of the requester" },
  { name: "type", label: "Request type", type: "select", options: ["Access", "Rectification", "Erasure", "Objection", "Restriction", "Portability"] },
  { name: "channel", label: "Channel", type: "select", options: ["Public portal", "Email", "In person", "Phone"] },
  { name: "stage", label: "Stage", type: "select", options: ["Verifying identity", "Investigating", "Response drafted", "Closed"] },
  { name: "activity", label: "Related activity", placeholder: "e.g. Beneficiary enrolment", full: true },
  { name: "owner", label: "Owner", placeholder: "Who is handling it" },
  { name: "received", label: "Received", placeholder: "e.g. 28 Aug 2026" },
  { name: "verified", label: "Identity verified", type: "checkbox" },
];

export function RightsScreen() {
  const openPortal = useUI((s) => s.openPortal);
  const flash = useUI((s) => s.flash);
  const { requests, live } = useRights();
  const { insert, remove } = useRegisterActions("rights_requests");
  const [adding, setAdding] = useState(false);

  const open = requests.filter((r) => r.stage !== "Closed");
  const awaiting = open.filter((r) => !r.verified).length;
  const longest = open.reduce((m, r) => Math.max(m, r.days || 0), 0);
  const stats = [
    { v: String(open.length), k: "Open requests", sub: `${awaiting} awaiting identity check` },
    { v: String(longest), k: "Days, longest open", sub: longest ? "Elapsed since receipt" : "None open" },
    { v: String(requests.length), k: "In the queue", sub: "All time" },
    { v: String(open.filter((r) => (r.days || 0) >= 25).length), k: "Approaching a month", sub: "Act does not fix one deadline" },
  ];

  const onSubmit = async (v: Record<string, string | boolean>) => {
    const code = "DSR-2026-" + String(Math.floor(100 + Math.random() * 900));
    const res = await insert({
      code, subject: v.subject, type: v.type || "Access", received: v.received || null, days: 0,
      stage: v.stage || "Verifying identity", verified: Boolean(v.verified), activity: v.activity || null,
      owner: v.owner || null, channel: v.channel || "Email",
    });
    if (res.ok) flash(`Logged request from ${v.subject}.`);
    return res;
  };

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={stats} />

      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55] text-ink-mid">{RIGHTS_NOTE}</p>
      </div>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Request queue</h2>
          <SourcePill live={live} />
          <button onClick={openPortal} className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line-strong bg-surface px-3 py-[7px] text-[12px] font-semibold hover:border-teal hover:text-teal">
            <Icon name="external-link" size={14} className="flex-none" />
            View public portal
          </button>
          <button onClick={() => setAdding(true)} className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="plus" size={14} className="flex-none" />
            Log a request
          </button>
        </div>
        {requests.length === 0 && (
          <p className="m-0 px-5 py-8 text-center text-[12.5px] text-ink-muted">No rights requests yet. Log one, or accept them through the public portal.</p>
        )}
        {requests.map((r) => {
          const closed = r.stage === "Closed";
          const dayLabel = closed ? `Closed in ${r.days} days` : r.days <= 0 ? "Received today" : `${r.days} days elapsed`;
          const dayColor = closed ? "#16775a" : r.days >= 9 ? "#b23a2f" : r.days >= 5 ? "#a4501f" : "#5b6b6e";
          const stageColor = closed ? "#16775a" : "#2b5f9e";
          const stageBg = closed ? "#e3f2ea" : "#e8effa";
          return (
            <div key={r.id} className="flex flex-wrap items-center gap-3.5 border-b border-ground px-5 py-3.5">
              <div className="min-w-0 flex-[1_1_300px]">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[13.5px] font-medium">{r.subject}</span>
                  <span className="rounded-full border border-line bg-[#f2f5f5] px-[9px] py-0.5 text-[11px] font-semibold text-ink-mid">{r.type}</span>
                  {r.verified ? (
                    <span className="inline-flex items-center gap-1 rounded bg-good-bg px-1.5 py-0.5 text-[10.5px] font-semibold text-good-fg"><Icon name="user-round-check" size={11} />Verified</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded bg-crit-bg px-1.5 py-0.5 text-[10.5px] font-semibold text-crit-fg"><Icon name="user-round-x" size={11} />Identity not verified</span>
                  )}
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-2.5 text-[11px] text-ink-faint">
                  <span className="rounded border border-line bg-panel px-1.5 py-px font-mono text-[10.5px] text-ink-muted">{r.id}</span>
                  <span>{r.activity}</span><span>·</span><span>{r.channel}</span><span>·</span><span>{r.owner}</span>
                </div>
              </div>
              <div className="flex-none text-right">
                <div className="tnum text-[12.5px] font-semibold" style={{ color: dayColor }}>{dayLabel}</div>
                <div className="mt-0.5 text-[11px] text-ink-faint">Received {r.received}</div>
              </div>
              <span className="inline-flex flex-none items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-[3px] text-[11px] font-semibold" style={{ color: stageColor, background: stageBg }}>{r.stage}</span>
              <RowRemove onConfirm={async () => { const res = await remove({ code: r.id }); flash(res.ok ? `Removed ${r.id}.` : res.error ?? "Could not remove."); }} />
            </div>
          );
        })}
      </section>

      <AddRecordDialog open={adding} title="Log a rights request" fields={FIELDS} submitLabel="Log request" onClose={() => setAdding(false)} onSubmit={onSubmit} />
    </div>
  );
}
