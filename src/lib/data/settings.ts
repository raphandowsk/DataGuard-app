/** Settings, framework migration and onboarding. Transcribed verbatim. */

export interface Role {
  role: string;
  who: string;
  n: number;
  perms: string;
}

export const ROLES: Role[] = [
  { role: "Data protection officer", who: "Neema Kilonzo", n: 1, perms: "Everything, including rights requests and incident notification" },
  { role: "Compliance", who: "Grace Mtei", n: 1, perms: "Assess controls, manage risks and tasks, generate reports" },
  { role: "IT and security", who: "Joseph Mwakalinga", n: 2, perms: "Security controls, evidence upload, incident containment" },
  { role: "HR", who: "Amina Rashid", n: 2, perms: "Staff and volunteer activities, consent records" },
  { role: "Programme lead", who: "6 users", n: 6, perms: "Own programme activities and beneficiary data only" },
  { role: "Read only", who: "4 users", n: 4, perms: "View the dashboard and reports, change nothing" },
  { role: "External consultant", who: "Raphael Kimaro", n: 1, perms: "Full access, time-boxed, all actions attributed to their account" },
];

export const ORG_PROFILE = [
  { k: "Legal name", v: "Mazingira Trust" },
  { k: "Registration", v: "NGO/R/1284, registered 2011" },
  { k: "Sector", v: "Environmental non-governmental organisation" },
  { k: "Head office", v: "Dar es Salaam, Tanzania" },
  { k: "Field offices", v: "Mwanza, Morogoro" },
  { k: "Staff", v: "96 employees, 218 volunteers" },
  { k: "Role under the Act", v: "Controller and processor" },
];

export const DPO_PROFILE = [
  { k: "Data protection officer", v: "Neema Kilonzo" },
  { k: "Appointed", v: "Appointment letter not on file" },
  { k: "Reporting line", v: "Executive Director" },
  { k: "Public contact", v: "dpo@mazingira.or.tz" },
  { k: "Registration status", v: "Certificate expires December 2026" },
];

export const DPO_WARNING =
  "The Act requires a formal appointment. A named person without a signed letter is the open critical finding on PDPA-027-011.";

export const NOTIF_SETTINGS = [
  { label: "Task assigned to me", on: true },
  { label: "Task overdue", on: true },
  { label: "New rights request received", on: true },
  { label: "Incident reported", on: true },
  { label: "Evidence expiring within 30 days", on: true },
  { label: "Registration renewal window opens", on: true },
  { label: "Weekly coverage digest", on: false },
  { label: "Consultant activity in my workspace", on: false },
];

/* ---- Framework migration ---- */
export interface Migration {
  id: string;
  title: string;
  change: string;
  impact: string;
  detail: string;
  act: boolean;
}

export const MIGRATION: Migration[] = [
  { id: "PDPA-027-011", title: "Data protection officer appointed", change: "Guidance expanded", impact: "Answer preserved", detail: "Regulatory detail on the appointment now published. Expected evidence adds the notification of the appointment to the Commission.", act: false },
  { id: "PDPA-027-016", title: "Security breach notification to the Commission", change: "Expected state changed", impact: "Reassessment needed", detail: "Guidance now names a 72 hour internal target as good practice. The Act still says without undue delay; the target remains your own commitment.", act: false },
  { id: "PDPA-047-003", title: "Transfer safeguards documented per destination", change: "New control", impact: "Unanswered", detail: "Split out of PDPA-005-008 so each destination carries its own record rather than one combined answer.", act: true },
  { id: "PDPA-005-008", title: "No transfer contrary to the Act", change: "Scope narrowed", impact: "Answer preserved", detail: "Per-destination detail moved to PDPA-047-003. This control now covers the organisation-level prohibition only.", act: true },
  { id: "PDPA-023-002", title: "Pre-collection notice given", change: "Wording clarified", impact: "Answer preserved", detail: "Question rewritten in plainer terms. No change to what the control requires.", act: false },
  { id: "PDPA-037-009", title: "Sensitive data basis recorded per category", change: "Risk raised", impact: "Answer preserved", detail: "Product risk classification raised from High to Critical following enforcement activity in comparable jurisdictions.", act: false },
  { id: "PDPA-021-004", title: "Registration particulars kept current", change: "Merged", impact: "Answer migrated", detail: "Merged into PDPA-021-002. Your existing answer and evidence moved across.", act: false },
];

export const MIGRATION_STATS = [
  { v: "7", k: "Controls changed", sub: "Of 123 in the framework" },
  { v: "1", k: "New control", sub: "Unanswered until you assess it" },
  { v: "1", k: "Needs reassessment", sub: "Expected state changed" },
  { v: "5", k: "Answers preserved", sub: "No action needed" },
];

export const MIGRATION_NOTE =
  "Framework updates never silently change an answer. Where a requirement moved, the answer and its evidence move with it; where the expected state changed, the control is flagged for you to look at again rather than reset.";

/* ---- Onboarding wizard ---- */
export interface OnboardingStep {
  n: number;
  label: string;
  title: string;
  body: string;
  fields: string[];
}

export const ONBOARDING: OnboardingStep[] = [
  { n: 1, label: "Organisation", title: "Tell us about your organisation", body: "Legal name, registration number, sector and offices. This determines which registration controls apply to you and whether you register as a controller, a processor, or both.", fields: ["Legal name", "Registration number", "Sector", "Head office region"] },
  { n: 2, label: "Role", title: "How does your organisation handle personal data?", body: "Controllers decide why and how personal data is processed. Processors act on someone else’s instructions. Many organisations are both, and the Act places different duties on each.", fields: ["Controller", "Processor", "Both"] },
  { n: 3, label: "Framework", title: "Confirm your framework scope", body: "Tanzania PDPA 2022 maps to 123 controls across 96 requirements. Controls flagged as sensitive data or cross-border only activate if they apply to you.", fields: ["Tanzania PDPA 2022"] },
  { n: 4, label: "People", title: "Who will do this work?", body: "Invite your data protection officer and the people who own security, HR and programmes. Roles decide what each person can see and change.", fields: ["DPO", "Compliance", "IT", "HR"] },
  { n: 5, label: "Baseline", title: "Start with a baseline assessment", body: "We open with 18 questions that decide which of the 123 controls are in scope. Answers save as you go and you can leave anything as I do not know.", fields: ["Begin baseline"] },
];
