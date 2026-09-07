import { Icon } from "@/components/ui/Icon";

/** Tinted status chip driven by a tone {color,bg,icon}. */
export function Pill({ color, bg, icon, children }: { color: string; bg: string; icon?: string; children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-[9px] py-0.5 text-[11px] font-semibold"
      style={{ color, background: bg }}
    >
      {icon && <Icon name={icon} size={11} />}
      {children}
    </span>
  );
}
