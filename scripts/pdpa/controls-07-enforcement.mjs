/* Part VII - Investigation of Complaints and enforcement. Sections 39-50. */
import { req, c, YN } from './registry.mjs';

req('REQ-039-1', '39', 's.39(1)-(4)', 'Complaints to the Commission and investigation timeline',
  'Any person who considers that a data controller or data processor has infringed personal data protection principles may file a complaint to the Commission. Where the Commission is satisfied that there are reasonable grounds it may initiate an investigation. A complaint shall be investigated and concluded within ninety days from the date of receipt, extendable by the Commission by up to a further ninety days.');
req('REQ-040-1', '40', 's.40', 'Notice of investigation',
  'Before commencing an investigation of a complaint under this Act, the Commission shall, in a form prescribed in the regulations, notify the data controller or data processor concerned of the substance of the complaint and intention to carry out the investigation.');
req('REQ-042-1', '42', 's.42(1)-(2)', 'Powers of the Commission in investigations',
  'In the course of carrying out an investigation the Commission has power to summon a person; receive and accept evidence and other information; enter any premises occupied by any data controller or data processor for satisfying security requirements of the premises; interrogate any person or take any device with personal data in any premises entered; and examine or obtain copies of or extracts from books, documents or other records found in any such premises. The complainant and the data controller or data processor may be given an opportunity to make representations.');
req('REQ-042-3', '42', 's.42(3)-(4)', 'No withholding of personal data from the Commission',
  'Notwithstanding any other written law, the Commission may examine any personal data recorded in any form held by a data controller or data processor and in doing so, no personal data shall be withheld from the Commission. Any document or article produced shall be returned by the Commission within ten working days after a request is made.');
req('REQ-043-1', '43', 's.43', 'Obstruction of the Commission',
  'A person who obstructs or impedes the Commission in the exercise of its powers; fails to provide assistance or information requested by the Commission; refuses to allow the Commission to enter any premises or to take any document or device with personal data; or gives to the Commission any information which is false or misleading, commits an offence and shall be liable on conviction to a fine of not less than one hundred thousand shillings but not exceeding five million shillings or imprisonment to a term of not more than two years, or both.');
req('REQ-045-1', '45', 's.45(1)-(2)', 'Enforcement notice',
  'Where the Commission is satisfied that a person has failed to comply with any provision of this Act, the Commission may serve an enforcement notice requiring that person to rectify the failure within such period as may be specified in the notice. The notice shall specify the provision contravened, the measures to be taken, a period of not less than twenty-one days within which the measures shall be implemented, and shall state any right to appeal.');
req('REQ-046-1', '46', 's.46(1)-(2)', 'Penalty notice and its determining factors',
  'Where the Commission is satisfied that a person has failed or is failing to comply with an enforcement notice, the Commission may issue a penalty notice requiring payment of a fine of an amount specified in the notice. In deciding whether to give a penalty notice and determining the amount, the Commission shall have regard to the eleven factors listed in section 46(2)(a) to (k).');
req('REQ-047-1', '47', 's.47', 'Maximum administrative fine',
  'The maximum amount of the penalty that may be imposed by the Commission in a penalty notice in relation to contravention of provisions of this Act is one hundred million shillings.');
req('REQ-048-1', '48', 's.48', 'Review of a Commission decision',
  'The Commission may, upon application or on its own motion, review its decision or direction given in accordance with the provisions of this Part, and may reverse, alter or revoke it.');
req('REQ-049-1', '49', 's.49', 'Right of appeal to the High Court',
  'A person who is aggrieved with the administrative action taken by the Commission, including the directions given in the enforcement notice or penalty imposed in the penalty notice, may appeal to the High Court.');
req('REQ-050-1', '50', 's.50(1)', 'Commission order to pay compensation',
  'Subject to the provisions of section 37, the Commission may, in addition to any penalty given under this Act, order a data controller or data processor who causes damages to the data subject following contraventions of any provisions of this Act to pay compensation to the data subject.');
req('REQ-050-2', '50', 's.50(2)-(3)', 'Liability of controllers and processors',
  'A data controller involved in processing of personal data shall be liable for damage caused by the processing. A data processor shall be liable for damage caused by the processing if the processor has not complied with an obligation under the Act specifically directed to data processors, or has acted contrary to the data controller lawful instructions. A data controller or data processor shall not be liable if it proves that it is not in any way responsible for the event that caused the damage.');

c({
  control_id: 'PDPA-039-001',
  requirement_id: 'REQ-039-1',
  section_number: '39',
  subsection: '39(1)',
  legal_reference: 'Section 39(1) and 39(3)',
  legal_requirement:
    'Any person who considers that a data controller or data processor has infringed personal data protection principles may file a complaint to the Commission. A complaint shall be investigated and concluded within ninety days from the date of receipt.',
  control_title: 'Internal complaint handling and readiness for Commission complaints',
  control_description:
    'An internal channel receives and resolves data protection complaints, and the organisation is prepared to respond to a complaint escalated to the Commission.',
  plain_language_question:
    'Do you have a way for people to complain to you about how you handle their data, and are you ready to respond if they complain to the Commission instead?',
  why_this_matters:
    'Most complaints to a regulator start as complaints to the organisation that went unanswered. A working internal channel is the cheapest form of enforcement risk reduction.',
  implementation_guidance:
    'Publish a complaint channel, log complaints with outcomes, and define who leads the response if the Commission opens an investigation. The Commission timeline is ninety days, extendable by up to a further ninety.',
  expected_state:
    'A published complaint channel, a complaint log with outcomes, and a named regulatory response lead.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Complaints Procedure', 'Complaint Log', 'Privacy Notice', 'Regulatory Response Plan'],
  evidence_strength: 'MODERATE',
  evidence_review_frequency: 'QUARTERLY',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The Act imposes no express internal complaints duty, but unresolved complaints are the main route into a section 39 investigation.',
  remediation_guidance:
    'Publish the complaint channel, start the log, and name the regulatory response lead.',
  suggested_task: 'Establish an internal data protection complaints channel and log',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_DERIVED',
  notes:
    'ACT_DERIVED. Section 39 confers a right to complain to the Commission and sets the Commission timeline. It imposes no express obligation to operate an internal complaints channel; DataGuard treats that as derived good practice, not a statutory duty.',
});

c({
  control_id: 'PDPA-040-001',
  requirement_id: 'REQ-040-1',
  section_number: '40',
  legal_reference: 'Section 40',
  legal_requirement:
    'Before commencing an investigation of a complaint, the Commission shall notify the data controller or data processor concerned of the substance of the complaint and its intention to carry out the investigation, in a form prescribed in the regulations.',
  control_title: 'Handling of a notice of investigation',
  control_description:
    'A defined process receives a notice of investigation from the Commission, routes it immediately to the accountable owner, and starts evidence preservation.',
  plain_language_question:
    'If a notice of investigation arrived from the Commission today, do you know who would receive it, who would own the response, and what would be preserved?',
  why_this_matters:
    'The notice tells you the substance of the complaint before the investigation starts. That window is only useful if the notice reaches the right person immediately.',
  implementation_guidance:
    'Name the recipient and the response owner, define an internal acknowledgement time, and trigger a litigation-style hold on relevant records the moment a notice arrives.',
  expected_state:
    'A documented regulatory notice handling procedure naming the recipient, the owner and the preservation steps.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Regulatory Response Plan', 'Escalation Matrix', 'Evidence Preservation Procedure'],
  evidence_strength: 'MODERATE',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. Poor handling wastes the notice period and can lead to loss of records that would have supported the organisation position.',
  remediation_guidance: 'Write the regulatory notice handling procedure and communicate it to reception, legal and IT.',
  suggested_task: 'Define a handling procedure for Commission notices of investigation',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_DERIVED',
  regulatory_status: 'REGULATORY_DETAIL_PENDING',
  notes:
    'ACT_DERIVED. Section 40 imposes the duty on the Commission. The internal handling procedure is DataGuard implementation practice. The form of the notice is left to the regulations.',
});

c({
  control_id: 'PDPA-042-001',
  requirement_id: 'REQ-042-1',
  section_number: '42',
  subsection: '42(1)',
  paragraph: '(a)-(e)',
  legal_reference: 'Section 42(1)(a)-(e) and 42(2)',
  legal_requirement:
    'In the course of an investigation the Commission may summon a person, receive evidence, enter premises occupied by a data controller or data processor, interrogate any person or take any device with personal data in such premises, and examine or obtain copies of books, documents or records found there. The complainant and the controller or processor may be given an opportunity to make representations.',
  control_title: 'Cooperation with Commission investigation powers',
  control_description:
    'Staff know how to respond when the Commission exercises its investigation powers, including attendance at premises, and the organisation can make representations.',
  plain_language_question:
    'Would your staff know what to do if officers from the Commission arrived to inspect your premises, records or devices?',
  why_this_matters:
    'The powers include entry, interrogation and taking devices. Section 43 makes obstruction a criminal offence, and an untrained receptionist can create one by accident.',
  implementation_guidance:
    'Write a short regulatory visit protocol: verify identity and authority, notify legal and the data protection officer immediately, cooperate, log what is taken, and do not obstruct. Brief front-of-house and IT staff. Prepare to make representations under section 42(2).',
  expected_state:
    'A regulatory visit protocol issued and briefed to front-of-house, IT and management staff.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Regulatory Visit Protocol', 'Training Records', 'Regulatory Response Plan'],
  evidence_strength: 'MODERATE',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. An untrained response can create a section 43 obstruction offence, which is a criminal matter distinct from the underlying complaint.',
  remediation_guidance: 'Write and brief the regulatory visit protocol, focusing on reception and IT.',
  suggested_task: 'Issue and brief a Commission regulatory visit protocol',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_DERIVED',
  notes:
    'ACT_DERIVED. Section 42 confers powers on the Commission. The duty not to obstruct arises under section 43. Section 42(4) requires the Commission to return documents or articles within ten working days of a request.',
});

c({
  control_id: 'PDPA-042-002',
  requirement_id: 'REQ-042-3',
  section_number: '42',
  subsection: '42(3)',
  legal_reference: 'Section 42(3)',
  legal_requirement:
    'Notwithstanding any other written law, the Commission may examine any personal data recorded in any form held by a data controller or data processor and in doing so, no personal data shall be withheld from the Commission.',
  control_title: 'No personal data withheld from the Commission',
  control_description:
    'The organisation understands that no personal data may be withheld from the Commission during an examination, notwithstanding other written laws, and its staff and advisers act accordingly.',
  plain_language_question:
    'Do the people who would handle a Commission examination understand that personal data cannot be withheld from it, even where another law might otherwise suggest confidentiality?',
  why_this_matters:
    'The provision overrides other written laws in this respect. Withholding data in good faith reliance on a confidentiality obligation would still be a failure, and may amount to obstruction under section 43.',
  implementation_guidance:
    'State the position clearly in the regulatory visit protocol. Where a genuine conflict with another law or with privilege is asserted, escalate to counsel immediately rather than withholding unilaterally.',
  expected_state:
    'The regulatory visit protocol records the position and the escalation route for any asserted conflict.',
  response_type: 'YES_NO',
  answer_options: YN,
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Regulatory Visit Protocol', 'Legal Assessment Note', 'Training Records'],
  evidence_strength: 'MODERATE',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. The exposure arises only during an examination, but a refusal in the moment can convert a civil matter into a section 43 offence.',
  remediation_guidance: 'Add the section 42(3) position and the escalation route to the regulatory visit protocol.',
  suggested_task: 'Record the section 42(3) position in the regulatory visit protocol',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
  notes:
    'OPEN_QUESTION: the Act does not address how section 42(3) interacts with legal professional privilege. Take advice rather than deciding this in the moment.',
});

c({
  control_id: 'PDPA-043-001',
  requirement_id: 'REQ-043-1',
  section_number: '43',
  paragraph: '(a)-(d)',
  legal_reference: 'Section 43(a)-(d)',
  legal_requirement:
    'A person who obstructs or impedes the Commission in the exercise of its powers, fails to provide assistance or information requested by the Commission, refuses to allow the Commission to enter any premises or to take any document or device with personal data, or gives to the Commission any information which is false or misleading, commits an offence.',
  control_title: 'Non-obstruction of the Commission',
  control_description:
    'The organisation does not obstruct or impede the Commission, provides requested assistance and information, permits lawful entry, and gives accurate information.',
  plain_language_question:
    'Are your people instructed to cooperate fully with the Commission, allow lawful entry, and never give it information that is false or misleading?',
  why_this_matters:
    'Each of the four limbs is a criminal offence carrying a fine of up to five million shillings or up to two years imprisonment, or both - independent of the original complaint.',
  implementation_guidance:
    'Set the cooperation expectation in policy and in the regulatory visit protocol. Require accuracy checks before any information is submitted to the Commission, and record what was provided and when.',
  expected_state:
    'A cooperation policy, verification of submissions before dispatch, and a record of information provided to the Commission.',
  response_type: 'YES_NO',
  answer_options: YN,
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Regulatory Visit Protocol', 'Data Protection Policy', 'Submission Review Record', 'Training Records'],
  evidence_strength: 'MODERATE',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. Section 43 creates a criminal offence with an express penalty, and it can be committed by an individual employee acting without instruction.',
  remediation_guidance:
    'Issue the cooperation policy, brief staff, and introduce a review step before any submission to the Commission.',
  suggested_task: 'Issue a Commission cooperation policy and brief relevant staff',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 43 provides a fine of not less than TZS 100,000 and not exceeding TZS 5,000,000, or imprisonment for not more than two years, or both. This penalty applies to section 43 specifically.',
});

c({
  control_id: 'PDPA-045-001',
  requirement_id: 'REQ-045-1',
  section_number: '45',
  subsection: '45(1)',
  legal_reference: 'Sections 45(1) and 45(2)',
  legal_requirement:
    'Where the Commission is satisfied that a person has failed to comply with any provision of this Act, it may serve an enforcement notice requiring that person to rectify the failure within the period specified in the notice. The notice shall specify the provision contravened, the measures to be taken, a period of not less than twenty-one days within which the measures shall be implemented, and shall state any right to appeal.',
  control_title: 'Compliance with an enforcement notice within the specified period',
  control_description:
    'A process tracks enforcement notices, implements the specified measures within the stated period, and evidences completion.',
  plain_language_question:
    'If you received an enforcement notice, could you implement the required measures within the period given and prove you had done so?',
  why_this_matters:
    'The minimum period is twenty-one days. Failure to comply is what triggers a penalty notice under section 46, so this is the last off-ramp before a fine.',
  implementation_guidance:
    'Log the notice, the provision cited, the measures required and the deadline. Assign an executive owner, track to completion, and write to the Commission with evidence before the deadline. Note the notice must state any right to appeal - see PDPA-049-001.',
  expected_state:
    'An enforcement notice register with owner, deadline, evidence of completion and confirmation sent to the Commission.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Enforcement Notice Register', 'Remediation Plan', 'Completion Evidence', 'Commission Correspondence'],
  evidence_strength: 'STRONG',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'CRITICAL',
  risk_rationale:
    'DataGuard default risk classification: Critical. Non-compliance with an enforcement notice is the express precondition for a penalty notice under section 46 and moves the matter from remediable to punitive.',
  remediation_guidance:
    'Create the enforcement notice register and agree the executive escalation path before any notice arrives.',
  suggested_task: 'Establish an enforcement notice tracking and remediation process',
  suggested_task_priority: 'CRITICAL',
  source_type: 'ACT_EXPLICIT',
  notes:
    'The period specified in the notice shall not be less than twenty-one days. The Act does not set a maximum.',
});

c({
  control_id: 'PDPA-046-001',
  requirement_id: 'REQ-046-1',
  section_number: '46',
  subsection: '46(2)',
  paragraph: '(a)-(k)',
  legal_reference: 'Section 46(2)(a)-(k)',
  legal_requirement:
    'In deciding whether to give a penalty notice and determining the amount, the Commission shall have regard to the nature, gravity and duration of the failure; its intentional or negligent character; action taken to mitigate damage including technical and organisational measures; previous failures; the degree of cooperation with the Commission; the categories of personal data affected; the manner in which the failure became known including whether the controller or processor notified the Commission; compliance with previous notices; adherence to codes of ethics or terms of registration; whether the penalty would be effective; and any other aggravating or mitigating factor including financial benefits gained or losses suffered.',
  control_title: 'Readiness to evidence the section 46(2) mitigating factors',
  control_description:
    'The organisation maintains records that would evidence the mitigating factors the Commission must weigh when deciding on and setting a penalty.',
  plain_language_question:
    'If the Commission were deciding whether to fine you, could you produce evidence of your safeguards, your cooperation, your self-reporting and your code of ethics?',
  why_this_matters:
    'The eleven factors are set out in the Act, and several of them are things you either recorded at the time or cannot show at all - self-notification, cooperation, and mitigation measures in particular.',
  implementation_guidance:
    'Map the factors to existing records: safeguards to the security programme, mitigation to the incident log, self-notification to the breach notification log, cooperation to Commission correspondence, and adherence to the section 65 code of ethics. Keep them retrievable together.',
  expected_state:
    'A mapping of the section 46(2) factors to retrievable evidence, reviewed annually.',
  required: false,
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Incident Log', 'Breach Notification Log', 'Commission Correspondence', 'Code of Ethics', 'Security Policy'],
  evidence_strength: 'MODERATE',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. This does not prevent a contravention, but it materially affects the outcome. It is not itself a statutory duty.',
  remediation_guidance:
    'Map the eleven factors to your existing evidence and close the gaps in record keeping.',
  suggested_task: 'Map the section 46(2) penalty factors to retrievable evidence',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_DERIVED',
  notes:
    'ACT_DERIVED. Section 46(2) directs the Commission, not the organisation. DataGuard must not convert these factors into a compliance score or represent evidence readiness as reducing any legal liability.',
});

c({
  control_id: 'PDPA-047-001',
  requirement_id: 'REQ-047-1',
  section_number: '47',
  legal_reference: 'Section 47',
  legal_requirement:
    'The maximum amount of the penalty that may be imposed by the Commission in a penalty notice in relation to contravention of provisions of this Act is one hundred million shillings.',
  control_title: 'Reference record - statutory ceiling on administrative fines',
  control_description:
    'Reference record capturing the statutory maximum administrative penalty. It is not an assessable control and must not be used to score risk.',
  plain_language_question:
    'Reference only - no response required. The maximum administrative penalty the Commission may impose in a penalty notice is TZS 100,000,000.',
  why_this_matters:
    'This is the statutory ceiling for administrative fines under section 47. It is not the penalty for any particular control, and it is separate from the criminal penalties in sections 43, 60, 61 and 63.',
  implementation_guidance:
    'Use this record for reference in board reporting only. Do not attribute this figure to any individual control, and do not use it to derive risk scores.',
  expected_state: 'Not applicable. This is a reference record.',
  response_type: 'TEXT',
  answer_options: [],
  required: false,
  applicability: 'UNIVERSAL',
  evidence_required: 'NOT_APPLICABLE',
  evidence_examples: [],
  evidence_strength: 'NOT_APPLICABLE',
  evidence_review_frequency: 'ON_LEGISLATIVE_CHANGE',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'LOW',
  risk_rationale:
    'DataGuard default risk classification: Low. This is a reference record, not a control. The Act does not attach this maximum to any specific provision.',
  remediation_guidance: 'None. Reference record only.',
  suggested_task: '',
  suggested_task_priority: 'NONE',
  control_status: 'REFERENCE',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Do not state that any individual control carries a TZS 100,000,000 penalty. Section 47 sets a ceiling for administrative penalty notices under section 46 and says nothing about which contraventions attract what amount.',
});

c({
  control_id: 'PDPA-048-001',
  requirement_id: 'REQ-048-1',
  section_number: '48',
  legal_reference: 'Section 48',
  legal_requirement:
    'The Commission may, upon application or on its own motion, review its decision or direction given in accordance with the provisions of this Part, and after review may reverse, alter or revoke it.',
  control_title: 'Use of the review of decision route',
  control_description:
    'The organisation knows it may apply to the Commission for review of a decision or direction, and who internally would prepare such an application.',
  plain_language_question:
    'Do you know that you can ask the Commission to review a decision or direction it has given, and who would prepare that request?',
  why_this_matters:
    'Review is often quicker and less costly than appealing to the High Court, but only if the option is known while the deadline for the alternative is still open.',
  implementation_guidance:
    'Record the review route in the regulatory response plan alongside the section 49 appeal route, with a named owner and a decision point for choosing between them.',
  expected_state:
    'Review and appeal routes documented in the regulatory response plan with a named owner.',
  required: false,
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Regulatory Response Plan', 'Escalation Matrix'],
  evidence_strength: 'WEAK',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'LOW',
  risk_rationale:
    'DataGuard default risk classification: Low. This is a remedy available to the organisation, not a duty imposed on it.',
  remediation_guidance: 'Add the review route to the regulatory response plan.',
  suggested_task: 'Document the section 48 review route in the regulatory response plan',
  suggested_task_priority: 'LOW',
  source_type: 'ACT_EXPLICIT',
  notes: 'OPEN_QUESTION: the Act sets no time limit for applying for a review under section 48.',
});

c({
  control_id: 'PDPA-049-001',
  requirement_id: 'REQ-049-1',
  section_number: '49',
  legal_reference: 'Section 49',
  legal_requirement:
    'A person who is aggrieved with the administrative action taken by the Commission, including the directions given in the enforcement notice or penalty imposed in the penalty notice, may appeal to the High Court.',
  control_title: 'Awareness and preparedness for appeal to the High Court',
  control_description:
    'The organisation knows that administrative action by the Commission may be appealed to the High Court, and has a route to instruct counsel promptly.',
  plain_language_question:
    'If you disagreed with an enforcement notice or a penalty, do you know that you can appeal to the High Court and who would instruct counsel?',
  why_this_matters:
    'An enforcement notice must state any right to appeal. Being ready to act on it quickly preserves options that a delayed response can close off.',
  implementation_guidance:
    'Record the appeal route in the regulatory response plan with counsel contact details. Note that an enforcement notice under section 45(2)(d) must state any right to appeal.',
  expected_state:
    'The appeal route and counsel contacts are recorded in the regulatory response plan.',
  required: false,
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Regulatory Response Plan', 'External Counsel Retainer', 'Escalation Matrix'],
  evidence_strength: 'WEAK',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'LOW',
  risk_rationale:
    'DataGuard default risk classification: Low. This is a right, not a duty. It is recorded so it is not lost through delay.',
  remediation_guidance: 'Add the section 49 appeal route and counsel contacts to the regulatory response plan.',
  suggested_task: 'Document the section 49 High Court appeal route',
  suggested_task_priority: 'LOW',
  source_type: 'ACT_EXPLICIT',
  notes: 'OPEN_QUESTION: the Act does not state the period within which an appeal to the High Court must be lodged.',
});

c({
  control_id: 'PDPA-050-001',
  requirement_id: 'REQ-050-1',
  section_number: '50',
  subsection: '50(1)',
  legal_reference: 'Section 50(1)',
  legal_requirement:
    'Subject to the provisions of section 37, the Commission may, in addition to any penalty given under this Act, order a data controller or data processor who causes damages to the data subject following contraventions of any provisions of this Act to pay compensation to the data subject.',
  control_title: 'Compliance with a Commission compensation order',
  control_description:
    'The organisation can identify affected data subjects and make payment in compliance with a Commission compensation order, and records the outcome.',
  plain_language_question:
    'If the Commission ordered you to pay compensation to affected individuals, could you identify them, pay them and evidence that you had?',
  why_this_matters:
    'Compensation may be ordered in addition to a penalty. Identifying affected individuals depends on record keeping that has to exist before the order arrives.',
  implementation_guidance:
    'Ensure incident records identify affected data subjects. Define the payment authorisation route with finance and confirm the position with insurers in advance.',
  expected_state:
    'Incident records that identify affected data subjects, plus a defined compensation payment route.',
  role_scope: 'CONTROLLER_AND_PROCESSOR',
  evidence_examples: ['Incident Log', 'Claims Register', 'Payment Records', 'Insurance Policy'],
  evidence_strength: 'MODERATE',
  risk_category: 'ENFORCEMENT',
  default_risk_level: 'MEDIUM',
  risk_rationale:
    'DataGuard default risk classification: Medium. Compensation is ordered after a contravention has already been established, so the primary control is upstream compliance.',
  remediation_guidance:
    'Ensure incident records capture affected data subjects and agree the compensation payment route with finance.',
  suggested_task: 'Ensure incident records identify affected data subjects for compensation purposes',
  suggested_task_priority: 'MEDIUM',
  source_type: 'ACT_EXPLICIT',
  notes:
    'Section 50(4) defines damage as including financial loss and damage not involving financial loss. Compensation under section 50 is in addition to any penalty.',
});

c({
  control_id: 'PDPA-050-002',
  requirement_id: 'REQ-050-2',
  section_number: '50',
  subsection: '50(2)',
  paragraph: '(b)',
  legal_reference: 'Sections 50(2)(b) and 50(3)',
  legal_requirement:
    'A data processor involved in processing of personal data shall be liable for damage caused by the processing if the processor has not complied with an obligation under the Act specifically directed to data processors, or has acted contrary to the data controller lawful instructions. A data controller or data processor shall not be liable if it proves that it is not in any way responsible for the event that caused the damage.',
  control_title: 'Processor compliance with controller lawful instructions',
  control_description:
    'Acting as a data processor, the organisation processes only on the controller documented lawful instructions and retains records evidencing that it did.',
  plain_language_question:
    'Where you process personal data for someone else, do you keep records showing you acted only on their lawful instructions?',
  why_this_matters:
    'Section 50(2)(b) makes processor liability turn on exactly this point, and section 50(3) allows a defence only where the processor proves it was not in any way responsible.',
  implementation_guidance:
    'Keep documented instructions from each controller, log deviations and the authority for them, and record refusals of unlawful instructions. Identify the processor-specific duties in the Act, notably sections 5, 27(4) and 42(3).',
  expected_state:
    'A documented instruction record per controller engagement, with deviations and refusals logged.',
  applicability: 'ROLE_SPECIFIC',
  applicability_question: 'Do you process personal data on behalf of another organisation?',
  role_scope: 'PROCESSOR',
  evidence_examples: ['Documented Processing Instructions', 'Processor Agreement', 'Instruction Deviation Log'],
  evidence_strength: 'STRONG',
  evidence_review_frequency: 'ANNUAL',
  risk_category: 'THIRD_PARTY',
  default_risk_level: 'HIGH',
  risk_rationale:
    'DataGuard default risk classification: High. This provision is the basis of direct processor liability for damage, and the evidence for it must be contemporaneous.',
  remediation_guidance:
    'Collect and file documented instructions from each controller and start logging deviations.',
  suggested_task: 'Maintain documented controller instructions for all processor engagements',
  suggested_task_priority: 'HIGH',
  source_type: 'ACT_EXPLICIT',
});
