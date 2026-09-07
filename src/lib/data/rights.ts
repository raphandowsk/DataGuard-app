/** Data subject rights requests. Transcribed verbatim. */
export interface RightsRequest {
  id: string;
  subject: string;
  type: string;
  received: string;
  days: number;
  stage: string;
  verified: boolean;
  activity: string;
  owner: string;
  channel: string;
}

export const REQUESTS: RightsRequest[] = [
  { id: "DSR-2026-041", subject: "Halima Juma", type: "Access", received: "28 Aug 2026", days: 3, stage: "Response drafted", verified: true, activity: "Beneficiary enrolment", owner: "Neema Kilonzo", channel: "Public portal" },
  { id: "DSR-2026-040", subject: "Peter Nyongo", type: "Rectification", received: "26 Aug 2026", days: 1, stage: "Investigating", verified: true, activity: "Donor relationship management", owner: "Amina Rashid", channel: "Email" },
  { id: "DSR-2026-039", subject: "Withheld pending verification", type: "Erasure", received: "25 Aug 2026", days: 0, stage: "Verifying identity", verified: false, activity: "Newsletter and campaigns", owner: "Unassigned", channel: "Public portal" },
  { id: "DSR-2026-038", subject: "Fatuma Said", type: "Objection", received: "19 Aug 2026", days: -2, stage: "Investigating", verified: true, activity: "Newsletter and campaigns", owner: "Amina Rashid", channel: "Public portal" },
  { id: "DSR-2026-037", subject: "Emmanuel Kessy", type: "Access", received: "12 Aug 2026", days: 9, stage: "Closed", verified: true, activity: "Staff and payroll records", owner: "Grace Mtei", channel: "In person" },
  { id: "DSR-2026-036", subject: "Rehema Mkwawa", type: "Erasure", received: "5 Aug 2026", days: 14, stage: "Closed", verified: true, activity: "Volunteer onboarding", owner: "Neema Kilonzo", channel: "Email" },
];

export const REQUEST_STATS = [
  { v: "4", k: "Open requests", sub: "1 awaiting identity check" },
  { v: "9", k: "Days, longest open", sub: "DSR-2026-037 closed at 9" },
  { v: "11", k: "Received this quarter", sub: "6 through the public portal" },
  { v: "5", k: "Days, median to close", sub: "Across closed requests" },
];

export const RIGHTS_NOTE =
  "Sections 29 to 36 set out the rights DataGuard tracks: access, rectification, erasure, objection, restriction and portability. The Act does not state a single response deadline for every right, so the clock here counts days elapsed rather than days remaining against an invented statutory limit.";

export const PORTAL_RIGHTS = [
  "Access a copy of my personal data",
  "Correct data that is wrong",
  "Delete my personal data",
  "Object to how my data is used",
  "Restrict processing of my data",
  "Receive my data in a portable form",
];

/* ---- Rights case detail (DSR-2026-041) ---- */
export const CASE_STAGES = [
  { key: "received", label: "Received", done: true },
  { key: "verified", label: "Identity verified", done: true },
  { key: "located", label: "Records located", done: true },
  { key: "drafted", label: "Response drafted", done: true },
  { key: "sent", label: "Response sent", done: false },
  { key: "closed", label: "Closed", done: false },
];

export const CASE_HEADER = [
  { k: "Reference", v: "DSR-2026-041" },
  { k: "Right exercised", v: "Access, section 29" },
  { k: "Received", v: "28 Aug 2026 via public portal" },
  { k: "Days elapsed", v: "9 days" },
  { k: "Owner", v: "Neema Kilonzo, DPO" },
  { k: "Identity", v: "Verified against enrolment record" },
];

export const CASE_RECORDS = [
  { activity: "Beneficiary enrolment", system: "Beneficiary DB", found: "Name, national ID, phone, household size, ward", sensitive: true, include: true },
  { activity: "Beneficiary enrolment", system: "KoboToolbox", found: "Original enrolment submission, GPS point", sensitive: true, include: true },
  { activity: "Community grievance line", system: "Grievance tracker", found: "One complaint narrative naming a third party", sensitive: false, include: false },
  { activity: "Newsletter and campaigns", system: "Mailchimp", found: "No match on this name or phone number", sensitive: false, include: false },
  { activity: "Beneficiary enrolment", system: "On-site NVR", found: "Footage older than 30 days, overwritten", sensitive: false, include: false },
];

export const CASE_LOG = [
  { who: "Public portal", what: "request submitted with reference DSR-2026-041", when: "28 Aug, 10:12" },
  { who: "Neema Kilonzo", what: "requested identification by SMS", when: "28 Aug, 11:30" },
  { who: "Halima Juma", what: "provided national ID, verified against enrolment record", when: "29 Aug, 09:40" },
  { who: "Neema Kilonzo", what: "ran a record search across 5 systems", when: "31 Aug, 14:05" },
  { who: "Neema Kilonzo", what: "excluded the grievance narrative, third party named", when: "31 Aug, 14:22" },
  { who: "Neema Kilonzo", what: "drafted the response pack", when: "4 Sep, 11:20" },
];

export const CASE_IDENTITY_NOTE =
  "Identification was checked against the enrolment record and then deleted. Verifying identity protects the data subject: releasing records to the wrong person is itself an unauthorised disclosure.";
export const CASE_EXCLUSION_NOTE =
  "One record is excluded. The grievance narrative names a third party, and releasing it would disclose that person’s personal data. The exclusion and its reason are recorded, and the response says a record was withheld.";
