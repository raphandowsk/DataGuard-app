/**
 * Emits idempotent SQL to seed the compliance-framework tables from the authored
 * PDPA 2022 source of truth. Output goes to scratchpad files that are executed
 * against Supabase via the MCP tools.
 *
 *   node scripts/pdpa/gen-supabase-sql.mjs <outDir>
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { FRAMEWORK, PARTS, SECTIONS, NON_OBLIGATION_SECTIONS, REQUIREMENTS, CONTROLS } from "../pdpa-2022.source.mjs";

const outDir = process.argv[2] || ".";
const FC = FRAMEWORK.code;
const VC = FRAMEWORK.version;
const noOb = Object.fromEntries(NON_OBLIGATION_SECTIONS.map((s) => [s.section_number, s.reason]));

/** Dollar-quoted literal, or NULL. */
function q(v) {
  if (v === null || v === undefined || v === "") return "NULL";
  return `$dg$${String(v)}$dg$`;
}
function qkeep(v) {
  // keep empty strings as empty (not null) where a column is non-null text
  if (v === null || v === undefined) return "NULL";
  return `$dg$${String(v)}$dg$`;
}
function bool(v) {
  return v ? "true" : "false";
}
function arr(a) {
  if (!a || a.length === 0) return "ARRAY[]::text[]";
  return "ARRAY[" + a.map((x) => `$dg$${String(x)}$dg$`).join(", ") + "]::text[]";
}
function num(v) {
  return v === null || v === undefined ? "NULL" : String(v);
}

const parts = [];

/* framework */
parts.push(
  `insert into frameworks (code, name, short_name, jurisdiction, status, disclaimer) values (` +
    `${q(FC)}, ${q(FRAMEWORK.name)}, ${q(FRAMEWORK.short_name)}, ${q(FRAMEWORK.jurisdiction)}, ${q(FRAMEWORK.status)}, ` +
    `$dg$This control matrix is a product implementation mapping of the Tanzania Personal Data Protection Act, 2022. It is intended to support compliance management and does not constitute legal advice, legal certification, or an authoritative interpretation of Tanzanian law.$dg$) ` +
    `on conflict (code) do update set name=excluded.name, short_name=excluded.short_name, jurisdiction=excluded.jurisdiction, status=excluded.status, disclaimer=excluded.disclaimer;`,
);

/* version */
parts.push(
  `insert into framework_versions (framework_code, version_code, status, act_number, chapter, gazette_reference, commencement_date, commencement_reference, language_note, matrix_version, matrix_released) values (` +
    `${q(FC)}, ${q(VC)}, ${q(FRAMEWORK.status)}, ${q(FRAMEWORK.act_number)}, ${q(FRAMEWORK.chapter)}, ${q(FRAMEWORK.gazette_reference)}, ` +
    `${q(FRAMEWORK.commencement)}, ${q(FRAMEWORK.commencement_reference)}, ${q(FRAMEWORK.language_note)}, ${q(FRAMEWORK.matrix_version)}, ${q(FRAMEWORK.matrix_released)}) ` +
    `on conflict (framework_code, version_code) do update set status=excluded.status, act_number=excluded.act_number, chapter=excluded.chapter, gazette_reference=excluded.gazette_reference, commencement_date=excluded.commencement_date, commencement_reference=excluded.commencement_reference, language_note=excluded.language_note, matrix_version=excluded.matrix_version, matrix_released=excluded.matrix_released;`,
);

/* parts */
PARTS.forEach((p, i) => {
  parts.push(
    `insert into framework_parts (framework_code, version_code, part_number, part_title, display_order) values (` +
      `${q(FC)}, ${q(VC)}, ${q(p.part_number)}, ${q(p.part_title)}, ${i + 1}) ` +
      `on conflict (framework_code, version_code, part_number) do update set part_title=excluded.part_title, display_order=excluded.display_order;`,
  );
});

/* sections */
SECTIONS.forEach((s, i) => {
  const reason = noOb[s.section_number] || null;
  parts.push(
    `insert into framework_sections (framework_code, version_code, section_number, part_number, section_title, display_order, creates_obligation, no_obligation_reason) values (` +
      `${q(FC)}, ${q(VC)}, ${q(s.section_number)}, ${q(s.part_number)}, ${q(s.section_title)}, ${i + 1}, ${bool(!reason)}, ${q(reason)}) ` +
      `on conflict (framework_code, version_code, section_number) do update set part_number=excluded.part_number, section_title=excluded.section_title, display_order=excluded.display_order, creates_obligation=excluded.creates_obligation, no_obligation_reason=excluded.no_obligation_reason;`,
  );
});

/* requirements */
REQUIREMENTS.forEach((r) => {
  parts.push(
    `insert into framework_requirements (framework_code, version_code, requirement_id, part_number, section_number, provision, requirement_title, requirement_text) values (` +
      `${q(FC)}, ${q(VC)}, ${q(r.requirement_id)}, ${q(r.part_number)}, ${q(r.section_number)}, ${q(r.provision)}, ${q(r.requirement_title)}, ${q(r.requirement_text)}) ` +
      `on conflict (framework_code, version_code, requirement_id) do update set part_number=excluded.part_number, section_number=excluded.section_number, provision=excluded.provision, requirement_title=excluded.requirement_title, requirement_text=excluded.requirement_text;`,
  );
});

/* controls */
const controlCols = [
  "subsection", "paragraph", "legal_reference", "legal_requirement", "control_title", "control_description",
  "plain_language_question", "why_this_matters", "implementation_guidance", "expected_state", "response_type",
  "applicability", "applicability_question", "role_scope", "evidence_required", "evidence_strength",
  "evidence_review_frequency", "risk_category", "default_risk_level", "risk_rationale", "remediation_guidance",
  "suggested_task", "suggested_task_priority", "control_status", "version", "source_type", "regulatory_status", "notes",
];
const controlStmts = CONTROLS.map((c, i) => {
  const cols =
    "framework_code, version_code, control_id, requirement_id, part_number, section_number, " +
    controlCols.join(", ") + ", answer_options, evidence_examples, required, display_order";
  const vals =
    `${q(FC)}, ${q(VC)}, ${q(c.control_id)}, ${q(c.requirement_id)}, ${q(c.part_number)}, ${q(c.section_number)}, ` +
    controlCols.map((k) => qkeep(c[k])).join(", ") +
    `, ${arr(c.answer_options)}, ${arr(c.evidence_examples)}, ${bool(c.required)}, ${i + 1}`;
  const upd = [...controlCols, "answer_options", "evidence_examples", "required", "display_order", "requirement_id", "part_number", "section_number"]
    .map((k) => `${k}=excluded.${k}`)
    .join(", ");
  return `insert into framework_controls (${cols}) values (${vals}) on conflict (framework_code, version_code, control_id) do update set ${upd};`;
});

/* Write size-capped batch files so each execute_sql call stays well under arg limits. */
const CAP = 80000;
const all = [...parts, ...controlStmts];
const batches = [];
let cur = [];
let curLen = 0;
for (const stmt of all) {
  if (curLen + stmt.length > CAP && cur.length) {
    batches.push(cur);
    cur = [];
    curLen = 0;
  }
  cur.push(stmt);
  curLen += stmt.length + 1;
}
if (cur.length) batches.push(cur);

batches.forEach((b, i) => {
  writeFileSync(join(outDir, `batch-${String(i).padStart(2, "0")}.sql`), b.join("\n") + "\n", "utf8");
});

console.log(`statements: ${all.length} (ref ${parts.length} + controls ${controlStmts.length})`);
console.log(`batches: ${batches.length}`);
console.log(batches.map((b, i) => `batch-${String(i).padStart(2, "0")}.sql: ${b.length} stmts`).join("\n"));
