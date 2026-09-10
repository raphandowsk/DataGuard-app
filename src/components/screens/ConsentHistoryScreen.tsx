"use client";

import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { useConsent } from "@/lib/supabase/operational";
import { STATUS_TO_TONE, TONE3 } from "@/lib/tokens";
import { useUI } from "@/lib/store";

export function ConsentHistoryScreen() {
  const go = useUI((s) => s.go);
  const detailKey = useUI((s) => s.detailKey);
  const { consent } = useConsent();
  const c = consent.find((x) => x.purpose === detailKey) ?? consent[0];

  if (!c) {
    return (
      <div className="animate-fade rounded-card border border-line bg-surface px-6 py-10 text-center">
        <p className="m-0 text-[13px] text-ink-muted">No consent record selected. Open one from the consent register.</p>
        <button onClick={() => go("consent")} className="mt-4 rounded-full border border-line-strong bg-surface px-4 py-2 text-[12.5px] font-semibold hover:border-teal hover:text-teal">Back to consent</button>
      </div>
    );
  }

  const tone = TONE3[STATUS_TO_TONE[c.status]];
  const facts: Array<[string, string]> = [
    ["Current wording", c.version || "—"],
    ["How it is captured", c.method || "—"],
    ["Last updated", c.updated || "—"],
  ];

  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-3 border-b border-line px-6 py-[18px]">
          <div className="flex-1">
            <h2 className="m-0 text-[14px] font-semibold leading-[1.35] [text-wrap:pretty]">{c.purpose}</h2>
            <p className="m-0 mt-[3px] text-[11.5px] text-ink-muted">Consent wording and population for this purpose</p>
          </div>
          <Pill color={tone.color} bg={tone.bg} icon={tone.icon}>{c.status}</Pill>
        </div>

        <div className="flex gap-6 border-b border-line px-6 py-5">
          <div>
            <div className="tnum text-[26px] font-semibold leading-none">{c.held || "0"}</div>
            <div className="mt-1 text-[11px] text-ink-muted">Consents held</div>
          </div>
          <div>
            <div className="tnum text-[26px] font-semibold leading-none text-high-fg">{c.withdrawn || "0"}</div>
            <div className="mt-1 text-[11px] text-ink-muted">Withdrawn</div>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 px-6 py-5">
          {facts.map(([k, v]) => (
            <div key={k}>
              <div className="mb-[3px] text-[10.5px] text-ink-faint">{k}</div>
              <div className="text-[12.5px] font-medium [text-wrap:pretty]">{v}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-line px-6 py-5">
          <div className="flex items-start gap-[11px] rounded-xl border border-line bg-[#fbfcfc] px-4 py-3">
            <Icon name="history" size={16} className="mt-px flex-none text-ink-muted" />
            <p className="m-0 text-[12px] leading-[1.6] text-ink-mid [text-wrap:pretty]">
              Each time the wording changes, record it as a new version so you can show what a person agreed to on the
              date they agreed. People still sitting on wording earlier than the current version may need re-consent.
            </p>
          </div>
        </div>
      </section>

      <aside className="flex flex-col gap-3.5 xl:sticky xl:top-[76px]">
        <div className="rounded-card border border-line bg-surface p-5">
          <h3 className="m-0 mb-2.5 text-[12.5px] font-semibold">Why wording matters</h3>
          <p className="m-0 border-l-2 border-line-strong pl-3 text-[11.5px] italic leading-[1.55] text-ink-muted [text-wrap:pretty]">
            Consent must be specific and informed. The wording a person saw is the record of what they agreed to, so it
            is kept per version rather than overwritten.
          </p>
        </div>
        <div className="rounded-card border border-line bg-surface p-5">
          <h3 className="m-0 mb-2.5 text-[12.5px] font-semibold">Actions</h3>
          <button onClick={() => go("consent")} className="mb-2 w-full rounded-full border border-line-strong bg-surface px-3 py-2 text-[12px] font-semibold hover:border-teal hover:text-teal">
            Back to consent register
          </button>
          <button onClick={() => useUI.getState().flash(`Re-consent campaign drafted for “${c.purpose}”.`)} className="w-full rounded-full border border-line-strong bg-surface px-3 py-2 text-[12px] font-semibold hover:border-teal hover:text-teal">
            Plan a re-consent campaign
          </button>
        </div>
      </aside>
    </div>
  );
}
