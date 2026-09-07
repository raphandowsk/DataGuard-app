"use client";

import { Icon } from "@/components/ui/Icon";
import { DOMAINS } from "@/lib/data/dashboard";
import { REPORT_FORMATS, REPORT_SECTIONS, REPORT_STATS, REPORTS } from "@/lib/data/reports";
import { shade } from "@/lib/tokens";
import { useUI } from "@/lib/store";

export function ReportsScreen() {
  const reportId = useUI((s) => s.reportId);
  const setReportId = useUI((s) => s.setReportId);
  const format = useUI((s) => s.format);
  const setFormat = useUI((s) => s.setFormat);
  const sections = useUI((s) => s.reportSections);
  const toggleSection = useUI((s) => s.toggleReportSection);

  const report = REPORTS.find((r) => r.id === reportId) ?? REPORTS[0];

  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
      <div className="flex flex-col gap-4">
        {/* report types */}
        <section className="rounded-card border border-line bg-surface px-[22px] py-5">
          <h2 className="m-0 mb-[3px] text-[13px] font-semibold">Report types</h2>
          <p className="m-0 mb-4 text-[11.5px] text-ink-muted">Every report states the framework version and the date its figures were drawn</p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[11px]">
            {REPORTS.map((r) => {
              const on = r.id === reportId;
              return (
                <button
                  key={r.id}
                  onClick={() => setReportId(r.id)}
                  className="block rounded-[13px] bg-surface p-[15px] text-left hover:border-teal"
                  style={on ? { border: "1.5px solid #0d7d75", boxShadow: "0 0 0 3px #e5f2f0" } : { border: "1.5px solid #e3e9ea" }}
                >
                  <div className="mb-2 flex items-center gap-2.5">
                    <span className="grid h-7 w-7 flex-none place-items-center rounded-lg bg-teal-bg text-teal">
                      <Icon name={r.icon} size={15} />
                    </span>
                    <span className="text-left text-[12.5px] font-semibold leading-[1.3]">{r.name}</span>
                  </div>
                  <p className="m-0 text-left text-[11.5px] leading-[1.5] text-ink-muted [text-wrap:pretty]">{r.desc}</p>
                  <div className="mt-2.5 flex gap-1.5">
                    {r.formats.map((f) => (
                      <span key={f} className="rounded border border-line px-[5px] py-px text-[9.5px] font-bold tracking-[0.4px] text-ink-muted">{f}</span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* preview */}
        <section className="overflow-hidden rounded-card border border-line bg-surface">
          <div className="flex items-center justify-between border-b border-line px-[22px] py-4">
            <h2 className="m-0 text-[13px] font-semibold">Preview — {report.name}</h2>
            <span className="text-[11px] text-ink-muted">Draft · not yet exported</span>
          </div>
          <div className="bg-panel px-[34px] py-[30px]">
            <div className="mx-auto max-w-[660px] rounded-md border border-line bg-surface px-11 py-10 shadow-[0_1px_3px_rgba(14,26,28,0.05)]">
              <div className="flex items-center justify-between border-b-2 border-ink pb-4">
                <div>
                  <div className="text-[9.5px] font-bold tracking-[1px] text-ink-muted">MAZINGIRA TRUST</div>
                  <div className="mt-1.5 font-serif text-[26px] leading-[1.15]">{report.name}</div>
                </div>
                <div className="text-right text-[9.5px] leading-[1.6] text-ink-muted">
                  <div>Framework</div>
                  <div className="font-semibold text-ink">TZ-PDPA 2022</div>
                  <div className="mt-1.5">Matrix v1.0.0</div>
                  <div>4 September 2026</div>
                </div>
              </div>
              <p className="m-0 mt-[18px] text-[11.5px] leading-[1.7] text-ink-mid">
                This report describes assessed control coverage against the DataGuard mapping of the Tanzania Personal
                Data Protection Act, 2022. It is a compliance management record and does not constitute legal advice or a
                statement of legal compliance.
              </p>
              <div className="my-[22px] grid grid-cols-3 gap-3.5">
                {REPORT_STATS.map((s) => (
                  <div key={s.k} className="rounded-md bg-panel px-[15px] py-[13px]">
                    <div className="font-serif text-[26px] leading-none">{s.v}</div>
                    <div className="mt-1 text-[9.5px] text-ink-muted">{s.k}</div>
                  </div>
                ))}
              </div>
              <div className="mb-[9px] text-[10px] font-bold tracking-[0.7px] text-ink-muted">COVERAGE BY DOMAIN</div>
              {DOMAINS.map(([name, , n]) => (
                <div key={name} className="grid grid-cols-[1fr_130px_40px] items-center gap-3 border-b border-ground py-1.5">
                  <span className="text-[11px]">{name}</span>
                  <span className="block h-[5px] overflow-hidden rounded-full bg-ground">
                    <span className="block h-full" style={{ width: `${n}%`, background: shade(n) }} />
                  </span>
                  <span className="tnum text-right text-[11px] font-semibold">{n}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* configure */}
      <aside className="rounded-card border border-line bg-surface p-5 xl:sticky xl:top-[76px]">
        <h2 className="m-0 mb-4 text-[13px] font-semibold">Configure</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-[11.5px] font-semibold">Date range</label>
            <div className="flex items-center gap-2 rounded-[10px] border border-line-strong px-[11px] py-2">
              <Icon name="calendar" size={14} className="text-ink-faint" />
              <span className="text-[12.5px]">1 Jan 2026 — 4 Sep 2026</span>
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-[11.5px] font-semibold">Framework</label>
            <div className="flex items-center gap-2 rounded-[10px] border border-line-strong px-[11px] py-2">
              <span className="h-[7px] w-[7px] rounded-full bg-good-fg" />
              <span className="flex-1 text-[12.5px]">Tanzania PDPA 2022</span>
              <Icon name="chevron-down" size={14} className="text-ink-faint" />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-[11.5px] font-semibold">Sections</label>
            <div className="flex flex-col gap-[7px]">
              {REPORT_SECTIONS.map(([key, label]) => {
                const on = sections[key];
                return (
                  <label key={key} onClick={() => toggleSection(key)} className="flex cursor-pointer items-center gap-2.5 text-[12.5px]">
                    <span className="grid h-[17px] w-[17px] flex-none place-items-center rounded-[5px]" style={on ? { background: "#0d7d75", border: "1.5px solid #0d7d75" } : { background: "#fff", border: "1.5px solid #cfd8d9" }}>
                      {on && <Icon name="check" size={11} className="text-white" />}
                    </span>
                    <span className="flex-1">{label}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-[11.5px] font-semibold">Format</label>
            <div className="flex gap-1.5">
              {REPORT_FORMATS.map((f) => {
                const on = format === f;
                return (
                  <button
                    key={f}
                    onClick={() => setFormat(f)}
                    className={`flex-1 rounded-[9px] border px-0 py-2 text-[12px] font-semibold ${on ? "border-ink bg-ink text-white" : "border-line-strong bg-surface text-ink-muted"}`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => useUI.getState().flash(`${report.name} generated as ${format}. Footer names framework TZ-PDPA 2022, matrix v1.0.0.`)}
            className="flex w-full items-center justify-center gap-[7px] rounded-full bg-teal p-[11px] text-[12.5px] font-semibold text-white hover:bg-teal-dark"
          >
            <Icon name="download" size={15} className="flex-none" />
            Generate report
          </button>
          <p className="m-0 text-[10.5px] leading-[1.5] text-ink-faint">Exports carry a footer naming the framework version, the matrix version and the person who generated them.</p>
        </div>
      </aside>
    </div>
  );
}
