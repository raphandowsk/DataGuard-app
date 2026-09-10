"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { NotificationsMenu } from "@/components/shell/NotificationsMenu";
import { HelpMenu } from "@/components/shell/HelpMenu";
import { useUI } from "@/lib/store";
import { useAuth } from "@/lib/supabase/auth";
import { useActiveOrg } from "@/lib/supabase/operational";

export function Header() {
  const screen = useUI((s) => s.screen);
  const toggleWorkspace = useUI((s) => s.toggleWorkspace);
  const toggleSidebar = useUI((s) => s.toggleSidebar);
  const openPalette = useUI((s) => s.openPalette);
  const { email, signOut } = useAuth();
  const { org } = useActiveOrg();
  const initials = email ? email.slice(0, 2).toUpperCase() : "RK";
  const isDemo = email === "demo@dataguard.app";

  const isPortfolio = screen === "portfolio";
  const orgName = isPortfolio ? "Consultant workspace" : org?.name ?? "Your workspace";
  const orgMeta = isPortfolio ? "Client portfolio" : org?.sector ?? "Tanzania PDPA 2022 workspace";
  const orgInitials = isPortfolio ? "CW" : (org?.name ?? "WS").slice(0, 2).toUpperCase();

  return (
    <header className="sticky top-0 z-30 flex h-[60px] flex-none items-center gap-2.5 border-b border-line bg-surface px-3 lg:gap-5 lg:px-5">
      <button
        onClick={toggleSidebar}
        aria-label="Open navigation"
        className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[9px] border border-line bg-panel text-ink-mid hover:bg-ground lg:hidden"
      >
        <Icon name="menu" size={18} />
      </button>

      <div className="hidden min-w-0 flex-[0_1_auto] items-center gap-2.5 whitespace-nowrap lg:flex">
        <div className="grid h-[30px] w-[30px] flex-none place-items-center rounded-[9px] bg-teal text-white">
          <Icon name="shield-check" size={17} />
        </div>
        <div className="text-[17px] font-semibold tracking-[-0.3px]">DataGuard</div>
        {isDemo && (
          <div className="flex-none rounded border border-line bg-ground px-[5px] py-0.5 text-[9px] font-semibold tracking-[0.6px] text-ink-muted">
            DEMO
          </div>
        )}
      </div>

      <button
        onClick={toggleWorkspace}
        aria-label="Switch workspace"
        className="flex min-w-0 flex-[0_1_auto] items-center gap-2.5 overflow-hidden whitespace-nowrap rounded-[10px] border border-transparent bg-transparent p-0 text-left lg:border-line lg:bg-panel lg:px-2.5 lg:py-1.5 lg:hover:border-line-strong lg:hover:bg-ground"
      >
        <div className="grid h-8 w-8 flex-none place-items-center rounded-[8px] bg-teal-bg text-[11px] font-bold text-teal lg:h-6 lg:w-6 lg:rounded-[7px]">
          {orgInitials}
        </div>
        <div className="hidden min-w-0 overflow-hidden leading-[1.15] lg:block">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[12.5px] font-semibold">{orgName}</div>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[10.5px] text-ink-muted">{orgMeta}</div>
        </div>
        <Icon name="chevrons-up-down" size={14} className="hidden flex-none text-ink-faint lg:block" />
      </button>

      <div className="hidden flex-none items-center gap-[7px] whitespace-nowrap rounded-lg border border-line bg-panel px-[9px] py-[5px] xl:flex">
        <span className="h-1.5 w-1.5 flex-none rounded-full bg-good-fg" />
        <span className="text-[11.5px] text-ink-muted">
          Tanzania PDPA 2022 · <span className="font-semibold text-ink">Active</span>
        </span>
      </div>

      <button
        onClick={openPalette}
        aria-label="Search or jump to"
        className="hidden min-w-0 max-w-[420px] flex-[1_1_120px] items-center gap-2.5 overflow-hidden rounded-[10px] border border-line bg-panel px-[11px] py-2 text-ink-faint hover:border-line-strong hover:bg-surface md:flex"
      >
        <Icon name="search" size={15} className="flex-none" />
        <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left text-[12.5px]">
          Search controls, risks, tasks, evidence…
        </span>
        <kbd className="flex-none rounded-[5px] border border-line border-b-2 bg-surface px-[5px] text-[10.5px] text-ink-muted">
          ⌘K
        </kbd>
      </button>

      <div className="ml-auto flex items-center gap-1.5">
        <button
          onClick={openPalette}
          aria-label="Search"
          className="grid h-[34px] w-[34px] place-items-center rounded-[9px] border border-transparent text-ink-muted hover:border-line hover:bg-panel md:hidden"
        >
          <Icon name="search" size={17} />
        </button>
        <NotificationsMenu />
        <HelpMenu />
        <div className="mx-1 hidden h-6 w-px bg-line sm:block" />
        {email ? (
          <div className="flex items-center gap-2">
            <div className="grid h-[30px] w-[30px] place-items-center rounded-full bg-ink text-[11.5px] font-semibold text-white" title={email}>
              {initials}
            </div>
            <span className="hidden max-w-[150px] truncate text-[12px] text-ink-mid lg:block">{email}</span>
            <button
              onClick={() => signOut()}
              aria-label="Sign out"
              className="grid h-[34px] w-[34px] place-items-center rounded-[9px] border border-transparent bg-transparent text-ink-muted hover:border-line hover:bg-panel"
            >
              <Icon name="log-out" size={16} />
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-[12.5px] font-semibold no-underline hover:border-teal hover:text-teal"
          >
            <Icon name="log-in" size={15} className="flex-none" />
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
}
