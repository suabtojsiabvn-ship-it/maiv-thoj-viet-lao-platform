import * as React from "react";

import { cn } from "@/lib/utils";

const maxWidthClasses = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-4xl",
} as const;

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  maxWidth?: keyof typeof maxWidthClasses;
  headingLevel?: 1 | 2 | 3;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  maxWidth = "md",
  headingLevel = 2,
}: SectionHeadingProps) {
  const HeadingTag = `h${headingLevel}` as keyof React.JSX.IntrinsicElements;

  return (
    <div
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {badge && (
        <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
          {badge}
        </span>
      )}

      <HeadingTag className="mt-5 text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {title}
      </HeadingTag>

      {description && (
        <p
          className={cn(
            "mt-6 text-lg leading-8 text-slate-400",
            maxWidthClasses[maxWidth],
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}