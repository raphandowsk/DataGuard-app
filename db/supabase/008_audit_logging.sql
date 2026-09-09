-- Audit log ordering. Applied as migration audit_log_created_at.
-- Adds a real timestamp so entries appended by the app sort newest-first,
-- independent of the display_order used by the demo seed. Application code
-- (logAudit in src/lib/supabase/operational.ts) writes an entry from every
-- mutation path — control answers, register add/edit/remove, task changes and
-- team/workspace administration — using the existing "members write audit"
-- INSERT policy.
alter table public.audit_log add column if not exists created_at timestamptz default now();
