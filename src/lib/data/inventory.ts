/** Processing activities (data inventory). Transcribed verbatim. */
export interface Activity {
  id: string;
  name: string;
  dept: string;
  subjects: string;
  cats: string;
  sensitive: boolean;
  basis: string;
  purpose: string;
  systems: string;
  recipients: string;
  country: string;
  retention: string;
  status: "Complete" | "Gap" | "Review";
}

export const ACTIVITIES: Activity[] = [
  { id: "PA-01", name: "Beneficiary enrolment", dept: "Programmes", subjects: "Beneficiaries", cats: "Name, national ID, phone, household size, GPS ward", sensitive: true, basis: "Consent", purpose: "Enrol households into water and sanitation programmes and verify eligibility", systems: "KoboToolbox, Beneficiary DB", recipients: "Ward officers", country: "Tanzania", retention: "7 years after programme close", status: "Complete" },
  { id: "PA-02", name: "Donor relationship management", dept: "Fundraising", subjects: "Donors", cats: "Name, email, phone, giving history, employer", sensitive: false, basis: "Legitimate interest", purpose: "Manage donor relationships, issue receipts and report on grant use", systems: "Salesforce NPSP (EU region)", recipients: "Grant auditors", country: "Ireland", retention: "10 years, tax record requirement", status: "Gap" },
  { id: "PA-03", name: "Staff and payroll records", dept: "HR", subjects: "Employees", cats: "Name, TIN, NSSF number, bank details, next of kin", sensitive: false, basis: "Legal obligation", purpose: "Employ staff, run payroll and meet statutory filings", systems: "Payroll SaaS, HR files", recipients: "NSSF, TRA, bank", country: "Tanzania", retention: "10 years after exit", status: "Complete" },
  { id: "PA-04", name: "Volunteer onboarding", dept: "Programmes", subjects: "Volunteers", cats: "Name, phone, emergency contact, police clearance", sensitive: true, basis: "Consent", purpose: "Screen and place volunteers on community projects", systems: "HR files, Google Drive", recipients: "Project leads", country: "Tanzania", retention: "2 years after last placement", status: "Review" },
  { id: "PA-05", name: "Health and safety incidents", dept: "Operations", subjects: "Staff, visitors", cats: "Name, injury description, treatment notes", sensitive: true, basis: "Legal obligation", purpose: "Record workplace incidents and meet OSHA reporting duties", systems: "Incident log", recipients: "OSHA, insurer", country: "Tanzania", retention: "10 years", status: "Complete" },
  { id: "PA-06", name: "Community grievance line", dept: "Programmes", subjects: "Community members", cats: "Name (optional), phone, complaint narrative", sensitive: false, basis: "Legitimate interest", purpose: "Receive and resolve complaints about programme conduct", systems: "Grievance tracker", recipients: "Programme board", country: "Tanzania", retention: "5 years after closure", status: "Gap" },
  { id: "PA-07", name: "Newsletter and campaigns", dept: "Communications", subjects: "Subscribers", cats: "Name, email, engagement history", sensitive: false, basis: "Consent", purpose: "Send programme updates and appeals to people who asked for them", systems: "Mailchimp (US)", recipients: "None", country: "United States", retention: "Until withdrawal, reviewed annually", status: "Gap" },
  { id: "PA-08", name: "CCTV at the Dar es Salaam office", dept: "Operations", subjects: "Staff, visitors", cats: "Video footage", sensitive: false, basis: "Legitimate interest", purpose: "Protect staff and assets at the head office", systems: "On-site NVR", recipients: "Police on request", country: "Tanzania", retention: "30 days", status: "Review" },
];

export const INVENTORY_STATS = [
  { v: "8", k: "Processing activities", sub: "3 with open gaps" },
  { v: "4", k: "Involving sensitive data", sub: "National ID, health, clearance" },
  { v: "3", k: "Leaving Tanzania", sub: "Ireland, United States" },
  { v: "7", k: "Systems in scope", sub: "3 hosted abroad" },
];

/* ---- Data map ---- */
export const SUBJECT_GROUPS = [
  { name: "Beneficiaries", n: "14,200", icon: "users-round", sensitive: true },
  { name: "Donors", n: "3,480", icon: "hand-heart", sensitive: false },
  { name: "Subscribers", n: "9,120", icon: "mail", sensitive: false },
  { name: "Employees", n: "96", icon: "briefcase", sensitive: false },
  { name: "Volunteers", n: "218", icon: "user-round-plus", sensitive: true },
  { name: "Community members", n: "86", icon: "megaphone", sensitive: false },
];

export const SYSTEMS = [
  { name: "KoboToolbox", kind: "Field data collection", country: "Tanzania", flag: "local", records: "14,200" },
  { name: "Beneficiary DB", kind: "Internal database", country: "Tanzania", flag: "local", records: "14,200" },
  { name: "Salesforce NPSP", kind: "Donor CRM", country: "Ireland", flag: "cross", records: "3,480" },
  { name: "Payroll SaaS", kind: "Payroll", country: "Tanzania", flag: "local", records: "96" },
  { name: "Google Drive", kind: "File storage", country: "United States", flag: "cross", records: "Unknown" },
  { name: "Mailchimp", kind: "Email marketing", country: "United States", flag: "cross", records: "9,120" },
  { name: "On-site NVR", kind: "CCTV recorder", country: "Tanzania", flag: "local", records: "30 days" },
];

export const RECIPIENTS = [
  { name: "Ward officers", where: "Tanzania", what: "Beneficiary lists", cross: false },
  { name: "NSSF, TRA and bank", where: "Tanzania", what: "Payroll filings", cross: false },
  { name: "Grant auditors", where: "Ireland", what: "Donor and expenditure records", cross: true },
  { name: "Regional audit partner", where: "Kenya", what: "Expenditure files", cross: true },
  { name: "OSHA and insurer", where: "Tanzania", what: "Incident records", cross: false },
  { name: "Police, on request", where: "Tanzania", what: "CCTV footage", cross: false },
];
