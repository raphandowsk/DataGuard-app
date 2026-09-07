"use client";

import { Icon } from "@/components/ui/Icon";
import { StatTiles } from "@/components/ui/StatTiles";
import { SourcePill } from "@/components/ui/SourcePill";
import { AUDIT_FILTERS, AUDIT_NOTE, AUDIT_STATS } from "@/lib/data/records";
import { useAudit } from "@/lib/supabase/operational";
import { useUI } from "@/lib/store";

const TH = "border-b border-line px-3 py-2.5 text-left text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-faint";

export function AuditScreen() {
  const auditFilter = useUI((s) => s.auditFilter);
  const setAuditFilter = useUI((s) => s.setAuditFilter);
  const { audit, live } = useAudit();

  return (
    <div className="flex animate-fade flex-col gap-4">
      <StatTiles stats={AUDIT_STATS} />

      <div className="flex items-start gap-[11px] rounded-xl border border-line bg-surface px-4 py-3">
        <Icon name="info" size={16} className="mt-px flex-none text-ink-muted" />
        <p className="m-0 max-w-[100ch] text-[12px] leading-[1.55] text-ink-mid">{AUDIT_NOTE}</p>
      </div>

      <div className="flex flex-wrap items-center gap-[7px]">
        <SourcePill live={live} />
        {AUDIT_FILTERS.map((label) => {
          const on = auditFilter === label;
          return (
            <button
              key={label}
              onClick={() => setAuditFilter(label)}
              className={`whitespace-nowrap rounded-full border px-[13px] py-1.5 text-[11.5px] font-semibold ${on ? "border-ink bg-ink text-white" : "border-line-strong bg-surface text-ink-muted"}`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <section className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] text-[12.5px]">
            <thead>
              <tr>
                <th className={`${TH} pl-5`}>When</th>
                <th className={TH}>Who</th>
                <th className={TH}>Action</th>
                <th className={TH}>Object</th>
                <th className={TH}>Change</th>
                <th className={`${TH} pr-5`}>Source</th>
              </tr>
            </thead>
            <tbody>
              {audit.map((a, i) => (
                <tr key={i} className="border-b border-ground align-top">
                  <td className="tnum whitespace-nowrap px-5 py-[11px] text-ink-muted">{a.t}</td>
                  <td className="px-3 py-[11px]">
                    <div className="font-medium">{a.who}</div>
                    <div className="mt-0.5 text-[10.5px]" style={{ color: a.role === "System" ? "#93a1a4" : "#5b6b6e" }}>{a.role}</div>
                  </td>
                  <td className="px-3 py-[11px] text-ink-mid">{a.action}</td>
                  <td className="px-3 py-[11px] font-mono text-[11px] text-ink-mid">{a.object}</td>
                  <td className="max-w-[230px] px-3 py-[11px]">
                    {a.from !== "—" && (
                      <div className="flex flex-wrap items-center gap-[7px]">
                        <span className="rounded bg-crit-bg px-1.5 py-px text-[11px] text-crit-fg [text-wrap:pretty]">{a.from}</span>
                        <Icon name="arrow-right" size={11} className="flex-none text-ink-faint" />
                        <span className="rounded bg-good-bg px-1.5 py-px text-[11px] text-good-fg [text-wrap:pretty]">{a.to}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-5 py-[11px] font-mono text-[10.5px] text-ink-faint">{a.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
