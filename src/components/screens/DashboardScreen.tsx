"use client";

import { Icon } from "@/components/ui/Icon";
import { ACTIVITY, COVERAGE, DOMAINS, PRIORITY_ACTIONS, RISK_COUNTS } from "@/lib/data/dashboard";
import { RISK_TONE, shade, shadeIcon } from "@/lib/tokens";
import { useUI } from "@/lib/store";
import { LiveBadge } from "@/components/ui/LiveBadge";
import { useFrameworkSummary } from "@/lib/supabase/useFramework";

export function DashboardScreen() {
  const go = useUI((s) => s.go);
  const fw = useFrameworkSummary();
  const controls = fw.status === "live" ? fw.data.controls : 123;
  const requirements = fw.status === "live" ? fw.data.requirements : 96;

  return (
    <div className="flex animate-fade flex-col gap-4">
      {/* top row */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1.45fr)]">
        {/* control coverage */}
        <section className="flex flex-col rounded-card border border-line bg-surface px-6 py-[22px]">
          <div className="flex items-center justify-between gap-3">
            <h2 className="m-0 text-[13px] font-semibold tracking-[0.1px]">Control coverage</h2>
            <span className="rounded-full border border-line bg-panel px-2 py-0.5 text-[10.5px] text-ink-muted">
              Not a legal opinion
            </span>
          </div>
          <div className="mt-3.5 flex items-baseline gap-3.5">
            <div className="font-serif text-[76px] leading-[0.86] tracking-[-2px]">
              {COVERAGE.pct}
              <span className="text-[34px]">%</span>
            </div>
            <div className="pb-1.5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-high-bg px-2.5 py-[3px] text-[12px] font-semibold text-high-fg">
                <Icon name="triangle-alert" size={13} />
                Needs attention
              </div>
              <div className="mt-[7px] flex items-center gap-1.5 text-[12px] font-medium text-good-fg">
                <Icon name="trending-up" size={14} />
                {COVERAGE.delta}
              </div>
            </div>
          </div>
          <div className="mt-[18px] h-2 overflow-hidden rounded-full bg-ground">
            <div className="h-full origin-left animate-grow rounded-full bg-teal" style={{ width: `${COVERAGE.pct}%` }} />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2.5 border-t border-line pt-[18px]">
            <Stat value={<>{COVERAGE.assessed}<span className="text-[13px] font-normal text-ink-faint">/{COVERAGE.ofTotal}</span></>} label="Controls assessed" />
            <Stat value={COVERAGE.assessmentCoverage} label="Assessment coverage" />
            <Stat value={COVERAGE.evidenceCoverage} label="Evidence coverage" />
          </div>
          <p className="m-0 mt-4 text-[11px] leading-[1.5] text-ink-faint [text-wrap:pretty]">
            Coverage describes how many mapped controls are assessed and evidenced. It is not a statement that your
            organisation is legally compliant with the Personal Data Protection Act, 2022.
          </p>
        </section>

        {/* coverage by domain */}
        <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
          <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
            <h2 className="m-0 text-[13px] font-semibold">Coverage by domain</h2>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-ink-muted">{controls} controls · {requirements} requirements</span>
              <LiveBadge />
            </div>
          </div>
          <div className="flex flex-col">
            {DOMAINS.map(([name, ref, n]) => (
              <button
                key={name}
                onClick={() => go("assessment")}
                className="-mx-2 grid grid-cols-[minmax(0,150px)_minmax(40px,1fr)_70px] items-center gap-3 rounded-[9px] px-2 py-2 text-left hover:bg-panel"
              >
                <div className="min-w-0">
                  <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[12.5px] font-medium">{name}</div>
                  <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[10.5px] text-ink-faint">{ref}</div>
                </div>
                <div className="h-1.5 min-w-[40px] overflow-hidden rounded-full bg-ground">
                  <div className="h-full rounded-full" style={{ width: `${n}%`, background: shade(n) }} />
                </div>
                <div className="flex items-center justify-end gap-[7px]">
                  <span className="tnum text-[12.5px] font-semibold">{n}%</span>
                  <Icon name={shadeIcon(n)} size={13} style={{ color: shade(n) }} />
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* bottom row */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        {/* priority actions */}
        <section className="overflow-hidden rounded-card border border-line bg-surface">
          <div className="flex items-center justify-between gap-3 border-b border-line px-[22px] pb-3.5 pt-[18px]">
            <div>
              <h2 className="m-0 text-[13px] font-semibold">Five things need your attention</h2>
              <p className="m-0 mt-[3px] text-[11.5px] text-ink-muted">Ranked by product risk level and how overdue they are</p>
            </div>
            <button
              onClick={() => go("tasks")}
              className="whitespace-nowrap border-none bg-transparent text-[12px] font-semibold text-teal hover:underline"
            >
              All tasks
            </button>
          </div>
          {PRIORITY_ACTIONS.map((p) => {
            const tone = RISK_TONE[p.severity];
            return (
              <div key={p.control} className="flex items-center gap-3.5 border-b border-ground px-[22px] py-3">
                <span className="w-[3px] flex-none self-stretch rounded-full" style={{ background: tone.color }} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-bold tracking-[0.4px]"
                      style={{ color: tone.color, background: tone.bg }}
                    >
                      <Icon name={tone.icon} size={11} />
                      {p.severity.charAt(0) + p.severity.slice(1).toLowerCase()}
                    </span>
                    <span className="text-[13px] font-medium">{p.title}</span>
                  </div>
                  <div className="mt-[5px] flex flex-wrap items-center gap-2.5 text-[11px] text-ink-muted">
                    <span className="rounded border border-line bg-panel px-1.5 py-px font-mono text-[10.5px]">{p.control}</span>
                    <span>{p.ref}</span>
                    <span>·</span>
                    <span>{p.owner}</span>
                    <span>·</span>
                    <span className="font-medium" style={{ color: p.overdue ? "#b23a2f" : "#5b6b6e" }}>{p.due}</span>
                  </div>
                </div>
                <button
                  onClick={() => (p.action === "Open task" ? go("tasks") : useUI.getState().assess(p.control))}
                  className="flex-none rounded-full border border-line-strong bg-surface px-3 py-1.5 text-[12px] font-semibold hover:border-teal hover:text-teal"
                >
                  {p.action}
                </button>
              </div>
            );
          })}
        </section>

        {/* right column */}
        <div className="flex flex-col gap-4">
          <section className="rounded-card border border-line bg-surface px-[22px] py-5">
            <div className="mb-3.5 flex items-center justify-between">
              <h2 className="m-0 text-[13px] font-semibold">Open risks</h2>
              <button onClick={() => go("risks")} className="border-none bg-transparent text-[12px] font-semibold text-teal hover:underline">
                Register
              </button>
            </div>
            <div className="flex h-2.5 gap-0.5 overflow-hidden rounded-full">
              <div style={{ width: "25%", background: "#b23a2f" }} />
              <div style={{ width: "33%", background: "#c67139" }} />
              <div style={{ width: "29%", background: "#c9a227" }} />
              <div style={{ width: "13%", background: "#7a8a5e" }} />
            </div>
            <div className="mt-3.5 flex flex-col gap-px">
              {RISK_COUNTS.map((r) => (
                <div key={r.label} className="flex items-center gap-2.5 py-1.5">
                  <span className="h-[9px] w-[9px] rounded-[3px]" style={{ background: r.color }} />
                  <span className="flex-1 text-[12.5px]">{r.label}</span>
                  <span className="tnum text-[12.5px] font-semibold">{r.n}</span>
                </div>
              ))}
            </div>
            <p className="m-0 mt-3 border-t border-ground pt-3 text-[10.5px] leading-[1.5] text-ink-faint">
              Severity follows the DataGuard product risk scoring methodology. It is not a statutory classification and
              does not correspond to any penalty in the Act.
            </p>
          </section>

          <section className="rounded-card border border-line bg-surface px-[22px] py-5">
            <h2 className="m-0 mb-3.5 text-[13px] font-semibold">Recent activity</h2>
            <div className="flex flex-col">
              {ACTIVITY.map((a, i) => (
                <div key={i} className="flex gap-[11px] pb-3.5">
                  <div className="flex flex-none flex-col items-center">
                    <span className="grid h-6 w-6 place-items-center rounded-full border border-line bg-panel text-ink-muted">
                      <Icon name={a.icon} size={12} />
                    </span>
                    {i < ACTIVITY.length - 1 && <span className="mt-1 w-px flex-1 bg-ground" />}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12.5px] leading-[1.35]">
                      <span className="font-semibold">{a.who}</span> {a.what}
                    </div>
                    <div className="mt-0.5 text-[11px] text-ink-faint">
                      {a.detail} · {a.when}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="tnum text-[19px] font-semibold">{value}</div>
      <div className="mt-0.5 text-[11px] text-ink-muted">{label}</div>
    </div>
  );
}
