"use client";

import { Icon } from "@/components/ui/Icon";
import {
  INTAKE,
  INTAKE_CLOCK,
  INTAKE_DECISION,
  INTAKE_DECISION_NOTE,
  INTAKE_TESTS,
} from "@/lib/data/incidents";
import { useUI } from "@/lib/store";

export function IncidentIntakeScreen() {
  const step = useUI((s) => s.intakeStep);
  const setStep = useUI((s) => s.setIntakeStep);
  const intake = INTAKE[step];

  const submit = () => {
    useUI.setState({ screen: "incidents", intakeStep: 0 });
    useUI.getState().flash("Notification filed. Elapsed time from detection recorded as 18h 50m.");
  };

  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[220px_minmax(0,1fr)_300px]">
      {/* steps rail */}
      <aside className="rounded-card border border-line bg-surface p-4 xl:sticky xl:top-[76px]">
        <div className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.8px] text-ink-faint">Steps</div>
        <div className="flex flex-col gap-0.5">
          {INTAKE.map((o, i) => {
            const active = i === step;
            const done = i < step;
            return (
              <div key={o.n} className={`flex items-center gap-2.5 rounded-[10px] px-[11px] py-[9px] ${active ? "border border-[#f3cec8] bg-crit-bg" : "border border-transparent"}`}>
                <span
                  className="grid h-[22px] w-[22px] flex-none place-items-center rounded-full text-[10.5px] font-bold"
                  style={done ? { background: "#16775a", color: "#fff" } : active ? { background: "#b23a2f", color: "#fff" } : { background: "#eef1f2", color: "#93a1a4" }}
                >
                  {done ? <Icon name="check" size={11} /> : o.n}
                </span>
                <span className="text-[12.5px] font-medium" style={{ color: i <= step ? "#0e1a1c" : "#93a1a4" }}>{o.label}</span>
              </div>
            );
          })}
        </div>
      </aside>

      {/* main */}
      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-[#f3cec8] bg-crit-bg px-[26px] py-3.5">
          <Icon name="clock" size={15} className="flex-none text-crit-fg" />
          <span className="text-[12px] font-semibold text-crit-fg">{INTAKE_CLOCK}</span>
        </div>
        <div className="px-[26px] pb-[26px] pt-7">
          <h2 className="m-0 mb-2.5 max-w-[34ch] text-[23px] font-semibold leading-[1.3] tracking-[-0.4px] [text-wrap:pretty]">{intake.title}</h2>
          <p className="m-0 mb-6 max-w-[66ch] text-[13.5px] leading-[1.65] text-ink-mid [text-wrap:pretty]">{intake.body}</p>

          {intake.fields.length > 0 && (
            <div className="flex flex-col gap-3.5">
              {intake.fields.map((f) => (
                <div key={f.label}>
                  <div className="mb-1.5 text-[12px] font-semibold">{f.label}</div>
                  {f.kind === "text" && (
                    <div className="rounded-[11px] border border-line-strong bg-surface px-3.5 py-3 text-[13px] leading-[1.6] text-ink-mid [text-wrap:pretty]">{f.value}</div>
                  )}
                  {f.kind === "value" && (
                    <div className="rounded-[11px] border border-line bg-[#fbfcfc] px-3.5 py-[11px] text-[13px] text-ink-mid">{f.value}</div>
                  )}
                  {f.kind === "flag" && (
                    <div className="flex items-center gap-2 rounded-[11px] border border-[#f3cec8] bg-crit-bg px-3.5 py-[11px] text-[13px] font-semibold text-crit-fg">
                      <Icon name="circle-alert" size={15} className="flex-none" />
                      {f.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mb-5 flex flex-col gap-2">
                {INTAKE_TESTS.map((t, i) => {
                  const color = t.tone === "bad" ? "#8e2b22" : "#16775a";
                  const bg = t.tone === "bad" ? "#fbe7e4" : "#e3f2ea";
                  const icon = t.tone === "bad" ? "circle-alert" : "circle-check";
                  return (
                    <div key={i} className="flex items-center gap-3 rounded-[11px] border border-line px-[15px] py-3">
                      <span className="grid h-6 w-6 flex-none place-items-center rounded-full" style={{ background: bg, color }}>
                        <Icon name={icon} size={13} />
                      </span>
                      <span className="min-w-0 flex-1 text-[13px] [text-wrap:pretty]">{t.q}</span>
                      <span className="flex-none text-right text-[12px] font-semibold" style={{ color }}>{t.a}</span>
                    </div>
                  );
                })}
              </div>
              <div className="rounded-panel border border-[#f3cec8] bg-crit-bg px-5 py-[18px]">
                <div className="mb-2 flex items-center gap-2">
                  <Icon name="siren" size={16} className="flex-none text-crit-fg" />
                  <h3 className="m-0 text-[13px] font-semibold text-crit-fg">Your assessment</h3>
                </div>
                <p className="m-0 mb-3 text-[13px] leading-[1.6] [text-wrap:pretty]" style={{ color: "#7a2a22" }}>{INTAKE_DECISION}</p>
                <p className="m-0 border-t border-[#f0c4bd] pt-3 text-[11.5px] leading-[1.55] [text-wrap:pretty]" style={{ color: "#8e5049" }}>{INTAKE_DECISION_NOTE}</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2.5 border-t border-line bg-[#fbfcfc] px-[26px] py-4">
          <button onClick={() => setStep(step - 1)} className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line-strong bg-surface px-[15px] py-[9px] text-[12.5px] font-semibold hover:border-ink-faint">
            <Icon name="arrow-left" size={15} className="flex-none" />
            Back
          </button>
          {step < 3 ? (
            <button onClick={() => setStep(step + 1)} className="ml-auto flex items-center gap-[7px] whitespace-nowrap rounded-full bg-teal px-[17px] py-[9px] text-[12.5px] font-semibold text-white hover:bg-teal-dark">
              Continue
              <Icon name="arrow-right" size={15} className="flex-none" />
            </button>
          ) : (
            <button onClick={submit} className="ml-auto flex items-center gap-[7px] whitespace-nowrap rounded-full bg-alert px-[17px] py-[9px] text-[12.5px] font-semibold text-white hover:bg-crit-fg">
              <Icon name="send" size={15} className="flex-none" />
              File notification with the Commission
            </button>
          )}
        </div>
      </section>

      {/* the duty aside */}
      <aside className="rounded-card border border-line bg-surface p-5 xl:sticky xl:top-[76px]">
        <h3 className="m-0 mb-2.5 text-[12.5px] font-semibold">The duty</h3>
        <p className="m-0 mb-3.5 border-l-2 border-line-strong pl-3 text-[12px] italic leading-[1.6] text-ink-muted [text-wrap:pretty]">
          The data controller shall notify the Commission, without any undue delay, of any security breach affecting personal data being processed by or on behalf of the data controller.
        </p>
        <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.7px] text-ink-faint">Source</div>
        <div className="mb-4 text-[12px] font-medium">Section 27(5) · PDPA-027-016</div>
        <div className="rounded-[11px] border border-line bg-[#fbfcfc] px-[15px] py-[13px]">
          <p className="m-0 text-[11.5px] leading-[1.6] text-ink-mid [text-wrap:pretty]">
            The duty covers breaches at your processors as well as your own systems. If a supplier tells you they have had an incident affecting your data, this form is where it goes.
          </p>
        </div>
      </aside>
    </div>
  );
}
