import { LegalPage, type LegalSection } from "@/components/marketing/LegalPage";

export const metadata = { title: "Privacy Policy — DataGuard" };

const SECTIONS: LegalSection[] = [
  {
    h: "Who we are",
    p: [
      "DataGuard (“we”, “us”) provides software that helps organisations manage their obligations under the Tanzania Personal Data Protection Act, 2022. This policy explains what personal data we process when you use the DataGuard application and website, and on what basis.",
      "For the personal data you enter about your own data subjects inside your workspace, your organisation is the data controller and DataGuard acts as a data processor on your instructions.",
    ],
  },
  {
    h: "Data we process",
    p: [
      "Account data: your name, work email and authentication credentials, used to create and secure your account.",
      "Workspace content: the organisations, assessments, answers, notes, risks, tasks, evidence metadata and related records you create. This may include personal data about your data subjects; you decide what to enter.",
      "Usage and technical data: log records, IP address and basic device information needed to operate and protect the service.",
    ],
  },
  {
    h: "How we use it",
    p: [
      "To provide the service — authenticate you, store your workspace, and show your compliance position.",
      "To secure the service — detect and prevent unauthorised access, and keep an audit trail of changes.",
      "We do not sell personal data, and we do not use your workspace content for advertising.",
    ],
  },
  {
    h: "Lawful basis and your instructions",
    p: [
      "We process account and technical data to perform our contract with you and for our legitimate interest in operating the service securely. We process workspace content solely to provide the service, on your organisation’s documented instructions as its processor.",
    ],
  },
  {
    h: "Storage, security and location",
    p: [
      "Workspace content is stored in a managed PostgreSQL database with row-level security so that each organisation can access only its own data. Access is restricted to authenticated members of the relevant organisation.",
      "You should tell us where your data must reside if you have a data-residency requirement under the Act or your own policies.",
    ],
  },
  {
    h: "Retention",
    p: [
      "We keep account data for as long as your account is active. Workspace content is kept until you delete it or close your workspace, after which it is deleted or anonymised within a reasonable period, subject to any legal retention obligations.",
    ],
  },
  {
    h: "Sharing with third parties",
    p: [
      "We use infrastructure sub-processors (for example, our database and authentication provider) to run the service. They process data on our instructions under appropriate contractual terms. We will maintain a current list of sub-processors on request.",
    ],
  },
  {
    h: "Your rights",
    p: [
      "Subject to the Act, you may request access to, or correction, blocking, erasure or destruction of, personal data we hold about you, and you may complain to the Personal Data Protection Commission. To exercise a right, contact us using the details below.",
    ],
  },
  {
    h: "Contact",
    p: [
      "Questions about this policy or our data practices can be sent to privacy@dataguard.example. Replace this address with your own operational contact before publishing.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="8 September 2026"
      intro="This policy describes how DataGuard processes personal data when you use our website and application. It is written to be consistent with the Tanzania Personal Data Protection Act, 2022, but it is a starting template rather than a finished legal document."
      sections={SECTIONS}
    />
  );
}
