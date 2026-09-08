"use client";

import { Icon } from "@/components/ui/Icon";
import { useUI } from "@/lib/store";
import { useActivities } from "@/lib/supabase/operational";

export function DataMapScreen() {
  const go = useUI((s) => s.go);
  const { activities } = useActivities();

  // The map is derived from the active org's processing activities. A new org
  // with an empty inventory sees a prompt, never another organisation's data.
  const subjMap = new Map<string, { name: string; count: number; sensitive: boolean }>();
  for (const a of activities) {
    if (!a.subjects) continue;
    const e = subjMap.get(a.subjects) ?? { name: a.subjects, count: 0, sensitive: false };
    e.count += 1;
    e.sensitive = e.sensitive || a.sensitive;
    subjMap.set(a.subjects, e);
  }
  const subjectGroups = [...subjMap.values()];

  const sysMap = new Map<string, { name: string; kind: string; country: string; cross: boolean }>();
  for (const a of activities) {
    if (!a.systems) continue;
    const key = `${a.systems}|${a.country}`;
    if (!sysMap.has(key)) sysMap.set(key, { name: a.systems, kind: a.dept, country: a.country, cross: Boolean(a.country) && a.country !== "Tanzania" });
  }
  const systems = [...sysMap.values()];

  const recMap = new Map<string, { name: string; where: string; cross: boolean }>();
  for (const a of activities) {
    if (!a.recipients || a.recipients === "None") continue;
    if (!recMap.has(a.recipients)) recMap.set(a.recipients, { name: a.recipients, where: a.country, cross: Boolean(a.country) && a.country !== "Tanzania" });
  }
  const recipients = [...recMap.values()];

  if (activities.length === 0) {
    return (
      <div className="animate-fade">
        <section className="rounded-card border border-line bg-surface px-6 py-14 text-center">
          <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-teal-bg text-teal">
            <Icon name="git-fork" size={22} />
          </span>
          <h2 className="m-0 text-[15px] font-semibold">Your data map is empty</h2>
          <p className="m-0 mx-auto mt-2 max-w-[52ch] text-[13px] leading-[1.6] text-ink-muted">
            The map is built from your data inventory — who your data is about, where it sits and who receives it. Add
            your processing activities and they will appear here automatically.
          </p>
          <button
            onClick={() => go("inventory")}
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-teal px-4 py-2 text-[12.5px] font-semibold text-white hover:bg-teal-dark"
          >
            <Icon name="arrow-right" size={14} />
            Go to data inventory
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="flex animate-fade flex-col gap-4">
      <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] items-start gap-5">
          {/* whose data */}
          <div>
            <ColHead icon="users-round" bg="#eef1f2" fg="#3d4e51" label="WHOSE DATA" />
            <div className="flex flex-col gap-2">
              {subjectGroups.map((g) => (
                <div key={g.name} className="flex items-center gap-[11px] rounded-xl border border-line bg-[#fbfcfc] px-[13px] py-[11px]">
                  <Icon name="users-round" size={15} className="flex-none text-ink-muted" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[12.5px] font-medium">{g.name}</div>
                    <div className="text-[11px] text-ink-faint">{g.count} activit{g.count === 1 ? "y" : "ies"}</div>
                  </div>
                  {g.sensitive && (
                    <span className="flex-none rounded bg-crit-bg px-[5px] py-0.5 text-[9.5px] font-bold tracking-[0.3px] text-crit-fg">Sensitive</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* where it sits */}
          <div>
            <ColHead icon="server" bg="#e5f2f0" fg="#0d7d75" label="WHERE IT SITS" />
            <div className="flex flex-col gap-2">
              {systems.map((y) => (
                <div key={`${y.name}-${y.country}`} className="rounded-xl border border-line bg-surface px-[13px] py-[11px]" style={{ borderLeft: `3px solid ${y.cross ? "#a4501f" : "#16775a"}` }}>
                  <div className="flex items-center gap-2">
                    <span className="min-w-0 flex-1 text-[12.5px] font-medium">{y.name}</span>
                    {y.cross && (
                      <span className="inline-flex flex-none items-center gap-1 rounded bg-high-bg px-[5px] py-0.5 text-[9.5px] font-bold tracking-[0.3px] text-high-fg">
                        <Icon name="globe" size={10} />
                        ABROAD
                      </span>
                    )}
                  </div>
                  <div className="mt-[3px] text-[11px] text-ink-faint">{y.kind} · {y.country}</div>
                </div>
              ))}
            </div>
          </div>

          {/* who receives it */}
          <div>
            <ColHead icon="share-2" bg="#f8ece1" fg="#a4501f" label="WHO RECEIVES IT" />
            <div className="flex flex-col gap-2">
              {recipients.length === 0 ? (
                <p className="m-0 rounded-xl border border-dashed border-line-strong bg-panel px-[13px] py-[11px] text-[11.5px] text-ink-muted">
                  No external recipients recorded.
                </p>
              ) : (
                recipients.map((r) => (
                  <div key={r.name} className="rounded-xl border border-line bg-[#fbfcfc] px-[13px] py-[11px]">
                    <div className="text-[12.5px] font-medium">{r.name}</div>
                    <div className="mt-[3px] text-[11px]" style={{ color: r.cross ? "#a4501f" : "#5b6b6e" }}>{r.where}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-[18px] border-t border-line pt-4">
          <Legend color="#16775a" label="Held in Tanzania" />
          <Legend color="#a4501f" label="Leaves Tanzania — needs a transfer decision" />
          <button onClick={() => go("transfers")} className="ml-auto border-none bg-transparent text-[12px] font-semibold text-teal hover:underline">
            Review cross-border routes
          </button>
        </div>
      </section>
    </div>
  );
}

function ColHead({ icon, bg, fg, label }: { icon: string; bg: string; fg: string; label: string }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="grid h-6 w-6 place-items-center rounded-[7px]" style={{ background: bg, color: fg }}>
        <Icon name={icon} size={13} />
      </span>
      <h2 className="m-0 text-[12px] font-bold tracking-[0.5px] text-ink-muted">{label}</h2>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-[7px]">
      <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: color }} />
      <span className="text-[11.5px] text-ink-muted">{label}</span>
    </div>
  );
}
