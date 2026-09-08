import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/** Two-pane auth screen: brand panel + the form card. */
export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-ground md:grid-cols-2">
      {/* brand panel */}
      <div className="relative hidden flex-col justify-between bg-ink px-12 py-12 md:flex">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="grid h-[30px] w-[30px] place-items-center rounded-[9px] bg-teal text-white">
            <Icon name="shield-check" size={17} />
          </span>
          <span className="text-[17px] font-semibold tracking-[-0.3px] text-white">DataGuard</span>
        </Link>
        <div>
          <h2 className="m-0 max-w-[18ch] font-serif text-[34px] leading-[1.15] text-white">
            The Tanzania PDPA, as a plan you can act on.
          </h2>
          <p className="m-0 mt-4 max-w-[46ch] text-[13.5px] leading-[1.7] text-white/70">
            123 controls, each with its legal reference, the evidence it needs and the risk it carries. Assess, remediate
            and prove — in one workspace.
          </p>
        </div>
        <p className="m-0 text-[11.5px] text-white/45">
          A product implementation mapping of the Personal Data Protection Act, 2022. Not legal advice.
        </p>
      </div>

      {/* form */}
      <div className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-[380px]">
          <Link href="/" className="mb-8 flex items-center gap-2.5 no-underline md:hidden">
            <span className="grid h-[30px] w-[30px] place-items-center rounded-[9px] bg-teal text-white">
              <Icon name="shield-check" size={17} />
            </span>
            <span className="text-[17px] font-semibold tracking-[-0.3px] text-ink">DataGuard</span>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
