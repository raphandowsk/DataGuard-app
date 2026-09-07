/** Remediation tasks. Transcribed verbatim from the prototype. */
export interface Task {
  id: string;
  title: string;
  control: string;
  priority: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: "Open" | "In Progress" | "Blocked" | "Completed" | "Cancelled";
  owner: string;
  due: string;
  overdue: boolean;
  reason: string;
}

export const TASKS: Task[] = [
  { id: "T-101", title: "Appoint a data protection officer and issue a signed appointment letter", control: "PDPA-027-011", priority: "CRITICAL", status: "In Progress", owner: "Grace Mtei", due: "Overdue 4 days", overdue: true, reason: "The Act requires a formal appointment. A named person without a signed letter is weak evidence." },
  { id: "T-102", title: "Implement and test a security breach notification procedure", control: "PDPA-027-016", priority: "CRITICAL", status: "Open", owner: "Joseph Mwakalinga", due: "Due 12 Sep", overdue: false, reason: "Notification to the Commission is owed without undue delay, and the duty covers breaches at your processors." },
  { id: "T-103", title: "Implement least privilege and periodic access reviews for personal data", control: "PDPA-027-005", priority: "CRITICAL", status: "In Progress", owner: "Joseph Mwakalinga", due: "Due 19 Sep", overdue: false, reason: "Beneficiary records are currently readable by staff with no programme role." },
  { id: "T-104", title: "Put a written contract in place with the grant management provider", control: "PDPA-027-013", priority: "HIGH", status: "Blocked", owner: "Grace Mtei", due: "Due 3 Oct", overdue: false, reason: "Six of eleven processors have no contract meeting the section 27(4) requirements. Waiting on the provider legal team." },
  { id: "T-105", title: "Assess the donor CRM transfer to the EU-hosted region", control: "PDPA-005-008", priority: "HIGH", status: "Open", owner: "Neema Kilonzo", due: "Due 17 Oct", overdue: false, reason: "No recorded decision exists for donor data leaving Tanzania." },
  { id: "T-106", title: "Record restore test results for the beneficiary database backups", control: "PDPA-027-002", priority: "HIGH", status: "Completed", owner: "Joseph Mwakalinga", due: "Closed 28 Aug", overdue: false, reason: "Backups existed but no restore had been tested, so the safeguard was unevidenced." },
  { id: "T-107", title: "Renew the registration certificate within the three month window", control: "PDPA-016-002", priority: "CRITICAL", status: "Open", owner: "Neema Kilonzo", due: "Due 30 Sep", overdue: false, reason: "Section 16(2) sets a three month renewal window and the current certificate expires in December." },
  { id: "T-108", title: "Publish the volunteer privacy notice on the intranet", control: "PDPA-023-002", priority: "MEDIUM", status: "Completed", owner: "Amina Rashid", due: "Closed 21 Aug", overdue: false, reason: "Pre-collection notice was given verbally at induction with nothing on file." },
];

export const TASK_COLUMNS: Task["status"][] = ["Open", "In Progress", "Blocked", "Completed"];
export const TASK_SUMMARY = "8 tasks · 2 completed · 1 blocked · 1 overdue";
