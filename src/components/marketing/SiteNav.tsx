import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/** Public marketing header. */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-[60px] max-w-[1120px] items-center gap-3 px-5">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="grid h-[30px] w-[30px] place-items-center rounded-[9px] bg-teal text-white">
            <Icon name="shield-check" size={17} />
          </span>
          <span className="text-[17px] font-semibold tracking-[-0.3px] text-ink">DataGuard</span>
        </Link>
        <nav className="ml-6 hidden items-center gap-6 md:flex">
          <a href="/#features" className="text-[13px] text-ink-mid no-underline hover:text-ink">Features</a>
          <a href="/#how" className="text-[13px] text-ink-mid no-underline hover:text-ink">How it works</a>
          <a href="/#framework" className="text-[13px] text-ink-mid no-underline hover:text-ink">Framework</a>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/login" className="rounded-full px-3.5 py-2 text-[13px] font-semibold text-ink-mid no-underline hover:text-teal">
            Sign in
          </Link>
          <Link href="/signup" className="rounded-full bg-teal px-3.5 py-2 text-[13px] font-semibold text-white no-underline hover:bg-teal-dark">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
