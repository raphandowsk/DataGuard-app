"use client";

import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { CLIENTS, PORTFOLIO_ACTIVITY, PORTFOLIO_ALERTS, PORTFOLIO_STATS } from "@/lib/data/portfolio";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

export function PortfolioScreen() {
  return (
    <div className="flex animate-fade flex-col gap-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3.5">
        {PORTFOLIO_STATS.map((s) => (
          <div key={s.label} className="rounded-[14px] border border-line bg-surface px-[19px] py-[17px]">
            <div className="mb-[9px] flex items-center gap-2">
              <span className="grid h-[26px] w-[26px] place-items-center rounded-lg" style={{ background: s.bg, color: s.color }}>
                <Icon name={s.icon} size={14} />
              </span>
              <span className="text-[11.5px] text-ink-muted">{s.label}</span>
            </div>
            <div className="tnum text-[27px] font-semibold tracking-[-0.6px]">{s.v}</div>
            <div className="mt-0.5 text-[11px] text-ink-faint">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="shield" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 text-[12px] leading-[1.55] text-ink-mid">
          Each client is a separate tenant. Opening a client switches you into that organisation&apos;s workspace, and
          nothing is aggregated across clients other than the portfolio counts on this page.
        </p>
      </div>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="flex flex-wrap items-center gap-3 border-b border-line px-5 py-4">
          <h2 className="m-0 flex-1 text-[13px] font-semibold">Client compliance</h2>
          <div className="flex min-w-[190px] items-center gap-[7px] rounded-lg border border-line bg-panel px-2.5 py-1.5">
            <Icon name="search" size={13} className="text-ink-faint" />
            <span className="text-[11.5px] text-ink-faint">Search clients…</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-[12.5px]">
            <thead>
              <tr>
                <th className={`${TH} pl-5`}>Client</th>
                <th className={TH}>Sector</th>
                <th className={`${TH} w-[170px]`}>Coverage</th>
                <th className={TH}>Health</th>
                <th className={`${TH} text-center`}>Open tasks</th>
                <th className={`${TH} text-center`}>Critical risks</th>
                <th className={`${TH} pr-5`}>Next review</th>
              </tr>
            </thead>
            <tbody>
              {CLIENTS.map((c) => {
                const health = c.pct >= 80 ? "Healthy" : c.pct >= 60 ? "Attention" : "High risk";
                const color = c.pct >= 80 ? "#16775a" : c.pct >= 60 ? "#a4501f" : "#8e2b22";
                const bg = c.pct >= 80 ? "#e3f2ea" : c.pct >= 60 ? "#f8ece1" : "#fbe7e4";
                const icon = c.pct >= 80 ? "circle-check" : c.pct >= 60 ? "triangle-alert" : "octagon-alert";
                const initials = c.name.split(" ").slice(0, 2).map((w) => w[0]).join("");
                return (
                  <tr
                    key={c.name}
                    onClick={() => {
                      useUI.getState().go("dashboard");
                      useUI.getState().flash(`Switched into ${c.name}. You are now in that client tenant.`);
                    }}
                    className="cursor-pointer border-b border-ground hover:bg-[#fbfcfc]"
                  >
                    <td className="px-5 py-[11px]">
                      <div className="flex items-center gap-2.5">
                        <span className="grid h-7 w-7 flex-none place-items-center rounded-lg bg-ground text-[10.5px] font-bold text-ink-mid">{initials}</span>
                        <span className="font-medium">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-[11px] text-ink-muted">{c.sector}</td>
                    <td className="px-3 py-[11px]">
                      <div className="flex items-center gap-2.5">
                        <span className="block h-1.5 flex-1 overflow-hidden rounded-full bg-ground">
                          <span className="block h-full" style={{ width: `${c.pct}%`, background: color }} />
                        </span>
                        <span className="tnum w-[34px] text-right font-semibold">{c.pct}%</span>
                      </div>
                    </td>
                    <td className="px-3 py-[11px]">
                      <Pill color={color} bg={bg} icon={icon}>{health}</Pill>
                    </td>
                    <td className="tnum px-3 py-[11px] text-center">{c.tasks}</td>
                    <td className="tnum px-3 py-[11px] text-center font-semibold" style={{ color: c.crit > 0 ? "#b23a2f" : "#93a1a4" }}>{c.crit}</td>
                    <td className="px-5 py-[11px] text-ink-muted">{c.review}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        <section className="rounded-card border border-line bg-surface px-[22px] py-5">
          <h2 className="m-0 mb-3.5 text-[13px] font-semibold">Needs you first</h2>
          <div className="flex flex-col gap-[11px]">
            {PORTFOLIO_ALERTS.map((a, i) => (
              <div key={i} className="flex items-start gap-[11px]">
                <span className="grid h-[26px] w-[26px] flex-none place-items-center rounded-lg" style={{ background: a.bg, color: a.color }}>
                  <Icon name={a.icon} size={13} />
                </span>
                <div className="min-w-0">
                  <div className="text-[12.5px] font-medium [text-wrap:pretty]">{a.title}</div>
                  <div className="mt-0.5 text-[11px] text-ink-faint">{a.client} · {a.when}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-card border border-line bg-surface px-[22px] py-5">
          <h2 className="m-0 mb-3.5 text-[13px] font-semibold">Recent client activity</h2>
          <div className="flex flex-col gap-[11px]">
            {PORTFOLIO_ACTIVITY.map((a, i) => (
              <div key={i} className="flex items-start gap-[11px]">
                <span className="grid h-[26px] w-[26px] flex-none place-items-center rounded-lg border border-line bg-panel text-ink-muted">
                  <Icon name={a.icon} size={13} />
                </span>
                <div className="min-w-0">
                  <div className="text-[12.5px] [text-wrap:pretty]">{a.text}</div>
                  <div className="mt-0.5 text-[11px] text-ink-faint">{a.client} · {a.when}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
