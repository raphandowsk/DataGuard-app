import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { BrowserFrame } from "@/components/marketing/BrowserFrame";
import { DashboardPreview } from "@/components/marketing/DashboardPreview";
import { AssessmentPreview } from "@/components/marketing/AssessmentPreview";

const PERSONAS = [
  { icon: "users-round", title: "Organisations handling personal data", body: "NGOs, clinics, SACCOs, schools and businesses. See where you stand against the Act without needing a law degree — plain questions, clear next steps." },
  { icon: "shield-check", title: "Data protection officers", body: "Run the whole programme in one place: assessment, risks, tasks, evidence, rights requests and breach cases — each tied back to the Act." },
  { icon: "building-2", title: "Consultants and advisors", body: "Manage many clients as separate, private tenants. Switch between them without anything leaking across organisations." },
];

const FEATURES = [
  { icon: "clipboard-check", title: "Guided assessment", body: "Answer plain-language questions about your organisation. The legal reference travels with every answer and your progress saves as you go." },
  { icon: "list-checks", title: "The Act as 123 controls", body: "Every duty in the PDPA 2022 mapped to a practical control with its section, expected evidence and a default risk level." },
  { icon: "triangle-alert", title: "Risks and tasks", body: "Findings become risks scored on a transparent 5×5 method, and remediation tasks with an owner and due date." },
  { icon: "table-2", title: "Records of processing", body: "Data inventory, sensitive-data register, retention schedule and a live data map of where personal data flows." },
  { icon: "user-round-cog", title: "Rights and breaches", body: "A time-boxed queue for data-subject requests and a guided breach intake whose timeline is the evidence of notification." },
  { icon: "archive", title: "Evidence and reports", body: "Attach the documents that prove each control operates, then export a report that names the framework and matrix version." },
];

const STEPS = [
  { n: 1, title: "Assess", body: "Work through the controls for your organisation, one domain at a time. Answers and notes save per user, per control." },
  { n: 2, title: "Remediate", body: "Turn gaps into risks and tasks with an owner and a reason, so the work to close each one is always in front of you." },
  { n: 3, title: "Evidence and report", body: "Attach evidence to controls, then export a dated report that states the framework version its figures were drawn from." },
];

const FAQ = [
  { q: "Do I need to be a lawyer to use it?", a: "No. Every control is written as a plain-language question about how your organisation actually works. The legal wording is there if you want it, but you answer in ordinary terms." },
  { q: "Is this legal advice?", a: "No. DataGuard is a compliance-management tool. It maps the Act into practical controls and tracks your work, but it does not constitute legal advice or certify compliance. Where the Act leaves detail to regulations, it says so." },
  { q: "Where does my data live and who can see it?", a: "Each organisation is a separate tenant. Your answers, evidence and records are private to your workspace and protected by row-level security — other organisations cannot see them." },
  { q: "What does “coverage” actually mean?", a: "It describes how many mapped controls you have assessed and evidenced — fully implemented controls count fully, partial ones by half. It is not a statement that you are legally compliant." },
  { q: "How long does it take to start?", a: "About a minute. Create a workspace, name your organisation, and you are taken straight into the assessment." },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-ground">
      <SiteNav />

      {/* hero */}
      <section className="mx-auto max-w-[1120px] px-5 pb-10 pt-16 md:pt-20">
        <div className="mx-auto max-w-[780px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[11.5px] font-semibold text-ink-mid">
            <span className="h-1.5 w-1.5 rounded-full bg-good-fg" />
            Tanzania Personal Data Protection Act, 2022
          </span>
          <h1 className="mx-auto mt-5 max-w-[16ch] text-[42px] font-semibold leading-[1.08] tracking-[-1.2px] text-ink md:text-[56px]">
            Know where you stand on data protection
          </h1>
          <p className="mx-auto mt-5 max-w-[64ch] text-[16px] leading-[1.65] text-ink-muted">
            DataGuard turns Tanzania&apos;s Personal Data Protection Act into plain-language questions, a clear picture of
            your gaps, and the tasks and evidence to close them — so any team can run a real programme, not just lawyers.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/signup" className="flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[14px] font-semibold text-white no-underline hover:bg-teal-dark">
              Get started free
              <Icon name="arrow-right" size={16} />
            </Link>
            <Link href="/login" className="flex items-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3 text-[14px] font-semibold text-ink no-underline hover:border-teal hover:text-teal">
              Try the demo
            </Link>
          </div>
          <p className="mt-4 text-[12px] text-ink-faint">Coverage describes assessed and evidenced controls. It is not a statement of legal compliance.</p>
        </div>

        {/* product preview */}
        <div className="mx-auto mt-12 max-w-[1000px]">
          <BrowserFrame>
            <DashboardPreview />
          </BrowserFrame>
          <p className="mt-3 text-center text-[12px] text-ink-faint">The dashboard — live coverage across the 123 mapped controls, by domain.</p>
        </div>

        {/* stat strip */}
        <div className="mx-auto mt-12 grid max-w-[820px] grid-cols-2 gap-4 md:grid-cols-4">
          {[["123", "Controls mapped"], ["96", "Requirements"], ["9", "Parts of the Act"], ["1", "Framework, versioned"]].map(([v, k]) => (
            <div key={k} className="rounded-card border border-line bg-surface px-5 py-5 text-center">
              <div className="font-serif text-[40px] leading-none text-ink">{v}</div>
              <div className="mt-2 text-[12px] text-ink-muted">{k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* who it's for */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-[1120px] px-5 py-16">
          <div className="max-w-[560px]">
            <h2 className="m-0 text-[30px] font-semibold tracking-[-0.6px] text-ink">Built for the people who do the work</h2>
            <p className="m-0 mt-3 text-[15px] leading-[1.6] text-ink-muted">Whether you hold the data, run the programme, or advise others, DataGuard meets you where you are.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {PERSONAS.map((p) => (
              <div key={p.title} className="rounded-card border border-line bg-ground px-6 py-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-bg text-teal"><Icon name={p.icon} size={19} /></span>
                <h3 className="m-0 mt-4 text-[16px] font-semibold text-ink">{p.title}</h3>
                <p className="m-0 mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* see it in action */}
      <section id="how" className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.7px] text-teal">Plain language, always</span>
              <h2 className="m-0 mt-2 text-[30px] font-semibold tracking-[-0.6px] text-ink">Answer questions, not legalese</h2>
              <p className="m-0 mt-3 max-w-[52ch] text-[15px] leading-[1.65] text-ink-muted">
                Each control becomes a question about how your organisation really operates. You choose an honest answer,
                add a note, and attach evidence. The statutory reference and why it matters ride along with every one —
                and a gap can become a remediation task in a click.
              </p>
              <ul className="m-0 mt-5 flex flex-col gap-2.5 p-0">
                {["Five clear answers: from implemented to “I do not know”", "The legal reference on every question", "Progress saved per control, resumable any time", "Gaps become owned, dated remediation tasks"].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[13.5px] text-ink-mid">
                    <Icon name="check" size={16} className="mt-px flex-none text-good-fg" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <BrowserFrame label="app.dataguard.co.tz/assessment">
              <AssessmentPreview />
            </BrowserFrame>
          </div>
        </div>
      </section>

      {/* features */}
      <section id="features" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-[1120px] px-5 py-16">
          <div className="max-w-[560px]">
            <h2 className="m-0 text-[30px] font-semibold tracking-[-0.6px] text-ink">Everything a PDPA programme needs</h2>
            <p className="m-0 mt-3 text-[15px] leading-[1.6] text-ink-muted">One place for the assessment, the risks it raises, the tasks that close them, the records you keep and the evidence that proves it.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-card border border-line bg-ground px-6 py-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-bg text-teal"><Icon name={f.icon} size={19} /></span>
                <h3 className="m-0 mt-4 text-[16px] font-semibold text-ink">{f.title}</h3>
                <p className="m-0 mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-16">
          <h2 className="m-0 text-[30px] font-semibold tracking-[-0.6px] text-ink">Three steps, start to proof</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-card border border-line bg-surface px-6 py-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-[14px] font-bold text-white">{s.n}</span>
                <h3 className="m-0 mt-4 text-[17px] font-semibold text-ink">{s.title}</h3>
                <p className="m-0 mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* framework / disclaimer */}
      <section id="framework" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-[1120px] px-5 py-16">
          <div className="rounded-card border border-line bg-ground px-8 py-9 md:flex md:items-center md:gap-10">
            <div className="flex-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.7px] text-teal">The source of truth</span>
              <h2 className="m-0 mt-2 text-[26px] font-semibold tracking-[-0.5px] text-ink">Grounded in the Act, honest about the gaps</h2>
              <p className="m-0 mt-3 max-w-[70ch] text-[14px] leading-[1.65] text-ink-muted">
                Every control cites its provision and is labelled by how far it sits from the statutory text — directly
                stated, derived, or a practical interpretation. Where the Act leaves detail to regulations, DataGuard says
                so rather than inventing an answer. It supports compliance management; it does not constitute legal advice
                or certification.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2.5 md:mt-0 md:w-[240px]">
              {["Legal reference on every control", "Source type: explicit / derived / interpretation", "Regulatory-detail-pending flags", "Versioned framework & audit trail"].map((t) => (
                <div key={t} className="flex items-start gap-2 rounded-[11px] border border-line bg-surface px-3.5 py-2.5">
                  <Icon name="check" size={15} className="mt-px flex-none text-good-fg" />
                  <span className="text-[12.5px] leading-[1.4] text-ink-mid">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-16">
          <h2 className="m-0 text-[30px] font-semibold tracking-[-0.6px] text-ink">Questions, answered plainly</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-card border border-line bg-surface px-6 py-5">
                <h3 className="m-0 flex items-start gap-2 text-[15px] font-semibold text-ink">
                  <Icon name="circle-help" size={17} className="mt-px flex-none text-teal" />
                  {f.q}
                </h3>
                <p className="m-0 mt-2 pl-[25px] text-[13.5px] leading-[1.6] text-ink-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-[1120px] px-5 py-16 text-center">
          <h2 className="mx-auto max-w-[20ch] text-[32px] font-semibold tracking-[-0.7px] text-ink">Start your PDPA assessment today</h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-[15px] text-ink-muted">Create a workspace in a minute. Your answers, evidence and tasks are private to your organisation.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/signup" className="flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[14px] font-semibold text-white no-underline hover:bg-teal-dark">
              Create your workspace
              <Icon name="arrow-right" size={16} />
            </Link>
            <Link href="/login" className="flex items-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3 text-[14px] font-semibold text-ink no-underline hover:border-teal hover:text-teal">
              Explore the demo
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
