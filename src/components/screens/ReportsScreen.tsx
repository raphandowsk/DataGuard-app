"use client";

import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { REPORTS } from "@/lib/data/reports";
import { shade } from "@/lib/tokens";
import { useUI } from "@/lib/store";
import { useControls } from "@/components/ControlsProvider";
import {
  useRisks,
  useTasks,
  useActiveOrg,
  useActivities,
  useProcessors,
  useRights,
  useIncidents,
  useEvidence,
  useAudit,
} from "@/lib/supabase/operational";
import { severityOf } from "@/lib/data/risks";

/** A report is assembled from typed blocks. The same blocks drive the on-screen
 *  preview, the printable PDF and the CSV export, so a category's template and
 *  its exported content can never drift apart. */
type Block =
  | { kind: "stats"; id: string; label: string; stats: { v: string; k: string }[] }
  | { kind: "bars"; id: string; label: string; bars: { name: string; n: number }[]; empty: string }
  | { kind: "table"; id: string; label: string; cols: string[]; rows: string[][]; empty: string };

const DISCLAIMER =
  "It is a compliance management record and does not constitute legal advice or a statement of legal compliance.";

/** Per-category opening paragraph — each report describes its own contents. */
const INTRO: Record<string, string> = {
  exec: `This executive report summarises assessed control coverage, movement by domain and the actions that need a decision, measured against the DataGuard mapping of the Tanzania Personal Data Protection Act, 2022. ${DISCLAIMER}`,
  assessment: `This assessment report lists every mapped control with its recorded answer and legal reference, in matrix order, against the Tanzania Personal Data Protection Act, 2022. ${DISCLAIMER}`,
  risk: `This risk report presents the data-protection risk register, its severity distribution and the owner accountable for each entry. ${DISCLAIMER}`,
  inventory: `This data inventory report lists the organisation's processing activities with their purpose, lawful basis, recipients, destination country and retention. ${DISCLAIMER}`,
  processor: `This processor report lists the organisation's data processors with their service, location, contract status and next review date. ${DISCLAIMER}`,
  rights: `This report summarises data-subject rights requests for the period, with their type, age, current stage and owner. ${DISCLAIMER}`,
  incident: `This incident report lists recorded personal-data incidents with their severity, affected records, regulator-notification status and current stage. ${DISCLAIMER}`,
  evidence: `This evidence index lists every document in the vault with its type, linked controls, owner and expiry. ${DISCLAIMER}`,
  audit: `This audit history is the trail of changes recorded in the workspace for the reporting period. ${DISCLAIMER}`,
};

const PREVIEW_ROW_CAP = 12; // long tables are truncated on screen; exports carry every row.

export function ReportsScreen() {
  const reportId = useUI((s) => s.reportId);
  const setReportId = useUI((s) => s.setReportId);
  const format = useUI((s) => s.format);
  const setFormat = useUI((s) => s.setFormat);
  const answers = useUI((s) => s.answers);
  const controls = useControls();
  const { risks } = useRisks();
  const { tasks } = useTasks();
  const { activities } = useActivities();
  const { processors } = useProcessors();
  const { requests } = useRights();
  const { incidents } = useIncidents();
  const { evidence } = useEvidence();
  const { audit } = useAudit();
  const { org } = useActiveOrg();

  const report = REPORTS.find((r) => r.id === reportId) ?? REPORTS[0];

  // Toggle blocks off per report; reset whenever the selected report changes.
  const [hidden, setHidden] = useState<Record<string, boolean>>({});
  useEffect(() => setHidden({}), [reportId]);

  // ---- Shared figures, computed from the active org's live data ----
  const total = controls.total || controls.list.length;
  const assessed = controls.list.filter((c) => answers[c.id]).length;
  const implemented = controls.list.filter((c) => answers[c.id] === "Implemented").length;
  const partial = controls.list.filter((c) => answers[c.id] === "Partially implemented").length;
  const coveragePct = total ? Math.round((100 * (implemented + 0.5 * partial)) / total) : 0;
  const criticalHigh = risks.filter((r) => r.l * r.i >= 10).length;

  const domains = useMemo(() => {
    const m = new Map<string, { total: number; score: number }>();
    for (const c of controls.list) {
      const e = m.get(c.category || "Other") ?? { total: 0, score: 0 };
      e.total += 1;
      const a = answers[c.id];
      e.score += a === "Implemented" ? 1 : a === "Partially implemented" ? 0.5 : 0;
      m.set(c.category || "Other", e);
    }
    return [...m.entries()]
      .map(([name, e]) => ({ name, n: e.total ? Math.round((100 * e.score) / e.total) : 0 }))
      .sort((a, b) => a.n - b.n);
  }, [controls.list, answers]);

  const isOpen = (stage: string, closed: RegExp) => Boolean(stage) && !closed.test(stage);

  // ---- Assemble the selected report's blocks from live data ----
  const blocks = useMemo<Block[]>(() => {
    const b: Block[] = [];
    switch (report.id) {
      case "exec": {
        b.push({
          kind: "stats", id: "summary", label: "Coverage summary",
          stats: [
            { v: `${coveragePct}%`, k: "Control coverage" },
            { v: `${assessed}/${total}`, k: "Controls assessed" },
            { v: String(criticalHigh), k: "Open critical and high risks" },
          ],
        });
        b.push({ kind: "bars", id: "domains", label: "Coverage by domain", bars: domains, empty: "No controls mapped yet." });
        b.push({
          kind: "table", id: "actions", label: "Priority actions", cols: ["Task", "Priority", "Owner", "Due"],
          rows: tasks
            .filter((t) => t.status !== "Completed" && t.status !== "Cancelled")
            .slice(0, 8)
            .map((t) => [t.title, t.priority, t.owner || "—", t.due || "—"]),
          empty: "No open tasks.",
        });
        b.push({
          kind: "table", id: "toprisks", label: "Top risks", cols: ["Risk", "Domain", "Severity", "Owner"],
          rows: [...risks].sort((a, z) => z.l * z.i - a.l * a.i).slice(0, 5)
            .map((r) => [r.title, r.domain, severityOf(r.l * r.i), r.owner || "—"]),
          empty: "No risks recorded.",
        });
        break;
      }
      case "assessment": {
        b.push({
          kind: "stats", id: "summary", label: "Coverage summary",
          stats: [
            { v: `${coveragePct}%`, k: "Control coverage" },
            { v: `${assessed}/${total}`, k: "Controls assessed" },
            { v: String(implemented), k: "Fully implemented" },
          ],
        });
        b.push({
          kind: "table", id: "controls", label: "Control assessment",
          cols: ["Control", "Title", "Domain", "Legal reference", "Answer"],
          rows: controls.list.map((c) => [c.id, c.title, c.category, c.ref, answers[c.id] ?? "Not assessed"]),
          empty: "No controls mapped.",
        });
        break;
      }
      case "risk": {
        b.push({
          kind: "stats", id: "summary", label: "Register summary",
          stats: [
            { v: String(risks.length), k: "Risks on register" },
            { v: String(criticalHigh), k: "Critical and high" },
            { v: String(new Set(risks.map((r) => r.domain).filter(Boolean)).size), k: "Domains affected" },
          ],
        });
        b.push({
          kind: "table", id: "distribution", label: "Severity distribution", cols: ["Severity", "Risks"],
          rows: (["CRITICAL", "HIGH", "MEDIUM", "LOW"] as const).map((s) => [
            s.charAt(0) + s.slice(1).toLowerCase(),
            String(risks.filter((r) => severityOf(r.l * r.i) === s).length),
          ]),
          empty: "No risks recorded.",
        });
        b.push({
          kind: "table", id: "register", label: "Risk register",
          cols: ["Risk", "Domain", "Likelihood", "Impact", "Severity", "Owner"],
          rows: [...risks].sort((a, z) => z.l * z.i - a.l * a.i)
            .map((r) => [r.title, r.domain, String(r.l), String(r.i), severityOf(r.l * r.i), r.owner || "—"]),
          empty: "No risks recorded.",
        });
        break;
      }
      case "inventory": {
        b.push({
          kind: "stats", id: "summary", label: "Inventory summary",
          stats: [
            { v: String(activities.length), k: "Processing activities" },
            { v: String(activities.filter((a) => a.sensitive).length), k: "Involving sensitive data" },
            { v: String(activities.filter((a) => a.country && !/tanzania/i.test(a.country)).length), k: "Cross-border" },
          ],
        });
        b.push({
          kind: "table", id: "activities", label: "Processing activities",
          cols: ["Activity", "Purpose", "Lawful basis", "Recipients", "Country", "Retention"],
          rows: activities.map((a) => [a.name, a.purpose, a.basis, a.recipients, a.country || "—", a.retention || "—"]),
          empty: "No processing activities recorded.",
        });
        break;
      }
      case "processor": {
        b.push({
          kind: "stats", id: "summary", label: "Processor summary",
          stats: [
            { v: String(processors.length), k: "Processors" },
            { v: String(processors.filter((p) => p.country && !/tanzania/i.test(p.country)).length), k: "Cross-border" },
            { v: String(processors.reduce((s, p) => s + (p.activities || 0), 0)), k: "Activities covered" },
          ],
        });
        b.push({
          kind: "table", id: "processors", label: "Processors",
          cols: ["Processor", "Service", "Country", "Contract", "Next review"],
          rows: processors.map((p) => [p.name, p.service, p.country || "—", p.contract || "—", p.review || "—"]),
          empty: "No processors recorded.",
        });
        break;
      }
      case "rights": {
        b.push({
          kind: "stats", id: "summary", label: "Request summary",
          stats: [
            { v: String(requests.length), k: "Requests" },
            { v: String(requests.filter((r) => isOpen(r.stage, /clos|complet|done|fulfil|reject/i)).length), k: "Open" },
            { v: String(requests.filter((r) => r.days > 30).length), k: "Over 30 days" },
          ],
        });
        b.push({
          kind: "table", id: "requests", label: "Rights requests",
          cols: ["Reference", "Type", "Received", "Days open", "Stage", "Owner"],
          rows: requests.map((r) => [r.id, r.type, r.received || "—", String(r.days), r.stage, r.owner || "—"]),
          empty: "No rights requests recorded.",
        });
        break;
      }
      case "incident": {
        b.push({
          kind: "stats", id: "summary", label: "Incident summary",
          stats: [
            { v: String(incidents.length), k: "Incidents" },
            { v: String(incidents.filter((i) => i.notified).length), k: "Regulator notified" },
            { v: String(incidents.filter((i) => isOpen(i.stage, /clos|resol|complet/i)).length), k: "Open" },
          ],
        });
        b.push({
          kind: "table", id: "incidents", label: "Incidents",
          cols: ["Reference", "Title", "Detected", "Severity", "Records", "Notified", "Stage"],
          rows: incidents.map((i) => [i.id, i.title, i.detected || "—", i.severity, i.records || "—", i.notified ? "Yes" : "No", i.stage]),
          empty: "No incidents recorded.",
        });
        break;
      }
      case "evidence": {
        b.push({
          kind: "stats", id: "summary", label: "Vault summary",
          stats: [
            { v: String(evidence.length), k: "Documents" },
            { v: String(evidence.filter((e) => /strong/i.test(e.strength)).length), k: "Strong evidence" },
            { v: String(evidence.reduce((s, e) => s + (e.controls || 0), 0)), k: "Controls linked" },
          ],
        });
        b.push({
          kind: "table", id: "evidence", label: "Evidence index",
          cols: ["Document", "Type", "Linked controls", "Owner", "Added", "Expiry"],
          rows: evidence.map((e) => [e.name, e.kind, String(e.controls), e.owner || "—", e.added || "—", e.expiry || "—"]),
          empty: "No evidence documents recorded.",
        });
        break;
      }
      case "audit": {
        b.push({
          kind: "stats", id: "summary", label: "Trail summary",
          stats: [{ v: String(audit.length), k: "Entries in period" }],
        });
        b.push({
          kind: "table", id: "audit", label: "Audit trail",
          cols: ["When", "Who", "Action", "Object", "Change"],
          rows: audit.map((a) => [a.t, a.who, a.action, a.object || "—", a.from || a.to ? `${a.from || "—"} → ${a.to || "—"}` : "—"]),
          empty: "No audit entries in the period.",
        });
        break;
      }
    }
    return b;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [report.id, controls.list, answers, risks, tasks, activities, processors, requests, incidents, evidence, audit, domains, coveragePct, assessed, implemented, total, criticalHigh]);

  const visible = blocks.filter((bl) => !hidden[bl.id]);
  const orgName = (org?.name ?? "Your organisation").toUpperCase();
  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  // Only offer the formats this report supports; keep the active choice valid.
  const fmt = report.formats.includes(format) ? format : report.formats[0];

  // ---- Exporters ----
  const esc = (s: string) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const slug = (org?.name ?? "workspace").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  const download = (name: string, mime: string, content: string) => {
    const url = URL.createObjectURL(new Blob([content], { type: mime }));
    const a = document.createElement("a");
    a.href = url; a.download = name; document.body.appendChild(a); a.click();
    a.remove(); URL.revokeObjectURL(url);
  };

  const csvExport = () => {
    const table = visible.find((bl) => bl.kind === "table") as Extract<Block, { kind: "table" }> | undefined;
    const rows: string[][] = table ? [table.cols, ...table.rows] : [["Domain", "Coverage"], ...domains.map((d) => [d.name, `${d.n}%`])];
    const csv = rows.map((r) => r.map((f) => `"${String(f).replace(/"/g, '""')}"`).join(",")).join("\r\n");
    download(`${slug}-${report.id}.csv`, "text/csv", csv);
  };

  const printExport = () => {
    const body = visible.map((bl) => {
      if (bl.kind === "stats")
        return `<h2>${esc(bl.label)}</h2><div class="stats">${bl.stats.map((s) => `<div><div class="v">${esc(s.v)}</div><div class="k">${esc(s.k)}</div></div>`).join("")}</div>`;
      if (bl.kind === "bars")
        return `<h2>${esc(bl.label)}</h2>${bl.bars.length ? `<table><thead><tr><th>Domain</th><th>Coverage</th></tr></thead><tbody>${bl.bars.map((d) => `<tr><td>${esc(d.name)}</td><td>${d.n}%</td></tr>`).join("")}</tbody></table>` : `<p>${esc(bl.empty)}</p>`}`;
      return `<h2>${esc(bl.label)}</h2>${bl.rows.length ? `<table><thead><tr>${bl.cols.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${bl.rows.map((r) => `<tr>${r.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>` : `<p>${esc(bl.empty)}</p>`}`;
    }).join("");

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
  .stats{display:flex;flex-wrap:wrap;gap:16px}.stats .v{font-size:26px;font-weight:600}.stats .k{font-size:10px;color:#5b6b6e}
  table{width:100%;border-collapse:collapse;font-size:11.5px}
  th,td{text-align:left;padding:6px 8px;border-bottom:1px solid #e3e9ea;vertical-align:top}
  th{color:#5b6b6e;font-size:10px;text-transform:uppercase;letter-spacing:.4px}
  .foot{margin-top:28px;padding-top:12px;border-top:1px solid #e3e9ea;font-size:10px;color:#93a1a4}
</style></head><body>
  <div class="head"><div><div class="org">${esc(org?.name ?? "Your organisation")}</div><h1>${esc(report.name)}</h1></div>
  <div class="meta"><div>Framework</div><div><b>TZ-PDPA 2022</b></div><div>Matrix v1.0.0</div><div>${esc(today)}</div></div></div>
  <p class="intro">${esc(INTRO[report.id] ?? "")}</p>
  ${body}
  <div class="foot">Generated by DataGuard on ${esc(today)} · framework TZ-PDPA 2022, matrix v1.0.0. Coverage weights fully-implemented controls fully and partial ones by half.</div>
</body></html>`;

    const win = window.open("", "_blank");
    if (win) { win.document.write(html); win.document.close(); win.focus(); setTimeout(() => win.print(), 400); }
    else download(`${slug}-${report.id}.html`, "text/html", html);
  };

  const generate = () => {
    if (fmt === "CSV" || fmt === "XLSX") { csvExport(); useUI.getState().flash(`${report.name} exported as CSV.`); }
    else { printExport(); useUI.getState().flash(`${report.name} opened for printing (save as PDF).`); }
  };

  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
      <div className="flex flex-col gap-4">
        {/* report types */}
        <section className="rounded-card border border-line bg-surface px-[22px] py-5">
          <h2 className="m-0 mb-[3px] text-[13px] font-semibold">Report types</h2>
          <p className="m-0 mb-4 text-[11.5px] text-ink-muted">Each report has its own template and draws live figures from your workspace</p>
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
                  <div>{today}</div>
                </div>
              </div>
              <p className="m-0 mt-[18px] text-[11.5px] leading-[1.7] text-ink-mid">{INTRO[report.id]}</p>

              {visible.length === 0 && (
                <p className="mt-6 text-[11.5px] text-ink-muted">All sections are hidden. Enable a section on the right to build the report.</p>
              )}

              {visible.map((bl) => (
                <div key={bl.id} className="mt-[22px]">
                  {bl.kind === "stats" && (
                    <>
                      <div className="mb-[9px] text-[10px] font-bold tracking-[0.7px] text-ink-muted">{bl.label.toUpperCase()}</div>
                      <div className="flex flex-wrap gap-3.5">
                        {bl.stats.map((s) => (
                          <div key={s.k} className="min-w-[120px] flex-1 rounded-md bg-panel px-[15px] py-[13px]">
                            <div className="font-serif text-[26px] leading-none">{s.v}</div>
                            <div className="mt-1 text-[9.5px] text-ink-muted">{s.k}</div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {bl.kind === "bars" && (
                    <>
                      <div className="mb-[9px] text-[10px] font-bold tracking-[0.7px] text-ink-muted">{bl.label.toUpperCase()}</div>
                      {bl.bars.length === 0 ? (
                        <p className="m-0 text-[11px] text-ink-muted">{bl.empty}</p>
                      ) : (
                        bl.bars.map((d) => (
                          <div key={d.name} className="grid grid-cols-[1fr_130px_40px] items-center gap-3 border-b border-ground py-1.5">
                            <span className="text-[11px]">{d.name}</span>
                            <span className="block h-[5px] overflow-hidden rounded-full bg-ground">
                              <span className="block h-full" style={{ width: `${d.n}%`, background: shade(d.n) }} />
                            </span>
                            <span className="tnum text-right text-[11px] font-semibold">{d.n}%</span>
                          </div>
                        ))
                      )}
                    </>
                  )}

                  {bl.kind === "table" && (
                    <>
                      <div className="mb-[9px] text-[10px] font-bold tracking-[0.7px] text-ink-muted">{bl.label.toUpperCase()}</div>
                      {bl.rows.length === 0 ? (
                        <p className="m-0 text-[11px] text-ink-muted">{bl.empty}</p>
                      ) : (
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse text-[11px]">
                            <thead>
                              <tr>
                                {bl.cols.map((c) => (
                                  <th key={c} className="border-b border-line py-1.5 pr-3 text-left text-[9.5px] font-bold uppercase tracking-[0.4px] text-ink-muted">{c}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {bl.rows.slice(0, PREVIEW_ROW_CAP).map((r, i) => (
                                <tr key={i}>
                                  {r.map((cell, j) => (
                                    <td key={j} className="border-b border-ground py-1.5 pr-3 align-top text-ink-mid">{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {bl.rows.length > PREVIEW_ROW_CAP && (
                            <p className="m-0 mt-2 text-[10.5px] text-ink-faint">+{bl.rows.length - PREVIEW_ROW_CAP} more rows in the exported file.</p>
                          )}
                        </div>
                      )}
                    </>
                  )}
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
              <span className="text-[12.5px]">1 Jan 2026 — {today}</span>
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
              {blocks.map((bl) => {
                const on = !hidden[bl.id];
                return (
                  <label key={bl.id} onClick={() => setHidden((h) => ({ ...h, [bl.id]: on }))} className="flex cursor-pointer items-center gap-2.5 text-[12.5px]">
                    <span className="grid h-[17px] w-[17px] flex-none place-items-center rounded-[5px]" style={on ? { background: "#0d7d75", border: "1.5px solid #0d7d75" } : { background: "#fff", border: "1.5px solid #cfd8d9" }}>
                      {on && <Icon name="check" size={11} className="text-white" />}
                    </span>
                    <span className="flex-1">{bl.label}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-[11.5px] font-semibold">Format</label>
            <div className="flex gap-1.5">
              {report.formats.map((f) => {
                const on = fmt === f;
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
            <p className="m-0 mt-1.5 text-[10.5px] leading-[1.5] text-ink-faint">
              {fmt === "PDF" ? "PDF opens a print view — choose “Save as PDF”." : "CSV/XLSX exports the report’s main table as a spreadsheet file."}
            </p>
          </div>
          <button
            onClick={generate}
            className="flex w-full items-center justify-center gap-[7px] rounded-full bg-teal p-[11px] text-[12.5px] font-semibold text-white hover:bg-teal-dark"
          >
            <Icon name="download" size={15} className="flex-none" />
            Generate report
          </button>
          <p className="m-0 text-[10.5px] leading-[1.5] text-ink-faint">Exports carry a footer naming the framework version, the matrix version and the date they were generated.</p>
        </div>
      </aside>
    </div>
  );
}
