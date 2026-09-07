"use client";

import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { CONSENT_NOTE, CONSENT_STATS } from "@/lib/data/consent";
import { useConsent } from "@/lib/supabase/operational";
import { STATUS_TO_TONE, TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

export function ConsentScreen() {
  const go = useUI((s) => s.go);
  const { consent, live } = useConsent();

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={CONSENT_STATS} />

      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 flex-1 text-[12px] leading-[1.55] text-ink-mid">{CONSENT_NOTE}</p>
        <SourcePill live={live} />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-3.5">
        {consent.map((c) => {
          const tone = TONE3[STATUS_TO_TONE[c.status]];
          return (
            <section key={c.purpose} className="rounded-card border border-line bg-surface px-[22px] py-5">
              <div className="mb-3.5 flex items-start gap-2.5">
                <h2 className="m-0 flex-1 text-[14px] font-semibold leading-[1.35] [text-wrap:pretty]">{c.purpose}</h2>
                <Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{c.status}</Pill>
              </div>
              <div className="mb-3.5 flex gap-5 border-y border-ground py-3.5">
                <div>
                  <div className="tnum text-[19px] font-semibold">{c.held}</div>
                  <div className="text-[11px] text-ink-muted">Held</div>
                </div>
                <div>
                  <div className="tnum text-[19px] font-semibold text-high-fg">{c.withdrawn}</div>
                  <div className="text-[11px] text-ink-muted">Withdrawn</div>
                </div>
              </div>
              <div className="flex flex-col gap-[9px]">
                <Row k="Wording" v={c.version} />
                <Row k="Method" v={c.method} />
                <Row k="Last updated" v={c.updated} />
              </div>
              <button
                onClick={() => go("consentHistory")}
                className="mt-4 flex w-full items-center justify-center gap-[7px] rounded-full border border-line-strong bg-surface px-3.5 py-[9px] text-[12.5px] font-semibold hover:border-teal hover:text-teal"
              >
                <Icon name="file-text" size={14} className="flex-none" />
                View wording history
              </button>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-2.5">
      <span className="w-[84px] flex-none text-[11.5px] text-ink-faint">{k}</span>
      <span className="flex-1 text-[12px] [text-wrap:pretty]">{v}</span>
    </div>
  );
}
