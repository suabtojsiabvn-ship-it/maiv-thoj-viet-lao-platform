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
  tone?: "dark" | "light";
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  maxWidth = "md",
  headingLevel = 2,
  tone = "dark",
}: SectionHeadingProps) {
  const HeadingTag = `h${headingLevel}` as keyof React.JSX.IntrinsicElements;

  return (
    <div
      className={cn(
        "mb-10 md:mb-16",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-flex rounded-full border px-4 py-1 text-sm font-medium",
            tone === "light"
              ? "border-primary/30 bg-primary/10 text-[#765817]"
              : "border-primary/30 bg-primary/10 text-gold-soft"
          )}
        >
          {badge}
        </span>
      )}

      <HeadingTag
        className={cn(
          "mt-5 text-balance font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
          tone === "light" ? "text-ivory-foreground" : "text-foreground"
        )}
      >
        {title}
      </HeadingTag>

      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-7 md:mt-6 md:text-lg md:leading-8",
            tone === "light"
              ? "text-[#665f54]"
              : "text-muted-foreground",
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
