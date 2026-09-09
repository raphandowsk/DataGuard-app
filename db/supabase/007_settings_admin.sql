-- Settings / admin capabilities. Applied as migration settings_admin.
--
-- Adds a DPO check, lets the DPO edit the organisation and manage members,
-- a pending-invitations table, a members-with-email reader, and a
-- delete-whole-workspace routine. SECURITY DEFINER functions are executable by
-- authenticated users by design (each gates on membership / DPO internally),
-- which the linter flags as informational — the same as provision_org.

create or replace function private.is_org_dpo(o uuid)
returns boolean language sql security definer stable set search_path = '' as $$
  select exists (
    select 1 from public.organisation_members m
    where m.org_id = o and m.user_id = auth.uid() and m.role = 'dpo'
  );
$$;

-- Organisation profile editable by the DPO.
drop policy if exists "dpo update org" on public.organisations;
create policy "dpo update org" on public.organisations for update to authenticated
  using (private.is_org_dpo(id)) with check (private.is_org_dpo(id));

-- Team management: DPO changes roles; DPO or the member removes a membership.
drop policy if exists "dpo update members" on public.organisation_members;
create policy "dpo update members" on public.organisation_members for update to authenticated
  using (private.is_org_dpo(org_id)) with check (private.is_org_dpo(org_id));
drop policy if exists "manage members delete" on public.organisation_members;
create policy "manage members delete" on public.organisation_members for delete to authenticated
  using (private.is_org_dpo(org_id) or user_id = auth.uid());

-- Pending invitations (DPO writes; members read).
create table if not exists public.org_invitations (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organisations(id) on delete cascade,
  email text not null,
  role text not null default 'contributor',
  status text not null default 'pending',
  invited_by uuid default auth.uid(),
  created_at timestamptz default now()
);
alter table public.org_invitations enable row level security;
drop policy if exists "members read invites" on public.org_invitations;
create policy "members read invites" on public.org_invitations for select to authenticated using (private.is_org_member(org_id));
drop policy if exists "dpo insert invites" on public.org_invitations;
create policy "dpo insert invites" on public.org_invitations for insert to authenticated with check (private.is_org_dpo(org_id));
drop policy if exists "dpo update invites" on public.org_invitations;
create policy "dpo update invites" on public.org_invitations for update to authenticated using (private.is_org_dpo(org_id)) with check (private.is_org_dpo(org_id));
drop policy if exists "dpo delete invites" on public.org_invitations;
create policy "dpo delete invites" on public.org_invitations for delete to authenticated using (private.is_org_dpo(org_id));

-- Members with email (auth.users is not exposed to the API).
create or replace function public.list_org_members(p_org uuid)
returns table(user_id uuid, email text, role text, is_you boolean)
language sql security definer stable set search_path = '' as $$
  select m.user_id, u.email::text, m.role, (m.user_id = auth.uid())
  from public.organisation_members m
  join auth.users u on u.id = m.user_id
  where m.org_id = p_org and private.is_org_member(p_org)
  order by (m.role = 'dpo') desc, u.email;
$$;
revoke execute on function public.list_org_members(uuid) from public, anon;
grant execute on function public.list_org_members(uuid) to authenticated;

-- Delete a whole workspace and its data (DPO only).
create or replace function public.delete_org(p_org uuid)
returns void language plpgsql security definer set search_path = '' as $$
begin
  if not private.is_org_dpo(p_org) then raise exception 'not authorised'; end if;
  delete from public.activities where org_id = p_org;
  delete from public.sensitive_data where org_id = p_org;
  delete from public.retention_schedule where org_id = p_org;
  delete from public.transfers where org_id = p_org;
  delete from public.rights_requests where org_id = p_org;
  delete from public.consent_records where org_id = p_org;
  delete from public.processors where org_id = p_org;
  delete from public.contracts where org_id = p_org;
  delete from public.policies where org_id = p_org;
  delete from public.evidence where org_id = p_org;
  delete from public.incident_timeline where org_id = p_org;
  delete from public.incidents where org_id = p_org;
  delete from public.tasks where org_id = p_org;
  delete from public.risks where org_id = p_org;
  delete from public.org_invitations where org_id = p_org;
  delete from public.organisation_members where org_id = p_org;
  delete from public.organisations where id = p_org;
end $$;
revoke execute on function public.delete_org(uuid) from public, anon;
grant execute on function public.delete_org(uuid) to authenticated;
