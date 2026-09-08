"use client";

import { Icon } from "@/components/ui/Icon";
import { RISK_TONE, shade, shadeIcon } from "@/lib/tokens";
import { useUI } from "@/lib/store";
import { LiveBadge } from "@/components/ui/LiveBadge";
import { useControls } from "@/components/ControlsProvider";
import { useTasks, useRisks, useAudit } from "@/lib/supabase/operational";
import { useFrameworkSummary } from "@/lib/supabase/useFramework";

const PRIORITY_RANK: Record<string, number> = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };

const RISK_BANDS = [
  { label: "Critical", color: "#b23a2f", lo: 15, hi: 26 },
  { label: "High", color: "#c67139", lo: 10, hi: 15 },
  { label: "Medium", color: "#c9a227", lo: 5, hi: 10 },
  { label: "Low", color: "#7a8a5e", lo: 1, hi: 5 },
];

export function DashboardScreen() {
  const go = useUI((s) => s.go);
  const assess = useUI((s) => s.assess);
  const answers = useUI((s) => s.answers);
  const controls = useControls();
  const fw = useFrameworkSummary();
  const { tasks } = useTasks();
  const { risks } = useRisks();
  const { audit } = useAudit();

  const requirements = fw.status === "live" ? fw.data.requirements : 96;

  // --- Coverage, computed from the framework controls and this user's answers ---
  const total = controls.total || controls.list.length;
  const list = controls.list;
  const answered = list.filter((c) => answers[c.id] && answers[c.id] !== "");
  const assessed = answered.length;
  const implemented = list.filter((c) => answers[c.id] === "Implemented").length;
  const partial = list.filter((c) => answers[c.id] === "Partially implemented").length;
  const coveragePct = total ? Math.round((100 * (implemented + 0.5 * partial)) / total) : 0;
  const assessmentPct = total ? Math.round((100 * assessed) / total) : 0;
  const implementedPct = total ? Math.round((100 * implemented) / total) : 0;

  // --- Coverage by domain (control category), weighted the same way ---
  const domainMap = new Map<string, { total: number; score: number }>();
  for (const c of list) {
    const key = c.category || "Other";
    const e = domainMap.get(key) ?? { total: 0, score: 0 };
    e.total += 1;
    const a = answers[c.id];
    e.score += a === "Implemented" ? 1 : a === "Partially implemented" ? 0.5 : 0;
    domainMap.set(key, e);
  }
  const domains = [...domainMap.entries()]
    .map(([name, e]) => ({ name, n: e.total ? Math.round((100 * e.score) / e.total) : 0, count: e.total }))
    .sort((a, b) => a.n - b.n || b.count - a.count);

  // --- Priority actions from open tasks ---
  const openTasks = tasks.filter((t) => t.status !== "Completed" && t.status !== "Cancelled");
  const priority = [...openTasks]
    .sort(
      (a, b) =>
        (PRIORITY_RANK[a.priority] ?? 9) - (PRIORITY_RANK[b.priority] ?? 9) ||
        Number(b.overdue) - Number(a.overdue),
    )
    .slice(0, 5);

  // --- Risk register buckets ---
  const scored = risks.map((r) => r.l * r.i);
  const riskCounts = RISK_BANDS.map((b) => ({
    ...b,
    n: scored.filter((s) => s >= b.lo && s < b.hi).length,
  }));
  const totalRisks = risks.length;

  // --- Recent activity from the audit trail ---
  const activity = audit.slice(0, 5);

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

          {assessed === 0 ? (
            <div className="mt-4 flex flex-1 flex-col items-start justify-center gap-3 rounded-[12px] border border-dashed border-line-strong bg-panel px-5 py-7">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-teal-bg text-teal">
                <Icon name="clipboard-check" size={20} />
              </span>
              <div>
                <div className="text-[14px] font-semibold">No controls assessed yet</div>
                <p className="m-0 mt-1 max-w-[42ch] text-[12px] leading-[1.5] text-ink-muted">
                  Work through the {total} mapped controls to see where you stand against the Personal Data Protection
                  Act, 2022. Your answers build this picture.
                </p>
              </div>
              <button
                onClick={() => go("assessment")}
                className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-teal px-4 py-2 text-[12.5px] font-semibold text-white hover:bg-teal-dark"
              >
                <Icon name="arrow-right" size={14} />
                Start assessment
              </button>
            </div>
          ) : (
            <>
              <div className="mt-3.5 flex items-baseline gap-3.5">
                <div className="font-serif text-[76px] leading-[0.86] tracking-[-2px]">
                  {coveragePct}
                  <span className="text-[34px]">%</span>
                </div>
                <div className="pb-1.5">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-panel px-2.5 py-[3px] text-[12px] font-semibold text-ink-mid">
                    <Icon name="clipboard-check" size={13} />
                    {assessed} of {total} assessed
                  </div>
                </div>
              </div>
              <div className="mt-[18px] h-2 overflow-hidden rounded-full bg-ground">
                <div
                  className="h-full origin-left animate-grow rounded-full bg-teal"
                  style={{ width: `${coveragePct}%` }}
                />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2.5 border-t border-line pt-[18px]">
                <Stat
                  value={
                    <>
                      {assessed}
                      <span className="text-[13px] font-normal text-ink-faint">/{total}</span>
                    </>
                  }
                  label="Controls assessed"
                />
                <Stat value={`${assessmentPct}%`} label="Assessment coverage" />
                <Stat value={`${implementedPct}%`} label="Fully implemented" />
              </div>
              <p className="m-0 mt-4 text-[11px] leading-[1.5] text-ink-faint [text-wrap:pretty]">
                Coverage weights fully implemented controls fully and partially implemented controls by half. It is not
                a statement that your organisation is legally compliant with the Personal Data Protection Act, 2022.
              </p>
            </>
          )}
        </section>

        {/* coverage by domain */}
        <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
          <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
            <h2 className="m-0 text-[13px] font-semibold">Coverage by domain</h2>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-ink-muted">
                {total} controls · {requirements} requirements
              </span>
              <LiveBadge />
            </div>
          </div>
          <div className="flex flex-col">
            {domains.map((d) => (
              <button
                key={d.name}
                onClick={() => go("assessment")}
                className="-mx-2 grid grid-cols-[minmax(0,150px)_minmax(40px,1fr)_70px] items-center gap-3 rounded-[9px] px-2 py-2 text-left hover:bg-panel"
              >
                <div className="min-w-0">
                  <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[12.5px] font-medium">
                    {d.name}
                  </div>
                  <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[10.5px] text-ink-faint">
                    {d.count} control{d.count === 1 ? "" : "s"}
                  </div>
                </div>
                <div className="h-1.5 min-w-[40px] overflow-hidden rounded-full bg-ground">
                  <div className="h-full rounded-full" style={{ width: `${d.n}%`, background: shade(d.n) }} />
                </div>
                <div className="flex items-center justify-end gap-[7px]">
                  <span className="tnum text-[12.5px] font-semibold">{d.n}%</span>
                  <Icon name={shadeIcon(d.n)} size={13} style={{ color: shade(d.n) }} />
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
              <h2 className="m-0 text-[13px] font-semibold">
                {priority.length > 0 ? `${priority.length} thing${priority.length === 1 ? "" : "s"} need your attention` : "Priority actions"}
              </h2>
              <p className="m-0 mt-[3px] text-[11.5px] text-ink-muted">Open tasks, ranked by risk level and how overdue they are</p>
            </div>
            <button
              onClick={() => go("tasks")}
              className="whitespace-nowrap border-none bg-transparent text-[12px] font-semibold text-teal hover:underline"
            >
              All tasks
            </button>
          </div>
          {priority.length === 0 ? (
            <EmptyRow
              icon="circle-check"
              title="Nothing needs your attention"
              body="Open remediation tasks will appear here as you assess controls and raise gaps."
            />
          ) : (
            priority.map((p) => {
              const tone = RISK_TONE[p.priority] ?? RISK_TONE.LOW;
              return (
                <div key={p.id} className="flex items-center gap-3.5 border-b border-ground px-[22px] py-3">
                  <span className="w-[3px] flex-none self-stretch rounded-full" style={{ background: tone.color }} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-bold tracking-[0.4px]"
                        style={{ color: tone.color, background: tone.bg }}
                      >
                        <Icon name={tone.icon} size={11} />
                        {p.priority.charAt(0) + p.priority.slice(1).toLowerCase()}
                      </span>
                      <span className="text-[13px] font-medium">{p.title}</span>
                    </div>
                    <div className="mt-[5px] flex flex-wrap items-center gap-2.5 text-[11px] text-ink-muted">
                      {p.control && (
                        <span className="rounded border border-line bg-panel px-1.5 py-px font-mono text-[10.5px]">{p.control}</span>
                      )}
                      {p.owner && <span>{p.owner}</span>}
                      {p.due && (
                        <>
                          <span>·</span>
                          <span className="font-medium" style={{ color: p.overdue ? "#b23a2f" : "#5b6b6e" }}>{p.due}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => (p.control ? assess(p.control) : go("tasks"))}
                    className="flex-none rounded-full border border-line-strong bg-surface px-3 py-1.5 text-[12px] font-semibold hover:border-teal hover:text-teal"
                  >
                    {p.control ? "Assess" : "Open task"}
                  </button>
                </div>
              );
            })
          )}
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
            {totalRisks === 0 ? (
              <p className="m-0 py-2 text-[12px] leading-[1.5] text-ink-muted">
                No risks in the register yet. Risks you raise against controls will be scored and summarised here.
              </p>
            ) : (
              <>
                <div className="flex h-2.5 gap-0.5 overflow-hidden rounded-full">
                  {riskCounts.map((r) =>
                    r.n > 0 ? (
                      <div key={r.label} style={{ width: `${(100 * r.n) / totalRisks}%`, background: r.color }} />
                    ) : null,
                  )}
                </div>
                <div className="mt-3.5 flex flex-col gap-px">
                  {riskCounts.map((r) => (
                    <div key={r.label} className="flex items-center gap-2.5 py-1.5">
                      <span className="h-[9px] w-[9px] rounded-[3px]" style={{ background: r.color }} />
                      <span className="flex-1 text-[12.5px]">{r.label}</span>
                      <span className="tnum text-[12.5px] font-semibold">{r.n}</span>
                    </div>
                  ))}
                </div>
                <p className="m-0 mt-3 border-t border-ground pt-3 text-[10.5px] leading-[1.5] text-ink-faint">
                  Severity follows the DataGuard product risk scoring methodology. It is not a statutory classification
                  and does not correspond to any penalty in the Act.
                </p>
              </>
            )}
          </section>

          <section className="rounded-card border border-line bg-surface px-[22px] py-5">
            <h2 className="m-0 mb-3.5 text-[13px] font-semibold">Recent activity</h2>
            {activity.length === 0 ? (
              <p className="m-0 py-1 text-[12px] leading-[1.5] text-ink-muted">
                No activity yet. Changes to answers, evidence, tasks and risks will show up here.
              </p>
            ) : (
              <div className="flex flex-col">
                {activity.map((a, i) => (
                  <div key={i} className="flex gap-[11px] pb-3.5">
                    <div className="flex flex-none flex-col items-center">
                      <span className="grid h-6 w-6 place-items-center rounded-full border border-line bg-panel text-ink-muted">
                        <Icon name="history" size={12} />
                      </span>
                      {i < activity.length - 1 && <span className="mt-1 w-px flex-1 bg-ground" />}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12.5px] leading-[1.35]">
                        <span className="font-semibold">{a.who}</span> {a.action.toLowerCase()}
                        {a.object ? (
                          <>
                            {" "}
                            <span className="font-mono text-[11.5px] text-ink-mid">{a.object}</span>
                          </>
                        ) : null}
                      </div>
                      <div className="mt-0.5 text-[11px] text-ink-faint">
                        {a.to ? `${a.to} · ` : ""}
                        {a.t}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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

function EmptyRow({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3 px-[22px] py-6">
      <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-good-bg text-good-fg">
        <Icon name={icon} size={16} />
      </span>
      <div>
        <div className="text-[13px] font-semibold">{title}</div>
        <p className="m-0 mt-0.5 max-w-[52ch] text-[12px] leading-[1.5] text-ink-muted">{body}</p>
      </div>
    </div>
  );
}
