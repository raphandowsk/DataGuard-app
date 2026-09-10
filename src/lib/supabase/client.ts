"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./database.types";

/** Concrete client type inferred from the factory, so generics line up everywhere. */
export type SupaClient = ReturnType<typeof createBrowserClient<Database>>;

let cached: SupaClient | null | undefined;

/**
 * Shared browser Supabase client (singleton so the auth session is consistent
 * across reads, writes and the auth provider). Returns null when env vars are
 * absent so the app still runs on local fixtures.
 */
export function getSupabaseBrowser(): SupaClient | null {
  if (cached !== undefined) return cached;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  cached = url && key ? createBrowserClient<Database>(url, key) : null;
  return cached;
}

export const isSupabaseConfigured = () =>
  Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
