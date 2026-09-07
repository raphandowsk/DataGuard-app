/**
 * Validates the generated Tanzania PDPA 2022 control matrix artefacts.
 *
 *   node scripts/validate-pdpa-framework.ts
 *
 * Node 22.6+ / 24 runs this directly via native TypeScript type stripping.
 * On older runtimes use: npx tsx scripts/validate-pdpa-framework.ts
 *
 * Exits 1 if any check fails.
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  framework as seedFramework,
  frameworkVersion as seedVersion,
  parts as seedParts,
  sections as seedSections,
  requirements as seedRequirements,
  controls as seedControls,
  verifySeedIntegrity,
} from '../db/seed/frameworks/tanzania-pdpa-2022.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = join(ROOT, 'docs', 'legal');

const SOURCE_TYPES = ['ACT_EXPLICIT', 'ACT_DERIVED', 'INTERPRETATION', 'IMPLEMENTATION_GUIDANCE'];
const RESPONSE_TYPES = [
  'YES_NO',
  'YES_PARTIAL_NO',
  'MULTIPLE_CHOICE',
  'TEXT',
  'NUMBER',
  'DATE',
  'DOCUMENT_REQUIRED',
  'BOOLEAN',
];
const APPLICABILITY = ['UNIVERSAL', 'CONDITIONAL', 'ROLE_SPECIFIC', 'SECTOR_SPECIFIC', 'UNKNOWN'];
const EVIDENCE_STRENGTH = ['STRONG', 'MODERATE', 'WEAK', 'NOT_APPLICABLE'];
const EVIDENCE_REQUIRED = ['REQUIRED_BY_ACT', 'RECOMMENDED_BY_DATAGUARD', 'NOT_APPLICABLE'];
const RISK_LEVELS = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
const TASK_PRIORITIES = ['NONE', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
const REGULATORY_STATUS = ['NONE', 'REGULATORY_DETAIL_PENDING'];
const CONTROL_STATUS = ['ACTIVE', 'REFERENCE', 'RETIRED'];
const ROLE_SCOPE = ['CONTROLLER', 'PROCESSOR', 'CONTROLLER_AND_PROCESSOR', 'PUBLIC_INSTITUTION'];
const CONTROL_ID_PATTERN = /^PDPA-\d{3}-\d{3}$/;

const errors: string[] = [];
const warnings: string[] = [];
const checks: Array<{ name: string; passed: boolean; detail: string }> = [];

function check(name: string, failures: string[], detail = ''): void {
  const passed = failures.length === 0;
  checks.push({ name, passed, detail: passed ? detail : `${failures.length} failure(s)` });
  for (const f of failures) errors.push(`[${name}] ${f}`);
}

/* ------------------------------------------------------- files and JSON --- */

const REQUIRED_FILES = [
  'PDPA-2022-CONTROL-MATRIX.md',
  'PDPA-2022-CONTROL-MATRIX.csv',
  'PDPA-2022-FRAMEWORK.json',
  'PDPA-2022-TRACEABILITY.md',
  'PDPA-2022-ASSUMPTIONS.md',
  'PDPA-2022-CHANGELOG.md',
];
check(
  'required artefacts exist',
  REQUIRED_FILES.filter((f) => !existsSync(join(DOCS, f))).map((f) => `missing docs/legal/${f}`),
  `${REQUIRED_FILES.length} files`,
);

const jsonPath = join(DOCS, 'PDPA-2022-FRAMEWORK.json');
let doc: any;
try {
  doc = JSON.parse(readFileSync(jsonPath, 'utf8'));
  checks.push({ name: 'JSON is valid', passed: true, detail: 'parsed' });
} catch (e) {
  checks.push({ name: 'JSON is valid', passed: false, detail: (e as Error).message });
  errors.push(`[JSON is valid] ${(e as Error).message}`);
  report();
  process.exit(1);
}

const controls: any[] = doc.controls ?? [];
const requirements: any[] = doc.requirements ?? [];
const sections: any[] = doc.sections ?? [];
const parts: any[] = doc.parts ?? [];

const sectionNumbers = new Set(sections.map((s) => s.section_number));
const partNumbers = new Set(parts.map((p) => p.part_number));
const requirementIds = new Set(requirements.map((r) => r.requirement_id));

check(
  'framework header complete',
  ['code', 'name', 'jurisdiction', 'version', 'status', 'disclaimer'].filter((k) => !doc.framework?.[k]).map(
    (k) => `framework.${k} is missing`,
  ),
  doc.framework?.code,
);

check('controls present', controls.length === 0 ? ['no controls in JSON'] : [], `${controls.length} controls`);

/* ------------------------------------------------------ per-control rules -- */

const seen = new Map<string, number>();
check(
  'every control has an ID',
  controls.map((c, i) => (c.control_id ? null : `control at index ${i} has no control_id`)).filter(Boolean) as string[],
);
check(
  'control IDs match PDPA-[SECTION]-[SEQUENCE]',
  controls
    .filter((c) => c.control_id && !CONTROL_ID_PATTERN.test(c.control_id))
    .map((c) => `${c.control_id} does not match ${CONTROL_ID_PATTERN}`),
);
check(
  'control IDs are unique',
  (() => {
    const dupes: string[] = [];
    for (const c of controls) {
      const n = (seen.get(c.control_id) ?? 0) + 1;
      seen.set(c.control_id, n);
      if (n === 2) dupes.push(`duplicate control_id ${c.control_id}`);
    }
    return dupes;
  })(),
);
check(
  'control ID section segment matches section_number',
  controls
    .filter((c) => CONTROL_ID_PATTERN.test(c.control_id ?? ''))
    .filter((c) => String(Number(c.control_id.split('-')[1])) !== String(Number(c.section_number)))
    .map((c) => `${c.control_id} encodes section ${c.control_id.split('-')[1]} but section_number is ${c.section_number}`),
);

const requiredText = [
  'legal_reference',
  'legal_requirement',
  'section_number',
  'part_number',
  'control_title',
  'control_description',
  'plain_language_question',
  'why_this_matters',
  'implementation_guidance',
  'expected_state',
  'risk_category',
  'risk_rationale',
  'remediation_guidance',
  'requirement_id',
];
check(
  'every control has the mandatory narrative fields',
  controls.flatMap((c) =>
    requiredText.filter((k) => !c[k] || String(c[k]).trim() === '').map((k) => `${c.control_id}: ${k} is empty`),
  ),
  `${requiredText.length} fields checked`,
);

const enumChecks: Array<[string, string[]]> = [
  ['source_type', SOURCE_TYPES],
  ['response_type', RESPONSE_TYPES],
  ['applicability', APPLICABILITY],
  ['evidence_strength', EVIDENCE_STRENGTH],
  ['evidence_required', EVIDENCE_REQUIRED],
  ['default_risk_level', RISK_LEVELS],
  ['suggested_task_priority', TASK_PRIORITIES],
  ['regulatory_status', REGULATORY_STATUS],
  ['control_status', CONTROL_STATUS],
  ['role_scope', ROLE_SCOPE],
];
for (const [field, allowed] of enumChecks) {
  check(
    `every control has a valid ${field}`,
    controls.filter((c) => !allowed.includes(c[field])).map((c) => `${c.control_id}: ${field}=${JSON.stringify(c[field])}`),
    `${allowed.length} allowed values`,
  );
}

check(
  'every control has evidence guidance',
  controls
    .filter((c) => {
      if (c.evidence_required === 'NOT_APPLICABLE') return false;
      return !Array.isArray(c.evidence_examples) || c.evidence_examples.length === 0;
    })
    .map((c) => `${c.control_id}: no evidence_examples`),
);

check(
  'response types that need options have them',
  controls
    .filter((c) => ['YES_NO', 'YES_PARTIAL_NO', 'MULTIPLE_CHOICE'].includes(c.response_type))
    .filter((c) => !Array.isArray(c.answer_options) || c.answer_options.length < 2)
    .map((c) => `${c.control_id}: response_type ${c.response_type} with ${c.answer_options?.length ?? 0} options`),
);

check(
  'conditional and role-specific controls carry an applicability question',
  controls
    .filter((c) => ['CONDITIONAL', 'ROLE_SPECIFIC', 'SECTOR_SPECIFIC'].includes(c.applicability))
    .filter((c) => !c.applicability_question)
    .map((c) => `${c.control_id}: applicability=${c.applicability} but no applicability_question`),
);

check(
  'universal controls carry no applicability question',
  controls
    .filter((c) => c.applicability === 'UNIVERSAL' && c.applicability_question)
    .map((c) => `${c.control_id}: UNIVERSAL but has an applicability_question`),
);

check(
  'actionable controls suggest a task',
  controls
    .filter((c) => c.control_status === 'ACTIVE')
    .filter((c) => !c.suggested_task || c.suggested_task_priority === 'NONE')
    .map((c) => `${c.control_id}: ACTIVE control with no suggested task`),
);

check(
  'derived, interpreted and guidance controls are labelled in notes',
  controls
    .filter((c) => c.source_type !== 'ACT_EXPLICIT')
    .filter((c) => !String(c.notes ?? '').includes(c.source_type))
    .map((c) => `${c.control_id}: source_type ${c.source_type} not explained in notes`),
);

check(
  'risk rationale is framed as a DataGuard classification, not a statutory one',
  controls
    .filter((c) => !/DataGuard default risk classification/i.test(String(c.risk_rationale ?? '')))
    .map((c) => `${c.control_id}: risk_rationale does not identify itself as a DataGuard classification`),
);

/* --------------------------------------------------- structural integrity -- */

check(
  'every control maps to a known section',
  controls.filter((c) => !sectionNumbers.has(c.section_number)).map((c) => `${c.control_id}: unknown section ${c.section_number}`),
);
check(
  'every control maps to a known part',
  controls.filter((c) => !partNumbers.has(c.part_number)).map((c) => `${c.control_id}: unknown part ${c.part_number}`),
);
check(
  'no orphaned controls (requirement must exist)',
  controls.filter((c) => !requirementIds.has(c.requirement_id)).map((c) => `${c.control_id}: unknown requirement ${c.requirement_id}`),
);
check(
  'no orphaned requirements (each must have a control)',
  requirements
    .filter((r) => !controls.some((c) => c.requirement_id === r.requirement_id))
    .map((r) => `${r.requirement_id}: no control references it`),
);
check(
  'every section belongs to a declared part',
  sections.filter((s) => !partNumbers.has(s.part_number)).map((s) => `section ${s.section_number}: unknown part ${s.part_number}`),
);
check(
  'part section lists agree with the section table',
  parts.flatMap((p) =>
    (p.sections ?? [])
      .filter((sn: string) => !sections.some((s) => s.section_number === sn && s.part_number === p.part_number))
      .map((sn: string) => `part ${p.part_number} lists section ${sn} which is not assigned to it`),
  ),
);
check(
  'every section is either mapped or has a recorded no-obligation reason',
  sections
    .filter((s) => !s.mapped && !s.no_obligation_reason)
    .map((s) => `section ${s.section_number} is unmapped with no reason recorded`),
);
check(
  'requirement subsection references match their section',
  requirements
    .filter((r) => !r.provision.includes(`.${r.section_number}`) && r.section_number !== 'SCH')
    .map((r) => `${r.requirement_id}: provision ${r.provision} does not reference section ${r.section_number}`),
);

/* ------------------------------------------------------- seed comparison -- */

check(
  'seed framework matches JSON',
  [
    seedFramework.code === doc.framework.code ? null : `code ${seedFramework.code} != ${doc.framework.code}`,
    seedFramework.name === doc.framework.name ? null : `name mismatch`,
    seedVersion.versionCode === doc.framework.version ? null : `version ${seedVersion.versionCode} != ${doc.framework.version}`,
  ].filter(Boolean) as string[],
);

check(
  'seed control count matches JSON',
  seedControls.length === controls.length ? [] : [`seed has ${seedControls.length}, JSON has ${controls.length}`],
  `${seedControls.length} controls`,
);
check(
  'seed requirement count matches JSON',
  seedRequirements.length === requirements.length ? [] : [`seed has ${seedRequirements.length}, JSON has ${requirements.length}`],
  `${seedRequirements.length} requirements`,
);
check(
  'seed section count matches JSON',
  seedSections.length === sections.length ? [] : [`seed has ${seedSections.length}, JSON has ${sections.length}`],
  `${seedSections.length} sections`,
);
check(
  'seed part count matches JSON',
  seedParts.length === parts.length ? [] : [`seed has ${seedParts.length}, JSON has ${parts.length}`],
  `${seedParts.length} parts`,
);

const jsonById = new Map(controls.map((c) => [c.control_id, c]));
check(
  'seed control field values match JSON',
  seedControls.flatMap((sc) => {
    const jc = jsonById.get(sc.controlId);
    if (!jc) return [`${sc.controlId}: present in seed but not in JSON`];
    const pairs: Array<[string, unknown, unknown]> = [
      ['requirement_id', sc.requirementId, jc.requirement_id],
      ['section_number', sc.sectionNumber, jc.section_number],
      ['part_number', sc.partNumber, jc.part_number],
      ['legal_reference', sc.legalReference, jc.legal_reference],
      ['legal_requirement', sc.legalRequirement, jc.legal_requirement],
      ['control_title', sc.controlTitle, jc.control_title],
      ['plain_language_question', sc.plainLanguageQuestion, jc.plain_language_question],
      ['source_type', sc.sourceType, jc.source_type],
      ['applicability', sc.applicability, jc.applicability],
      ['response_type', sc.responseType, jc.response_type],
      ['default_risk_level', sc.defaultRiskLevel, jc.default_risk_level],
      ['evidence_required', sc.evidenceRequired, jc.evidence_required],
      ['evidence_examples', JSON.stringify(sc.evidenceExamples), JSON.stringify(jc.evidence_examples)],
      ['answer_options', JSON.stringify(sc.answerOptions), JSON.stringify(jc.answer_options)],
      ['control_status', sc.controlStatus, jc.control_status],
      ['notes', sc.notes, jc.notes ?? ''],
    ];
    return pairs.filter(([, a, b]) => a !== b).map(([f, a, b]) => `${sc.controlId}: ${f} seed=${JSON.stringify(a)} json=${JSON.stringify(b)}`);
  }),
);

check('seed referential integrity', verifySeedIntegrity());

/* ------------------------------------------------------------------ CSV --- */

const csvPath = join(DOCS, 'PDPA-2022-CONTROL-MATRIX.csv');
if (existsSync(csvPath)) {
  const csv = readFileSync(csvPath, 'utf8');
  const header = csv.split(/\r?\n/)[0] ?? '';
  const csvIds = [...csv.matchAll(/^(PDPA-\d{3}-\d{3}),/gm)].map((m) => m[1]);
  check('CSV has a header row', header.startsWith('control_id,') ? [] : ['CSV header does not start with control_id'], header.split(',').length + ' columns');
  check(
    'CSV row count matches JSON control count',
    csvIds.length === controls.length ? [] : [`CSV has ${csvIds.length} data rows, JSON has ${controls.length} controls`],
    `${csvIds.length} rows`,
  );
  check(
    'CSV control IDs match JSON control IDs',
    csvIds.filter((id) => !jsonById.has(id)).map((id) => `CSV row ${id} is not in JSON`),
  );
}

/* ---------------------------------------------------- documentation rules -- */

const mdPath = join(DOCS, 'PDPA-2022-CONTROL-MATRIX.md');
if (existsSync(mdPath)) {
  const md = readFileSync(mdPath, 'utf8');
  check(
    'matrix document carries the legal disclaimer',
    md.includes('does not constitute legal advice') ? [] : ['disclaimer text not found in the matrix document'],
  );
  check(
    'matrix document contains a coverage audit table',
    md.includes('## Coverage audit') ? [] : ['no coverage audit section found'],
  );
  check(
    'every control appears in the matrix document',
    controls.filter((c) => !md.includes(c.control_id)).map((c) => `${c.control_id} missing from the matrix document`),
  );
}

const tracePath = join(DOCS, 'PDPA-2022-TRACEABILITY.md');
if (existsSync(tracePath)) {
  const trace = readFileSync(tracePath, 'utf8');
  check(
    'traceability document declares UNMAPPED PROVISIONS',
    trace.includes('## UNMAPPED PROVISIONS') ? [] : ['no UNMAPPED PROVISIONS section found'],
  );
  check(
    'every control appears in the traceability document',
    controls.filter((c) => !trace.includes(c.control_id)).map((c) => `${c.control_id} missing from the traceability document`),
  );
}

/* ------------------------------------------------------------- warnings --- */

for (const c of controls) {
  if (c.evidence_required === 'REQUIRED_BY_ACT' && c.source_type !== 'ACT_EXPLICIT') {
    warnings.push(`${c.control_id}: evidence marked REQUIRED_BY_ACT on a ${c.source_type} control - confirm the Act really requires the record`);
  }
  if (/\b(GDPR|ISO 27001|NIST|CCPA)\b/.test(`${c.legal_requirement} ${c.control_description} ${c.implementation_guidance}`)) {
    warnings.push(`${c.control_id}: references an external framework in a substantive field`);
  }
  if (/72 hours?/i.test(`${c.legal_requirement} ${c.implementation_guidance} ${c.expected_state}`)) {
    warnings.push(`${c.control_id}: mentions a 72-hour deadline, which does not appear in this Act`);
  }
}

/* -------------------------------------------------------------- reporting -- */

function report(): void {
  const pad = Math.max(...checks.map((c) => c.name.length), 10) + 2;
  console.log('\nTanzania PDPA 2022 framework validation');
  console.log('='.repeat(pad + 20));
  for (const c of checks) {
    console.log(`${c.passed ? 'PASS' : 'FAIL'}  ${c.name.padEnd(pad)} ${c.detail}`);
  }
  console.log('='.repeat(pad + 20));
  console.log(`checks: ${checks.length}   passed: ${checks.filter((c) => c.passed).length}   failed: ${checks.filter((c) => !c.passed).length}`);
  if (warnings.length) {
    console.log(`\nWarnings (${warnings.length}):`);
    for (const w of warnings) console.log(`  - ${w}`);
  }
  if (errors.length) {
    console.log(`\nErrors (${errors.length}):`);
    for (const e of errors.slice(0, 60)) console.log(`  - ${e}`);
    if (errors.length > 60) console.log(`  ... and ${errors.length - 60} more`);
  }
}

report();

if (errors.length > 0) {
  console.log('\nVALIDATION: FAIL');
  process.exit(1);
}
console.log('\nVALIDATION: PASS');
console.log(`Framework ${doc.framework.code} ${doc.framework.version} - ${controls.length} controls, ${requirements.length} requirements, ${sections.length} sections, ${parts.length} parts.`);
process.exit(0);
