/* Part V - Transborder Data Flow. Sections 31-32. */
import { req, c, YN } from './registry.mjs';

req('REQ-031-1', '31', 's.31(1)', 'Commission power to prohibit transfers',
  'The Commission may, subject to the provisions of this Act, prohibit the transfer of personal data to a place outside the country.');
req('REQ-031-2', '31', 's.31(2)', 'Transfer to a state with adequate protection',
  'Personal data shall be transferred to country that has a legal framework that provides for adequate data protection, if (a) the recipient establishes that the personal data is necessary for the performance of a task carried out in the public interest or pursuant to the lawful functions of a data controller; or (b) the recipient establishes the necessity of having the data transferred and there is no reason to assume that the data subject legitimate interests might be prejudiced by the transfer or the processing in the recipient country.');
req('REQ-031-3', '31', 's.31(3)', 'Provisional evaluation of necessity',
  'The data controller shall, notwithstanding subsection (2), be required to make a provisional evaluation of the necessity for the transfer of the personal data.');
req('REQ-031-4', '31', 's.31(4)', 'Subsequent verifiability of necessity',
  'The recipient shall ensure that the necessity for the transfer of the personal data can be subsequently verified.');
req('REQ-031-5', '31', 's.31(5)', 'Recipient processing limited to transfer purposes',
  'The data controller shall ensure that the recipient shall process the personal data for the purposes for which it was transferred.');
req('REQ-032-1', '32', 's.32(1)', 'Transfer to other recipient states',
  'Personal data may be transferred to recipients states other than those referred to under section 31, if an adequate level of protection is ensured in the country of the recipient and the personal data is transferred solely to permit processing authorised to be undertaken by the controller.');
req('REQ-032-2', '32', 's.32(2)', 'Adequacy assessment factors',
  'The adequacy of the level of protection afforded by the relevant third country shall be assessed in the light of (a) all the circumstances surrounding the relevant personal data transfer; (b) nature of the personal data; (c) the purpose and duration of the proposed processing; (d) the recipient country; (e) the relevant laws in force in the third country; and (f) the professional rules and security measures which are complied within that recipient country.');
req('REQ-032-3', '32', 's.32(3)', 'Regulations specifying unauthorised transfers',
  'The Minister shall, after consultation with Commission and by regulations, specify categories of processing for which and the circumstances in which the transfer of personal data to countries outside the United Republic is not authorised.');
req('REQ-032-4', '32', 's.32(4)', 'Derogations permitting transfer',
  'Notwithstanding subsection (3), a transfer of personal data to a recipient in a country outside the country or to a country which does not have adequate level of protection may take place where the data subject has consented; the transfer is necessary for the performance of a contract between the data subject and the controller or pre-contractual measures at the data subject request; the transfer is necessary for the conclusion or performance of a contract between the controller and a third party in the interest of the data subject; the transfer is necessary or legally required on public interest grounds or for the institution, trial or defence of legal claims; the transfer is necessary to protect the legitimate interests of the data subject; or the transfer is made in accordance with the law and is intended to provide information to the public and is open for consultation.');
req('REQ-032-5', '32', 's.32(5)', 'Commission authorisation on adequate safeguards',
  'Without prejudice to the provisions of this Act, the Commission may authorise a transfer of personal data to a recipient country or any other country which does not have adequate level of protection in its laws, if the data controller satisfies the Commission that there is adequate safeguards with respect to the protection of personal data, fundamental rights and freedoms of the data subject and the exercise of the data subject rights, and that such safeguards can be appropriated through adequate legal and security measures and contractual clauses in particular.');

c({
  control_id: 'PDPA-031-001',
  requirement_id: 'REQ-031-2',
  section_number: '31',
  subsection: '31(2)',
  legal_reference: 'Sections 31 and 32 read with section 5(h)',
  legal_requirement:
    'Part V governs transborder flow, defined in section 3 as any international cross-border flows of personal data by means of electronic transmission or other means. Compliance requires the controller to know which transfers it makes.',
  control_title: 'Identification and inventory of international transfers',
  control_description:
    'All transborder flows of personal data are identified and recorded, including electronic transmission and any other means.',
  plain_language_question:
    'Have you listed every occasion on which personal data leaves Tanzania, by any means?',
  why_this_matters:
    'The statutory definition covers transfers by electronic transmission or other means. Cloud hosting, offshore support access, group reporting and even couriered paper all count.',
  implementation_guidance:
    'Build a transfer inventory covering hosting and cloud services, offshore support and administration access, intra-group reporting, offshore backups and disaster recovery, and any physical movement of records. Record recipient, destination country, data categories and purpose for each.',
  expected_state:
    'A complete transfer inventory, reviewed at least annually and on any change of supplier or hosting arrangement.',
  applicability: 'CONDITIONAL',
  applicability_question: 'Does any personal data you hold leave Tanzania by any means?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Transfer Inventory', 'Cloud Hosting Register', 'Data Flow Diagram', 'Processor Inventory'],
  evidence_strength: 'MODERATE',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Everything else in Part V depends on knowing which transfers exist. Undiscovered transfers are unassessed transfers.',
  remediation_guidance:
    'Interview IT and business owners, review supplier contracts and hosting arrangements, and build the inventory before assessing any individual transfer.',
  suggested_task: 'Build a complete inventory of transborder personal data flows',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_DERIVED',
  notes:
    'ACT_DERIVED. The Act does not expressly require a transfer inventory. It is the practical precondition for demonstrating compliance with sections 31 and 32.',
});

c({
  control_id: 'PDPA-031-002',
  requirement_id: 'REQ-031-2',
  section_number: '31',
  subsection: '31(2)',
  legal_reference: 'Section 31(2)',
  legal_requirement:
    'Personal data shall be transferred to a country that has a legal framework that provides for adequate data protection.',
  control_title: 'Destination country legal framework assessed',
  control_description:
    'For each destination, the organisation has assessed whether that country has a legal framework providing adequate data protection, and has recorded the assessment.',
  plain_language_question:
    'For each country you send personal data to, have you assessed whether its laws provide adequate data protection, and written that assessment down?',
  why_this_matters:
    'Section 31 applies to countries with an adequate legal framework and section 32 to those without. Which section governs a transfer depends on this assessment.',
  implementation_guidance:
    'Assess each destination country using the section 32(2) factors, which supply the statutory criteria for adequacy. Record the conclusion, the date and who made it. Reassess when the destination law changes.',
  expected_state:
    'A dated adequacy assessment per destination country, held with the transfer inventory.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you transfer personal data outside Tanzania?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Transfer Assessment', 'Legal Assessment Note', 'External Counsel Advice'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. The adequacy conclusion determines which statutory route applies, and getting it wrong invalidates the basis for every transfer to that destination.',
  remediation_guidance:
    'Commission a country-by-country assessment against the section 32(2) factors, starting with your highest-volume destinations.',
  suggested_task: 'Assess the data protection legal framework of each destination country',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'DataGuard must not hard-code any country as adequate or inadequate. The Act contains no list of adequate countries, and no adequacy decision is reproduced in it. Adequacy is assessed by the data controller under section 32(2), subject to the Commission powers under sections 31(1) and 32(5) and to any regulations under section 32(3).',
});

c({
  control_id: 'PDPA-031-003',
  requirement_id: 'REQ-031-2',
  section_number: '31',
  subsection: '31(2)',
  paragraph: '(a)-(b)',
  legal_reference: 'Section 31(2)(a)-(b)',
  legal_requirement:
    'A transfer to a country with an adequate legal framework requires that the recipient establishes either that the personal data is necessary for the performance of a task carried out in the public interest or pursuant to the lawful functions of a data controller, or that there is a necessity for the transfer and no reason to assume that the data subject legitimate interests might be prejudiced by the transfer or by the processing in the recipient country.',
  control_title: 'Recipient establishes the statutory ground for the transfer',
  control_description:
    'For each transfer under section 31, the recipient has established one of the two statutory grounds, and the organisation holds that record.',
  plain_language_question:
    'For each transfer, has the recipient shown you why the data is needed, and have you kept that in writing?',
  why_this_matters:
    'The Act puts the burden on the recipient to establish the ground. If the recipient has never been asked, the ground has not been established.',
  implementation_guidance:
    'Ask the recipient to state in writing which ground applies and why. For the second ground, record the assessment that the data subject legitimate interests would not be prejudiced.',
  expected_state:
    'A written statement from each recipient establishing the ground, held with the transfer record.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you transfer personal data to a country you have assessed as having an adequate legal framework?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Recipient Necessity Statement', 'Transfer Assessment', 'Data Sharing Agreement'],
  evidence_strength: 'STRONG',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Without the recipient statement the transfer has no established ground, and the record cannot be reconstructed after the fact.',
  remediation_guidance:
    'Request written necessity statements from existing recipients and build the request into the onboarding process for new ones.',
  suggested_task: 'Obtain written necessity statements from transfer recipients',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-031-004',
  requirement_id: 'REQ-031-3',
  section_number: '31',
  subsection: '31(3)',
  legal_reference: 'Section 31(3)',
  legal_requirement:
    'The data controller shall, notwithstanding subsection (2), be required to make a provisional evaluation of the necessity for the transfer of the personal data.',
  control_title: 'Controller provisional evaluation of transfer necessity',
  control_description:
    'Before transferring, the controller carries out and records its own provisional evaluation of whether the transfer is necessary, independently of the recipient statement.',
  plain_language_question:
    'Before you send personal data abroad, do you make and record your own judgement that the transfer is necessary?',
  why_this_matters:
    'The Act imposes this duty on the controller in addition to the recipient having to establish a ground. Relying only on what the recipient says does not discharge it.',
  implementation_guidance:
    'Complete a short provisional evaluation per transfer: what data, why it must go, whether a lesser alternative would work, and who decided. Do it before the transfer starts.',
  expected_state:
    'A dated provisional evaluation on file for every transfer, completed before the transfer began.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you transfer personal data outside Tanzania?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Transfer Assessment', 'Provisional Necessity Evaluation', 'DPO Approval Record'],
  evidence_strength: 'STRONG',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. This is an express, controller-specific duty that is separate from the recipient obligation and is frequently overlooked.',
  remediation_guidance:
    'Create a provisional evaluation template and complete it retrospectively for live transfers, then make it a pre-transfer gate.',
  suggested_task: 'Complete a provisional necessity evaluation for every cross-border transfer',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'OPEN_QUESTION: the Act does not define what a provisional evaluation must contain, nor when it ceases to be provisional.',
});

c({
  control_id: 'PDPA-031-005',
  requirement_id: 'REQ-031-4',
  section_number: '31',
  subsection: '31(4)',
  legal_reference: 'Section 31(4)',
  legal_requirement:
    'The recipient shall ensure that the necessity for the transfer of the personal data can be subsequently verified.',
  control_title: 'Recipient maintains verifiable evidence of necessity',
  control_description:
    'Transfer arrangements require the recipient to keep records that allow the necessity for the transfer to be verified later.',
  plain_language_question:
    'Have you required your overseas recipients to keep records that would let the necessity for the transfer be checked afterwards?',
  why_this_matters:
    'The duty falls on the recipient, but you are the one who will be asked. A contractual record-keeping obligation is how you make it real.',
  implementation_guidance:
    'Include a record-keeping and verification clause in the transfer agreement, with a right to request evidence. Note that this obligation is placed on the recipient by the Act.',
  expected_state:
    'A verification and record-keeping clause in every cross-border transfer agreement.',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you transfer personal data outside Tanzania?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Data Sharing Agreement', 'Processor Agreement', 'Transfer Assessment'],
  evidence_strength: 'MODERATE',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The statutory duty is on the recipient, so the controller exposure is indirect, but without the clause the controller has no way to obtain the evidence.',
  remediation_guidance: 'Add a verification clause at the next contract renewal for each recipient.',
  suggested_task: 'Add a necessity verification clause to cross-border transfer agreements',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 31(4) imposes the duty on the recipient. DataGuard treats securing it contractually as the controller practical route, which is IMPLEMENTATION_GUIDANCE rather than a statutory duty on the controller.',
});

c({
  control_id: 'PDPA-031-006',
  requirement_id: 'REQ-031-5',
  section_number: '31',
  subsection: '31(5)',
  legal_reference: 'Section 31(5)',
  legal_requirement:
    'The data controller shall ensure that the recipient shall process the personal data for the purposes for which it was transferred.',
  control_title: 'Recipient processing limited to the transfer purpose',
  control_description:
    'The controller ensures, contractually and in practice, that the recipient processes the transferred data only for the purposes for which it was transferred.',
  plain_language_question:
    'Do you make sure your overseas recipients only use the data for the purpose you sent it for?',
  why_this_matters:
    'The Act makes this the controller responsibility, not the recipient. Sending the data does not transfer the accountability.',
  implementation_guidance:
    'State the permitted purposes explicitly in the transfer agreement, prohibit onward use and onward transfer without consent, and seek periodic confirmation of compliance.',
  expected_state:
    'Purpose limitation clauses in every transfer agreement plus periodic confirmation from the recipient.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you transfer personal data outside Tanzania?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Data Sharing Agreement', 'Processor Agreement', 'Recipient Compliance Confirmation'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. The duty to ensure rests expressly on the controller, so recipient misuse is a controller failure.',
  remediation_guidance:
    'Add explicit purpose limitation and onward transfer clauses, and introduce annual confirmation requests.',
  suggested_task: 'Bind recipients to the transfer purpose and obtain periodic confirmation',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-031-007',
  requirement_id: 'REQ-031-1',
  section_number: '31',
  subsection: '31(1)',
  legal_reference: 'Section 31(1)',
  legal_requirement:
    'The Commission may, subject to the provisions of this Act, prohibit the transfer of personal data to a place outside the country.',
  control_title: 'Compliance with Commission transfer prohibitions',
  control_description:
    'The organisation monitors for and complies with any prohibition issued by the Commission on transfers to a place outside the country.',
  plain_language_question:
    'Do you check whether the Commission has prohibited transfers to any of the places you send data to, and could you stop such a transfer quickly?',
  why_this_matters:
    'A prohibition can arrive at any time. Being able to identify and suspend the affected flows quickly is what turns a notice into a manageable event.',
  implementation_guidance:
    'Add Commission announcements to the regulatory monitoring list. Ensure the transfer inventory is structured so affected flows can be identified and suspended by destination.',
  expected_state:
    'Regulatory monitoring covers Commission transfer prohibitions, and the transfer inventory supports suspension by destination.',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you transfer personal data outside Tanzania?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Regulatory Change Log', 'Transfer Inventory', 'Incident and Escalation Procedure'],
  evidence_strength: 'MODERATE',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. A prohibition is a contingent event, but continuing a prohibited transfer would be a direct and serious contravention.',
  remediation_guidance:
    'Add Commission transfer prohibitions to the regulatory monitoring list and confirm the inventory can be filtered by destination.',
  suggested_task: 'Monitor for and be able to act on Commission transfer prohibitions',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-032-001',
  requirement_id: 'REQ-032-1',
  section_number: '32',
  subsection: '32(1)',
  legal_reference: 'Section 32(1)',
  legal_requirement:
    'Personal data may be transferred to recipient states other than those referred to under section 31 if an adequate level of protection is ensured in the country of the recipient and the personal data is transferred solely to permit processing authorised to be undertaken by the controller.',
  control_title: 'Transfer solely to permit processing authorised to the controller',
  control_description:
    'Transfers under section 32(1) are limited to processing that the controller is itself authorised to undertake, and this limitation is documented and enforced.',
  plain_language_question:
    'Where you transfer data under section 32, is it only so the recipient can carry out processing you are yourself authorised to do?',
  why_this_matters:
    'A transfer cannot be used to have someone abroad do something you could not lawfully do yourself. This limit is easy to breach when a supplier offers an extra service.',
  implementation_guidance:
    'Map the recipient processing operations back to the controller own authorised purposes. Reject any recipient activity that exceeds them.',
  expected_state:
    'A documented mapping of recipient processing to the controller authorised processing for each section 32 transfer.',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you transfer personal data to a country not assessed under section 31 as having an adequate legal framework?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Transfer Assessment', 'Data Sharing Agreement', 'Data Processing Register'],
  evidence_strength: 'MODERATE',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Transfers that enable processing beyond the controller own authority breach both section 32(1) and the purpose limitation duties in sections 25 and 26.',
  remediation_guidance:
    'Compare each recipient scope of processing against your own authorised purposes and narrow the contract where it exceeds them.',
  suggested_task: 'Map recipient processing to the controller authorised processing for section 32 transfers',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-032-002',
  requirement_id: 'REQ-032-2',
  section_number: '32',
  subsection: '32(2)',
  paragraph: '(a)-(f)',
  legal_reference: 'Section 32(2)(a)-(f)',
  legal_requirement:
    'The adequacy of the level of protection afforded by the relevant third country shall be assessed in the light of all the circumstances surrounding the transfer, the nature of the personal data, the purpose and duration of the proposed processing, the recipient country, the relevant laws in force in the third country, and the professional rules and security measures complied with in that country.',
  control_title: 'Adequacy assessment against the six statutory factors',
  control_description:
    'Each destination country adequacy assessment addresses all six factors listed in section 32(2) and records the conclusion.',
  plain_language_question:
    'Does your assessment of each destination country cover all six factors the Act lists, including the laws in force there and the security measures actually followed?',
  why_this_matters:
    'The Act enumerates the factors. An assessment that skips some of them is incomplete on the face of the section, whatever its conclusion.',
  implementation_guidance:
    'Use an assessment template with one section per factor (a) to (f). Record the evidence considered, the conclusion and the date, and have the data protection officer approve it.',
  expected_state:
    'A completed six-factor assessment per destination country, approved and dated, reviewed at least annually.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you transfer personal data outside Tanzania?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Transfer Assessment', 'Adequacy Assessment Template', 'External Counsel Advice', 'DPO Approval Record'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. The factors are enumerated in the Act, so an incomplete assessment is visibly deficient and cannot support the transfer.',
  remediation_guidance:
    'Adopt a six-factor template and rework existing assessments against it, taking legal input on the third country laws factor.',
  suggested_task: 'Complete a six-factor adequacy assessment for each destination country',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'DataGuard must not pre-populate conclusions for any country. Factor (e), the relevant laws in force in the third country, generally requires legal input.',
});

c({
  control_id: 'PDPA-032-003',
  requirement_id: 'REQ-032-3',
  section_number: '32',
  subsection: '32(3)',
  legal_reference: 'Section 32(3) read with section 64(2)(k)',
  legal_requirement:
    'The Minister shall, after consultation with the Commission and by regulations, specify categories of processing for which and the circumstances in which the transfer of personal data to countries outside the United Republic is not authorised.',
  control_title: 'Monitoring of prohibited transfer categories set by regulations',
  control_description:
    'The organisation monitors for regulations specifying categories of processing and circumstances in which transfers are not authorised, and checks its transfers against them.',
  plain_language_question:
    'Do you check whether regulations forbid transferring certain categories of data or in certain circumstances?',
  why_this_matters:
    'Section 32(3) uses shall, so these regulations are contemplated rather than optional. When they arrive they may prohibit transfers you are currently making.',
  implementation_guidance:
    'Add section 32(3) regulations to the regulatory monitoring list. When made, assess every entry in the transfer inventory against them.',
  expected_state:
    'A regulatory monitoring record covering section 32(3), with an assessment of the transfer inventory against any regulations in force.',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you transfer personal data outside Tanzania?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Regulatory Change Log', 'Transfer Inventory', 'Legal Assessment Note'],
  evidence_strength: 'MODERATE',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The obligation is contingent on regulations, but a prohibited transfer that continues unnoticed is a serious contravention.',
  remediation_guidance: 'Add section 32(3) and section 64(2)(k) to the regulatory monitoring list.',
  suggested_task: 'Monitor for regulations prohibiting categories of transborder transfer',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'REGULATORY_DETAIL_PENDING. The Act does not itself specify any prohibited category. DataGuard must not pre-populate one.',
});

c({
  control_id: 'PDPA-032-004',
  requirement_id: 'REQ-032-4',
  section_number: '32',
  subsection: '32(4)',
  paragraph: '(a)-(f)',
  legal_reference: 'Section 32(4)(a)-(f)',
  legal_requirement:
    'A transfer to a country outside the United Republic or to a country without an adequate level of protection may take place where the data subject has consented to the proposed transfer; the transfer is necessary for the performance of a contract between the data subject and the controller or for pre-contractual measures taken at the data subject request; the transfer is necessary for the conclusion or performance of a contract between the controller and a third party in the interest of the data subject; the transfer is necessary or legally required on public interest grounds or for the institution, trial or defence of legal claims; the transfer is necessary to protect the legitimate interests of the data subject; or the transfer is made in accordance with the law and is intended to provide information to the public and is open for consultation.',
  control_title: 'Documented reliance on a section 32(4) transfer derogation',
  control_description:
    'Where a transfer relies on a derogation, the specific limb of section 32(4) is identified, justified and recorded before the transfer.',
  plain_language_question:
    'Where you transfer data to a country without adequate protection, have you recorded which specific legal exception allows it?',
  why_this_matters:
    'The derogations are specific and mostly narrow. Recording which one applies is what distinguishes a considered decision from an unexamined transfer.',
  implementation_guidance:
    'Record the limb, the justification, the approver and the date for each transfer relying on a derogation. Where consent is relied on, hold the consent record and confirm it covers the proposed transfer specifically.',
  expected_state:
    'A derogation register with limb, justification, approver and date for every transfer relying on section 32(4).',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you transfer personal data to a country that does not have an adequate level of protection?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Transfer Derogation Register', 'Consent Record', 'Contract', 'Legal Assessment Note'],
  evidence_strength: 'STRONG',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. A transfer to an inadequate destination with no recorded derogation has no lawful basis, and the derogations cannot be reconstructed retrospectively with any credibility.',
  remediation_guidance:
    'Create the derogation register, assess each existing transfer to an inadequate destination, and suspend any transfer with no available limb.',
  suggested_task: 'Record the section 32(4) derogation relied on for each transfer',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-032-005',
  requirement_id: 'REQ-032-5',
  section_number: '32',
  subsection: '32(5)',
  legal_reference: 'Section 32(5)',
  legal_requirement:
    'The Commission may authorise a transfer of personal data to a country which does not have an adequate level of protection if the data controller satisfies the Commission that there are adequate safeguards with respect to the protection of personal data, fundamental rights and freedoms of the data subject and the exercise of the data subject rights, and that such safeguards can be appropriated through adequate legal and security measures and contractual clauses in particular.',
  control_title: 'Commission authorisation on the basis of adequate safeguards',
  control_description:
    'Where a transfer to an inadequate destination proceeds on the basis of safeguards, the organisation has satisfied the Commission and holds the authorisation.',
  plain_language_question:
    'Where you rely on safeguards such as contract clauses to transfer data to a country without adequate protection, have you obtained the Commission authorisation?',
  why_this_matters:
    'On the wording of section 32(5) the safeguards route runs through the Commission. Putting contractual clauses in place is the evidence you present, not the authorisation itself.',
  implementation_guidance:
    'Assemble the safeguards package - contractual clauses, security measures, and how data subject rights will be exercised - and apply to the Commission. Retain the authorisation and the conditions attached to it.',
  expected_state:
    'A Commission authorisation on file for each transfer relying on the safeguards route, with the safeguards package retained.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you rely on contractual clauses or other safeguards to transfer personal data to a country without adequate protection?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Commission Authorisation', 'Contractual Safeguards Package', 'Transfer Assessment', 'Security Measures Description'],
  evidence_strength: 'STRONG',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Relying on safeguards without the Commission authorisation leaves an ongoing transfer to an inadequate destination with no lawful footing.',
  remediation_guidance:
    'Prepare the safeguards package and apply to the Commission, or move the transfer onto a section 32(4) derogation, or suspend it.',
  suggested_task: 'Obtain Commission authorisation for safeguards-based transfers',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'OPEN_QUESTION: the Act does not prescribe the application procedure, the form of the safeguards, or the time within which the Commission must decide. It also does not publish approved standard contractual clauses.',
});
