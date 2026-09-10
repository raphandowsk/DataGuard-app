"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

/** A self-contained "trash → confirm → remove" control for a table row.
 *  Stops click propagation so it never triggers the row's own onClick. */
export function RowRemove({ onConfirm, label = "Remove" }: { onConfirm: () => Promise<void> | void; label?: string }) {
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);

  if (confirming) {
    return (
      <span className="inline-flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
        <button
          disabled={busy}
          onClick={async (e) => { e.stopPropagation(); setBusy(true); await onConfirm(); }}
          className="rounded-full bg-alert px-2 py-1 text-[10.5px] font-semibold text-white disabled:opacity-60"
        >
          {busy ? "…" : label}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setConfirming(false); }}
          className="rounded-full border border-line px-2 py-1 text-[10.5px] font-semibold text-ink-muted"
        >
          Cancel
        </button>
      </span>
    );
  }
  return (
    <button
      aria-label="Remove"
      onClick={(e) => { e.stopPropagation(); setConfirming(true); }}
      className="grid h-7 w-7 place-items-center rounded-lg text-ink-faint hover:bg-panel hover:text-crit-fg"
    >
      <Icon name="trash-2" size={14} />
    </button>
  );
}
