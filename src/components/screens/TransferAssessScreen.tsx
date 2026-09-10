"use client";

import { Icon } from "@/components/ui/Icon";
import { TA_NOTE, TA_QUESTIONS } from "@/lib/data/transfers";
import { useTransfers } from "@/lib/supabase/operational";
import { useUI } from "@/lib/store";

export function TransferAssessScreen() {
  const go = useUI((s) => s.go);
  const detailKey = useUI((s) => s.detailKey);
  const { transfers } = useTransfers();
  const t = transfers.find((x) => x.id === detailKey) ?? transfers[0];

  if (!t) {
    return (
      <div className="animate-fade rounded-card border border-line bg-surface px-6 py-10 text-center">
        <p className="m-0 text-[13px] text-ink-muted">No transfer selected. Open one from the transfers register.</p>
        <button onClick={() => go("transfers")} className="mt-4 rounded-full border border-line-strong bg-surface px-4 py-2 text-[12.5px] font-semibold hover:border-teal hover:text-teal">Back to transfers</button>
      </div>
    );
  }

  const save = () => {
    go("transfers");
    useUI.getState().flash(`${t.id} decision recorded for the transfer to ${t.dest}.`);
  };

  const decision: Array<[string, string]> = [
    ["Status", t.status],
    ["Stated basis", t.basis || "—"],
    ["Owner", t.owner || "Unassigned"],
    ["Processor", t.processor || "—"],
    ["Volume", t.volume || "—"],
  ];

  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-3.5 border-b border-line bg-[#fbfcfc] px-6 py-[18px]">
          <div className="flex items-center gap-[11px]">
            <span className="text-[13.5px] font-semibold">Tanzania</span>
            <Icon name="arrow-right" size={15} className="flex-none text-ink-faint" />
            <span className="text-[13.5px] font-semibold">{t.dest}</span>
          </div>
          <span className="rounded-[5px] border border-line bg-surface px-[7px] py-0.5 font-mono text-[10.5px] text-ink-muted">{t.id}</span>
          <span className="ml-auto text-[11.5px] text-ink-muted">{[t.processor, t.volume].filter(Boolean).join(" · ")}</span>
        </div>

        <div className="px-6 py-[26px]">
          {t.data && (
            <div className="mb-5 rounded-[11px] border border-line bg-[#fbfcfc] px-4 py-3">
              <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.7px] text-ink-faint">This route</div>
              <p className="m-0 text-[12.5px] leading-[1.6] text-ink-mid [text-wrap:pretty]">{t.data} — sent to {t.processor || "the recipient"} in {t.dest}.{t.note ? ` ${t.note}` : ""}</p>
            </div>
          )}
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.6px] text-ink-faint">Six questions that produce a recorded decision</div>
          <div className="flex flex-col gap-5">
            {TA_QUESTIONS.map((q, i) => (
              <div key={i} className="flex gap-[13px]">
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-teal-bg text-[11px] font-bold text-teal">{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <div className="mb-[7px] text-[13.5px] font-semibold [text-wrap:pretty]">{q.q}</div>
                  <textarea
                    defaultValue=""
                    placeholder={q.help}
                    rows={2}
                    className="w-full resize-y rounded-[11px] border border-line-strong bg-surface px-3.5 py-[11px] text-[13px] leading-[1.6] text-ink-mid [text-wrap:pretty]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 border-t border-line bg-[#fbfcfc] px-6 py-4">
          <button onClick={() => go("transfers")} className="whitespace-nowrap rounded-full border border-line-strong bg-surface px-[15px] py-[9px] text-[12.5px] font-semibold hover:border-ink-faint">Cancel</button>
          <button onClick={save} className="ml-auto flex items-center gap-[7px] whitespace-nowrap rounded-full bg-teal px-[17px] py-[9px] text-[12.5px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="check" size={15} className="flex-none" />
            Record this decision
          </button>
        </div>
      </section>

      <aside className="flex flex-col gap-3.5 xl:sticky xl:top-[76px]">
        <div className="rounded-card border border-line bg-surface p-5">
          <h3 className="m-0 mb-3.5 text-[12.5px] font-semibold">This transfer</h3>
          <div className="flex flex-col gap-3">
            {decision.map(([k, v]) => (
              <div key={k}>
                <div className="mb-0.5 text-[10.5px] text-ink-faint">{k}</div>
                <div className="text-[12.5px] font-medium [text-wrap:pretty]">{v}</div>
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
