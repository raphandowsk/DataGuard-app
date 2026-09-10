"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { useUI, type Screen } from "@/lib/store";
import { useTasks, useRights, useIncidents } from "@/lib/supabase/operational";

interface Note {
  icon: string;
  color: string;
  bg: string;
  title: string;
  sub: string;
  screen: Screen;
}

/** Bell menu. Notifications are derived from the active org's live records, so
 *  the dot only shows when something actually needs attention. */
export function NotificationsMenu() {
  const [open, setOpen] = useState(false);
  const go = useUI((s) => s.go);
  const { tasks } = useTasks();
  const { requests } = useRights();
  const { incidents } = useIncidents();

  const notes: Note[] = [];
  for (const t of tasks.filter((t) => t.overdue).slice(0, 5)) {
    notes.push({ icon: "circle-alert", color: "#8e2b22", bg: "#fbe7e4", title: t.title, sub: `Task overdue · ${t.id}`, screen: "tasks" });
  }
  const openRights = requests.filter((r) => r.stage !== "Closed");
  if (openRights.length) {
    notes.push({
      icon: "user-round-cog", color: "#a4501f", bg: "#f8ece1",
      title: `${openRights.length} open rights request${openRights.length > 1 ? "s" : ""}`,
      sub: "Awaiting a response", screen: "rights",
    });
  }
  const unnotified = incidents.filter((i) => !i.notified);
  if (unnotified.length) {
    notes.push({
      icon: "siren", color: "#8e2b22", bg: "#fbe7e4",
      title: `${unnotified.length} incident${unnotified.length > 1 ? "s" : ""} awaiting notification`,
      sub: "Section 27(5) · without undue delay", screen: "incidents",
    });
  }

  return (
    <div className="relative">
      <button
        aria-label="Notifications"
        onClick={() => setOpen((v) => !v)}
        className="relative grid h-[34px] w-[34px] place-items-center rounded-[9px] border border-transparent bg-transparent text-ink-muted hover:border-line hover:bg-panel"
      >
        <Icon name="bell" size={17} />
        {notes.length > 0 && (
          <span className="absolute right-[7px] top-1.5 h-[7px] w-[7px] rounded-full border-[1.5px] border-surface bg-alert" />
        )}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-[42px] z-50 w-[320px] overflow-hidden rounded-[13px] border border-line bg-surface shadow-[0_8px_30px_rgba(14,26,28,0.14)]">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="text-[12.5px] font-semibold">Notifications</span>
              <span className="rounded-full bg-panel px-2 py-0.5 text-[10.5px] font-semibold text-ink-muted">{notes.length}</span>
            </div>
            {notes.length === 0 ? (
              <div className="flex flex-col items-center gap-2 px-4 py-8 text-center">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-good-bg text-good-fg">
                  <Icon name="check" size={18} />
                </span>
                <p className="m-0 text-[12.5px] font-medium">You&apos;re all caught up</p>
                <p className="m-0 text-[11.5px] text-ink-muted">Overdue tasks, open rights requests and unreported incidents will show here.</p>
              </div>
            ) : (
              <div className="max-h-[360px] overflow-y-auto">
                {notes.map((n, i) => (
                  <button
                    key={i}
                    onClick={() => { go(n.screen); setOpen(false); }}
                    className="flex w-full items-start gap-3 border-b border-ground px-4 py-3 text-left hover:bg-panel"
                  >
                    <span className="grid h-7 w-7 flex-none place-items-center rounded-lg" style={{ background: n.bg, color: n.color }}>
                      <Icon name={n.icon} size={14} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[12.5px] font-medium leading-[1.35] [text-wrap:pretty]">{n.title}</div>
                      <div className="mt-0.5 text-[11px] text-ink-faint">{n.sub}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
