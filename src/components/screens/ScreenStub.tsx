"use client";

import { Icon } from "@/components/ui/Icon";
import { PAGES } from "@/lib/data/nav";
import { useUI } from "@/lib/store";

/**
 * Honest placeholder for screens not yet built. Shown so navigation works across
 * the whole information architecture during the incremental build. Each of these
 * is replaced by a faithful implementation, cluster by cluster.
 */
export function ScreenStub() {
  const screen = useUI((s) => s.screen);
  const go = useUI((s) => s.go);
  const page = PAGES[screen];

  return (
    <div className="animate-fade">
      <div className="flex flex-col items-start gap-4 rounded-card border border-dashed border-line-strong bg-surface px-7 py-9">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-bg text-teal">
          <Icon name="hammer" size={20} />
        </span>
        <div>
          <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.8px] text-ink-faint">Building this screen</div>
          <h2 className="m-0 text-[18px] font-semibold">{page?.title ?? "Screen"}</h2>
          <p className="m-0 mt-1.5 max-w-[62ch] text-[13px] leading-[1.55] text-ink-muted">
            {page?.sub ?? "Planned section of the information architecture."} This view is scaffolded and wired into
            navigation; its full layout arrives in an upcoming build pass. The dashboard is fully implemented — use it to
            see the target fidelity.
          </p>
        </div>
        <button
          onClick={() => go("dashboard")}
          className="rounded-full border border-line-strong bg-surface px-3.5 py-2 text-[12.5px] font-semibold hover:border-teal hover:text-teal"
        >
          Back to dashboard
        </button>
      </div>
    </div>
  );
}
