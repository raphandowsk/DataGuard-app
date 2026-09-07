"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { GOTO } from "@/lib/data/dashboard";
import { useUI, type Screen } from "@/lib/store";

const COPILOT: Array<{ label: string; screen: Screen }> = [
  { label: "What are our biggest compliance gaps?", screen: "dashboard" },
  { label: "Which controls have no evidence?", screen: "assessment" },
];

export function CommandPalette() {
  const open = useUI((s) => s.palette);
  const close = useUI((s) => s.closePalette);
  const go = useUI((s) => s.go);
  const openOnboarding = useUI((s) => s.openOnboarding);
  const [q, setQ] = useState("");

  const setupMatches = "run first-time setup onboarding".includes(q.trim().toLowerCase());

  const goto = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return GOTO;
    return GOTO.filter((g) => g.label.toLowerCase().includes(t));
  }, [q]);

  const copilot = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return COPILOT;
    return COPILOT.filter((c) => c.label.toLowerCase().includes(t));
  }, [q]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-[rgba(14,26,28,0.35)] px-4 pt-[12vh]"
      onClick={close}
    >
      <div
        className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_60px_rgba(14,26,28,0.28)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
          <Icon name="search" size={17} className="flex-none text-ink-faint" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search controls, risks, tasks, evidence…"
            className="w-full border-none bg-transparent text-[14px] outline-none placeholder:text-ink-faint"
          />
          <kbd className="flex-none rounded-[5px] border border-line border-b-2 bg-panel px-[5px] text-[10.5px] text-ink-muted">
            Esc
          </kbd>
        </div>

        <div className="scroll-thin max-h-[52vh] overflow-y-auto p-2">
          {copilot.length > 0 && (
            <Group label="ASK COPILOT">
              {copilot.map((c) => (
                <Row key={c.label} icon="sparkles" label={c.label} hint="from your records" onClick={() => go(c.screen)} />
              ))}
            </Group>
          )}
          {goto.length > 0 && (
            <Group label="GO TO">
              {goto.map((g) => (
                <Row key={g.label} icon={g.icon} label={g.label} hint={g.hint} onClick={() => go(g.screen)} />
              ))}
            </Group>
          )}
          {setupMatches && (
            <Group label="SETUP">
              <Row icon="wand-sparkles" label="Run first-time setup" hint="Onboarding" onClick={openOnboarding} />
            </Group>
          )}
          {goto.length === 0 && copilot.length === 0 && !setupMatches && (
            <div className="px-3 py-6 text-center text-[13px] text-ink-faint">No matches for “{q}”.</div>
          )}
        </div>
      </div>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-1">
      <div className="px-3 pb-1 pt-2 text-[10px] font-bold tracking-[0.8px] text-ink-faint">{label}</div>
      <div className="flex flex-col gap-px">{children}</div>
    </div>
  );
}

function Row({
  icon,
  label,
  hint,
  onClick,
}: {
  icon: string;
  label: string;
  hint: string | null;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 rounded-[9px] px-3 py-2 text-left hover:bg-panel"
    >
      <Icon name={icon} size={16} className="flex-none text-ink-muted" />
      <span className="flex-1 text-[13px]">{label}</span>
      {hint && <span className="flex-none text-[11px] text-ink-faint">{hint}</span>}
    </button>
  );
}
