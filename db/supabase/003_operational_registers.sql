-- Org-scoped operational register tables (data + records + people clusters).
-- Applied to Supabase project udlrihnuwfwndbpmxqtq. Every table carries org_id
-- and membership RLS via private.is_org_member (see 002_multitenant.sql).
-- Seeded from the app fixtures by scripts/pdpa/seed-operational.ts (signs in as
-- the demo member so writes pass RLS).

-- Data cluster
create table if not exists activities (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  code text not null, name text not null, dept text, subjects text, cats text,
  sensitive boolean default false, basis text, purpose text, systems text,
  recipients text, country text, retention text, status text, display_order int,
  unique (org_id, code)
);
create table if not exists processors (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  name text not null, service text, country text, data text, contract text,
  tone text, review text, activities int, display_order int, unique (org_id, name)
);
create table if not exists contracts (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  processor text not null, signed text, expires text, have int, status text, tone text,
  display_order int, unique (org_id, processor)
);
create table if not exists retention_schedule (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  record text not null, period text, source text, disposal text, next text, status text,
  display_order int, unique (org_id, record)
);
create table if not exists sensitive_data (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  cat text not null, activity text, subjects text, n text, basis text, access text,
  status text, masked boolean default true, display_order int, unique (org_id, cat)
);

-- Records & people cluster
create table if not exists policies (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  name text not null, version text, owner text, approved text, next text,
  controls int, status text, display_order int, unique (org_id, name)
);
create table if not exists evidence (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  name text not null, kind text, controls int, owner text, added text, expiry text,
  strength text, size text, display_order int, unique (org_id, name)
);
create table if not exists audit_log (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  t text, who text, role text, action text, object text, from_val text, to_val text, ip text,
  display_order int, unique (org_id, display_order)
);
create table if not exists rights_requests (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  code text not null, subject text, type text, received text, days int, stage text,
  verified boolean default false, activity text, owner text, channel text, display_order int,
  unique (org_id, code)
);
create table if not exists consent_records (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  purpose text not null, version text, method text, held text, withdrawn text, updated text, status text,
  display_order int, unique (org_id, purpose)
);

-- RLS: members of the owning org. One FOR ALL policy per table, except audit_log
-- which is read + insert only (append-only log).
do $$
declare tbl text;
begin
  foreach tbl in array array['activities','processors','contracts','retention_schedule','sensitive_data',
                             'policies','evidence','rights_requests','consent_records'] loop
    execute format('alter table %I enable row level security', tbl);
    execute format('create policy "members all %1$s" on %1$s for all to authenticated using (private.is_org_member(org_id)) with check (private.is_org_member(org_id))', tbl);
  end loop;
  alter table audit_log enable row level security;
  create policy "members read audit" on audit_log for select to authenticated using (private.is_org_member(org_id));
  create policy "members write audit" on audit_log for insert to authenticated with check (private.is_org_member(org_id));
end $$;
