import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1120px] px-5 py-10">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-[360px]">
            <div className="flex items-center gap-2.5">
              <span className="grid h-[28px] w-[28px] place-items-center rounded-[8px] bg-teal text-white">
                <Icon name="shield-check" size={16} />
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.3px]">DataGuard</span>
            </div>
            <p className="m-0 mt-3 text-[12.5px] leading-[1.6] text-ink-muted">
              Compliance management for the Tanzania Personal Data Protection Act, 2022. DataGuard maps the Act into
              controls, evidence and tasks — it does not provide legal advice.
            </p>
          </div>
          <div className="flex gap-14">
            <div>
              <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.7px] text-ink-faint">Product</div>
              <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[13px]">
                <li><a href="/#features" className="text-ink-mid no-underline hover:text-teal">Features</a></li>
                <li><a href="/#framework" className="text-ink-mid no-underline hover:text-teal">Framework</a></li>
                <li><Link href="/signup" className="text-ink-mid no-underline hover:text-teal">Get started</Link></li>
                <li><Link href="/login" className="text-ink-mid no-underline hover:text-teal">Sign in</Link></li>
              </ul>
            </div>
            <div>
              <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.7px] text-ink-faint">Legal</div>
              <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[13px]">
                <li><Link href="/privacy" className="text-ink-mid no-underline hover:text-teal">Privacy policy</Link></li>
                <li><Link href="/terms" className="text-ink-mid no-underline hover:text-teal">Terms of service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-[11.5px] text-ink-faint">
          <span>© {new Date().getFullYear()} DataGuard. A product implementation mapping — not legal advice.</span>
          <span>Tanzania PDPA 2022 · Matrix v1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
