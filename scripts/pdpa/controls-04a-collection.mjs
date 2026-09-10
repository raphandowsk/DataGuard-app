/* Part IV - Collection, use and disclosure. Sections 22-26. */
import { req, c, YN } from './registry.mjs';

req('REQ-022-1', '22', 's.22(1)', 'Scope of Part IV',
  'This Part shall be applicable to (a) any collection and processing of personal data performed wholly or partly by manual or automated means; (b) the processing of personal data carried out in the performance of activities of a controller domiciled in United Republic or in a territory where the laws of the United Republic apply by virtue of international public law; and (c) the processing of personal data by a data controller or data processor who is not domiciled in the United Republic, if the processing of the personal data is in United Republic and such processing is not for the purposes of mere transit of personal data through Tanzania to another country.');
req('REQ-022-2', '22', 's.22(2)', 'Lawful purpose and necessity for collection',
  'A data controller shall collect personal data if (a) the personal data is collected for a lawful purpose related to a function of the data controller; and (b) the collection of the data is necessary or incidental or directly related to the lawful purpose.');
req('REQ-022-3', '22', 's.22(3)', 'No collection by unlawful means',
  'A data controller shall not collect personal data by unlawful means.');
req('REQ-023-1', '23', 's.23(1)', 'Direct collection from the data subject',
  'Subject to subsection (3), a data controller shall collect personal data directly from the data subject concerned.');
req('REQ-023-2', '23', 's.23(2)', 'Pre-collection notification',
  'Before collecting data, a data controller shall ensure that the data subject is aware of (a) the purposes for which the personal data is collected; (b) the fact that collection of the personal data is for authorised purposes; and (c) any intended recipients of the personal data.');
req('REQ-023-3', '23', 's.23(3)', 'Exceptions to direct collection',
  'A data controller is not obliged to comply with subsection (1) where (a) the personal data is publicly available; (b) the data subject concerned authorises the collection of the personal data from a third party; (c) compliance is not reasonably practicable in the circumstances of the particular case; (d) non-compliance is necessary for compliance with other written laws; or (e) compliance would prejudice the lawful purpose of the collection.');
req('REQ-024-1', '24', 's.24', 'Accuracy before use',
  'Subject to the purpose for which the personal data are intended to be used, a data controller who holds personal data shall not use that personal data without taking such steps as are, in the circumstances, reasonable to ensure that the data is complete, accurate, relevant and not misleading.');
req('REQ-025-1', '25', 's.25(1)', 'Use for the intended purpose',
  'Personal data collected under this Act shall be used for the intended purposes.');
req('REQ-025-2', '25', 's.25(2)', 'Permitted secondary use',
  'Where a data controller holds personal data that was collected in connection with a particular purpose, he may use that personal data for other purposes only on the grounds listed in section 25(2)(a) to (f).');
req('REQ-026-1', '26', 's.26', 'Limitation on disclosure',
  'Where a data controller holds personal data, he shall not disclose the personal data to a person, other than the data subject, except in the circumstances specified under section 25.');

c({
  control_id: 'PDPA-022-001',
  requirement_id: 'REQ-022-1',
  section_number: '22',
  subsection: '22(1)',
  legal_reference: 'Section 22(1)(a)-(c)',
  legal_requirement:
    'Part IV applies to any collection and processing performed wholly or partly by manual or automated means; to processing carried out in the performance of activities of a controller domiciled in the United Republic or in a territory where the laws of the United Republic apply by virtue of international public law; and to processing by a controller or processor not domiciled in the United Republic where the processing takes place in the United Republic and is not for mere transit through Tanzania.',
  control_title: 'Part IV scope assessment including manual records and non-domiciled processing',
  control_description:
    'The organisation has assessed which of its processing falls within section 22(1), expressly including paper and other manual records, and processing carried out in Tanzania by entities domiciled elsewhere.',
  plain_language_question:
    'Have you identified all processing that falls under Part IV, including paper records and any processing you carry out in Tanzania from a business based abroad?',
  why_this_matters:
    'Paper files and offshore group entities are the two things most often left out of a data inventory, and section 22(1) puts both squarely in scope.',
  implementation_guidance:
    'Extend the processing inventory to manual filing systems. For non-domiciled entities, determine where the processing physically takes place, and note that mere transit of data through Tanzania is excluded.',
  expected_state:
    'A processing inventory that covers automated and manual processing and records the domicile and processing location for each activity.',
  evidence_examples: ['Data Processing Register', 'Scoping Statement', 'Records Inventory'],
  evidence_strength: 'MODERATE',
  risk_category: 'GOVERNANCE',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Processing left outside the scope assessment is processing that nobody is controlling.',
  remediation_guidance:
    'Extend the inventory to manual records and confirm the processing location for each non-domiciled entity.',
  suggested_task: 'Extend the processing inventory to manual records and non-domiciled processing',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 22(1)(c) expressly excludes processing for the purposes of mere transit of personal data through Tanzania to another country.',
});

c({
  control_id: 'PDPA-022-002',
  requirement_id: 'REQ-022-2',
  section_number: '22',
  subsection: '22(2)',
  paragraph: '(a)',
  legal_reference: 'Section 22(2)(a)',
  legal_requirement:
    'A data controller shall collect personal data if the personal data is collected for a lawful purpose related to a function of the data controller.',
  control_title: 'Collection tied to a lawful purpose related to a function of the controller',
  control_description:
    'Every collection of personal data is tied to a lawful purpose that relates to an actual function of the organisation.',
  plain_language_question:
    'Is every collection of personal data linked to a lawful purpose that relates to something your organisation actually does?',
  why_this_matters:
    'The Act does not allow collection just because the data might be useful one day. The purpose must connect to a function you actually perform.',
  implementation_guidance:
    'For each collection point in the register, record the organisational function it serves alongside the purpose. Challenge any entry where the function cannot be named.',
  expected_state:
    'Each collection activity in the register names both a lawful purpose and the organisational function it supports.',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Data Processing Register', 'Purpose and Function Mapping', 'Privacy Notice'],
  evidence_strength: 'MODERATE',
  risk_category: 'LAWFULNESS',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Collection with no lawful purpose related to a function of the controller is unlawful at the point of collection and cannot be cured later.',
  remediation_guidance: 'Add a function column to the processing register and complete it for every collection.',
  suggested_task: 'Map every collection activity to a lawful purpose and an organisational function',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-022-003',
  requirement_id: 'REQ-022-2',
  section_number: '22',
  subsection: '22(2)',
  paragraph: '(b)',
  legal_reference: 'Section 22(2)(b)',
  legal_requirement:
    'A data controller shall collect personal data if the collection of the data is necessary or incidental or directly related to the lawful purpose.',
  control_title: 'Necessity test applied at the point of collection',
  control_description:
    'Each data element collected is tested as necessary, incidental to, or directly related to the lawful purpose before collection begins.',
  plain_language_question:
    'Have you checked that each piece of information you collect is necessary for, incidental to, or directly related to the purpose?',
  why_this_matters:
    'This is the statutory version of only collect what you need, and it applies element by element rather than form by form.',
  implementation_guidance:
    'Run a field-level necessity test when a form or integration is designed or changed, and record the outcome. Note the test is broader than strict necessity - incidental and directly related also qualify.',
  expected_state:
    'A recorded necessity assessment per collection point, refreshed when the form or feed changes.',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Necessity Assessment', 'Data Minimisation Review', 'Form and Screen Inventory'],
  evidence_strength: 'MODERATE',
  risk_category: 'DATA_MINIMISATION',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The section 22(2)(b) test is broader than strict necessity, so failures tend to be at the margin, but they are cumulative.',
  remediation_guidance: 'Add a field-level necessity test to the design review for forms and integrations.',
  suggested_task: 'Apply and record a necessity test at each collection point',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-022-004',
  requirement_id: 'REQ-022-3',
  section_number: '22',
  subsection: '22(3)',
  legal_reference: 'Section 22(3)',
  legal_requirement: 'A data controller shall not collect personal data by unlawful means.',
  control_title: 'No collection by unlawful means',
  control_description:
    'Collection methods are lawful - no covert acquisition, scraping in breach of law, deception, or purchase of data obtained unlawfully.',
  plain_language_question:
    'Are you satisfied that none of your methods of obtaining personal data are unlawful, including data bought or scraped from elsewhere?',
  why_this_matters:
    'Data acquired unlawfully stays unlawful no matter how carefully it is handled afterwards, and section 60 makes some acquisition routes a criminal offence.',
  implementation_guidance:
    'Screen third party data sources and list acquisition methods. Require the supplier to state how the data was obtained and on what basis it may be passed on.',
  expected_state:
    'A documented review of acquisition methods and third party data sources with a lawfulness conclusion for each.',
  response_type: 'YES_NO',
  answer_options: YN,
  role_scope: 'CONTROLLER',
  evidence_examples: ['Data Source Register', 'Supplier Data Provenance Declaration', 'Data Protection Policy'],
  evidence_strength: 'MODERATE',
  risk_category: 'LAWFULNESS',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Unlawful acquisition taints every subsequent use and engages the criminal offences in section 60, particularly obtaining personal data without the authority of the controller by whom it is kept.',
  remediation_guidance:
    'Inventory third party data sources, obtain provenance declarations, and stop any acquisition route that cannot be justified.',
  suggested_task: 'Review acquisition methods and third party data sources for lawfulness',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 60(3) makes it an offence to obtain personal data without the prior authority of the data controller or data processor by whom the personal data is kept.',
});

c({
  control_id: 'PDPA-023-001',
  requirement_id: 'REQ-023-1',
  section_number: '23',
  subsection: '23(1)',
  legal_reference: 'Section 23(1)',
  legal_requirement:
    'Subject to subsection (3), a data controller shall collect personal data directly from the data subject concerned.',
  control_title: 'Collection directly from the data subject',
  control_description:
    'Personal data is collected directly from the individual concerned unless one of the section 23(3) exceptions applies and has been recorded.',
  plain_language_question:
    'Do you collect personal data directly from the person it is about, rather than from someone else?',
  why_this_matters:
    'Direct collection is the default under the Act. Indirect collection is allowed only in defined circumstances, and you must be able to point to which one.',
  implementation_guidance:
    'Record the source for each collection activity. Where the source is not the data subject, link the entry to the specific section 23(3) exception relied on.',
  expected_state:
    'The processing register records the source of each collection, with an exception cited wherever the source is not the data subject.',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Data Processing Register', 'Data Source Register', 'Collection Procedure'],
  evidence_strength: 'MODERATE',
  risk_category: 'COLLECTION',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Indirect collection without an applicable exception breaches section 23(1) and usually also undermines the notification duty in section 23(2).',
  remediation_guidance:
    'Add a source field to the processing register and reconcile every indirect collection to a section 23(3) exception.',
  suggested_task: 'Record the source of collection for every processing activity',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-023-002',
  requirement_id: 'REQ-023-2',
  section_number: '23',
  subsection: '23(2)',
  paragraph: '(a)-(c)',
  legal_reference: 'Section 23(2)(a)-(c)',
  legal_requirement:
    'Before collecting data, a data controller shall ensure that the data subject is aware of the purposes for which the personal data is collected, the fact that collection is for authorised purposes, and any intended recipients of the personal data.',
  control_title: 'Pre-collection notice - purposes, authorised purposes and intended recipients',
  control_description:
    'Before any collection, the data subject is made aware of the purposes, the fact that collection is for authorised purposes, and the intended recipients of the data.',
  plain_language_question:
    'Before you collect someone information, do you tell them why you are collecting it and who you intend to share it with?',
  why_this_matters:
    'The Act requires awareness before collection, not afterwards. All three elements must be covered, and intended recipients is the one most often left out.',
  implementation_guidance:
    'Audit every collection point - forms, call scripts, apps, contracts - and confirm the notice covers all three elements and is presented before the data is captured. Keep dated versions of each notice.',
  expected_state:
    'Every collection point carries a pre-collection notice covering purposes, authorised purposes and intended recipients, with versions retained.',
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Privacy Notice', 'Collection Point Notice Inventory', 'Call Script', 'Consent Record'],
  evidence_strength: 'STRONG',
  risk_category: 'TRANSPARENCY',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. This is an express, testable duty that applies at every collection point and is highly visible to data subjects and to the Commission.',
  remediation_guidance:
    'Inventory collection points, then update each notice to cover the three statutory elements and place it before the point of capture.',
  suggested_task: 'Audit all collection points for a compliant pre-collection notice',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 23(2) requires that the data subject is aware. The Act does not prescribe a form or medium for the notice.',
});

c({
  control_id: 'PDPA-023-003',
  requirement_id: 'REQ-023-3',
  section_number: '23',
  subsection: '23(3)',
  paragraph: '(a)-(e)',
  legal_reference: 'Section 23(3)(a)-(e)',
  legal_requirement:
    'A data controller is not obliged to collect directly from the data subject where the personal data is publicly available; the data subject authorises collection from a third party; compliance is not reasonably practicable in the circumstances; non-compliance is necessary for compliance with other written laws; or compliance would prejudice the lawful purpose of the collection.',
  control_title: 'Documented reliance on exceptions to direct collection',
  control_description:
    'Where data is collected indirectly, the specific section 23(3) exception relied on is identified and recorded before collection.',
  plain_language_question:
    'Where you collect personal data from someone other than the person it is about, have you recorded which legal exception allows that?',
  why_this_matters:
    'The exceptions are narrow and specific. Recording which one applies at the time is far easier than reconstructing it during an investigation.',
  implementation_guidance:
    'Give each indirect collection an exception code (a to e) with a short justification and the date the assessment was made. Reassess when the collection changes.',
  expected_state:
    'Every indirect collection has a recorded exception, justification and assessment date.',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you collect any personal data from a source other than the person it is about?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Exception Register', 'Data Source Register', 'Legal Assessment Note'],
  evidence_strength: 'MODERATE',
  risk_category: 'COLLECTION',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The exceptions are lawful routes, so the risk lies in relying on one without analysis rather than in indirect collection itself.',
  remediation_guidance:
    'Create an exception register and complete it for each indirect collection, taking advice on borderline cases.',
  suggested_task: 'Record the section 23(3) exception relied on for each indirect collection',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
  notes:
    'INTERPRETATION: not reasonably practicable and would prejudice the lawful purpose are open-textured tests. The Act gives no further criteria.',
});

c({
  control_id: 'PDPA-024-001',
  requirement_id: 'REQ-024-1',
  section_number: '24',
  legal_reference: 'Section 24',
  legal_requirement:
    'Subject to the purpose for which the personal data are intended to be used, a data controller who holds personal data shall not use that personal data without taking such steps as are, in the circumstances, reasonable to ensure that the data is complete, accurate, relevant and not misleading.',
  control_title: 'Reasonable steps to verify data before use',
  control_description:
    'Before personal data is used, reasonable steps are taken to confirm it is complete, accurate, relevant and not misleading, judged against the intended use.',
  plain_language_question:
    'Before you use personal information to make a decision or take an action, do you take reasonable steps to check it is complete, accurate, relevant and not misleading?',
  why_this_matters:
    'Section 24 is a check at the point of use, not just a general data quality aspiration. What counts as reasonable scales with how much the decision matters to the person.',
  implementation_guidance:
    'Define verification steps proportionate to the consequence of the use - light touch for a mailing list, substantive for a credit or employment decision. Record what the steps are for each high-impact use.',
  expected_state:
    'Documented verification steps for each high-impact use of personal data, with evidence they are applied.',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Data Quality Procedure', 'Verification Control Design', 'System Validation Rules', 'Audit Report'],
  evidence_strength: 'MODERATE',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'DATA_QUALITY',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Use of inaccurate data is the most direct route to demonstrable damage under section 37 and to a Commission order under section 38.',
  remediation_guidance:
    'Identify the uses where inaccuracy would harm someone, and design proportionate verification into those processes first.',
  suggested_task: 'Define and implement pre-use verification for high-impact uses of personal data',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'INTERPRETATION: the Act uses the standard of steps that are reasonable in the circumstances and does not prescribe specific verification methods.',
});

c({
  control_id: 'PDPA-025-001',
  requirement_id: 'REQ-025-1',
  section_number: '25',
  subsection: '25(1)',
  legal_reference: 'Section 25(1)',
  legal_requirement: 'Personal data collected under this Act shall be used for the intended purposes.',
  control_title: 'Use confined to the intended purpose',
  control_description:
    'Personal data is used only for the purpose for which it was collected, unless a section 25(2) ground applies.',
  plain_language_question:
    'Do you use personal data only for the purpose you originally collected it for?',
  why_this_matters:
    'Reusing data for a new purpose is one of the easiest things to do accidentally, particularly when analytics or marketing teams gain access to operational systems.',
  implementation_guidance:
    'Restrict system access by purpose where the platform allows. Require a documented secondary-use approval before data collected for one purpose is used for another.',
  expected_state:
    'Purpose is recorded per dataset and a secondary-use approval process exists and is used.',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Data Processing Register', 'Secondary Use Approval Record', 'Access Control Procedure'],
  evidence_strength: 'MODERATE',
  risk_category: 'PURPOSE_LIMITATION',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Section 26 makes the section 25 grounds the gateway for disclosure as well as use, so a failure here propagates.',
  remediation_guidance:
    'Introduce a secondary-use approval step and record the purpose against each dataset.',
  suggested_task: 'Implement a secondary-use approval process for personal data',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-025-002',
  requirement_id: 'REQ-025-2',
  section_number: '25',
  subsection: '25(2)',
  paragraph: '(a)-(f)',
  legal_reference: 'Section 25(2)(a)-(f)',
  legal_requirement:
    'Personal data held for a particular purpose may be used for another purpose only where the data subject authorises that other use; the other use is authorised or required by law; the other purpose is directly related to the purpose of collection; the data is used in a non-identifying form or for statistical or research purposes not published in identifying form; the controller believes on reasonable grounds that the use is necessary to prevent or lessen a serious and imminent threat to life, health or public health or safety; or the use is necessary for compliance with the laws.',
  control_title: 'Secondary use limited to a recorded section 25(2) ground',
  control_description:
    'Any use of personal data for a purpose other than that of collection is mapped to one of the six grounds in section 25(2) and recorded before the use begins.',
  plain_language_question:
    'When you use personal data for a new purpose, do you record which of the permitted legal grounds allows it?',
  why_this_matters:
    'These six grounds are exhaustive. If a proposed new use does not fit one of them, it is not permitted, however commercially sensible it seems.',
  implementation_guidance:
    'Build a secondary-use assessment template listing grounds (a) to (f). Require the requester to select a ground and give a justification, and require sign-off by the data protection officer.',
  expected_state:
    'A secondary use register recording the ground, justification, approver and date for each approved secondary use.',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you use any personal data for a purpose other than the one it was originally collected for?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Secondary Use Register', 'Purpose Compatibility Assessment', 'DPO Approval Record', 'Consent Record'],
  evidence_strength: 'STRONG',
  risk_category: 'PURPOSE_LIMITATION',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. The grounds are exhaustive, and an unrecorded secondary use is indefensible during a section 39 investigation.',
  remediation_guidance:
    'Create the secondary use register, populate it for existing secondary uses, and stop any use that fits no ground.',
  suggested_task: 'Create a secondary use register mapped to the section 25(2) grounds',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 25(2)(d)(ii) permits statistical or research use provided the results are not published in a form that could reasonably be expected to identify the data subject.',
});

c({
  control_id: 'PDPA-026-001',
  requirement_id: 'REQ-026-1',
  section_number: '26',
  legal_reference: 'Section 26',
  legal_requirement:
    'Where a data controller holds personal data, he shall not disclose the personal data to a person other than the data subject except in the circumstances specified under section 25.',
  control_title: 'Disclosure restricted to the section 25 circumstances',
  control_description:
    'Personal data is disclosed to third parties only where one of the circumstances in section 25 applies, and each disclosure route is recorded.',
  plain_language_question:
    'Do you share personal data with anyone other than the person it is about only where the law allows, and do you keep a record of who you share it with?',
  why_this_matters:
    'Disclosure is the point at which you lose control of the data. Section 26 ties every disclosure back to the section 25 grounds, and unlawful disclosure is a criminal offence under section 60.',
  implementation_guidance:
    'Maintain a disclosure register listing each recipient, the data disclosed, the section 25 ground and the safeguards in place. Include routine feeds, regulatory reporting and group sharing.',
  expected_state:
    'A complete disclosure register with a recorded section 25 ground for every recipient.',
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Disclosure Register', 'Data Sharing Agreement', 'Processor Agreement', 'Secondary Use Register'],
  evidence_strength: 'STRONG',
  risk_category: 'DISCLOSURE',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Section 60(1) makes disclosure incompatible with the purpose of collection a criminal offence carrying a fine of up to TZS 5,000,000,000 for a company or corporation.',
  remediation_guidance:
    'Build the disclosure register, assess each existing route against section 25, and terminate or re-paper any route without a ground.',
  suggested_task: 'Build a disclosure register mapping every recipient to a section 25 ground',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 60(6) sets the penalty for unlawful disclosure offences: for an individual, a fine of not less than TZS 100,000 and not exceeding TZS 20,000,000 or imprisonment not exceeding ten years or both; for a company or corporation, a fine of not less than TZS 1,000,000 and not exceeding TZS 5,000,000,000.',
});
