/* Part VI - Rights of Data Subjects. Sections 33-38. */
import { req, c, YN } from './registry.mjs';

req('REQ-033-1A', '33', 's.33(1)(a)', 'Right to confirmation of processing',
  'A data subject shall be entitled to be informed by any data controller whether his personal data are being processed by or on behalf of that data controller.');
req('REQ-033-1B', '33', 's.33(1)(b)', 'Right to a description of the data, purposes and recipients',
  'A data subject shall be entitled to be given by the data controller a description of the personal data of which that individual is the data subject, the purposes for which they are being processed, and the recipients or classes of recipients to whom they are or may be disclosed.');
req('REQ-033-1C', '33', 's.33(1)(c)', 'Right to be informed of the logic of automated decisions',
  'Where the processing of personal data by automatic means for the purpose of evaluating matters relating to him has constituted or is likely to constitute the sole basis for any decision significantly affecting him, the data subject is entitled to be informed by the data controller of the logic involved in that decision making.');
req('REQ-033-2', '33', 's.33(2)', 'Exceptions to informing the data subject',
  'A data controller is not obliged to inform the data subject where the personal data are not accurate, are involved in any investigation in accordance with the laws, or have been prohibited by court order.');
req('REQ-034-1', '34', 's.34(1)', 'Right to prevent processing likely to cause substantial damage',
  'A data subject is entitled to require a data controller, through procedures prescribed in the regulations, to suspend or not to begin processing of any personal data in respect of which he is the data subject, if the processing of such personal data is likely to cause substantial damage to him or to another person.');
req('REQ-035-1', '35', 's.35(1)', 'Right to stop direct marketing',
  'A data subject may, through the procedures prescribed in the regulations, require the data controller to stop processing his personal data for purposes of direct marketing.');
req('REQ-035-2', '35', 's.35(2)', 'Agreement for pecuniary benefit',
  'A data subject may enter into agreement with a data controller for purposes of using or processing his personal data for pecuniary benefits.');
req('REQ-036-1', '36', 's.36(1)', 'Right to require that decisions are not based solely on automated processing',
  'A data subject may, through the procedures prescribed in the regulations, require the data controller to ensure that any decision taken by or on behalf of the data controller which significantly affects the data subject shall not be based solely on the processing by automatic means.');
req('REQ-036-2', '36', 's.36(2)', 'Notification and reconsideration of automated decisions',
  'Where a decision which significantly affects a data subject is based solely on automated processing, the data controller shall as soon as practicable notify the data subject that the decision was taken on that basis, and the data subject may require the data controller to reconsider the decision.');
req('REQ-036-3', '36', 's.36(3)', 'Exceptions for automated decisions',
  'This section shall not apply if the decision is necessary for entering into, or performance of, a contract between the data subject and a data controller; is authorised by any written law; or is based on the data subject explicit consent.');
req('REQ-037-1', '37', 's.37(1)-(2)', 'Right to compensation for damage',
  'A data subject who suffers damage by reason of any contravention of any of the requirements of this Act by a data controller or data processor shall be entitled to compensation from the data controller or data processor for that damage, on the conditions set out in section 37(2).');
req('REQ-037-3', '37', 's.37(3)', 'Commission order for rectification, blocking, erasure or destruction',
  'Where the Commission is satisfied on the application of a data subject that he has suffered damage entitling him to compensation and that there is a substantial risk of further contravention, the Commission may order the rectification, blocking, erasure or destruction of any of the personal data.');
req('REQ-037-4', '37', 's.37(4)-(5)', 'Notification of third parties following a Commission order',
  'The Commission may, where it makes an order under subsection (3) and where it considers it reasonable, order the data controller or data processor to notify third parties to whom the personal data have been disclosed of the rectification, blocking, erasure or destruction.');
req('REQ-038-1', '38', 's.38(1)-(2)', 'Commission order to rectify, block, erase or destroy inaccurate data',
  'Where the Commission is satisfied on the application of a data subject that his personal data is inaccurate, the Commission may order the data controller or data processor to rectify, block, erase or destroy the personal data, whether or not the personal data is an accurate record of information received or obtained from the data subject or a third party.');
req('REQ-038-3', '38', 's.38(3)', 'Direction to correct personal data',
  'Where the personal data is not an accurate record of the information, the Commission may direct the data controller or processor to correct the personal data as it considers appropriate.');
req('REQ-038-4', '38', 's.38(4)', 'Notification of third parties after rectification or erasure',
  'Where the personal data complained of has been rectified, blocked, updated, erased or destroyed under this section, the data controller or data processor shall be required to notify third parties to whom the personal data has been previously disclosed of the rectification, blocking, updating, erasure or destruction.');

c({
  control_id: 'PDPA-033-001',
  requirement_id: 'REQ-033-1A',
  section_number: '33',
  subsection: '33(1)',
  paragraph: '(a)',
  legal_reference: 'Section 33(1)(a)',
  legal_requirement:
    'A data subject shall be entitled to be informed by any data controller whether his personal data are being processed by or on behalf of that data controller.',
  control_title: 'Right of access - confirmation of processing',
  control_description:
    'On request, the organisation can confirm to an individual whether it processes their personal data, including processing carried out on its behalf.',
  plain_language_question:
    'If someone asks whether you hold or use their personal data, can you find out and tell them - including data held by your suppliers on your behalf?',
  why_this_matters:
    'This is the first step of the access right. Answering it requires being able to search across your systems and your processors, which many organisations cannot do quickly.',
  implementation_guidance:
    'Define the request intake channel, identity verification, and the systems and processors to be searched. Keep a request log. Test the search end to end at least annually.',
  expected_state:
    'A documented access request procedure with a search map covering all systems and processors, and a request log.',
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Data Subject Rights Procedure', 'Rights Request Log', 'System Search Map', 'Processor Agreement'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'DATA_SUBJECT_RIGHTS',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Access is the most frequently exercised right and the most common subject of complaints to a regulator.',
  remediation_guidance:
    'Write the access procedure, map where personal data lives, and rehearse a request end to end.',
  suggested_task: 'Implement a data subject access request procedure',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'OPEN_QUESTION: the Act does not prescribe a response time, a form of request, or any fee for access requests under section 33.',
});

c({
  control_id: 'PDPA-033-002',
  requirement_id: 'REQ-033-1B',
  section_number: '33',
  subsection: '33(1)',
  paragraph: '(b)',
  legal_reference: 'Section 33(1)(b)(i)-(iii)',
  legal_requirement:
    'A data subject shall be entitled to be given a description of the personal data of which that individual is the data subject, the purposes for which they are being processed, and the recipients or classes of recipients to whom they are or may be disclosed.',
  control_title: 'Right of access - description of data, purposes and recipients',
  control_description:
    'The organisation can provide a description of the personal data held about an individual, the purposes of processing, and the recipients or classes of recipients.',
  plain_language_question:
    'Can you tell someone what personal data you hold about them, why you use it, and who you share it with?',
  why_this_matters:
    'All three elements are required. The recipients element is the one most often missed, and it depends on having a disclosure register.',
  implementation_guidance:
    'Use a response template covering all three elements. Draw the purposes from the processing register and the recipients from the disclosure register so the answer is consistent with your other records.',
  expected_state:
    'A response template covering the three statutory elements, with completed responses retained.',
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Access Response Template', 'Rights Request Log', 'Data Processing Register', 'Disclosure Register'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'DATA_SUBJECT_RIGHTS',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. An incomplete access response is itself a contravention and is easy for the Commission to verify against your own registers.',
  remediation_guidance:
    'Build the response template and link it to the processing and disclosure registers.',
  suggested_task: 'Create an access response template covering data, purposes and recipients',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-033-003',
  requirement_id: 'REQ-033-1C',
  section_number: '33',
  subsection: '33(1)',
  paragraph: '(c)',
  legal_reference: 'Section 33(1)(c)',
  legal_requirement:
    'Where processing by automatic means for the purpose of evaluating matters relating to the data subject has constituted or is likely to constitute the sole basis for any decision significantly affecting him, the data subject is entitled to be informed of the logic involved in that decision making.',
  control_title: 'Disclosure of the logic involved in automated decision making',
  control_description:
    'Where an automated evaluation is or is likely to be the sole basis of a significant decision, the organisation can explain the logic involved to the data subject.',
  plain_language_question:
    'Where a computer alone makes or is likely to make a decision that significantly affects someone, can you explain to them how that decision is reached?',
  why_this_matters:
    'This obliges you to be able to describe how your model or rule set reaches a decision. Systems bought or built without that in mind cannot meet it later without rework.',
  implementation_guidance:
    'Inventory automated evaluation and scoring systems. For each, prepare a plain-language description of the logic. Note that the right attaches where such processing is likely to constitute the sole basis, not only where it already has.',
  expected_state:
    'A maintained inventory of automated decision systems, each with an approved plain-language logic description.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you use automated processing to evaluate people in a way that is, or could be, the sole basis of a decision significantly affecting them?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Automated Decision System Inventory', 'Model Logic Description', 'Access Response Template', 'Technical Design Document'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'AUTOMATED_DECISION_MAKING',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Automated evaluation carries significant potential for harm, and the inability to explain the logic is often structural rather than procedural.',
  remediation_guidance:
    'Inventory automated evaluation systems and commission a plain-language logic description for each, starting with those affecting credit, employment or access to services.',
  suggested_task: 'Prepare plain-language logic descriptions for automated decision systems',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'OPEN_QUESTION: the Act does not define significantly affecting or specify the required depth of the logic description.',
});

c({
  control_id: 'PDPA-033-004',
  requirement_id: 'REQ-033-2',
  section_number: '33',
  subsection: '33(2)',
  paragraph: '(a)-(c)',
  legal_reference: 'Section 33(2)(a)-(c)',
  legal_requirement:
    'A data controller is not obliged to inform the data subject where the personal data are not accurate, are involved in any investigation in accordance with the laws, or have been prohibited by court order.',
  control_title: 'Documented reliance on access exceptions',
  control_description:
    'Where an access request is refused in reliance on section 33(2), the specific ground is identified and recorded.',
  plain_language_question:
    'Where you decline to give someone information about their data, have you recorded which of the three legal grounds applies?',
  why_this_matters:
    'The grounds are narrow and specific. Recording which one applies protects the decision if it is later challenged.',
  implementation_guidance:
    'Record the ground and the reasoning against the request log. For the investigation ground, record the investigation reference. For the court order ground, retain the order.',
  expected_state:
    'Every refused access request has a recorded ground, reasoning and supporting document where applicable.',
  applicability: 'CONDITIONAL',
  applicability_question: 'Have you refused, or might you refuse, an access request?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Rights Request Log', 'Refusal Notice Template', 'Court Order', 'Legal Assessment Note'],
  evidence_strength: 'STRONG',
  risk_category: 'DATA_SUBJECT_RIGHTS',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The exceptions are lawful, so the risk is over-reliance on them without a recorded basis.',
  remediation_guidance: 'Add a ground field to the request log and require it for every refusal.',
  suggested_task: 'Record the section 33(2) ground for each refused access request',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 33(2)(a) removes the obligation where the personal data are not accurate. INTERPRETATION: this ground is unusual and its scope is not elaborated in the Act. Take advice before relying on it.',
});

c({
  control_id: 'PDPA-034-001',
  requirement_id: 'REQ-034-1',
  section_number: '34',
  subsection: '34(1)',
  legal_reference: 'Section 34(1)',
  legal_requirement:
    'A data subject is entitled to require a data controller, through procedures prescribed in the regulations, to suspend or not to begin processing of any personal data in respect of which he is the data subject, if the processing is likely to cause substantial damage to him or to another person.',
  control_title: 'Right to prevent processing likely to cause substantial damage',
  control_description:
    'A procedure receives and assesses requests to suspend or not begin processing on substantial damage grounds, and can technically implement a suspension.',
  plain_language_question:
    'If someone asks you to stop or not start processing their data because it would cause them substantial damage, can you assess that and actually suspend the processing?',
  why_this_matters:
    'Suspension has to work in the systems, not just on paper. Many platforms can delete a record but cannot pause processing of it.',
  implementation_guidance:
    'Define intake, assessment criteria and the decision maker, and confirm each relevant system can suspend rather than only delete. Record the decision and its reasons either way.',
  expected_state:
    'A documented procedure plus verified technical capability to suspend processing on a per-record basis.',
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Data Subject Rights Procedure', 'Rights Request Log', 'System Suspension Capability Evidence'],
  evidence_strength: 'STRONG',
  risk_category: 'DATA_SUBJECT_RIGHTS',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. The right is engaged precisely where substantial damage is in prospect, so a failure here coincides with the greatest potential harm.',
  remediation_guidance:
    'Add the right to the rights procedure and verify suspension capability in each system holding personal data.',
  suggested_task: 'Implement the right to prevent processing, including technical suspension capability',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'The procedure is to be prescribed by regulations. Section 34(2) provides that the right does not apply in the exceptions provided under the Act. OPEN_QUESTION: substantial damage is not defined, and section 34(2) does not identify which exceptions it refers to.',
});

c({
  control_id: 'PDPA-035-001',
  requirement_id: 'REQ-035-1',
  section_number: '35',
  subsection: '35(1)',
  legal_reference: 'Section 35(1) and 35(3)',
  legal_requirement:
    'A data subject may, through the procedures prescribed in the regulations, require the data controller to stop processing his personal data for purposes of direct marketing. Direct marketing includes the communication by whatever means of any advertising or marketing material which is directed at an individual.',
  control_title: 'Right to stop direct marketing',
  control_description:
    'A working opt-out mechanism stops direct marketing to an individual on request, across all channels and all marketing systems.',
  plain_language_question:
    'If someone asks you to stop marketing to them, does that stop across every channel you use - email, SMS, phone, post and any other?',
  why_this_matters:
    'The definition covers advertising or marketing material by whatever means. An opt-out that only stops email leaves the obligation unmet.',
  implementation_guidance:
    'Maintain a suppression list that all marketing systems consult, including any run by agencies or partners. Test that an opt-out propagates within a defined internal period, and record opt-outs.',
  expected_state:
    'A central suppression list honoured by every marketing channel and by third party marketing partners, with propagation tested.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question: 'Do you carry out direct marketing to individuals by any means?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Suppression List Configuration', 'Marketing Opt-out Log', 'Data Subject Rights Procedure', 'Agency Agreement'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'DIRECT_MARKETING',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Failures are immediately visible to the individual, easily evidenced by them, and typically repeat with every campaign until fixed.',
  remediation_guidance:
    'Consolidate suppression into a single list, connect every marketing system to it, and extend the obligation to agencies contractually.',
  suggested_task: 'Implement a cross-channel marketing suppression capability',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'The procedure is to be prescribed by regulations. OPEN_QUESTION: the Act sets no period within which marketing must cease after a request.',
});

c({
  control_id: 'PDPA-035-002',
  requirement_id: 'REQ-035-2',
  section_number: '35',
  subsection: '35(2)',
  legal_reference: 'Section 35(2)',
  legal_requirement:
    'A data subject may enter into agreement with a data controller for purposes of using or processing his personal data for pecuniary benefits.',
  control_title: 'Agreements for use of personal data for pecuniary benefit',
  control_description:
    'Where an individual agrees to their personal data being used for pecuniary benefit, that agreement is documented and its scope is respected.',
  plain_language_question:
    'Do you have any arrangements where people agree to let you use their personal data in return for a payment or benefit, and are those agreements documented?',
  why_this_matters:
    'The Act expressly contemplates these arrangements. They still have to respect the rest of the Act, including the marketing opt-out right in section 35(1).',
  implementation_guidance:
    'Document the agreement, its scope and its duration. Confirm the arrangement does not override the individual ability to withdraw or to stop marketing, and take advice where the arrangement involves sensitive personal data.',
  expected_state:
    'Written agreements on file with defined scope and duration, and no conflict with other rights under the Act.',
  required: false,
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you have arrangements where individuals receive payment or another benefit for the use of their personal data?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Data Use Agreement', 'Consent Record', 'Legal Assessment Note'],
  evidence_strength: 'MODERATE',
  risk_category: 'DIRECT_MARKETING',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The arrangement is expressly permitted, so the risk lies in undocumented scope or in the agreement being treated as overriding other rights.',
  remediation_guidance: 'Document existing arrangements and review them against the rest of the Act.',
  suggested_task: 'Document any agreements for use of personal data for pecuniary benefit',
  suggested_task_priority: 'LOW',
  source_type: 'ACT_EXPLICIT',
  notes:
    'OPEN_QUESTION: the Act does not set conditions or limits for these agreements beyond section 35(2) itself.',
});

c({
  control_id: 'PDPA-036-001',
  requirement_id: 'REQ-036-1',
  section_number: '36',
  subsection: '36(1)',
  legal_reference: 'Section 36(1)',
  legal_requirement:
    'A data subject may, through the procedures prescribed in the regulations, require the data controller to ensure that any decision taken by or on behalf of the data controller which significantly affects the data subject shall not be based solely on the processing by automatic means.',
  control_title: 'Right to require human involvement in significant decisions',
  control_description:
    'On request, the organisation can ensure that a decision significantly affecting the individual is not based solely on automated processing.',
  plain_language_question:
    'If someone asks that a significant decision about them is not made by computer alone, can you arrange for a person to be involved?',
  why_this_matters:
    'Meeting this request requires a real human review path, with someone who has the authority and information to reach a different outcome.',
  implementation_guidance:
    'Identify decisions that are solely automated and significant. Establish a human review path with a named reviewer able to change the outcome, and record each review.',
  expected_state:
    'A documented human review path for each solely automated significant decision, with reviews logged.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you make decisions that significantly affect people based solely on automated processing?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Automated Decision System Inventory', 'Human Review Procedure', 'Review Decision Log'],
  evidence_strength: 'STRONG',
  risk_category: 'AUTOMATED_DECISION_MAKING',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Solely automated significant decisions concentrate potential harm, and a review path that cannot change the outcome is not a review path.',
  remediation_guidance:
    'Inventory solely automated significant decisions and build a genuine human review path for each.',
  suggested_task: 'Establish a human review path for solely automated significant decisions',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes: 'The procedure for exercising the right is to be prescribed by regulations.',
});

c({
  control_id: 'PDPA-036-002',
  requirement_id: 'REQ-036-2',
  section_number: '36',
  subsection: '36(2)',
  paragraph: '(a)',
  legal_reference: 'Section 36(2)(a)',
  legal_requirement:
    'Where a decision which significantly affects a data subject is based solely on automated processing, the data controller shall, as soon as practicable, notify the data subject that the decision was taken on that basis.',
  control_title: 'Proactive notification of solely automated decisions',
  control_description:
    'Where a significant decision is based solely on automated processing, the individual is notified of that fact as soon as practicable, without waiting to be asked.',
  plain_language_question:
    'When a computer alone makes a significant decision about someone, do you tell them that is how the decision was made?',
  why_this_matters:
    'This duty is proactive. Unlike the other rights in Part VI it is not triggered by a request, so it must be built into the decision process itself.',
  implementation_guidance:
    'Add the notification to the decision output - the letter, email or portal message. Retain evidence that it was sent.',
  expected_state:
    'Notification text embedded in every solely automated significant decision output, with dispatch evidence retained.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you make decisions that significantly affect people based solely on automated processing?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Decision Notification Template', 'Sent Notification Records', 'Automated Decision System Inventory'],
  evidence_strength: 'STRONG',
  risk_category: 'AUTOMATED_DECISION_MAKING',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. This is a proactive duty that operates on every affected decision, so a gap is systematic rather than occasional.',
  remediation_guidance:
    'Add the notification into the decision output templates and confirm dispatch is logged.',
  suggested_task: 'Add automated decision notification to decision output templates',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes: 'OPEN_QUESTION: as soon as practicable is not defined in the Act.',
});

c({
  control_id: 'PDPA-036-003',
  requirement_id: 'REQ-036-2',
  section_number: '36',
  subsection: '36(2)',
  paragraph: '(b)',
  legal_reference: 'Section 36(2)(b)',
  legal_requirement:
    'The data subject may require the data controller to reconsider a decision which significantly affects him and which is based solely on automated processing.',
  control_title: 'Reconsideration of a solely automated decision on request',
  control_description:
    'A procedure allows a data subject to require reconsideration of a solely automated significant decision, and reconsiderations are carried out and recorded.',
  plain_language_question:
    'If someone asks you to reconsider a decision that was made by computer alone, do you have a process to do that and record the outcome?',
  why_this_matters:
    'Reconsideration must be capable of producing a different answer. A rerun of the same model is not a reconsideration.',
  implementation_guidance:
    'Define who reconsiders, what information they see, the outcome options, and how the result is communicated. Log each reconsideration and its outcome.',
  expected_state:
    'A reconsideration procedure with a log recording each request, reviewer, outcome and date.',
  evidence_required: 'REQUIRED_BY_ACT',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you make decisions that significantly affect people based solely on automated processing?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Reconsideration Procedure', 'Reconsideration Log', 'Rights Request Log'],
  evidence_strength: 'STRONG',
  risk_category: 'AUTOMATED_DECISION_MAKING',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Reconsideration is the individual practical remedy against an automated decision, and its absence leaves them with only a complaint to the Commission.',
  remediation_guidance:
    'Write the reconsideration procedure, name the reviewers, and start the log.',
  suggested_task: 'Implement a reconsideration process for automated decisions',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'OPEN_QUESTION: the Act does not state what reconsideration must involve or within what period it must be completed.',
});

c({
  control_id: 'PDPA-036-004',
  requirement_id: 'REQ-036-3',
  section_number: '36',
  subsection: '36(3)',
  paragraph: '(a)-(c)',
  legal_reference: 'Section 36(3)(a)-(c)',
  legal_requirement:
    'Section 36 shall not apply if the decision is necessary for entering into, or performance of, a contract between the data subject and a data controller; is authorised by any written law; or is based on the data subject explicit consent.',
  control_title: 'Documented reliance on automated decision exceptions',
  control_description:
    'Where section 36 is treated as inapplicable, the specific exception is identified and recorded per decision type.',
  plain_language_question:
    'Where you treat the automated decision rules as not applying, have you recorded which of the three exceptions you rely on?',
  why_this_matters:
    'Two of the exceptions - contractual necessity and explicit consent - are frequently asserted and rarely documented. The record is what makes the position defensible.',
  implementation_guidance:
    'Record the exception per decision type with a justification. Where explicit consent is relied on, hold the consent record and confirm it covers automated decision making specifically.',
  expected_state:
    'An exception record per automated decision type, with supporting consent or contract evidence.',
  applicability: 'CONDITIONAL',
  applicability_question:
    'Do you make decisions that significantly affect people based solely on automated processing?',
  role_scope: 'CONTROLLER',
  evidence_examples: ['Automated Decision System Inventory', 'Consent Record', 'Contract', 'Legal Assessment Note'],
  evidence_strength: 'MODERATE',
  risk_category: 'AUTOMATED_DECISION_MAKING',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The exceptions are lawful, so the risk is asserting one without analysis rather than the exception itself.',
  remediation_guidance:
    'Document the exception relied on for each automated decision type and verify the supporting evidence exists.',
  suggested_task: 'Record the section 36(3) exception relied on for each automated decision type',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Note that section 36(3) disapplies section 36 as a whole, including the notification duty in section 36(2)(a). The section 33(1)(c) right to be informed of the logic involved is in a different section and is not disapplied by section 36(3).',
});

c({
  control_id: 'PDPA-037-001',
  requirement_id: 'REQ-037-1',
  section_number: '37',
  subsection: '37(1)',
  legal_reference: 'Sections 37(1) and 37(2)',
  legal_requirement:
    'A data subject who suffers damage by reason of any contravention of any of the requirements of this Act by a data controller or data processor shall be entitled to compensation from the data controller or data processor for that damage, where the complainant is the affected data subject or a representative of a data subject who is a child or a person of unsound mind, the rights have been infringed by reason of the contravention, and the damage relates to processing in contravention of the Act.',
  control_title: 'Handling of compensation claims from data subjects',
  control_description:
    'A defined process receives, assesses and responds to claims for compensation for damage caused by a contravention of the Act.',
  plain_language_question:
    'If someone claims they have been harmed by the way you handled their data and asks for compensation, do you have a process to assess and respond to that?',
  why_this_matters:
    'Compensation claims can be brought directly and may also come through the Commission under section 50. Handling the first one without a process usually goes badly.',
  implementation_guidance:
    'Define intake, legal assessment, escalation and record keeping. Preserve evidence relating to the alleged contravention as soon as a claim arrives. Notify insurers where relevant.',
  expected_state:
    'A documented claims handling procedure with a claims register and defined evidence preservation steps.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Claims Handling Procedure', 'Claims Register', 'Incident Response Procedure', 'Legal Assessment Note'],
  evidence_strength: 'MODERATE',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The exposure is real but reactive. The primary defence is compliance with the substantive controls rather than the claims process itself.',
  remediation_guidance:
    'Write the claims handling procedure and agree the escalation path with legal and finance.',
  suggested_task: 'Establish a procedure for handling data subject compensation claims',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 50(4) defines damage as including financial loss and damage not involving financial loss. Section 50(3) provides a defence where the controller or processor proves it was not in any way responsible for the event that caused the damage.',
});

c({
  control_id: 'PDPA-037-002',
  requirement_id: 'REQ-037-3',
  section_number: '37',
  subsection: '37(3)',
  legal_reference: 'Section 37(3)',
  legal_requirement:
    'Where the Commission is satisfied that a data subject has suffered damage entitling him to compensation and that there is a substantial risk of further contravention, the Commission may order the rectification, blocking, erasure or destruction of any of the personal data.',
  control_title: 'Capability to execute a Commission rectification, blocking, erasure or destruction order',
  control_description:
    'The organisation can technically and procedurally execute an order to rectify, block, erase or destroy specified personal data, and evidence that it has done so.',
  plain_language_question:
    'If the Commission ordered you to correct, block, erase or destroy specific personal data, could you do it across all your systems and prove it?',
  why_this_matters:
    'Blocking in particular is a capability most systems lack. An order arrives with a deadline, which is the wrong moment to discover the gap.',
  implementation_guidance:
    'Verify each system can rectify, block, erase and destroy at record level, including archives, backups and copies held by processors. Define how execution is evidenced. Sequence any erasure against the section 29(2) preservation duty.',
  expected_state:
    'Verified rectify, block, erase and destroy capability across all systems holding personal data, with an evidencing method defined.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['System Capability Assessment', 'Order Execution Log', 'Processor Agreement', 'Technical Design Document'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. An order carries a deadline, and inability to comply escalates directly into the enforcement and penalty regime in sections 45 to 47.',
  remediation_guidance:
    'Assess each system for the four capabilities and remediate gaps, prioritising blocking, which is most often missing.',
  suggested_task: 'Verify rectify, block, erase and destroy capability across all systems',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-037-003',
  requirement_id: 'REQ-037-4',
  section_number: '37',
  subsection: '37(4)',
  legal_reference: 'Sections 37(4) and 37(5)',
  legal_requirement:
    'The Commission may, where it makes an order under subsection (3) and where it considers it reasonable, order the data controller or data processor to notify third parties to whom the personal data have been disclosed of the rectification, blocking, erasure or destruction. In determining whether it is reasonably practicable to require the notification, the Commission shall have regard in particular to the number of persons who need to be notified.',
  control_title: 'Ability to notify third party recipients following a Commission order',
  control_description:
    'The organisation can identify and notify the third parties to whom affected personal data was disclosed, when ordered to do so.',
  plain_language_question:
    'Could you identify and contact everyone you have shared a person data with, if the Commission ordered you to tell them about a correction or deletion?',
  why_this_matters:
    'This depends entirely on the disclosure register. Without a record of who received what, the order cannot be complied with at all.',
  implementation_guidance:
    'Keep the disclosure register at a level of detail that allows recipients to be identified per data subject. Hold current contact details for each recipient and prepare a notification template.',
  expected_state:
    'A disclosure register that supports per-data-subject recipient identification, with recipient contacts current.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Disclosure Register', 'Recipient Contact List', 'Notification Template', 'Order Execution Log'],
  evidence_strength: 'MODERATE',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The duty is contingent on a Commission order, but the underlying record keeping must be in place well before one arrives.',
  remediation_guidance:
    'Enrich the disclosure register so recipients can be traced per data subject, and keep recipient contacts current.',
  suggested_task: 'Ensure the disclosure register supports per-data-subject recipient notification',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-038-001',
  requirement_id: 'REQ-038-1',
  section_number: '38',
  subsection: '38(1)',
  legal_reference: 'Sections 38(1) and 38(2)',
  legal_requirement:
    'Where the Commission is satisfied on the application of a data subject that his personal data is inaccurate, the Commission may order the data controller or data processor to rectify, block, erase or destroy the personal data. This applies whether or not the personal data is an accurate record of information received or obtained by the data controller from the data subject or a third party.',
  control_title: 'Compliance with a Commission order on inaccurate personal data',
  control_description:
    'The organisation can comply with a Commission order to rectify, block, erase or destroy inaccurate personal data, including data accurately recorded from a third party source.',
  plain_language_question:
    'If the Commission ordered you to correct or remove inaccurate personal data, could you comply - even where you recorded it accurately from someone else?',
  why_this_matters:
    'Section 38(2) is explicit: it does not matter that you faithfully recorded what a third party told you. Accurate transcription of wrong information is still inaccurate personal data.',
  implementation_guidance:
    'Confirm you can correct data originating from third party sources without the correction being overwritten at the next data refresh. Record the order and the action taken.',
  expected_state:
    'Verified ability to correct third party sourced data durably, with an order execution log.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Order Execution Log', 'System Capability Assessment', 'Data Source Register', 'Rectification Log'],
  evidence_strength: 'STRONG',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Failing to comply with a Commission order leads directly to enforcement under section 45 and a penalty notice under section 46.',
  remediation_guidance:
    'Test correction of third party sourced records and confirm the correction survives the next data refresh.',
  suggested_task: 'Verify durable correction of third party sourced personal data',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-038-002',
  requirement_id: 'REQ-038-3',
  section_number: '38',
  subsection: '38(3)',
  legal_reference: 'Section 38(3)',
  legal_requirement:
    'Where the personal data is not an accurate record of the information, the Commission may direct the data controller or processor to correct the personal data as it considers appropriate.',
  control_title: 'Compliance with a Commission direction to correct personal data',
  control_description:
    'The organisation can implement a correction in the specific terms directed by the Commission and evidence that it has done so.',
  plain_language_question:
    'If the Commission directed you to correct data in a particular way, could you carry that out exactly and show that you did?',
  why_this_matters:
    'A direction may specify the correction in particular terms. Implementing something approximate is not compliance.',
  implementation_guidance:
    'Record the direction, the correction implemented, the date and the person responsible. Preserve the pre-amendment record in accordance with section 29(2).',
  expected_state:
    'An order execution log linking each direction to the correction made and to the preserved prior version.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Order Execution Log', 'Rectification Log', 'System Version History Configuration'],
  evidence_strength: 'STRONG',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Non-compliance with a direction escalates to an enforcement notice and then to a penalty notice.',
  remediation_guidance: 'Establish an order execution log and link it to the correction and version history processes.',
  suggested_task: 'Establish an execution log for Commission directions and orders',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});

c({
  control_id: 'PDPA-038-003',
  requirement_id: 'REQ-038-4',
  section_number: '38',
  subsection: '38(4)',
  legal_reference: 'Section 38(4)',
  legal_requirement:
    'Where the personal data complained of has been rectified, blocked, updated, erased or destroyed under this section, the data controller or data processor shall be required to notify third parties to whom the personal data has been previously disclosed of the rectification, blocking, updating, erasure or destruction.',
  control_title: 'Notification of third parties after action under section 38',
  control_description:
    'After personal data is rectified, blocked, updated, erased or destroyed under section 38, third parties previously given the data are notified.',
  plain_language_question:
    'After you correct or remove data under a Commission order, do you tell everyone you previously shared that data with?',
  why_this_matters:
    'Unlike section 37(4), this duty is not expressed as contingent on a further Commission order - section 38(4) states that the controller or processor shall be required to notify.',
  implementation_guidance:
    'Trigger third party notification automatically as part of the section 38 execution process. Use the disclosure register to identify recipients and retain proof of notification.',
  expected_state:
    'Third party notification built into the section 38 execution process, with dispatch evidence retained.',
  evidence_required: 'REQUIRED_BY_ACT',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Disclosure Register', 'Third Party Notification Records', 'Order Execution Log', 'Notification Template'],
  evidence_strength: 'STRONG',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. This duty is expressed in mandatory terms and is a second, separate contravention if missed after an order has already been made.',
  remediation_guidance:
    'Add a mandatory notification step to the order execution process and pre-draft the notification template.',
  suggested_task: 'Build third party notification into the section 38 execution process',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'INTERPRETATION: section 38(4) is drafted in mandatory terms (shall be required to notify) and does not on its face require a further order, in contrast to section 37(4). Take advice if relying on the narrower reading.',
});
