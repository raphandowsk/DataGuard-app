/**
 * AUTHORED SOURCE OF TRUTH for the Tanzania Personal Data Protection Act, 2022
 * control matrix.
 *
 * Legal source: The Personal Data Protection Act, Chapter 44 (Act No. 11 of 2022),
 * English version published by GN. No. 395B of 13 June 2023, in force 1 May 2023
 * (GN. No. 326 of 2023).
 *
 * Every artefact under /docs/legal and /db/seed/frameworks is GENERATED from this
 * file by scripts/generate-pdpa-artifacts.mjs. Edit here, then regenerate.
 *
 * DISCLAIMER: This is a product implementation mapping. It is not legal advice.
 */

export const FRAMEWORK = {
  code: 'TZ-PDPA',
  name: 'Personal Data Protection Act',
  short_name: 'Tanzania PDPA',
  jurisdiction: 'Tanzania',
  version: '2022',
  status: 'ACTIVE',
  act_number: 'Act No. 11 of 2022',
  chapter: 'Chapter 44',
  gazette_reference:
    'GN. No. 395B published on 13/6/2023 (English version), Special Supplement No. 21 to Special Gazette No. 15 Vol. 104',
  commencement: '2023-05-01',
  commencement_reference: 'GN. No. 326 of 2023',
  language_note:
    'The English version is a translation published pursuant to section 84(4) of the Interpretation of Laws Act, Cap. 1.',
  matrix_version: '1.0.0',
  matrix_released: '2026-09-03',
};

export const PARTS = [
  { part_number: 'I', part_title: 'Preliminary Provisions', sections: ['1', '2', '3', '4', '5'] },
  { part_number: 'II', part_title: 'Personal Data Protection Commission', sections: ['6', '7', '8', '9', '10', '11', '12', '13'] },
  { part_number: 'III', part_title: 'Registration of Data Controllers and Data Processors', sections: ['14', '15', '16', '17', '18', '19', '20', '21'] },
  { part_number: 'IV', part_title: 'Collection, Use, Disclosure and Retention of Personal Data', sections: ['22', '23', '24', '25', '26', '27', '28', '29', '30'] },
  { part_number: 'V', part_title: 'Transborder Data Flow', sections: ['31', '32'] },
  { part_number: 'VI', part_title: 'Rights of Data Subjects', sections: ['33', '34', '35', '36', '37', '38'] },
  { part_number: 'VII', part_title: 'Investigation of Complaints', sections: ['39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'] },
  { part_number: 'VIII', part_title: 'Financial Provisions', sections: ['51', '52', '53', '54', '55', '56', '57'] },
  { part_number: 'IX', part_title: 'Miscellaneous Provisions', sections: ['58', '59', '60', '61', '62', '63', '64', '65'] },
  { part_number: 'SCHEDULE', part_title: 'Schedule - Proceedings of the Board', sections: ['SCH'] },
];

export const SECTIONS = [
  { section_number: '1', part_number: 'I', section_title: 'Short title' },
  { section_number: '2', part_number: 'I', section_title: 'Application' },
  { section_number: '3', part_number: 'I', section_title: 'Interpretation' },
  { section_number: '4', part_number: 'I', section_title: 'Objectives of Act' },
  { section_number: '5', part_number: 'I', section_title: 'Principles of personal data protection' },
  { section_number: '6', part_number: 'II', section_title: 'Establishment of Personal Data Protection Commission' },
  { section_number: '7', part_number: 'II', section_title: 'Functions of Commission' },
  { section_number: '8', part_number: 'II', section_title: 'Establishment of Board' },
  { section_number: '9', part_number: 'II', section_title: 'Functions of Board' },
  { section_number: '10', part_number: 'II', section_title: 'Committees of Board' },
  { section_number: '11', part_number: 'II', section_title: 'Appointment of Director General' },
  { section_number: '12', part_number: 'II', section_title: 'Tenure of office of Director General' },
  { section_number: '13', part_number: 'II', section_title: 'Staff of Commission' },
  { section_number: '14', part_number: 'III', section_title: 'Registration of data controllers and data processors' },
  { section_number: '15', part_number: 'III', section_title: 'Register of data controllers and data processors' },
  { section_number: '16', part_number: 'III', section_title: 'Duration of registration' },
  { section_number: '17', part_number: 'III', section_title: 'Inspection of registered particulars' },
  { section_number: '18', part_number: 'III', section_title: 'Deregistration' },
  { section_number: '19', part_number: 'III', section_title: 'Offences relating to registration' },
  { section_number: '20', part_number: 'III', section_title: 'Appeal relating to registration' },
  { section_number: '21', part_number: 'III', section_title: 'Registration of public institutions' },
  { section_number: '22', part_number: 'IV', section_title: 'Collection of personal data' },
  { section_number: '23', part_number: 'IV', section_title: 'Source and notification of personal data' },
  { section_number: '24', part_number: 'IV', section_title: 'Accuracy of personal data' },
  { section_number: '25', part_number: 'IV', section_title: 'Personal data to be used for intended purpose' },
  { section_number: '26', part_number: 'IV', section_title: 'Limitations on disclosure of personal data' },
  { section_number: '27', part_number: 'IV', section_title: 'Security of personal data' },
  { section_number: '28', part_number: 'IV', section_title: 'Retention and disposal of personal data' },
  { section_number: '29', part_number: 'IV', section_title: 'Correction of personal data' },
  { section_number: '30', part_number: 'IV', section_title: 'Prohibition on processing of sensitive personal data' },
  { section_number: '31', part_number: 'V', section_title: 'Transfer of personal data to state with adequate data protection' },
  { section_number: '32', part_number: 'V', section_title: 'Transfer of personal data to state without adequate data protection' },
  { section_number: '33', part_number: 'VI', section_title: 'Right of access to personal data' },
  { section_number: '34', part_number: 'VI', section_title: 'Right to prevent processing likely to affect data subject' },
  { section_number: '35', part_number: 'VI', section_title: 'Right to prevent processing of personal data for direct marketing purposes' },
  { section_number: '36', part_number: 'VI', section_title: 'Rights in relation to automated decision making' },
  { section_number: '37', part_number: 'VI', section_title: 'Right to compensation' },
  { section_number: '38', part_number: 'VI', section_title: 'Rectification, blocking, erasure and destruction of personal data' },
  { section_number: '39', part_number: 'VII', section_title: 'Complaints against violation of personal data protection principles' },
  { section_number: '40', part_number: 'VII', section_title: 'Notice of investigation' },
  { section_number: '41', part_number: 'VII', section_title: 'Investigation confidentiality' },
  { section_number: '42', part_number: 'VII', section_title: 'Powers of Commission in carrying out investigations' },
  { section_number: '43', part_number: 'VII', section_title: 'Obstruction of Commission' },
  { section_number: '44', part_number: 'VII', section_title: 'Seeking assistance of another person or authority' },
  { section_number: '45', part_number: 'VII', section_title: 'Enforcement notice' },
  { section_number: '46', part_number: 'VII', section_title: 'Notice of penalty' },
  { section_number: '47', part_number: 'VII', section_title: 'Administrative fines' },
  { section_number: '48', part_number: 'VII', section_title: 'Review of decision' },
  { section_number: '49', part_number: 'VII', section_title: 'Right of appeal' },
  { section_number: '50', part_number: 'VII', section_title: 'Payment of compensation' },
  { section_number: '51', part_number: 'VIII', section_title: 'Sources of funds of Commission' },
  { section_number: '52', part_number: 'VIII', section_title: 'Financial management' },
  { section_number: '53', part_number: 'VIII', section_title: 'Estimates of income and expenditure and financial control' },
  { section_number: '54', part_number: 'VIII', section_title: 'Expenditure of funds' },
  { section_number: '55', part_number: 'VIII', section_title: 'Supplementary budget' },
  { section_number: '56', part_number: 'VIII', section_title: 'Accounts and audit' },
  { section_number: '57', part_number: 'VIII', section_title: 'Annual reports and performance agreements' },
  { section_number: '58', part_number: 'IX', section_title: 'Exceptions from application of provisions of this Act' },
  { section_number: '59', part_number: 'IX', section_title: 'Preservation order' },
  { section_number: '60', part_number: 'IX', section_title: 'Offences of unlawful disclosure of personal data' },
  { section_number: '61', part_number: 'IX', section_title: 'Offences of unlawful destruction, deletion, concealment or alteration of personal data' },
  { section_number: '62', part_number: 'IX', section_title: 'Offences by company or corporation' },
  { section_number: '63', part_number: 'IX', section_title: 'General penalty' },
  { section_number: '64', part_number: 'IX', section_title: 'Regulations' },
  { section_number: '65', part_number: 'IX', section_title: 'Code of ethics for personal data protection' },
  { section_number: 'SCH', part_number: 'SCHEDULE', section_title: 'Proceedings of the Board (made under section 8(6))' },
];

/**
 * Sections that create no directly assessable obligation on a data controller or
 * data processor. They are institutional, definitional, or address the Commission,
 * the Board or the Minister. Recorded so the coverage audit can show that they were
 * reviewed and deliberately not turned into controls.
 */
export const NON_OBLIGATION_SECTIONS = [
  { section_number: '1', reason: 'Short title only. No obligation.' },
  { section_number: '3', reason: 'Definitions. Feeds control scoping (notably "sensitive personal data", "processing", "data controller", "data processor", "transborder flow") but creates no standalone obligation.' },
  { section_number: '4', reason: 'Statement of the objectives of the Act. Interpretive, not an obligation.' },
  { section_number: '6', reason: 'Establishes the Commission as a body corporate. Addressed to the State.' },
  { section_number: '7', reason: 'Functions of the Commission. Addressed to the Commission.' },
  { section_number: '8', reason: 'Establishment and composition of the Board. Addressed to the State.' },
  { section_number: '9', reason: 'Functions of the Board. Addressed to the Board.' },
  { section_number: '10', reason: 'Committees of the Board. Addressed to the Board.' },
  { section_number: '11', reason: 'Appointment of Director General. Addressed to the President/Minister.' },
  { section_number: '12', reason: 'Tenure of the Director General. Institutional.' },
  { section_number: '13', reason: 'Staff of the Commission. Institutional.' },
  { section_number: '17', reason: 'Power of the Commission to permit inspection of the register. Addressed to the Commission; no controller obligation. Transparency consequence noted at PDPA-015-002.' },
  { section_number: '41', reason: 'Confidentiality duty in investigations, addressed to the Commission and the Director General.' },
  { section_number: '44', reason: 'Commission power to seek assistance. Cooperation duty for the organisation is captured at PDPA-042-001 and PDPA-043-001.' },
  { section_number: '47', reason: 'Sets the statutory ceiling for administrative fines. Captured as a reference record (PDPA-047-001), not as an assessable control.' },
  { section_number: '51', reason: 'Sources of funds of the Commission. Institutional.' },
  { section_number: '52', reason: 'Financial management by the Board. Institutional.' },
  { section_number: '53', reason: 'Budget estimates of the Commission. Institutional.' },
  { section_number: '54', reason: 'Expenditure of Commission funds. Institutional.' },
  { section_number: '55', reason: 'Supplementary budget of the Commission. Institutional.' },
  { section_number: '56', reason: 'Accounts and audit of the Commission. Institutional.' },
  { section_number: '57', reason: 'Annual reports of the Commission. Institutional.' },
  { section_number: '63', reason: 'General penalty provision. Consequence, not a discrete obligation. Referenced in the notes of the controls it backs.' },
  { section_number: 'SCH', reason: 'Proceedings of the Board. Institutional.' },
];

export const YPN = [
  'Implemented',
  'Partially implemented',
  'Not implemented',
  'Not applicable',
  'I do not know',
];

export const YN = ['Yes', 'No', 'Not applicable', 'I do not know'];

const DEFAULTS = {
  subsection: null,
  paragraph: null,
  response_type: 'YES_PARTIAL_NO',
  answer_options: YPN,
  required: true,
  applicability: 'UNIVERSAL',
  applicability_question: null,
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_required: 'RECOMMENDED_BY_DATAGUARD',
  evidence_examples: [],
  evidence_strength: 'MODERATE',
  evidence_review_frequency: 'ANNUAL',
  control_status: 'ACTIVE',
  version: '1.0.0',
  regulatory_status: 'NONE',
  notes: '',
};

const CONTROLS = [];
const REQUIREMENTS = [];
const SECTION_INDEX = Object.fromEntries(SECTIONS.map((s) => [s.section_number, s]));
const REQUIREMENT_INDEX = new Map();

/** Declare a statutory requirement (one discrete provision of the Act). */
function req(requirement_id, section_number, provision, requirement_title, requirement_text) {
  const sec = SECTION_INDEX[section_number];
  if (!sec) throw new Error(`Unknown section ${section_number} for ${requirement_id}`);
  if (REQUIREMENT_INDEX.has(requirement_id)) {
    throw new Error(`Duplicate requirement id ${requirement_id}`);
  }
  const entry = {
    requirement_id,
    section_number,
    part_number: sec.part_number,
    provision,
    requirement_title,
    requirement_text,
  };
  REQUIREMENT_INDEX.set(requirement_id, entry);
  REQUIREMENTS.push(entry);
  return requirement_id;
}

/** Register one control. Fills framework/part/section metadata and defaults. */
function c(o) {
  const sec = SECTION_INDEX[o.section_number];
  if (!sec) throw new Error(`Unknown section ${o.section_number} for ${o.control_id}`);
  if (!REQUIREMENT_INDEX.has(o.requirement_id)) {
    throw new Error(`Control ${o.control_id} references unknown requirement ${o.requirement_id}`);
  }
  const part = PARTS.find((p) => p.part_number === sec.part_number);
  CONTROLS.push({
    ...DEFAULTS,
    ...o,
    framework: FRAMEWORK.name,
    framework_version: FRAMEWORK.version,
    part_number: part.part_number,
    part_title: part.part_title,
    section_title: sec.section_title,
  });
}

export { CONTROLS, REQUIREMENTS, req, c };
