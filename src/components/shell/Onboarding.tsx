"use client";

import { Icon } from "@/components/ui/Icon";
import { ONBOARDING } from "@/lib/data/settings";
import { useUI } from "@/lib/store";

export function Onboarding() {
  const open = useUI((s) => s.onboarding);
  const step = useUI((s) => s.obStep);
  const setStep = useUI((s) => s.setObStep);
  const close = useUI((s) => s.closeOnboarding);
  if (!open) return null;

  const ob = ONBOARDING[step];
  const last = step === 4;
  const pct = Math.round(((step + 1) / 5) * 100);

  const finish = () => {
    useUI.setState({ onboarding: false, screen: "assessment", obStep: 0 });
    useUI.getState().flash("Workspace created. Baseline assessment started.");
  };

  return (
    <div className="fixed inset-0 z-[92] animate-fade overflow-y-auto bg-ground">
      <div className="flex min-h-full flex-col">
        <header className="flex flex-wrap items-center gap-3 border-b border-line bg-surface px-[22px] py-3.5">
          <div className="flex min-w-0 flex-1 items-center gap-2.5">
            <div className="grid h-7 w-7 flex-none place-items-center rounded-[9px] bg-teal text-white">
              <Icon name="shield-check" size={16} />
            </div>
            <span className="text-[15px] font-semibold tracking-[-0.2px]">DataGuard setup</span>
          </div>
          <span className="flex-none text-[11.5px] text-ink-muted">Step {step + 1} of 5</span>
          <button onClick={close} className="flex-none border-none bg-transparent text-[12px] font-semibold text-ink-muted hover:text-ink">Exit setup</button>
        </header>

        <div className="h-1 flex-none bg-line">
          <div className="h-full bg-teal transition-[width] duration-300" style={{ width: `${pct}%` }} />
        </div>

        <div className="flex-1 px-[22px] pb-[50px] pt-[34px]">
          <div className="mx-auto grid max-w-[920px] grid-cols-1 items-start gap-7 md:grid-cols-[230px_minmax(0,1fr)]">
            <aside className="flex flex-col gap-0.5">
              {ONBOARDING.map((o, i) => {
                const active = i === step;
                const done = i < step;
                return (
                  <div key={o.n} className={`flex items-center gap-2.5 rounded-[10px] px-[11px] py-[9px] ${active ? "border border-[#cbe6e3] bg-teal-bg" : "border border-transparent"}`}>
                    <span
                      className="grid h-[22px] w-[22px] flex-none place-items-center rounded-full text-[10.5px] font-bold"
                      style={done ? { background: "#16775a", color: "#fff" } : active ? { background: "#0d7d75", color: "#fff" } : { background: "#eef1f2", color: "#93a1a4" }}
                    >
                      {done ? <Icon name="check" size={11} /> : o.n}
                    </span>
                    <span className="text-[12.5px] font-medium" style={{ color: i <= step ? "#0e1a1c" : "#93a1a4" }}>{o.label}</span>
                  </div>
                );
              })}
            </aside>

            <section className="rounded-[18px] border border-line bg-surface px-[34px] py-8">
              <h1 className="m-0 mb-3 max-w-[32ch] text-[24px] font-semibold leading-[1.28] tracking-[-0.5px] [text-wrap:pretty]">{ob.title}</h1>
              <p className="m-0 mb-[26px] max-w-[62ch] text-[14px] leading-[1.65] text-ink-mid [text-wrap:pretty]">{ob.body}</p>

              <div className="flex flex-col gap-[11px]">
                {ob.fields.map((f) => (
                  <div key={f} className="flex min-h-[46px] items-center gap-3 rounded-xl border border-line bg-[#fbfcfc] px-4 py-[13px]">
                    <Icon name="circle-dashed" size={15} className="flex-none text-ink-faint" />
                    <span className="text-[13.5px] text-ink-mid">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2.5 border-t border-line pt-[22px]">
                <button onClick={() => setStep(step - 1)} className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line-strong bg-surface px-4 py-2.5 text-[12.5px] font-semibold hover:border-ink-faint">
                  <Icon name="arrow-left" size={15} className="flex-none" />
                  Back
                </button>
                {last ? (
                  <button onClick={finish} className="ml-auto flex items-center gap-[7px] whitespace-nowrap rounded-full bg-teal px-[18px] py-2.5 text-[12.5px] font-semibold text-white hover:bg-teal-dark">
                    <Icon name="clipboard-check" size={15} className="flex-none" />
                    Start baseline assessment
                  </button>
                ) : (
                  <button onClick={() => setStep(step + 1)} className="ml-auto flex items-center gap-[7px] whitespace-nowrap rounded-full bg-teal px-[18px] py-2.5 text-[12.5px] font-semibold text-white hover:bg-teal-dark">
                    Continue
                    <Icon name="arrow-right" size={15} className="flex-none" />
                  </button>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
