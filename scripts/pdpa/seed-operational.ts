/**
 * Seeds the org-scoped register tables (activities, processors, contracts,
 * retention, sensitive) for Mazingira Trust, from the app fixtures. Signs in as
 * the demo member so the writes pass RLS. Idempotent upserts.
 *
 *   node scripts/pdpa/seed-operational.ts
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createClient } from "@supabase/supabase-js";
import { ACTIVITIES } from "../../src/lib/data/inventory.ts";
import { PROCESSORS, CONTRACTS } from "../../src/lib/data/processors.ts";
import { RETENTION } from "../../src/lib/data/retention.ts";
import { SENSITIVE } from "../../src/lib/data/sensitive.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const env = Object.fromEntries(
  readFileSync(join(ROOT, ".env.local"), "utf8")
    .split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }),
);

const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
  auth: { persistSession: false },
});

async function main() {
  const { error: authErr } = await sb.auth.signInWithPassword({ email: "demo@dataguard.app", password: "DataGuard!2026" });
  if (authErr) throw new Error("sign-in: " + authErr.message);

  const { data: org, error: orgErr } = await sb.from("organisations").select("id").eq("slug", "mazingira-trust").single();
  if (orgErr) throw new Error("org: " + orgErr.message);
  const orgId = (org as { id: string }).id;

  const upsert = async (table: string, rows: Record<string, unknown>[], conflict: string) => {
    const { error } = await sb.from(table).upsert(rows.map((r, i) => ({ org_id: orgId, display_order: i + 1, ...r })), { onConflict: conflict });
    if (error) throw new Error(`${table}: ${error.message}`);
    console.log(`  ${table}: ${rows.length}`);
  };

  await upsert("activities", ACTIVITIES.map((a) => ({
    code: a.id, name: a.name, dept: a.dept, subjects: a.subjects, cats: a.cats, sensitive: a.sensitive,
    basis: a.basis, purpose: a.purpose, systems: a.systems, recipients: a.recipients, country: a.country,
    retention: a.retention, status: a.status,
  })), "org_id,code");

  await upsert("processors", PROCESSORS.map((p) => ({
    name: p.name, service: p.service, country: p.country, data: p.data, contract: p.contract,
    tone: p.tone, review: p.review, activities: p.activities,
  })), "org_id,name");

  await upsert("contracts", CONTRACTS.map((c) => ({
    processor: c.processor, signed: c.signed, expires: c.expires, have: c.have, status: c.status, tone: c.tone,
  })), "org_id,processor");

  await upsert("retention_schedule", RETENTION.map((r) => ({
    record: r.record, period: r.period, source: r.source, disposal: r.disposal, next: r.next, status: r.status,
  })), "org_id,record");

  await upsert("sensitive_data", SENSITIVE.map((s) => ({
    cat: s.cat, activity: s.activity, subjects: s.subjects, n: s.n, basis: s.basis, access: s.access,
    status: s.status, masked: s.masked,
  })), "org_id,cat");

  console.log("Operational seed complete.");
}

main().catch((e) => { console.error("SEED FAILED:", e.message); process.exit(1); });
