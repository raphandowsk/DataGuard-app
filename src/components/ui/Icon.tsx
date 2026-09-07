"use client";

import { icons, type LucideProps } from "lucide-react";

/** Convert a kebab-case Lucide name ("layout-dashboard") to Pascal ("LayoutDashboard"). */
function toPascal(name: string): string {
  return name
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
  size?: number;
}

/**
 * Renders a Lucide icon by its kebab-case name, matching the prototype's
 * `<i data-lucide="...">` usage. Default stroke width 1.9, as the prototype sets.
 */
export function Icon({ name, size = 16, strokeWidth = 1.9, ...rest }: IconProps) {
  const Cmp = (icons as Record<string, React.ComponentType<LucideProps>>)[toPascal(name)];
  if (!Cmp) return null;
  return <Cmp width={size} height={size} strokeWidth={strokeWidth} {...rest} />;
}
