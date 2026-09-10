"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { useAuth } from "@/lib/supabase/auth";
import { resetOrgCache } from "@/lib/supabase/operational";

/** Shown to a signed-in user who is not yet a member of any organisation. */
export function CreateWorkspace() {
  const { client, email, signOut } = useAuth();
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!client) return;
    setBusy(true);
    setError(null);
    // Call rpc as a member of the client so `this` stays bound (supabase-js
    // reads this.rest internally); detaching the method throws at call time.
    type RpcClient = {
      rpc: (
        fn: string,
        args: Record<string, unknown>,
      ) => Promise<{ error: { message: string } | null }>;
    };
    try {
      const { error } = await (client as unknown as RpcClient).rpc("provision_org", {
        p_name: name.trim(),
        p_sector: sector.trim(),
      });
      if (error) {
        setBusy(false);
        setError(error.message);
        return;
      }
    } catch (err) {
      setBusy(false);
      setError(err instanceof Error ? err.message : "Could not create the workspace. Please try again.");
      return;
    }
    // Clear the cached (empty) active org, then reload so the whole app picks up
    // the new tenant cleanly.
    resetOrgCache();
    window.location.reload();
  };

  return (
    <div className="grid min-h-screen place-items-center bg-ground px-5">
      <div className="w-full max-w-[440px]">
        <div className="mb-6 flex items-center gap-2.5">
          <span className="grid h-[30px] w-[30px] place-items-center rounded-[9px] bg-teal text-white">
            <Icon name="shield-check" size={17} />
          </span>
          <span className="text-[17px] font-semibold tracking-[-0.3px]">DataGuard</span>
        </div>
        <div className="rounded-card border border-line bg-surface px-7 py-7">
          <h1 className="m-0 text-[22px] font-semibold tracking-[-0.4px]">Create your workspace</h1>
          <p className="m-0 mt-2 text-[13.5px] leading-[1.6] text-ink-muted">
            Signed in as {email}. Set up your organisation to start its Tanzania PDPA assessment. You&apos;ll be its data
            protection officer; you can invite others later.
          </p>
          <form onSubmit={create} className="mt-6 flex flex-col gap-3.5">
            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-semibold">Organisation name</span>
              <input
                required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Mazingira Trust"
                className="min-h-[44px] rounded-[11px] border border-line-strong bg-surface px-3.5 text-[14px]"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-semibold">Sector <span className="font-normal text-ink-faint">(optional)</span></span>
              <input
                value={sector} onChange={(e) => setSector(e.target.value)} placeholder="e.g. Environmental NGO"
                className="min-h-[44px] rounded-[11px] border border-line-strong bg-surface px-3.5 text-[14px]"
              />
            </label>
            {error && (
              <div className="flex items-start gap-2 rounded-[10px] border border-[#f3cec8] bg-crit-bg px-3 py-2 text-[12px] text-crit-fg">
                <Icon name="circle-alert" size={14} className="mt-px flex-none" />
                <span>{error}</span>
              </div>
            )}
            <button type="submit" disabled={busy} className="mt-1 flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-teal text-[14px] font-semibold text-white hover:bg-teal-dark disabled:opacity-50">
              {busy ? <Icon name="loader" size={16} className="animate-spin" /> : <Icon name="arrow-right" size={16} />}
              {busy ? "Creating…" : "Create workspace"}
            </button>
          </form>
        </div>
        <button onClick={() => signOut()} className="mx-auto mt-4 block text-[12px] font-semibold text-ink-muted hover:text-ink">
          Sign out
        </button>
      </div>
    </div>
  );
}
