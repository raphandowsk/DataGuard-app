/** Policies, evidence vault and audit trail. Transcribed verbatim. */

export interface Policy {
  name: string;
  version: string;
  owner: string;
  approved: string;
  next: string;
  controls: number;
  status: "Current" | "Draft" | "Expired" | "Missing";
}

export const POLICIES: Policy[] = [
  { name: "Data Protection Policy", version: "v2.1", owner: "Neema Kilonzo", approved: "2 Sep 2026", next: "2 Sep 2027", controls: 14, status: "Current" },
  { name: "Information Security Policy", version: "v1.4", owner: "Joseph Mwakalinga", approved: "18 Jan 2026", next: "18 Jan 2027", controls: 22, status: "Current" },
  { name: "Access Control Procedure", version: "v3.0", owner: "Joseph Mwakalinga", approved: "14 Aug 2026", next: "14 Nov 2026", controls: 9, status: "Current" },
  { name: "Incident Response Procedure", version: "v2.0", owner: "Joseph Mwakalinga", approved: "11 Jul 2026", next: "11 Jul 2027", controls: 7, status: "Current" },
  { name: "Retention and Disposal Schedule", version: "v1.1", owner: "Grace Mtei", approved: "4 Feb 2025", next: "Overdue since Feb 2026", controls: 6, status: "Expired" },
  { name: "Beneficiary Privacy Notice", version: "v3.1", owner: "Neema Kilonzo", approved: "14 Mar 2026", next: "14 Mar 2027", controls: 5, status: "Current" },
  { name: "Volunteer Privacy Notice", version: "v1.0", owner: "Amina Rashid", approved: "21 Aug 2026", next: "21 Aug 2027", controls: 3, status: "Current" },
  { name: "Processor Management Standard", version: "Draft", owner: "Grace Mtei", approved: "Not approved", next: "—", controls: 8, status: "Draft" },
  { name: "Cross-border Transfer Standard", version: "None", owner: "Unassigned", approved: "Does not exist", next: "—", controls: 4, status: "Missing" },
];

export const POLICY_STATS = [
  { v: "9", k: "Policies tracked", sub: "6 current" },
  { v: "1", k: "Expired", sub: "Retention schedule, since Feb 2026" },
  { v: "1", k: "Missing entirely", sub: "Cross-border transfer standard" },
  { v: "78", k: "Control links", sub: "Policies are the most requested evidence" },
];

export interface Evidence {
  name: string;
  kind: string;
  controls: number;
  owner: string;
  added: string;
  expiry: string;
  strength: "Strong" | "Moderate" | "Weak" | "Missing";
  size: string;
}

export const EVIDENCE: Evidence[] = [
  { name: "Access Control Procedure v3.pdf", kind: "Procedure", controls: 9, owner: "Joseph Mwakalinga", added: "14 Aug 2026", expiry: "Review 14 Nov 2026", strength: "Strong", size: "340 KB" },
  { name: "Q2 Access Review Signoff.xlsx", kind: "Operating record", controls: 4, owner: "Joseph Mwakalinga", added: "3 Jul 2026", expiry: "Superseded by Q3", strength: "Strong", size: "86 KB" },
  { name: "Backup Restore Test 28 Aug.pdf", kind: "Test record", controls: 3, owner: "Joseph Mwakalinga", added: "28 Aug 2026", expiry: "Review 28 Nov 2026", strength: "Strong", size: "512 KB" },
  { name: "Data Protection Policy v2.1.pdf", kind: "Policy", controls: 14, owner: "Neema Kilonzo", added: "2 Sep 2026", expiry: "Review 2 Sep 2027", strength: "Moderate", size: "1.2 MB" },
  { name: "Registration Certificate 2024.pdf", kind: "Certificate", controls: 5, owner: "Neema Kilonzo", added: "11 Dec 2024", expiry: "Expires Dec 2026", strength: "Strong", size: "204 KB" },
  { name: "Breach Tabletop Notes Jul 2026.docx", kind: "Test record", controls: 2, owner: "Grace Mtei", added: "11 Jul 2026", expiry: "Review 11 Jul 2027", strength: "Moderate", size: "48 KB" },
  { name: "Payroll Processor Agreement.pdf", kind: "Contract", controls: 3, owner: "Grace Mtei", added: "12 Mar 2026", expiry: "Expires Mar 2028", strength: "Strong", size: "780 KB" },
  { name: "Organisation Chart Sep 2026.png", kind: "Supporting", controls: 2, owner: "Amina Rashid", added: "1 Sep 2026", expiry: "No expiry", strength: "Weak", size: "1.8 MB" },
  { name: "DPO Appointment Letter.pdf", kind: "Appointment", controls: 1, owner: "Grace Mtei", added: "Missing", expiry: "—", strength: "Missing", size: "—" },
];

export const EVIDENCE_STATS = [
  { v: "62%", k: "Evidence coverage", sub: "76 of 123 controls evidenced" },
  { v: "8", k: "Documents in the vault", sub: "1 required document missing" },
  { v: "3", k: "Expiring within 90 days", sub: "Including the registration certificate" },
  { v: "1", k: "Weak evidence", sub: "Organisation chart, supporting only" },
];

export const EVIDENCE_NOTE =
  "Evidence may itself contain personal data. Upload only what is necessary to demonstrate the control, restrict access to authorised people, and prefer a redacted extract over a full beneficiary record.";

export function evidenceIcon(kind: string): string {
  if (kind === "Policy" || kind === "Procedure") return "book-text";
  if (kind === "Certificate") return "award";
  if (kind === "Contract") return "file-signature";
  if (kind === "Supporting") return "image";
  return "file-check-2";
}

export interface AuditRow {
  t: string;
  who: string;
  role: string;
  action: string;
  object: string;
  from: string;
  to: string;
  ip: string;
}

export const AUDIT: AuditRow[] = [
  { t: "6 Sep 2026, 09:14", who: "Neema Kilonzo", role: "DPO", action: "Changed control answer", object: "PDPA-027-001", from: "Not implemented", to: "Partially implemented", ip: "41.86.x.x" },
  { t: "5 Sep 2026, 16:02", who: "Raphael Kimaro", role: "Consultant", action: "Generated report", object: "Executive compliance report", from: "—", to: "PDF export", ip: "197.250.x.x" },
  { t: "5 Sep 2026, 11:48", who: "Joseph Mwakalinga", role: "IT", action: "Uploaded evidence", object: "Access Control Procedure v3.pdf", from: "—", to: "Linked to 9 controls", ip: "41.86.x.x" },
  { t: "4 Sep 2026, 11:20", who: "Neema Kilonzo", role: "DPO", action: "Drafted rights response", object: "DSR-2026-041", from: "Records located", to: "Response drafted", ip: "41.86.x.x" },
  { t: "3 Sep 2026, 09:10", who: "Neema Kilonzo", role: "DPO", action: "Notified Commission", object: "INC-2026-004", from: "Assessed", to: "Notified", ip: "41.86.x.x" },
  { t: "2 Sep 2026, 17:30", who: "Neema Kilonzo", role: "DPO", action: "Assessed incident", object: "INC-2026-004", from: "Contained", to: "Affects personal data", ip: "41.86.x.x" },
  { t: "2 Sep 2026, 15:05", who: "Joseph Mwakalinga", role: "IT", action: "Contained incident", object: "INC-2026-004", from: "Detected", to: "Contained", ip: "41.86.x.x" },
  { t: "2 Sep 2026, 14:20", who: "Amina Rashid", role: "HR", action: "Reported incident", object: "INC-2026-004", from: "—", to: "Detected", ip: "41.86.x.x" },
  { t: "2 Sep 2026, 08:55", who: "Neema Kilonzo", role: "DPO", action: "Approved policy", object: "Data Protection Policy v2.1", from: "v2.0", to: "v2.1", ip: "41.86.x.x" },
  { t: "1 Sep 2026, 14:11", who: "Grace Mtei", role: "Compliance", action: "Changed user role", object: "Amina Rashid", from: "Read only", to: "HR", ip: "41.86.x.x" },
  { t: "31 Aug 2026, 14:22", who: "Neema Kilonzo", role: "DPO", action: "Excluded record from response", object: "DSR-2026-041", from: "Included", to: "Excluded, third party named", ip: "41.86.x.x" },
  { t: "28 Aug 2026, 10:12", who: "Public portal", role: "System", action: "Received rights request", object: "DSR-2026-041", from: "—", to: "Received", ip: "—" },
];

export const AUDIT_STATS = [
  { v: "18,402", k: "Entries retained", sub: "Since 3 September 2024" },
  { v: "17", k: "Users with activity", sub: "Including 1 consultant" },
  { v: "Immutable", k: "Entries cannot be edited", sub: "Append only, no delete path" },
  { v: "10 years", k: "Trail retention", sub: "Matches the longest record period" },
];

export const AUDIT_FILTERS = ["All activity", "Control answers", "Evidence", "Permissions", "Rights requests", "Incidents"];

export const AUDIT_NOTE =
  "The trail is what turns an assertion into a record. Consultant actions are attributed to the consultant’s own account, never to the organisation, so a reviewer can always tell who did what.";
