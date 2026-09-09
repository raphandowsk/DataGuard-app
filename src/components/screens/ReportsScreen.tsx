"use client";

import { Icon } from "@/components/ui/Icon";
import { REPORT_FORMATS, REPORT_SECTIONS, REPORTS } from "@/lib/data/reports";
import { shade } from "@/lib/tokens";
import { useUI } from "@/lib/store";
import { useControls } from "@/components/ControlsProvider";
import { useRisks, useTasks, useActiveOrg } from "@/lib/supabase/operational";
import { severityOf } from "@/lib/data/risks";

export function ReportsScreen() {
  const reportId = useUI((s) => s.reportId);
  const setReportId = useUI((s) => s.setReportId);
  const format = useUI((s) => s.format);
  const setFormat = useUI((s) => s.setFormat);
  const sections = useUI((s) => s.reportSections);
  const toggleSection = useUI((s) => s.toggleReportSection);
  const answers = useUI((s) => s.answers);
  const controls = useControls();
  const { risks } = useRisks();
  const { tasks } = useTasks();
  const { org } = useActiveOrg();

  const report = REPORTS.find((r) => r.id === reportId) ?? REPORTS[0];

  // Live figures for the preview, computed from the active org's data.
  const total = controls.total || controls.list.length;
  const assessed = controls.list.filter((c) => answers[c.id]).length;
  const implemented = controls.list.filter((c) => answers[c.id] === "Implemented").length;
  const partial = controls.list.filter((c) => answers[c.id] === "Partially implemented").length;
  const coveragePct = total ? Math.round((100 * (implemented + 0.5 * partial)) / total) : 0;
  const criticalHigh = risks.filter((r) => r.l * r.i >= 10).length;
  const reportStats = [
    { v: `${coveragePct}%`, k: "Control coverage" },
    { v: `${assessed}/${total}`, k: "Controls assessed" },
    { v: String(criticalHigh), k: "Open critical and high risks" },
  ];
  const domainMap = new Map<string, { total: number; score: number }>();
  for (const c of controls.list) {
    const e = domainMap.get(c.category || "Other") ?? { total: 0, score: 0 };
    e.total += 1;
    const a = answers[c.id];
    e.score += a === "Implemented" ? 1 : a === "Partially implemented" ? 0.5 : 0;
    domainMap.set(c.category || "Other", e);
  }
  const domains = [...domainMap.entries()]
    .map(([name, e]) => ({ name, n: e.total ? Math.round((100 * e.score) / e.total) : 0 }))
    .sort((a, b) => a.n - b.n);
  const orgName = (org?.name ?? "Your organisation").toUpperCase();

  // ---- Real export ----
  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const esc = (s: string) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const download = (name: string, mime: string, content: string) => {
    const url = URL.createObjectURL(new Blob([content], { type: mime }));
    const a = document.createElement("a");
    a.href = url; a.download = name; document.body.appendChild(a); a.click();
    a.remove(); URL.revokeObjectURL(url);
  };

  const csvExport = () => {
    const rows = [["Control", "Title", "Domain", "Legal reference", "Risk", "Answer"]];
    for (const c of controls.list) rows.push([c.id, c.title, c.category, c.ref, c.risk, answers[c.id] ?? "Not assessed"]);
    const csv = rows.map((r) => r.map((f) => `"${String(f).replace(/"/g, '""')}"`).join(",")).join("\r\n");
    download(`${(org?.name ?? "workspace").replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-assessment.csv`, "text/csv", csv);
  };

  const printExport = () => {
    const openTasks = tasks.filter((t) => t.status !== "Completed" && t.status !== "Cancelled").slice(0, 8);
    const section = (title: string, body: string) => `<h2>${esc(title)}</h2>${body}`;
    const parts: string[] = [];
    if (sections.coverage) parts.push(section("Coverage summary", `<div class="stats">${reportStats.map((s) => `<div><div class="v">${esc(s.v)}</div><div class="k">${esc(s.k)}</div></div>`).join("")}</div>`));
    if (sections.domains) parts.push(section("Coverage by domain", `<table><thead><tr><th>Domain</th><th>Coverage</th></tr></thead><tbody>${domains.map((d) => `<tr><td>${esc(d.name)}</td><td>${d.n}%</td></tr>`).join("")}</tbody></table>`));
    if (sections.actions) parts.push(section("Priority actions", openTasks.length ? `<table><thead><tr><th>Task</th><th>Priority</th><th>Owner</th><th>Due</th></tr></thead><tbody>${openTasks.map((t) => `<tr><td>${esc(t.title)}</td><td>${esc(t.priority)}</td><td>${esc(t.owner)}</td><td>${esc(t.due)}</td></tr>`).join("")}</tbody></table>` : `<p>No open tasks.</p>`));
    if (sections.risks) parts.push(section("Risk register", risks.length ? `<table><thead><tr><th>Risk</th><th>Domain</th><th>Severity</th><th>Owner</th></tr></thead><tbody>${risks.map((r) => `<tr><td>${esc(r.title)}</td><td>${esc(r.domain)}</td><td>${esc(severityOf(r.l * r.i))}</td><td>${esc(r.owner)}</td></tr>`).join("")}</tbody></table>` : `<p>No risks recorded.</p>`));

    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(report.name)} — ${esc(org?.name ?? "")}</title>
<style>
  body{font-family:'Instrument Sans',system-ui,sans-serif;color:#0e1a1c;margin:40px;line-height:1.5}
  .head{display:flex;justify-content:space-between;border-bottom:2px solid #0e1a1c;padding-bottom:14px;margin-bottom:20px}
  .org{font-size:10px;font-weight:700;letter-spacing:1px;color:#5b6b6e}
  h1{font-size:26px;margin:6px 0 0}
  .meta{text-align:right;font-size:10px;color:#5b6b6e}
  .meta b{color:#0e1a1c}
  .intro{font-size:12px;color:#3d4e51;margin-bottom:8px}
  h2{font-size:13px;margin:22px 0 8px;text-transform:uppercase;letter-spacing:.5px;color:#5b6b6e}
  .stats{display:flex;gap:16px}.stats .v{font-size:26px;font-weight:600}.stats .k{font-size:10px;color:#5b6b6e}
  table{width:100%;border-collapse:collapse;font-size:11.5px}
  th,td{text-align:left;padding:6px 8px;border-bottom:1px solid #e3e9ea}
  th{color:#5b6b6e;font-size:10px;text-transform:uppercase;letter-spacing:.4px}
  .foot{margin-top:28px;padding-top:12px;border-top:1px solid #e3e9ea;font-size:10px;color:#93a1a4}
</style></head><body>
  <div class="head"><div><div class="org">${esc(org?.name ?? "Your organisation")}</div><h1>${esc(report.name)}</h1></div>
  <div class="meta"><div>Framework</div><div><b>TZ-PDPA 2022</b></div><div>Matrix v1.0.0</div><div>${esc(today)}</div></div></div>
  <p class="intro">This report describes assessed control coverage against the DataGuard mapping of the Tanzania Personal Data Protection Act, 2022. It is a compliance management record and does not constitute legal advice or a statement of legal compliance.</p>
  ${parts.join("")}
  <div class="foot">Generated by DataGuard on ${esc(today)} · framework TZ-PDPA 2022, matrix v1.0.0. Coverage weights fully-implemented controls fully and partial ones by half.</div>
</body></html>`;

    const win = window.open("", "_blank");
    if (win) { win.document.write(html); win.document.close(); win.focus(); setTimeout(() => win.print(), 400); }
    else download(`${(org?.name ?? "workspace").replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-report.html`, "text/html", html);
  };

  const generate = () => {
    if (format === "CSV" || format === "XLSX") { csvExport(); useUI.getState().flash(`${report.name} exported as CSV.`); }
    else { printExport(); useUI.getState().flash(`${report.name} opened for printing (save as PDF).`); }
  };

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
                  <div className="text-[9.5px] font-bold tracking-[1px] text-ink-muted">{orgName}</div>
                  <div className="mt-1.5 font-serif text-[26px] leading-[1.15]">{report.name}</div>
                </div>
                <div className="text-right text-[9.5px] leading-[1.6] text-ink-muted">
                  <div>Framework</div>
                  <div className="font-semibold text-ink">TZ-PDPA 2022</div>
                  <div className="mt-1.5">Matrix v1.0.0</div>
                  <div>{new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</div>
                </div>
              </div>
              <p className="m-0 mt-[18px] text-[11.5px] leading-[1.7] text-ink-mid">
                This report describes assessed control coverage against the DataGuard mapping of the Tanzania Personal
                Data Protection Act, 2022. It is a compliance management record and does not constitute legal advice or a
                statement of legal compliance.
              </p>
              <div className="my-[22px] grid grid-cols-3 gap-3.5">
                {reportStats.map((s) => (
                  <div key={s.k} className="rounded-md bg-panel px-[15px] py-[13px]">
                    <div className="font-serif text-[26px] leading-none">{s.v}</div>
                    <div className="mt-1 text-[9.5px] text-ink-muted">{s.k}</div>
                  </div>
                ))}
              </div>
              <div className="mb-[9px] text-[10px] font-bold tracking-[0.7px] text-ink-muted">COVERAGE BY DOMAIN</div>
              {domains.map((d) => (
                <div key={d.name} className="grid grid-cols-[1fr_130px_40px] items-center gap-3 border-b border-ground py-1.5">
                  <span className="text-[11px]">{d.name}</span>
                  <span className="block h-[5px] overflow-hidden rounded-full bg-ground">
                    <span className="block h-full" style={{ width: `${d.n}%`, background: shade(d.n) }} />
                  </span>
                  <span className="tnum text-right text-[11px] font-semibold">{d.n}%</span>
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
            onClick={generate}
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
