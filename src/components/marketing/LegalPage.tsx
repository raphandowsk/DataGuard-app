import { Icon } from "@/components/ui/Icon";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";

export interface LegalSection {
  h: string;
  p: string[];
}

export function LegalPage({ title, updated, intro, sections }: { title: string; updated: string; intro: string; sections: LegalSection[] }) {
  return (
    <div className="min-h-screen bg-ground">
      <SiteNav />
      <main className="mx-auto max-w-[760px] px-5 py-14">
        <h1 className="m-0 text-[36px] font-semibold tracking-[-0.8px] text-ink">{title}</h1>
        <p className="m-0 mt-2 text-[12.5px] text-ink-faint">Last updated {updated}</p>

        <div className="mt-6 flex items-start gap-2.5 rounded-card border border-[#eed9c4] bg-high-bg px-4 py-3.5">
          <Icon name="info" size={16} className="mt-px flex-none" style={{ color: "#8a4d1f" }} />
          <p className="m-0 text-[12.5px] leading-[1.6]" style={{ color: "#5f3512" }}>
            This is a template provided with the DataGuard product. It is not legal advice. Review and adapt it with a
            qualified adviser before relying on it for your organisation.
          </p>
        </div>

        <p className="mt-6 text-[14px] leading-[1.7] text-ink-mid">{intro}</p>

        <div className="mt-8 flex flex-col gap-7">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="m-0 text-[18px] font-semibold text-ink">{i + 1}. {s.h}</h2>
              {s.p.map((para, j) => (
                <p key={j} className="m-0 mt-2.5 text-[13.5px] leading-[1.7] text-ink-mid">{para}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
