/** Cross-border transfers. Transcribed verbatim. */
export interface Transfer {
  id: string;
  dest: string;
  processor: string;
  data: string;
  volume: string;
  basis: string;
  status: string;
  tone: "good" | "warn" | "bad";
  owner: string;
  note: string;
}

export const TRANSFERS: Transfer[] = [
  { id: "TR-01", dest: "Ireland", processor: "Salesforce NPSP", data: "Donor contact and giving records", volume: "3,480 records", basis: "Necessary for the contract with the donor", status: "Assessment open", tone: "warn", owner: "Neema Kilonzo", note: "Data resides in the EU region. No recorded decision exists for the route, and the contract predates the Act." },
  { id: "TR-02", dest: "United States", processor: "Mailchimp", data: "Subscriber name and email", volume: "9,120 records", basis: "Consent to receive updates", status: "Not assessed", tone: "bad", owner: "Neema Kilonzo", note: "Consent covers the mailing, not the transfer. The transfer needs its own recorded decision." },
  { id: "TR-03", dest: "United States", processor: "Google Drive", data: "Volunteer files, mixed programme documents", volume: "Unknown", basis: "None recorded", status: "Not assessed", tone: "bad", owner: "Joseph Mwakalinga", note: "Content is not inventoried, so the transfer cannot be scoped until the folder is reviewed." },
  { id: "TR-04", dest: "Kenya", processor: "Regional audit partner", data: "Grant expenditure files with staff names", volume: "2 files per quarter", basis: "Necessary for the grant audit", status: "Approved", tone: "good", owner: "Grace Mtei", note: "Assessed 14 August 2026. Data minimised to named signatories only, transferred over encrypted channel." },
];

export const TRANSFER_NOTE =
  "Section 5(h) prohibits transferring personal data outside Tanzania in a way that contravenes the Act. DataGuard records the decision and its reasoning; it does not certify that a destination is adequate.";

/** Transfer assessment (TR-01) six-question flow. */
export const TA_QUESTIONS = [
  { q: "Where is the personal data going?", a: "Ireland — Salesforce NPSP, EU region", help: "Name the country and the specific service, not just the vendor." },
  { q: "What personal data does the route carry?", a: "Donor name, email, phone, giving history, employer", help: "List categories. Sensitive categories change the analysis." },
  { q: "Why is the transfer necessary?", a: "The CRM is the system of record for the donor relationship and receipting", help: "Necessity is about the purpose, not convenience or cost." },
  { q: "Could the purpose be achieved without the transfer?", a: "Not without replacing the CRM; a Tanzania-hosted alternative has not been assessed", help: "An honest answer here is what makes the record defensible." },
  { q: "What safeguards apply at the destination?", a: "Contractual security terms, encryption in transit and at rest, no sub-processing without consent", help: "Name what actually applies, not what the vendor markets." },
  { q: "What have the data subjects been told?", a: "The donor privacy notice states data may be held outside Tanzania", help: "Transparency does not authorise a transfer, but its absence weakens the position." },
];

export const TA_DECISION = [
  { k: "Decision", v: "Approve with conditions" },
  { k: "Conditions", v: "Replace the 2021 contract with terms meeting section 27(4) before 31 October 2026" },
  { k: "Reviewed by", v: "Neema Kilonzo, DPO" },
  { k: "Next review", v: "31 October 2026" },
];

export const TA_NOTE =
  "The Act prohibits transfers that contravene it but does not publish an adequacy list. This record states what you decided and why; it does not certify the destination.";
