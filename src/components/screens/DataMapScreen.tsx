"use client";

import { Icon } from "@/components/ui/Icon";
import { RECIPIENTS, SUBJECT_GROUPS, SYSTEMS } from "@/lib/data/inventory";
import { useUI } from "@/lib/store";

export function DataMapScreen() {
  const go = useUI((s) => s.go);
  return (
    <div className="flex animate-fade flex-col gap-4">
      <section className="rounded-card border border-line bg-surface px-6 py-[22px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] items-start gap-5">
          {/* whose data */}
          <div>
            <ColHead icon="users-round" bg="#eef1f2" fg="#3d4e51" label="WHOSE DATA" />
            <div className="flex flex-col gap-2">
              {SUBJECT_GROUPS.map((g) => (
                <div key={g.name} className="flex items-center gap-[11px] rounded-xl border border-line bg-[#fbfcfc] px-[13px] py-[11px]">
                  <Icon name={g.icon} size={15} className="flex-none text-ink-muted" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[12.5px] font-medium">{g.name}</div>
                    <div className="text-[11px] text-ink-faint">{g.n} records</div>
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
              {SYSTEMS.map((y) => {
                const cross = y.flag === "cross";
                return (
                  <div key={y.name} className="rounded-xl border border-line bg-surface px-[13px] py-[11px]" style={{ borderLeft: `3px solid ${cross ? "#a4501f" : "#16775a"}` }}>
                    <div className="flex items-center gap-2">
                      <span className="min-w-0 flex-1 text-[12.5px] font-medium">{y.name}</span>
                      {cross && (
                        <span className="inline-flex flex-none items-center gap-1 rounded bg-high-bg px-[5px] py-0.5 text-[9.5px] font-bold tracking-[0.3px] text-high-fg">
                          <Icon name="globe" size={10} />
                          ABROAD
                        </span>
                      )}
                    </div>
                    <div className="mt-[3px] text-[11px] text-ink-faint">{y.kind} · {y.country} · {y.records}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* who receives it */}
          <div>
            <ColHead icon="share-2" bg="#f8ece1" fg="#a4501f" label="WHO RECEIVES IT" />
            <div className="flex flex-col gap-2">
              {RECIPIENTS.map((r) => (
                <div key={r.name} className="rounded-xl border border-line bg-[#fbfcfc] px-[13px] py-[11px]">
                  <div className="text-[12.5px] font-medium">{r.name}</div>
                  <div className="mt-[3px] text-[11px]" style={{ color: r.cross ? "#a4501f" : "#5b6b6e" }}>{r.what} · {r.where}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-[18px] border-t border-line pt-4">
          <Legend color="#16775a" label="Held in Tanzania" />
          <Legend color="#a4501f" label="Leaves Tanzania — needs a transfer decision" />
          <button onClick={() => go("transfers")} className="ml-auto border-none bg-transparent text-[12px] font-semibold text-teal hover:underline">
            Review the three cross-border routes
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
