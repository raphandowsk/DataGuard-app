-- Incident + transfer domains. Org-scoped with membership RLS (see 002).
-- Seeded from fixtures by scripts/pdpa/seed-operational.ts.

create table if not exists incidents (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  code text not null, title text, detected text, severity text, stage text,
  records text, notified boolean default false, source text, display_order int,
  unique (org_id, code)
);
create table if not exists incident_timeline (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  incident_code text not null, t text, label text, who text, state text, note text, display_order int,
  unique (org_id, incident_code, display_order)
);
create table if not exists transfers (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  code text not null, dest text, processor text, data text, volume text, basis text,
  status text, tone text, owner text, note text, display_order int,
  unique (org_id, code)
);

alter table incidents enable row level security;
alter table incident_timeline enable row level security;
alter table transfers enable row level security;

create policy "members all incidents" on incidents for all to authenticated using (private.is_org_member(org_id)) with check (private.is_org_member(org_id));
create policy "members all incident_timeline" on incident_timeline for all to authenticated using (private.is_org_member(org_id)) with check (private.is_org_member(org_id));
create policy "members all transfers" on transfers for all to authenticated using (private.is_org_member(org_id)) with check (private.is_org_member(org_id));
