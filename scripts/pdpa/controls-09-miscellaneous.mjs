/* Part IX - Miscellaneous Provisions. Sections 58-65. */
import { req, c, YN } from './registry.mjs';

req('REQ-058-1', '58', 's.58(1)', 'Exemptions do not displace the principles or security duties',
  'Nothing under this section shall exempt the data controller or the data processor from the responsibility of complying with the principles of the law in collection and processing of personal data and taking necessary measures to ensure protection and security of the personal data.');
req('REQ-058-2', '58', 's.58(2)-(3)', 'Exempted processing',
  'Processing of personal data may be exempted from the provisions of this Act if such processing is held by the data subject for his personal use; in accordance with any law or court order; for purpose of safeguarding national safety and security and public interest; for the purpose of prevent or detect crimes; for the purpose of detect or prevent tax evasion; for the purpose of investigation of misappropriation of public funds; or for purposes of vetting for appointment to any public service position. The Minister may prescribe other instances.');
req('REQ-059-1', '59', 's.59', 'Preservation order',
  'The Commission may apply to a court for a preservation order for the expeditious preservation of any personal data including traffic personal data, where there is reasonable ground to believe that the personal data is vulnerable to loss or modification. The order shall specify a period not more than ninety days, extendable by the court.');
req('REQ-060-1', '60', 's.60(1)', 'Unlawful disclosure by a data controller',
  'A data controller who, without lawful excuse, discloses personal data in any manner that is incompatible with the purpose for which such personal data has been collected commits an offence.');
req('REQ-060-2', '60', 's.60(2)', 'Unlawful disclosure by a data processor',
  'A data processor who, without lawful excuse, discloses personal data processed by the data processor without the prior authority of the data controller commits an offence.');
req('REQ-060-3', '60', 's.60(3)', 'Unlawful obtaining or disclosure of personal data',
  'A person who obtains personal data, or obtains any information constituting personal data, without prior authority of the data controller or data processor by whom the personal data is kept, or discloses personal data to a third party, commits an offence.');
req('REQ-060-4', '60', 's.60(4)-(5)', 'Offering personal data for sale',
  'A person who offers for sale personal data of another person obtained in breach of subsection (1) commits an offence. An advertisement indicating that personal data is or may be for sale constitutes an offer for sale of the personal data.');
req('REQ-061-1', '61', 's.61', 'Unlawful destruction, deletion, concealment or alteration',
  'A person who unlawfully destroys, deletes, misleads, conceals or alters personal data commits an offence and shall, upon conviction, be liable to a fine of not less than one hundred thousand shillings but not exceeding ten million shillings or to imprisonment for a term not exceeding five years or both.');
req('REQ-062-1', '62', 's.62', 'Offences by a company or corporation',
  'Where an offence under this Act is committed by a company or corporation, the company or corporation and every officer of the company or corporation who knowingly and willfully authorises or permits the contravention shall be liable for the offence.');
req('REQ-064-1', '64', 's.64(1)-(2)', 'Regulations',
  'The Minister may make regulations for giving effect to the provisions of this Act, including regulations prescribing the matters listed in section 64(2)(a) to (l).');
req('REQ-065-1', '65', 's.65(1)', 'Code of ethics or policy for personal data protection',
  'Every data controller shall draw and put in place a code of ethics or policy for personal data protection which shall prescribe for ethics and conduct to be complied with during collection or processing of personal data.');
req('REQ-065-2', '65', 's.65(2)', 'Submission to the Commission',
  'Such codes or policies shall be submitted to the Commission for consideration and approval.');
req('REQ-065-3', '65', 's.65(3)', 'Commission consideration and amendment before approval',
  'In considering the codes of ethics or policies, the Commission shall ascertain among other things whether the drafts submitted to it have complied with the provisions of this Act and the relevant sector and where it considers necessary, seek the views of data subjects or their representatives and consult with the data controller concerned for the purposes of undertaking necessary amendments prior to the approval.');

c({
  control_id: 'PDPA-058-001',
  requirement_id: 'REQ-058-2',
  section_number: '58',
  subsection: '58(2)',
  paragraph: '(a)-(g)',
  legal_reference: 'Section 58(2)(a)-(g) and 58(3)',
  legal_requirement:
    'Processing may be exempted from the provisions of this Act where it is held by the data subject for his personal use; in accordance with any law or court order; for safeguarding national safety and security and public interest; to prevent or detect crimes; to detect or prevent tax evasion; for investigation of misappropriation of public funds; or for vetting for appointment to a public service position. The Minister may prescribe other instances.',
  control_title: 'Documented reliance on the section 58 exemptions',
  control_description:
    'Where the organisation treats processing as exempt, the specific section 58(2) limb is identified, justified and recorded, and the scope of the exemption is kept narrow.',
  plain_language_question:
    'Where you treat some processing as exempt from the Act, have you recorded exactly which exemption applies and why?',
  why_this_matters:
    'Exemptions attach to particular processing, not to whole organisations. Reading one broadly is a common and expensive mistake.',
  implementation_guidance:
    'Record the limb, the processing it covers, the justification and the reviewer. Keep the boundary of the exempt processing explicit so that adjacent processing is not swept in. Take legal advice for the national security and public interest limbs.',
  expected_state:
    'An exemption register recording the limb, scope, justification, reviewer and date for each exempt processing activity.',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you treat any of your processing as exempt from the Act?',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Exemption Register', 'Legal Assessment Note', 'External Counsel Advice', 'Court Order'],
  evidence_strength: 'STRONG',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. An over-broad exemption claim leaves substantial processing entirely uncontrolled, and the failure is systematic rather than incidental.',
  remediation_guidance:
    'Build the exemption register, define the precise boundary of each exempt activity, and obtain legal review.',
  suggested_task: 'Record and scope every reliance on a section 58 exemption',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'Section 58(3) allows the Minister to prescribe other exempt instances. OPEN_QUESTION: section 58(1) begins nothing under this section shall exempt, which sits awkwardly with section 58(2). The safer reading, reflected at PDPA-058-002, is that the principles and security duties continue to apply to exempt processing.',
});

c({
  control_id: 'PDPA-058-002',
  requirement_id: 'REQ-058-1',
  section_number: '58',
  subsection: '58(1)',
  legal_reference: 'Section 58(1)',
  legal_requirement:
    'Nothing under this section shall exempt the data controller or the data processor from the responsibility of complying with the principles of the law in collection and processing of personal data and taking necessary measures to ensure protection and security of the personal data.',
  control_title: 'Principles and security duties continue to apply to exempt processing',
  control_description:
    'Processing treated as exempt is still subject to the personal data protection principles and to security and protection measures.',
  plain_language_question:
    'Where processing is exempt, do you still apply the data protection principles and keep the data secure?',
  why_this_matters:
    'Section 58(1) preserves the principles and the security duties. An exemption reduces the procedural obligations, not the duty to protect the data.',
  implementation_guidance:
    'Apply the section 5 principles and the section 27 safeguards to exempt processing as well. Record that decision alongside the exemption entry so the two are never separated.',
  expected_state:
    'Exempt processing is included in the security programme and assessed against the section 5 principles.',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you treat any of your processing as exempt from the Act?',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Exemption Register', 'Security Policy', 'Risk Assessment', 'Data Protection Policy'],
  evidence_strength: 'MODERATE',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Exempt processing that falls outside the security programme is often the least protected data in the organisation.',
  remediation_guidance: 'Bring exempt processing into the scope of the security programme and the principles assessment.',
  suggested_task: 'Apply the principles and security measures to exempt processing',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-059-001',
  requirement_id: 'REQ-059-1',
  section_number: '59',
  legal_reference: 'Section 59',
  legal_requirement:
    'The Commission may apply to a court for a preservation order for the expeditious preservation of any personal data including traffic personal data where there is reasonable ground to believe that the personal data is vulnerable to loss or modification. The order shall specify a period which shall not be more than ninety days and may be extended by the court.',
  control_title: 'Compliance with a court preservation order',
  control_description:
    'The organisation can suspend deletion and modification of specified personal data on receipt of a preservation order and evidence that it has done so.',
  plain_language_question:
    'If a court ordered you to preserve specific personal data, could you stop it being deleted or changed - including by automated retention jobs?',
  why_this_matters:
    'Automated deletion routines will keep running unless someone stops them. A preservation order breached by a scheduled job is still a breached order.',
  implementation_guidance:
    'Define a legal hold capability that suspends automated deletion and restricts modification for identified records, including in backups. Record the hold, its scope and its release. Sequence it ahead of the section 28 disposal process.',
  expected_state:
    'A tested legal hold capability covering all systems, with a hold register recording scope and release.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Legal Hold Procedure', 'Legal Hold Register', 'System Capability Assessment', 'Court Order'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Breach of a court order is a serious matter, and loss through an automated job is a foreseeable and preventable failure.',
  remediation_guidance:
    'Build a legal hold capability that suspends automated deletion, and test it on a sample record set.',
  suggested_task: 'Implement a legal hold capability that suspends automated deletion',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'The preservation duty interacts with section 28 disposal and with section 29(2) preservation of pre-amendment records. Disposal processes must yield to a preservation order.',
});

c({
  control_id: 'PDPA-060-001',
  requirement_id: 'REQ-060-1',
  section_number: '60',
  subsection: '60(1)',
  legal_reference: 'Section 60(1)',
  legal_requirement:
    'A data controller who, without lawful excuse, discloses personal data in any manner that is incompatible with the purpose for which such personal data has been collected commits an offence.',
  control_title: 'Prevention of disclosure incompatible with the collection purpose',
  control_description:
    'Controls prevent disclosure of personal data in a manner incompatible with the purpose for which it was collected, and staff understand this is a criminal offence.',
  plain_language_question:
    'Do your controls and your staff training prevent personal data being shared in ways that clash with the purpose it was collected for?',
  why_this_matters:
    'This is a criminal offence, not just a regulatory contravention, and the penalties reach five billion shillings for a company or corporation.',
  implementation_guidance:
    'Combine the disclosure register from PDPA-026-001 with technical controls on data export and with staff training that names the criminal consequence. Review ad hoc disclosure requests against the recorded purpose.',
  expected_state:
    'Disclosure controls in place, a maintained disclosure register, and training records covering the offence.',
  response_type: 'YES_PARTIAL_NO',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Disclosure Register', 'Data Protection Policy', 'Training Records', 'Access Control Procedure'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'DISCLOSURE',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Section 60(1) is a criminal offence, and section 62 extends liability to officers who knowingly and willfully authorise or permit the contravention.',
  remediation_guidance:
    'Tighten export and sharing controls, complete the disclosure register, and run targeted training for staff who handle disclosure requests.',
  suggested_task: 'Implement controls and training against incompatible disclosure of personal data',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 60(6) penalties: individual - fine of not less than TZS 100,000 and not exceeding TZS 20,000,000, or imprisonment not exceeding ten years, or both; company or corporation - fine of not less than TZS 1,000,000 and not exceeding TZS 5,000,000,000.',
});

c({
  control_id: 'PDPA-060-002',
  requirement_id: 'REQ-060-2',
  section_number: '60',
  subsection: '60(2)',
  legal_reference: 'Section 60(2)',
  legal_requirement:
    'A data processor who, without lawful excuse, discloses personal data processed by the data processor without the prior authority of the data controller commits an offence.',
  control_title: 'Processor discloses only with prior controller authority',
  control_description:
    'Acting as a processor, the organisation discloses personal data only with the prior authority of the controller, and records that authority.',
  plain_language_question:
    'Where you process data for someone else, do you get their permission in advance before disclosing it to anyone, and do you keep a record?',
  why_this_matters:
    'This is a criminal offence specific to processors. It catches routine situations such as responding to a third party request without checking with the controller first.',
  implementation_guidance:
    'Define an authority check before any disclosure of controller data, including responses to law enforcement and other third party requests. Record the authority obtained. Route any legal compulsion through counsel.',
  expected_state:
    'A disclosure authority procedure with a log of controller authorities obtained.',
  response_type: 'YES_NO',
  answer_options: YN,
  applicability: 'ROLE_SPECIFIC',
  applicability_question: 'Do you process personal data on behalf of another organisation?',
  role_scope: 'PROCESSOR',
  evidence_examples: ['Disclosure Authority Log', 'Processor Agreement', 'Documented Processing Instructions', 'Training Records'],
  evidence_strength: 'STRONG',
  risk_category: 'DISCLOSURE',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Section 60(2) creates direct criminal liability for the processor and its officers under section 62.',
  remediation_guidance:
    'Implement a prior authority check for all disclosures of controller data and start the authority log.',
  suggested_task: 'Implement a prior controller authority check for processor disclosures',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-060-003',
  requirement_id: 'REQ-060-3',
  section_number: '60',
  subsection: '60(3)',
  paragraph: '(a)-(b)',
  legal_reference: 'Section 60(3)(a)-(b)',
  legal_requirement:
    'A person who obtains personal data, or obtains any information constituting personal data, without prior authority of the data controller or data processor by whom the personal data is kept, or discloses personal data to a third party, commits an offence.',
  control_title: 'No obtaining or onward disclosure of personal data without authority',
  control_description:
    'Staff and contractors do not obtain personal data from other organisations without authority, and do not disclose personal data to third parties without authority.',
  plain_language_question:
    'Are your people clear that taking personal data from another organisation without permission, or passing personal data to an outsider, is a criminal offence?',
  why_this_matters:
    'This limb catches individuals, not only organisations. It reaches situations like an employee bringing a customer list from a previous employer.',
  implementation_guidance:
    'Cover this expressly in the acceptable use policy, in employment terms and in induction training. Screen third party data sources for provenance, linking to PDPA-022-004.',
  expected_state:
    'Policy and training in place covering obtaining and disclosing personal data without authority, with acknowledgement records.',
  response_type: 'YES_PARTIAL_NO',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Acceptable Use Policy', 'Employment Terms', 'Training Records', 'Data Source Register'],
  evidence_strength: 'MODERATE',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'DISCLOSURE',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Individual criminal liability attaches, and the conduct is frequently committed without awareness that it is an offence.',
  remediation_guidance:
    'Add explicit wording to the acceptable use policy and induction training, and screen incoming data sources.',
  suggested_task: 'Add unauthorised obtaining and disclosure to policy and induction training',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-060-004',
  requirement_id: 'REQ-060-4',
  section_number: '60',
  subsection: '60(4)',
  legal_reference: 'Sections 60(4) and 60(5)',
  legal_requirement:
    'A person who offers for sale personal data of another person obtained in breach of subsection (1) commits an offence. An advertisement indicating that personal data is or may be for sale constitutes an offer for sale of the personal data.',
  control_title: 'No offering of unlawfully obtained personal data for sale',
  control_description:
    'The organisation does not sell, offer for sale or advertise the sale of personal data obtained in breach of section 60(1), and monitors any commercial data activity for this risk.',
  plain_language_question:
    'Do you have any commercial arrangement that involves selling or advertising the sale of personal data, and have you checked how that data was obtained?',
  why_this_matters:
    'Section 60(5) is broad: an advertisement indicating that data is or may be for sale is itself an offer for sale.',
  implementation_guidance:
    'Review any data monetisation, list rental or data brokerage activity. Confirm provenance and lawful basis before any such activity, and take legal advice.',
  expected_state:
    'Any data sale or monetisation activity is inventoried with provenance and lawful basis confirmed, or the organisation has confirmed it has none.',
  response_type: 'YES_NO',
  answer_options: YN,
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you sell, offer for sale, or advertise the sale of personal data in any form?',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Data Monetisation Register', 'Data Source Register', 'Legal Assessment Note', 'Data Protection Policy'],
  evidence_strength: 'STRONG',
  risk_category: 'DISCLOSURE',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. This is a criminal offence carrying the section 60(6) penalties, and section 60(5) extends it to advertising alone.',
  remediation_guidance:
    'Inventory any data sale activity, verify provenance, and obtain legal advice before continuing.',
  suggested_task: 'Review any sale or advertising of personal data for lawfulness',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'INTERPRETATION: section 60(4) refers to data obtained in breach of subsection (1), which addresses disclosure by a data controller. The precise scope of the cross-reference is not elaborated in the Act.',
});

c({
  control_id: 'PDPA-061-001',
  requirement_id: 'REQ-061-1',
  section_number: '61',
  legal_reference: 'Section 61',
  legal_requirement:
    'A person who unlawfully destroys, deletes, misleads, conceals or alters personal data commits an offence and shall, upon conviction, be liable to a fine of not less than one hundred thousand shillings but not exceeding ten million shillings or to imprisonment for a term not exceeding five years or both.',
  control_title: 'Prevention of unlawful destruction, deletion, concealment or alteration',
  control_description:
    'Technical and organisational controls prevent unlawful destruction, deletion, concealment or alteration of personal data, and such actions are detectable after the fact.',
  plain_language_question:
    'Are you able to prevent, and to detect afterwards, anyone unlawfully deleting, hiding or altering personal data?',
  why_this_matters:
    'This is a criminal offence in its own right. It also matters during an investigation, where deleting or altering records looks like concealment whatever the intention.',
  implementation_guidance:
    'Restrict destructive rights, keep tamper-evident audit logs, and monitor for bulk deletion or alteration. Reinforce during any investigation or legal hold. This builds on PDPA-027-003 and PDPA-027-004.',
  expected_state:
    'Destructive rights restricted, tamper-evident logging in place, and alerting on bulk deletion or alteration.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Access Control Procedure', 'Audit Log Configuration', 'Monitoring and Alerting Configuration', 'Training Records'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'DATA_INTEGRITY',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Section 61 creates a criminal offence with an express penalty, and undetected alteration also breaches sections 24 and 27(1).',
  remediation_guidance:
    'Restrict destructive permissions, enable tamper-evident logging, and alert on bulk changes.',
  suggested_task: 'Restrict destructive rights and enable tamper-evident logging over personal data',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 61 penalty: fine of not less than TZS 100,000 and not exceeding TZS 10,000,000, or imprisonment not exceeding five years, or both. This penalty is specific to section 61.',
});

c({
  control_id: 'PDPA-062-001',
  requirement_id: 'REQ-062-1',
  section_number: '62',
  legal_reference: 'Section 62',
  legal_requirement:
    'Where an offence under this Act is committed by a company or corporation, the company or corporation and every officer of the company or corporation who knowingly and willfully authorises or permits the contravention shall be liable for the offence.',
  control_title: 'Officer accountability and board oversight of data protection',
  control_description:
    'Officers are made aware of their personal exposure under section 62, and data protection is subject to documented board or senior management oversight.',
  plain_language_question:
    'Do your directors and senior officers know they can be personally liable, and does the board receive regular reporting on data protection?',
  why_this_matters:
    'Section 62 attaches personal liability to officers who knowingly and willfully authorise or permit a contravention. Documented oversight is how officers show they engaged with the issue.',
  implementation_guidance:
    'Brief the board and senior officers on section 62. Establish periodic data protection reporting to the board, minuted, drawing on the data protection officer reports under section 27(3).',
  expected_state:
    'Documented officer briefing and a recurring, minuted board or senior management reporting item on data protection.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Board Minutes', 'Officer Briefing Record', 'DPO Report', 'Governance Framework'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Personal officer liability is a distinct exposure, and the absence of oversight records makes the knowingly and willfully question harder to answer favourably.',
  remediation_guidance:
    'Brief the board on section 62 and establish a standing data protection reporting item.',
  suggested_task: 'Establish board-level data protection oversight and brief officers on section 62',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_DERIVED',
  notes:
    'ACT_DERIVED. Section 62 states the liability; it does not expressly require board reporting. The oversight arrangement is DataGuard implementation guidance responding to that liability.',
});

c({
  control_id: 'PDPA-064-001',
  requirement_id: 'REQ-064-1',
  section_number: '64',
  subsection: '64(2)',
  paragraph: '(a)-(l)',
  legal_reference: 'Section 64(1)-(2)',
  legal_requirement:
    'The Minister may make regulations for giving effect to the provisions of this Act, including regulations prescribing exempt instances, registration procedures, the functions of the data protection officer, the functions of the data controller representative, procedures for enforcing rights, procedures for submitting complaints, conditions for processing sensitive personal data, appropriate security standards, fees, procedures for retention and disposal, categories and cases in which transborder data flow may not be allowed, and anything necessary for the better carrying out of the Act.',
  control_title: 'Monitoring of regulations made under the Act',
  control_description:
    'The organisation monitors for regulations made under section 64 and assesses their effect on its controls, because many obligations under the Act are completed by regulations.',
  plain_language_question:
    'Do you have someone responsible for watching for new regulations under the Act and working out what they mean for you?',
  why_this_matters:
    'A large part of the operational detail in this Act - registration procedure, DPO functions, security standards, retention, transfer prohibitions - is left to regulations. Controls built without them will need revisiting.',
  implementation_guidance:
    'Assign an owner for regulatory monitoring, subscribe to Government Notice publications, and define how a new regulation triggers reassessment of the affected controls and of the control matrix version.',
  expected_state:
    'A named owner, a monitoring source, and a documented reassessment trigger for new regulations.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Regulatory Change Log', 'Compliance Calendar', 'Governance Framework'],
  evidence_strength: 'MODERATE',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. Missing a new regulation does not itself contravene the Act, but it leaves controls built on incomplete requirements.',
  remediation_guidance: 'Assign a regulatory monitoring owner and set a quarterly review.',
  suggested_task: 'Assign ownership for monitoring regulations made under the Act',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_DERIVED',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'ACT_DERIVED. Section 64 empowers the Minister; it imposes no monitoring duty on the organisation. Every control in this matrix marked REGULATORY_DETAIL_PENDING depends on regulations under this section.',
});

c({
  control_id: 'PDPA-065-001',
  requirement_id: 'REQ-065-1',
  section_number: '65',
  subsection: '65(1)',
  legal_reference: 'Section 65(1)',
  legal_requirement:
    'Every data controller shall draw and put in place a code of ethics or policy for personal data protection.',
  control_title: 'Code of ethics or personal data protection policy exists',
  control_description:
    'The data controller has drawn up and put in place a written code of ethics or personal data protection policy.',
  plain_language_question:
    'Have you written and put in place a code of ethics or a data protection policy for your organisation?',
  why_this_matters:
    'Section 65(1) applies to every data controller with no threshold. It is a document the Commission can ask for at any time, and section 46(2)(i) treats adherence to codes of ethics as relevant to any penalty.',
  implementation_guidance:
    'Produce a written code or policy, have it approved by the accountable body, and version it. Drawn and put in place implies both adoption and operation, so accompany it with communication and training.',
  expected_state:
    'An approved, dated and versioned code of ethics or data protection policy, communicated to staff.',
  response_type: 'DOCUMENT_REQUIRED',
  answer_options: [],
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Code of Ethics', 'Data Protection Policy', 'Approval Record', 'Training Records'],
  evidence_strength: 'STRONG',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. The duty applies to every data controller, it is binary, and its absence is immediately apparent to the Commission.',
  remediation_guidance:
    'Draft the code or policy, obtain formal approval, publish it internally, and prepare it for submission under section 65(2).',
  suggested_task: 'Draw up and adopt a code of ethics or personal data protection policy',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-065-002',
  requirement_id: 'REQ-065-1',
  section_number: '65',
  subsection: '65(1)',
  legal_reference: 'Section 65(1)',
  legal_requirement:
    'The code of ethics or policy shall prescribe for ethics and conduct to be complied with during collection or processing of personal data.',
  control_title: 'Scope of the code covers ethics and conduct in collection and processing',
  control_description:
    'The code or policy addresses the ethics and conduct expected during collection and processing of personal data, not merely high-level principles.',
  plain_language_question:
    'Does your code or policy actually say how people should behave when collecting and handling personal data?',
  why_this_matters:
    'The Act specifies the subject matter: ethics and conduct during collection or processing. A document of general statements does not meet that description.',
  implementation_guidance:
    'Cover conduct expectations at collection, use, disclosure, retention and disposal, together with roles, escalation and consequences of breach. Map the code sections against the Act so gaps are visible.',
  expected_state:
    'A code or policy with conduct provisions covering the full data lifecycle, mapped against the Act.',
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Code of Ethics', 'Data Protection Policy', 'Policy Coverage Mapping'],
  evidence_strength: 'STRONG',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Section 65(3) requires the Commission to ascertain whether the draft complies with the Act and the relevant sector, so a thin code will fail at approval.',
  remediation_guidance:
    'Expand the code to cover the full lifecycle and map its sections against the Act before submission.',
  suggested_task: 'Extend the code of ethics to cover conduct across the data lifecycle',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-065-003',
  requirement_id: 'REQ-065-1',
  section_number: '65',
  subsection: '65(1)',
  legal_reference: 'Section 65(1)',
  legal_requirement:
    'Every data controller shall draw and put in place a code of ethics or policy, which requires formal adoption by the data controller.',
  control_title: 'Approval and adoption of the code of ethics',
  control_description:
    'The code or policy has been formally approved and adopted by the accountable body within the organisation, with the approval recorded.',
  plain_language_question:
    'Has your code or policy been formally approved by your board or senior management, with the approval recorded?',
  why_this_matters:
    'A draft that has never been adopted has not been put in place. The approval record is also what connects the document to accountable officers for the purposes of section 62.',
  implementation_guidance:
    'Record the approving body, the date and the version. Re-approve on material change.',
  expected_state:
    'An approval record naming the approving body, the date and the version approved.',
  evidence_required: 'RECOMMENDED_BY_DATAGUARD',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Board Minutes', 'Approval Record', 'Code of Ethics', 'Version History'],
  evidence_strength: 'STRONG',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Without adoption the code is not in place, and the section 65(1) duty remains unmet however good the draft is.',
  remediation_guidance: 'Take the code to the board or senior management for formal approval and minute it.',
  suggested_task: 'Obtain and record formal approval of the code of ethics',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_DERIVED',
  notes:
    'ACT_DERIVED from the requirement to draw and put in place. The Act does not prescribe who must approve the code within the organisation.',
});

c({
  control_id: 'PDPA-065-004',
  requirement_id: 'REQ-065-2',
  section_number: '65',
  subsection: '65(2)',
  legal_reference: 'Section 65(2)',
  legal_requirement:
    'Such codes or policies shall be submitted to the Commission for consideration and approval.',
  control_title: 'Code of ethics submitted to the Commission for approval',
  control_description:
    'The code or policy has been submitted to the Commission for consideration and approval, and the submission and any response are retained.',
  plain_language_question:
    'Have you submitted your code of ethics or data protection policy to the Commission for approval, and do you have proof?',
  why_this_matters:
    'Adoption alone is not enough. Section 65(2) requires submission to the Commission for consideration and approval, and this step is frequently overlooked.',
  implementation_guidance:
    'Submit the approved code to the Commission, retain proof of submission, track the response, and act on any amendments the Commission requires under section 65(3).',
  expected_state:
    'Proof of submission on file, with the Commission response and approval status tracked.',
  response_type: 'DOCUMENT_REQUIRED',
  answer_options: [],
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Proof of Submission', 'Commission Correspondence', 'Commission Approval', 'Code of Ethics'],
  evidence_strength: 'STRONG',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Section 65(2) is expressed in mandatory terms, the step is binary, and an unsubmitted code leaves the section 65 duty only half discharged.',
  remediation_guidance:
    'Submit the approved code to the Commission and retain proof of submission and the response.',
  suggested_task: 'Submit the code of ethics to the Commission for consideration and approval',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'OPEN_QUESTION: the Act does not state a deadline for submission, the form of submission, or the consequence of the Commission not responding.',
});

c({
  control_id: 'PDPA-065-005',
  requirement_id: 'REQ-065-3',
  section_number: '65',
  subsection: '65(3)',
  legal_reference: 'Section 65(3)',
  legal_requirement:
    'In considering the codes of ethics or policies, the Commission shall ascertain whether the drafts have complied with the provisions of this Act and the relevant sector and where it considers necessary, seek the views of data subjects or their representatives and consult with the data controller for the purposes of undertaking necessary amendments prior to the approval.',
  control_title: 'Engagement with Commission consideration and required amendments',
  control_description:
    'The organisation engages with the Commission consultation on its code, implements required amendments, and maintains version control over the code.',
  plain_language_question:
    'If the Commission asked for changes to your code before approving it, could you respond, make the changes and track the versions?',
  why_this_matters:
    'Approval is a process, not a filing. The Commission may consult data subjects and require amendments before approving.',
  implementation_guidance:
    'Name an owner for the Commission dialogue, keep a version history of the code, and record which version was submitted, which amendments were required, and which version was approved.',
  expected_state:
    'A version-controlled code with a record of Commission correspondence, required amendments and the approved version.',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Version History', 'Commission Correspondence', 'Amendment Record', 'Code of Ethics'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The section directs the Commission, but failing to respond to a consultation stalls approval indefinitely.',
  remediation_guidance:
    'Establish version control over the code and name an owner for Commission correspondence.',
  suggested_task: 'Maintain version control and Commission correspondence records for the code of ethics',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 65(3) directs the Commission. The organisation obligation is derived: it must be able to respond and to amend. Periodic review of the code is IMPLEMENTATION_GUIDANCE; the Act imposes no review cycle.',
});
