/** Indicates whether a screen's data is live from Supabase or local fixtures. */
export function SourcePill({ live }: { live: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10.5px] font-semibold"
      style={live ? { background: "#e3f2ea", color: "#12503c" } : { background: "#f2f5f5", color: "#5b6b6e" }}
    >
      <span className="h-[6px] w-[6px] rounded-full" style={{ background: live ? "#16775a" : "#93a1a4" }} />
      {live ? "Live · Supabase" : "Local fixtures"}
    </span>
  );
}
