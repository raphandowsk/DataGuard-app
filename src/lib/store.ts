"use client";

import { create } from "zustand";

/**
 * All screens the prototype can show. Mirrors the REAL[] list plus the
 * information-architecture stubs in DataGuard Prototype.dc.html.
 */
export type Screen =
  | "dashboard"
  | "assessment"
  | "control"
  | "risks"
  | "tasks"
  | "reports"
  | "portfolio"
  | "inventory"
  | "map"
  | "transfers"
  | "rights"
  | "processors"
  | "incidents"
  | "sensitive"
  | "retention"
  | "consent"
  | "contracts"
  | "policies"
  | "evidence"
  | "settings"
  | "rightsCase"
  | "incidentIntake"
  | "transferAssess"
  | "audit"
  | "consentHistory"
  | "frameworkMigration";

export interface LinkedEvidence {
  name: string;
  meta: string;
  strength: string;
  expiry: string;
}

interface UIState {
  screen: Screen;
  qi: number; // selected control index for assessment / control detail
  palette: boolean;
  toast: string | null;
  onboarding: boolean;
  portal: boolean;
  portalStep: number; // public rights portal: 0 form, 1 confirmation

  // assessment / control state
  answers: Record<string, string>;
  notes: string;
  linked: LinkedEvidence[];
  evidence: boolean; // attach-evidence dialog
  taskView: "list" | "kanban";

  // records & ops state
  intakeStep: number; // breach intake wizard 0..3
  auditFilter: string;
  reportId: string;
  format: string;
  reportSections: Record<string, boolean>;

  go: (screen: Screen) => void;
  goControl: (qi: number) => void;
  setQi: (qi: number) => void;
  setAnswer: (id: string, label: string) => void;
  setNotes: (v: string) => void;
  openEvidence: () => void;
  closeEvidence: () => void;
  addEvidence: (e: LinkedEvidence) => void;
  setTaskView: (v: "list" | "kanban") => void;
  setIntakeStep: (n: number) => void;
  setAuditFilter: (f: string) => void;
  setReportId: (id: string) => void;
  setFormat: (f: string) => void;
  toggleReportSection: (key: string) => void;
  toggleWorkspace: () => void;
  openPalette: () => void;
  closePalette: () => void;
  setOnboarding: (open: boolean) => void;
  openPortal: () => void;
  closePortal: () => void;
  submitPortal: () => void;
  flash: (msg: string) => void;
  clearToast: () => void;
}

let toastTimer: ReturnType<typeof setTimeout> | null = null;

export const useUI = create<UIState>((set, get) => ({
  screen: "dashboard",
  qi: 3,
  palette: false,
  toast: null,
  onboarding: false,
  portal: false,
  portalStep: 0,

  answers: { "PDPA-027-001": "Partially implemented", "PDPA-027-002": "Implemented" },
  notes: "",
  linked: [
    {
      name: "Access Control Procedure v3.pdf",
      meta: "Uploaded 14 Aug 2026 by Joseph Mwakalinga · 340 KB",
      strength: "Strong",
      expiry: "Reviewed quarterly",
    },
  ],
  evidence: false,
  taskView: "list",

  intakeStep: 0,
  auditFilter: "All activity",
  reportId: "exec",
  format: "PDF",
  reportSections: { coverage: true, domains: true, actions: true, risks: true, evidence: false, audit: false },

  go: (screen) => set({ screen, palette: false }),
  goControl: (qi) => set({ screen: "control", qi }),
  setQi: (qi) => set({ qi }),
  setAnswer: (id, label) => set((s) => ({ answers: { ...s.answers, [id]: label } })),
  setNotes: (v) => set({ notes: v }),
  openEvidence: () => set({ evidence: true }),
  closeEvidence: () => set({ evidence: false }),
  addEvidence: (e) => set((s) => ({ linked: [...s.linked, e], evidence: false })),
  setTaskView: (v) => set({ taskView: v }),
  setIntakeStep: (n) => set({ intakeStep: Math.max(0, Math.min(3, n)) }),
  setAuditFilter: (f) => set({ auditFilter: f }),
  setReportId: (id) => set({ reportId: id }),
  setFormat: (f) => set({ format: f }),
  toggleReportSection: (key) => set((s) => ({ reportSections: { ...s.reportSections, [key]: !s.reportSections[key] } })),
  toggleWorkspace: () => set({ screen: get().screen === "portfolio" ? "dashboard" : "portfolio" }),
  openPalette: () => set({ palette: true }),
  closePalette: () => set({ palette: false }),
  setOnboarding: (open) => set({ onboarding: open }),
  openPortal: () => set({ portal: true, portalStep: 0 }),
  closePortal: () => set({ portal: false }),
  submitPortal: () => set({ portalStep: 1 }),
  flash: (msg) => {
    set({ toast: msg });
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => set({ toast: null }), 3200);
  },
  clearToast: () => set({ toast: null }),
}));
