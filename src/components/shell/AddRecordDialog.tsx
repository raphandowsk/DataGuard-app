"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

export interface Field {
  name: string;
  label: string;
  type?: "text" | "textarea" | "select" | "checkbox" | "date";
  options?: string[];
  placeholder?: string;
  required?: boolean;
  full?: boolean; // span both columns
}

interface Props {
  open: boolean;
  title: string;
  fields: Field[];
  submitLabel?: string;
  initial?: Record<string, string | boolean>;
  onClose: () => void;
  onSubmit: (values: Record<string, string | boolean>) => Promise<{ ok: boolean; error?: string }>;
}

function blank(fields: Field[]): Record<string, string | boolean> {
  const v: Record<string, string | boolean> = {};
  for (const f of fields) v[f.name] = f.type === "checkbox" ? false : f.type === "select" ? f.options?.[0] ?? "" : "";
  return v;
}

export function AddRecordDialog({ open, title, fields, submitLabel = "Add", initial, onClose, onSubmit }: Props) {
  const [values, setValues] = useState<Record<string, string | boolean>>(() => ({ ...blank(fields), ...initial }));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setValues({ ...blank(fields), ...initial });
      setError(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, initial]);

  if (!open) return null;

  const set = (name: string, v: string | boolean) => setValues((prev) => ({ ...prev, [name]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    for (const f of fields) {
      if (f.required && f.type !== "checkbox" && !String(values[f.name] ?? "").trim()) {
        setError(`${f.label} is required.`);
        return;
      }
    }
    setBusy(true);
    setError(null);
    const res = await onSubmit(values);
    setBusy(false);
    if (!res.ok) return setError(res.error ?? "Could not save.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 pt-[6vh] sm:items-center sm:pt-4">
      <div className="absolute inset-0 bg-[rgba(14,26,28,0.35)]" onClick={onClose} />
      <div className="relative z-10 flex max-h-[85vh] w-full max-w-[520px] flex-col overflow-hidden rounded-card border border-line bg-surface shadow-[0_16px_50px_rgba(14,26,28,0.25)]">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="m-0 text-[14px] font-semibold">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="grid h-8 w-8 place-items-center rounded-lg text-ink-muted hover:bg-panel">
            <Icon name="x" size={16} />
          </button>
        </div>

        <form onSubmit={submit} className="flex min-h-0 flex-1 flex-col">
          <div className="grid min-h-0 flex-1 grid-cols-2 gap-3 overflow-y-auto px-5 py-4">
            {fields.map((f) => (
              <label key={f.name} className={`flex flex-col gap-1 ${f.full || f.type === "textarea" ? "col-span-2" : ""}`}>
                <span className="text-[11.5px] font-semibold">
                  {f.label}
                  {f.required && <span className="text-crit-fg"> *</span>}
                </span>
                {f.type === "textarea" ? (
                  <textarea
                    value={String(values[f.name] ?? "")}
                    onChange={(e) => set(f.name, e.target.value)}
                    placeholder={f.placeholder}
                    rows={2}
                    className="resize-y rounded-[9px] border border-line-strong bg-surface px-2.5 py-2 text-[13px]"
                  />
                ) : f.type === "select" ? (
                  <select
                    value={String(values[f.name] ?? "")}
                    onChange={(e) => set(f.name, e.target.value)}
                    className="min-h-[38px] rounded-[9px] border border-line-strong bg-surface px-2.5 text-[13px]"
                  >
                    {(f.options ?? []).map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : f.type === "checkbox" ? (
                  <button
                    type="button"
                    onClick={() => set(f.name, !values[f.name])}
                    className="flex items-center gap-2 self-start rounded-[9px] border border-line-strong bg-surface px-2.5 py-2 text-[12.5px]"
                  >
                    <span className={`grid h-[17px] w-[17px] place-items-center rounded-[5px] ${values[f.name] ? "bg-teal" : "border border-line-strong bg-surface"}`}>
                      {values[f.name] ? <Icon name="check" size={11} className="text-white" /> : null}
                    </span>
                    {values[f.name] ? "Yes" : "No"}
                  </button>
                ) : (
                  <input
                    type={f.type === "date" ? "date" : "text"}
                    value={String(values[f.name] ?? "")}
                    onChange={(e) => set(f.name, e.target.value)}
                    placeholder={f.placeholder}
                    className="min-h-[38px] rounded-[9px] border border-line-strong bg-surface px-2.5 text-[13px]"
                  />
                )}
              </label>
            ))}
          </div>

          {error && (
            <div className="mx-5 mb-2 flex items-start gap-2 rounded-[10px] border border-[#f3cec8] bg-crit-bg px-3 py-2 text-[12px] text-crit-fg">
              <Icon name="circle-alert" size={14} className="mt-px flex-none" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex items-center justify-end gap-2 border-t border-line px-5 py-3">
            <button type="button" onClick={onClose} className="rounded-full border border-line-strong bg-surface px-4 py-2 text-[12.5px] font-semibold hover:border-ink-faint">
              Cancel
            </button>
            <button type="submit" disabled={busy} className="flex items-center gap-1.5 rounded-full bg-teal px-4 py-2 text-[12.5px] font-semibold text-white hover:bg-teal-dark disabled:opacity-50">
              {busy ? <Icon name="loader" size={14} className="animate-spin" /> : <Icon name="plus" size={14} />}
              {busy ? "Saving…" : submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
