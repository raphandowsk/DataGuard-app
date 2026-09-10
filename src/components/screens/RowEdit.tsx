"use client";

import { Icon } from "@/components/ui/Icon";

/** Pencil control for a table/card row. Stops propagation so it never triggers
 *  the row's own onClick. */
export function RowEdit({ onEdit }: { onEdit: () => void }) {
  return (
    <button
      aria-label="Edit"
      onClick={(e) => { e.stopPropagation(); onEdit(); }}
      className="grid h-7 w-7 place-items-center rounded-lg text-ink-faint hover:bg-panel hover:text-teal"
    >
      <Icon name="pencil" size={13} />
    </button>
  );
}
