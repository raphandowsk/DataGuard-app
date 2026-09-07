/** Consultant portfolio. Transcribed verbatim. */
export interface Client {
  name: string;
  sector: string;
  pct: number;
  tasks: number;
  crit: number;
  review: string;
}

export const CLIENTS: Client[] = [
  { name: "Tumaini Health Initiative", sector: "Health NGO", pct: 58, tasks: 23, crit: 5, review: "11 Sep 2026" },
  { name: "Jenga Housing Cooperative", sector: "Housing", pct: 47, tasks: 29, crit: 7, review: "9 Sep 2026" },
  { name: "Afya Community Clinics", sector: "Health services", pct: 69, tasks: 12, crit: 2, review: "24 Sep 2026" },
  { name: "Mazingira Trust", sector: "Environmental NGO", pct: 71, tasks: 14, crit: 3, review: "18 Sep 2026" },
  { name: "Uhuru Microfinance SACCO", sector: "Financial services", pct: 64, tasks: 11, crit: 2, review: "2 Oct 2026" },
  { name: "Msingi Legal Aid Clinic", sector: "Legal services", pct: 76, tasks: 9, crit: 1, review: "15 Oct 2026" },
  { name: "Kilimo Growers Association", sector: "Agriculture", pct: 79, tasks: 8, crit: 1, review: "30 Sep 2026" },
  { name: "Zanzibar Heritage Trust", sector: "Culture NGO", pct: 81, tasks: 5, crit: 0, review: "21 Oct 2026" },
  { name: "Pamoja Youth Network", sector: "Youth NGO", pct: 85, tasks: 4, crit: 0, review: "6 Nov 2026" },
  { name: "Bahari Logistics Ltd", sector: "Logistics", pct: 88, tasks: 3, crit: 0, review: "13 Nov 2026" },
  { name: "Nuru Water Project", sector: "WASH NGO", pct: 90, tasks: 2, crit: 0, review: "20 Nov 2026" },
  { name: "Serengeti Education Fund", sector: "Education NGO", pct: 92, tasks: 2, crit: 0, review: "4 Dec 2026" },
];

export const PORTFOLIO_STATS = [
  { label: "Clients", v: "12", sub: "All on TZ-PDPA 2022", icon: "building-2", color: "#0d7d75", bg: "#e5f2f0" },
  { label: "Healthy", v: "5", sub: "Coverage above 80%", icon: "circle-check", color: "#16775a", bg: "#e3f2ea" },
  { label: "Needs attention", v: "5", sub: "Coverage 60–79%", icon: "triangle-alert", color: "#a4501f", bg: "#f8ece1" },
  { label: "High risk", v: "2", sub: "Coverage below 60%", icon: "octagon-alert", color: "#8e2b22", bg: "#fbe7e4" },
];

export const PORTFOLIO_ALERTS = [
  { title: "Registration renewal window closes in 6 days", client: "Jenga Housing Cooperative", when: "Due 9 Sep", icon: "octagon-alert", color: "#8e2b22", bg: "#fbe7e4" },
  { title: "No data protection officer appointed", client: "Tumaini Health Initiative", when: "Overdue 12 days", icon: "octagon-alert", color: "#8e2b22", bg: "#fbe7e4" },
  { title: "Quarterly review meeting not yet scheduled", client: "Afya Community Clinics", when: "Due 24 Sep", icon: "calendar-clock", color: "#a4501f", bg: "#f8ece1" },
  { title: "Sensitive data register still empty", client: "Uhuru Microfinance SACCO", when: "Due 2 Oct", icon: "shield-alert", color: "#a4501f", bg: "#f8ece1" },
];

export const PORTFOLIO_ACTIVITY = [
  { text: "Assessment reopened for section 27", client: "Mazingira Trust", when: "09:42", icon: "clipboard-check" },
  { text: "Executive compliance report exported", client: "Bahari Logistics Ltd", when: "Yesterday", icon: "file-down" },
  { text: "Four processor contracts uploaded", client: "Serengeti Education Fund", when: "Yesterday", icon: "file-up" },
  { text: "Two critical risks closed after remediation", client: "Nuru Water Project", when: "2 Sep", icon: "circle-check" },
];
