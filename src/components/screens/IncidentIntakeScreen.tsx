"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { INTAKE, INTAKE_CLOCK } from "@/lib/data/incidents";
import { useRegisterActions } from "@/lib/supabase/operational";
import { useUI } from "@/lib/store";

interface Form {
  title: string;
  detected: string;
  records: string;
  source: string;
  severity: string;
  notified: boolean;
}

const SEVERITIES = ["CRITICAL", "HIGH", "MEDIUM", "LOW"];

export function IncidentIntakeScreen() {
  const step = useUI((s) => s.intakeStep);
  const setStep = useUI((s) => s.setIntakeStep);
  const flash = useUI((s) => s.flash);
  const { insert } = useRegisterActions("incidents");
  const intake = INTAKE[step];

  const [form, setForm] = useState<Form>({ title: "", detected: "", records: "", source: "", severity: "HIGH", notified: true });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));

  const canContinue = step > 0 || form.title.trim().length > 0;

  const submit = async () => {
    if (!form.title.trim()) { setStep(0); setError("Describe what happened before filing."); return; }
    setBusy(true);
    setError(null);
    const code = "INC-2026-" + String(Math.floor(100 + Math.random() * 900));
    const res = await insert({
      code, title: form.title.trim(), detected: form.detected || null, severity: form.severity,
      stage: form.notified ? "Notified" : "Investigating", records: form.records || null,
      notified: form.notified, source: form.source || null,
    });
    setBusy(false);
    if (!res.ok) { setError(res.error ?? "Could not file the incident."); return; }
    useUI.setState({ screen: "incidents", intakeStep: 0 });
    flash(`Incident ${code} filed${form.notified ? " and marked notified to the Commission" : ""}.`);
  };

  const label = "mb-1.5 text-[12px] font-semibold";
  const input = "w-full rounded-[11px] border border-line-strong bg-surface px-3.5 py-3 text-[13px]";

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
                <span className="grid h-[22px] w-[22px] flex-none place-items-center rounded-full text-[10.5px] font-bold" style={done ? { background: "#16775a", color: "#fff" } : active ? { background: "#b23a2f", color: "#fff" } : { background: "#eef1f2", color: "#93a1a4" }}>
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

          {step === 0 && (
            <div className="flex flex-col gap-3.5">
              <div>
                <div className={label}>What happened</div>
                <textarea value={form.title} onChange={(e) => set("title", e.target.value)} rows={3} placeholder="e.g. Beneficiary list emailed to the wrong ward officer" className={`${input} resize-y leading-[1.6]`} />
              </div>
              <div>
                <div className={label}>When it was detected</div>
                <input type="date" value={form.detected} onChange={(e) => set("detected", e.target.value)} className={input} />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="flex flex-col gap-3.5">
              <div>
                <div className={label}>Records and people affected</div>
                <input value={form.records} onChange={(e) => set("records", e.target.value)} placeholder="e.g. ~40 beneficiaries, names and phone numbers" className={input} />
              </div>
              <div>
                <div className={label}>How it came to light</div>
                <input value={form.source} onChange={(e) => set("source", e.target.value)} placeholder="e.g. Staff report / processor notification" className={input} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-3.5">
              <div>
                <div className={label}>Severity</div>
                <div className="flex gap-1.5">
                  {SEVERITIES.map((s) => (
                    <button key={s} onClick={() => set("severity", s)} className={`flex-1 rounded-[9px] border px-0 py-2 text-[12px] font-semibold ${form.severity === s ? "border-ink bg-ink text-white" : "border-line-strong bg-surface text-ink-muted"}`}>{s}</button>
                  ))}
                </div>
              </div>
              <button onClick={() => set("notified", !form.notified)} className="flex items-center gap-2.5 self-start rounded-[11px] border border-line-strong bg-surface px-3.5 py-3 text-[13px]">
                <span className={`grid h-[18px] w-[18px] place-items-center rounded-[5px] ${form.notified ? "bg-teal" : "border border-line-strong bg-surface"}`}>{form.notified ? <Icon name="check" size={12} className="text-white" /> : null}</span>
                Notify the Commission — this breach is reportable under section 27(5)
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="rounded-panel border border-line bg-[#fbfcfc] px-5 py-[18px]">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.7px] text-ink-faint">Review</div>
              <dl className="m-0 grid grid-cols-[130px_1fr] gap-x-3 gap-y-1.5 text-[12.5px]">
                <dt className="text-ink-faint">What happened</dt><dd className="m-0 [text-wrap:pretty]">{form.title || "—"}</dd>
                <dt className="text-ink-faint">Detected</dt><dd className="m-0">{form.detected || "—"}</dd>
                <dt className="text-ink-faint">Affected</dt><dd className="m-0">{form.records || "—"}</dd>
                <dt className="text-ink-faint">Source</dt><dd className="m-0">{form.source || "—"}</dd>
                <dt className="text-ink-faint">Severity</dt><dd className="m-0">{form.severity}</dd>
                <dt className="text-ink-faint">Commission</dt><dd className="m-0">{form.notified ? "Will be notified" : "Assessed as not notifiable"}</dd>
              </dl>
            </div>
          )}

          {error && (
            <div className="mt-4 flex items-start gap-2 rounded-[10px] border border-[#f3cec8] bg-crit-bg px-3 py-2 text-[12px] text-crit-fg">
              <Icon name="circle-alert" size={14} className="mt-px flex-none" />
              <span>{error}</span>
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2.5 border-t border-line bg-[#fbfcfc] px-[26px] py-4">
          <button onClick={() => (step === 0 ? useUI.getState().go("incidents") : setStep(step - 1))} className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line-strong bg-surface px-[15px] py-[9px] text-[12.5px] font-semibold hover:border-ink-faint">
            <Icon name="arrow-left" size={15} className="flex-none" />
            {step === 0 ? "Cancel" : "Back"}
          </button>
          {step < 3 ? (
            <button disabled={!canContinue} onClick={() => setStep(step + 1)} className="ml-auto flex items-center gap-[7px] whitespace-nowrap rounded-full bg-teal px-[17px] py-[9px] text-[12.5px] font-semibold text-white hover:bg-teal-dark disabled:opacity-50">
              Continue
              <Icon name="arrow-right" size={15} className="flex-none" />
            </button>
          ) : (
            <button disabled={busy} onClick={submit} className="ml-auto flex items-center gap-[7px] whitespace-nowrap rounded-full bg-alert px-[17px] py-[9px] text-[12.5px] font-semibold text-white hover:bg-crit-fg disabled:opacity-50">
              <Icon name="send" size={15} className="flex-none" />
              {busy ? "Filing…" : "File the incident record"}
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
