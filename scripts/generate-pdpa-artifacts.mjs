/**
 * Generates every derived Tanzania PDPA 2022 artefact from scripts/pdpa-2022.source.mjs.
 *
 *   node scripts/generate-pdpa-artifacts.mjs
 *
 * Outputs:
 *   docs/legal/PDPA-2022-FRAMEWORK.json
 *   docs/legal/PDPA-2022-CONTROL-MATRIX.csv
 *   docs/legal/PDPA-2022-CONTROL-MATRIX.md
 *   docs/legal/PDPA-2022-TRACEABILITY.md
 *   db/seed/frameworks/tanzania-pdpa-2022.ts
 *
 * PDPA-2022-ASSUMPTIONS.md and PDPA-2022-CHANGELOG.md are maintained by hand.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  FRAMEWORK,
  PARTS,
  SECTIONS,
  NON_OBLIGATION_SECTIONS,
  CONTROLS,
  REQUIREMENTS,
} from './pdpa-2022.source.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = join(ROOT, 'docs', 'legal');
const SEED = join(ROOT, 'db', 'seed', 'frameworks');

const DISCLAIMER =
  'This control matrix is a product implementation mapping of the Tanzania Personal Data Protection Act, 2022. ' +
  'It is intended to support compliance management and does not constitute legal advice, legal certification, ' +
  'or an authoritative interpretation of Tanzanian law.';

const sectionIndex = Object.fromEntries(SECTIONS.map((s) => [s.section_number, s]));
const requirementIndex = Object.fromEntries(REQUIREMENTS.map((r) => [r.requirement_id, r]));
const nonObligationIndex = Object.fromEntries(
  NON_OBLIGATION_SECTIONS.map((s) => [s.section_number, s.reason]),
);
const controlsBySection = {};
for (const c of CONTROLS) (controlsBySection[c.section_number] ??= []).push(c);

const romanOrder = PARTS.map((p) => p.part_number);
const sortedControls = [...CONTROLS].sort((a, b) => {
  const pa = romanOrder.indexOf(a.part_number);
  const pb = romanOrder.indexOf(b.part_number);
  if (pa !== pb) return pa - pb;
  const sa = Number(a.section_number) || 999;
  const sb = Number(b.section_number) || 999;
  if (sa !== sb) return sa - sb;
  return a.control_id.localeCompare(b.control_id);
});

/* ----------------------------------------------------------------- JSON --- */

const CSV_COLUMNS = [
  'control_id',
  'framework',
  'framework_version',
  'part_number',
  'part_title',
  'section_number',
  'section_title',
  'subsection',
  'paragraph',
  'legal_reference',
  'legal_requirement',
  'requirement_id',
  'control_title',
  'control_description',
  'plain_language_question',
  'why_this_matters',
  'implementation_guidance',
  'expected_state',
  'response_type',
  'answer_options',
  'required',
  'applicability',
  'applicability_question',
  'role_scope',
  'evidence_required',
  'evidence_examples',
  'evidence_strength',
  'evidence_review_frequency',
  'risk_category',
  'default_risk_level',
  'risk_rationale',
  'remediation_guidance',
  'suggested_task',
  'suggested_task_priority',
  'control_status',
  'version',
  'source_type',
  'regulatory_status',
  'notes',
];

function buildJson() {
  return {
    framework: {
      code: FRAMEWORK.code,
      name: FRAMEWORK.name,
      short_name: FRAMEWORK.short_name,
      jurisdiction: FRAMEWORK.jurisdiction,
      version: FRAMEWORK.version,
      status: FRAMEWORK.status,
      act_number: FRAMEWORK.act_number,
      chapter: FRAMEWORK.chapter,
      gazette_reference: FRAMEWORK.gazette_reference,
      commencement: FRAMEWORK.commencement,
      commencement_reference: FRAMEWORK.commencement_reference,
      language_note: FRAMEWORK.language_note,
      matrix_version: FRAMEWORK.matrix_version,
      matrix_released: FRAMEWORK.matrix_released,
      disclaimer: DISCLAIMER,
    },
    enumerations: {
      source_type: ['ACT_EXPLICIT', 'ACT_DERIVED', 'INTERPRETATION', 'IMPLEMENTATION_GUIDANCE'],
      response_type: [
        'YES_NO',
        'YES_PARTIAL_NO',
        'MULTIPLE_CHOICE',
        'TEXT',
        'NUMBER',
        'DATE',
        'DOCUMENT_REQUIRED',
        'BOOLEAN',
      ],
      applicability: ['UNIVERSAL', 'CONDITIONAL', 'ROLE_SPECIFIC', 'SECTOR_SPECIFIC', 'UNKNOWN'],
      evidence_strength: ['STRONG', 'MODERATE', 'WEAK', 'NOT_APPLICABLE'],
      evidence_required: ['REQUIRED_BY_ACT', 'RECOMMENDED_BY_DATAGUARD', 'NOT_APPLICABLE'],
      default_risk_level: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'],
      regulatory_status: ['NONE', 'REGULATORY_DETAIL_PENDING'],
      control_status: ['ACTIVE', 'REFERENCE', 'RETIRED'],
      role_scope: ['CONTROLLER', 'PROCESSOR', 'CONTROLLER_AND_PROCESSOR', 'PUBLIC_INSTITUTION'],
    },
    parts: PARTS.map((p) => ({
      part_number: p.part_number,
      part_title: p.part_title,
      sections: p.sections,
    })),
    sections: SECTIONS.map((s) => ({
      section_number: s.section_number,
      part_number: s.part_number,
      section_title: s.section_title,
      mapped: Boolean(controlsBySection[s.section_number]),
      control_count: (controlsBySection[s.section_number] || []).length,
      no_obligation_reason: nonObligationIndex[s.section_number] || null,
    })),
    requirements: REQUIREMENTS.map((r) => ({
      requirement_id: r.requirement_id,
      part_number: r.part_number,
      section_number: r.section_number,
      provision: r.provision,
      requirement_title: r.requirement_title,
      requirement_text: r.requirement_text,
      control_ids: CONTROLS.filter((c) => c.requirement_id === r.requirement_id).map((c) => c.control_id),
    })),
    controls: sortedControls.map((c) => {
      const out = {};
      for (const k of CSV_COLUMNS) out[k] = c[k] ?? null;
      return out;
    }),
  };
}

/* ------------------------------------------------------------------ CSV --- */

function csvCell(value) {
  if (value === null || value === undefined) return '';
  const s = Array.isArray(value) ? value.join(' | ') : String(value);
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function buildCsv() {
  const lines = [CSV_COLUMNS.join(',')];
  for (const c of sortedControls) lines.push(CSV_COLUMNS.map((k) => csvCell(c[k])).join(','));
  return lines.join('\r\n') + '\r\n';
}

/* ------------------------------------------------------------------- MD --- */

function mdEscape(s) {
  return String(s ?? '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

function bullets(values) {
  if (!values || values.length === 0) return '_none_';
  return values.map((v) => `\`${v}\``).join(', ');
}

function buildMatrixMd() {
  const L = [];
  L.push('# Tanzania Personal Data Protection Act 2022 - Control Matrix');
  L.push('');
  L.push('> **GENERATED FILE.** Produced by `scripts/generate-pdpa-artifacts.mjs` from');
  L.push('> `scripts/pdpa-2022.source.mjs`. Do not edit by hand - edit the source and regenerate.');
  L.push('');
  L.push(`| | |`);
  L.push(`| --- | --- |`);
  L.push(`| Framework | ${FRAMEWORK.name} (${FRAMEWORK.code}) |`);
  L.push(`| Jurisdiction | ${FRAMEWORK.jurisdiction} |`);
  L.push(`| Framework version | ${FRAMEWORK.version} |`);
  L.push(`| Act | ${FRAMEWORK.act_number}, ${FRAMEWORK.chapter} |`);
  L.push(`| Source text | ${FRAMEWORK.gazette_reference} |`);
  L.push(`| Commencement | ${FRAMEWORK.commencement} (${FRAMEWORK.commencement_reference}) |`);
  L.push(`| Matrix version | ${FRAMEWORK.matrix_version} (${FRAMEWORK.matrix_released}) |`);
  L.push(`| Controls | ${CONTROLS.length} |`);
  L.push(`| Requirements | ${REQUIREMENTS.length} |`);
  L.push('');
  L.push('## Legal disclaimer');
  L.push('');
  L.push(`> ${DISCLAIMER}`);
  L.push('');
  L.push(`> ${FRAMEWORK.language_note}`);
  L.push('');

  L.push('## How to read this matrix');
  L.push('');
  L.push('Each control records the exact provision it comes from and how far it is removed from the');
  L.push('statutory text. The `source_type` field is the key to that distinction:');
  L.push('');
  L.push('| `source_type` | Meaning |');
  L.push('| --- | --- |');
  L.push('| `ACT_EXPLICIT` | The requirement is directly stated in the Act. |');
  L.push('| `ACT_DERIVED` | The control follows directly from one or more explicit provisions read together, and adds no new legal obligation. |');
  L.push('| `INTERPRETATION` | A practical interpretation was necessary. The Act does not settle the point. |');
  L.push('| `IMPLEMENTATION_GUIDANCE` | Advice on how to demonstrate or implement a requirement. Not itself a statutory requirement. |');
  L.push('');
  L.push('Two further fields carry legal weight and must not be conflated with each other:');
  L.push('');
  L.push('- **`evidence_required`** - `REQUIRED_BY_ACT` means the Act itself calls for the document or record');
  L.push('  (for example the certificate of registration under section 14(4)). `RECOMMENDED_BY_DATAGUARD`');
  L.push('  means DataGuard suggests it as proof; it is **not** a statutory requirement.');
  L.push('- **`default_risk_level`** - a DataGuard product risk recommendation. It is **not** a statutory');
  L.push('  classification and does not correspond to any penalty in the Act. Penalties, where the Act attaches');
  L.push('  one to the specific provision, are stated in the control `notes` field and nowhere else.');
  L.push('');
  L.push('`regulatory_status: REGULATORY_DETAIL_PENDING` marks a control whose operational detail the Act');
  L.push('leaves to regulations that must be checked before the control can be fully specified.');
  L.push('');
  L.push('Open legal questions are recorded inline as `OPEN_QUESTION` in the `notes` field and collected in');
  L.push('[PDPA-2022-ASSUMPTIONS.md](PDPA-2022-ASSUMPTIONS.md).');
  L.push('');

  L.push('## Summary');
  L.push('');
  const count = (key) => {
    const m = {};
    for (const c of CONTROLS) m[c[key]] = (m[c[key]] || 0) + 1;
    return m;
  };
  const st = count('source_type');
  const ap = count('applicability');
  const rl = count('default_risk_level');
  L.push('| Dimension | Breakdown |');
  L.push('| --- | --- |');
  L.push(`| Source type | ${Object.entries(st).map(([k, v]) => `${k}: ${v}`).join(' · ')} |`);
  L.push(`| Applicability | ${Object.entries(ap).map(([k, v]) => `${k}: ${v}`).join(' · ')} |`);
  L.push(`| Default risk level | ${['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].filter((k) => rl[k]).map((k) => `${k}: ${rl[k]}`).join(' · ')} |`);
  L.push(`| Regulatory detail pending | ${CONTROLS.filter((c) => c.regulatory_status === 'REGULATORY_DETAIL_PENDING').length} |`);
  L.push(`| Evidence required by the Act | ${CONTROLS.filter((c) => c.evidence_required === 'REQUIRED_BY_ACT').length} |`);
  L.push('');

  L.push('## Control index');
  L.push('');
  L.push('| Control ID | Legal reference | Title | Source | Applicability | Risk |');
  L.push('| --- | --- | --- | --- | --- | --- |');
  for (const c of sortedControls) {
    L.push(
      `| \`${c.control_id}\` | ${mdEscape(c.legal_reference)} | ${mdEscape(c.control_title)} | ${c.source_type} | ${c.applicability} | ${c.default_risk_level} |`,
    );
  }
  L.push('');

  let currentPart = null;
  let currentSection = null;
  for (const c of sortedControls) {
    if (c.part_number !== currentPart) {
      currentPart = c.part_number;
      currentSection = null;
      L.push('');
      L.push('---');
      L.push('');
      L.push(`## Part ${c.part_number} - ${c.part_title}`);
      L.push('');
    }
    if (c.section_number !== currentSection) {
      currentSection = c.section_number;
      L.push(`### Section ${c.section_number} - ${c.section_title}`);
      L.push('');
    }
    const r = requirementIndex[c.requirement_id];
    L.push(`#### \`${c.control_id}\` ${c.control_title}`);
    L.push('');
    L.push(`**Legal basis:** ${c.legal_reference}${c.subsection ? ` (subsection ${c.subsection}${c.paragraph ? `, paragraph ${c.paragraph}` : ''})` : c.paragraph ? ` (paragraph ${c.paragraph})` : ''}  `);
    L.push(`**Requirement:** \`${c.requirement_id}\` - ${r ? r.requirement_title : ''}  `);
    L.push(`**Source type:** \`${c.source_type}\`${c.regulatory_status === 'REGULATORY_DETAIL_PENDING' ? ' · `REGULATORY_DETAIL_PENDING`' : ''}`);
    L.push('');
    L.push(`> **Statutory text as mapped.** ${c.legal_requirement}`);
    L.push('');
    L.push(`**Control.** ${c.control_description}`);
    L.push('');
    L.push(`**Assessment question.** ${c.plain_language_question}`);
    L.push('');
    L.push(`**Why this matters.** ${c.why_this_matters}`);
    L.push('');
    L.push(`**Expected state.** ${c.expected_state}`);
    L.push('');
    L.push(`**Implementation guidance.** ${c.implementation_guidance}`);
    L.push('');
    L.push('| Field | Value |');
    L.push('| --- | --- |');
    L.push(`| Response type | \`${c.response_type}\` |`);
    L.push(`| Answer options | ${c.answer_options.length ? c.answer_options.map((o) => `\`${o}\``).join(', ') : '_n/a_'} |`);
    L.push(`| Required | ${c.required ? 'Yes' : 'No'} |`);
    L.push(`| Applicability | \`${c.applicability}\` |`);
    if (c.applicability_question) L.push(`| Applicability question | ${mdEscape(c.applicability_question)} |`);
    L.push(`| Role scope | \`${c.role_scope}\` |`);
    L.push(`| Evidence status | \`${c.evidence_required}\` |`);
    L.push(`| Suggested evidence | ${bullets(c.evidence_examples)} |`);
    L.push(`| Evidence strength | \`${c.evidence_strength}\` |`);
    L.push(`| Evidence review frequency | \`${c.evidence_review_frequency}\` |`);
    L.push(`| Risk category | \`${c.risk_category}\` |`);
    L.push(`| DataGuard default risk | \`${c.default_risk_level}\` |`);
    L.push(`| Control status | \`${c.control_status}\` · matrix v${c.version} |`);
    L.push('');
    L.push(`**Risk rationale.** ${c.risk_rationale}`);
    L.push('');
    L.push(`**Remediation.** ${c.remediation_guidance}`);
    L.push('');
    if (c.suggested_task) {
      L.push(`**Suggested task.** ${c.suggested_task} _(priority: ${c.suggested_task_priority})_`);
      L.push('');
    }
    if (c.notes) {
      L.push(`**Notes.** ${c.notes}`);
      L.push('');
    }
  }

  L.push('');
  L.push('---');
  L.push('');
  L.push('## Coverage audit');
  L.push('');
  L.push('Every section of the Act is listed. A section is `NO - no obligation` where it creates no');
  L.push('assessable duty on a data controller or data processor, with the reason stated.');
  L.push('');
  L.push('| Part | Section | Section title | Mapped? | Control IDs | Notes |');
  L.push('| --- | --- | --- | --- | --- | --- |');
  for (const s of SECTIONS) {
    const cs = controlsBySection[s.section_number] || [];
    const mapped = cs.length ? 'YES' : nonObligationIndex[s.section_number] ? 'NO - no obligation' : 'NO - UNMAPPED';
    const ids = cs.map((c) => `\`${c.control_id}\``).join(', ') || '-';
    const note = cs.length ? `${cs.length} control(s)` : nonObligationIndex[s.section_number] || 'REVIEW REQUIRED';
    L.push(`| ${s.part_number} | ${s.section_number} | ${mdEscape(s.section_title)} | ${mapped} | ${ids} | ${mdEscape(note)} |`);
  }
  L.push('');
  const unmapped = SECTIONS.filter(
    (s) => !(controlsBySection[s.section_number] || []).length && !nonObligationIndex[s.section_number],
  );
  const mappedCount = Object.keys(controlsBySection).length;
  const bothCount = Object.keys(controlsBySection).filter((sn) => nonObligationIndex[sn]).length;
  const nonObligationOnly = NON_OBLIGATION_SECTIONS.length - bothCount;
  L.push(`**Total sections in the Act (including the Schedule):** ${SECTIONS.length}.`);
  L.push(`**Sections mapped to at least one control:** ${mappedCount}.`);
  L.push(`**Sections reviewed and recorded as creating no assessable controller or processor obligation:** ${nonObligationOnly}.`);
  if (bothCount) {
    const both = Object.keys(controlsBySection).filter((sn) => nonObligationIndex[sn]);
    L.push(
      `**Counted in both categories:** ${bothCount} (section ${both.join(', ')}) - carried as a non-assessable reference record rather than a scored control, so it appears in the mapped column and in the no-obligation list. ${mappedCount} + ${nonObligationOnly} = ${SECTIONS.length}.`,
    );
  }
  L.push(
    unmapped.length
      ? `**Sections neither mapped nor accounted for: ${unmapped.length}** - ${unmapped.map((s) => s.section_number).join(', ')}. THIS IS A DEFECT.`
      : '**Sections neither mapped nor accounted for: 0.**',
  );
  L.push('');
  return L.join('\n');
}

/* --------------------------------------------------------- TRACEABILITY --- */

function buildTraceabilityMd() {
  const L = [];
  L.push('# Tanzania PDPA 2022 - Traceability Matrix');
  L.push('');
  L.push('> **GENERATED FILE.** Produced by `scripts/generate-pdpa-artifacts.mjs`. Do not edit by hand.');
  L.push('');
  L.push(`> ${DISCLAIMER}`);
  L.push('');
  L.push('Every control traces along the chain:');
  L.push('');
  L.push('```text');
  L.push('Act Section -> Requirement -> Control -> Assessment Question -> Evidence -> Risk -> Task');
  L.push('```');
  L.push('');
  L.push(`Controls: **${CONTROLS.length}** · Requirements: **${REQUIREMENTS.length}** · Sections with controls: **${Object.keys(controlsBySection).length}**`);
  L.push('');

  for (const part of PARTS) {
    const partSections = SECTIONS.filter((s) => s.part_number === part.part_number);
    const hasControls = partSections.some((s) => (controlsBySection[s.section_number] || []).length);
    if (!hasControls) continue;
    L.push(`## Part ${part.part_number} - ${part.part_title}`);
    L.push('');
    for (const s of partSections) {
      const cs = controlsBySection[s.section_number] || [];
      if (!cs.length) continue;
      L.push(`### Section ${s.section_number} - ${s.section_title}`);
      L.push('');
      const reqs = REQUIREMENTS.filter((r) => r.section_number === s.section_number);
      for (const r of reqs) {
        const rcs = cs.filter((c) => c.requirement_id === r.requirement_id);
        if (!rcs.length) continue;
        L.push(`**Requirement \`${r.requirement_id}\`** (${r.provision}) - ${r.requirement_title}`);
        L.push('');
        L.push('| Control | Assessment question | Evidence | Risk | Task |');
        L.push('| --- | --- | --- | --- | --- |');
        for (const c of rcs) {
          L.push(
            `| \`${c.control_id}\`<br>${mdEscape(c.control_title)}<br>_${c.source_type}_ | ${mdEscape(c.plain_language_question)} | ${
              c.evidence_examples.length ? mdEscape(c.evidence_examples.join('; ')) : '_none_'
            }<br>_${c.evidence_required} · ${c.evidence_strength}_ | \`${c.default_risk_level}\`<br>${c.risk_category} | ${
              c.suggested_task ? mdEscape(c.suggested_task) : '_none_'
            }${c.suggested_task ? `<br>_${c.suggested_task_priority}_` : ''} |`,
          );
        }
        L.push('');
      }
    }
  }

  L.push('---');
  L.push('');
  L.push('## Requirement coverage');
  L.push('');
  L.push('| Requirement | Provision | Controls |');
  L.push('| --- | --- | --- |');
  for (const r of REQUIREMENTS) {
    const ids = CONTROLS.filter((c) => c.requirement_id === r.requirement_id).map((c) => `\`${c.control_id}\``);
    L.push(`| \`${r.requirement_id}\` | ${r.provision} | ${ids.join(', ') || '**ORPHANED**'} |`);
  }
  L.push('');

  L.push('## UNMAPPED PROVISIONS');
  L.push('');
  const unmapped = SECTIONS.filter(
    (s) => !(controlsBySection[s.section_number] || []).length && !nonObligationIndex[s.section_number],
  );
  if (unmapped.length === 0) {
    L.push('The mapping review found **no substantive provision of the Act that imposes an obligation on a');
    L.push('data controller or data processor and is left unmapped**.');
    L.push('');
    const mappedCount = Object.keys(controlsBySection).length;
    const both = Object.keys(controlsBySection).filter((sn) => nonObligationIndex[sn]);
    L.push('Every section of the Act falls into one of two categories:');
    L.push('');
    L.push(`1. **Mapped to one or more controls** - ${mappedCount} sections.`);
    L.push(`2. **Reviewed and recorded as creating no assessable obligation on a data controller or data`);
    L.push(`   processor** - ${NON_OBLIGATION_SECTIONS.length - both.length} sections.`);
    L.push('');
    if (both.length) {
      L.push(
        `Section ${both.join(', ')} appears in both categories: it is carried as a non-assessable reference record ` +
          `rather than a scored control. ${mappedCount} + ${NON_OBLIGATION_SECTIONS.length - both.length} = ${SECTIONS.length} sections in total.`,
      );
      L.push('');
    }
    L.push('The full no-obligation list, including the reference-record section, is below.');
    L.push('');
    L.push('| Section | Part | Title | Reason not mapped to a control |');
    L.push('| --- | --- | --- | --- |');
    for (const n of NON_OBLIGATION_SECTIONS) {
      const s = sectionIndex[n.section_number];
      L.push(`| ${n.section_number} | ${s.part_number} | ${mdEscape(s.section_title)} | ${mdEscape(n.reason)} |`);
    }
  } else {
    L.push('The following sections are neither mapped to a control nor recorded as creating no obligation.');
    L.push('This is a defect in the matrix and must be resolved.');
    L.push('');
    L.push('| Section | Part | Title |');
    L.push('| --- | --- | --- |');
    for (const s of unmapped) L.push(`| ${s.section_number} | ${s.part_number} | ${mdEscape(s.section_title)} |`);
  }
  L.push('');
  L.push('### Partially mapped provisions worth noting');
  L.push('');
  L.push('These provisions are mapped, but the mapping deliberately covers only part of the section because');
  L.push('the remainder addresses the Commission, the Minister or the courts rather than the organisation:');
  L.push('');
  L.push('| Provision | Mapped as | Not mapped, and why |');
  L.push('| --- | --- | --- |');
  L.push('| s.14(3), s.14(5) | - | Decision period and duty to give written reasons; both address the Commission. |');
  L.push('| s.15(1), s.15(2) | `PDPA-015-002` (partly) | Establishment and content of the register; addresses the Commission and the regulations. |');
  L.push('| s.31(1) | `PDPA-031-007` | The power itself is the Commission; the organisation duty is to comply with any prohibition. |');
  L.push('| s.32(3) | `PDPA-032-003` | The duty to make regulations is the Minister; the organisation duty is to comply once made. |');
  L.push('| s.37(3)-(5), s.38(1)-(3) | `PDPA-037-002`, `PDPA-038-001`, `PDPA-038-002` | The power to order is the Commission; the organisation duty is to comply. |');
  L.push('| s.39(2)-(4) | `PDPA-039-001` | Commission discretion to investigate and the 90-day timeline; addresses the Commission. |');
  L.push('| s.42(4) | `PDPA-042-001` (notes) | Duty to return documents within ten working days; addresses the Commission. |');
  L.push('| s.46(1)-(2) | `PDPA-046-001` | Discretion to issue a penalty notice and the factors; addresses the Commission. |');
  L.push('| s.59(2)-(3) | `PDPA-059-001` | Court powers to set and extend the preservation period. |');
  L.push('| s.64(1)-(2) | `PDPA-064-001` | The power to make regulations is the Minister; the organisation duty is derived monitoring. |');
  L.push('| s.65(3) | `PDPA-065-005` | The consideration and approval process addresses the Commission. |');
  L.push('');
  return L.join('\n');
}

/* ------------------------------------------------------------- SEED TS --- */

function tsString(v) {
  if (v === null || v === undefined) return 'null';
  return JSON.stringify(v);
}

function tsArray(v) {
  return `[${(v || []).map((x) => JSON.stringify(x)).join(', ')}]`;
}

function buildSeedTs() {
  const L = [];
  L.push('/**');
  L.push(' * Tanzania Personal Data Protection Act 2022 - compliance framework seed.');
  L.push(' *');
  L.push(' * GENERATED FILE. Produced by scripts/generate-pdpa-artifacts.mjs from');
  L.push(' * scripts/pdpa-2022.source.mjs. Do not edit by hand - edit the source and regenerate.');
  L.push(' *');
  L.push(` * ${DISCLAIMER}`);
  L.push(' *');
  L.push(' * Idempotency contract:');
  L.push(' *   - Every row is addressed by a stable natural key (frameworkCode, versionCode,');
  L.push(' *     partNumber, sectionNumber, requirementId, controlId).');
  L.push(' *   - seedTanzaniaPdpa2022() upserts on those keys, so running it twice produces');
  L.push(' *     no duplicates and no orphans.');
  L.push(' *   - Control IDs are permanent. Never reassign an ID to a different provision;');
  L.push(' *     supersede the control and issue a new framework version instead.');
  L.push(' */');
  L.push('');
  L.push('/* ------------------------------------------------------------------ types -- */');
  L.push('');
  L.push("export type SourceType = 'ACT_EXPLICIT' | 'ACT_DERIVED' | 'INTERPRETATION' | 'IMPLEMENTATION_GUIDANCE';");
  L.push('');
  L.push('export type ResponseType =');
  L.push("  | 'YES_NO'");
  L.push("  | 'YES_PARTIAL_NO'");
  L.push("  | 'MULTIPLE_CHOICE'");
  L.push("  | 'TEXT'");
  L.push("  | 'NUMBER'");
  L.push("  | 'DATE'");
  L.push("  | 'DOCUMENT_REQUIRED'");
  L.push("  | 'BOOLEAN';");
  L.push('');
  L.push("export type Applicability = 'UNIVERSAL' | 'CONDITIONAL' | 'ROLE_SPECIFIC' | 'SECTOR_SPECIFIC' | 'UNKNOWN';");
  L.push("export type EvidenceStrength = 'STRONG' | 'MODERATE' | 'WEAK' | 'NOT_APPLICABLE';");
  L.push("export type EvidenceRequirement = 'REQUIRED_BY_ACT' | 'RECOMMENDED_BY_DATAGUARD' | 'NOT_APPLICABLE';");
  L.push("export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';");
  L.push("export type TaskPriority = 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';");
  L.push("export type RegulatoryStatus = 'NONE' | 'REGULATORY_DETAIL_PENDING';");
  L.push("export type ControlStatus = 'ACTIVE' | 'REFERENCE' | 'RETIRED';");
  L.push("export type RoleScope = 'CONTROLLER' | 'PROCESSOR' | 'CONTROLLER_AND_PROCESSOR' | 'PUBLIC_INSTITUTION';");
  L.push('');
  L.push('export interface FrameworkSeed {');
  L.push('  code: string;');
  L.push('  name: string;');
  L.push('  shortName: string;');
  L.push('  jurisdiction: string;');
  L.push('  status: string;');
  L.push('  disclaimer: string;');
  L.push('}');
  L.push('');
  L.push('export interface FrameworkVersionSeed {');
  L.push('  frameworkCode: string;');
  L.push('  versionCode: string;');
  L.push('  status: string;');
  L.push('  actNumber: string;');
  L.push('  chapter: string;');
  L.push('  gazetteReference: string;');
  L.push('  commencementDate: string;');
  L.push('  commencementReference: string;');
  L.push('  languageNote: string;');
  L.push('  matrixVersion: string;');
  L.push('  matrixReleased: string;');
  L.push('}');
  L.push('');
  L.push('export interface PartSeed {');
  L.push('  frameworkCode: string;');
  L.push('  versionCode: string;');
  L.push('  partNumber: string;');
  L.push('  partTitle: string;');
  L.push('  displayOrder: number;');
  L.push('}');
  L.push('');
  L.push('export interface SectionSeed {');
  L.push('  frameworkCode: string;');
  L.push('  versionCode: string;');
  L.push('  partNumber: string;');
  L.push('  sectionNumber: string;');
  L.push('  sectionTitle: string;');
  L.push('  displayOrder: number;');
  L.push('  createsObligation: boolean;');
  L.push('  noObligationReason: string | null;');
  L.push('}');
  L.push('');
  L.push('export interface RequirementSeed {');
  L.push('  frameworkCode: string;');
  L.push('  versionCode: string;');
  L.push('  requirementId: string;');
  L.push('  partNumber: string;');
  L.push('  sectionNumber: string;');
  L.push('  provision: string;');
  L.push('  requirementTitle: string;');
  L.push('  requirementText: string;');
  L.push('}');
  L.push('');
  L.push('export interface ControlSeed {');
  L.push('  frameworkCode: string;');
  L.push('  versionCode: string;');
  L.push('  controlId: string;');
  L.push('  requirementId: string;');
  L.push('  partNumber: string;');
  L.push('  sectionNumber: string;');
  L.push('  subsection: string | null;');
  L.push('  paragraph: string | null;');
  L.push('  legalReference: string;');
  L.push('  legalRequirement: string;');
  L.push('  controlTitle: string;');
  L.push('  controlDescription: string;');
  L.push('  plainLanguageQuestion: string;');
  L.push('  whyThisMatters: string;');
  L.push('  implementationGuidance: string;');
  L.push('  expectedState: string;');
  L.push('  responseType: ResponseType;');
  L.push('  answerOptions: string[];');
  L.push('  required: boolean;');
  L.push('  applicability: Applicability;');
  L.push('  applicabilityQuestion: string | null;');
  L.push('  roleScope: RoleScope;');
  L.push('  evidenceRequired: EvidenceRequirement;');
  L.push('  evidenceExamples: string[];');
  L.push('  evidenceStrength: EvidenceStrength;');
  L.push('  evidenceReviewFrequency: string;');
  L.push('  riskCategory: string;');
  L.push('  defaultRiskLevel: RiskLevel;');
  L.push('  riskRationale: string;');
  L.push('  remediationGuidance: string;');
  L.push('  suggestedTask: string;');
  L.push('  suggestedTaskPriority: TaskPriority;');
  L.push('  controlStatus: ControlStatus;');
  L.push('  version: string;');
  L.push('  sourceType: SourceType;');
  L.push('  regulatoryStatus: RegulatoryStatus;');
  L.push('  notes: string;');
  L.push('  displayOrder: number;');
  L.push('}');
  L.push('');
  L.push('/* ------------------------------------------------------------------- data -- */');
  L.push('');
  L.push(`export const FRAMEWORK_CODE = ${JSON.stringify(FRAMEWORK.code)};`);
  L.push(`export const FRAMEWORK_VERSION_CODE = ${JSON.stringify(FRAMEWORK.version)};`);
  L.push('');
  L.push('export const framework: FrameworkSeed = {');
  L.push(`  code: ${JSON.stringify(FRAMEWORK.code)},`);
  L.push(`  name: ${JSON.stringify(FRAMEWORK.name)},`);
  L.push(`  shortName: ${JSON.stringify(FRAMEWORK.short_name)},`);
  L.push(`  jurisdiction: ${JSON.stringify(FRAMEWORK.jurisdiction)},`);
  L.push(`  status: ${JSON.stringify(FRAMEWORK.status)},`);
  L.push(`  disclaimer: ${JSON.stringify(DISCLAIMER)},`);
  L.push('};');
  L.push('');
  L.push('export const frameworkVersion: FrameworkVersionSeed = {');
  L.push('  frameworkCode: FRAMEWORK_CODE,');
  L.push('  versionCode: FRAMEWORK_VERSION_CODE,');
  L.push(`  status: ${JSON.stringify(FRAMEWORK.status)},`);
  L.push(`  actNumber: ${JSON.stringify(FRAMEWORK.act_number)},`);
  L.push(`  chapter: ${JSON.stringify(FRAMEWORK.chapter)},`);
  L.push(`  gazetteReference: ${JSON.stringify(FRAMEWORK.gazette_reference)},`);
  L.push(`  commencementDate: ${JSON.stringify(FRAMEWORK.commencement)},`);
  L.push(`  commencementReference: ${JSON.stringify(FRAMEWORK.commencement_reference)},`);
  L.push(`  languageNote: ${JSON.stringify(FRAMEWORK.language_note)},`);
  L.push(`  matrixVersion: ${JSON.stringify(FRAMEWORK.matrix_version)},`);
  L.push(`  matrixReleased: ${JSON.stringify(FRAMEWORK.matrix_released)},`);
  L.push('};');
  L.push('');
  L.push('export const parts: PartSeed[] = [');
  PARTS.forEach((p, i) => {
    L.push('  {');
    L.push('    frameworkCode: FRAMEWORK_CODE,');
    L.push('    versionCode: FRAMEWORK_VERSION_CODE,');
    L.push(`    partNumber: ${JSON.stringify(p.part_number)},`);
    L.push(`    partTitle: ${JSON.stringify(p.part_title)},`);
    L.push(`    displayOrder: ${i + 1},`);
    L.push('  },');
  });
  L.push('];');
  L.push('');
  L.push('export const sections: SectionSeed[] = [');
  SECTIONS.forEach((s, i) => {
    const reason = nonObligationIndex[s.section_number] || null;
    L.push('  {');
    L.push('    frameworkCode: FRAMEWORK_CODE,');
    L.push('    versionCode: FRAMEWORK_VERSION_CODE,');
    L.push(`    partNumber: ${JSON.stringify(s.part_number)},`);
    L.push(`    sectionNumber: ${JSON.stringify(s.section_number)},`);
    L.push(`    sectionTitle: ${JSON.stringify(s.section_title)},`);
    L.push(`    displayOrder: ${i + 1},`);
    L.push(`    createsObligation: ${reason ? 'false' : 'true'},`);
    L.push(`    noObligationReason: ${tsString(reason)},`);
    L.push('  },');
  });
  L.push('];');
  L.push('');
  L.push('export const requirements: RequirementSeed[] = [');
  for (const r of REQUIREMENTS) {
    L.push('  {');
    L.push('    frameworkCode: FRAMEWORK_CODE,');
    L.push('    versionCode: FRAMEWORK_VERSION_CODE,');
    L.push(`    requirementId: ${JSON.stringify(r.requirement_id)},`);
    L.push(`    partNumber: ${JSON.stringify(r.part_number)},`);
    L.push(`    sectionNumber: ${JSON.stringify(r.section_number)},`);
    L.push(`    provision: ${JSON.stringify(r.provision)},`);
    L.push(`    requirementTitle: ${JSON.stringify(r.requirement_title)},`);
    L.push(`    requirementText: ${JSON.stringify(r.requirement_text)},`);
    L.push('  },');
  }
  L.push('];');
  L.push('');
  L.push('export const controls: ControlSeed[] = [');
  sortedControls.forEach((c, i) => {
    L.push('  {');
    L.push('    frameworkCode: FRAMEWORK_CODE,');
    L.push('    versionCode: FRAMEWORK_VERSION_CODE,');
    L.push(`    controlId: ${JSON.stringify(c.control_id)},`);
    L.push(`    requirementId: ${JSON.stringify(c.requirement_id)},`);
    L.push(`    partNumber: ${JSON.stringify(c.part_number)},`);
    L.push(`    sectionNumber: ${JSON.stringify(c.section_number)},`);
    L.push(`    subsection: ${tsString(c.subsection)},`);
    L.push(`    paragraph: ${tsString(c.paragraph)},`);
    L.push(`    legalReference: ${JSON.stringify(c.legal_reference)},`);
    L.push(`    legalRequirement: ${JSON.stringify(c.legal_requirement)},`);
    L.push(`    controlTitle: ${JSON.stringify(c.control_title)},`);
    L.push(`    controlDescription: ${JSON.stringify(c.control_description)},`);
    L.push(`    plainLanguageQuestion: ${JSON.stringify(c.plain_language_question)},`);
    L.push(`    whyThisMatters: ${JSON.stringify(c.why_this_matters)},`);
    L.push(`    implementationGuidance: ${JSON.stringify(c.implementation_guidance)},`);
    L.push(`    expectedState: ${JSON.stringify(c.expected_state)},`);
    L.push(`    responseType: ${JSON.stringify(c.response_type)},`);
    L.push(`    answerOptions: ${tsArray(c.answer_options)},`);
    L.push(`    required: ${c.required ? 'true' : 'false'},`);
    L.push(`    applicability: ${JSON.stringify(c.applicability)},`);
    L.push(`    applicabilityQuestion: ${tsString(c.applicability_question)},`);
    L.push(`    roleScope: ${JSON.stringify(c.role_scope)},`);
    L.push(`    evidenceRequired: ${JSON.stringify(c.evidence_required)},`);
    L.push(`    evidenceExamples: ${tsArray(c.evidence_examples)},`);
    L.push(`    evidenceStrength: ${JSON.stringify(c.evidence_strength)},`);
    L.push(`    evidenceReviewFrequency: ${JSON.stringify(c.evidence_review_frequency)},`);
    L.push(`    riskCategory: ${JSON.stringify(c.risk_category)},`);
    L.push(`    defaultRiskLevel: ${JSON.stringify(c.default_risk_level)},`);
    L.push(`    riskRationale: ${JSON.stringify(c.risk_rationale)},`);
    L.push(`    remediationGuidance: ${JSON.stringify(c.remediation_guidance)},`);
    L.push(`    suggestedTask: ${JSON.stringify(c.suggested_task)},`);
    L.push(`    suggestedTaskPriority: ${JSON.stringify(c.suggested_task_priority)},`);
    L.push(`    controlStatus: ${JSON.stringify(c.control_status)},`);
    L.push(`    version: ${JSON.stringify(c.version)},`);
    L.push(`    sourceType: ${JSON.stringify(c.source_type)},`);
    L.push(`    regulatoryStatus: ${JSON.stringify(c.regulatory_status)},`);
    L.push(`    notes: ${JSON.stringify(c.notes)},`);
    L.push(`    displayOrder: ${i + 1},`);
    L.push('  },');
  });
  L.push('];');
  L.push('');
  L.push('/* -------------------------------------------------------------- seeding -- */');
  L.push('');
  L.push('/**');
  L.push(' * Minimal persistence surface the seed needs. The compliance-engine repository');
  L.push(' * layer supplies a concrete implementation over Drizzle/PostgreSQL. Every method');
  L.push(' * MUST upsert on the natural key shown in the corresponding seed type, so that');
  L.push(' * repeated runs are no-ops rather than duplicate inserts.');
  L.push(' */');
  L.push('export interface PdpaSeedRepository {');
  L.push('  upsertFramework(row: FrameworkSeed): Promise<void>;');
  L.push('  upsertFrameworkVersion(row: FrameworkVersionSeed): Promise<void>;');
  L.push('  upsertPart(row: PartSeed): Promise<void>;');
  L.push('  upsertSection(row: SectionSeed): Promise<void>;');
  L.push('  upsertRequirement(row: RequirementSeed): Promise<void>;');
  L.push('  upsertControl(row: ControlSeed): Promise<void>;');
  L.push('}');
  L.push('');
  L.push('export interface SeedResult {');
  L.push('  frameworks: number;');
  L.push('  versions: number;');
  L.push('  parts: number;');
  L.push('  sections: number;');
  L.push('  requirements: number;');
  L.push('  controls: number;');
  L.push('}');
  L.push('');
  L.push('/**');
  L.push(' * Seeds the framework in dependency order. Idempotent: safe to run repeatedly.');
  L.push(' * Nothing here is Tanzania-specific beyond the data; the scoring engine must read');
  L.push(' * these rows rather than hard-coding this framework.');
  L.push(' */');
  L.push('export async function seedTanzaniaPdpa2022(repo: PdpaSeedRepository): Promise<SeedResult> {');
  L.push('  await repo.upsertFramework(framework);');
  L.push('  await repo.upsertFrameworkVersion(frameworkVersion);');
  L.push('  for (const part of parts) await repo.upsertPart(part);');
  L.push('  for (const section of sections) await repo.upsertSection(section);');
  L.push('  for (const requirement of requirements) await repo.upsertRequirement(requirement);');
  L.push('  for (const control of controls) await repo.upsertControl(control);');
  L.push('  return {');
  L.push('    frameworks: 1,');
  L.push('    versions: 1,');
  L.push('    parts: parts.length,');
  L.push('    sections: sections.length,');
  L.push('    requirements: requirements.length,');
  L.push('    controls: controls.length,');
  L.push('  };');
  L.push('}');
  L.push('');
  L.push('/** Referential integrity check used by scripts/validate-pdpa-framework.ts. */');
  L.push('export function verifySeedIntegrity(): string[] {');
  L.push('  const errors: string[] = [];');
  L.push('  const partNumbers = new Set(parts.map((p) => p.partNumber));');
  L.push('  const sectionNumbers = new Set(sections.map((s) => s.sectionNumber));');
  L.push('  const requirementIds = new Set(requirements.map((r) => r.requirementId));');
  L.push('  const controlIds = new Set<string>();');
  L.push('');
  L.push('  for (const s of sections) {');
  L.push('    if (!partNumbers.has(s.partNumber)) errors.push(`section ${s.sectionNumber}: unknown part ${s.partNumber}`);');
  L.push('  }');
  L.push('  for (const r of requirements) {');
  L.push('    if (!sectionNumbers.has(r.sectionNumber)) errors.push(`requirement ${r.requirementId}: unknown section ${r.sectionNumber}`);');
  L.push('    if (!partNumbers.has(r.partNumber)) errors.push(`requirement ${r.requirementId}: unknown part ${r.partNumber}`);');
  L.push('  }');
  L.push('  for (const c of controls) {');
  L.push('    if (controlIds.has(c.controlId)) errors.push(`duplicate control id ${c.controlId}`);');
  L.push('    controlIds.add(c.controlId);');
  L.push('    if (!requirementIds.has(c.requirementId)) errors.push(`control ${c.controlId}: orphaned requirement ${c.requirementId}`);');
  L.push('    if (!sectionNumbers.has(c.sectionNumber)) errors.push(`control ${c.controlId}: unknown section ${c.sectionNumber}`);');
  L.push('    if (!partNumbers.has(c.partNumber)) errors.push(`control ${c.controlId}: unknown part ${c.partNumber}`);');
  L.push('  }');
  L.push('  for (const r of requirements) {');
  L.push('    if (!controls.some((c) => c.requirementId === r.requirementId)) {');
  L.push('      errors.push(`requirement ${r.requirementId}: no controls reference it`);');
  L.push('    }');
  L.push('  }');
  L.push('  return errors;');
  L.push('}');
  L.push('');
  return L.join('\n');
}

/* ----------------------------------------------------------------- write --- */

mkdirSync(DOCS, { recursive: true });
mkdirSync(SEED, { recursive: true });

const outputs = [
  [join(DOCS, 'PDPA-2022-FRAMEWORK.json'), JSON.stringify(buildJson(), null, 2) + '\n'],
  [join(DOCS, 'PDPA-2022-CONTROL-MATRIX.csv'), buildCsv()],
  [join(DOCS, 'PDPA-2022-CONTROL-MATRIX.md'), buildMatrixMd()],
  [join(DOCS, 'PDPA-2022-TRACEABILITY.md'), buildTraceabilityMd()],
  [join(SEED, 'tanzania-pdpa-2022.ts'), buildSeedTs()],
];

for (const [path, content] of outputs) {
  writeFileSync(path, content, 'utf8');
  console.log(`wrote ${path.replace(ROOT + '\\', '').replace(ROOT + '/', '')} (${content.length} bytes)`);
}
console.log(`\n${CONTROLS.length} controls, ${REQUIREMENTS.length} requirements, ${SECTIONS.length} sections, ${PARTS.length} parts.`);
