"use client";

import { Icon } from "@/components/ui/Icon";
import { CONTROL_ACTIVITY, CONTROLS } from "@/lib/data/controls";
import { RISK_TONE } from "@/lib/tokens";
import { useUI, type Screen } from "@/lib/store";

export function ControlScreen() {
  const qi = useUI((s) => s.qi);
  const answers = useUI((s) => s.answers);
  const linked = useUI((s) => s.linked);
  const go = useUI((s) => s.go);

  const q = CONTROLS[qi];
  const tone = RISK_TONE[q.risk];
  const answer = answers[q.id];
  const riskLabel = q.risk.charAt(0) + q.risk.slice(1).toLowerCase();

  const header: Array<[string, string]> = [
    ["Owner", "Neema Kilonzo, DPO"],
    ["Last assessed", "21 June 2026"],
    ["Next review", "21 September 2026"],
    ["Product risk", riskLabel],
    ["Evidence", `${linked.length} linked`],
  ];

  const related: Array<{ label: string; n: number; icon: string; to: Screen }> = [
    { label: "Risks", n: 1, icon: "triangle-alert", to: "risks" },
    { label: "Tasks", n: 2, icon: "circle-check-big", to: "tasks" },
    { label: "Evidence", n: linked.length, icon: "archive", to: "evidence" },
    { label: "Processing activities", n: 4, icon: "table-2", to: "inventory" },
    { label: "Processors", n: 3, icon: "building-2", to: "processors" },
  ];

  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="flex flex-col gap-4">
        <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
          <div className="mb-3 flex flex-wrap items-center gap-2.5">
            <span className="rounded-[5px] border border-line bg-panel px-2 py-0.5 font-mono text-[11.5px] text-ink-muted">{q.id}</span>
            <span className="inline-flex items-center gap-1 rounded-[5px] px-2 py-[3px] text-[10.5px] font-bold tracking-[0.4px]" style={{ color: tone.color, background: tone.bg }}>
              <Icon name={tone.icon} size={11} />
              {q.risk}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-high-bg px-[9px] py-[3px] text-[11px] font-semibold" style={{ color: "#8a4d1f" }}>
              <Icon name="circle-dashed" size={12} />
              {answer ?? "Partially implemented"}
            </span>
          </div>
          <h2 className="m-0 mb-1.5 text-[22px] font-semibold leading-[1.3] tracking-[-0.4px]">{q.title}</h2>
          <p className="m-0 text-[13px] text-ink-muted">Personal Data Protection Act, 2022 — {q.ref} · Requirement {q.requirement}</p>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3.5 border-t border-line pt-[18px]">
            {header.map(([k, v]) => (
              <div key={k}>
                <div className="mb-[3px] text-[10.5px] text-ink-faint">{k}</div>
                <div className="text-[13px] font-medium">{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
          <h3 className="m-0 mb-2.5 text-[13px] font-semibold">Requirement</h3>
          <p className="m-0 mb-4 max-w-[78ch] text-[13.5px] leading-[1.65] text-ink-mid [text-wrap:pretty]">{q.control}</p>
          <div className="rounded-[0_11px_11px_0] border border-l-[3px] border-line border-l-teal bg-[#fbfcfc] px-4 py-3.5">
            <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.7px] text-ink-faint">Statutory text as mapped</div>
            <p className="m-0 max-w-[78ch] text-[12.5px] italic leading-[1.6] text-ink-mid">{q.statute}</p>
          </div>
          <h3 className="mb-2.5 mt-[22px] text-[13px] font-semibold">Why it matters</h3>
          <p className="m-0 max-w-[78ch] text-[13.5px] leading-[1.65] text-ink-mid [text-wrap:pretty]">{q.why}</p>
          <h3 className="mb-2.5 mt-[22px] text-[13px] font-semibold">Implementation guidance</h3>
          <p className="m-0 max-w-[78ch] text-[13.5px] leading-[1.65] text-ink-mid [text-wrap:pretty]">{q.guidance}</p>
        </section>

        <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
          <div className="mb-3.5 flex items-center justify-between gap-3">
            <h3 className="m-0 text-[13px] font-semibold">Evidence</h3>
            <button
              onClick={() => useUI.getState().openEvidence()}
              className="flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-3 py-1.5 text-[12px] font-semibold hover:border-teal hover:text-teal"
            >
              <Icon name="upload" size={14} />
              Attach evidence
            </button>
          </div>
          <div className="mb-3.5 flex gap-2.5 rounded-[11px] border border-[#d3e0f4] bg-info-bg px-3.5 py-[11px]">
            <Icon name="info" size={15} className="mt-px flex-none text-info-fg" />
            <p className="m-0 text-[11.5px] leading-[1.5]" style={{ color: "#1f4a7d" }}>
              Evidence may contain personal data. Upload only what is necessary and make sure access is restricted to authorised people.
            </p>
          </div>
          <div className="flex flex-col gap-[7px]">
            {linked.map((e, i) => (
              <div key={i} className="flex items-center gap-[11px] rounded-[11px] border border-line px-[13px] py-[11px]">
                <span className="grid h-[30px] w-[30px] flex-none place-items-center rounded-lg bg-good-bg text-good-fg">
                  <Icon name="file-check-2" size={15} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[12.5px] font-medium">{e.name}</div>
                  <div className="text-[11px] text-ink-faint">{e.meta}</div>
                </div>
                <span className="rounded-full bg-good-bg px-2 py-0.5 text-[10.5px] font-semibold text-good-fg">{e.strength}</span>
                <span className="text-[11px] text-ink-muted">{e.expiry}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
          <h3 className="m-0 mb-3.5 text-[13px] font-semibold">Activity history</h3>
          <div className="flex flex-col">
            {CONTROL_ACTIVITY.map((a, i) => (
              <div key={i} className="flex gap-3 pb-[15px]">
                <div className="flex flex-none flex-col items-center">
                  <span className="mt-[5px] h-[9px] w-[9px] rounded-full bg-line-strong" />
                  {i < CONTROL_ACTIVITY.length - 1 && <span className="mt-1 w-px flex-1 bg-ground" />}
                </div>
                <div>
                  <div className="text-[12.5px]"><span className="font-semibold">{a.who}</span> {a.what}</div>
                  <div className="mt-0.5 text-[11px] text-ink-faint">{a.when}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <aside className="flex flex-col gap-3.5 xl:sticky xl:top-[76px]">
        <div className="rounded-card border border-line bg-surface p-[18px]">
          <h3 className="m-0 mb-3 text-[12.5px] font-semibold">Assessment</h3>
          <button
            onClick={() => go("assessment")}
            className="flex w-full items-center justify-center gap-[7px] rounded-full bg-teal px-3.5 py-[9px] text-[12.5px] font-semibold text-white hover:bg-teal-dark"
          >
            <Icon name="clipboard-check" size={15} />
            Reassess this control
          </button>
          <div className="mt-3.5 flex flex-col gap-2.5">
            {answer && <div className="text-[12px] leading-[1.5] text-ink-mid">Current answer: <strong>{answer}</strong></div>}
            <div className="text-[11.5px] leading-[1.5] text-ink-muted">
              Answer options are fixed by the framework: Implemented, Partially implemented, Not implemented, Not applicable, I do not know.
            </div>
          </div>
        </div>
        <div className="rounded-card border border-line bg-surface p-[18px]">
          <h3 className="m-0 mb-3 text-[12.5px] font-semibold">Related</h3>
          <div className="flex flex-col gap-0.5">
            {related.map((r) => (
              <button key={r.label} onClick={() => go(r.to)} className="-mx-2 flex items-center gap-2.5 rounded-[9px] p-2 text-left hover:bg-panel">
                <Icon name={r.icon} size={15} className="flex-none text-ink-muted" />
                <span className="flex-1 text-[12.5px]">{r.label}</span>
                <span className="tnum text-[12px] font-semibold text-ink-muted">{r.n}</span>
                <Icon name="chevron-right" size={14} className="text-ink-faint" />
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-card border border-[#f3cec8] bg-crit-bg p-[18px]">
          <div className="mb-2 flex items-center gap-[7px]">
            <Icon name="triangle-alert" size={14} className="text-crit-fg" />
            <h3 className="m-0 text-[12.5px] font-semibold text-crit-fg">Risk rationale</h3>
          </div>
          <p className="m-0 text-[12px] leading-[1.6] [text-wrap:pretty]" style={{ color: "#7a2a22" }}>{q.riskRationale}</p>
        </div>
      </aside>
    </div>
  );
}
