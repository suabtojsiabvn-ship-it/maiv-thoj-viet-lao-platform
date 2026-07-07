"use client";

import { useState } from "react";

import {
  defaultLocale,
  getLocaleInfo,
  getSupportedLocales,
  isLocale,
} from "@/lib/i18n";
import type { Locale } from "@/types/i18n";

import { LanguageButton } from "./LanguageButton";

const STORAGE_KEY = "site-locale";

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);

  if (saved && isLocale(saved)) {
    return saved;
  }

  return defaultLocale;
}

export function LanguageSwitcher() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  function handleChange(next: Locale) {
    setLocale(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <div className="flex items-center gap-2">
      {getSupportedLocales().map((code) => (
        <LanguageButton
          key={code}
          locale={getLocaleInfo(code)}
          active={locale === code}
          onClick={() => handleChange(code)}
        />
      ))}
    </div>
  );
}