/** Retention schedule. Transcribed verbatim. */
export interface RetentionRow {
  record: string;
  period: string;
  source: string;
  disposal: string;
  next: string;
  status: "Complete" | "Review" | "Gap";
}

export const RETENTION: RetentionRow[] = [
  { record: "Beneficiary enrolment records", period: "7 years after programme close", source: "Donor grant agreement, audit requirement", disposal: "Secure deletion and certificate", next: "Dec 2026", status: "Complete" },
  { record: "Payroll and tax records", period: "10 years after exit", source: "Income Tax Act filing obligations", disposal: "Shredding and system purge", next: "Jan 2027", status: "Complete" },
  { record: "Volunteer files", period: "2 years after last placement", source: "Internal policy, no statutory source", disposal: "Secure deletion", next: "Overdue", status: "Gap" },
  { record: "Donor giving history", period: "10 years", source: "Tax receipting requirement", disposal: "Anonymise, retain totals only", next: "Mar 2027", status: "Complete" },
  { record: "CCTV footage", period: "30 days rolling", source: "Internal policy", disposal: "Automatic overwrite", next: "Continuous", status: "Complete" },
  { record: "Grievance case files", period: "5 years after closure", source: "Internal policy, no statutory source", disposal: "Secure deletion", next: "Sep 2026", status: "Review" },
  { record: "Newsletter subscriber list", period: "Until withdrawal", source: "Consent, no fixed period recorded", disposal: "Delete on withdrawal", next: "Overdue", status: "Gap" },
  { record: "Health and safety incidents", period: "10 years", source: "OSHA record-keeping duty", disposal: "Archive then secure deletion", next: "Jun 2027", status: "Complete" },
];

export const RETENTION_STATS = [
  { v: "8", k: "Record types scheduled", sub: "3 need attention" },
  { v: "5", k: "Sourced from law or contract", sub: "3 rest on internal policy alone" },
  { v: "2", k: "Reviews overdue", sub: "Volunteer files, subscriber list" },
  { v: "8", k: "With a disposal method", sub: "All record types covered" },
];

export const RETENTION_NOTE =
  "Section 28 requires personal data not to be kept longer than necessary and to be disposed of securely at the end of the period. A period resting on internal policy alone is defensible, but it must be written down and justified rather than assumed.";
