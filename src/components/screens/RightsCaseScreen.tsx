"use client";

import { Icon } from "@/components/ui/Icon";
import { useRights } from "@/lib/supabase/operational";
import { useUI } from "@/lib/store";

const STAGES = ["Received", "Verify identity", "Locate records", "Decide", "Respond", "Closed"];
const STAGE_INDEX: Record<string, number> = {
  "Verifying identity": 1,
  Investigating: 2,
  "Response drafted": 4,
  Closed: 5,
};

const RIGHT_BY_TYPE: Record<string, { ref: string; text: string }> = {
  Access: { ref: "Section 29", text: "Confirm whether personal data relating to the subject is held, and give a description of that data." },
  Rectification: { ref: "Section 30", text: "Correct personal data that is inaccurate, misleading, incomplete or out of date." },
  Erasure: { ref: "Section 31", text: "Destroy or delete personal data that is no longer authorised to be retained." },
  Objection: { ref: "Section 32", text: "Stop or not begin processing personal data for a stated purpose where the subject objects." },
  Restriction: { ref: "Section 33", text: "Restrict processing while accuracy or the lawful basis is being established." },
  Portability: { ref: "Section 34", text: "Provide personal data in a structured, commonly used and machine-readable form." },
};

export function RightsCaseScreen() {
  const go = useUI((s) => s.go);
  const detailKey = useUI((s) => s.detailKey);
  const { requests } = useRights();
  const r = requests.find((x) => x.id === detailKey) ?? requests[0];

  if (!r) {
    return (
      <div className="animate-fade rounded-card border border-line bg-surface px-6 py-10 text-center">
        <p className="m-0 text-[13px] text-ink-muted">No request selected. Open one from the request queue.</p>
        <button onClick={() => go("rights")} className="mt-4 rounded-full border border-line-strong bg-surface px-4 py-2 text-[12.5px] font-semibold hover:border-teal hover:text-teal">Back to requests</button>
      </div>
    );
  }

  const active = STAGE_INDEX[r.stage] ?? 0;
  const closed = r.stage === "Closed";
  const right = RIGHT_BY_TYPE[r.type] ?? RIGHT_BY_TYPE.Access;
  const header: Array<[string, string]> = [
    ["Subject", r.subject],
    ["Right", r.type],
    ["Received", r.received || "—"],
    ["Days elapsed", closed ? `Closed in ${r.days}` : String(r.days)],
    ["Owner", r.owner || "Unassigned"],
    ["Channel", r.channel || "—"],
  ];

  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="flex flex-col gap-4">
        <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
          <div className="mb-5 flex flex-wrap items-center gap-1.5">
            {STAGES.map((label, i) => {
              const done = i < active || (closed && i <= active);
              const isActive = i === active && !closed;
              return (
                <div key={label} className="flex min-w-0 flex-[1_1_auto] items-center gap-1.5">
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-full" style={done ? { background: "#16775a", color: "#fff" } : { background: "#eef1f2", color: "#93a1a4", border: "1px solid #cfd8d9" }}>
                    {done ? <Icon name="check" size={12} /> : isActive ? <Icon name="loader" size={12} /> : null}
                  </span>
                  <span className="whitespace-nowrap text-[11.5px] font-medium" style={{ color: done || isActive ? "#0e1a1c" : "#93a1a4" }}>{label}</span>
                  {i < STAGES.length - 1 && <span className="h-0.5 min-w-[12px] flex-1" style={{ background: done ? "#16775a" : "#e3e9ea" }} />}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3.5 border-t border-line pt-[18px]">
            {header.map(([k, v]) => (
              <div key={k}>
                <div className="mb-[3px] text-[10.5px] text-ink-faint">{k}</div>
                <div className="text-[12.5px] font-medium [text-wrap:pretty]">{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
          <div className="mb-[11px] flex items-center gap-2.5">
            <span className="grid h-[26px] w-[26px] flex-none place-items-center rounded-lg" style={r.verified ? { background: "#e3f2ea", color: "#16775a" } : { background: "#fbe7e4", color: "#8e2b22" }}>
              <Icon name={r.verified ? "user-round-check" : "user-round-x"} size={14} />
            </span>
            <h3 className="m-0 text-[13px] font-semibold">{r.verified ? "Identity verified" : "Identity not yet verified"}</h3>
          </div>
          <p className="m-0 max-w-[78ch] text-[12.5px] leading-[1.6] text-ink-mid [text-wrap:pretty]">
            {r.verified
              ? "The requester's identity has been confirmed, so the request can be actioned against the records that belong to them."
              : "Verify the requester's identity before releasing or changing any personal data. A request from an unverified person is itself a risk."}
          </p>
        </section>

        <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
          <h3 className="m-0 mb-2.5 text-[13px] font-semibold">Working this request</h3>
          <ol className="m-0 flex list-decimal flex-col gap-2 pl-5 text-[12.5px] leading-[1.6] text-ink-mid [text-wrap:pretty]">
            <li>Verify the requester against the identity used at collection{r.activity ? ` for ${r.activity}` : ""}.</li>
            <li>Locate every record across the systems that hold their data.</li>
            <li>Decide what is released or changed, and record what is withheld and why.</li>
            <li>Respond through {r.channel || "the agreed channel"}, keeping the reasoning on file.</li>
          </ol>
          <button
            onClick={() => { go("rights"); useUI.getState().flash(`${r.id} — response recorded for ${r.subject}. Marked ${closed ? "closed" : "in progress"}.`); }}
            className="mt-4 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-teal p-3 text-[13px] font-semibold text-white hover:bg-teal-dark"
          >
            <Icon name="send" size={15} className="flex-none" />
            {closed ? "Reopen and record a response" : "Mark response sent and close"}
          </button>
        </section>
      </div>

      <aside className="flex flex-col gap-3.5 xl:sticky xl:top-[76px]">
        <div className="rounded-card border border-line bg-surface p-5">
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded border border-line bg-panel px-1.5 py-px font-mono text-[10.5px] text-ink-muted">{r.id}</span>
          </div>
          <h3 className="m-0 mb-2.5 mt-2 text-[12.5px] font-semibold">Right exercised</h3>
          <p className="m-0 mb-2.5 text-[12px] leading-[1.6] text-ink-mid">{r.type} — {right.ref}.</p>
          <p className="m-0 border-l-2 border-line-strong pl-3 text-[11.5px] italic leading-[1.55] text-ink-muted [text-wrap:pretty]">{right.text}</p>
          <button onClick={() => go("audit")} className="mt-3.5 w-full rounded-full border border-line-strong bg-surface px-3 py-2 text-[11.5px] font-semibold hover:border-teal hover:text-teal">
            Open in the audit trail
          </button>
        </div>
      </aside>
    </div>
  );
}
