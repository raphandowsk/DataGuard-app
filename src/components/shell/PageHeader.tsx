"use client";

import { Icon } from "@/components/ui/Icon";
import { PAGES } from "@/lib/data/nav";
import { useControls } from "@/components/ControlsProvider";
import { useUI } from "@/lib/store";

export function PageHeader() {
  const screen = useUI((s) => s.screen);
  const controlId = useUI((s) => s.controlId);
  const { byId } = useControls();
  const go = useUI((s) => s.go);
  let page = PAGES[screen] ?? {
    crumb1: "Mazingira Trust",
    crumb2: "",
    title: "",
    sub: "Planned section of the information architecture.",
  };
  // The control detail header carries the selected control's identity.
  if (screen === "control") {
    const q = byId[controlId];
    if (q) page = { ...page, crumb2: q.id, title: q.title };
  }

  return (
    <div className="bg-ground px-7 pb-3 pt-[22px]">
      <div className="mb-2 flex items-center gap-1.5 text-[11.5px] text-ink-muted">
        <span>{page.crumb1}</span>
        <Icon name="chevron-right" size={12} className="text-ink-faint" />
        <span className="font-medium text-ink">{page.crumb2}</span>
      </div>
      <div className="flex flex-wrap items-end gap-5">
        <div className="min-w-0 flex-[1_1_320px]">
          <h1 className="m-0 text-[24px] font-semibold leading-[1.2] tracking-[-0.5px]">{page.title}</h1>
          <p className="m-0 mt-[5px] max-w-[70ch] text-[13px] text-ink-muted [text-wrap:pretty]">{page.sub}</p>
        </div>
        <div className="flex flex-none items-center gap-2">
          <button
            onClick={() => go("reports")}
            className="flex items-center gap-[7px] whitespace-nowrap rounded-full border border-line-strong bg-surface px-3.5 py-2 text-[12.5px] font-semibold hover:border-teal hover:text-teal"
          >
            <Icon name="file-down" size={15} className="flex-none" />
            Export report
          </button>
          <button
            onClick={() => go("assessment")}
            className="flex items-center gap-[7px] whitespace-nowrap rounded-full border border-teal bg-teal px-3.5 py-2 text-[12.5px] font-semibold text-white hover:border-teal-dark hover:bg-teal-dark"
          >
            <Icon name="clipboard-check" size={15} className="flex-none" />
            Continue assessment
          </button>
        </div>
      </div>
    </div>
  );
}
