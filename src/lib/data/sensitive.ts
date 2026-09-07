/** Sensitive data register. Transcribed verbatim. */
export interface SensitiveRow {
  cat: string;
  activity: string;
  subjects: string;
  n: string;
  basis: string;
  access: string;
  status: "Complete" | "Review" | "Gap";
  masked: boolean;
}

export const SENSITIVE: SensitiveRow[] = [
  { cat: "National identification numbers", activity: "Beneficiary enrolment", subjects: "Beneficiaries", n: "14,200", basis: "Explicit consent at enrolment", access: "Programme managers only, 6 users", status: "Complete", masked: true },
  { cat: "Health and disability status", activity: "Beneficiary enrolment", subjects: "Beneficiaries", n: "1,840", basis: "Explicit consent at enrolment", access: "Programme managers only, 6 users", status: "Review", masked: true },
  { cat: "Police clearance outcomes", activity: "Volunteer onboarding", subjects: "Volunteers", n: "218", basis: "Explicit consent at screening", access: "HR only, 3 users", status: "Complete", masked: true },
  { cat: "Injury and treatment notes", activity: "Health and safety incidents", subjects: "Staff, visitors", n: "34", basis: "Legal obligation, OSHA reporting", access: "Operations and HR, 5 users", status: "Complete", masked: true },
  { cat: "Biometric photographs", activity: "Beneficiary enrolment", subjects: "Beneficiaries", n: "9,600", basis: "Not recorded", access: "All programme staff, 41 users", status: "Gap", masked: false },
  { cat: "Trade union membership", activity: "Staff and payroll records", subjects: "Employees", n: "22", basis: "Not recorded", access: "HR only, 3 users", status: "Gap", masked: false },
];

export const SENSITIVE_STATS = [
  { v: "6", k: "Sensitive categories", sub: "Across 4 activities" },
  { v: "2", k: "With no recorded basis", sub: "Photographs, union membership" },
  { v: "41", k: "Users reaching photographs", sub: "Widest access of any category" },
  { v: "4", k: "Masked in the interface", sub: "Shown only on named access" },
];

export const SENSITIVE_NOTE =
  "The Act treats sensitive personal data as a distinct class with a narrower set of lawful bases. A category with no recorded basis is a gap even where the wider activity has one, because the consent that covers enrolment does not automatically cover photography.";
