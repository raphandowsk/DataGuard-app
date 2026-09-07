/** Controls assessed in the prototype (a curated section-27 slice). Transcribed verbatim. */
export interface Control {
  id: string;
  ref: string;
  requirement: string;
  title: string;
  risk: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  sourceType: string;
  actEvidence: boolean;
  category: string;
  question: string;
  why: string;
  statute: string;
  control: string;
  expected: string;
  guidance: string;
  remediation: string;
  task: string;
  riskRationale: string;
  suggested: string[];
  review: string;
  roleScope: string;
}

export const CONTROLS: Control[] = [
  {
    id: "PDPA-027-001", ref: "Section 27(1)", requirement: "REQ-027-1",
    title: "Reasonable security safeguards programme", risk: "CRITICAL", sourceType: "ACT_EXPLICIT",
    actEvidence: true, category: "Security",
    question: "Do you have reasonable safeguards in place that protect personal data, and have you written down why they are the right ones for your circumstances?",
    why: "This is the umbrella security duty in the Act. The standard is what is reasonable in your circumstances, so the reasoning behind your choices matters as much as the controls themselves.",
    statute: "A data controller and his representatives shall ensure that personal data is protected by such security safeguards as are reasonable in the circumstances necessary for the protection of personal data.",
    control: "A documented set of security safeguards protects personal data, and their reasonableness in the circumstances has been assessed and recorded.",
    expected: "An approved security policy, a safeguards register, and a documented reasonableness assessment reviewed at least annually.",
    guidance: "Maintain an approved security policy and a register of implemented safeguards. Record the assessment of reasonableness against the four factors in section 27(2), which are assessed separately by controls PDPA-027-007 to PDPA-027-010.",
    remediation: "Approve a security policy, inventory current safeguards, and document the reasonableness assessment against the section 27(2) factors.",
    task: "Establish and document reasonable security safeguards for personal data",
    riskRationale: "DataGuard default risk classification: Critical. Section 27(1) is the central security obligation of the Act and underpins the section 5(g) principle and the section 27(5) breach duty.",
    suggested: ["Security Policy", "Safeguards Register", "Risk Assessment", "Audit Report"],
    review: "Annual", roleScope: "Controller and processor",
  },
  {
    id: "PDPA-027-002", ref: "Section 27(1)", requirement: "REQ-027-1",
    title: "Protection against negligent loss", risk: "CRITICAL", sourceType: "ACT_EXPLICIT",
    actEvidence: false, category: "Security",
    question: "Are you protected against personal data being lost through carelessness — for example lost laptops, lost files, or failed backups?",
    why: "Section 27(1) names negligent loss as a distinct harm to protect against. Treating it separately makes it clear whether you actually have a control for it rather than a general assurance that security is handled.",
    statute: "A data controller and his representatives shall ensure that personal data is protected by such security safeguards as are reasonable in the circumstances necessary for the protection of personal data against negligent loss.",
    control: "Specific technical and organisational safeguards address the risk of negligent loss of personal data, and their operation is evidenced.",
    expected: "Named safeguards addressing negligent loss are implemented, owned, and evidenced by operating records rather than by policy text alone.",
    guidance: "Cover device encryption and asset tracking, backup and restore testing, physical file custody, and secure transfer of media. Test restores rather than assuming backups work.",
    remediation: "Identify the systems holding personal data, select proportionate safeguards against negligent loss, assign an owner, and produce operating evidence.",
    task: "Implement and evidence controls against negligent loss of personal data",
    riskRationale: "DataGuard default risk classification: Critical. Negligent loss is expressly named in section 27(1) and is the most frequent cause of reportable incidents.",
    suggested: ["Backup and Restore Test Records", "Asset Register", "Device Encryption Report", "Security Policy"],
    review: "Quarterly", roleScope: "Controller and processor",
  },
  {
    id: "PDPA-027-004", ref: "Section 27(1)", requirement: "REQ-027-1",
    title: "Protection against unauthorised alteration", risk: "HIGH", sourceType: "ACT_EXPLICIT",
    actEvidence: false, category: "Security",
    question: "Are you protected against personal data being changed by someone who is not authorised to change it?",
    why: "Section 27(1) names unauthorised alteration as a distinct harm to protect against. Treating it separately makes it clear whether you actually have a control for it rather than a general assurance that security is handled.",
    statute: "A data controller and his representatives shall ensure that personal data is protected by such security safeguards as are reasonable in the circumstances necessary for the protection of personal data against unauthorised alteration.",
    control: "Specific technical and organisational safeguards address the risk of unauthorised alteration of personal data, and their operation is evidenced.",
    expected: "Named safeguards addressing unauthorised alteration are implemented, owned, and evidenced by operating records rather than by policy text alone.",
    guidance: "Enforce write permissions by role, keep tamper-evident change logs, and reconcile critical fields periodically. This control also supports the section 29(2) duty to preserve pre-amendment records.",
    remediation: "Identify the systems holding personal data, select proportionate safeguards against unauthorised alteration, assign an owner, and produce operating evidence.",
    task: "Enforce and log write access controls over personal data",
    riskRationale: "DataGuard default risk classification: High. Unauthorised alteration is expressly named in section 27(1), is criminalised by section 61, and silently corrupts the accuracy duties in sections 5(d) and 24.",
    suggested: ["Access Control Procedure", "Change and Audit Logs", "Segregation of Duties Matrix"],
    review: "Quarterly", roleScope: "Controller and processor",
  },
  {
    id: "PDPA-027-005", ref: "Section 27(1)", requirement: "REQ-027-1",
    title: "Protection against unauthorised access", risk: "CRITICAL", sourceType: "ACT_EXPLICIT",
    actEvidence: false, category: "Security",
    question: "Are you protected against people seeing personal data when they have no business reason to see it?",
    why: "Section 27(1) names unauthorised access as a distinct harm to protect against. Treating it separately makes it clear whether you actually have a control for it rather than a general assurance that security is handled.",
    statute: "A data controller and his representatives shall ensure that personal data is protected by such security safeguards as are reasonable in the circumstances necessary for the protection of personal data against unauthorised access.",
    control: "Specific technical and organisational safeguards address the risk of unauthorised access of personal data, and their operation is evidenced.",
    expected: "Named safeguards addressing unauthorised access are implemented, owned, and evidenced by operating records rather than by policy text alone.",
    guidance: "Apply least privilege, review access periodically, enforce strong authentication, and log and monitor access to sensitive records.",
    remediation: "Identify the systems holding personal data, select proportionate safeguards against unauthorised access, assign an owner, and produce operating evidence.",
    task: "Implement least privilege and periodic access reviews for personal data",
    riskRationale: "DataGuard default risk classification: Critical. Unauthorised access is expressly named in section 27(1) and is the precondition for most unlawful disclosure offences under section 60.",
    suggested: ["Access Control Procedure", "Access Review Records", "Authentication Policy", "Access Logs"],
    review: "Quarterly", roleScope: "Controller and processor",
  },
  {
    id: "PDPA-027-011", ref: "Section 27(3)", requirement: "REQ-027-3",
    title: "Data protection officer appointed", risk: "CRITICAL", sourceType: "ACT_EXPLICIT · REGULATORY DETAIL PENDING",
    actEvidence: true, category: "Governance",
    question: "Have you formally appointed someone as your data protection officer?",
    why: "The Act requires an appointment. Naming a person informally is not the same thing, and the appointment is one of the first things a regulator will ask to see.",
    statute: "The data controller and data processor, as the case may be, shall appoint a data protection officer.",
    control: "A named individual has been formally appointed as data protection officer for the organisation in its capacity as controller or processor.",
    expected: "A signed, dated appointment letter is on file for a currently serving data protection officer.",
    guidance: "Issue a signed appointment letter identifying the individual, the effective date, the reporting line and the authority granted. Record the contact details and keep them current.",
    remediation: "Select a suitable individual, issue a signed appointment letter, and record the appointment in the compliance file.",
    task: "Appoint a data protection officer and issue a signed appointment letter",
    riskRationale: "DataGuard default risk classification: Critical. The appointment is mandatory for both controllers and processors, it is binary and easily verified, and its absence is a visible failure that undermines every other control.",
    suggested: ["DPO Appointment Letter", "Board or Management Resolution", "Organisation Chart"],
    review: "Annual", roleScope: "Controller and processor",
  },
  {
    id: "PDPA-027-016", ref: "Section 27(5)", requirement: "REQ-027-5",
    title: "Security breach notification to the Commission without undue delay", risk: "CRITICAL", sourceType: "ACT_EXPLICIT",
    actEvidence: true, category: "Breach notification",
    question: "Do you have a procedure that notifies the Commission without undue delay whenever there is a security breach affecting personal data — including breaches at your suppliers?",
    why: "The duty covers breaches at your processors as well as your own systems, and the clock is described as without undue delay. A procedure written after the breach is already too late.",
    statute: "The data controller shall notify the Commission, without any undue delay, of any security breach affecting personal data being processed by or on behalf of the data controller.",
    control: "A documented procedure ensures the Commission is notified without undue delay of any security breach affecting personal data processed by or on behalf of the organisation.",
    expected: "An approved breach notification procedure, tested at least annually, with processor notification obligations in contracts.",
    guidance: "Document the notification procedure with named roles, a decision path, and contract terms obliging processors to alert you promptly. Rehearse it. The Act sets no fixed hour count, so any internal deadline you adopt is your own commitment.",
    remediation: "Write and approve the breach notification procedure, add processor alerting obligations to contracts, and run a tabletop exercise.",
    task: "Implement and test a security breach notification procedure",
    riskRationale: "DataGuard default risk classification: Critical. This is an express, time-bound duty owed directly to the regulator, and section 46(2)(g) treats how a failure came to the attention of the Commission as a factor in setting any penalty.",
    suggested: ["Incident Response Procedure", "Breach Notification Log", "Breach Response Test Record", "Processor Agreement"],
    review: "Annual", roleScope: "Controller and processor",
  },
];

export const ANSWERS = ["Implemented", "Partially implemented", "Not implemented", "Not applicable", "I do not know"];

/** Assessment left-rail: [name, legal ref, control count, coverage %]. */
export const ASSESS_SECTIONS: Array<[string, string, number, number]> = [
  ["Preliminary and principles", "Sections 2–5", 12, 83],
  ["Registration", "Sections 14–21", 11, 88],
  ["Collection and use", "Sections 22–26", 14, 69],
  ["Security", "Section 27", 17, 58],
  ["Retention", "Section 28", 6, 64],
  ["Rights of data subjects", "Sections 29–36", 18, 77],
  ["Sensitive personal data", "Sections 37–42", 15, 66],
];

/** Static activity history shown on the control detail page. */
export const CONTROL_ACTIVITY = [
  { who: "Joseph Mwakalinga", what: "uploaded Access Control Procedure v3.pdf", when: "Today, 09:42" },
  { who: "Neema Kilonzo", what: "set the answer to Partially implemented", when: "21 June 2026" },
  { who: "Grace Mtei", what: "raised risk RSK-027 from this control", when: "21 June 2026" },
  { who: "System", what: "control activated from matrix v1.0.0", when: "3 September 2026" },
];
