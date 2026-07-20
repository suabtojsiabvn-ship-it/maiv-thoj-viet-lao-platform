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
        "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-primary/10 hover:text-gold-soft",
      ].join(" ")}
    >
      {locale.nativeLabel}
    </button>
  );
}