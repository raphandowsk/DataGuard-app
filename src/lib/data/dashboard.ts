import type { Screen } from "@/lib/store";

/** Coverage headline numbers (prototype dashboard). */
export const COVERAGE = {
  pct: 71,
  delta: "Up 6 points since the June assessment",
  assessed: "106",
  ofTotal: "123",
  assessmentCoverage: "86%",
  evidenceCoverage: "62%",
};

/** Coverage by domain: [name, legal ref, percent]. */
export const DOMAINS: Array<[string, string, number]> = [
  ["Registration", "Sections 14–21", 88],
  ["Governance", "Sections 27(3), 30", 74],
  ["Lawfulness and collection", "Sections 5, 22–24", 69],
  ["Transparency", "Section 23(2)", 81],
  ["Security", "Section 27", 58],
  ["Retention and disposal", "Section 28", 64],
  ["Data subject rights", "Sections 29–36", 77],
  ["Third parties", "Section 27(4)", 52],
  ["Cross-border transfers", "Sections 5(h), 47", 41],
  ["Sensitive data", "Sections 37–42", 66],
];

export interface PriorityAction {
  severity: "CRITICAL" | "HIGH";
  title: string;
  control: string;
  ref: string;
  owner: string;
  due: string;
  overdue: boolean;
  action: string;
  target: number | null; // control index to open in assessment, or null → tasks
}

export const PRIORITY_ACTIONS: PriorityAction[] = [
  { severity: "CRITICAL", title: "No signed appointment on file for your data protection officer", control: "PDPA-027-011", ref: "s.27(3)", owner: "Grace Mtei", due: "Overdue 4 days", overdue: true, action: "Assess", target: 4 },
  { severity: "CRITICAL", title: "Breach notification procedure has never been tested", control: "PDPA-027-016", ref: "s.27(5)", owner: "Joseph Mwakalinga", due: "Due 12 Sep", overdue: false, action: "Assess", target: 5 },
  { severity: "CRITICAL", title: "Registration certificate expires inside the renewal window", control: "PDPA-016-002", ref: "s.16(2)", owner: "Neema Kilonzo", due: "Due 30 Sep", overdue: false, action: "Open task", target: null },
  { severity: "HIGH", title: "Beneficiary records readable by staff with no programme role", control: "PDPA-027-005", ref: "s.27(1)", owner: "Joseph Mwakalinga", due: "Due 19 Sep", overdue: false, action: "Assess", target: 3 },
  { severity: "HIGH", title: "Six of eleven processors have no written contract", control: "PDPA-027-013", ref: "s.27(4)", owner: "Grace Mtei", due: "Due 3 Oct", overdue: false, action: "Open task", target: null },
];

export const RISK_COUNTS = [
  { label: "Critical", n: 3, color: "#b23a2f", range: "15–25" },
  { label: "High", n: 4, color: "#c67139", range: "10–14" },
  { label: "Medium", n: 3, color: "#c9a227", range: "5–9" },
  { label: "Low", n: 2, color: "#7a8a5e", range: "1–4" },
];

export const ACTIVITY = [
  { who: "Joseph Mwakalinga", what: "uploaded evidence", detail: "Access Control Procedure v3.pdf", when: "09:42", icon: "file-up" },
  { who: "Neema Kilonzo", what: "changed a control answer to Partially implemented", detail: "PDPA-027-001", when: "09:37", icon: "clipboard-check" },
  { who: "Amina Rashid", what: "completed a remediation task", detail: "Publish the volunteer privacy notice", when: "Yesterday", icon: "circle-check" },
  { who: "Grace Mtei", what: "raised a risk", detail: "RSK-042 · Grant management processor", when: "Yesterday", icon: "triangle-alert" },
  { who: "Neema Kilonzo", what: "approved a policy", detail: "Data Protection Policy v2.1", when: "2 Sep", icon: "book-check" },
];

/** Command palette "Go to" targets, transcribed from the prototype. */
export const GOTO: Array<{ label: string; icon: string; hint: string | null; screen: Screen }> = [
  { label: "Dashboard", icon: "layout-dashboard", hint: null, screen: "dashboard" },
  { label: "Assessment", icon: "clipboard-check", hint: null, screen: "assessment" },
  { label: "Risk register", icon: "triangle-alert", hint: null, screen: "risks" },
  { label: "Tasks", icon: "circle-check-big", hint: null, screen: "tasks" },
  { label: "Reports", icon: "chart-no-axes-column", hint: null, screen: "reports" },
  { label: "Data inventory", icon: "table-2", hint: null, screen: "inventory" },
  { label: "Data map", icon: "git-fork", hint: null, screen: "map" },
  { label: "Cross-border transfers", icon: "globe", hint: null, screen: "transfers" },
  { label: "Rights requests", icon: "user-round-cog", hint: null, screen: "rights" },
  { label: "Processor register", icon: "building-2", hint: null, screen: "processors" },
  { label: "Incidents", icon: "siren", hint: null, screen: "incidents" },
  { label: "Sensitive data register", icon: "shield-alert", hint: null, screen: "sensitive" },
  { label: "Retention schedule", icon: "timer", hint: null, screen: "retention" },
  { label: "Consent records", icon: "badge-check", hint: null, screen: "consent" },
  { label: "Contracts", icon: "file-text", hint: null, screen: "contracts" },
  { label: "Policy library", icon: "book-text", hint: null, screen: "policies" },
  { label: "Evidence vault", icon: "archive", hint: null, screen: "evidence" },
  { label: "Settings", icon: "settings", hint: null, screen: "settings" },
  { label: "Audit trail", icon: "history", hint: null, screen: "audit" },
  { label: "Report a breach", icon: "siren", hint: "Intake", screen: "incidentIntake" },
  { label: "Framework update", icon: "arrow-up-circle", hint: "v1.1.0", screen: "frameworkMigration" },
  { label: "Consultant workspace", icon: "building-2", hint: null, screen: "portfolio" },
];
