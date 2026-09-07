"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { getSupabaseBrowser, type SupaClient } from "./client";
import { fetchAnswers } from "./answers";
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

  // Hydrate saved answers whenever a user becomes signed in.
  useEffect(() => {
    if (!sb || !session) return;
    let cancelled = false;
    fetchAnswers(sb)
      .then(({ answers, notes }) => {
        if (cancelled) return;
        // Merge saved answers over the demo defaults so returning users see their work.
        const cur = useUI.getState();
        useUI.getState().hydrateAnswers({ ...cur.answers, ...answers }, { ...cur.notesById, ...notes });
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
