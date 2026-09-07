"use client";

import { Icon } from "@/components/ui/Icon";
import {
  CASE_EXCLUSION_NOTE,
  CASE_HEADER,
  CASE_IDENTITY_NOTE,
  CASE_LOG,
  CASE_RECORDS,
  CASE_STAGES,
} from "@/lib/data/rights";
import { useUI } from "@/lib/store";

export function RightsCaseScreen() {
  const go = useUI((s) => s.go);

  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="flex flex-col gap-4">
        {/* stage tracker + header */}
        <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
          <div className="mb-5 flex flex-wrap items-center gap-1.5">
            {CASE_STAGES.map((st, i) => {
              const active = !st.done && CASE_STAGES[i - 1]?.done;
              return (
                <div key={st.key} className="flex min-w-0 flex-[1_1_auto] items-center gap-1.5">
                  <span
                    className="grid h-6 w-6 flex-none place-items-center rounded-full"
                    style={
                      st.done
                        ? { background: "#16775a", color: "#fff" }
                        : { background: "#eef1f2", color: "#93a1a4", border: "1px solid #cfd8d9" }
                    }
                  >
                    {st.done ? <Icon name="check" size={12} /> : active ? <Icon name="loader" size={12} /> : null}
                  </span>
                  <span className="whitespace-nowrap text-[11.5px] font-medium" style={{ color: st.done ? "#0e1a1c" : "#93a1a4" }}>{st.label}</span>
                  {i < CASE_STAGES.length - 1 && <span className="h-0.5 min-w-[12px] flex-1" style={{ background: st.done ? "#16775a" : "#e3e9ea" }} />}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3.5 border-t border-line pt-[18px]">
            {CASE_HEADER.map((h) => (
              <div key={h.k}>
                <div className="mb-[3px] text-[10.5px] text-ink-faint">{h.k}</div>
                <div className="text-[12.5px] font-medium [text-wrap:pretty]">{h.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* identity */}
        <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
          <div className="mb-[11px] flex items-center gap-2.5">
            <span className="grid h-[26px] w-[26px] flex-none place-items-center rounded-lg bg-good-bg text-good-fg">
              <Icon name="user-round-check" size={14} />
            </span>
            <h3 className="m-0 text-[13px] font-semibold">Identity verified</h3>
            <span className="text-[11px] text-ink-faint">29 Aug 2026, 09:40</span>
          </div>
          <p className="m-0 max-w-[78ch] text-[12.5px] leading-[1.6] text-ink-mid [text-wrap:pretty]">{CASE_IDENTITY_NOTE}</p>
        </section>

        {/* records located */}
        <section className="overflow-hidden rounded-card border border-line bg-surface">
          <div className="border-b border-line px-[22px] pb-3.5 pt-[18px]">
            <h3 className="m-0 text-[13px] font-semibold">Records located</h3>
            <p className="m-0 mt-[3px] text-[11.5px] text-ink-muted">Five systems searched against the verified identity. Two records are released, three are not.</p>
          </div>
          {CASE_RECORDS.map((r, i) => (
            <div key={i} className="flex flex-wrap items-center gap-3.5 border-b border-ground px-[22px] py-3">
              <div className="min-w-0 flex-[1_1_280px]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[12.5px] font-medium">{r.system}</span>
                  {r.sensitive && <span className="rounded bg-crit-bg px-[5px] py-px text-[9.5px] font-bold tracking-[0.3px] text-crit-fg">SENSITIVE</span>}
                </div>
                <div className="mt-[3px] text-[11px] text-ink-faint">{r.activity}</div>
                <div className="mt-1 text-[11.5px] text-ink-mid [text-wrap:pretty]">{r.found}</div>
              </div>
              <span
                className="flex-none whitespace-nowrap rounded-full px-[11px] py-[3px] text-[11px] font-semibold"
                style={r.include ? { color: "#16775a", background: "#e3f2ea" } : { color: "#5b6b6e", background: "#f2f5f5" }}
              >
                {r.include ? "Include" : "Exclude"}
              </span>
            </div>
          ))}
          <div className="flex items-start gap-[11px] bg-high-bg px-[22px] py-3.5">
            <Icon name="triangle-alert" size={15} className="mt-px flex-none" style={{ color: "#8a4d1f" }} />
            <p className="m-0 max-w-[82ch] text-[11.5px] leading-[1.55] [text-wrap:pretty]" style={{ color: "#5f3512" }}>{CASE_EXCLUSION_NOTE}</p>
          </div>
        </section>

        {/* response pack */}
        <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
          <div className="mb-3.5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="m-0 text-[13px] font-semibold">Response pack</h3>
            <span className="text-[11px] text-ink-muted">Drafted 4 Sep 2026 · not yet sent</span>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <PackItem icon="file-text" title="Cover letter, Swahili and English" sub="Explains what is enclosed and what was withheld, and why" />
            <PackItem icon="table-2" title="Enrolment record extract" sub="Beneficiary DB and KoboToolbox, ward officer name redacted" />
          </div>
          <div className="mb-4 rounded-xl border border-line bg-[#fbfcfc] px-4 py-3.5">
            <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.7px] text-ink-faint">How the pack is delivered</div>
            <p className="m-0 text-[12px] leading-[1.6] text-ink-mid [text-wrap:pretty]">
              Collected in person at the Mwanza field office against the same identification used to verify the request.
              Postal delivery is not used for records containing national ID numbers.
            </p>
          </div>
          <button
            onClick={() => {
              go("rights");
              useUI.getState().flash("Response pack sent to Halima Juma. DSR-2026-041 moves to Closed.");
            }}
            className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-teal p-3 text-[13px] font-semibold text-white hover:bg-teal-dark"
          >
            <Icon name="send" size={15} className="flex-none" />
            Mark response sent and close
          </button>
        </section>
      </div>

      <aside className="flex flex-col gap-3.5 xl:sticky xl:top-[76px]">
        <div className="rounded-card border border-line bg-surface p-5">
          <h3 className="m-0 mb-3.5 text-[12.5px] font-semibold">Case log</h3>
          <div className="flex flex-col">
            {CASE_LOG.map((l, i) => (
              <div key={i} className="flex gap-[11px] pb-3.5">
                <div className="flex flex-none flex-col items-center">
                  <span className="mt-[5px] h-2 w-2 rounded-full bg-line-strong" />
                  {i < CASE_LOG.length - 1 && <span className="mt-1 w-px flex-1 bg-ground" />}
                </div>
                <div className="min-w-0">
                  <div className="text-[12px] leading-[1.45]"><span className="font-semibold">{l.who}</span> {l.what}</div>
                  <div className="mt-0.5 text-[10.5px] text-ink-faint">{l.when}</div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => go("audit")} className="w-full rounded-full border border-line-strong bg-surface px-3 py-2 text-[11.5px] font-semibold hover:border-teal hover:text-teal">
            Open in the audit trail
          </button>
        </div>
        <div className="rounded-card border border-line bg-surface p-5">
          <h3 className="m-0 mb-2.5 text-[12.5px] font-semibold">Right exercised</h3>
          <p className="m-0 mb-2.5 text-[12px] leading-[1.6] text-ink-mid">Access to personal data, section 29.</p>
          <p className="m-0 border-l-2 border-line-strong pl-3 text-[11.5px] italic leading-[1.55] text-ink-muted [text-wrap:pretty]">
            A data subject may request a data controller to confirm whether personal data relating to him is held, and to be given a description of that data.
          </p>
        </div>
      </aside>
    </div>
  );
}

function PackItem({ icon, title, sub }: { icon: string; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-[11px] rounded-[11px] border border-line px-[13px] py-[11px]">
      <span className="grid h-7 w-7 flex-none place-items-center rounded-lg bg-teal-bg text-teal">
        <Icon name={icon} size={14} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[12.5px] font-medium">{title}</div>
        <div className="text-[11px] text-ink-faint">{sub}</div>
      </div>
    </div>
  );
}
