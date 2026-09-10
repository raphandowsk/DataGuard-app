/* Part IV - Security of personal data. Section 27, decomposed. */
import { req, c, YN } from './registry.mjs';

req('REQ-027-1', '27', 's.27(1)', 'Reasonable security safeguards',
  'A data controller and his representatives shall ensure that personal data is protected, by such security safeguards that is reasonable in the circumstances necessary for the personal data protection against negligent loss or unauthorised destruction, alteration, access or processing of the personal data.');
req('REQ-027-2A', '27', 's.27(2)(a)', 'Technology and cost factors',
  'Security measures taken in accordance with subsection (1) shall ensure an appropriate level of security taking into account the state of technological advancement and the cost of implementing the measures.');
req('REQ-027-2B', '27', 's.27(2)(b)', 'Nature of data and risk to data subject',
  'Security measures taken in accordance with subsection (1) shall ensure an appropriate level of security taking into account the nature of the personal data to be protected and the potential risks to the data subject.');
req('REQ-027-3', '27', 's.27(3)', 'Appointment of a data protection officer',
  'The data controller and data processor, as the case may be, shall appoint a data protection officer who shall ensure that the control and security measures are in place to protect the personal data collected or being processed.');
req('REQ-027-4', '27', 's.27(4)', 'Contract governing the data processor',
  'Implementation of activities of the data processor shall be governed by a contract which associates the data processor to the data controller to the effect that the data processor acts under instructions of the data controller and that the data processor is additionally responsible for ensuring compliance of the security standards as provided by this Act.');
req('REQ-027-5', '27', 's.27(5)', 'Security breach notification to the Commission',
  'The data controller shall notify the Commission, without any undue delay, of any security breach affecting personal data being processed by or on behalf of the data controller.');

c({
  control_id: 'PDPA-027-001',
  requirement_id: 'REQ-027-1',
  section_number: '27',
  subsection: '27(1)',
  legal_reference: 'Section 27(1)',
  legal_requirement:
    'A data controller and his representatives shall ensure that personal data is protected by such security safeguards as are reasonable in the circumstances necessary for the protection of personal data.',
  control_title: 'Reasonable security safeguards programme',
  control_description:
    'A documented set of security safeguards protects personal data, and their reasonableness in the circumstances has been assessed and recorded.',
  plain_language_question:
    'Do you have reasonable safeguards in place that protect personal data, and have you written down why they are the right ones for your circumstances?',
  why_this_matters:
    'This is the umbrella security duty in the Act. The standard is what is reasonable in your circumstances, so the reasoning behind your choices matters as much as the controls themselves.',
  implementation_guidance:
    'Maintain an approved security policy and a register of implemented safeguards. Record the assessment of reasonableness against the four factors in section 27(2), which are assessed separately by controls PDPA-027-007 to PDPA-027-010.',
  expected_state:
    'An approved security policy, a safeguards register, and a documented reasonableness assessment reviewed at least annually.',
  evidence_required: 'REQUIRED_BY_ACT',
  evidence_examples: ['Security Policy', 'Safeguards Register', 'Risk Assessment', 'Audit Report'],
  evidence_strength: 'STRONG',
  risk_category: 'SECURITY',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Section 27(1) is the central security obligation of the Act and underpins the section 5(g) principle and the section 27(5) breach duty.',
  remediation_guidance:
    'Approve a security policy, inventory current safeguards, and document the reasonableness assessment against the section 27(2) factors.',
  suggested_task: 'Establish and document reasonable security safeguards for personal data',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 27(1) by its terms binds the data controller and his representatives. Section 5(g) applies the security principle to data processors as well, and section 27(4) makes the processor responsible for compliance with security standards.',
});

const HARMS = [
  {
    id: 'PDPA-027-002',
    harm: 'negligent loss',
    title: 'Protection against negligent loss',
    question:
      'Are you protected against personal data being lost through carelessness - for example lost laptops, lost files, or failed backups?',
    guidance:
      'Cover device encryption and asset tracking, backup and restore testing, physical file custody, and secure transfer of media. Test restores rather than assuming backups work.',
    evidence: ['Backup and Restore Test Records', 'Asset Register', 'Device Encryption Report', 'Security Policy'],
    risk: 'CRITICAL',
    rationale:
      'DataGuard default risk classification: Critical. Negligent loss is expressly named in section 27(1) and is the most frequent cause of reportable incidents.',
    task: 'Implement and evidence controls against negligent loss of personal data',
  },
  {
    id: 'PDPA-027-003',
    harm: 'unauthorised destruction',
    title: 'Protection against unauthorised destruction',
    question:
      'Are you protected against personal data being destroyed or deleted by someone who should not be doing that?',
    guidance:
      'Restrict delete and purge rights, log deletions, keep immutable or offline backup copies, and require dual authorisation for bulk deletion.',
    evidence: ['Access Control Procedure', 'Deletion Authorisation Records', 'Backup Policy', 'Audit Log Configuration'],
    risk: 'CRITICAL',
    rationale:
      'DataGuard default risk classification: Critical. Unauthorised destruction is expressly named in section 27(1) and is separately criminalised by section 61.',
    task: 'Restrict and log deletion rights over personal data',
  },
  {
    id: 'PDPA-027-004',
    harm: 'unauthorised alteration',
    title: 'Protection against unauthorised alteration',
    question:
      'Are you protected against personal data being changed by someone who is not authorised to change it?',
    guidance:
      'Enforce write permissions by role, keep tamper-evident change logs, and reconcile critical fields periodically. This control also supports the section 29(2) duty to preserve pre-amendment records.',
    evidence: ['Access Control Procedure', 'Change and Audit Logs', 'Segregation of Duties Matrix'],
    risk: 'HIGH',
    rationale:
      'DataGuard default risk classification: High. Unauthorised alteration is expressly named in section 27(1), is criminalised by section 61, and silently corrupts the accuracy duties in sections 5(d) and 24.',
    task: 'Enforce and log write access controls over personal data',
  },
  {
    id: 'PDPA-027-005',
    harm: 'unauthorised access',
    title: 'Protection against unauthorised access',
    question:
      'Are you protected against people seeing personal data when they have no business reason to see it?',
    guidance:
      'Apply least privilege, review access periodically, enforce strong authentication, and log and monitor access to sensitive records.',
    evidence: ['Access Control Procedure', 'Access Review Records', 'Authentication Policy', 'Access Logs'],
    risk: 'CRITICAL',
    rationale:
      'DataGuard default risk classification: Critical. Unauthorised access is expressly named in section 27(1) and is the precondition for most unlawful disclosure offences under section 60.',
    task: 'Implement least privilege and periodic access reviews for personal data',
  },
  {
    id: 'PDPA-027-006',
    harm: 'unauthorised processing',
    title: 'Protection against unauthorised processing',
    question:
      'Are you protected against personal data being used or analysed in ways nobody has authorised?',
    guidance:
      'Control which systems and jobs may read production personal data, restrict use of production data in test environments, and review analytics, extract and integration jobs against the recorded purposes.',
    evidence: ['Access Control Procedure', 'Data Flow Diagram', 'Test Data Management Policy', 'Integration Register'],
    risk: 'HIGH',
    rationale:
      'DataGuard default risk classification: High. Unauthorised processing is expressly named in section 27(1) and is where security failures and purpose limitation failures overlap.',
    task: 'Control and review automated processing and extracts of personal data',
  },
];

for (const h of HARMS) {
  c({
    control_id: h.id,
    requirement_id: 'REQ-027-1',
    section_number: '27',
    subsection: '27(1)',
    legal_reference: 'Section 27(1)',
    legal_requirement:
      `A data controller and his representatives shall ensure that personal data is protected by such security safeguards as are reasonable in the circumstances necessary for the protection of personal data against ${h.harm}.`,
    control_title: h.title,
    control_description:
      `Specific technical and organisational safeguards address the risk of ${h.harm} of personal data, and their operation is evidenced.`,
    plain_language_question: h.question,
    why_this_matters:
      `Section 27(1) names ${h.harm} as a distinct harm to protect against. Treating it separately makes it clear whether you actually have a control for it rather than a general assurance that security is handled.`,
    implementation_guidance: h.guidance,
    expected_state:
      `Named safeguards addressing ${h.harm} are implemented, owned, and evidenced by operating records rather than by policy text alone.`,
    evidence_examples: h.evidence,
    evidence_strength: 'STRONG',
    evidence_review_frequency: 'QUARTERLY',
    risk_category: 'SECURITY',
    default_risk_level: h.risk,
    risk_rationale: h.rationale,
    remediation_guidance:
      `Identify the systems holding personal data, select proportionate safeguards against ${h.harm}, assign an owner, and produce operating evidence.`,
    suggested_task: h.task,
    suggested_task_priority: h.risk === 'CRITICAL' ? 'CRITICAL' : 'HIGH',
    source_type: 'ACT_EXPLICIT',
    notes:
      'Section 27(1) lists negligent loss and unauthorised destruction, alteration, access and processing as separate harms. DataGuard maps each to its own control so that partial coverage is visible.',
  });
}

const FACTORS = [
  {
    id: 'PDPA-027-007',
    subsection: '27(2)',
    paragraph: '(a)',
    req: 'REQ-027-2A',
    title: 'State of technological advancement considered',
    requirement:
      'Security measures shall ensure an appropriate level of security taking into account the state of technological advancement.',
    question:
      'When you choose security measures, do you take account of what current technology makes possible - and revisit that as technology moves?',
    matters:
      'A measure that was appropriate five years ago may not be today. The Act builds this movement into the standard itself.',
    guidance:
      'Record the technology baseline assumed by your security design, and review it on a set cycle or when a material change occurs, such as a cryptographic algorithm being deprecated.',
    expected:
      'A documented technology review cycle for security measures, with the last review dated.',
    evidence: ['Security Architecture Review', 'Technology Refresh Plan', 'Risk Assessment'],
    risk: 'MEDIUM',
    rationale:
      'DataGuard default risk classification: Medium. This is a factor the Act requires you to weigh rather than a standalone safeguard, but neglecting it makes the whole programme drift out of date.',
    task: 'Establish a periodic technology review of security measures',
  },
  {
    id: 'PDPA-027-008',
    subsection: '27(2)',
    paragraph: '(a)',
    req: 'REQ-027-2A',
    title: 'Cost of implementation considered',
    requirement:
      'Security measures shall ensure an appropriate level of security taking into account the cost of implementing the measures.',
    question:
      'When you decide on security measures, do you record how you weighed their cost against the protection they give?',
    matters:
      'The Act expressly allows cost to be weighed. That works in your favour only if the reasoning is recorded at the time rather than argued after an incident.',
    guidance:
      'Where a measure is rejected or deferred on cost grounds, record the decision, the residual risk accepted, who accepted it, and when it will be revisited.',
    expected:
      'A risk acceptance record for each security measure deferred or rejected on cost grounds.',
    evidence: ['Risk Acceptance Record', 'Security Business Case', 'Risk Register'],
    risk: 'MEDIUM',
    rationale:
      'DataGuard default risk classification: Medium. Cost is an express statutory factor. Undocumented cost-based decisions are the ones that look like neglect after the event.',
    task: 'Document cost and residual risk decisions for security measures',
  },
  {
    id: 'PDPA-027-009',
    subsection: '27(2)',
    paragraph: '(b)',
    req: 'REQ-027-2B',
    title: 'Nature of the personal data considered',
    requirement:
      'Security measures shall ensure an appropriate level of security taking into account the nature of the personal data to be protected.',
    question:
      'Do you apply stronger protection to more sensitive categories of personal data than to routine data?',
    matters:
      'A single level of protection across everything either over-protects routine data or under-protects the data that would cause real harm if exposed.',
    guidance:
      'Classify personal data holdings, treating sensitive personal data as defined in section 3 as its own tier, and map the safeguards required at each tier.',
    expected:
      'A data classification scheme with safeguards mapped to each tier and applied in practice.',
    evidence: ['Data Classification Policy', 'Data Inventory with Classification', 'Security Policy'],
    risk: 'HIGH',
    rationale:
      'DataGuard default risk classification: High. Sensitive personal data attracts specific statutory treatment under section 30, and failing to distinguish it undermines both duties at once.',
    task: 'Classify personal data holdings and map safeguards to each classification tier',
  },
  {
    id: 'PDPA-027-010',
    subsection: '27(2)',
    paragraph: '(b)',
    req: 'REQ-027-2B',
    title: 'Potential risks to the data subject considered',
    requirement:
      'Security measures shall ensure an appropriate level of security taking into account the potential risks to the data subject.',
    question:
      'When you assess security risk, do you assess the harm to the individuals concerned, not just the harm to your organisation?',
    matters:
      'The Act asks about risk to the data subject. An incident that is minor for the business can be severe for the person whose data it is.',
    guidance:
      'Include a harm-to-individual dimension in the security risk assessment, covering identity theft, discrimination, physical safety and financial loss, and let it drive control selection.',
    expected:
      'Risk assessments record impact on data subjects as a distinct dimension from organisational impact.',
    evidence: ['Risk Assessment', 'Risk Assessment Methodology', 'Data Protection Impact Analysis'],
    risk: 'HIGH',
    rationale:
      'DataGuard default risk classification: High. Risk to the data subject is an express statutory factor, and it is the dimension organisations most often omit from a security risk register.',
    task: 'Add data subject harm as a distinct dimension of the security risk assessment',
  },
];

for (const f of FACTORS) {
  c({
    control_id: f.id,
    requirement_id: f.req,
    section_number: '27',
    subsection: f.subsection,
    paragraph: f.paragraph,
    legal_reference: `Section 27(2)${f.paragraph}`,
    legal_requirement: f.requirement,
    control_title: f.title,
    control_description: `The organisation demonstrably weighs this statutory factor when selecting and reviewing security measures.`,
    plain_language_question: f.question,
    why_this_matters: f.matters,
    implementation_guidance: f.guidance,
    expected_state: f.expected,
    evidence_examples: f.evidence,
    evidence_strength: 'MODERATE',
    risk_category: 'SECURITY',
    default_risk_level: f.risk,
    risk_rationale: f.rationale,
    remediation_guidance: `Incorporate this factor explicitly into the security risk assessment methodology and record the outcome.`,
    suggested_task: f.task,
    suggested_task_priority: f.risk,
    source_type: 'ACT_EXPLICIT',
    notes:
      'Section 27(2) requires that the appropriate level of security take these factors into account. DataGuard assesses each factor separately so that a gap in any one of them is visible.',
  });
}

c({
  control_id: 'PDPA-027-011',
  requirement_id: 'REQ-027-3',
  section_number: '27',
  subsection: '27(3)',
  legal_reference: 'Section 27(3)',
  legal_requirement:
    'The data controller and data processor, as the case may be, shall appoint a data protection officer.',
  control_title: 'Data protection officer appointed',
  control_description:
    'A named individual has been formally appointed as data protection officer for the organisation in its capacity as controller or processor.',
  plain_language_question:
    'Have you formally appointed someone as your data protection officer?',
  why_this_matters:
    'The Act requires an appointment. Naming a person informally is not the same thing, and the appointment is one of the first things a regulator will ask to see.',
  implementation_guidance:
    'Issue a signed appointment letter identifying the individual, the effective date, the reporting line and the authority granted. Record the contact details and keep them current.',
  expected_state:
    'A signed, dated appointment letter is on file for a currently serving data protection officer.',
  response_type: 'DOCUMENT_REQUIRED',
  answer_options: [],
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['DPO Appointment Letter', 'Board or Management Resolution', 'Organisation Chart'],
  evidence_strength: 'STRONG',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. The appointment is mandatory for both controllers and processors, it is binary and easily verified, and its absence is a visible failure that undermines every other control.',
  remediation_guidance:
    'Select a suitable individual, issue a signed appointment letter, and record the appointment in the compliance file.',
  suggested_task: 'Appoint a data protection officer and issue a signed appointment letter',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'Section 64(2)(c) allows regulations to prescribe the functions of the data protection officer. The Act itself does not set qualifications, independence requirements, or whether the role may be shared across a group. A statement such as we have a DPO with no appointment document is WEAK evidence.',
});

c({
  control_id: 'PDPA-027-012',
  requirement_id: 'REQ-027-3',
  section_number: '27',
  subsection: '27(3)',
  legal_reference: 'Section 27(3)',
  legal_requirement:
    'The data protection officer shall ensure that the control and security measures are in place to protect the personal data collected or being processed.',
  control_title: 'Data protection officer verifies control and security measures',
  control_description:
    'The data protection officer actively verifies that control and security measures are in place, and reports on that verification.',
  plain_language_question:
    'Does your data protection officer actually check that the controls and security measures are working, and report on what they find?',
  why_this_matters:
    'Section 27(3) gives the officer a substantive job, not a title. A DPO with no mandate, no access and no reporting line cannot discharge it.',
  implementation_guidance:
    'Define the officer verification programme - what is reviewed, how often, and to whom findings are reported. Retain the reports. Ensure the officer has access to systems and to senior management.',
  expected_state:
    'A documented DPO verification programme with dated reports to senior management.',
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['DPO Report', 'DPO Work Plan', 'Management Review Minutes', 'Audit Report'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. The statutory function is verification. An appointment without verification activity satisfies the form of section 27(3) but not its substance.',
  remediation_guidance:
    'Agree a DPO work plan with defined review cycles and a standing reporting slot at management level.',
  suggested_task: 'Establish a DPO verification and reporting programme',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-027-013',
  requirement_id: 'REQ-027-4',
  section_number: '27',
  subsection: '27(4)',
  legal_reference: 'Section 27(4)',
  legal_requirement:
    'Implementation of activities of the data processor shall be governed by a contract which associates the data processor to the data controller.',
  control_title: 'Written contract in place with every data processor',
  control_description:
    'Every processor that handles personal data on the organisation behalf is engaged under a contract governing the implementation of its activities.',
  plain_language_question:
    'Is there a signed contract in place with every supplier or partner that handles personal data on your behalf?',
  why_this_matters:
    'Section 27(4) requires the relationship to be governed by a contract. Suppliers engaged on a purchase order or a handshake leave the obligation unmet.',
  implementation_guidance:
    'Maintain a processor inventory. For each processor, confirm a signed contract exists and covers the section 27(4) elements assessed at PDPA-027-014 and PDPA-027-015.',
  expected_state:
    'A processor inventory in which every entry is linked to a signed, in-force contract.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question: 'Does any third party process personal data on your behalf?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Processor Agreement', 'Data Processing Agreement', 'Processor Inventory', 'Signed Contract'],
  evidence_strength: 'STRONG',
  risk_category: 'THIRD_PARTY',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. This is an express contractual requirement, it is binary, and an unpapered processor relationship is both a breach and an uncontrolled exposure.',
  remediation_guidance:
    'Build the processor inventory, identify unpapered relationships, and put compliant contracts in place, prioritising those handling sensitive personal data.',
  suggested_task: 'Put a compliant written contract in place with every data processor',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-027-014',
  requirement_id: 'REQ-027-4',
  section_number: '27',
  subsection: '27(4)',
  legal_reference: 'Section 27(4)',
  legal_requirement:
    'The contract shall be to the effect that the data processor acts under instructions of the data controller.',
  control_title: 'Contract requires the processor to act on controller instructions',
  control_description:
    'Each processor contract states that the processor acts under the instructions of the controller, and instructions are given and recorded in practice.',
  plain_language_question:
    'Does each processor contract say the processor must act on your instructions, and do you actually give and record those instructions?',
  why_this_matters:
    'This clause defines the boundary between processor and controller. Section 50(2)(b) makes a processor liable for damage where it acts contrary to the controller lawful instructions.',
  implementation_guidance:
    'Include an explicit instructions clause in every processor contract, and keep a record of documented instructions - the scope of processing, permitted sub-processing, and any change requests.',
  expected_state:
    'An instructions clause in every processor contract, supported by a record of documented instructions.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question: 'Does any third party process personal data on your behalf?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Processor Agreement', 'Documented Processing Instructions', 'Contract Clause Review'],
  evidence_strength: 'STRONG',
  risk_category: 'THIRD_PARTY',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Without a clear instructions boundary, responsibility for a processor failure is unclear, and section 50(2)(b) liability turns on exactly this point.',
  remediation_guidance: 'Add or strengthen the instructions clause at the next contract review, and start recording instructions.',
  suggested_task: 'Add a controller instructions clause to all processor contracts',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-027-015',
  requirement_id: 'REQ-027-4',
  section_number: '27',
  subsection: '27(4)',
  legal_reference: 'Section 27(4)',
  legal_requirement:
    'The contract shall provide that the data processor is additionally responsible for ensuring compliance of the security standards as provided by this Act.',
  control_title: 'Processor contractually responsible for security standards',
  control_description:
    'Each processor contract makes the processor responsible for compliance with the security standards required by the Act, and that responsibility is monitored.',
  plain_language_question:
    'Does each processor contract make the processor responsible for meeting the security standards the Act requires, and do you check that they do?',
  why_this_matters:
    'Section 27(4) places security responsibility on the processor in addition to the controller. Outsourcing the work does not outsource the exposure.',
  implementation_guidance:
    'Include a security standards clause and a right to obtain assurance - certification, audit report or questionnaire. Record the assurance obtained for each processor and refresh it periodically.',
  expected_state:
    'A security clause in every processor contract plus current assurance evidence per processor.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question: 'Does any third party process personal data on your behalf?',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Processor Agreement', 'Processor Security Assurance', 'Audit Report', 'Certification Evidence'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'THIRD_PARTY',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Processor security failures produce controller-level consequences, and section 27(5) requires the controller to notify breaches occurring on its behalf.',
  remediation_guidance:
    'Add the security standards clause, then collect assurance evidence starting with processors handling sensitive personal data.',
  suggested_task: 'Obtain security assurance evidence from every data processor',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'Section 64(2)(h) allows regulations to prescribe appropriate standards relating to security of information to be met by data controllers. Until those are made, the applicable standards are those derivable from sections 5(g) and 27.',
});

c({
  control_id: 'PDPA-027-016',
  requirement_id: 'REQ-027-5',
  section_number: '27',
  subsection: '27(5)',
  legal_reference: 'Section 27(5)',
  legal_requirement:
    'The data controller shall notify the Commission, without any undue delay, of any security breach affecting personal data being processed by or on behalf of the data controller.',
  control_title: 'Security breach notification to the Commission without undue delay',
  control_description:
    'A documented procedure ensures the Commission is notified without undue delay of any security breach affecting personal data processed by or on behalf of the organisation.',
  plain_language_question:
    'Do you have a procedure that notifies the Commission without undue delay whenever there is a security breach affecting personal data - including breaches at your suppliers?',
  why_this_matters:
    'The duty covers breaches at your processors as well as your own systems, and the clock is described as without undue delay. A procedure written after the breach is already too late.',
  implementation_guidance:
    'Document the notification procedure with named roles, a decision path, and contract terms obliging processors to alert you promptly. Rehearse it. The Act sets no fixed hour count, so any internal deadline you adopt is your own commitment.',
  expected_state:
    'An approved breach notification procedure, tested at least annually, with processor notification obligations in contracts.',
  evidence_required: 'REQUIRED_BY_ACT',
  evidence_examples: ['Incident Response Procedure', 'Breach Notification Log', 'Breach Response Test Record', 'Processor Agreement'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'BREACH_NOTIFICATION',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. This is an express, time-bound duty owed directly to the regulator, and section 46(2)(g) treats how a failure came to the attention of the Commission as a factor in setting any penalty.',
  remediation_guidance:
    'Write and approve the breach notification procedure, add processor alerting obligations to contracts, and run a tabletop exercise.',
  suggested_task: 'Implement and test a security breach notification procedure',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'OPEN_QUESTION: the Act does not define security breach, does not fix a period for without undue delay, does not prescribe the content or form of the notification, and does not require notification to affected data subjects. Do not import a 72-hour deadline or a data subject notification duty from another regime; neither appears in this Act.',
});

c({
  control_id: 'PDPA-027-017',
  requirement_id: 'REQ-027-5',
  section_number: '27',
  subsection: '27(5)',
  legal_reference: 'Section 27(5)',
  legal_requirement:
    'The controller must be able to identify security breaches affecting personal data processed by or on behalf of the controller in order to notify the Commission without undue delay.',
  control_title: 'Breach detection capability',
  control_description:
    'Monitoring, logging and reporting channels exist that would actually surface a security breach, including one occurring at a processor.',
  plain_language_question:
    'Would you find out if personal data were breached - in your own systems and at your suppliers?',
  why_this_matters:
    'You cannot notify a breach you never detect. The notification duty is only meaningful if something is watching.',
  implementation_guidance:
    'Ensure logging and alerting on systems holding personal data, provide a staff reporting channel, and require processors to notify you promptly. Review whether the coverage matches where the data actually is.',
  expected_state:
    'Monitoring and reporting channels cover all systems holding personal data, and processor notification duties are in contracts.',
  evidence_examples: ['Monitoring and Alerting Configuration', 'Incident Reporting Channel', 'Processor Agreement', 'Incident Log'],
  evidence_strength: 'MODERATE',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'BREACH_NOTIFICATION',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Detection is the precondition for the section 27(5) duty. Undetected breaches also mean the failure reaches the Commission from another source, which section 46(2)(g) treats as relevant to penalty.',
  remediation_guidance:
    'Map systems holding personal data against monitoring coverage and close the gaps, starting with the highest-sensitivity holdings.',
  suggested_task: 'Establish breach detection coverage across all systems holding personal data',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_DERIVED',
  notes:
    'ACT_DERIVED. The Act imposes no express detection duty. This control is derived from the notification duty in section 27(5) read with the safeguards duty in section 27(1), and adds no new legal obligation.',
});
