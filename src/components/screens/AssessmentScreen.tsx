"use client";

import { Icon } from "@/components/ui/Icon";
import { ANSWERS, ASSESS_SECTIONS, CONTROLS } from "@/lib/data/controls";
import { RISK_TONE, shade } from "@/lib/tokens";
import { useUI } from "@/lib/store";

export function AssessmentScreen() {
  const qi = useUI((s) => s.qi);
  const answers = useUI((s) => s.answers);
  const notes = useUI((s) => s.notes);
  const linked = useUI((s) => s.linked);

  const q = CONTROLS[qi];
  const tone = RISK_TONE[q.risk];
  const answer = answers[q.id];
  const answered = !!answer;
  const progressLabel = `${qi + 1} of 17 answered · 106 of 123 across the framework`;
  const progressPct = Math.round(((qi + 1) / 17) * 100);

  const meta: Array<[string, string]> = [
    ["Legal basis", q.ref],
    ["Requirement", q.requirement],
    ["Risk category", q.category],
    ["Role scope", q.roleScope],
    ["Evidence review", q.review],
    ["Owner", "Neema Kilonzo, DPO"],
  ];

  const saveAndNext = () => {
    const next = Math.min(CONTROLS.length - 1, qi + 1);
    useUI.setState({ qi: next, notes: "" });
    useUI.getState().flash(`Answer saved to ${q.id}. Evidence and notes travel with it.`);
  };

  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[260px_minmax(0,1fr)_300px]">
      {/* left: sections */}
      <aside className="rounded-card border border-line bg-surface p-4 xl:sticky xl:top-[76px]">
        <div className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.8px] text-ink-faint">Sections</div>
        <div className="flex flex-col gap-0.5">
          {ASSESS_SECTIONS.map(([name, , count, pct]) => {
            const active = name === "Security";
            const color = shade(pct);
            const icon = pct >= 80 ? "circle-check" : pct >= 65 ? "circle-dot" : "triangle-alert";
            return (
              <div key={name} className={`rounded-[10px] p-2.5 ${active ? "border border-[#cbe6e3] bg-teal-bg" : "border border-transparent"}`}>
                <div className="flex items-center gap-2">
                  <Icon name={icon} size={14} className="flex-none" style={{ color }} />
                  <span className="flex-1 text-[12.5px] font-medium">{name}</span>
                  <span className="tnum text-[10.5px] text-ink-muted">{count}</span>
                </div>
                <div className="mt-[7px] h-1 overflow-hidden rounded-full bg-ground">
                  <div className="h-full" style={{ width: `${pct}%`, background: color }} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 border-t border-line pt-3.5 text-[11px] leading-[1.5] text-ink-muted">
          Answers save as you go. You can leave an item as <em>I do not know</em> and come back to it.
        </div>
      </aside>

      {/* middle: question */}
      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex items-center gap-4 border-b border-line bg-[#fbfcfc] px-[26px] py-4">
          <div className="flex-1">
            <div className="mb-[7px] flex items-center justify-between text-[11.5px] text-ink-muted">
              <span>Security of personal data · Section 27</span>
              <span className="tnum">{progressLabel}</span>
            </div>
            <div className="h-[5px] overflow-hidden rounded-full bg-ground">
              <div className="h-full rounded-full bg-teal transition-[width] duration-300" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        </div>

        <div className="px-[26px] pb-[26px] pt-7">
          <div className="mb-4 flex flex-wrap items-center gap-2.5">
            <span className="rounded-[5px] border border-line bg-panel px-[7px] py-0.5 font-mono text-[11px] text-ink-muted">{q.id}</span>
            <span className="inline-flex items-center gap-1 rounded-[5px] px-[7px] py-[3px] text-[10px] font-bold tracking-[0.4px]" style={{ color: tone.color, background: tone.bg }}>
              <Icon name={tone.icon} size={11} />
              {q.risk} RISK
            </span>
            <span className="rounded-[5px] border border-line px-[7px] py-0.5 text-[10.5px] text-ink-muted">{q.sourceType}</span>
            {q.actEvidence && (
              <span className="inline-flex items-center gap-1 rounded-[5px] bg-info-bg px-[7px] py-0.5 text-[10.5px] font-semibold text-info-fg">
                <Icon name="paperclip" size={11} />
                Evidence required by the Act
              </span>
            )}
          </div>

          <h2 className="m-0 mb-[22px] max-w-[36ch] text-[25px] font-semibold leading-[1.28] tracking-[-0.5px] [text-wrap:pretty]">
            {q.question}
          </h2>

          <div role="radiogroup" aria-label="Assessment answer" className="flex max-w-[520px] flex-col gap-2">
            {ANSWERS.map((label) => {
              const on = answer === label;
              return (
                <button
                  key={label}
                  role="radio"
                  aria-checked={on}
                  onClick={() => useUI.getState().setAnswer(q.id, label)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-[13px] text-left ${on ? "border-[1.5px] border-teal bg-teal-bg" : "border-[1.5px] border-line bg-surface hover:border-line-strong hover:bg-[#fbfcfc]"}`}
                >
                  <span
                    className="h-[17px] w-[17px] flex-none rounded-full bg-surface"
                    style={on ? { border: "5px solid #0d7d75" } : { border: "1.5px solid #cfd8d9" }}
                  />
                  <span className="flex-1 text-left text-[13.5px] font-medium">{label}</span>
                  {on && <Icon name="check" size={15} className="text-teal" />}
                </button>
              );
            })}
          </div>

          {/* why */}
          <div className="mt-[26px] rounded-panel border border-line bg-[#fbfcfc] px-5 py-[18px]">
            <div className="mb-2 flex items-center gap-2">
              <Icon name="lightbulb" size={15} style={{ color: "#c67139" }} />
              <h3 className="m-0 text-[12.5px] font-semibold">Why are we asking this?</h3>
            </div>
            <p className="m-0 max-w-[70ch] text-[13px] leading-[1.6] text-ink-mid [text-wrap:pretty]">{q.why}</p>
            <div className="mt-3.5 border-t border-line pt-3.5">
              <div className="mb-[5px] text-[10px] font-bold uppercase tracking-[0.7px] text-ink-faint">Legal reference</div>
              <div className="text-[12.5px] font-medium">Personal Data Protection Act, 2022 — {q.ref}</div>
              <p className="m-0 mt-2 max-w-[72ch] border-l-2 border-line-strong pl-3 text-[12px] italic leading-[1.55] text-ink-muted">{q.statute}</p>
            </div>
          </div>

          {/* evidence */}
          <div className="mt-[22px]">
            <div className="mb-2.5 flex items-center justify-between">
              <h3 className="m-0 text-[12.5px] font-semibold">Evidence</h3>
              <button
                onClick={() => useUI.getState().openEvidence()}
                className="flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-3 py-1.5 text-[12px] font-semibold hover:border-teal hover:text-teal"
              >
                <Icon name="upload" size={14} />
                Attach evidence
              </button>
            </div>
            {linked.length > 0 ? (
              <div className="flex flex-col gap-[7px]">
                {linked.map((e, i) => (
                  <div key={i} className="flex items-center gap-[11px] rounded-[11px] border border-line bg-surface px-[13px] py-2.5">
                    <span className="grid h-7 w-7 flex-none place-items-center rounded-lg bg-good-bg text-good-fg">
                      <Icon name="file-check-2" size={15} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[12.5px] font-medium">{e.name}</div>
                      <div className="text-[11px] text-ink-faint">{e.meta}</div>
                    </div>
                    <span className="rounded-full bg-good-bg px-2 py-0.5 text-[10.5px] font-semibold text-good-fg">{e.strength}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-line-strong bg-[#fbfcfc] p-5 text-center">
                <div className="text-[12.5px] font-medium">No evidence linked to this control yet</div>
                <p className="m-0 mx-auto mt-1.5 max-w-[46ch] text-[11.5px] leading-[1.5] text-ink-muted">Suggested for this control: {q.suggested.join(", ")}</p>
              </div>
            )}
          </div>

          {/* notes */}
          <div className="mt-[22px]">
            <label htmlFor="dg-notes" className="mb-2 block text-[12.5px] font-semibold">Assessment notes</label>
            <textarea
              id="dg-notes"
              value={notes}
              onChange={(e) => useUI.getState().setNotes(e.target.value)}
              rows={3}
              placeholder="What is in place today, who owns it, and what is still missing."
              className="w-full resize-y rounded-xl border border-line-strong bg-surface px-3.5 py-3 text-[13px] leading-[1.55]"
            />
          </div>
        </div>

        <div className="flex items-center gap-2.5 border-t border-line bg-[#fbfcfc] px-[26px] py-4">
          <button
            onClick={() => useUI.getState().setQi(Math.max(0, qi - 1))}
            className="flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-[15px] py-[9px] text-[12.5px] font-semibold hover:border-ink-faint"
          >
            <Icon name="arrow-left" size={15} />
            Previous
          </button>
          <button onClick={() => useUI.getState().go("control")} className="border-none bg-transparent px-1 py-[9px] text-[12.5px] font-semibold text-teal hover:underline">
            Open full control page
          </button>
          <div className="ml-auto flex items-center gap-2.5">
            {answered && (
              <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-good-fg">
                <Icon name="circle-check" size={14} />
                Answer recorded
              </span>
            )}
            <button onClick={saveAndNext} className="flex items-center gap-1.5 rounded-full bg-teal px-[17px] py-[9px] text-[12.5px] font-semibold text-white hover:bg-teal-dark">
              Save and continue
              <Icon name="arrow-right" size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* right: control meta */}
      <aside className="flex flex-col gap-3.5 xl:sticky xl:top-[76px]">
        <div className="rounded-card border border-line bg-surface p-[18px]">
          <h3 className="m-0 mb-3 text-[12.5px] font-semibold">This control</h3>
          <div className="flex flex-col gap-[11px]">
            {meta.map(([k, v]) => (
              <div key={k} className="flex items-start gap-2.5">
                <span className="w-24 flex-none text-[11.5px] text-ink-faint">{k}</span>
                <span className="flex-1 text-right text-[12px] font-medium [text-wrap:pretty]">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-card border border-line bg-surface p-[18px]">
          <h3 className="m-0 mb-2 text-[12.5px] font-semibold">Expected state</h3>
          <p className="m-0 text-[12px] leading-[1.6] text-ink-mid [text-wrap:pretty]">{q.expected}</p>
        </div>
        <div className="rounded-card border border-[#eed9c4] bg-high-bg p-[18px]">
          <div className="mb-2 flex items-center gap-[7px]">
            <Icon name="wrench" size={14} style={{ color: "#8a4d1f" }} />
            <h3 className="m-0 text-[12.5px] font-semibold" style={{ color: "#5f3512" }}>Remediation</h3>
          </div>
          <p className="m-0 mb-3 text-[12px] leading-[1.6] [text-wrap:pretty]" style={{ color: "#5f3512" }}>{q.remediation}</p>
          <button
            onClick={() => {
              useUI.getState().go("tasks");
              useUI.getState().flash(`Task created: ${q.task}`);
            }}
            className="flex w-full items-center justify-center gap-[7px] rounded-full border border-[#dcc3a6] bg-surface px-3 py-2 text-[12px] font-semibold hover:border-[#c67139]"
            style={{ color: "#5f3512" }}
          >
            <Icon name="plus" size={14} />
            Create remediation task
          </button>
        </div>
      </aside>
    </div>
  );
}
