import type { Screen } from "@/lib/store";

export interface NavItem {
  id: Screen;
  icon: string;
  label: string;
  ready: boolean;
  badge?: string;
}
export interface NavGroup {
  label: string | null;
  items: NavItem[];
}

/** Sidebar navigation, transcribed from the prototype NAV. */
export const NAV: NavGroup[] = [
  { label: null, items: [{ id: "dashboard", icon: "layout-dashboard", label: "Dashboard", ready: true }] },
  {
    label: "Compliance",
    items: [
      { id: "assessment", icon: "clipboard-check", label: "Assessment", ready: true },
      { id: "control", icon: "list-checks", label: "Controls", ready: true },
      { id: "risks", icon: "triangle-alert", label: "Risks", ready: true },
      { id: "tasks", icon: "circle-check-big", label: "Tasks", ready: true },
    ],
  },
  {
    label: "Data",
    items: [
      { id: "inventory", icon: "table-2", label: "Data inventory", ready: true },
      { id: "map", icon: "git-fork", label: "Data map", ready: true },
      { id: "sensitive", icon: "shield-alert", label: "Sensitive data", ready: true },
      { id: "retention", icon: "timer", label: "Retention", ready: true },
      { id: "transfers", icon: "globe", label: "Transfers", ready: true },
    ],
  },
  {
    label: "People",
    items: [
      { id: "rights", icon: "user-round-cog", label: "Rights requests", ready: true },
      { id: "consent", icon: "badge-check", label: "Consent", ready: true },
    ],
  },
  {
    label: "Third parties",
    items: [
      { id: "processors", icon: "building-2", label: "Processors", ready: true },
      { id: "contracts", icon: "file-text", label: "Contracts", ready: true },
    ],
  },
  {
    label: null,
    items: [
      { id: "incidents", icon: "siren", label: "Incidents", ready: true },
      { id: "policies", icon: "book-text", label: "Policies", ready: true },
      { id: "evidence", icon: "archive", label: "Evidence vault", ready: true },
      { id: "reports", icon: "chart-no-axes-column", label: "Reports", ready: true },
      { id: "settings", icon: "settings", label: "Settings", ready: true },
    ],
  },
];

export interface PageMeta {
  crumb1: string;
  crumb2: string;
  title: string;
  sub: string;
}

/** Breadcrumb / title / subtitle per screen, transcribed from the prototype PAGES map. */
export const PAGES: Record<string, PageMeta> = {
  dashboard: { crumb1: "Mazingira Trust", crumb2: "Dashboard", title: "Your compliance health", sub: "Where you stand against the DataGuard mapping of the Tanzania Personal Data Protection Act, 2022." },
  assessment: { crumb1: "Compliance", crumb2: "Assessment", title: "Security of personal data", sub: "Seventeen controls sit under section 27. Answer in plain terms; the legal reference travels with every answer." },
  control: { crumb1: "Compliance · Controls", crumb2: "Control", title: "Control detail", sub: "Control detail, evidence and remediation for a single mapped requirement." },
  risks: { crumb1: "Compliance", crumb2: "Risks", title: "Risk register", sub: "Risks raised from control assessments, scored on the DataGuard product methodology." },
  tasks: { crumb1: "Compliance", crumb2: "Tasks", title: "Tasks", sub: "Remediation work generated from control findings, with the reason it exists attached." },
  reports: { crumb1: "Reports", crumb2: "Report centre", title: "Reports", sub: "Build a report from your current records. Every export names the framework and matrix version it was drawn from." },
  portfolio: { crumb1: "Consultant workspace", crumb2: "Client portfolio", title: "Client portfolio", sub: "Each client is a separate tenant; nothing is aggregated beyond the counts on this page." },
  inventory: { crumb1: "Data", crumb2: "Data inventory", title: "Data inventory", sub: "Every processing activity: what personal data you hold, why you hold it, where it sits, who receives it and how long you keep it." },
  map: { crumb1: "Data", crumb2: "Data map", title: "Data map", sub: "How personal data moves from the people it belongs to, through your systems, out to the parties who receive it." },
  transfers: { crumb1: "Data", crumb2: "Transfers", title: "Cross-border transfers", sub: "Every route that takes personal data outside Tanzania needs a recorded decision, not an assumption." },
  rights: { crumb1: "People", crumb2: "Rights requests", title: "Rights requests", sub: "Requests from data subjects, with the days elapsed since receipt and the stage each one has reached." },
  processors: { crumb1: "Third parties", crumb2: "Processors", title: "Processor register", sub: "Everyone who processes personal data on your behalf, and whether a written contract is actually in place." },
  incidents: { crumb1: "Incidents", crumb2: "Case management", title: "Incidents", sub: "Breach cases from detection to closure. The timeline is itself the evidence that notification was without undue delay." },
  sensitive: { crumb1: "Data", crumb2: "Sensitive data", title: "Sensitive data register", sub: "Sensitive personal data is held to a higher standard, so its basis and the people who can reach it are recorded per category rather than per organisation." },
  retention: { crumb1: "Data", crumb2: "Retention", title: "Retention schedule", sub: "How long each record type is kept, where that period comes from, and how the record is disposed of at the end of it." },
  consent: { crumb1: "People", crumb2: "Consent", title: "Consent records", sub: "What people agreed to, on what wording, by what method, and whether they have since withdrawn." },
  contracts: { crumb1: "Third parties", crumb2: "Contracts", title: "Contracts", sub: "Clause coverage behind the processor register. Section 27(4) requires processing on your behalf to be governed by a written contract." },
  policies: { crumb1: "Records", crumb2: "Policies", title: "Policy library", sub: "Policies and procedures with version, owner, approval and the controls each one supports. An expired policy is weak evidence." },
  evidence: { crumb1: "Records", crumb2: "Evidence vault", title: "Evidence vault", sub: "Documents that prove your controls operate. A control without evidence is an assertion rather than a record." },
  settings: { crumb1: "Admin", crumb2: "Settings", title: "Settings", sub: "Organisation profile, the people who do this work, and what each of them can reach." },
  rightsCase: { crumb1: "Rights requests", crumb2: "DSR-2026-041", title: "Access request from Halima Juma", sub: "Verify who is asking, find every record, decide what can be released, and keep the reasoning." },
  incidentIntake: { crumb1: "Incidents", crumb2: "Report a breach", title: "Report a breach", sub: "Four steps from what happened to a notification record. The clock starts when you became aware, not when you finish this form." },
  transferAssess: { crumb1: "Data · Transfers", crumb2: "TR-01", title: "Transfer assessment — Ireland", sub: "Six questions that produce a recorded decision for one route. Honest answers make the record defensible." },
  audit: { crumb1: "Records", crumb2: "Audit trail", title: "Audit trail", sub: "Every change to a control, risk, task, record or permission, attributed and time-stamped. Entries cannot be edited or deleted." },
  consentHistory: { crumb1: "People · Consent", crumb2: "Wording history", title: "Enrol in water and sanitation programmes", sub: "What each version of the wording said, and how many people are sitting on each one." },
  frameworkMigration: { crumb1: "Admin · Settings", crumb2: "Framework update", title: "Matrix v1.1.0 is available", sub: "Seven controls changed. Your answers are preserved except where the requirement itself moved." },
};
