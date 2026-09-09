"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { NOTIF_SETTINGS } from "@/lib/data/settings";
import { useUI } from "@/lib/store";
import { LiveBadge } from "@/components/ui/LiveBadge";
import { useFrameworkSummary } from "@/lib/supabase/useFramework";
import { useActiveOrg, useOrgAdmin } from "@/lib/supabase/operational";
import { useAuth } from "@/lib/supabase/auth";

const ROLES = [
  { value: "dpo", label: "Data protection officer" },
  { value: "contributor", label: "Contributor" },
  { value: "viewer", label: "Read only" },
];
const roleLabel = (r: string) => ROLES.find((x) => x.value === r)?.label ?? r;

const NOTIF_KEY = "dg-notif-prefs";

export function SettingsScreen() {
  const go = useUI((s) => s.go);
  const flash = useUI((s) => s.flash);
  const fw = useFrameworkSummary();
  const live = fw.status === "live" ? fw.data : null;
  const { org } = useActiveOrg();
  const { email } = useAuth();
  const admin = useOrgAdmin();

  const [name, setName] = useState(org?.name ?? "");
  const [sector, setSector] = useState(org?.sector ?? "");
  const [savingProfile, setSavingProfile] = useState(false);
  useEffect(() => { setName(org?.name ?? ""); setSector(org?.sector ?? ""); }, [org?.name, org?.sector]);

  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("contributor");
  const [confirmDelete, setConfirmDelete] = useState("");

  const [notif, setNotif] = useState<Record<string, boolean>>(() => Object.fromEntries(NOTIF_SETTINGS.map((n) => [n.label, n.on])));
  useEffect(() => {
    try { const raw = localStorage.getItem(NOTIF_KEY); if (raw) setNotif((p) => ({ ...p, ...JSON.parse(raw) })); } catch { /* ignore */ }
  }, []);
  const toggleNotif = (label: string) => setNotif((p) => { const next = { ...p, [label]: !p[label] }; try { localStorage.setItem(NOTIF_KEY, JSON.stringify(next)); } catch { /* ignore */ } return next; });

  const me = admin.members.find((m) => m.isYou);
  const amDpo = me?.role === "dpo";
  const profileDirty = name.trim() !== (org?.name ?? "") || (sector.trim() || "") !== (org?.sector ?? "");

  const saveProfile = async () => {
    setSavingProfile(true);
    const res = await admin.updateProfile(name.trim(), sector.trim());
    setSavingProfile(false);
    flash(res.ok ? "Organisation profile updated." : res.error ?? "Could not save.");
  };

  const sendInvite = async () => {
    if (!inviteEmail.trim()) return flash("Enter an email to invite.");
    const res = await admin.invite(inviteEmail.trim(), inviteRole);
    if (res.ok) { setInviteEmail(""); flash(`Invitation created for ${inviteEmail.trim()}.`); }
    else flash(res.error ?? "Could not invite.");
  };

  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="flex flex-col gap-4">
        {/* Organisation profile */}
        <section className="rounded-card border border-line bg-surface px-[22px] py-5">
          <div className="mb-4 flex items-center justify-between gap-2">
            <h2 className="m-0 text-[13px] font-semibold">Organisation profile</h2>
            {!amDpo && <span className="rounded-full border border-line bg-panel px-2 py-0.5 text-[10.5px] text-ink-muted">DPO can edit</span>}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3.5">
            <label className="flex flex-col gap-1">
              <span className="text-[11.5px] font-semibold">Legal name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} disabled={!amDpo} className="min-h-[40px] rounded-[10px] border border-line-strong bg-surface px-3 text-[13px] disabled:opacity-60" />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-[11.5px] font-semibold">Sector</span>
              <input value={sector} onChange={(e) => setSector(e.target.value)} disabled={!amDpo} placeholder="e.g. Environmental NGO" className="min-h-[40px] rounded-[10px] border border-line-strong bg-surface px-3 text-[13px] disabled:opacity-60" />
            </label>
            <div className="flex flex-col gap-1">
              <span className="text-[11.5px] font-semibold">Jurisdiction</span>
              <div className="flex min-h-[40px] items-center rounded-[10px] border border-line bg-panel px-3 text-[13px] text-ink-mid">Tanzania</div>
            </div>
          </div>
          {amDpo && (
            <div className="mt-4 flex justify-end">
              <button onClick={saveProfile} disabled={!profileDirty || savingProfile} className="flex items-center gap-1.5 rounded-full bg-teal px-4 py-2 text-[12.5px] font-semibold text-white hover:bg-teal-dark disabled:opacity-50">
                {savingProfile ? <Icon name="loader" size={14} className="animate-spin" /> : <Icon name="check" size={14} />}
                Save changes
              </button>
            </div>
          )}
        </section>

        {/* Team */}
        <section className="overflow-hidden rounded-card border border-line bg-surface">
          <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-[22px] py-4">
            <div className="flex-1">
              <h2 className="m-0 text-[13px] font-semibold">Team and roles</h2>
              <p className="m-0 mt-[3px] text-[11.5px] text-ink-muted">{admin.members.length} member{admin.members.length === 1 ? "" : "s"} · {admin.invites.length} pending invitation{admin.invites.length === 1 ? "" : "s"}</p>
            </div>
          </div>
          {admin.members.map((m) => (
            <div key={m.userId} className="flex flex-wrap items-center gap-3 border-b border-ground px-[22px] py-3">
              <div className="grid h-8 w-8 flex-none place-items-center rounded-full bg-ink text-[11px] font-semibold text-white">{m.email.slice(0, 2).toUpperCase()}</div>
              <div className="min-w-0 flex-[1_1_220px]">
                <div className="flex items-center gap-2 text-[13px] font-medium">{m.email}{m.isYou && <span className="rounded-full border border-line bg-panel px-1.5 py-px text-[10px] font-semibold text-ink-muted">You</span>}</div>
              </div>
              {amDpo && !m.isYou ? (
                <select value={m.role} onChange={async (e) => { const res = await admin.setRole(m.userId, e.target.value); flash(res.ok ? "Role updated." : res.error ?? "Could not update."); }} className="rounded-lg border border-line-strong bg-surface px-2.5 py-1.5 text-[12px]">
                  {ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
                </select>
              ) : (
                <span className="rounded-full border border-line bg-panel px-2.5 py-1 text-[11.5px] font-semibold text-ink-muted">{roleLabel(m.role)}</span>
              )}
              {amDpo && !m.isYou && (
                <button onClick={async () => { const res = await admin.removeMember(m.userId); flash(res.ok ? "Member removed." : res.error ?? "Could not remove."); }} aria-label="Remove member" className="grid h-8 w-8 flex-none place-items-center rounded-lg text-ink-faint hover:bg-panel hover:text-crit-fg">
                  <Icon name="user-round-x" size={15} />
                </button>
              )}
            </div>
          ))}

          {admin.invites.map((inv) => (
            <div key={inv.id} className="flex flex-wrap items-center gap-3 border-b border-ground bg-[#fbfcfc] px-[22px] py-3">
              <div className="grid h-8 w-8 flex-none place-items-center rounded-full border border-dashed border-line-strong text-ink-faint"><Icon name="mail" size={14} /></div>
              <div className="min-w-0 flex-[1_1_220px]">
                <div className="text-[13px] font-medium">{inv.email}</div>
                <div className="text-[11px] text-ink-faint">Invited as {roleLabel(inv.role)} · {inv.status}</div>
              </div>
              {amDpo && (
                <button onClick={async () => { const res = await admin.cancelInvite(inv.id); flash(res.ok ? "Invitation cancelled." : res.error ?? "Could not cancel."); }} className="rounded-full border border-line-strong bg-surface px-3 py-1.5 text-[11.5px] font-semibold hover:border-crit-fg hover:text-crit-fg">Cancel</button>
              )}
            </div>
          ))}

          {amDpo && (
            <div className="flex flex-wrap items-end gap-2.5 px-[22px] py-4">
              <label className="flex min-w-[200px] flex-[1_1_200px] flex-col gap-1">
                <span className="text-[11px] font-semibold">Invite by email</span>
                <input value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} type="email" placeholder="colleague@organisation.or.tz" className="min-h-[38px] rounded-[10px] border border-line-strong bg-surface px-3 text-[13px]" />
              </label>
              <select value={inviteRole} onChange={(e) => setInviteRole(e.target.value)} className="min-h-[38px] rounded-[10px] border border-line-strong bg-surface px-2.5 text-[12.5px]">
                {ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
              </select>
              <button onClick={sendInvite} className="flex min-h-[38px] items-center gap-1.5 rounded-full bg-teal px-4 text-[12.5px] font-semibold text-white hover:bg-teal-dark">
                <Icon name="user-round-plus" size={14} />
                Invite
              </button>
            </div>
          )}
        </section>

        {/* Notifications */}
        <section className="rounded-card border border-line bg-surface px-[22px] py-5">
          <h2 className="m-0 mb-1 text-[13px] font-semibold">Notifications</h2>
          <p className="m-0 mb-3.5 text-[11.5px] text-ink-muted">Saved on this device. Statutory deadlines always notify regardless of these settings.</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[9px]">
            {NOTIF_SETTINGS.map((n) => {
              const on = notif[n.label];
              return (
                <button key={n.label} onClick={() => toggleNotif(n.label)} className="flex min-h-[44px] items-center gap-[11px] rounded-[11px] border border-line px-[13px] py-2.5 text-left">
                  <span className="flex-1 text-[12.5px]">{n.label}</span>
                  <span className={`flex h-[19px] w-[34px] flex-none items-center rounded-full p-0.5 ${on ? "justify-end bg-teal" : "justify-start bg-[#dbe3e4]"}`}>
                    <span className="block h-[15px] w-[15px] rounded-full bg-white" />
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Danger zone */}
        <section className="rounded-card border border-[#f3cec8] bg-surface px-[22px] py-5">
          <h2 className="m-0 mb-1 text-[13px] font-semibold text-crit-fg">Danger zone</h2>
          <p className="m-0 mb-3.5 text-[11.5px] text-ink-muted">Irreversible actions. Only the data protection officer can delete a workspace.</p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3 rounded-[11px] border border-line px-4 py-3">
              <div className="min-w-0 flex-1">
                <div className="text-[12.5px] font-semibold">Leave this workspace</div>
                <div className="text-[11px] text-ink-muted">Remove your own access. You can be re-invited later.</div>
              </div>
              <button
                onClick={async () => { if (me) { const res = await admin.leaveWorkspace(me.userId); if (res.ok) window.location.reload(); else flash(res.error ?? "Could not leave."); } }}
                className="rounded-full border border-line-strong bg-surface px-3.5 py-2 text-[12px] font-semibold hover:border-crit-fg hover:text-crit-fg"
              >
                Leave workspace
              </button>
            </div>
            {amDpo && (
              <div className="rounded-[11px] border border-[#f3cec8] bg-crit-bg px-4 py-3">
                <div className="text-[12.5px] font-semibold text-crit-fg">Delete this workspace</div>
                <div className="mb-2.5 text-[11px]" style={{ color: "#7a2a22" }}>Permanently deletes {org?.name ?? "the organisation"} and all its records. Type the organisation name to confirm.</div>
                <div className="flex flex-wrap items-center gap-2">
                  <input value={confirmDelete} onChange={(e) => setConfirmDelete(e.target.value)} placeholder={org?.name ?? ""} className="min-h-[38px] min-w-[200px] flex-1 rounded-[10px] border border-[#e3b5ae] bg-surface px-3 text-[13px]" />
                  <button
                    disabled={confirmDelete.trim() !== (org?.name ?? "")}
                    onClick={async () => { const res = await admin.deleteWorkspace(); if (res.ok) window.location.reload(); else flash(res.error ?? "Could not delete."); }}
                    className="flex items-center gap-1.5 rounded-full bg-alert px-3.5 py-2 text-[12px] font-semibold text-white hover:bg-crit-fg disabled:opacity-50"
                  >
                    <Icon name="trash-2" size={13} />
                    Delete workspace
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      <aside className="flex flex-col gap-3.5 xl:sticky xl:top-[76px]">
        <div className="rounded-card border border-line bg-surface p-5">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="m-0 text-[13px] font-semibold">Framework</h2>
            <LiveBadge />
          </div>
          <div className="rounded-xl border-[1.5px] border-teal bg-teal-bg px-[15px] py-[13px]">
            <div className="flex items-center gap-2">
              <span className="h-[7px] w-[7px] flex-none rounded-full bg-good-fg" />
              <span className="flex-1 text-[12.5px] font-semibold">Tanzania PDPA 2022</span>
              <span className="text-[10.5px] font-semibold text-teal-dark">Active</span>
            </div>
            <div className="mt-1.5 text-[11px] text-ink-mid">{live ? live.controls : 123} controls · {live ? live.requirements : 96} requirements · matrix v{live ? live.matrixVersion : "1.0.0"}</div>
          </div>
        </div>
        <div className="rounded-card border border-line bg-surface p-5">
          <h2 className="m-0 mb-3 text-[13px] font-semibold">Account</h2>
          <div className="mb-3 flex flex-col gap-[11px]">
            <div>
              <div className="mb-0.5 text-[10.5px] text-ink-faint">Signed in as</div>
              <div className="text-[12.5px] font-medium">{email ?? "—"}</div>
            </div>
            <div>
              <div className="mb-0.5 text-[10.5px] text-ink-faint">Your role</div>
              <div className="text-[12.5px] font-medium">{me ? roleLabel(me.role) : "—"}</div>
            </div>
          </div>
          <button onClick={() => go("audit")} className="flex w-full items-center gap-2.5 rounded-[10px] border border-line-strong bg-surface px-3 py-2 text-left text-[12px] font-semibold hover:border-teal hover:text-teal">
            <Icon name="history" size={15} className="flex-none" />
            <span className="flex-1">Audit trail</span>
            <Icon name="chevron-right" size={14} className="text-ink-faint" />
          </button>
        </div>
        <div className="rounded-card border border-line bg-surface p-5">
          <h2 className="m-0 mb-3 text-[13px] font-semibold">Security</h2>
          <div className="flex flex-col gap-[11px] text-[12.5px]">
            <div className="flex items-center gap-2.5"><Icon name="server" size={15} className="flex-none text-ink-muted" /><span className="flex-1">Data residency</span><span className="text-[11px] font-semibold text-ink-mid">Supabase</span></div>
            <div className="flex items-center gap-2.5"><Icon name="lock" size={15} className="flex-none text-ink-muted" /><span className="flex-1">Row-level security</span><span className="text-[11px] font-semibold text-good-fg">Enforced</span></div>
          </div>
        </div>
      </aside>
    </div>
  );
}
