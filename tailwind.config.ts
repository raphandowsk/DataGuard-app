import type { Config } from "tailwindcss";

/**
 * Design tokens transcribed from the DataGuard Prototype (App/DataGuard Prototype.dc.html).
 * The prototype links the "Organic" design system but overrides it entirely with this
 * cool grey-and-teal, Instrument Sans system — that override is the real design intent.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ground: "#eef1f2",
        surface: "#ffffff",
        panel: "#f7f9f9",
        line: { DEFAULT: "#e3e9ea", strong: "#cfd8d9" },
        ink: { DEFAULT: "#0e1a1c", mid: "#3d4e51", muted: "#5b6b6e", faint: "#93a1a4", dim: "#8c9a9d" },
        teal: { DEFAULT: "#0d7d75", dark: "#095e58", deep: "#12503c", bg: "#e5f2f0" },
        crit: { fg: "#8e2b22", bg: "#fbe7e4" },
        high: { fg: "#a4501f", bg: "#f8ece1" },
        med: { fg: "#7a6212", bg: "#fbf5e0" },
        low: { fg: "#4d5c38", bg: "#eef1e7" },
        good: { fg: "#16775a", bg: "#e3f2ea" },
        info: { fg: "#2b5f9e", bg: "#e8effa" },
        alert: "#b23a2f",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        card: "16px",
        panel: "13px",
      },
      keyframes: {
        dgFade: { from: { opacity: "0", transform: "translateY(6px)" }, to: { opacity: "1", transform: "none" } },
        dgToast: { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "none" } },
        dgGrow: { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
      },
      animation: {
        fade: "dgFade 0.25s ease both",
        toast: "dgToast 0.2s ease both",
        grow: "dgGrow 0.7s cubic-bezier(0.2,0.8,0.2,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
