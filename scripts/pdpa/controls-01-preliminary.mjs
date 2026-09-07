/* Part I - Preliminary Provisions. Sections 2 and 5. */
import { req, c } from './registry.mjs';

req('REQ-002-1', '2', 's.2', 'Territorial application',
  'This Act shall apply to Mainland Tanzania as well as Tanzania Zanzibar save that in Tanzania Zanzibar this Act shall not apply to non-union matters.');

c({
  control_id: 'PDPA-002-001',
  requirement_id: 'REQ-002-1',
  section_number: '2',
  legal_reference: 'Section 2',
  legal_requirement:
    'The Act applies to Mainland Tanzania and to Tanzania Zanzibar, save that in Tanzania Zanzibar it does not apply to non-union matters.',
  control_title: 'Territorial scope determination',
  control_description:
    'The organisation has determined which of its operations fall within the territorial scope of the Act, including whether any Zanzibar operations concern non-union matters.',
  plain_language_question:
    'Have you worked out which parts of your organisation and which activities the Tanzania Personal Data Protection Act applies to?',
  why_this_matters:
    'Knowing exactly where the Act applies decides which of your teams, systems and records have to follow it. Getting this wrong at the start makes every later answer unreliable.',
  implementation_guidance:
    'Record the entities, branches and processing activities in scope. Note separately any activity carried out in Zanzibar that you consider a non-union matter, and the basis for that view. Whether a matter is a union matter is a constitutional question - take advice rather than deciding it informally.',
  expected_state:
    'A documented scoping statement listing in-scope entities, locations and processing activities, reviewed at least annually.',
  evidence_examples: ['Scoping Statement', 'Data Processing Register', 'Group Structure Chart'],
  evidence_strength: 'MODERATE',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. An incorrect scope assessment silently invalidates the rest of the assessment, but it is a foundational rather than an operational failure.',
  remediation_guidance:
    'Run a scoping workshop with legal, IT and business owners. Produce a written scope statement and have it approved by the accountable executive.',
  suggested_task: 'Document the territorial and organisational scope of PDPA applicability',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_DERIVED',
  notes:
    'ACT_DERIVED. Section 2 states the territorial reach of the Act. The obligation to document a scoping exercise is DataGuard implementation practice, not a statutory requirement, and adds no new legal obligation.',
});

req('REQ-005-A', '5', 's.5(a)', 'Lawful, fair and transparent processing',
  'A data controller or data processor shall ensure that personal data is processed lawfully, fairly and transparently.');
req('REQ-005-B', '5', 's.5(b)', 'Purpose specification and limitation',
  'A data controller or data processor shall ensure that personal data is collected for explicit, specified and legitimate purposes and not further processed in a manner incompatible with those purposes.');
req('REQ-005-C', '5', 's.5(c)', 'Data minimisation',
  'A data controller or data processor shall ensure that personal data is adequate, relevant and limited to what is necessary in relation to the purposes for which it is processed.');
req('REQ-005-D', '5', 's.5(d)', 'Accuracy',
  'A data controller or data processor shall ensure that personal data is accurate and where necessary kept up to date, with every reasonable step taken to ensure that any inaccurate personal data is erased or rectified without delay.');
req('REQ-005-E', '5', 's.5(e)', 'Storage limitation',
  'A data controller or data processor shall ensure that personal data is stored in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data is processed.');
req('REQ-005-F', '5', 's.5(f)', 'Processing in accordance with data subject rights',
  'A data controller or data processor shall ensure that personal data is processed in accordance with the rights of a data subject.');
req('REQ-005-G', '5', 's.5(g)', 'Integrity and confidentiality',
  'A data controller or data processor shall ensure that personal data is processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against any loss, destruction or damage, using appropriate technical or organisational measures.');
req('REQ-005-H', '5', 's.5(h)', 'No transfer abroad contrary to the Act',
  'A data controller or data processor shall ensure that personal data is not transferred abroad contrary to the provisions of this Act.');

c({
  control_id: 'PDPA-005-001',
  requirement_id: 'REQ-005-A',
  section_number: '5',
  paragraph: '(a)',
  legal_reference: 'Section 5(a)',
  legal_requirement: 'Personal data shall be processed lawfully, fairly and transparently.',
  control_title: 'Lawful, fair and transparent processing',
  control_description:
    'All processing of personal data is carried out on a lawful footing, is fair to the individuals concerned, and is explained to them openly.',
  plain_language_question:
    'Is every use you make of personal data lawful, fair to the people concerned, and openly explained to them?',
  why_this_matters:
    'This is the headline principle of the Act. If people are surprised or misled about what happens to their data, the processing is not fair or transparent even if nothing else has gone wrong.',
  implementation_guidance:
    'Maintain a record of each processing activity with the lawful basis relied on, and a plain-language privacy notice that matches what actually happens. Check that the notice and the record agree.',
  expected_state:
    'A current processing record and a published privacy notice that accurately describe all processing activities.',
  evidence_examples: ['Privacy Policy', 'Privacy Notice', 'Data Processing Register', 'Data Protection Policy'],
  evidence_strength: 'MODERATE',
  risk_category: 'LAWFULNESS',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Section 5 principles apply to every processing activity and are the benchmark against which complaints under section 39 are assessed.',
  remediation_guidance:
    'Build or refresh the processing register, assign a lawful basis to each activity, then rewrite the privacy notice so it matches.',
  suggested_task: 'Establish a processing register with a documented lawful basis for each activity',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'The Act states the principle but does not set out an exhaustive list of lawful bases. Lawfulness is assessed against the Act as a whole and against other written laws.',
});

c({
  control_id: 'PDPA-005-002',
  requirement_id: 'REQ-005-B',
  section_number: '5',
  paragraph: '(b)',
  legal_reference: 'Section 5(b)',
  legal_requirement:
    'Personal data shall be collected for explicit, specified and legitimate purposes and not further processed in a manner incompatible with those purposes.',
  control_title: 'Purpose specification and limitation',
  control_description:
    'Each collection of personal data has a stated, specific and legitimate purpose recorded in advance, and later uses are checked against that purpose.',
  plain_language_question:
    'For each set of personal data you collect, have you written down exactly why you collect it, and do you keep uses within that reason?',
  why_this_matters:
    'Purpose is the anchor for almost every other duty in the Act - how long you keep data, who you may share it with, and whether a new use is allowed.',
  implementation_guidance:
    'Record a specific purpose statement per processing activity. Avoid catch-all wording such as business purposes. Route any proposed new use through a compatibility check before it starts.',
  expected_state:
    'Every processing activity in the register has an explicit purpose, and a documented route exists for approving new uses.',
  evidence_examples: ['Data Processing Register', 'Privacy Notice', 'Purpose Compatibility Assessment'],
  evidence_strength: 'MODERATE',
  risk_category: 'PURPOSE_LIMITATION',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Purpose creep is the most common cause of downstream breaches of sections 25 and 26.',
  remediation_guidance:
    'Document a purpose for each activity in the register and introduce a change-of-purpose approval step.',
  suggested_task: 'Record an explicit purpose for every processing activity',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-005-003',
  requirement_id: 'REQ-005-C',
  section_number: '5',
  paragraph: '(c)',
  legal_reference: 'Section 5(c)',
  legal_requirement:
    'Personal data shall be adequate, relevant and limited to what is necessary in relation to the purposes for which it is processed.',
  control_title: 'Data minimisation',
  control_description:
    'The organisation collects and retains only the personal data fields that are necessary for the stated purpose.',
  plain_language_question:
    'Do you collect only the personal information you actually need for the purpose, and no more?',
  why_this_matters:
    'Every extra field you hold is extra risk if something goes wrong, and it is harder to justify to the Commission or to the person concerned.',
  implementation_guidance:
    'Review forms, application screens and data feeds field by field against the recorded purpose. Remove or stop collecting fields that no longer earn their place.',
  expected_state: 'A documented field-level review per collection point, with unnecessary fields removed.',
  evidence_examples: ['Data Minimisation Review', 'Data Processing Register', 'Form and Screen Inventory'],
  evidence_strength: 'MODERATE',
  risk_category: 'DATA_MINIMISATION',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. Over-collection is a standing breach of section 5(c) and increases the impact of any incident, but it rarely causes immediate harm on its own.',
  remediation_guidance: 'Run a field-level review of the highest-volume collection points first, then work down.',
  suggested_task: 'Review collection forms and remove unnecessary personal data fields',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-005-004',
  requirement_id: 'REQ-005-D',
  section_number: '5',
  paragraph: '(d)',
  legal_reference: 'Section 5(d)',
  legal_requirement:
    'Personal data shall be accurate and where necessary kept up to date, with every reasonable step taken to ensure that any inaccurate personal data is erased or rectified without delay.',
  control_title: 'Accuracy and prompt rectification',
  control_description:
    'The organisation keeps personal data accurate and up to date, and corrects or erases inaccurate data without delay once identified.',
  plain_language_question:
    'Do you keep personal information accurate and up to date, and fix or delete wrong information promptly when you find it?',
  why_this_matters:
    'Decisions made on wrong information can cause real harm to people, and the Act requires you to act without delay once you know.',
  implementation_guidance:
    'Define how inaccuracies are reported and who fixes them, and set an internal turnaround target. The Act says without delay but does not fix a number of days, so any target you set is your own commitment.',
  expected_state:
    'A documented data quality and rectification process with a defined internal turnaround target and a log of corrections made.',
  evidence_examples: ['Data Quality Procedure', 'Rectification Log', 'Data Subject Rights Procedure'],
  evidence_strength: 'MODERATE',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'DATA_QUALITY',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. Inaccuracy is directly actionable by the Commission under section 38 and can found a compensation claim under section 37.',
  remediation_guidance:
    'Create a rectification workflow with an owner, a target turnaround and an audit log. Link it to the section 29 correction process.',
  suggested_task: 'Implement a data accuracy and rectification workflow',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
  notes:
    'INTERPRETATION: any specific turnaround time an organisation sets is its own commitment. The Act says without delay and does not prescribe a period.',
});

c({
  control_id: 'PDPA-005-005',
  requirement_id: 'REQ-005-E',
  section_number: '5',
  paragraph: '(e)',
  legal_reference: 'Section 5(e)',
  legal_requirement:
    'Personal data shall be stored in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data is processed.',
  control_title: 'Storage limitation',
  control_description:
    'Personal data is held in identifiable form only for as long as the purpose requires, after which it is disposed of or de-identified.',
  plain_language_question:
    'Do you stop keeping personal information in a form that identifies people once you no longer need it for the purpose?',
  why_this_matters:
    'Holding identifiable data indefinitely creates risk with no offsetting benefit, and it is one of the easiest failures for a regulator to spot.',
  implementation_guidance:
    'Read this together with section 28. Where a retention period is fixed by another written law or by regulations made under the Act, that period governs. Where it is not, justify the period against the purpose and record the reasoning.',
  expected_state: 'A retention schedule covering all record types, with a defined end-of-life action for each.',
  evidence_examples: ['Retention Schedule', 'Disposal Log', 'Data Processing Register'],
  evidence_strength: 'MODERATE',
  risk_category: 'RETENTION',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. Over-retention breaches section 5(e) and compounds the impact of any security incident.',
  remediation_guidance:
    'Build a retention schedule keyed to record type and purpose, then automate or diarise the disposal step.',
  suggested_task: 'Produce a retention schedule covering all personal data record types',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'Section 28(2) empowers the Minister to prescribe retention and disposal by regulations. Do not assume a period that is not fixed by a relevant law or by those regulations.',
});

c({
  control_id: 'PDPA-005-006',
  requirement_id: 'REQ-005-F',
  section_number: '5',
  paragraph: '(f)',
  legal_reference: 'Section 5(f)',
  legal_requirement: 'Personal data shall be processed in accordance with the rights of a data subject.',
  control_title: 'Processing consistent with data subject rights',
  control_description:
    'Processing operations are designed so that the rights in Part VI of the Act can actually be exercised and honoured.',
  plain_language_question:
    'Are your systems and processes set up so that people can actually exercise their rights over their data?',
  why_this_matters:
    'Rights that cannot be delivered in practice are a compliance failure even where nobody has yet complained.',
  implementation_guidance:
    'Confirm that for each system holding personal data you can locate an individual record, describe the purposes and recipients, suspend processing, and rectify or erase where required.',
  expected_state: 'A rights-readiness assessment per system, with gaps tracked to closure.',
  evidence_examples: ['Data Subject Rights Procedure', 'System Rights Readiness Assessment', 'Rights Request Log'],
  evidence_strength: 'MODERATE',
  risk_category: 'DATA_SUBJECT_RIGHTS',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Inability to serve a right is directly visible to data subjects and is the usual trigger for a section 39 complaint.',
  remediation_guidance:
    'Assess each major system against the Part VI rights and remediate the systems that cannot support them.',
  suggested_task: 'Assess each system against the Part VI data subject rights',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-005-007',
  requirement_id: 'REQ-005-G',
  section_number: '5',
  paragraph: '(g)',
  legal_reference: 'Section 5(g)',
  legal_requirement:
    'Personal data shall be processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against any loss, destruction or damage, using appropriate technical or organisational measures.',
  control_title: 'Security principle - technical and organisational measures',
  control_description:
    'A programme of technical and organisational security measures protects personal data across its lifecycle.',
  plain_language_question:
    'Do you have a set of technical and organisational security measures that protect personal data throughout its life?',
  why_this_matters:
    'This principle sits alongside the detailed duties in section 27, and it binds data processors directly as well as data controllers.',
  implementation_guidance:
    'Maintain a documented security programme and map each measure to the risk it addresses. The section 27 controls decompose this obligation further.',
  expected_state:
    'An approved information security policy with an inventory of implemented technical and organisational measures.',
  evidence_examples: ['Security Policy', 'Information Security Programme', 'Risk Assessment', 'Access Control Procedure'],
  evidence_strength: 'MODERATE',
  risk_category: 'SECURITY',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Security failures are the highest-impact and least reversible category of non-compliance, and section 5(g) binds processors directly, not only controllers.',
  remediation_guidance: 'Stand up a documented security programme and align it to the specific section 27 duties.',
  suggested_task: 'Establish and document an information security programme for personal data',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 5 binds both the data controller and the data processor. Section 27(1) by its terms addresses the data controller and his representatives.',
});

c({
  control_id: 'PDPA-005-008',
  requirement_id: 'REQ-005-H',
  section_number: '5',
  paragraph: '(h)',
  legal_reference: 'Section 5(h)',
  legal_requirement: 'Personal data shall not be transferred abroad contrary to the provisions of this Act.',
  control_title: 'No transfer abroad contrary to the Act',
  control_description:
    'Transfers of personal data outside Tanzania are only made on a basis permitted by Part V of the Act.',
  plain_language_question:
    'Do you make sure that personal data only leaves Tanzania on a basis the Act allows?',
  why_this_matters:
    'Cloud services, group companies and overseas suppliers move data across borders routinely, often without anyone noticing.',
  implementation_guidance:
    'Read with sections 31 and 32. Identify every route by which data leaves the country, including remote support access and offshore backups, then confirm the basis for each.',
  expected_state: 'A transfer inventory covering all cross-border flows with a recorded Part V basis for each.',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Does any personal data you hold leave Tanzania - including cloud hosting, offshore backups, group systems or remote support access?',
  evidence_examples: ['Transfer Inventory', 'Transfer Assessment', 'Cloud Hosting Register'],
  evidence_strength: 'MODERATE',
  risk_category: 'CROSS_BORDER_TRANSFER',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Unrecognised transfers are common and each one is a standing breach until a Part V basis is established.',
  remediation_guidance: 'Build the transfer inventory first, then assess each flow under section 31 or 32.',
  suggested_task: 'Build an inventory of all cross-border personal data transfers',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});
