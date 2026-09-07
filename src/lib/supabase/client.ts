"use client";

import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser Supabase client. Reads the public env vars; returns null when they are
 * not configured so the prototype still runs entirely on the local data layer.
 * Data access goes through lib/data/* today; this is the seam where a live
 * Supabase-backed repository will plug in (starting with the PDPA framework in
 * db/seed/frameworks/tanzania-pdpa-2022.ts).
 */
export function getSupabaseBrowser() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createBrowserClient(url, key);
}
