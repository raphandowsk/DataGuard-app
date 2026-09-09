"use client";

import { Icon } from "@/components/ui/Icon";
import { NAV } from "@/lib/data/nav";
import { useUI } from "@/lib/store";
import { useNavCounts } from "@/lib/supabase/operational";

export function Sidebar() {
  const screen = useUI((s) => s.screen);
  const go = useUI((s) => s.go);
  const openPalette = useUI((s) => s.openPalette);
  const counts = useNavCounts();

  return (
    <aside className="scroll-thin w-[248px] flex-none overflow-y-auto border-r border-line bg-surface px-3 pb-6 pt-3.5">
      {NAV.map((group, gi) => (
        <div key={gi} className="mb-4">
          {group.label && (
            <div className="px-2.5 pb-[7px] text-[10px] font-bold uppercase tracking-[0.8px] text-ink-faint">
              {group.label}
            </div>
          )}
          <div className="flex flex-col gap-px">
            {group.items.map((item) => {
              const active = item.id === screen;
              const count = counts[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "flex w-full items-center gap-2.5 rounded-[9px] px-2.5 py-2 text-left text-[13px]",
                    active
                      ? "bg-teal-bg font-semibold text-teal-dark"
                      : item.ready
                        ? "font-medium text-ink-mid hover:bg-panel"
                        : "font-medium text-ink-dim hover:bg-panel",
                  ].join(" ")}
                >
                  <Icon name={item.icon} size={16} className="flex-none opacity-90" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {typeof count === "number" && count > 0 && (
                    <span className="rounded-full bg-crit-bg px-1.5 py-px text-[10.5px] font-semibold text-crit-fg">
                      {count}
                    </span>
                  )}
                  {!item.ready && (
                    <span className="rounded border border-line px-1 text-[9.5px] text-ink-faint">soon</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="mt-1.5 rounded-xl border border-line bg-panel p-3">
        <div className="mb-1.5 flex items-center gap-[7px]">
          <Icon name="sparkles" size={14} className="text-teal" />
          <span className="text-[12px] font-semibold">Compliance Copilot</span>
        </div>
        <p className="m-0 mb-[9px] text-[11.5px] leading-[1.45] text-ink-muted">
          Ask about your own records. Answers cite controls and never give legal advice.
        </p>
        <button
          onClick={openPalette}
          className="w-full rounded-full border border-line-strong bg-surface px-2.5 py-1.5 text-[11.5px] font-semibold hover:border-teal hover:text-teal"
        >
          Ask a question
        </button>
      </div>
    </aside>
  );
}
