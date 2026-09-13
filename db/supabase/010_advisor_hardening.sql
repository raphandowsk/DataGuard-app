-- Hardening pass to clear the Supabase database advisors (performance).
-- All changes are semantics-preserving; no access boundary changes.
--
--  1. Covering indexes for two foreign keys (advisor: unindexed_foreign_keys).
--  2. Consolidate duplicate permissive policies on the operational registers
--     (advisor: multiple_permissive_policies): the "members all <t>" FOR ALL
--     policy from 003 already covers INSERT/UPDATE/DELETE with the exact same
--     private.is_org_member(org_id) check, so the per-action policies added in
--     006 are redundant. Dropping them leaves identical access via "members all".
--  3. Wrap auth.uid() in a scalar subquery on the two organisation_members
--     policies that referenced it directly (advisor: auth_rls_initplan), so it is
--     evaluated once per statement instead of once per row.
--
-- Idempotent.

-- 1. Foreign-key covering indexes ------------------------------------------
create index if not exists idx_org_invitations_org_id
  on public.org_invitations (org_id);
create index if not exists idx_organisation_members_user_id
  on public.organisation_members (user_id);

-- 2. Drop redundant per-action register policies (kept: "members all <t>") --
do $$
declare t text;
begin
  foreach t in array array[
    'activities','sensitive_data','retention_schedule','transfers','rights_requests',
    'consent_records','processors','contracts','policies','evidence','incidents','incident_timeline'
  ]
  loop
    execute format('drop policy if exists "members insert %1$s" on public.%1$I', t);
    execute format('drop policy if exists "members update %1$s" on public.%1$I', t);
    execute format('drop policy if exists "members delete %1$s" on public.%1$I', t);
  end loop;
end $$;

-- 3. Optimise auth.uid() re-evaluation on organisation_members -------------
drop policy if exists "read own memberships" on public.organisation_members;
create policy "read own memberships" on public.organisation_members
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "manage members delete" on public.organisation_members;
create policy "manage members delete" on public.organisation_members
  for delete to authenticated
  using (private.is_org_dpo(org_id) or user_id = (select auth.uid()));
