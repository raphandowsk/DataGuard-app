"use client";

import { Icon } from "@/components/ui/Icon";
import { NOTIF_SETTINGS } from "@/lib/data/settings";
import { useUI } from "@/lib/store";
import { LiveBadge } from "@/components/ui/LiveBadge";
import { useFrameworkSummary } from "@/lib/supabase/useFramework";
import { useActiveOrg } from "@/lib/supabase/operational";
import { useAuth } from "@/lib/supabase/auth";

export function SettingsScreen() {
  const go = useUI((s) => s.go);
  const fw = useFrameworkSummary();
  const live = fw.status === "live" ? fw.data : null;
  const { org } = useActiveOrg();
  const { email } = useAuth();

  const orgProfile: Array<{ k: string; v: string }> = [
    { k: "Legal name", v: org?.name ?? "—" },
    { k: "Sector", v: org?.sector || "Not set" },
    { k: "Jurisdiction", v: "Tanzania" },
    { k: "Framework", v: "Tanzania PDPA 2022" },
  ];

  return (
    <div className="grid animate-fade grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="flex flex-col gap-4">
        <section className="rounded-card border border-line bg-surface px-[22px] py-5">
          <h2 className="m-0 mb-4 text-[13px] font-semibold">Organisation profile</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3.5">
            {orgProfile.map((p) => (
              <div key={p.k}>
                <div className="mb-[3px] text-[10.5px] text-ink-faint">{p.k}</div>
                <div className="text-[13px] font-medium [text-wrap:pretty]">{p.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-card border border-line bg-surface">
          <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-[22px] py-4">
            <div className="flex-1">
              <h2 className="m-0 text-[13px] font-semibold">Roles and permissions</h2>
              <p className="m-0 mt-[3px] text-[11.5px] text-ink-muted">The people who can reach this workspace. Invite colleagues as your team grows.</p>
            </div>
            <button
              onClick={() => useUI.getState().flash("Team invitations are coming soon.")}
              className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal px-3.5 py-[7px] text-[12px] font-semibold text-white hover:bg-teal-dark"
            >
              <Icon name="user-round-plus" size={14} className="flex-none" />
              Invite user
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-3.5 border-b border-ground px-[22px] py-3.5">
            <div className="min-w-0 flex-[1_1_200px]">
              <div className="text-[13px] font-medium">Data protection officer</div>
              <div className="mt-0.5 text-[11px] text-ink-faint">{email ?? "You"}</div>
            </div>
            <div className="min-w-0 flex-[2_1_300px] text-[11.5px] text-ink-muted [text-wrap:pretty]">
              Full access, including assessments, rights requests and incident notification. Every action is attributed to this account in the audit trail.
            </div>
            <span className="tnum flex-none rounded-full border border-line bg-panel px-2.5 py-0.5 text-[11.5px] font-semibold text-ink-muted">You</span>
          </div>
        </section>

        <section className="rounded-card border border-line bg-surface px-[22px] py-5">
          <h2 className="m-0 mb-1 text-[13px] font-semibold">Notifications</h2>
          <p className="m-0 mb-3.5 text-[11.5px] text-ink-muted">Applies to your account only. Statutory deadlines always notify regardless of these settings.</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[9px]">
            {NOTIF_SETTINGS.map((n) => (
              <div key={n.label} className="flex min-h-[44px] items-center gap-[11px] rounded-[11px] border border-line px-[13px] py-2.5">
                <span className="flex-1 text-[12.5px]">{n.label}</span>
                <span className={`flex h-[19px] w-[34px] flex-none items-center rounded-full p-0.5 ${n.on ? "justify-end bg-teal" : "justify-start bg-[#dbe3e4]"}`}>
                  <span className="block h-[15px] w-[15px] rounded-full bg-white" />
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <aside className="flex flex-col gap-3.5 xl:sticky xl:top-[76px]">
        <div className="rounded-card border border-line bg-surface p-5">
          <h2 className="m-0 mb-3.5 text-[13px] font-semibold">Data protection officer</h2>
          <div className="flex flex-col gap-[11px]">
            <div>
              <div className="mb-0.5 text-[10.5px] text-ink-faint">Data protection officer</div>
              <div className="text-[12.5px] font-medium [text-wrap:pretty]">{email ?? "You"}</div>
            </div>
            <div>
              <div className="mb-0.5 text-[10.5px] text-ink-faint">Role</div>
              <div className="text-[12.5px] font-medium">Workspace owner</div>
            </div>
          </div>
          <div className="mt-4 rounded-[11px] border border-line bg-panel px-3.5 py-3">
            <p className="m-0 text-[11.5px] leading-[1.55] text-ink-muted [text-wrap:pretty]">
              The Act requires a formally appointed data protection officer. Record the appointment and its evidence
              against control PDPA-027-011.
            </p>
          </div>
        </div>

        <div className="rounded-card border border-line bg-surface p-5">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="m-0 text-[13px] font-semibold">Frameworks</h2>
            <LiveBadge />
          </div>
          <div className="rounded-xl border-[1.5px] border-teal bg-teal-bg px-[15px] py-[13px]">
            <div className="flex items-center gap-2">
              <span className="h-[7px] w-[7px] flex-none rounded-full bg-good-fg" />
              <span className="flex-1 text-[12.5px] font-semibold">Tanzania PDPA 2022</span>
              <span className="text-[10.5px] font-semibold text-teal-dark">Active</span>
            </div>
            <div className="mt-1.5 text-[11px] text-ink-mid">
              {live ? live.controls : 123} controls · {live ? live.requirements : 96} requirements · matrix v{live ? live.matrixVersion : "1.0.0"}
            </div>
          </div>
          <p className="m-0 mt-3 text-[11px] leading-[1.55] text-ink-faint [text-wrap:pretty]">
            Framework updates arrive as a new matrix version. Existing answers are preserved and any control whose text changed is flagged for reassessment.
          </p>
        </div>

        <div className="rounded-card border border-line bg-surface p-5">
          <h2 className="m-0 mb-3 text-[13px] font-semibold">Security</h2>
          <div className="flex flex-col gap-[11px]">
            <div className="flex items-center gap-2.5">
              <Icon name="key-round" size={15} className="flex-none text-good-fg" />
              <span className="flex-1 text-[12.5px]">Two-factor authentication</span>
              <span className="text-[11px] font-semibold text-good-fg">Recommended</span>
            </div>
            <button onClick={() => go("audit")} className="flex w-full items-center gap-2.5 border-none bg-transparent p-0 text-left hover:text-teal">
              <Icon name="history" size={15} className="flex-none text-ink-muted" />
              <span className="flex-1 text-[12.5px]">Audit trail</span>
              <span className="text-[11px] font-semibold text-good-fg">Immutable</span>
              <Icon name="chevron-right" size={14} className="flex-none text-ink-faint" />
            </button>
            <div className="flex items-center gap-2.5">
              <Icon name="server" size={15} className="flex-none text-ink-muted" />
              <span className="flex-1 text-[12.5px]">Data residency</span>
              <span className="text-[11px] font-semibold text-ink-mid">Supabase</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
