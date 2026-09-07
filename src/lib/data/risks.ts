/** Risk register rows. l = likelihood, i = impact (both 1–5). Transcribed verbatim. */
export interface Risk {
  id: string;
  control: string;
  title: string;
  domain: string;
  l: number;
  i: number;
  owner: string;
  due: string;
  overdue: boolean;
}

export const RISKS: Risk[] = [
  { id: "RSK-014", control: "PDPA-014-001", title: "Registration certificate lapses before the renewal window closes", domain: "Registration", l: 3, i: 5, owner: "Neema Kilonzo", due: "Due 30 Sep", overdue: false },
  { id: "RSK-027", control: "PDPA-027-005", title: "Beneficiary records readable by staff with no programme role", domain: "Security", l: 4, i: 5, owner: "Joseph Mwakalinga", due: "Overdue 6 days", overdue: true },
  { id: "RSK-031", control: "PDPA-027-011", title: "No signed appointment on file for the data protection officer", domain: "Governance", l: 5, i: 4, owner: "Grace Mtei", due: "Overdue 4 days", overdue: true },
  { id: "RSK-042", control: "PDPA-027-013", title: "Grant management processor operating without a written contract", domain: "Third parties", l: 3, i: 4, owner: "Grace Mtei", due: "Due 3 Oct", overdue: false },
  { id: "RSK-055", control: "PDPA-005-008", title: "Donor records held in an EU-hosted CRM with no transfer assessment", domain: "Transfers", l: 4, i: 3, owner: "Neema Kilonzo", due: "Due 17 Oct", overdue: false },
  { id: "RSK-063", control: "PDPA-028-004", title: "Volunteer files kept past the end of the programme cycle", domain: "Retention", l: 3, i: 2, owner: "Amina Rashid", due: "Due 28 Oct", overdue: false },
];

/** Severity from likelihood × impact, on the DataGuard 5×5 product scale. */
export function severityOf(score: number): "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" {
  return score >= 15 ? "CRITICAL" : score >= 10 ? "HIGH" : score >= 5 ? "MEDIUM" : "LOW";
}
