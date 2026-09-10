import { Icon } from "@/components/ui/Icon";

const ANSWERS = ["Implemented", "Partially implemented", "Not implemented", "Not applicable", "I do not know"];

export function AssessmentPreview() {
  return (
    <div className="grid min-h-[420px] grid-cols-1 gap-3 bg-ground p-4 md:grid-cols-[150px_minmax(0,1fr)_170px]">
      {/* domains rail */}
      <aside className="hidden rounded-[13px] border border-line bg-surface p-3 md:block">
        <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.8px] text-ink-faint">Domains</div>
        {[["Governance", 74], ["Lawfulness", 100], ["Data quality", 50], ["Security", 59], ["Retention", 57], ["Rights", 71]].map(([name, n]) => (
          <div key={name as string} className={`rounded-[8px] p-2 ${name === "Security" ? "border border-[#cbe6e3] bg-teal-bg" : ""}`}>
            <div className="flex items-center justify-between text-[11px] font-medium"><span>{name}</span></div>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-ground"><div className="h-full rounded-full bg-teal" style={{ width: `${n}%` }} /></div>
          </div>
        ))}
      </aside>

      {/* question */}
      <section className="overflow-hidden rounded-[13px] border border-line bg-surface">
        <div className="border-b border-line bg-[#fbfcfc] px-5 py-3">
          <div className="mb-1.5 flex items-center justify-between text-[10.5px] text-ink-muted"><span>Security · Section 27(1)</span><span>8 of 11 in this domain</span></div>
          <div className="h-1 overflow-hidden rounded-full bg-ground"><div className="h-full rounded-full bg-teal" style={{ width: "73%" }} /></div>
        </div>
        <div className="px-5 pb-5 pt-4">
          <div className="mb-3 flex flex-wrap items-center gap-1.5">
            <span className="rounded border border-line bg-panel px-1.5 py-0.5 font-mono text-[9.5px] text-ink-muted">PDPA-027-005</span>
            <span className="inline-flex items-center gap-1 rounded bg-crit-bg px-1.5 py-0.5 text-[9px] font-bold tracking-[0.3px] text-crit-fg"><Icon name="octagon-alert" size={10} />CRITICAL RISK</span>
          </div>
          <h4 className="m-0 mb-4 max-w-[30ch] text-[19px] font-semibold leading-[1.3] tracking-[-0.4px]">
            Are you protected against people seeing personal data when they have no business reason to see it?
          </h4>
          <div className="flex flex-col gap-2">
            {ANSWERS.map((a) => {
              const on = a === "Partially implemented";
              return (
                <div key={a} className={`flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5 text-[12.5px] font-medium ${on ? "border-[1.5px] border-teal bg-teal-bg" : "border-[1.5px] border-line bg-surface"}`}>
                  <span className="h-[15px] w-[15px] flex-none rounded-full" style={on ? { border: "5px solid #0d7d75" } : { border: "1.5px solid #cfd8d9" }} />
                  <span className="flex-1">{a}</span>
                  {on && <Icon name="check" size={14} className="text-teal" />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* control meta */}
      <aside className="hidden flex-col gap-3 md:flex">
        <div className="rounded-[13px] border border-line bg-surface p-3.5">
          <div className="mb-2 text-[11px] font-semibold">This control</div>
          {[["Legal basis", "Section 27(1)"], ["Risk category", "Security"], ["Role scope", "Controller & processor"], ["Evidence review", "Quarterly"]].map(([k, v]) => (
            <div key={k} className="mb-2"><div className="text-[9.5px] text-ink-faint">{k}</div><div className="text-[11px] font-medium">{v}</div></div>
          ))}
        </div>
        <div className="rounded-[13px] border border-[#eed9c4] bg-high-bg p-3.5">
          <div className="mb-1 flex items-center gap-1.5"><Icon name="wrench" size={12} style={{ color: "#8a4d1f" }} /><span className="text-[11px] font-semibold" style={{ color: "#5f3512" }}>Remediation</span></div>
          <p className="m-0 text-[10.5px] leading-[1.5]" style={{ color: "#5f3512" }}>Implement least-privilege access and periodic reviews for personal data.</p>
        </div>
      </aside>
    </div>
  );
}
