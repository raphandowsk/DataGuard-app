"use client";

import { Icon } from "@/components/ui/Icon";
import { PORTAL_RIGHTS } from "@/lib/data/rights";
import { useUI } from "@/lib/store";

/** The public data-subject request portal, previewed as a member of the public sees it. */
export function PublicPortal() {
  const open = useUI((s) => s.portal);
  const step = useUI((s) => s.portalStep);
  const close = useUI((s) => s.closePortal);
  const submit = useUI((s) => s.submitPortal);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[88] animate-fade overflow-y-auto bg-panel">
      <div className="flex flex-wrap items-center gap-3 bg-ink px-[22px] py-[11px] text-white">
        <Icon name="eye" size={15} className="flex-none" />
        <span className="min-w-0 flex-1 text-[12px]">Previewing the public request portal as a member of the public would see it. Nothing here requires an account.</span>
        <button onClick={close} className="flex flex-none items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-ink hover:bg-line">
          <Icon name="x" size={14} className="flex-none" />
          Back to DataGuard
        </button>
      </div>

      <header className="border-b border-line bg-surface px-[22px] py-4">
        <div className="mx-auto flex max-w-[720px] items-center gap-[11px]">
          <div className="grid h-8 w-8 flex-none place-items-center rounded-[9px] text-white" style={{ background: "#2f6b4f" }}>
            <Icon name="sprout" size={17} />
          </div>
          <div>
            <div className="text-[15px] font-semibold tracking-[-0.2px]">Mazingira Trust</div>
            <div className="text-[11px] text-ink-muted">Personal data request</div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[720px] px-[22px] pb-[60px] pt-8">
        {step === 0 ? (
          <div>
            <h1 className="m-0 mb-2.5 text-[26px] font-semibold leading-[1.25] tracking-[-0.5px]">Ask us about your personal data</h1>
            <p className="m-0 mb-[26px] max-w-[64ch] text-[14px] leading-[1.65] text-ink-mid [text-wrap:pretty]">
              You can ask for a copy of the personal data we hold about you, ask us to correct or delete it, or object to
              how we use it. Tell us what you need and we will confirm receipt by email.
            </p>

            <div className="rounded-card border border-line bg-surface px-7 py-[26px]">
              <fieldset className="m-0 mb-6 border-none p-0">
                <legend className="mb-[11px] p-0 text-[13px] font-semibold">What would you like us to do?</legend>
                <div className="flex flex-col gap-2">
                  {PORTAL_RIGHTS.map((r) => (
                    <label key={r} className="flex min-h-[46px] cursor-pointer items-center gap-3 rounded-xl border-[1.5px] border-line bg-surface px-[15px] py-[13px] hover:border-line-strong hover:bg-[#fbfcfc]">
                      <span className="h-[17px] w-[17px] flex-none rounded-full border-[1.5px] border-line-strong bg-surface" />
                      <span className="text-[13.5px]">{r}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mb-[18px] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
                <Field label="Your full name" placeholder="As it appears on your ID" />
                <Field label="Email or phone" placeholder="Where we should reply" />
              </div>
              <div className="mb-[18px]">
                <label className="mb-1.5 block text-[12.5px] font-semibold">Anything that helps us find your records</label>
                <textarea rows={3} placeholder="For example a programme you took part in, a ward, or roughly when you were in contact with us." className="w-full resize-y rounded-[11px] border border-line-strong bg-surface px-[13px] py-3 text-[13.5px] leading-[1.55]" />
              </div>

              <div className="mb-5 rounded-xl border border-line bg-panel px-4 py-3.5">
                <div className="mb-[7px] flex items-center gap-2">
                  <Icon name="shield-check" size={15} className="flex-none" style={{ color: "#2f6b4f" }} />
                  <span className="text-[12.5px] font-semibold">Why we ask you to prove who you are</span>
                </div>
                <p className="m-0 text-[12px] leading-[1.6] text-ink-mid [text-wrap:pretty]">
                  We will ask for identification before we release or change anything. This protects you: it stops
                  somebody else from getting your personal data by pretending to be you. We use the identification only to
                  check your request and delete it afterwards.
                </p>
              </div>

              <button onClick={submit} className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full p-3.5 text-[14px] font-semibold text-white" style={{ background: "#2f6b4f" }}>
                <Icon name="send" size={16} className="flex-none" />
                Submit request
              </button>
              <p className="m-0 mt-3.5 text-center text-[11.5px] leading-[1.6] text-ink-muted [text-wrap:pretty]">
                You can also write to our data protection officer at dpo@mazingira.or.tz or visit the Dar es Salaam office. Making a request is free.
              </p>
            </div>
          </div>
        ) : (
          <div className="rounded-card border border-line bg-surface px-[34px] py-11 text-center">
            <div className="mx-auto mb-[18px] grid h-[52px] w-[52px] place-items-center rounded-full bg-good-bg" style={{ color: "#2f6b4f" }}>
              <Icon name="check" size={26} />
            </div>
            <h1 className="m-0 mb-2.5 text-[22px] font-semibold tracking-[-0.4px]">We have your request</h1>
            <p className="m-0 mx-auto mb-1.5 max-w-[52ch] text-[14px] leading-[1.65] text-ink-mid [text-wrap:pretty]">Your reference is <strong>DSR-2026-042</strong>. Keep it for any follow-up.</p>
            <p className="m-0 mx-auto mb-[26px] max-w-[52ch] text-[13px] leading-[1.65] text-ink-muted [text-wrap:pretty]">
              We have sent a confirmation to the address you gave us, along with the next step for proving your identity. Our data protection officer handles requests personally.
            </p>
            <div className="mx-auto flex max-w-[400px] flex-col gap-[11px] text-left">
              <Step n={1} active text="Confirm your identity using the link in the email." />
              <Step n={2} text="We locate your records across our programmes and systems." />
              <Step n={3} text="We respond, and explain our reasons if we cannot do what you asked." />
            </div>
            <button onClick={close} className="mt-[26px] rounded-full border border-line-strong bg-surface px-5 py-2.5 text-[12.5px] font-semibold hover:border-[#2f6b4f]" style={{ color: "#0e1a1c" }}>
              Close preview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-[12.5px] font-semibold">{label}</label>
      <input type="text" placeholder={placeholder} className="min-h-[44px] w-full rounded-[11px] border border-line-strong bg-surface px-[13px] py-[11px] text-[13.5px]" />
    </div>
  );
}

function Step({ n, text, active }: { n: number; text: string; active?: boolean }) {
  return (
    <div className="flex items-start gap-[11px] rounded-xl bg-panel px-[15px] py-[13px]">
      <span
        className="grid h-[22px] w-[22px] flex-none place-items-center rounded-full text-[11px] font-bold"
        style={active ? { background: "#2f6b4f", color: "#fff" } : { background: "#eef1f2", color: "#5b6b6e" }}
      >
        {n}
      </span>
      <div className="text-[12.5px] leading-[1.55]">{text}</div>
    </div>
  );
}
