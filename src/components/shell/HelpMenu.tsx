"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { useUI } from "@/lib/store";
import { useFrameworkSummary } from "@/lib/supabase/useFramework";

/** Help menu: quick actions, legal links and a short "what this is" note. */
export function HelpMenu() {
  const [open, setOpen] = useState(false);
  const openPalette = useUI((s) => s.openPalette);
  const go = useUI((s) => s.go);
  const fw = useFrameworkSummary();
  const controls = fw.status === "live" ? fw.data.controls : 123;
  const matrix = fw.status === "live" ? fw.data.matrixVersion : "1.0.0";

  const action = (fn: () => void) => { fn(); setOpen(false); };

  return (
    <div className="relative">
      <button
        aria-label="Help"
        onClick={() => setOpen((v) => !v)}
        className="grid h-[34px] w-[34px] place-items-center rounded-[9px] border border-transparent bg-transparent text-ink-muted hover:border-line hover:bg-panel"
      >
        <Icon name="circle-help" size={17} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-[42px] z-50 w-[300px] overflow-hidden rounded-[13px] border border-line bg-surface shadow-[0_8px_30px_rgba(14,26,28,0.14)]">
            <div className="border-b border-line px-4 py-3">
              <span className="text-[12.5px] font-semibold">Help &amp; shortcuts</span>
            </div>
            <div className="flex flex-col py-1">
              <button onClick={() => action(openPalette)} className="flex items-center gap-2.5 px-4 py-2.5 text-left text-[12.5px] hover:bg-panel">
                <Icon name="search" size={15} className="flex-none text-ink-muted" />
                <span className="flex-1">Search &amp; jump to…</span>
                <kbd className="rounded-[5px] border border-line border-b-2 bg-panel px-[5px] text-[10.5px] text-ink-muted">⌘K</kbd>
              </button>
              <button onClick={() => action(() => go("incidentIntake"))} className="flex items-center gap-2.5 px-4 py-2.5 text-left text-[12.5px] hover:bg-panel">
                <Icon name="siren" size={15} className="flex-none text-ink-muted" />
                <span className="flex-1">Report a breach</span>
              </button>
              <button onClick={() => action(() => go("assessment"))} className="flex items-center gap-2.5 px-4 py-2.5 text-left text-[12.5px] hover:bg-panel">
                <Icon name="clipboard-check" size={15} className="flex-none text-ink-muted" />
                <span className="flex-1">Continue the assessment</span>
              </button>
            </div>
            <div className="flex flex-col border-t border-line py-1">
              <Link href="/privacy" target="_blank" onClick={() => setOpen(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-[12.5px] no-underline text-ink hover:bg-panel">
                <Icon name="shield" size={15} className="flex-none text-ink-muted" />
                <span className="flex-1">Privacy policy</span>
                <Icon name="external-link" size={13} className="text-ink-faint" />
              </Link>
              <Link href="/terms" target="_blank" onClick={() => setOpen(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-[12.5px] no-underline text-ink hover:bg-panel">
                <Icon name="file-text" size={15} className="flex-none text-ink-muted" />
                <span className="flex-1">Terms of service</span>
                <Icon name="external-link" size={13} className="text-ink-faint" />
              </Link>
            </div>
            <div className="border-t border-line bg-panel px-4 py-3">
              <p className="m-0 text-[11px] leading-[1.5] text-ink-muted [text-wrap:pretty]">
                DataGuard maps the Tanzania Personal Data Protection Act, 2022 into {controls} controls (matrix v{matrix}).
                It is a compliance management tool, not legal advice.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
