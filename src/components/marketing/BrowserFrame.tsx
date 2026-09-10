/** A lightweight browser-window chrome used to frame product previews. */
export function BrowserFrame({ children, label = "app.dataguard.co.tz" }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-[0_24px_70px_-24px_rgba(14,26,28,0.4)]">
      <div className="flex items-center gap-2 border-b border-line bg-panel px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e3b5ae]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#eed9b8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#bfe0cf]" />
        </span>
        <span className="mx-auto flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1 text-[11px] text-ink-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-good-fg" />
          {label}
        </span>
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
