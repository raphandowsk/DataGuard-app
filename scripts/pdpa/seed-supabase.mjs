/**
 * Seeds the compliance-framework tables in Supabase from the authored PDPA source.
 * Uses the publishable key from .env.local (no secrets). Idempotent upserts.
 *
 *   node scripts/pdpa/seed-supabase.mjs
 *
 * Requires a temporary anon write policy to be in place while it runs.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createClient } from "@supabase/supabase-js";
import { FRAMEWORK, PARTS, SECTIONS, NON_OBLIGATION_SECTIONS, REQUIREMENTS, CONTROLS } from "../pdpa-2022.source.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const env = Object.fromEntries(
  readFileSync(join(ROOT, ".env.local"), "utf8")
    .split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }),
);

const url = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!url || !key) throw new Error("Missing Supabase env in .env.local");

const sb = createClient(url, key, { auth: { persistSession: false } });
const FC = FRAMEWORK.code;
const VC = FRAMEWORK.version;
const DISCLAIMER =
  "This control matrix is a product implementation mapping of the Tanzania Personal Data Protection Act, 2022. " +
  "It is intended to support compliance management and does not constitute legal advice, legal certification, " +
  "or an authoritative interpretation of Tanzanian law.";
const noOb = Object.fromEntries(NON_OBLIGATION_SECTIONS.map((s) => [s.section_number, s.reason]));

const CONTROL_COLS = [
  "control_id", "requirement_id", "part_number", "section_number", "subsection", "paragraph", "legal_reference",
  "legal_requirement", "control_title", "control_description", "plain_language_question", "why_this_matters",
  "implementation_guidance", "expected_state", "response_type", "answer_options", "required", "applicability",
  "applicability_question", "role_scope", "evidence_required", "evidence_examples", "evidence_strength",
  "evidence_review_frequency", "risk_category", "default_risk_level", "risk_rationale", "remediation_guidance",
  "suggested_task", "suggested_task_priority", "control_status", "version", "source_type", "regulatory_status", "notes",
];

async function upsert(table, rows, onConflict) {
  const { error } = await sb.from(table).upsert(rows, { onConflict });
  if (error) throw new Error(`${table}: ${error.message}`);
  console.log(`  ${table}: ${rows.length} rows`);
}

async function main() {
  await upsert("frameworks", [{ code: FC, name: FRAMEWORK.name, short_name: FRAMEWORK.short_name, jurisdiction: FRAMEWORK.jurisdiction, status: FRAMEWORK.status, disclaimer: DISCLAIMER }], "code");

  await upsert("framework_versions", [{
    framework_code: FC, version_code: VC, status: FRAMEWORK.status, act_number: FRAMEWORK.act_number,
    chapter: FRAMEWORK.chapter, gazette_reference: FRAMEWORK.gazette_reference, commencement_date: FRAMEWORK.commencement,
    commencement_reference: FRAMEWORK.commencement_reference, language_note: FRAMEWORK.language_note,
    matrix_version: FRAMEWORK.matrix_version, matrix_released: FRAMEWORK.matrix_released,
  }], "framework_code,version_code");

  await upsert("framework_parts", PARTS.map((p, i) => ({
    framework_code: FC, version_code: VC, part_number: p.part_number, part_title: p.part_title, display_order: i + 1,
  })), "framework_code,version_code,part_number");

  await upsert("framework_sections", SECTIONS.map((s, i) => ({
    framework_code: FC, version_code: VC, section_number: s.section_number, part_number: s.part_number,
    section_title: s.section_title, display_order: i + 1,
    creates_obligation: !noOb[s.section_number], no_obligation_reason: noOb[s.section_number] ?? null,
  })), "framework_code,version_code,section_number");

  await upsert("framework_requirements", REQUIREMENTS.map((r) => ({
    framework_code: FC, version_code: VC, requirement_id: r.requirement_id, part_number: r.part_number,
    section_number: r.section_number, provision: r.provision, requirement_title: r.requirement_title, requirement_text: r.requirement_text,
  })), "framework_code,version_code,requirement_id");

  await upsert("framework_controls", CONTROLS.map((c, i) => {
    const row = { framework_code: FC, version_code: VC, display_order: i + 1 };
    for (const k of CONTROL_COLS) row[k] = c[k] ?? null;
    return row;
  }), "framework_code,version_code,control_id");

  console.log("Seed complete.");
}

main().catch((e) => {
  console.error("SEED FAILED:", e.message);
  process.exit(1);
});
