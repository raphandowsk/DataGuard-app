/* Part IV - Retention, correction and sensitive personal data. Sections 28-30. */
import { req, c, YN } from './registry.mjs';

req('REQ-028-1', '28', 's.28(1)', 'Retention for the period specified in law or regulations',
  'Where a data controller uses personal data for a specified purpose as specified under section 25, he shall retain that personal data for a period specified in the relevant laws or a period prescribed in the regulations in order to ensure that the data subject has a reasonable opportunity to access the personal data where need arises.');
req('REQ-028-2', '28', 's.28(2)', 'Ministerial regulations on retention and disposal',
  'Subject to subsection (1), the Minister may, by regulations, prescribe the retention and disposal of personal data held by a data controller in accordance with the purpose of retention.');
req('REQ-029-1', '29', 's.29(1)', 'Amendment of personal data on application',
  'Where a document or file to which access has been given under this Act contains personal data and that data subject claims that the personal data is incomplete, incorrect or misleading, or not relevant to the purpose for which the document is held, the data controller may, subject to procedures as may be prescribed in the regulations and upon receiving and being satisfied with the application of the data subject, amend the personal data.');
req('REQ-029-2', '29', 's.29(2)', 'Preservation of the pre-amendment record',
  'The data controller shall, when making an amendment to personal data in a document under this section, ensure that he does not permanently delete the record of the text of the document as it existed prior to the amendment.');
req('REQ-029-3', '29', 's.29(3)', 'Refusal with reasons',
  'Where a data controller is not satisfied with the reasons for an application under subsection (1), he may refuse to make any amendment to the personal data and inform the applicant of the reasons for refusal.');
req('REQ-030-1', '30', 's.30(1)', 'Prior written consent for sensitive personal data',
  'A person shall not process sensitive personal data without obtaining prior written consent of the data subject.');
req('REQ-030-2', '30', 's.30(2)', 'Withdrawal of consent',
  'The consent under subsection (1) may be withdrawn by the data subject at any time and without any explanation or charges.');
req('REQ-030-3', '30', 's.30(3)', 'Circumstances where the prohibition cannot be removed by consent',
  'The Minister may, by regulations, determine circumstances in which the prohibition to process the personal data referred to in this section cannot be removed even with the data subject consent.');
req('REQ-030-4', '30', 's.30(4)', 'Consent on behalf of persons unable to consent',
  'Where the data subject from whom consent is sought is a minor, a person of unsound mind or any other person unable to consent, such person consent shall be sought from his parents, guardian, heirs, attorneys or any other person recognised by law to be acting on behalf of the person whose consent is to be sought.');
req('REQ-030-5', '30', 's.30(5)', 'Exceptions to the consent requirement',
  'Subsection (1) shall not apply where the processing is necessary for compliance with other written laws; is necessary to protect the vital interests of the data subject or of another person where the data subject is incapable of giving consent or is not represented by a legal representative; is necessary for the institution, trial or defence of legal claims; relates to personal data apparently made public by the data subject; is necessary for the purposes of scientific research and the Commission has by special guidelines specified the circumstances; or is necessary for medical reasons in the interest of the data subject and is processed under the supervision of a health professional in accordance with the law governing such health care services.');

c({
  control_id: 'PDPA-028-001',
  requirement_id: 'REQ-028-1',
  section_number: '28',
  subsection: '28(1)',
  legal_reference: 'Section 28(1)',
  legal_requirement:
    'Personal data used for a specified purpose shall be retained for a period specified in the relevant laws or a period prescribed in the regulations.',
  control_title: 'Retention periods sourced from law or regulations',
  control_description:
    'For each category of personal data, the retention period is taken from the relevant written law or from regulations made under the Act, and the source is cited.',
  plain_language_question:
    'For each type of personal data you hold, have you identified the retention period set by the relevant law or regulations, and recorded where it comes from?',
  why_this_matters:
    'Section 28(1) points to periods fixed elsewhere in law rather than periods you choose. Citing the source is what makes the schedule defensible.',
  implementation_guidance:
    'Build the retention schedule with a citation column. Where no law or regulation fixes a period, record that fact explicitly rather than inventing a number, and justify the period against the purpose under section 5(e).',
  expected_state:
    'A retention schedule in which every record type has either a cited legal source or an explicit note that none was found, with a purpose-based justification.',
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Retention Schedule', 'Legal Retention Research Note', 'Data Processing Register'],
  evidence_strength: 'STRONG',
  risk_category: 'RETENTION',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Retention is expressly regulated by section 28 and is one of the few duties where the correct answer is fixed externally rather than chosen by the organisation.',
  remediation_guidance:
    'Research the sectoral laws applying to each record type, then complete the citation column of the retention schedule.',
  suggested_task: 'Identify and cite the legal retention period for each personal data record type',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'REGULATORY_DETAIL_PENDING. The Act itself prescribes no retention periods. Do not populate this control with invented periods. Where regulations under section 28(2) or 64(2)(j) are in force, they govern.',
});

c({
  control_id: 'PDPA-028-002',
  requirement_id: 'REQ-028-1',
  section_number: '28',
  subsection: '28(1)',
  legal_reference: 'Section 28(1)',
  legal_requirement:
    'Retention shall ensure that the data subject has a reasonable opportunity to access the personal data where need arises.',
  control_title: 'Retention supports the data subject opportunity to access',
  control_description:
    'Retention arrangements are set so that a data subject retains a reasonable opportunity to access their personal data while it is held.',
  plain_language_question:
    'While you hold personal data, can the person it is about still get access to it if they ask?',
  why_this_matters:
    'Section 28(1) ties the retention duty to access. Data held in a form nobody can retrieve - deep archive, unindexed backups - defeats the purpose the Act gives for keeping it.',
  implementation_guidance:
    'Confirm that data held under the retention schedule remains retrievable for a section 33 access request throughout the retention period, including archived and backup copies.',
  expected_state:
    'Retrievability confirmed for every record type in the retention schedule, including archives.',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Retention Schedule', 'Archive Retrieval Test Record', 'Data Subject Rights Procedure'],
  evidence_strength: 'MODERATE',
  risk_category: 'RETENTION',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. Unretrievable retained data frustrates section 33 access rights, though it is less directly harmful than over- or under-retention.',
  remediation_guidance:
    'Test retrieval from archive and backup for each retained record type and remediate where retrieval fails.',
  suggested_task: 'Test retrievability of archived personal data for access requests',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-028-003',
  requirement_id: 'REQ-028-1',
  section_number: '28',
  subsection: '28(1)',
  legal_reference: 'Section 28(1) read with section 5(e)',
  legal_requirement:
    'Retention is tied to the purpose for which the personal data is used under section 25, and section 5(e) requires storage in identifiable form for no longer than is necessary for that purpose.',
  control_title: 'Purpose-based retention decisions documented',
  control_description:
    'Each retention decision records the purpose it serves and the reasoning behind the period chosen.',
  plain_language_question:
    'For each type of personal data, have you written down why you keep it for as long as you do?',
  why_this_matters:
    'Where no law fixes a period, the purpose is what justifies the period. Recording the reasoning is the only way to show the decision was made rather than defaulted into.',
  implementation_guidance:
    'Add purpose and rationale columns to the retention schedule. Have the data protection officer review and date the decisions.',
  expected_state:
    'A retention schedule with a recorded purpose, rationale, decision owner and decision date per record type.',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Retention Schedule', 'Retention Decision Record', 'DPO Approval Record'],
  evidence_strength: 'MODERATE',
  risk_category: 'RETENTION',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. Undocumented retention decisions are difficult to defend and tend to drift towards keeping everything forever.',
  remediation_guidance: 'Complete purpose and rationale columns for the retention schedule and have them approved.',
  suggested_task: 'Document the purpose and rationale behind each retention period',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_DERIVED',
  notes:
    'ACT_DERIVED from sections 28(1), 25 and 5(e) read together. The requirement to document the reasoning is IMPLEMENTATION_GUIDANCE, not a statutory duty in its own terms.',
});

c({
  control_id: 'PDPA-028-004',
  requirement_id: 'REQ-028-2',
  section_number: '28',
  subsection: '28(2)',
  legal_reference: 'Section 28(2) read with section 64(2)(j)',
  legal_requirement:
    'The Minister may by regulations prescribe the retention and disposal of personal data held by a data controller in accordance with the purpose of retention. Section 64(2)(j) allows regulations prescribing procedures for retention and disposal of personal data held by data controllers.',
  control_title: 'Secure disposal at the end of the retention period',
  control_description:
    'Personal data is securely disposed of at the end of its retention period, following any procedure prescribed by regulations, and disposal is recorded.',
  plain_language_question:
    'When personal data reaches the end of its retention period, is it securely disposed of, and do you keep a record that this happened?',
  why_this_matters:
    'Disposal is the step that actually reduces risk. Without a record, you cannot show it happened, and data assumed deleted has a habit of resurfacing in backups.',
  implementation_guidance:
    'Define disposal methods per medium - electronic, paper, portable media - and record each disposal event. Cover archives and backup copies. Check the current regulations for any prescribed procedure before finalising the method.',
  expected_state:
    'A documented disposal procedure covering all media, with a disposal log evidencing execution.',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Disposal Procedure', 'Disposal Log', 'Certificate of Destruction', 'Retention Schedule'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'RETENTION',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Data retained past its period is exposed for no lawful reason, and the absence of a disposal record makes over-retention indistinguishable from deliberate hoarding.',
  remediation_guidance:
    'Write a disposal procedure covering every medium including backups, then start a disposal log.',
  suggested_task: 'Implement a secure disposal procedure and disposal log',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'REGULATORY_DETAIL_PENDING. The disposal procedure is to be prescribed by regulations. Note the tension with section 29(2), which forbids permanent deletion of the pre-amendment record, and with section 59 preservation orders. Disposal must be sequenced around both.',
});

c({
  control_id: 'PDPA-028-005',
  requirement_id: 'REQ-028-2',
  section_number: '28',
  subsection: '28(2)',
  legal_reference: 'Section 28 read with section 64(2)(j)',
  legal_requirement:
    'The retention and disposal of personal data is to be carried out in accordance with the purpose of retention, as may be prescribed by regulations.',
  control_title: 'Periodic review of the retention schedule',
  control_description:
    'The retention schedule is reviewed on a defined cycle and whenever a relevant law or regulation changes.',
  plain_language_question:
    'Do you review your retention schedule regularly and update it when the law changes?',
  why_this_matters:
    'Retention periods are set outside the Act, in sectoral laws and in regulations still to be made. A schedule that is never revisited goes stale without anyone noticing.',
  implementation_guidance:
    'Set an annual review with a named owner, and add a trigger for reviewing when regulations under section 28(2) or 64(2)(j) are made or amended.',
  expected_state:
    'A dated review record for the retention schedule with a named owner and a next-review date.',
  required: false,
  role_scope: 'CONTROLLER',
  evidence_examples: ['Retention Schedule Review Record', 'Compliance Calendar', 'Regulatory Change Log'],
  evidence_strength: 'MODERATE',
  risk_category: 'RETENTION',
  default_risk_level: 'LOW',
  risk_rationale:
    'DataGuard default risk classification: Low. Review cadence is good practice that keeps the schedule current; the Act does not impose a review cycle.',
  remediation_guidance: 'Add the retention schedule review to the annual compliance calendar.',
  suggested_task: 'Schedule an annual review of the retention schedule',
  suggested_task_priority: 'LOW',
  source_type: 'IMPLEMENTATION_GUIDANCE',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'IMPLEMENTATION_GUIDANCE. The Act imposes no periodic review duty for retention schedules. This control exists so that the organisation notices when regulations are made.',
});

c({
  control_id: 'PDPA-028-006',
  requirement_id: 'REQ-028-1',
  section_number: '28',
  subsection: '28(1)',
  legal_reference: 'Section 28(1)',
  legal_requirement:
    'Retention shall be for a period specified in the relevant laws, which requires identification of the laws relevant to the data controller records.',
  control_title: 'Identification of applicable sectoral retention laws',
  control_description:
    'The organisation has identified the written laws that fix retention periods for its records, such as tax, company, employment, health or financial services legislation.',
  plain_language_question:
    'Have you identified the other laws that tell you how long to keep your records - tax, employment, company or sector rules?',
  why_this_matters:
    'Section 28(1) sends you to the relevant laws. If you have not found them, you cannot know whether your retention periods are right.',
  implementation_guidance:
    'Ask counsel or the compliance function to produce a list of retention-relevant statutes for your sector, and map each to the record types affected.',
  expected_state:
    'A dated legal research note listing applicable retention statutes mapped to record types.',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Legal Retention Research Note', 'Retention Schedule', 'External Counsel Advice'],
  evidence_strength: 'MODERATE',
  risk_category: 'RETENTION',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. Without this research the retention schedule rests on assumption, though the underlying failure surfaces through PDPA-028-001.',
  remediation_guidance: 'Commission a legal review of sectoral retention obligations and map the results.',
  suggested_task: 'Identify the sectoral laws that fix retention periods for your records',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_DERIVED',
  notes:
    'ACT_DERIVED from section 28(1). DataGuard must not pre-populate Tanzanian sectoral retention periods; they lie outside this Act.',
});

c({
  control_id: 'PDPA-029-001',
  requirement_id: 'REQ-029-1',
  section_number: '29',
  subsection: '29(1)',
  legal_reference: 'Section 29(1)',
  legal_requirement:
    'Where a data subject claims that personal data in a document to which access has been given is incomplete, incorrect or misleading, or not relevant to the purpose for which the document is held, the data controller may, subject to prescribed procedures and upon being satisfied with the application, amend the personal data.',
  control_title: 'Correction request procedure',
  control_description:
    'A documented procedure receives, assesses and decides applications from data subjects to amend personal data, and records the outcome.',
  plain_language_question:
    'Do you have a procedure for handling requests from people to correct their personal data, and do you record what you decided?',
  why_this_matters:
    'Correction requests arrive by whatever channel the person happens to use. Without a procedure they get lost, and a lost request tends to become a complaint to the Commission.',
  implementation_guidance:
    'Define intake channels, the assessment step, the decision maker and the record kept. The Act frames amendment as something the controller may do once satisfied, so the assessment reasoning matters and should be recorded.',
  expected_state:
    'An approved correction procedure with a request log recording each request, decision and reasoning.',
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Data Subject Rights Procedure', 'Correction Request Log', 'Rectification Log'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'DATA_SUBJECT_RIGHTS',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Correction requests are a common trigger for section 39 complaints and for Commission orders under section 38.',
  remediation_guidance:
    'Write and approve the correction procedure, publish the intake channel, and start the request log.',
  suggested_task: 'Implement a personal data correction request procedure',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'The procedure for applications is to be prescribed by regulations. OPEN_QUESTION: the Act sets no time limit for deciding a correction application, and section 29(1) is framed as a discretion (may amend) exercisable once the controller is satisfied.',
});

c({
  control_id: 'PDPA-029-002',
  requirement_id: 'REQ-029-2',
  section_number: '29',
  subsection: '29(2)',
  legal_reference: 'Section 29(2)',
  legal_requirement:
    'The data controller shall, when making an amendment to personal data in a document under this section, ensure that he does not permanently delete the record of the text of the document as it existed prior to the amendment.',
  control_title: 'Pre-amendment record preserved on correction',
  control_description:
    'When personal data is amended, the text of the document as it existed before the amendment is preserved and is not permanently deleted.',
  plain_language_question:
    'When you correct someone personal data, do you keep a copy of what the record said before you changed it?',
  why_this_matters:
    'This is one of the few places where the Act dictates system behaviour directly. Overwriting a record in place, with no prior version retained, breaches section 29(2) even where the correction itself was right.',
  implementation_guidance:
    'IMPLEMENTATION_GUIDANCE: maintain an auditable history or version of corrected information rather than permanently overwriting the previous record. In practice this means append-only history tables, versioned documents, or an equivalent immutable audit trail on any system holding personal data that can be amended. Retention and access rules for the preserved prior version should be defined, since it remains personal data.',
  expected_state:
    'Every system that can amend personal data retains the prior version in a retrievable, tamper-evident form.',
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER',
  evidence_examples: ['System Version History Configuration', 'Audit Log Sample', 'Correction Request Log', 'Technical Design Document'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'DATA_INTEGRITY',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. The duty is express and absolute in its terms, and a system that overwrites in place breaches it on every correction without anyone noticing.',
  remediation_guidance:
    'Audit systems for in-place overwrite behaviour on personal data fields and introduce version history where it is missing.',
  suggested_task: 'Ensure all systems preserve the pre-amendment record when personal data is corrected',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'This provision has direct architectural consequences for DataGuard itself: compliance records that are corrected must retain an auditable history rather than being overwritten. The statutory requirement is the non-deletion of the prior text; the versioning and audit-trail design described above is DataGuard implementation guidance, not a statutory prescription. OPEN_QUESTION: the Act does not say for how long the prior version must be preserved, nor how it interacts with the disposal duty under section 28.',
});

c({
  control_id: 'PDPA-029-003',
  requirement_id: 'REQ-029-3',
  section_number: '29',
  subsection: '29(3)',
  legal_reference: 'Section 29(3)',
  legal_requirement:
    'Where a data controller is not satisfied with the reasons for an application under subsection (1), he may refuse to make any amendment to the personal data and inform the applicant of the reasons for refusal.',
  control_title: 'Refusal of a correction request with reasons given',
  control_description:
    'Where a correction request is refused, the applicant is informed of the reasons and the reasoning is recorded.',
  plain_language_question:
    'If you refuse to correct someone data, do you tell them why, and do you keep a record of your reasons?',
  why_this_matters:
    'Refusing without reasons turns a defensible decision into an apparent brush-off, and it is what usually pushes the person to complain to the Commission instead.',
  implementation_guidance:
    'Use a standard refusal notice template capturing the reasons and the date sent, and retain it with the request record. Mention the availability of a complaint to the Commission under section 39.',
  expected_state:
    'A refusal notice template in use, with issued notices retained against the request log.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question: 'Have you ever refused, or might you refuse, a request to correct personal data?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Refusal Notice Template', 'Correction Request Log', 'Issued Refusal Notices'],
  evidence_strength: 'STRONG',
  risk_category: 'DATA_SUBJECT_RIGHTS',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. Refusal is expressly permitted by the Act; the failure mode is refusing without communicating reasons.',
  remediation_guidance: 'Create a refusal notice template and require its use for every refusal.',
  suggested_task: 'Create a correction refusal notice template that states reasons',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-030-001',
  requirement_id: 'REQ-030-1',
  section_number: '30',
  subsection: '30(1)',
  legal_reference: 'Section 30(1) read with the definition of sensitive personal data in section 3',
  legal_requirement:
    'A person shall not process sensitive personal data without obtaining prior written consent of the data subject. Sensitive personal data includes genetic data, data related to children, data related to offences, financial transactions of the individual, security measure or biometric data; data processed for what they reveal about racial or ethnic origin, political opinions, religious or philosophical beliefs, affiliation, trade-union membership, gender and data concerning health or sex life; and any personal data otherwise considered under the laws of the country as presenting a major risk to the rights and interests of the data subject.',
  control_title: 'Identification of sensitive personal data holdings',
  control_description:
    'The organisation has identified where it holds sensitive personal data as defined in section 3, and has flagged those holdings in its inventory.',
  plain_language_question:
    'Have you identified everywhere you hold sensitive personal data - such as health, biometric, genetic, financial transaction, children data, criminal offence data, or data revealing race, religion, political opinion, trade union membership, gender or sex life?',
  why_this_matters:
    'The definition in this Act is broader than many people expect - it includes financial transactions, data about children and security measures. Everything else in section 30 depends on knowing where this data is.',
  implementation_guidance:
    'Flag sensitive holdings in the processing register against each limb of the section 3 definition. Note that data related to children is sensitive in its own right, and that data becomes sensitive where it is processed for what it reveals.',
  expected_state:
    'The processing register flags every sensitive personal data holding against the specific limb of the definition it falls under.',
  evidence_examples: ['Data Processing Register', 'Data Classification Policy', 'Sensitive Data Inventory'],
  evidence_strength: 'MODERATE',
  risk_category: 'SENSITIVE_DATA',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Section 30(1) prohibits processing sensitive personal data without prior written consent unless an exception applies. An organisation that has not identified its sensitive holdings cannot know whether it is inside that prohibition.',
  remediation_guidance:
    'Run a data discovery exercise against each limb of the section 3 definition and flag the results in the register.',
  suggested_task: 'Identify and flag all sensitive personal data holdings',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'The section 3 definition uses includes, so the list is not exhaustive. Limb (c) extends to personal data otherwise considered under the laws of the country as presenting a major risk to the rights and interests of the data subject.',
});

c({
  control_id: 'PDPA-030-002',
  requirement_id: 'REQ-030-1',
  section_number: '30',
  subsection: '30(1)',
  legal_reference: 'Section 30(1)',
  legal_requirement:
    'A person shall not process sensitive personal data without obtaining prior written consent of the data subject.',
  control_title: 'Prior written consent obtained for sensitive personal data',
  control_description:
    'Where sensitive personal data is processed on the basis of consent, that consent is written, obtained before processing begins, and retained as a record.',
  plain_language_question:
    'Where you process sensitive personal data on the basis of consent, did you get that consent in writing before you started, and can you produce it?',
  why_this_matters:
    'The Act requires the consent to be written and prior. Consent gathered afterwards, or given verbally, does not meet the section as drafted.',
  implementation_guidance:
    'Capture consent in a retained written form linked to the individual record, with the date and the specific processing consented to. Where consent is not the basis, record the section 30(5) exception instead - see PDPA-030-005.',
  expected_state:
    'A retrievable written consent record per data subject for each consent-based sensitive processing activity.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you process any sensitive personal data on the basis of consent?',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Consent Record', 'Consent Form Template', 'Consent Management System Export'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'SENSITIVE_DATA',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Section 30(1) is a prohibition. Processing sensitive personal data without written prior consent and without an applicable exception is unlawful from the first record.',
  remediation_guidance:
    'Identify consent-based sensitive processing, put written consent capture in place, and either re-obtain consent or move to a documented section 30(5) exception.',
  suggested_task: 'Implement written prior consent capture for sensitive personal data',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 30(1) is subject to the exceptions in section 30(5). Do not assume all sensitive data processing requires consent - see PDPA-030-005. OPEN_QUESTION: the Act does not define the form or content requirements for written consent.',
});

c({
  control_id: 'PDPA-030-003',
  requirement_id: 'REQ-030-2',
  section_number: '30',
  subsection: '30(2)',
  legal_reference: 'Section 30(2)',
  legal_requirement:
    'The consent under subsection (1) may be withdrawn by the data subject at any time and without any explanation or charges.',
  control_title: 'Consent withdrawal at any time, free of charge and without explanation',
  control_description:
    'Data subjects can withdraw consent to sensitive data processing at any time, without giving a reason and without any charge, and withdrawal takes effect in the systems.',
  plain_language_question:
    'Can people withdraw their consent at any time, without giving a reason and without paying anything - and does that actually stop the processing?',
  why_this_matters:
    'The Act is explicit that withdrawal is free and needs no explanation. A withdrawal route that is hard to find, or that logs the request but does not stop the processing, does not satisfy it.',
  implementation_guidance:
    'Provide a withdrawal channel at least as easy as the channel used to give consent. Ensure withdrawal propagates to downstream systems and to processors. Never require a reason and never charge a fee.',
  expected_state:
    'A working, free withdrawal channel with evidence that withdrawal stops the processing in all systems.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you process any sensitive personal data on the basis of consent?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Consent Withdrawal Procedure', 'Withdrawal Log', 'System Configuration Evidence', 'Consent Record'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'SENSITIVE_DATA',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Continuing to process after withdrawal removes the lawful basis and returns the processing to the section 30(1) prohibition.',
  remediation_guidance:
    'Build the withdrawal channel, test that withdrawal propagates downstream, and remove any fee or explanation requirement.',
  suggested_task: 'Implement a free, no-explanation consent withdrawal channel',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-030-004',
  requirement_id: 'REQ-030-4',
  section_number: '30',
  subsection: '30(4)',
  legal_reference: 'Section 30(4)',
  legal_requirement:
    'Where the data subject from whom consent is sought is a minor, a person of unsound mind or any other person unable to consent, such consent shall be sought from his parents, guardian, heirs, attorneys or any other person recognised by law to be acting on behalf of that person.',
  control_title: 'Consent obtained from the authorised representative where the data subject cannot consent',
  control_description:
    'Where the data subject is a minor, of unsound mind, or otherwise unable to consent, consent is sought from the parent, guardian, heir, attorney or other legally recognised representative, and the authority is verified.',
  plain_language_question:
    'Where the person cannot give consent themselves - for example a child - do you obtain consent from their parent, guardian or other authorised representative, and do you check that authority?',
  why_this_matters:
    'Data related to children is sensitive personal data under this Act in its own right, so any service that touches children data engages both section 30(1) and section 30(4).',
  implementation_guidance:
    'Identify processing involving minors or persons unable to consent. Define how representative authority is verified and recorded. Note that child takes its meaning from the Child Act.',
  expected_state:
    'Representative consent records held, with the basis of authority verified and recorded.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you process personal data of children, or of anyone who may be unable to give their own consent?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Consent Record', 'Guardian Authority Verification Record', 'Age Verification Procedure'],
  evidence_strength: 'STRONG',
  risk_category: 'SENSITIVE_DATA',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Data related to children is expressly sensitive personal data under section 3, so a defective consent chain here breaches the section 30(1) prohibition directly.',
  remediation_guidance:
    'Identify processing involving minors, implement representative consent capture, and verify authority before processing.',
  suggested_task: 'Implement representative consent capture for minors and persons unable to consent',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Child has the meaning ascribed to it under the Child Act (section 3). OPEN_QUESTION: the Act does not prescribe how age or capacity is to be verified.',
});

c({
  control_id: 'PDPA-030-005',
  requirement_id: 'REQ-030-5',
  section_number: '30',
  subsection: '30(5)',
  paragraph: '(a)-(f)',
  legal_reference: 'Section 30(5)(a)-(f)',
  legal_requirement:
    'The consent requirement in subsection (1) does not apply where the processing is necessary for compliance with other written laws; is necessary to protect the vital interests of the data subject or another person where the data subject is incapable of consenting or is not represented; is necessary for the institution, trial or defence of legal claims; relates to personal data apparently made public by the data subject; is necessary for scientific research where the Commission has by special guidelines specified the circumstances; or is necessary for medical reasons in the interest of the data subject under the supervision of a health professional.',
  control_title: 'Documented reliance on the sensitive data consent exceptions',
  control_description:
    'Where sensitive personal data is processed without consent, the specific section 30(5) exception relied on is identified, justified and recorded.',
  plain_language_question:
    'Where you process sensitive personal data without consent, have you recorded which legal exception allows it?',
  why_this_matters:
    'The Act does provide exceptions, so not all sensitive processing needs consent. But the exception has to be identified and justified, not assumed.',
  implementation_guidance:
    'For each sensitive processing activity without consent, record the exception limb, the justification and the assessment date. Have the data protection officer review. Note that reliance on the research exception depends on Commission guidelines existing - see PDPA-030-006.',
  expected_state:
    'A sensitive data exception register with a limb, justification, reviewer and date for each entry.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you process any sensitive personal data without the consent of the data subject?',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Sensitive Data Exception Register', 'Legal Assessment Note', 'DPO Approval Record'],
  evidence_strength: 'STRONG',
  risk_category: 'SENSITIVE_DATA',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. The exceptions are lawful routes, so the risk is relying on one without analysis. An unrecorded exception is indistinguishable from no exception during an investigation.',
  remediation_guidance:
    'Create the exception register, complete it for existing non-consent sensitive processing, and take advice on marginal cases.',
  suggested_task: 'Record the section 30(5) exception relied on for each non-consent sensitive processing activity',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Do not treat all sensitive personal data processing as unlawful without consent. Section 30(5) provides six express exceptions.',
});

c({
  control_id: 'PDPA-030-006',
  requirement_id: 'REQ-030-5',
  section_number: '30',
  subsection: '30(5)',
  paragraph: '(e)',
  legal_reference: 'Section 30(5)(e)',
  legal_requirement:
    'Subsection (1) shall not apply where the processing is necessary for the purposes of scientific research and the Commission has, by special guidelines, specified the circumstances under which such processing may be carried out.',
  control_title: 'Scientific research exception conditional on Commission guidelines',
  control_description:
    'Reliance on the scientific research exception is conditional on the Commission having issued special guidelines specifying the circumstances, and on the processing falling within them.',
  plain_language_question:
    'If you process sensitive personal data for scientific research without consent, have you confirmed that the Commission has issued guidelines covering it and that you fall within them?',
  why_this_matters:
    'This exception is not self-executing. On the wording of the Act it depends on the Commission having issued special guidelines, so the exception cannot be assumed to be available.',
  implementation_guidance:
    'Confirm the existence and terms of any Commission special guidelines before relying on this limb. If none exist, do not rely on it - seek consent or another exception, or take legal advice.',
  expected_state:
    'A documented confirmation of the applicable Commission guidelines, or a decision not to rely on this exception.',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you process sensitive personal data for scientific research purposes without consent?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Commission Guidelines Reference', 'Research Ethics Approval', 'Legal Assessment Note'],
  evidence_strength: 'STRONG',
  risk_category: 'SENSITIVE_DATA',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. If no guidelines exist, reliance on this limb leaves the processing inside the section 30(1) prohibition.',
  remediation_guidance:
    'Confirm the position with the Commission or with counsel before relying on the research exception.',
  suggested_task: 'Confirm the availability of the section 30(5)(e) scientific research exception',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'REGULATORY_DETAIL_PENDING. OPEN_QUESTION: whether the Commission has issued the special guidelines referred to in section 30(5)(e) is outside the Act and must be verified. DataGuard must not presume they exist.',
});

c({
  control_id: 'PDPA-030-007',
  requirement_id: 'REQ-030-5',
  section_number: '30',
  subsection: '30(5)',
  paragraph: '(f)',
  legal_reference: 'Section 30(5)(f)',
  legal_requirement:
    'Subsection (1) shall not apply where the processing is necessary for the purposes of medical reasons in the interest of the data subject, and the sensitive personal data concerned is processed under the supervision of a health professional in accordance with the law governing such health care services.',
  control_title: 'Medical processing supervised by a health professional',
  control_description:
    'Sensitive personal data processed for medical reasons without consent is processed under the supervision of a health professional in accordance with the law governing health care services.',
  plain_language_question:
    'Where you process health-related sensitive data for medical reasons without consent, is that processing supervised by a recognised health professional?',
  why_this_matters:
    'The exception has two limbs: the medical purpose in the interest of the data subject, and supervision by a health professional. Both must hold.',
  implementation_guidance:
    'Record the supervising health professional and the basis of their recognition under the relevant law. Health professional is defined in section 3 as a person providing health care services and recognised as such by the relevant law.',
  expected_state:
    'A record of the supervising health professional for each medical processing activity relying on this exception.',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you process sensitive personal data for medical reasons without the consent of the data subject?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Health Professional Supervision Record', 'Professional Registration Evidence', 'Clinical Governance Policy'],
  evidence_strength: 'STRONG',
  risk_category: 'SENSITIVE_DATA',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Without the supervision limb the exception fails and the processing falls back inside the section 30(1) prohibition.',
  remediation_guidance:
    'Identify the supervising health professional for each activity and record the basis of their recognition.',
  suggested_task: 'Record health professional supervision for medical sensitive data processing',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-030-008',
  requirement_id: 'REQ-030-3',
  section_number: '30',
  subsection: '30(3)',
  legal_reference: 'Section 30(3)',
  legal_requirement:
    'The Minister may, by regulations, determine circumstances in which the prohibition to process the personal data referred to in this section cannot be removed even with the data subject consent.',
  control_title: 'Monitoring of absolute prohibitions on sensitive data processing',
  control_description:
    'The organisation monitors for regulations made under section 30(3) that would prohibit certain sensitive data processing even with consent, and checks its processing against them.',
  plain_language_question:
    'Do you check whether any regulations forbid certain sensitive data processing outright, even where you have consent?',
  why_this_matters:
    'Section 30(3) allows for categories of processing that no consent can authorise. If such regulations are made, consent-based processing in those categories becomes unlawful overnight.',
  implementation_guidance:
    'Add section 30(3) regulations to the regulatory monitoring list. Where regulations exist, check each sensitive processing activity against them and stop any that falls inside an absolute prohibition.',
  expected_state:
    'A regulatory monitoring record covering section 30(3), with an assessment against any regulations in force.',
  required: false,
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you process any sensitive personal data?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Regulatory Change Log', 'Legal Assessment Note', 'Sensitive Data Exception Register'],
  evidence_strength: 'MODERATE',
  risk_category: 'SENSITIVE_DATA',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The obligation is contingent on regulations that may not yet exist, but the consequence if they are made and missed is that consent-based processing becomes unlawful.',
  remediation_guidance: 'Add section 30(3) to the regulatory monitoring list with a named owner.',
  suggested_task: 'Monitor for regulations made under section 30(3)',
  suggested_task_priority: 'LOW',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'REGULATORY_DETAIL_PENDING. The Act does not itself identify any such circumstance. DataGuard must not pre-populate any absolute prohibition.',
});

c({
  control_id: 'PDPA-030-009',
  requirement_id: 'REQ-030-1',
  section_number: '30',
  subsection: '30(1)',
  legal_reference: 'Section 30 read with section 27(2)(b)',
  legal_requirement:
    'Section 27(2)(b) requires the level of security to take into account the nature of the personal data to be protected and the potential risks to the data subject. Section 30 subjects sensitive personal data to a specific prohibition and consent regime.',
  control_title: 'Enhanced security and access restriction for sensitive personal data',
  control_description:
    'Sensitive personal data is subject to stricter access restrictions and stronger safeguards than other personal data, in proportion to its nature and the risk to data subjects.',
  plain_language_question:
    'Is access to sensitive personal data more tightly restricted than access to your ordinary personal data?',
  why_this_matters:
    'The Act treats sensitive data as a distinct category with its own regime. Applying identical controls to all data means the sensitive holdings are under-protected.',
  implementation_guidance:
    'Restrict access to sensitive holdings to named roles, log access, and apply stronger authentication and encryption. Review the access list on a defined cycle.',
  expected_state:
    'A documented enhanced control set applied to sensitive holdings, with periodic access reviews evidenced.',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you process any sensitive personal data?',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Access Control Procedure', 'Access Review Records', 'Data Classification Policy', 'Encryption Standard'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'SENSITIVE_DATA',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Exposure of sensitive personal data carries the highest potential harm to data subjects, which is itself an express section 27(2)(b) factor.',
  remediation_guidance:
    'Define a sensitive data control tier, apply it to the flagged holdings, and start periodic access reviews.',
  suggested_task: 'Apply enhanced access restrictions to sensitive personal data holdings',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_DERIVED',
  notes:
    'ACT_DERIVED from sections 27(2)(b) and 30 read together. It adds no new legal obligation; it applies the existing security duty at the level the nature of the data requires.',
});

c({
  control_id: 'PDPA-030-010',
  requirement_id: 'REQ-030-1',
  section_number: '30',
  subsection: '30(1)',
  legal_reference: 'Section 30 read with section 27(3)',
  legal_requirement:
    'Compliance with section 30 requires the controller to be able to show, for each sensitive processing activity, whether it rests on prior written consent or on a section 30(5) exception.',
  control_title: 'Documentation of sensitive personal data processing',
  control_description:
    'A consolidated record shows, for each sensitive processing activity, the data category, the legal footing relied on, the consent or exception evidence, and the responsible owner.',
  plain_language_question:
    'Do you keep a single record showing every use of sensitive personal data and what makes each one lawful?',
  why_this_matters:
    'When the Commission asks about sensitive data, it will ask activity by activity. A consolidated record is the difference between answering in an hour and answering in a month.',
  implementation_guidance:
    'Extend the processing register with a sensitive data view combining the flags from PDPA-030-001, the consent records, the section 30(5) exception entries and the owner. Have the data protection officer review it periodically.',
  expected_state:
    'A maintained sensitive processing record reviewed by the data protection officer at least annually.',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you process any sensitive personal data?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Sensitive Data Inventory', 'Data Processing Register', 'DPO Report', 'Consent Record'],
  evidence_strength: 'MODERATE',
  risk_category: 'SENSITIVE_DATA',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Without this record the organisation cannot demonstrate the lawfulness of its sensitive processing, even where each individual activity happens to be lawful.',
  remediation_guidance:
    'Build the consolidated sensitive processing view and assign it to the data protection officer for periodic review.',
  suggested_task: 'Maintain a consolidated record of all sensitive personal data processing',
  suggested_task_priority: 'HIGH',
  source_type: 'INTERPRETATION',
  notes:
    'INTERPRETATION. The Act does not expressly require a sensitive data register. DataGuard treats it as the practical means of demonstrating compliance with section 30 and of supporting the data protection officer function under section 27(3).',
});
