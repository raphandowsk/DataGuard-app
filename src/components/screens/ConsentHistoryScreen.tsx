"use client";

import { Icon } from "@/components/ui/Icon";
import { CONSENT_HISTORY_NOTE, CONSENT_VERSIONS, DIFF } from "@/lib/data/consent";
import { useUI } from "@/lib/store";

const DIFF_STYLE: Record<string, React.CSSProperties> = {
  add: { background: "#e3f2ea", color: "#12503c", borderLeft: "3px solid #16775a" },
  del: { background: "#fbe7e4", color: "#7a2a22", borderLeft: "3px solid #b23a2f", textDecoration: "line-through" },
  same: { background: "#fbfcfc", color: "#3d4e51", borderLeft: "3px solid #e3e9ea" },
};
const DIFF_MARK: Record<string, string> = { add: "Added in v3.1", del: "Removed in v3.1", same: "Unchanged" };

export function ConsentHistoryScreen() {
  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-3 border-b border-line px-6 py-[18px]">
          <div className="flex-1">
            <h2 className="m-0 text-[13px] font-semibold">What changed between v3.0 and v3.1</h2>
            <p className="m-0 mt-[3px] text-[11.5px] text-ink-muted">Swahili original shown in English translation for review</p>
          </div>
          <div className="flex flex-wrap gap-3.5">
            <span className="flex items-center gap-1.5 text-[11px] text-ink-muted"><span className="h-[9px] w-[9px] rounded-[3px] bg-good-fg" />Added</span>
            <span className="flex items-center gap-1.5 text-[11px] text-ink-muted"><span className="h-[9px] w-[9px] rounded-[3px] bg-alert" />Removed</span>
          </div>
        </div>
        <div className="flex flex-col gap-[7px] px-6 py-[22px]">
          {DIFF.map((d, i) => (
            <div key={i}>
              <div className="rounded-lg px-3 py-[7px] text-[13px] leading-[1.65] [text-wrap:pretty]" style={DIFF_STYLE[d.kind]}>{d.text}</div>
              <div className="mt-[3px] pl-3 text-[10px] text-ink-faint">{DIFF_MARK[d.kind]}</div>
            </div>
          ))}
        </div>
      </section>

      <aside className="flex flex-col gap-3.5 xl:sticky xl:top-[76px]">
        <div className="rounded-card border border-line bg-surface p-5">
          <h3 className="m-0 mb-3 text-[12.5px] font-semibold">Versions</h3>
          <div className="flex flex-col gap-[9px]">
            {CONSENT_VERSIONS.map((v) => (
              <div key={v.v} className={`rounded-xl px-4 py-3.5 ${v.current ? "border-[1.5px] border-teal bg-teal-bg" : "border border-line bg-surface"}`}>
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="text-[13px] font-semibold">{v.v}</span>
                  {v.current && <span className="rounded bg-surface px-[5px] py-0.5 text-[9.5px] font-bold tracking-[0.3px] text-teal-dark">CURRENT</span>}
                  <span className="tnum ml-auto text-[11px] text-ink-muted">{v.pop}</span>
                </div>
                <div className="mb-1.5 text-[10.5px] text-ink-faint">{v.date} · {v.langs}</div>
                <div className="text-[11.5px] leading-[1.55] text-ink-mid [text-wrap:pretty]">{v.change}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-card border border-[#eed9c4] bg-high-bg p-5">
          <div className="mb-2 flex items-center gap-[7px]">
            <Icon name="triangle-alert" size={14} className="flex-none" style={{ color: "#8a4d1f" }} />
            <h3 className="m-0 text-[12.5px] font-semibold" style={{ color: "#5f3512" }}>Coverage gap</h3>
          </div>
          <p className="m-0 mb-3 text-[12px] leading-[1.6] [text-wrap:pretty]" style={{ color: "#5f3512" }}>{CONSENT_HISTORY_NOTE}</p>
          <button
            onClick={() => useUI.getState().flash("Re-consent campaign drafted for 2,360 beneficiaries on wording earlier than v3.1.")}
            className="flex w-full items-center justify-center gap-[7px] rounded-full border border-[#dcc3a6] bg-surface px-3 py-2 text-[12px] font-semibold hover:border-[#c67139]"
            style={{ color: "#5f3512" }}
          >
            <Icon name="refresh-cw" size={14} className="flex-none" />
            Plan a re-consent campaign
          </button>
        </div>
      </aside>
    </div>
  );
}
