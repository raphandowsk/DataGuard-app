/**
 * Tone maps transcribed verbatim from the prototype script. These drive the
 * tinted status chips; because the colours are chosen per-datum they are applied
 * as inline styles rather than static Tailwind classes.
 */
export type Tone = { color: string; bg: string; icon: string };

export const RISK_TONE: Record<string, Tone> = {
  CRITICAL: { color: "#8e2b22", bg: "#fbe7e4", icon: "octagon-alert" },
  HIGH: { color: "#a4501f", bg: "#f8ece1", icon: "triangle-alert" },
  MEDIUM: { color: "#7a6212", bg: "#fbf5e0", icon: "circle-alert" },
  LOW: { color: "#4d5c38", bg: "#eef1e7", icon: "circle-dot" },
};

export const STATUS_TONE: Record<string, Tone> = {
  Open: { color: "#5b6b6e", bg: "#f2f5f5", icon: "circle-dashed" },
  "In Progress": { color: "#2b5f9e", bg: "#e8effa", icon: "loader" },
  Blocked: { color: "#8e2b22", bg: "#fbe7e4", icon: "circle-slash" },
  Completed: { color: "#16775a", bg: "#e3f2ea", icon: "circle-check" },
  Cancelled: { color: "#93a1a4", bg: "#f2f5f5", icon: "circle-x" },
};

/** good / warn / bad — used for record status across data, people and third-party screens. */
export const TONE3: Record<"good" | "warn" | "bad", Tone> = {
  good: { color: "#16775a", bg: "#e3f2ea", icon: "circle-check" },
  warn: { color: "#a4501f", bg: "#f8ece1", icon: "triangle-alert" },
  bad: { color: "#8e2b22", bg: "#fbe7e4", icon: "octagon-alert" },
};

export const STATUS_TO_TONE: Record<string, "good" | "warn" | "bad"> = {
  Complete: "good",
  Review: "warn",
  Gap: "bad",
};

/** Coverage shade ramp used by domain bars and section lists. */
export function shade(n: number): string {
  return n >= 80 ? "#16775a" : n >= 65 ? "#7a8a5e" : n >= 50 ? "#c67139" : "#b23a2f";
}
export function shadeIcon(n: number): string {
  return n >= 80 ? "circle-check" : n >= 65 ? "circle-dot" : n >= 50 ? "triangle-alert" : "octagon-alert";
}
