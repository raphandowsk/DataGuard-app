import { LegalPage, type LegalSection } from "@/components/marketing/LegalPage";

export const metadata = { title: "Terms of Service — DataGuard" };

const SECTIONS: LegalSection[] = [
  {
    h: "Agreement",
    p: [
      "These terms govern your use of the DataGuard website and application. By creating an account or using the service, you agree to them on behalf of your organisation. If you do not agree, do not use the service.",
    ],
  },
  {
    h: "The service",
    p: [
      "DataGuard is a compliance-management tool. It maps the Tanzania Personal Data Protection Act, 2022 into controls, questions, evidence requirements, risks and tasks to help you organise and evidence your compliance work.",
      "DataGuard is not a law firm and does not provide legal advice. Its risk levels, coverage figures and control mappings are product features, not statutory classifications, legal opinions or a certification that you comply with the Act.",
    ],
  },
  {
    h: "Your account",
    p: [
      "You are responsible for the accuracy of the information you enter, for keeping your credentials secure, and for the activities of the users you invite to your workspace. You must have authority to enter any personal data you upload and a lawful basis for processing it.",
    ],
  },
  {
    h: "Acceptable use",
    p: [
      "You agree not to misuse the service, attempt to access data belonging to other organisations, probe or bypass security controls, or upload unlawful content. Access between organisations is isolated; deliberate attempts to defeat that isolation will result in suspension.",
    ],
  },
  {
    h: "Data protection roles",
    p: [
      "For personal data you process in your workspace, your organisation is the controller and DataGuard is your processor, acting on your instructions and as described in our Privacy Policy. Each party is responsible for its own obligations under the Act.",
    ],
  },
  {
    h: "Availability and changes",
    p: [
      "We aim to keep the service available and accurate but provide it “as is”, without warranties of uninterrupted availability or fitness for a particular purpose. We may update features, the control matrix and these terms; material changes will be notified in the product.",
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      "To the extent permitted by law, DataGuard is not liable for indirect or consequential loss, or for decisions you take in reliance on the product without appropriate professional advice. Nothing in these terms excludes liability that cannot lawfully be excluded.",
    ],
  },
  {
    h: "Termination",
    p: [
      "You may stop using the service and close your workspace at any time. We may suspend or terminate access for breach of these terms. On termination we handle your data as described in the Privacy Policy.",
    ],
  },
  {
    h: "Contact",
    p: [
      "Questions about these terms can be sent to legal@dataguard.example. Replace this address, and have the terms reviewed by a qualified adviser, before publishing.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="8 September 2026"
      intro="These terms set out the basis on which you may use DataGuard. They are a starting template that should be reviewed and adapted with a qualified adviser before you rely on them."
      sections={SECTIONS}
    />
  );
}
