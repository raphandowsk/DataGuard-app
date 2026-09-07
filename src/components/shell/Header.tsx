"use client";

import { Icon } from "@/components/ui/Icon";
import { useUI } from "@/lib/store";

export function Header() {
  const screen = useUI((s) => s.screen);
  const toggleWorkspace = useUI((s) => s.toggleWorkspace);
  const openPalette = useUI((s) => s.openPalette);

  const isPortfolio = screen === "portfolio";
  const orgName = isPortfolio ? "Consultant workspace" : "Mazingira Trust";
  const orgMeta = isPortfolio ? "12 client organisations" : "Environmental NGO · Dar es Salaam";
  const orgInitials = isPortfolio ? "CW" : "MT";

  return (
    <header className="sticky top-0 z-40 flex h-[60px] flex-none items-center gap-5 border-b border-line bg-surface px-5">
      <div className="flex min-w-0 flex-[0_1_auto] items-center gap-2.5 whitespace-nowrap">
        <div className="grid h-[30px] w-[30px] flex-none place-items-center rounded-[9px] bg-teal text-white">
          <Icon name="shield-check" size={17} />
        </div>
        <div className="text-[17px] font-semibold tracking-[-0.3px]">DataGuard</div>
        <div className="flex-none rounded border border-line bg-ground px-[5px] py-0.5 text-[9px] font-semibold tracking-[0.6px] text-ink-muted">
          DEMO
        </div>
      </div>

      <button
        onClick={toggleWorkspace}
        className="flex min-w-0 flex-[0_1_auto] items-center gap-2.5 overflow-hidden whitespace-nowrap rounded-[10px] border border-line bg-panel px-2.5 py-1.5 text-left hover:border-line-strong hover:bg-ground"
      >
        <div className="grid h-6 w-6 flex-none place-items-center rounded-[7px] bg-teal-bg text-[11px] font-bold text-teal">
          {orgInitials}
        </div>
        <div className="min-w-0 overflow-hidden leading-[1.15]">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[12.5px] font-semibold">{orgName}</div>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[10.5px] text-ink-muted">{orgMeta}</div>
        </div>
        <Icon name="chevrons-up-down" size={14} className="flex-none text-ink-faint" />
      </button>

      <div className="flex flex-none items-center gap-[7px] whitespace-nowrap rounded-lg border border-line bg-panel px-[9px] py-[5px]">
        <span className="h-1.5 w-1.5 flex-none rounded-full bg-good-fg" />
        <span className="text-[11.5px] text-ink-muted">
          Tanzania PDPA 2022 · <span className="font-semibold text-ink">Active</span>
        </span>
      </div>

      <button
        onClick={openPalette}
        aria-label="Search or jump to"
        className="flex min-w-0 max-w-[420px] flex-[1_1_120px] items-center gap-2.5 overflow-hidden rounded-[10px] border border-line bg-panel px-[11px] py-2 text-ink-faint hover:border-line-strong hover:bg-surface"
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
          aria-label="Notifications"
          className="relative grid h-[34px] w-[34px] place-items-center rounded-[9px] border border-transparent bg-transparent text-ink-muted hover:border-line hover:bg-panel"
        >
          <Icon name="bell" size={17} />
          <span className="absolute right-[7px] top-1.5 h-[7px] w-[7px] rounded-full border-[1.5px] border-surface bg-alert" />
        </button>
        <button
          aria-label="Help"
          className="grid h-[34px] w-[34px] place-items-center rounded-[9px] border border-transparent bg-transparent text-ink-muted hover:border-line hover:bg-panel"
        >
          <Icon name="circle-help" size={17} />
        </button>
        <div className="mx-1 h-6 w-px bg-line" />
        <button className="flex items-center gap-2 border-none bg-transparent p-0.5">
          <div className="grid h-[30px] w-[30px] place-items-center rounded-full bg-ink text-[11.5px] font-semibold text-white">
            RK
          </div>
          <Icon name="chevron-down" size={14} className="text-ink-faint" />
        </button>
      </div>
    </header>
  );
}
