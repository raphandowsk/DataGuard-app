"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { useAuth } from "@/lib/supabase/auth";
import { useUI } from "@/lib/store";

export function AuthDialog() {
  const open = useUI((s) => s.authOpen);
  const setOpen = useUI((s) => s.setAuthOpen);
  const { signIn, configured } = useAuth();
  const [email, setEmail] = useState("demo@dataguard.app");
  const [password, setPassword] = useState("DataGuard!2026");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error } = await signIn(email.trim(), password);
    setBusy(false);
    if (error) {
      setError(error);
      return;
    }
    setOpen(false);
    useUI.getState().flash("Signed in. Your assessment answers now save to your account.");
  };

  return (
    <div className="fixed inset-0 z-[96] grid place-items-center bg-[rgba(14,26,28,0.32)] p-6" onClick={() => setOpen(false)}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dg-auth-title"
        className="w-[min(420px,94vw)] animate-fade overflow-hidden rounded-[18px] bg-surface shadow-[0_24px_60px_rgba(14,26,28,0.22)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-line px-6 pb-4 pt-5">
          <div className="mb-2 flex items-center gap-2.5">
            <div className="grid h-8 w-8 flex-none place-items-center rounded-[9px] bg-teal text-white">
              <Icon name="shield-check" size={17} />
            </div>
            <h2 id="dg-auth-title" className="m-0 text-[16px] font-semibold">Sign in to DataGuard</h2>
          </div>
          <p className="m-0 text-[12.5px] leading-[1.5] text-ink-muted">
            Sign in to save your assessment answers to your account. They persist across sessions and are private to you.
          </p>
        </div>
        <form onSubmit={submit} className="px-6 py-5">
          <label className="mb-1.5 block text-[12.5px] font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            className="mb-3.5 min-h-[42px] w-full rounded-[11px] border border-line-strong bg-surface px-[13px] text-[13.5px]"
          />
          <label className="mb-1.5 block text-[12.5px] font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="min-h-[42px] w-full rounded-[11px] border border-line-strong bg-surface px-[13px] text-[13.5px]"
          />

          {error && (
            <div className="mt-3 flex items-start gap-2 rounded-[10px] border border-[#f3cec8] bg-crit-bg px-3 py-2 text-[12px] text-crit-fg">
              <Icon name="circle-alert" size={14} className="mt-px flex-none" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={busy || !configured}
            className="mt-4 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-teal p-3 text-[13px] font-semibold text-white hover:bg-teal-dark disabled:opacity-50"
          >
            {busy ? <Icon name="loader" size={15} className="animate-spin" /> : <Icon name="log-in" size={15} />}
            {busy ? "Signing in…" : "Sign in"}
          </button>

          <div className="mt-3.5 rounded-[10px] border border-line bg-panel px-3 py-2.5">
            <div className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold text-ink-mid">
              <Icon name="key-round" size={12} className="text-teal" />
              Demo account
            </div>
            <p className="m-0 text-[11px] leading-[1.5] text-ink-muted">
              demo@dataguard.app · DataGuard!2026 — prefilled above. Answers you record are saved to this account.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
