"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { getSupabaseBrowser } from "@/lib/supabase/client";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const sb = getSupabaseBrowser();
  const isSignup = mode === "signup";
  const [email, setEmail] = useState(isSignup ? "" : "demo@dataguard.app");
  const [password, setPassword] = useState(isSignup ? "" : "DataGuard!2026");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sb) {
      setError("Supabase is not configured.");
      return;
    }
    setBusy(true);
    setError(null);
    if (isSignup) {
      const { data, error } = await sb.auth.signUp({
        email: email.trim(),
        password,
        options: { emailRedirectTo: typeof window !== "undefined" ? `${window.location.origin}/app` : undefined },
      });
      setBusy(false);
      if (error) return setError(error.message);
      if (data.session) {
        router.push("/app");
        router.refresh();
      } else {
        setSent(true); // email confirmation required
      }
    } else {
      const { error } = await sb.auth.signInWithPassword({ email: email.trim(), password });
      setBusy(false);
      if (error) return setError(error.message);
      router.push("/app");
      router.refresh();
    }
  };

  if (sent) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-good-bg text-good-fg">
          <Icon name="mail-check" size={24} />
        </div>
        <h1 className="m-0 text-[22px] font-semibold text-ink">Confirm your email</h1>
        <p className="m-0 mx-auto mt-2 max-w-[42ch] text-[13.5px] leading-[1.6] text-ink-muted">
          We sent a confirmation link to <strong>{email}</strong>. Open it to activate your account, then sign in.
        </p>
        <Link href="/login" className="mt-6 inline-block rounded-full border border-line-strong bg-surface px-5 py-2.5 text-[13px] font-semibold text-ink no-underline hover:border-teal hover:text-teal">
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="m-0 text-[24px] font-semibold tracking-[-0.5px] text-ink">
        {isSignup ? "Create your account" : "Welcome back"}
      </h1>
      <p className="m-0 mt-2 text-[13.5px] text-ink-muted">
        {isSignup ? "Start a PDPA workspace for your organisation." : "Sign in to your DataGuard workspace."}
      </p>

      <form onSubmit={submit} className="mt-6 flex flex-col gap-3.5">
        <label className="flex flex-col gap-1.5">
          <span className="text-[12.5px] font-semibold">Work email</span>
          <input
            type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username"
            placeholder="you@organisation.or.tz"
            className="min-h-[44px] rounded-[11px] border border-line-strong bg-surface px-3.5 text-[14px]"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[12.5px] font-semibold">Password</span>
          <input
            type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
            autoComplete={isSignup ? "new-password" : "current-password"} minLength={8}
            placeholder={isSignup ? "At least 8 characters" : "Your password"}
            className="min-h-[44px] rounded-[11px] border border-line-strong bg-surface px-3.5 text-[14px]"
          />
        </label>

        {error && (
          <div className="flex items-start gap-2 rounded-[10px] border border-[#f3cec8] bg-crit-bg px-3 py-2 text-[12px] text-crit-fg">
            <Icon name="circle-alert" size={14} className="mt-px flex-none" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit" disabled={busy}
          className="mt-1 flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-teal text-[14px] font-semibold text-white hover:bg-teal-dark disabled:opacity-50"
        >
          {busy ? <Icon name="loader" size={16} className="animate-spin" /> : <Icon name={isSignup ? "user-round-plus" : "log-in"} size={16} />}
          {busy ? "Please wait…" : isSignup ? "Create account" : "Sign in"}
        </button>
      </form>

      <p className="mt-5 text-center text-[12.5px] text-ink-muted">
        {isSignup ? (
          <>Already have an account? <Link href="/login" className="font-semibold text-teal no-underline hover:underline">Sign in</Link></>
        ) : (
          <>New to DataGuard? <Link href="/signup" className="font-semibold text-teal no-underline hover:underline">Create an account</Link></>
        )}
      </p>

      {!isSignup && (
        <div className="mt-4 rounded-[10px] border border-line bg-panel px-3.5 py-3">
          <div className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold text-ink-mid">
            <Icon name="key-round" size={12} className="text-teal" />
            Demo account
          </div>
          <p className="m-0 text-[11.5px] leading-[1.5] text-ink-muted">
            demo@dataguard.app · DataGuard!2026 — prefilled above. Opens the Mazingira Trust workspace.
          </p>
        </div>
      )}
    </div>
  );
}
