"use client";

import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { SourcePill } from "@/components/ui/SourcePill";
import { TRANSFER_NOTE } from "@/lib/data/transfers";
import { useTransfers } from "@/lib/supabase/operational";
import { TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

export function TransfersScreen() {
  const go = useUI((s) => s.go);
  const { transfers, live } = useTransfers();
  return (
    <div className="flex animate-fade flex-col gap-4">
      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 flex-1 text-[12px] leading-[1.55] text-ink-mid">{TRANSFER_NOTE}</p>
        <SourcePill live={live} />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-3.5">
        {transfers.map((t) => {
          const tone = TONE3[t.tone];
          return (
            <section key={t.id} className="rounded-card border border-line bg-surface px-[22px] py-5">
              <div className="mb-3.5 flex flex-wrap items-center gap-2.5">
                <span className="rounded-[5px] border border-line bg-panel px-[7px] py-0.5 font-mono text-[10.5px] text-ink-muted">{t.id}</span>
                <Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{t.status}</Pill>
              </div>
              <div className="mb-4 flex items-center gap-3">
                <div className="text-center">
                  <div className="text-[11px] text-ink-faint">From</div>
                  <div className="mt-0.5 text-[13.5px] font-semibold">Tanzania</div>
                </div>
                <div className="relative h-0.5 min-w-[24px] flex-1 bg-line">
                  <Icon name="arrow-right" size={15} className="absolute -right-1 -top-[7px] bg-surface text-ink-faint" />
                </div>
                <div className="text-center">
                  <div className="text-[11px] text-ink-faint">To</div>
                  <div className="mt-0.5 text-[13.5px] font-semibold">{t.dest}</div>
                </div>
              </div>
              <div className="flex flex-col gap-[9px] border-t border-ground pt-3.5">
                <Row k="Processor" v={t.processor} bold />
                <Row k="Data" v={t.data} />
                <Row k="Volume" v={t.volume} />
                <Row k="Stated basis" v={t.basis} />
                <Row k="Owner" v={t.owner} />
              </div>
              <p className="m-0 mt-3.5 rounded-[11px] border border-line bg-[#fbfcfc] px-3.5 py-3 text-[12px] leading-[1.55] text-ink-mid [text-wrap:pretty]">{t.note}</p>
              <button
                onClick={() => go("transferAssess")}
                className="mt-3.5 flex w-full items-center justify-center gap-[7px] rounded-full border border-line-strong bg-surface px-3.5 py-[9px] text-[12.5px] font-semibold hover:border-teal hover:text-teal"
              >
                <Icon name="clipboard-list" size={14} className="flex-none" />
                Open transfer assessment
              </button>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function Row({ k, v, bold }: { k: string; v: string; bold?: boolean }) {
  return (
    <div className="flex gap-2.5">
      <span className="w-[92px] flex-none text-[11.5px] text-ink-faint">{k}</span>
      <span className={`flex-1 text-[12px] [text-wrap:pretty] ${bold ? "font-medium" : ""}`}>{v}</span>
    </div>
  );
}
