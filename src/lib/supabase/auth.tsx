"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { getSupabaseBrowser, type SupaClient } from "./client";
import { fetchAnswers } from "./answers";
import { resetOrgCache } from "./operational";
import { useUI } from "@/lib/store";

interface AuthValue {
  ready: boolean;
  configured: boolean;
  userId: string | null;
  email: string | null;
  client: SupaClient | null;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const sb = getSupabaseBrowser();
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const lastUid = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    if (!sb) {
      setReady(true);
      return;
    }
    sb.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    const { data: sub } = sb.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, [sb]);

  // Keep per-user state clean across account switches, and hydrate the signed-in
  // user's saved answers. When the account changes (or signs out) we wipe the
  // previous user's answers and cached org so nothing leaks between accounts;
  // hydration then REPLACES (not merges) with this user's own saved work.
  useEffect(() => {
    if (!sb) return;
    const uid = session?.user.id ?? null;
    if (lastUid.current !== uid) {
      lastUid.current = uid;
      useUI.getState().hydrateAnswers({}, {});
      resetOrgCache();
      useUI.getState().bumpData();
    }
    if (!session) return;
    let cancelled = false;
    fetchAnswers(sb)
      .then(({ answers, notes }) => {
        if (!cancelled) useUI.getState().hydrateAnswers(answers, notes);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [sb, session]);

  const value: AuthValue = {
    ready,
    configured: Boolean(sb),
    userId: session?.user.id ?? null,
    email: session?.user.email ?? null,
    client: sb,
    signIn: async (email, password) => {
      if (!sb) return { error: "Supabase is not configured." };
      const { error } = await sb.auth.signInWithPassword({ email, password });
      return { error: error ? error.message : null };
    },
    signOut: async () => {
      if (sb) await sb.auth.signOut();
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthValue {
  const v = useContext(AuthContext);
  if (!v) throw new Error("useAuth must be used within AuthProvider");
  return v;
}
