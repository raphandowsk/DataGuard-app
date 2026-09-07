/** Processor register. Transcribed verbatim. */
export interface Processor {
  name: string;
  service: string;
  country: string;
  data: string;
  contract: string;
  tone: "good" | "warn" | "bad";
  review: string;
  activities: number;
}

export const PROCESSORS: Processor[] = [
  { name: "Salesforce NPSP", service: "Donor CRM", country: "Ireland", data: "Donor records", contract: "Legacy contract", tone: "warn", review: "Overdue", activities: 1 },
  { name: "Mailchimp", service: "Email campaigns", country: "United States", data: "Subscriber records", contract: "None", tone: "bad", review: "Never", activities: 1 },
  { name: "Google Workspace", service: "File storage and email", country: "United States", data: "Mixed programme files", contract: "None", tone: "bad", review: "Never", activities: 2 },
  { name: "Sanlam Payroll Services", service: "Payroll processing", country: "Tanzania", data: "Staff and bank records", contract: "Signed 12 Mar 2026", tone: "good", review: "Mar 2027", activities: 1 },
  { name: "Kilimanjaro Grant Partners", service: "Grant management", country: "Tanzania", data: "Beneficiary and expenditure data", contract: "In negotiation", tone: "warn", review: "Pending", activities: 2 },
  { name: "Regional audit partner", service: "External audit", country: "Kenya", data: "Expenditure files", contract: "Signed 14 Aug 2026", tone: "good", review: "Aug 2027", activities: 1 },
  { name: "Tanzania Cloud Hosting", service: "Server hosting", country: "Tanzania", data: "Beneficiary database", contract: "Signed 4 Feb 2026", tone: "good", review: "Feb 2027", activities: 3 },
  { name: "Twiga SMS Gateway", service: "Bulk SMS", country: "Tanzania", data: "Beneficiary phone numbers", contract: "None", tone: "bad", review: "Never", activities: 1 },
  { name: "Mahali Print Services", service: "Printed appeals", country: "Tanzania", data: "Donor names and addresses", contract: "Signed 20 Jun 2026", tone: "good", review: "Jun 2027", activities: 1 },
  { name: "Upendo Translation", service: "Document translation", country: "Tanzania", data: "Grievance narratives", contract: "None", tone: "bad", review: "Never", activities: 1 },
  { name: "Bahati IT Support", service: "Device support", country: "Tanzania", data: "Incidental access to all systems", contract: "Legacy contract", tone: "warn", review: "Overdue", activities: 0 },
];

export const PROCESSOR_STATS = [
  { v: "11", k: "Processors in use", sub: "Across 8 activities" },
  { v: "5", k: "With a signed contract", sub: "Meeting section 27(4)" },
  { v: "4", k: "With no contract at all", sub: "Critical gap" },
  { v: "3", k: "Hosted outside Tanzania", sub: "Also a transfer decision" },
];

export const PROCESSOR_NOTE =
  "Section 27(4) requires processing carried out on behalf of a controller to be governed by a written contract. A processor with no contract is a gap on its own, and section 27(5) makes their breaches your notification duty.";

/* ---- Contracts ---- */
export const CLAUSES = [
  "Subject matter and duration",
  "Nature and purpose",
  "Security measures",
  "Sub-processing consent",
  "Breach notification",
  "Return or deletion",
  "Audit and inspection",
];

export interface Contract {
  processor: string;
  signed: string;
  expires: string;
  have: number;
  status: string;
  tone: "good" | "warn" | "bad";
}

export const CONTRACTS: Contract[] = [
  { processor: "Sanlam Payroll Services", signed: "12 Mar 2026", expires: "12 Mar 2028", have: 7, status: "Signed", tone: "good" },
  { processor: "Tanzania Cloud Hosting", signed: "4 Feb 2026", expires: "4 Feb 2029", have: 7, status: "Signed", tone: "good" },
  { processor: "Regional audit partner", signed: "14 Aug 2026", expires: "14 Aug 2027", have: 6, status: "Signed", tone: "good" },
  { processor: "Mahali Print Services", signed: "20 Jun 2026", expires: "20 Jun 2027", have: 5, status: "Signed", tone: "good" },
  { processor: "Salesforce NPSP", signed: "3 Nov 2021", expires: "Auto-renewing", have: 3, status: "Legacy, predates the Act", tone: "warn" },
  { processor: "Bahati IT Support", signed: "17 Jan 2023", expires: "Auto-renewing", have: 2, status: "Legacy, predates the Act", tone: "warn" },
  { processor: "Kilimanjaro Grant Partners", signed: "Draft circulated", expires: "—", have: 4, status: "In negotiation", tone: "warn" },
  { processor: "Mailchimp", signed: "None", expires: "—", have: 0, status: "No contract", tone: "bad" },
  { processor: "Google Workspace", signed: "None", expires: "—", have: 0, status: "No contract", tone: "bad" },
  { processor: "Twiga SMS Gateway", signed: "None", expires: "—", have: 0, status: "No contract", tone: "bad" },
  { processor: "Upendo Translation", signed: "None", expires: "—", have: 0, status: "No contract", tone: "bad" },
];

export const CONTRACT_STATS = [
  { v: "7", k: "Contracts on file", sub: "Of 11 processors" },
  { v: "4", k: "Processors with none", sub: "Critical gap under section 27(4)" },
  { v: "2", k: "Predating the Act", sub: "Missing breach notification terms" },
  { v: "4", k: "Covering all 7 clauses", sub: "Fully aligned" },
];

export const CONTRACT_NOTE =
  "Section 27(4) requires processing carried out on behalf of a controller to be governed by a written contract. The seven clauses tracked here are the terms DataGuard checks for; the Act itself does not enumerate them, so treat the checklist as product guidance rather than statutory text.";
