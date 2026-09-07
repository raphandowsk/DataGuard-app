"use client";

import { Icon } from "@/components/ui/Icon";
import { CONTROLS } from "@/lib/data/controls";
import { TASK_COLUMNS, TASK_SUMMARY, TASKS, type Task } from "@/lib/data/tasks";
import { RISK_TONE, STATUS_TONE } from "@/lib/tokens";
import { useUI } from "@/lib/store";

function openControl(controlId: string) {
  const idx = CONTROLS.findIndex((c) => c.id === controlId);
  useUI.getState().goControl(idx >= 0 ? idx : 3);
}
const initialsOf = (owner: string) => owner.split(" ").map((w) => w[0]).join("");

export function TasksScreen() {
  const taskView = useUI((s) => s.taskView);
  const setTaskView = useUI((s) => s.setTaskView);

  const segBtn = (on: boolean) =>
    `rounded-full border-none px-[15px] py-1.5 text-[12px] font-semibold ${on ? "bg-ink text-white" : "bg-transparent text-ink-muted"}`;

  return (
    <div className="flex animate-fade flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="flex rounded-full border border-line bg-surface p-[3px]">
          <button onClick={() => setTaskView("list")} className={segBtn(taskView === "list")}>List</button>
          <button onClick={() => setTaskView("kanban")} className={segBtn(taskView === "kanban")}>Board</button>
        </div>
        <div className="flex items-center gap-[7px] rounded-lg border border-line bg-surface px-2.5 py-1.5">
          <Icon name="user-round" size={13} className="text-ink-faint" />
          <span className="text-[11.5px] text-ink-muted">All owners</span>
        </div>
        <div className="flex items-center gap-[7px] rounded-lg border border-line bg-surface px-2.5 py-1.5">
          <Icon name="flag" size={13} className="text-ink-faint" />
          <span className="text-[11.5px] text-ink-muted">All priorities</span>
        </div>
        <span className="ml-auto text-[12px] text-ink-muted">{TASK_SUMMARY}</span>
      </div>

      {taskView === "list" ? (
        <section className="overflow-hidden rounded-card border border-line bg-surface">
          {TASKS.map((t) => {
            const p = RISK_TONE[t.priority];
            const st = STATUS_TONE[t.status];
            return (
              <div key={t.id} className="flex items-center gap-3.5 border-b border-ground px-5 py-3.5">
                <span className="w-[3px] flex-none self-stretch rounded-full" style={{ background: p.color }} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[13.5px] font-medium">{t.title}</span>
                    <span className="rounded px-1.5 py-0.5 text-[10px] font-bold tracking-[0.4px]" style={{ color: p.color, background: p.bg }}>{t.priority}</span>
                    <span className="inline-flex items-center gap-1 rounded-full px-[9px] py-0.5 text-[11px] font-medium" style={{ color: st.color, background: st.bg }}>
                      <Icon name={st.icon} size={11} />
                      {t.status}
                    </span>
                  </div>
                  <div className="mt-[5px] max-w-[88ch] text-[11.5px] text-ink-muted [text-wrap:pretty]">{t.reason}</div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2.5 text-[11px] text-ink-faint">
                    <span className="rounded border border-line bg-panel px-1.5 py-px font-mono text-[10.5px] text-ink-muted">{t.control}</span>
                    <span>{t.owner}</span>
                    <span>·</span>
                    <span className="font-medium" style={{ color: t.overdue ? "#b23a2f" : "#5b6b6e" }}>{t.due}</span>
                  </div>
                </div>
                <button
                  onClick={() => openControl(t.control)}
                  aria-label="Open control"
                  className="grid h-8 w-8 flex-none place-items-center rounded-[9px] border border-line bg-surface text-ink-muted hover:border-teal hover:text-teal"
                >
                  <Icon name="arrow-up-right" size={15} />
                </button>
              </div>
            );
          })}
        </section>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] items-start gap-3.5">
          {TASK_COLUMNS.map((label) => {
            const items = TASKS.filter((t) => t.status === label);
            const col = STATUS_TONE[label];
            return (
              <section key={label} className="rounded-[14px] border border-line bg-surface p-[13px]">
                <div className="mb-[11px] flex items-center gap-2 px-[3px]">
                  <span className="h-2 w-2 rounded-full" style={{ background: col.color }} />
                  <span className="flex-1 text-[12px] font-semibold">{label}</span>
                  <span className="tnum text-[11px] text-ink-faint">{items.length}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {items.map((t: Task) => {
                    const p = RISK_TONE[t.priority];
                    return (
                      <button
                        key={t.id}
                        onClick={() => openControl(t.control)}
                        className="block w-full rounded-[11px] border border-line bg-[#fbfcfc] p-3 text-left hover:border-line-strong hover:bg-surface"
                      >
                        <div className="mb-[7px] flex items-center gap-1.5">
                          <span className="rounded px-[5px] py-0.5 text-[9.5px] font-bold tracking-[0.4px]" style={{ color: p.color, background: p.bg }}>{t.priority}</span>
                          <span className="font-mono text-[10px] text-ink-faint">{t.control}</span>
                        </div>
                        <div className="text-[12.5px] font-medium leading-[1.4] [text-wrap:pretty]">{t.title}</div>
                        <div className="mt-[9px] flex items-center gap-[7px] text-[10.5px] text-ink-faint">
                          <span className="grid h-[19px] w-[19px] place-items-center rounded-full bg-teal-bg text-[9px] font-bold text-teal">{initialsOf(t.owner)}</span>
                          <span style={{ color: t.overdue ? "#b23a2f" : "#93a1a4" }}>{t.due}</span>
                        </div>
                      </button>
                    );
                  })}
                  {items.length === 0 && (
                    <div className="rounded-[11px] border border-dashed border-line p-4 text-center text-[11.5px] leading-[1.5] text-ink-faint">
                      Nothing here. Tasks move in as owners pick them up.
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
