/** Report centre. Transcribed verbatim. */
export interface Report {
  id: string;
  name: string;
  icon: string;
  desc: string;
  formats: string[];
}

export const REPORTS: Report[] = [
  { id: "exec", name: "Executive compliance report", icon: "presentation", desc: "Coverage, movement since the last assessment and the five things that need a decision.", formats: ["PDF"] },
  { id: "assessment", name: "PDPA assessment report", icon: "clipboard-check", desc: "Every control with its answer, evidence and legal reference, in matrix order.", formats: ["PDF", "XLSX"] },
  { id: "risk", name: "Risk report", icon: "triangle-alert", desc: "The register, the 5×5 distribution and movement over the period.", formats: ["PDF", "CSV"] },
  { id: "inventory", name: "Data inventory report", icon: "table-2", desc: "Processing activities with purpose, recipients, country and retention.", formats: ["PDF", "XLSX"] },
  { id: "processor", name: "Processor report", icon: "building-2", desc: "Processors, contract status, security review and next review date.", formats: ["PDF", "CSV"] },
  { id: "rights", name: "Rights request report", icon: "user-round-cog", desc: "Volumes, types, response times and outcomes for the period.", formats: ["PDF", "CSV"] },
  { id: "incident", name: "Incident report", icon: "siren", desc: "Incidents with timeline, affected data, notification record and lessons learned.", formats: ["PDF"] },
  { id: "evidence", name: "Evidence index", icon: "archive", desc: "Every document in the vault with its linked controls, owner and expiry.", formats: ["PDF", "CSV"] },
  { id: "audit", name: "Audit history", icon: "history", desc: "The full trail of who changed what, filtered to the reporting period.", formats: ["CSV"] },
];

export const REPORT_STATS = [
  { v: "71%", k: "Control coverage" },
  { v: "106/123", k: "Controls assessed" },
  { v: "12", k: "Open critical and high risks" },
];

export const REPORT_SECTIONS: Array<[string, string]> = [
  ["coverage", "Coverage summary"],
  ["domains", "Coverage by domain"],
  ["actions", "Priority actions"],
  ["risks", "Risk register"],
  ["evidence", "Evidence index"],
  ["audit", "Audit trail extract"],
];

export const REPORT_FORMATS = ["PDF", "CSV", "XLSX"];
