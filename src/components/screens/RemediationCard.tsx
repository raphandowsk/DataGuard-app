"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { useUI } from "@/lib/store";
import type { Task } from "@/lib/data/tasks";

interface Control {
  id: string;
  title: string;
  task: string;
  risk: string;
  remediation: string;
}

type CreateResult = { ok: true; created: boolean } | { ok: false; error: string };

interface Props {
  control: Control;
  task: Task | undefined;
  defaultOwner: string;
  createFromControl: (c: Control, opts?: { owner?: string; due?: string; overdue?: boolean }) => Promise<CreateResult>;
  removeTask: (code: string) => Promise<{ ok: boolean; error?: string }>;
}

/** Format an ISO date (yyyy-mm-dd) into the "Due 15 Sep 2026" style used across tasks. */
function formatDue(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return "";
  return "Due " + d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

const AMBER_BTN = "rounded-full border border-[#dcc3a6] bg-surface px-3 py-2 text-[12px] font-semibold hover:border-[#c67139]";

export function RemediationCard({ control, task, defaultOwner, createFromControl, removeTask }: Props) {
  const go = useUI((s) => s.go);
  const flash = useUI((s) => s.flash);
  const [mode, setMode] = useState<"idle" | "form" | "confirmRemove">("idle");
  const [owner, setOwner] = useState(defaultOwner);
  const [due, setDue] = useState("");
  const [busy, setBusy] = useState(false);

  const submitCreate = async () => {
    setBusy(true);
    const iso = due;
    const overdue = iso ? new Date(iso + "T00:00:00") < new Date(new Date().toDateString()) : false;
    const res = await createFromControl(control, { owner, due: formatDue(iso), overdue });
    setBusy(false);
    if (!res.ok) return flash(res.error);
    flash(res.created ? `Task created: ${control.task}` : "A remediation task already exists for this control.");
    setMode("idle");
  };

  const confirmRemove = async () => {
    if (!task) return;
    setBusy(true);
    const res = await removeTask(task.id);
    setBusy(false);
    flash(res.ok ? "Remediation task removed." : res.error ?? "Could not remove the task.");
    setMode("idle");
  };

  return (
    <div className="rounded-card border border-[#eed9c4] bg-high-bg p-[18px]">
      <div className="mb-2 flex items-center gap-[7px]">
        <Icon name="wrench" size={14} style={{ color: "#8a4d1f" }} />
        <h3 className="m-0 text-[12.5px] font-semibold" style={{ color: "#5f3512" }}>Remediation</h3>
      </div>
      <p className="m-0 mb-3 text-[12px] leading-[1.6] [text-wrap:pretty]" style={{ color: "#5f3512" }}>{control.remediation}</p>

      {/* --- Task already exists --- */}
      {task ? (
        mode === "confirmRemove" ? (
          <div className="flex flex-col gap-2 rounded-[11px] border border-[#e3b5ae] bg-surface px-3 py-3">
            <span className="text-[12px] font-medium text-crit-fg">Remove this remediation task? This cannot be undone.</span>
            <div className="flex gap-2">
              <button onClick={() => setMode("idle")} className={`flex-1 ${AMBER_BTN}`} style={{ color: "#5f3512" }}>Cancel</button>
              <button onClick={confirmRemove} disabled={busy} className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-alert px-3 py-2 text-[12px] font-semibold text-white hover:opacity-90 disabled:opacity-50">
                <Icon name="trash-2" size={13} />
                {busy ? "Removing…" : "Remove"}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-[11px] border border-[#dcc3a6] bg-surface px-3 py-2 text-[12px] font-medium" style={{ color: "#5f3512" }}>
              <Icon name="circle-check" size={14} className="flex-none text-good-fg" />
              <span className="min-w-0 flex-1">
                Task created · <span className="font-semibold">{task.id}</span> ({task.status})
                {task.owner ? ` · ${task.owner}` : ""}{task.due ? ` · ${task.due}` : ""}
              </span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => go("tasks")} className={`flex-1 ${AMBER_BTN}`} style={{ color: "#5f3512" }}>View task</button>
              <button onClick={() => setMode("confirmRemove")} className="flex items-center justify-center gap-1.5 rounded-full border border-[#e3b5ae] bg-surface px-3 py-2 text-[12px] font-semibold text-crit-fg hover:border-alert">
                <Icon name="trash-2" size={13} />
                Remove
              </button>
            </div>
          </div>
        )
      ) : mode === "form" ? (
        /* --- Create form: owner + due --- */
        <div className="flex flex-col gap-2.5 rounded-[11px] border border-[#dcc3a6] bg-surface px-3 py-3">
          <label className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold" style={{ color: "#5f3512" }}>Owner</span>
            <input
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              placeholder="Who is responsible?"
              className="min-h-[36px] rounded-[9px] border border-line-strong bg-surface px-2.5 text-[12.5px]"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold" style={{ color: "#5f3512" }}>Due date <span className="font-normal text-ink-faint">(optional)</span></span>
            <input
              type="date"
              value={due}
              onChange={(e) => setDue(e.target.value)}
              className="min-h-[36px] rounded-[9px] border border-line-strong bg-surface px-2.5 text-[12.5px]"
            />
          </label>
          <div className="mt-0.5 flex gap-2">
            <button onClick={() => setMode("idle")} className={`flex-1 ${AMBER_BTN}`} style={{ color: "#5f3512" }}>Cancel</button>
            <button onClick={submitCreate} disabled={busy} className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-teal px-3 py-2 text-[12px] font-semibold text-white hover:bg-teal-dark disabled:opacity-50">
              <Icon name="plus" size={13} />
              {busy ? "Creating…" : "Create task"}
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => { setOwner(defaultOwner); setDue(""); setMode("form"); }}
          className={`flex w-full items-center justify-center gap-[7px] ${AMBER_BTN}`}
          style={{ color: "#5f3512" }}
        >
          <Icon name="plus" size={14} />
          Create remediation task
        </button>
      )}
    </div>
  );
}
