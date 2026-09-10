/* Part III - Registration of Data Controllers and Data Processors. Sections 14-21. */
import { req, c, YN } from './registry.mjs';

req('REQ-014-1', '14', 's.14(1)', 'Registration before collecting or processing',
  'A person shall not collect or process personal data without being registered as a data controller or a data processor under this Act.');
req('REQ-014-2', '14', 's.14(2)', 'Application for registration',
  'A person who intends to collect or process personal data shall apply to the Commission for registration.');
req('REQ-014-4', '14', 's.14(4)', 'Certificate of registration',
  'The Commission shall issue a certificate of registration to the data controller or data processor who has fulfilled the prescribed requirements and registered under this section.');
req('REQ-015-3', '15', 's.15(3)', 'Updating registered particulars',
  'A data controller or data processor may, at any time, apply to the Commission to update or change any particulars in the register.');
req('REQ-016-1', '16', 's.16(1)', 'Five year registration period',
  'The period of registration shall be five years from the date of issuance of certificate of registration.');
req('REQ-016-2', '16', 's.16(2)', 'Renewal three months before expiry',
  'The application for renewal shall be submitted within the period of three months before expiry in the manner prescribed in the regulations.');
req('REQ-018-1', '18', 's.18', 'Deregistration',
  'The Commission may deregister any registration under this Act as may be prescribed in the regulations.');
req('REQ-019-1', '19', 's.19', 'No false or misleading registration information',
  'Any person who contravenes the provisions of this Part or furnishes false or misleading information during registration or renewal, commits an offence and upon conviction shall be liable for a penalty specified under section 63.');
req('REQ-020-1', '20', 's.20', 'Appeal to the Minister on registration decisions',
  'Any person who is aggrieved by the decision of the Commission under this Part may appeal in writing to the Minister.');
req('REQ-021-1', '21', 's.21', 'Public institutions deemed registered',
  'Immediately after commencement of this Act, public institutions which collect and process personal data shall be deemed as registered with the Commission under this Act and shall be required to comply with the provisions of this Act.');

c({
  control_id: 'PDPA-014-001',
  requirement_id: 'REQ-014-1',
  section_number: '14',
  subsection: '14(1)',
  legal_reference: 'Section 14(1)',
  legal_requirement:
    'A person shall not collect or process personal data without being registered as a data controller or a data processor under this Act.',
  control_title: 'Registration held before any collection or processing',
  control_description:
    'The organisation holds a current registration as a data controller or data processor covering all of its collection and processing of personal data.',
  plain_language_question:
    'Is your organisation registered with the Personal Data Protection Commission as a data controller or data processor?',
  why_this_matters:
    'Registration is a precondition to collecting or processing personal data at all. Processing without it is a standing breach regardless of how well everything else is run.',
  implementation_guidance:
    'Confirm which capacity applies - controller, processor, or both for different activities - and that the registration on file covers all of them. Keep the certificate accessible.',
  expected_state:
    'A valid certificate of registration is held, covers every capacity in which the organisation acts, and has not expired.',
  response_type: 'YES_NO',
  answer_options: YN,
  evidence_required: 'REQUIRED_BY_ACT',
  evidence_examples: ['Certificate of Registration', 'Registration Application', 'Commission Correspondence'],
  evidence_strength: 'STRONG',
  risk_category: 'REGISTRATION',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Section 14(1) is an absolute prohibition on processing without registration, and section 19 makes contravention of this Part an offence.',
  remediation_guidance:
    'Stop or pause new collection where feasible and apply to the Commission for registration immediately. Take legal advice on processing already under way.',
  suggested_task: 'Obtain registration with the Personal Data Protection Commission',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 19 provides that contravention of this Part is an offence punishable under section 63 (fine of not less than TZS 100,000 and not exceeding TZS 5,000,000, or imprisonment not exceeding five years, or both). Section 21 deems public institutions registered.',
});

c({
  control_id: 'PDPA-014-002',
  requirement_id: 'REQ-014-2',
  section_number: '14',
  subsection: '14(2)',
  legal_reference: 'Section 14(2)',
  legal_requirement:
    'A person who intends to collect or process personal data shall apply to the Commission for registration.',
  control_title: 'Registration application submitted before intended processing',
  control_description:
    'Before starting any new collection or processing that falls outside an existing registration, an application is made to the Commission.',
  plain_language_question:
    'When you plan a new activity involving personal data that your registration does not already cover, do you apply to the Commission first?',
  why_this_matters:
    'The duty attaches to the intention to collect or process, so the application belongs at the planning stage rather than after go-live.',
  implementation_guidance:
    'Add a registration check to the intake process for new products, systems and vendors. The Commission decides within a period specified in the regulations under section 14(3).',
  expected_state:
    'A documented gate in the change or project process that checks registration coverage before processing begins.',
  evidence_examples: ['Registration Application', 'Project Intake Checklist', 'Change Approval Record'],
  evidence_strength: 'MODERATE',
  risk_category: 'REGISTRATION',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. New processing launched outside the scope of an existing registration reintroduces the section 14(1) breach.',
  remediation_guidance:
    'Insert a registration coverage check into the project and vendor onboarding gates.',
  suggested_task: 'Add a PDPA registration coverage check to the new-processing intake gate',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'Section 14(3) leaves the decision period to the regulations. Section 14(5) requires the Commission to give written reasons for a rejection.',
});

c({
  control_id: 'PDPA-014-003',
  requirement_id: 'REQ-014-4',
  section_number: '14',
  subsection: '14(4)',
  legal_reference: 'Section 14(4)',
  legal_requirement:
    'The Commission shall issue a certificate of registration to the data controller or data processor who has fulfilled the prescribed requirements and registered under this section.',
  control_title: 'Certificate of registration retained and retrievable',
  control_description:
    'The certificate of registration issued by the Commission is retained, its expiry date is recorded, and it can be produced on request.',
  plain_language_question:
    'Do you hold your certificate of registration, and can you produce it and state its expiry date?',
  why_this_matters:
    'The certificate is the document that proves registration to the Commission, to customers and to counterparties.',
  implementation_guidance:
    'Store the certificate in the evidence repository, record the issue and expiry dates, and set a renewal reminder.',
  expected_state: 'Certificate on file with issue and expiry dates recorded and a renewal reminder set.',
  response_type: 'DOCUMENT_REQUIRED',
  answer_options: [],
  evidence_required: 'REQUIRED_BY_ACT',
  evidence_examples: ['Certificate of Registration'],
  evidence_strength: 'STRONG',
  risk_category: 'REGISTRATION',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The certificate itself is issued by the Commission; the risk here is loss of proof and missed renewal rather than unlawful processing.',
  remediation_guidance:
    'Request a copy from the Commission if mislaid, then file it and diarise the expiry.',
  suggested_task: 'File the certificate of registration and record its expiry date',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-015-001',
  requirement_id: 'REQ-015-3',
  section_number: '15',
  subsection: '15(3)',
  legal_reference: 'Section 15(3)',
  legal_requirement:
    'A data controller or data processor may, at any time, apply to the Commission to update or change any particulars in the register.',
  control_title: 'Registered particulars kept current',
  control_description:
    'When registered particulars change - contact details, the nature of processing, the responsible officer - an application to update the register is made.',
  plain_language_question:
    'When the details you gave the Commission at registration change, do you apply to have the register updated?',
  why_this_matters:
    'The register is how the Commission reaches you, including with an investigation or enforcement notice. Stale details can turn a small issue into a missed deadline.',
  implementation_guidance:
    'Assign an owner for registration data and review the registered particulars at least annually and on any material change of business.',
  expected_state:
    'An owner is named, and there is a record of the last review of registered particulars.',
  evidence_examples: ['Register Update Application', 'Registration Review Record', 'Commission Correspondence'],
  evidence_strength: 'MODERATE',
  risk_category: 'REGISTRATION',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. Out-of-date particulars impede regulatory contact and undermine the credibility of the registration.',
  remediation_guidance: 'Name an owner and run an annual review of registered particulars.',
  suggested_task: 'Assign ownership and review registered particulars annually',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_DERIVED',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'ACT_DERIVED. Section 15(3) is permissive - the Act says the controller or processor may apply to update. DataGuard derives the duty to keep particulars current from section 15(3) read with section 19, which makes furnishing false or misleading information during registration or renewal an offence. It adds no new legal obligation. Section 15(2) leaves the required particulars to the regulations.',
});

c({
  control_id: 'PDPA-015-002',
  requirement_id: 'REQ-015-3',
  section_number: '15',
  subsection: '15(2)',
  legal_reference: 'Sections 15(2) and 17',
  legal_requirement:
    'The register shall contain such particulars as may be prescribed in the regulations. Subject to prescribed procedures and payment of prescribed fees, the Commission may permit any person to inspect and extract any entry in the register.',
  control_title: 'Awareness that registered particulars are publicly inspectable',
  control_description:
    'The organisation understands that entries in the register may be inspected and extracted by any person the Commission permits, and reviews its entries accordingly.',
  plain_language_question:
    'Are you aware that the details recorded about you in the Commission register can be inspected by others, and have you reviewed those details with that in mind?',
  why_this_matters:
    'Anything in the register may end up in front of a competitor, a journalist or a customer. It is worth knowing what is there.',
  implementation_guidance:
    'Review the registered particulars for accuracy and for anything you would not want disclosed, and raise any concern with the Commission rather than omitting required information.',
  expected_state: 'Registered particulars have been reviewed on the assumption that they are inspectable.',
  response_type: 'YES_NO',
  answer_options: YN,
  required: false,
  evidence_examples: ['Registration Review Record'],
  evidence_strength: 'WEAK',
  risk_category: 'REGISTRATION',
  default_risk_level: 'LOW',
  risk_rationale:
    'DataGuard default risk classification: Low. Section 17 is a power of the Commission, not an obligation on the organisation. This control exists to prompt awareness, not to test compliance.',
  remediation_guidance: 'Review your register entry once and record that you have done so.',
  suggested_task: 'Review the register entry on the basis that it is publicly inspectable',
  suggested_task_priority: 'LOW',
  source_type: 'INTERPRETATION',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'INTERPRETATION. Section 17 addresses the Commission, not the data controller. The particulars in the register are to be prescribed by regulations that are not reproduced in the Act.',
});

c({
  control_id: 'PDPA-016-001',
  requirement_id: 'REQ-016-1',
  section_number: '16',
  subsection: '16(1)',
  legal_reference: 'Section 16(1)',
  legal_requirement:
    'The period of registration shall be five years from the date of issuance of certificate of registration.',
  control_title: 'Registration expiry tracked',
  control_description:
    'The five year expiry date of the registration is recorded and monitored so that the organisation never processes on a lapsed registration.',
  plain_language_question:
    'Do you know the date your registration expires, and is that date being tracked?',
  why_this_matters:
    'Registration runs for five years. If it lapses, you are back in breach of the prohibition in section 14(1) without anything else having changed.',
  implementation_guidance:
    'Record the certificate issue date, calculate the five year expiry, and set reminders at twelve, six and four months before expiry.',
  expected_state: 'Expiry date recorded with automated reminders configured.',
  response_type: 'DATE',
  answer_options: [],
  evidence_examples: ['Certificate of Registration', 'Compliance Calendar'],
  evidence_strength: 'STRONG',
  risk_category: 'REGISTRATION',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. A lapsed registration reinstates the section 14(1) prohibition, and lapse through inattention is a common and entirely avoidable failure.',
  remediation_guidance: 'Record the expiry date in the compliance calendar and configure reminders.',
  suggested_task: 'Record the registration expiry date and configure renewal reminders',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-016-002',
  requirement_id: 'REQ-016-2',
  section_number: '16',
  subsection: '16(2)',
  legal_reference: 'Section 16(2)',
  legal_requirement:
    'The application for renewal shall be submitted within the period of three months before expiry in the manner prescribed in the regulations.',
  control_title: 'Renewal submitted within the three month window',
  control_description:
    'The renewal application is submitted within the three month period before the registration expires, in the manner prescribed by the regulations.',
  plain_language_question:
    'Do you submit your renewal application during the three months before your registration expires?',
  why_this_matters:
    'The Act sets a specific window. Applying too late risks a gap in registration; the manner of applying is set by regulations.',
  implementation_guidance:
    'Diarise the start of the three month window, not just the expiry date. Confirm the prescribed manner of renewal against the current regulations before submitting.',
  expected_state:
    'Renewal is submitted inside the statutory window with proof of submission retained.',
  response_type: 'YES_NO',
  answer_options: YN,
  evidence_required: 'REQUIRED_BY_ACT',
  evidence_examples: ['Renewal Application', 'Proof of Submission', 'Compliance Calendar'],
  evidence_strength: 'STRONG',
  risk_category: 'REGISTRATION',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Missing the renewal window can lead to expiry of the registration and a resulting prohibition on processing.',
  remediation_guidance: 'Add the renewal window opening date to the compliance calendar with an owner.',
  suggested_task: 'Diarise the opening of the three month registration renewal window',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes: 'The manner of renewal is left to the regulations and is not specified in the Act.',
});

c({
  control_id: 'PDPA-018-001',
  requirement_id: 'REQ-018-1',
  section_number: '18',
  legal_reference: 'Section 18',
  legal_requirement:
    'The Commission may deregister any registration under this Act as may be prescribed in the regulations.',
  control_title: 'Response to deregistration by the Commission',
  control_description:
    'The organisation has a defined internal response if the Commission deregisters it, recognising that the section 14(1) prohibition then applies again.',
  plain_language_question:
    'Do you have a plan for what happens to your processing if the Commission deregisters you?',
  why_this_matters:
    'Deregistration removes the basis on which you may collect or process personal data at all. It needs an escalation path decided in advance, not invented on the day.',
  implementation_guidance:
    'Name an executive owner, define the escalation path, and identify which processing would have to stop. The grounds and procedure for deregistration are left to the regulations.',
  expected_state:
    'A documented escalation procedure naming an owner and the processing that would be suspended.',
  required: false,
  evidence_examples: ['Incident and Escalation Procedure', 'Business Continuity Plan'],
  evidence_strength: 'MODERATE',
  risk_category: 'REGISTRATION',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. Deregistration is a low-likelihood but very high-impact event, and the Act gives no notice period on the face of section 18.',
  remediation_guidance: 'Add deregistration to the escalation procedure with a named executive owner.',
  suggested_task: 'Define an internal response procedure for deregistration by the Commission',
  suggested_task_priority: 'LOW',
  source_type: 'INTERPRETATION',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'INTERPRETATION. Section 18 confers a power on the Commission and imposes no obligation on the organisation. The consequence for the organisation is derived from section 14(1). Grounds and procedure are left to the regulations.',
});

c({
  control_id: 'PDPA-019-001',
  requirement_id: 'REQ-019-1',
  section_number: '19',
  legal_reference: 'Section 19',
  legal_requirement:
    'Any person who contravenes the provisions of this Part or furnishes false or misleading information during registration or renewal, commits an offence and upon conviction shall be liable for a penalty specified under section 63.',
  control_title: 'Accuracy of information given at registration and renewal',
  control_description:
    'Information submitted to the Commission at registration and renewal is verified for accuracy and completeness before submission, and a copy is retained.',
  plain_language_question:
    'Is the information you give the Commission at registration and renewal checked for accuracy before you send it, and do you keep a copy?',
  why_this_matters:
    'Furnishing false or misleading information at registration or renewal is a criminal offence under the Act, not merely an administrative slip.',
  implementation_guidance:
    'Require a named reviewer to verify the submission against source records before it is sent, and retain the submitted version alongside the supporting records.',
  expected_state:
    'A retained copy of each submission with evidence of pre-submission review by a named person.',
  response_type: 'YES_NO',
  answer_options: YN,
  evidence_examples: ['Registration Application', 'Renewal Application', 'Pre-submission Review Record'],
  evidence_strength: 'STRONG',
  risk_category: 'REGISTRATION',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. This provision carries criminal liability under section 63 and is entirely within the organisation control to avoid.',
  remediation_guidance:
    'Introduce a documented review and sign-off step before any submission to the Commission.',
  suggested_task: 'Introduce pre-submission review and retention for Commission filings',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 63 provides a fine of not less than TZS 100,000 and not exceeding TZS 5,000,000, or imprisonment for a term not exceeding five years, or both. This penalty applies to section 19 because section 19 expressly refers to it.',
});

c({
  control_id: 'PDPA-020-001',
  requirement_id: 'REQ-020-1',
  section_number: '20',
  legal_reference: 'Section 20',
  legal_requirement:
    'Any person who is aggrieved by the decision of the Commission under this Part may appeal in writing to the Minister.',
  control_title: 'Awareness of the registration appeal route',
  control_description:
    'The organisation knows that a decision of the Commission under Part III may be appealed in writing to the Minister, and who internally would handle such an appeal.',
  plain_language_question:
    'If the Commission refused or cancelled your registration, do you know that you can appeal in writing to the Minister and who would handle it?',
  why_this_matters:
    'Appeal rights are only useful if somebody knows they exist at the moment the decision lands.',
  implementation_guidance:
    'Record the appeal route in the compliance procedure with a named owner. The Act does not state a time limit for this appeal on the face of section 20 - confirm any deadline in the regulations or with counsel.',
  expected_state:
    'The appeal route and internal owner are documented in the compliance procedure.',
  response_type: 'YES_NO',
  answer_options: YN,
  required: false,
  evidence_examples: ['Compliance Procedure', 'Regulatory Escalation Matrix'],
  evidence_strength: 'WEAK',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'LOW',
  risk_rationale:
    'DataGuard default risk classification: Low. This is a right rather than a duty. It is recorded so the organisation does not lose it through unawareness.',
  remediation_guidance: 'Add the section 20 appeal route and its owner to the compliance procedure.',
  suggested_task: 'Document the section 20 appeal route to the Minister',
  suggested_task_priority: 'LOW',
  source_type: 'ACT_EXPLICIT',
  notes:
    'OPEN_QUESTION: section 20 does not state a period within which the appeal to the Minister must be lodged. Any internal deadline is INTERPRETATION until confirmed by regulations or advice.',
});

c({
  control_id: 'PDPA-021-001',
  requirement_id: 'REQ-021-1',
  section_number: '21',
  legal_reference: 'Section 21',
  legal_requirement:
    'Immediately after commencement of this Act, public institutions which collect and process personal data shall be deemed as registered with the Commission under this Act and shall be required to comply with the provisions of this Act.',
  control_title: 'Public institution deemed registration and full compliance',
  control_description:
    'A public institution that collects and processes personal data recognises that it is deemed registered and that it remains bound by every other provision of the Act.',
  plain_language_question:
    'If you are a public institution, do you understand that you are treated as already registered but still have to comply with everything else in the Act?',
  why_this_matters:
    'Deemed registration removes the application step. It does not reduce any other obligation, and the assumption that it does is a common misreading.',
  implementation_guidance:
    'Record the basis of deemed registration in the compliance file and confirm with the Commission what particulars, if any, it expects the institution to supply.',
  expected_state:
    'The deemed registration basis is documented and the institution is assessed against the full control matrix.',
  response_type: 'YES_NO',
  answer_options: YN,
  applicability: 'ROLE_SPECIFIC',
  applicability_question: 'Is your organisation a public institution?',
  role_scope: 'PUBLIC_INSTITUTION',
  evidence_examples: ['Compliance File Note', 'Commission Correspondence', 'Establishing Instrument'],
  evidence_strength: 'MODERATE',
  risk_category: 'REGISTRATION',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The registration risk is removed by statute, but the misconception that deemed registration implies broader exemption is a real and material risk.',
  remediation_guidance:
    'Document the deemed registration basis and run the full assessment regardless.',
  suggested_task: 'Document deemed registration status and complete the full PDPA assessment',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
  notes:
    'OPEN_QUESTION: the Act does not define public institution for this purpose, nor state what particulars a deemed-registered institution must supply for the register under section 15.',
});
