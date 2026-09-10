# Supabase — compliance framework

The DataGuard app reads the PDPA control matrix live from Supabase
(project `udlrihnuwfwndbpmxqtq`). These files reproduce that state.

## Files

- `001_schema.sql` — the six framework tables (framework → version → parts →
  sections → requirements → controls) with public read-only RLS. Reference data
  only; no personal data.
- `seed-framework.sql` — generated, idempotent upserts of the full Tanzania PDPA
  2022 matrix (1 framework, 1 version, 10 parts, 66 sections, 96 requirements,
  123 controls). Produced by `scripts/pdpa/gen-supabase-sql.mjs` from the source
  of truth in `scripts/pdpa-2022.source.mjs`.

## Reproducing on a fresh project

1. Run `001_schema.sql` (Supabase SQL editor, or `apply_migration`).
2. Seed with either:
   - `node scripts/pdpa/seed-supabase.mjs` (uses the publishable key in
     `.env.local`; requires a temporary anon write policy while it runs), or
   - `seed-framework.sql` run through a privileged channel (SQL editor / service role),
     which bypasses RLS and needs no temporary policy.
3. Point the app at the project via `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```

## App wiring

- `src/lib/supabase/client.ts` — typed browser client (null when env absent).
- `src/lib/supabase/database.types.ts` — generated types.
- `src/lib/supabase/useFramework.ts` — live framework summary hook.
- The dashboard and settings show a **Live · Supabase** badge and read the
  control/requirement counts from the database; everything falls back to local
  fixtures when the env is not configured.

Operational data (risks, tasks, incidents, rights requests, etc.) is still local
fixture data — persisting it needs a multi-tenant schema and auth, a later step.
