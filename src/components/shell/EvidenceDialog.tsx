"use client";

import { Icon } from "@/components/ui/Icon";
import { useControls } from "@/components/ControlsProvider";
import { useUI } from "@/lib/store";

export function EvidenceDialog() {
  const open = useUI((s) => s.evidence);
  const controlId = useUI((s) => s.controlId);
  const { byId, list } = useControls();
  const q = byId[controlId] ?? list[0];
  if (!open || !q) return null;

  const attach = () => {
    useUI.getState().addEvidence({
      name: `${q.suggested[0]}.pdf`,
      meta: "Uploaded just now by Raphael Kimaro · 218 KB",
      strength: "Strong",
      expiry: "Review in 90 days",
    });
    useUI.getState().flash(`Evidence linked to ${q.id} and added to the vault.`);
  };

  return (
    <div className="fixed inset-0 z-[95] flex items-start justify-center overflow-y-auto bg-[rgba(14,26,28,0.32)] p-6 pt-[6vh] sm:items-center sm:pt-6" onClick={() => useUI.getState().closeEvidence()}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dg-ev-title"
        className="w-[min(560px,94vw)] animate-fade overflow-hidden rounded-[18px] bg-surface shadow-[0_24px_60px_rgba(14,26,28,0.22)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-line px-6 pb-4 pt-5">
          <h2 id="dg-ev-title" className="m-0 text-[16px] font-semibold">Attach evidence</h2>
          <p className="m-0 mt-1 text-[12.5px] text-ink-muted">{q.id} — {q.title}</p>
        </div>
        <div className="px-6 py-[22px]">
          <div className="mb-[18px] flex gap-2.5 rounded-[11px] border border-[#d3e0f4] bg-info-bg px-3.5 py-[11px]">
            <Icon name="info" size={15} className="mt-px flex-none text-info-fg" />
            <p className="m-0 text-[11.5px] leading-[1.5]" style={{ color: "#1f4a7d" }}>
              Evidence may contain personal data. Upload only what is necessary and ensure authorised access.
            </p>
          </div>
          <div className="rounded-panel border-[1.5px] border-dashed border-line-strong bg-[#fbfcfc] px-5 py-7 text-center">
            <Icon name="cloud-upload" size={26} className="mx-auto mb-2.5 text-ink-faint" />
            <div className="text-[13px] font-medium">Drop a file here or browse</div>
            <div className="mt-1 text-[11.5px] text-ink-faint">PDF, DOCX, XLSX or PNG · up to 25 MB</div>
          </div>
          <div className="mt-5">
            <div className="mb-[9px] text-[11.5px] font-semibold">Suggested evidence for this control</div>
            <div className="flex flex-wrap gap-[7px]">
              {q.suggested.map((s) => (
                <span key={s} className="rounded-full border border-line bg-panel px-[11px] py-[5px] text-[11.5px] text-ink-mid">{s}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-[9px] border-t border-line bg-[#fbfcfc] px-6 py-[15px]">
          <button onClick={() => useUI.getState().closeEvidence()} className="rounded-full border border-line-strong bg-surface px-4 py-[9px] text-[12.5px] font-semibold hover:border-ink-faint">
            Cancel
          </button>
          <button onClick={attach} className="flex items-center gap-[7px] rounded-full bg-teal px-[18px] py-[9px] text-[12.5px] font-semibold text-white hover:bg-teal-dark">
            <Icon name="paperclip" size={14} />
            Attach and link to control
          </button>
        </div>
      </div>
    </div>
  );
}
