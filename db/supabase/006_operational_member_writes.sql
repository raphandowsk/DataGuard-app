-- Operational registers: grant org members insert/update/delete.
-- Until now the operational tables (activities, sensitive_data, retention_schedule,
-- transfers, rights_requests, consent_records, processors, contracts, policies,
-- evidence, incidents, incident_timeline) had SELECT policies only, so members
-- could read but not maintain their own org's records. This mirrors the tasks
-- table: every write is scoped to the caller's organisation via
-- private.is_org_member(org_id). Applied as migration operational_member_writes.

do $$
declare t text;
begin
  foreach t in array array[
    'activities','sensitive_data','retention_schedule','transfers','rights_requests',
    'consent_records','processors','contracts','policies','evidence','incidents','incident_timeline'
  ]
  loop
    execute format('drop policy if exists "members insert %1$s" on public.%1$I', t);
    execute format('create policy "members insert %1$s" on public.%1$I for insert to authenticated with check (private.is_org_member(org_id))', t);
    execute format('drop policy if exists "members update %1$s" on public.%1$I', t);
    execute format('create policy "members update %1$s" on public.%1$I for update to authenticated using (private.is_org_member(org_id)) with check (private.is_org_member(org_id))', t);
    execute format('drop policy if exists "members delete %1$s" on public.%1$I', t);
    execute format('create policy "members delete %1$s" on public.%1$I for delete to authenticated using (private.is_org_member(org_id))', t);
  end loop;
end $$;
