import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";

const FEATURES = [
  { icon: "list-checks", title: "The Act as 123 controls", body: "Every duty in the Personal Data Protection Act, 2022 mapped to a practical control with its legal reference, plain-language question and expected evidence." },
  { icon: "clipboard-check", title: "Guided assessment", body: "Answer in plain terms. The legal basis travels with every answer, and your progress saves to your account as you go." },
  { icon: "triangle-alert", title: "Risk register", body: "Risks raised from control findings, scored on a transparent 5×5 product methodology — never confused with statutory penalties." },
  { icon: "archive", title: "Evidence vault", body: "Attach the documents that prove each control operates, with strength, expiry and the controls they support." },
  { icon: "user-round-cog", title: "Rights & incidents", body: "A time-boxed queue for data-subject requests and a breach workflow whose timeline is itself the evidence of notification." },
  { icon: "building-2", title: "Built for consultants", body: "Each client is a separate tenant with its own data and access. Switch between them without anything leaking across." },
];

const STEPS = [
  { n: 1, title: "Assess", body: "Work through the controls for your organisation. Answers and notes are saved per user, per control." },
  { n: 2, title: "Remediate", body: "Findings become risks and tasks with an owner and a reason, so the work to close a gap is always in front of you." },
  { n: 3, title: "Evidence & report", body: "Attach evidence, then export a report that names the framework and matrix version its figures were drawn from." },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-ground">
      <SiteNav />

      {/* hero */}
      <section className="mx-auto max-w-[1120px] px-5 pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[11.5px] font-semibold text-ink-mid">
            <span className="h-1.5 w-1.5 rounded-full bg-good-fg" />
            Tanzania Personal Data Protection Act, 2022
          </span>
          <h1 className="mx-auto mt-5 max-w-[15ch] text-[44px] font-semibold leading-[1.08] tracking-[-1.2px] text-ink md:text-[56px]">
            Turn the Data Protection Act into a plan you can act on
          </h1>
          <p className="mx-auto mt-5 max-w-[62ch] text-[16px] leading-[1.65] text-ink-muted">
            DataGuard maps Tanzania&apos;s PDPA into controls, evidence and tasks — so a normal business user can see
            where they stand, what to fix, and prove it. Clear about what the Act requires, and honest about what it
            leaves to you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/signup" className="flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[14px] font-semibold text-white no-underline hover:bg-teal-dark">
              Get started free
              <Icon name="arrow-right" size={16} />
            </Link>
            <Link href="/login" className="flex items-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3 text-[14px] font-semibold text-ink no-underline hover:border-teal hover:text-teal">
              Sign in
            </Link>
          </div>
          <p className="mt-4 text-[12px] text-ink-faint">
            Coverage describes assessed and evidenced controls. It is not a statement of legal compliance.
          </p>
        </div>

        {/* stat strip */}
        <div className="mx-auto mt-14 grid max-w-[820px] grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["123", "Controls mapped"],
            ["96", "Requirements"],
            ["9", "Parts of the Act"],
            ["1", "Framework, versioned"],
          ].map(([v, k]) => (
            <div key={k} className="rounded-card border border-line bg-surface px-5 py-5 text-center">
              <div className="font-serif text-[40px] leading-none text-ink">{v}</div>
              <div className="mt-2 text-[12px] text-ink-muted">{k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* features */}
      <section id="features" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-[1120px] px-5 py-16">
          <div className="max-w-[560px]">
            <h2 className="m-0 text-[30px] font-semibold tracking-[-0.6px] text-ink">Everything a PDPA programme needs</h2>
            <p className="m-0 mt-3 text-[15px] leading-[1.6] text-ink-muted">
              One place for the assessment, the risks it raises, the tasks that close them, and the evidence that proves it.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-card border border-line bg-ground px-6 py-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-bg text-teal">
                  <Icon name={f.icon} size={19} />
                </span>
                <h3 className="m-0 mt-4 text-[16px] font-semibold text-ink">{f.title}</h3>
                <p className="m-0 mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section id="how" className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-16">
          <h2 className="m-0 text-[30px] font-semibold tracking-[-0.6px] text-ink">How it works</h2>
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
                stated, derived, or a practical interpretation. Where the Act leaves detail to regulations, DataGuard
                says so rather than inventing an answer. It supports compliance management; it does not constitute legal
                advice or certification.
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

      {/* CTA */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-16 text-center">
          <h2 className="mx-auto max-w-[20ch] text-[32px] font-semibold tracking-[-0.7px] text-ink">Start your PDPA assessment today</h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-[15px] text-ink-muted">Create a workspace in a minute. Your answers, evidence and tasks are private to your organisation.</p>
          <div className="mt-7 flex justify-center gap-3">
            <Link href="/signup" className="flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[14px] font-semibold text-white no-underline hover:bg-teal-dark">
              Create your workspace
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
