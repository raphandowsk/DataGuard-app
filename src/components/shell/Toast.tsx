"use client";

import { Icon } from "@/components/ui/Icon";
import { useUI } from "@/lib/store";

export function Toast() {
  const toast = useUI((s) => s.toast);
  if (!toast) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4">
      <div className="animate-toast pointer-events-auto flex max-w-[520px] items-center gap-[11px] rounded-[13px] bg-ink px-[18px] py-[13px] text-[13px] text-white shadow-[0_12px_32px_rgba(14,26,28,0.28)]">
        <span className="grid h-[22px] w-[22px] flex-none place-items-center rounded-full bg-good-fg">
          <Icon name="check" size={13} />
        </span>
        <span className="leading-[1.4]">{toast}</span>
      </div>
    </div>
  );
}
