-- Per-user assessment answers.
--
-- This table stores each user's answer + notes for every framework control.
-- It was created directly on the hosted project early on but never captured as
-- a migration, so a fresh (e.g. self-hosted) deployment replaying 001–008 was
-- missing it and the assessment could not persist. This migration reproduces
-- the live definition exactly, so any environment gets it.
--
-- Answers are PER USER (primary key includes user_id), not per organisation:
-- each signed-in user maintains their own working set of answers, which the app
-- hydrates on sign-in and clears on account switch. RLS therefore scopes rows to
-- the owning user via auth.uid(). auth.uid() is wrapped in a scalar subquery so
-- it is evaluated once per statement, not once per row (Supabase RLS initplan
-- guidance).
--
-- Idempotent: safe to run on the existing hosted project (the table already
-- exists there, so CREATE is skipped and the policies are refreshed in place).

create table if not exists public.control_answers (
  user_id        uuid not null references auth.users(id) on delete cascade,
  framework_code text not null,
  version_code   text not null,
  control_id     text not null,
  answer         text,
  notes          text,
  updated_at     timestamptz not null default now(),
  primary key (user_id, framework_code, version_code, control_id)
);

alter table public.control_answers enable row level security;

drop policy if exists "own answers select" on public.control_answers;
create policy "own answers select" on public.control_answers
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "own answers insert" on public.control_answers;
create policy "own answers insert" on public.control_answers
  for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "own answers update" on public.control_answers;
create policy "own answers update" on public.control_answers
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "own answers delete" on public.control_answers;
create policy "own answers delete" on public.control_answers
  for delete to authenticated
  using (user_id = (select auth.uid()));
