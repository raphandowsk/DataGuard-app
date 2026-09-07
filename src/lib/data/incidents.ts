/** Incident cases and the breach-intake flow. Transcribed verbatim. */
export interface Incident {
  id: string;
  title: string;
  detected: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  stage: string;
  records: string;
  notified: boolean;
  source: string;
}

export const INCIDENTS: Incident[] = [
  { id: "INC-2026-004", title: "Beneficiary list emailed to the wrong ward officer", detected: "2 Sep 2026, 14:20", severity: "HIGH", stage: "Notified", records: "412 beneficiaries", notified: true, source: "Staff report" },
  { id: "INC-2026-003", title: "Laptop stolen from the Mwanza field office", detected: "18 Aug 2026, 08:05", severity: "CRITICAL", stage: "Investigating", records: "Unknown, device was encrypted", notified: true, source: "Staff report" },
  { id: "INC-2026-002", title: "Grievance tracker left accessible to all staff", detected: "30 Jul 2026, 11:40", severity: "MEDIUM", stage: "Closed", records: "86 complainants", notified: false, source: "Internal audit" },
  { id: "INC-2026-001", title: "Phishing email harvested a fundraising mailbox password", detected: "11 Jun 2026, 19:15", severity: "HIGH", stage: "Closed", records: "3,480 donors, no confirmed access", notified: true, source: "Processor alert" },
];

export const INCIDENT_STATS = [
  { v: "18h 50m", k: "Detection to notification", sub: "INC-2026-004" },
  { v: "45m", k: "Detection to containment", sub: "INC-2026-004" },
  { v: "4", k: "Incidents this year", sub: "3 notified to the Commission" },
  { v: "2", k: "Open cases", sub: "1 awaiting closure" },
];

export const INCIDENT_NOTE =
  "Section 27(5) requires the controller to notify the Commission without any undue delay of a security breach affecting personal data processed by or on behalf of the controller. The Act sets no fixed hour count, so the internal target below is the organisation’s own commitment.";

export interface TimelineEntry {
  t: string;
  label: string;
  who: string;
  state: "done" | "active" | "todo";
  note: string;
}

export const INC_TIMELINE: TimelineEntry[] = [
  { t: "2 Sep, 14:20", label: "Breach detected", who: "Reported by Amina Rashid", state: "done", note: "A programme officer forwarded an enrolment spreadsheet to a ward officer outside the programme." },
  { t: "2 Sep, 15:05", label: "Contained", who: "Joseph Mwakalinga", state: "done", note: "Message recalled, recipient confirmed deletion in writing, mailbox rule added." },
  { t: "2 Sep, 17:30", label: "Assessed as affecting personal data", who: "Neema Kilonzo, DPO", state: "done", note: "412 beneficiary records including national ID numbers. Sensitive data involved." },
  { t: "3 Sep, 09:10", label: "Commission notified", who: "Neema Kilonzo, DPO", state: "done", note: "Notification filed 18 hours 50 minutes after detection. Section 27(5) requires notification without undue delay; the Act sets no fixed hour count." },
  { t: "4 Sep, 11:00", label: "Data subjects informed", who: "Programme team", state: "active", note: "Ward meetings scheduled for the affected households. Not an express duty under the Act; recorded as a voluntary step." },
  { t: "Pending", label: "Lessons learned and closure", who: "Unassigned", state: "todo", note: "Remediation task open against PDPA-027-005." },
];

export interface IntakeField {
  label: string;
  value: string;
  kind: "text" | "value" | "flag";
}
export interface IntakeStep {
  n: number;
  label: string;
  title: string;
  body: string;
  fields: IntakeField[];
}

export const INTAKE: IntakeStep[] = [
  {
    n: 1, label: "What happened", title: "Describe what happened",
    body: "Record it in plain terms while it is fresh. You can refine this later; what matters now is the time you became aware.",
    fields: [
      { label: "What happened", value: "An enrolment spreadsheet was emailed to a ward officer outside the programme.", kind: "text" },
      { label: "When did you become aware", value: "2 September 2026, 14:20", kind: "value" },
      { label: "How did you find out", value: "Reported by a member of staff", kind: "value" },
      { label: "Is it still happening", value: "No, contained at 15:05", kind: "value" },
    ],
  },
  {
    n: 2, label: "What data", title: "What personal data was involved?",
    body: "This decides whether the incident is a security breach affecting personal data, which is what section 27(5) turns on.",
    fields: [
      { label: "Activity affected", value: "Beneficiary enrolment", kind: "value" },
      { label: "Categories involved", value: "Name, national ID, phone, household size, ward", kind: "value" },
      { label: "Sensitive data involved", value: "Yes, national identification numbers", kind: "flag" },
      { label: "People affected", value: "412 beneficiaries", kind: "value" },
      { label: "Data left your control", value: "Yes, to one named recipient", kind: "flag" },
    ],
  },
  { n: 3, label: "Assessment", title: "Is this notifiable?", body: "DataGuard records your assessment and the reasoning behind it. The decision is yours; the product does not make it for you.", fields: [] },
  {
    n: 4, label: "Notify", title: "Notify the Commission",
    body: "Section 27(5) requires notification without any undue delay. The elapsed time is shown so the record speaks for itself.",
    fields: [
      { label: "Nature of the breach", value: "Unauthorised disclosure of beneficiary enrolment records to one recipient outside the programme.", kind: "text" },
      { label: "Categories and approximate numbers", value: "Name, national ID, phone, household size, ward. 412 data subjects.", kind: "text" },
      { label: "Likely consequences", value: "Risk of identity misuse from exposed national ID numbers. Recipient confirmed deletion in writing.", kind: "text" },
      { label: "Measures taken", value: "Message recalled, deletion confirmed, mailbox rule added, access review brought forward.", kind: "text" },
      { label: "Contact point", value: "Neema Kilonzo, DPO, dpo@mazingira.or.tz", kind: "value" },
    ],
  },
];

export const INTAKE_TESTS = [
  { q: "Was personal data involved?", a: "Yes", tone: "bad" },
  { q: "Was it a security breach rather than an authorised disclosure?", a: "Yes", tone: "bad" },
  { q: "Was the data processed by or on behalf of this organisation?", a: "Yes", tone: "bad" },
  { q: "Was sensitive personal data involved?", a: "Yes, national ID numbers", tone: "bad" },
  { q: "Has the exposure been contained?", a: "Yes, within 45 minutes", tone: "good" },
];

export const INTAKE_CLOCK = "Aware at 2 Sep, 14:20 · 18h 50m elapsed at notification";
export const INTAKE_DECISION =
  "Assessed as notifiable. Personal data was disclosed without authorisation, sensitive categories were involved, and the data left the organisation’s control.";
export const INTAKE_DECISION_NOTE =
  "Section 27(5) does not set an hour count. The elapsed time is recorded so that the question of undue delay can be judged on the facts rather than asserted.";
