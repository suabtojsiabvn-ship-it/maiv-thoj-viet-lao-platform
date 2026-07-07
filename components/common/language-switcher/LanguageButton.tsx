"use client";

import type { LocaleInfo } from "@/types/i18n";

interface LanguageButtonProps {
  locale: LocaleInfo;
  active: boolean;
  onClick: () => void;
}

export function LanguageButton({
  locale,
  active,
  onClick,
}: LanguageButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-md px-3 py-2 text-sm transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "hover:bg-muted",
      ].join(" ")}
    >
      {locale.nativeLabel}
    </button>
  );
}