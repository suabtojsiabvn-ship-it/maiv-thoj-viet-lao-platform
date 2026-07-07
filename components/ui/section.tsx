import * as React from "react";

import { cn } from "@/lib/utils";

const sectionSpacing = {
  sm: "py-12 lg:py-16",
  md: "py-16 lg:py-20",
  lg: "py-20 lg:py-28",
  xl: "py-24 lg:py-32",
} as const;

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  spacing?: keyof typeof sectionSpacing;
  as?: React.ElementType;
}

export function Section({
  children,
  className,
  id,
  spacing = "lg",
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        "relative",
        sectionSpacing[spacing],
        className
      )}
    >
      {children}
    </Component>
  );
}