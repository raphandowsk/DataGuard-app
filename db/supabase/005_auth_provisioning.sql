-- Self-serve workspace provisioning for newly registered users.
-- A signed-up user has no org membership yet; the app calls provision_org to
-- create their organisation and enrol them as its DPO. SECURITY DEFINER so it
-- can insert into organisations / organisation_members (member-read-only under
-- RLS). Execute is granted to authenticated only (Postgres grants to PUBLIC by
-- default, so anon is explicitly revoked).

create or replace function public.provision_org(p_name text, p_sector text default null)
returns uuid language plpgsql security definer set search_path = '' as $$
declare
  new_id uuid;
  first_org boolean;
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;
  if coalesce(trim(p_name), '') = '' then
    raise exception 'organisation name is required';
  end if;

  select not exists (select 1 from public.organisation_members m where m.user_id = auth.uid()) into first_org;

  insert into public.organisations (slug, name, sector, coverage_pct, open_tasks, critical_risks, is_primary)
  values (
    lower(regexp_replace(p_name, '[^a-zA-Z0-9]+', '-', 'g')) || '-' || substr(replace(gen_random_uuid()::text, '-', ''), 1, 6),
    trim(p_name), nullif(trim(coalesce(p_sector, '')), ''), 0, 0, 0, first_org
  )
  returning id into new_id;

  insert into public.organisation_members (org_id, user_id, role)
  values (new_id, auth.uid(), 'dpo');

  return new_id;
end $$;

revoke execute on function public.provision_org(text, text) from public, anon;
grant execute on function public.provision_org(text, text) to authenticated;

-- Note: the demo account (demo@dataguard.app) is seeded directly in auth.users
-- for the hosted demo (see the seed_demo_user migration in project history);
-- real users self-register through Supabase Auth on /signup.
