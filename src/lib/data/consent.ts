/** Consent records. Transcribed verbatim. */
export interface ConsentRow {
  purpose: string;
  version: string;
  method: string;
  held: string;
  withdrawn: string;
  updated: string;
  status: "Complete" | "Review" | "Gap";
}

export const CONSENT: ConsentRow[] = [
  { purpose: "Enrol in water and sanitation programmes", version: "v3.1, Swahili and English", method: "Signed paper form at enrolment", held: "14,200", withdrawn: "112", updated: "14 Mar 2026", status: "Complete" },
  { purpose: "Take and use programme photographs", version: "v1.0, English only", method: "Verbal at enrolment", held: "9,600", withdrawn: "0", updated: "Not recorded", status: "Gap" },
  { purpose: "Receive newsletters and appeals", version: "v2.4, English", method: "Web form double opt-in", held: "9,120", withdrawn: "486", updated: "2 Aug 2026", status: "Complete" },
  { purpose: "Volunteer screening including clearance", version: "v2.0, Swahili and English", method: "Signed paper form", held: "218", withdrawn: "4", updated: "20 Jun 2026", status: "Complete" },
  { purpose: "Share case studies with donors", version: "v1.2, English", method: "Signed release form", held: "86", withdrawn: "11", updated: "9 May 2026", status: "Review" },
];

export const CONSENT_STATS = [
  { v: "33,224", k: "Consents held", sub: "Across 5 purposes" },
  { v: "613", k: "Withdrawn", sub: "All honoured within 5 days" },
  { v: "1", k: "Purpose with no record", sub: "Programme photography" },
  { v: "2", k: "Wordings in one language only", sub: "Should be Swahili and English" },
];

export const CONSENT_NOTE =
  "Consent is only defensible if you can show what was agreed, when, on what wording, and by what method. Verbal consent with nothing on file is the weakest position in this register, and a consent given for one purpose does not extend to another.";

/* ---- Consent wording history ---- */
export const CONSENT_VERSIONS = [
  { v: "v3.1", date: "14 Mar 2026", pop: "11,840", langs: "Swahili and English", current: true, change: "Added the photography purpose as a separate opt-in and named the data retention period." },
  { v: "v3.0", date: "2 Aug 2025", pop: "2,190", langs: "Swahili and English", current: false, change: "Rewrote the purpose in plain Swahili after field feedback that the wording was not understood." },
  { v: "v2.0", date: "11 Jan 2024", pop: "170", langs: "English only", current: false, change: "First version to name the ward officers as recipients." },
];

export interface DiffLine {
  kind: "same" | "del" | "add";
  text: string;
}

export const DIFF: DiffLine[] = [
  { kind: "same", text: "Mazingira Trust will collect your name, national identification number, telephone number and household details" },
  { kind: "del", text: "to run our programmes." },
  { kind: "add", text: "so that we can enrol your household in the water and sanitation programme and check that you are eligible." },
  { kind: "same", text: "Your details will be shared with the ward officer responsible for your area." },
  { kind: "add", text: "We keep your enrolment record for seven years after the programme closes, because our donor agreement requires it for audit." },
  { kind: "del", text: "We may take photographs during programme activities." },
  { kind: "add", text: "If you agree separately below, we may take photographs of programme activities. You can say no to photographs and still take part in the programme." },
  { kind: "same", text: "You can ask to see, correct or delete your details at any time by speaking to any staff member or writing to dpo@mazingira.or.tz." },
];

export const CONSENT_HISTORY_NOTE =
  "A consent is only as good as the wording the person actually saw. 2,360 people are still sitting on wording that did not mention photography or the retention period, so their consent does not cover those things.";
