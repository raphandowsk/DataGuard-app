"use client";

import { Icon } from "@/components/ui/Icon";
import { TA_DECISION, TA_NOTE, TA_QUESTIONS } from "@/lib/data/transfers";
import { useUI } from "@/lib/store";

export function TransferAssessScreen() {
  const go = useUI((s) => s.go);

  const save = () => {
    go("transfers");
    useUI.getState().flash("TR-01 decision recorded: approve with conditions. Task created for the contract replacement.");
  };

  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-3.5 border-b border-line bg-[#fbfcfc] px-6 py-[18px]">
          <div className="flex items-center gap-[11px]">
            <span className="text-[13.5px] font-semibold">Tanzania</span>
            <Icon name="arrow-right" size={15} className="flex-none text-ink-faint" />
            <span className="text-[13.5px] font-semibold">Ireland</span>
          </div>
          <span className="rounded-[5px] border border-line bg-surface px-[7px] py-0.5 font-mono text-[10.5px] text-ink-muted">TR-01</span>
          <span className="ml-auto text-[11.5px] text-ink-muted">Salesforce NPSP · 3,480 records</span>
        </div>

        <div className="px-6 py-[26px]">
          <div className="flex flex-col gap-5">
            {TA_QUESTIONS.map((q, i) => (
              <div key={i} className="flex gap-[13px]">
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-teal-bg text-[11px] font-bold text-teal">{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <div className="mb-[7px] text-[13.5px] font-semibold [text-wrap:pretty]">{q.q}</div>
                  <div className="rounded-[11px] border border-line-strong bg-surface px-3.5 py-[11px] text-[13px] leading-[1.6] text-ink-mid [text-wrap:pretty]">{q.a}</div>
                  <div className="mt-[5px] text-[11px] text-ink-faint [text-wrap:pretty]">{q.help}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 border-t border-line bg-[#fbfcfc] px-6 py-4">
          <button onClick={() => go("transfers")} className="whitespace-nowrap rounded-full border border-line-strong bg-surface px-[15px] py-[9px] text-[12.5px] font-semibold hover:border-ink-faint">
            Cancel
          </button>
          <button onClick={save} className="ml-auto flex items-center gap-[7px] whitespace-nowrap rounded-full bg-teal px-[17px] py-[9px] text-[12.5px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="check" size={15} className="flex-none" />
            Record this decision
          </button>
        </div>
      </section>

      <aside className="flex flex-col gap-3.5 xl:sticky xl:top-[76px]">
        <div className="rounded-card border border-line bg-surface p-5">
          <h3 className="m-0 mb-3.5 text-[12.5px] font-semibold">Decision</h3>
          <div className="flex flex-col gap-3">
            {TA_DECISION.map((d) => (
              <div key={d.k}>
                <div className="mb-0.5 text-[10.5px] text-ink-faint">{d.k}</div>
                <div className="text-[12.5px] font-medium [text-wrap:pretty]">{d.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-card border border-line bg-surface p-5">
          <h3 className="m-0 mb-2.5 text-[12.5px] font-semibold">What this record is not</h3>
          <p className="m-0 text-[12px] leading-[1.6] text-ink-mid [text-wrap:pretty]">{TA_NOTE}</p>
        </div>
      </aside>
    </div>
  );
}
