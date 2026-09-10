import { Icon } from "@/components/ui/Icon";

const NAV = [
  { icon: "layout-dashboard", label: "Dashboard", active: true },
  { icon: "clipboard-check", label: "Assessment" },
  { icon: "list-checks", label: "Controls" },
  { icon: "triangle-alert", label: "Risks" },
  { icon: "circle-check-big", label: "Tasks", badge: "6" },
  { icon: "table-2", label: "Data inventory" },
  { icon: "globe", label: "Transfers", badge: "3" },
  { icon: "user-round-cog", label: "Rights requests", badge: "4" },
  { icon: "building-2", label: "Processors", badge: "7" },
];

// Domain, control count, coverage % — as computed live in the app.
const DOMAINS: Array<[string, string, number]> = [
  ["Registration", "10 controls", 40],
  ["Third party", "4 controls", 50],
  ["Breach notification", "2 controls", 50],
  ["Sensitive data", "10 controls", 55],
  ["Retention", "7 controls", 57],
  ["Security", "11 controls", 59],
  ["Disclosure", "5 controls", 60],
  ["Enforcement", "19 controls", 61],
];

const shade = (n: number) => (n >= 80 ? "#16775a" : n >= 65 ? "#7a8a5e" : n >= 50 ? "#c67139" : "#b23a2f");

export function DashboardPreview() {
  return (
    <div className="flex min-h-[420px] bg-ground text-ink">
      {/* sidebar */}
      <aside className="hidden w-[188px] flex-none flex-col gap-0.5 border-r border-line bg-surface p-3 sm:flex">
        <div className="mb-2 flex items-center gap-2 px-1.5">
          <span className="grid h-6 w-6 place-items-center rounded-lg bg-teal text-white"><Icon name="shield-check" size={13} /></span>
          <span className="text-[13px] font-semibold tracking-[-0.3px]">DataGuard</span>
        </div>
        {NAV.map((n) => (
          <div key={n.label} className={`flex items-center gap-2 rounded-[8px] px-2 py-1.5 text-[11.5px] ${n.active ? "bg-teal-bg font-semibold text-teal-dark" : "font-medium text-ink-mid"}`}>
            <Icon name={n.icon} size={13} className="flex-none opacity-90" />
            <span className="flex-1">{n.label}</span>
            {n.badge && <span className="rounded-full bg-crit-bg px-1.5 text-[9.5px] font-semibold text-crit-fg">{n.badge}</span>}
          </div>
        ))}
      </aside>

      {/* main */}
      <div className="min-w-0 flex-1 p-5">
        <div className="mb-1 flex items-center gap-1.5 text-[10.5px] text-ink-muted">
          <span>Mazingira Trust</span><Icon name="chevron-right" size={11} className="text-ink-faint" /><span className="font-medium text-ink">Dashboard</span>
        </div>
        <h3 className="m-0 text-[19px] font-semibold tracking-[-0.4px]">Your compliance health</h3>

        <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          {/* coverage card */}
          <div className="rounded-[13px] border border-line bg-surface px-5 py-4">
            <div className="flex items-center justify-between">
              <span className="text-[11.5px] font-semibold">Control coverage</span>
              <span className="rounded-full border border-line bg-panel px-2 py-0.5 text-[9.5px] text-ink-muted">Not a legal opinion</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2.5">
              <div className="font-serif text-[52px] leading-[0.85] tracking-[-1.5px]">61<span className="text-[24px]">%</span></div>
              <span className="mb-1 rounded-full bg-panel px-2 py-0.5 text-[10.5px] font-semibold text-ink-mid">108 of 123 assessed</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ground"><div className="h-full rounded-full bg-teal" style={{ width: "61%" }} /></div>
            <div className="mt-3.5 grid grid-cols-3 gap-2 border-t border-line pt-3">
              {[["108/123", "Assessed"], ["88%", "Assessment"], ["48%", "Implemented"]].map(([v, k]) => (
                <div key={k}><div className="text-[15px] font-semibold">{v}</div><div className="text-[10px] text-ink-muted">{k}</div></div>
              ))}
            </div>
          </div>

          {/* coverage by domain */}
          <div className="rounded-[13px] border border-line bg-surface px-5 py-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11.5px] font-semibold">Coverage by domain</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-good-bg px-2 py-0.5 text-[9.5px] font-semibold text-good-fg"><span className="h-1.5 w-1.5 rounded-full bg-good-fg" />Live</span>
            </div>
            <div className="flex flex-col">
              {DOMAINS.map(([name, meta, n]) => (
                <div key={name} className="grid grid-cols-[minmax(0,110px)_1fr_38px] items-center gap-2.5 py-[5px]">
                  <div className="min-w-0"><div className="truncate text-[11.5px] font-medium">{name}</div><div className="truncate text-[9.5px] text-ink-faint">{meta}</div></div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-ground"><div className="h-full rounded-full" style={{ width: `${n}%`, background: shade(n) }} /></div>
                  <div className="text-right text-[11px] font-semibold tabular-nums">{n}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
