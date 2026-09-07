-- Multi-tenant foundation + first operational domains (tasks, risks).
-- Applied to Supabase project udlrihnuwfwndbpmxqtq. Reflects final state
-- (membership helper lives in a private schema so it is not exposed as an RPC).

create table if not exists organisations (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  sector text,
  coverage_pct int,
  open_tasks int,
  critical_risks int,
  next_review text,
  is_primary boolean default false,
  created_at timestamptz default now()
);

create table if not exists organisation_members (
  org_id uuid not null references organisations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member',
  primary key (org_id, user_id)
);

-- Membership test used by every org-scoped policy. In a PRIVATE schema so it is
-- not reachable via PostgREST RPC; SECURITY DEFINER so it can read memberships
-- without recursing through organisation_members' own RLS.
create schema if not exists private;
grant usage on schema private to authenticated;
create or replace function private.is_org_member(o uuid)
returns boolean language sql security definer set search_path = '' stable as $$
  select exists (select 1 from public.organisation_members m where m.org_id = o and m.user_id = auth.uid());
$$;
grant execute on function private.is_org_member(uuid) to authenticated;

create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  code text not null,
  title text not null,
  control_id text, priority text, status text, owner text, due text,
  overdue boolean default false, reason text, display_order int,
  updated_at timestamptz not null default now(),
  unique (org_id, code)
);

create table if not exists risks (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organisations(id) on delete cascade,
  code text not null,
  control_id text, title text not null, domain text,
  likelihood int, impact int, owner text, due text,
  overdue boolean default false, display_order int,
  unique (org_id, code)
);

alter table organisations enable row level security;
alter table organisation_members enable row level security;
alter table tasks enable row level security;
alter table risks enable row level security;

create policy "members read their orgs" on organisations for select to authenticated using (private.is_org_member(id));
create policy "read own memberships" on organisation_members for select to authenticated using (user_id = auth.uid());

create policy "members read tasks" on tasks for select to authenticated using (private.is_org_member(org_id));
create policy "members write tasks insert" on tasks for insert to authenticated with check (private.is_org_member(org_id));
create policy "members write tasks update" on tasks for update to authenticated using (private.is_org_member(org_id)) with check (private.is_org_member(org_id));
create policy "members write tasks delete" on tasks for delete to authenticated using (private.is_org_member(org_id));

create policy "members read risks" on risks for select to authenticated using (private.is_org_member(org_id));
create policy "members write risks insert" on risks for insert to authenticated with check (private.is_org_member(org_id));
create policy "members write risks update" on risks for update to authenticated using (private.is_org_member(org_id)) with check (private.is_org_member(org_id));
create policy "members write risks delete" on risks for delete to authenticated using (private.is_org_member(org_id));

create trigger tasks_updated_at before update on tasks
  for each row execute function public.set_updated_at();

-- Seed data (organisations, demo-user memberships, Mazingira tasks & risks) is
-- applied via the seed_orgs_members_operational migration; see the MCP history.
