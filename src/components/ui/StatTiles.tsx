export interface Stat {
  v: string;
  k: string;
  sub: string;
}

/** The 4-up stat grid used by the data, incident and portfolio screens. */
export function StatTiles({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-3.5">
      {stats.map((s) => (
        <div key={s.k} className="rounded-[14px] border border-line bg-surface px-[19px] py-[17px]">
          <div className="tnum text-[27px] font-semibold tracking-[-0.6px]">{s.v}</div>
          <div className="mt-[3px] text-[12px] font-medium">{s.k}</div>
          <div className="mt-0.5 text-[11px] text-ink-faint">{s.sub}</div>
        </div>
      ))}
    </div>
  );
}
