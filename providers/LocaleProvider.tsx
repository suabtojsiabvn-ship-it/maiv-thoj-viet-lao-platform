"use client";

import type { ReactNode } from "react";

import { LocaleContext } from "@/contexts/LocaleContext";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/i18n";

interface LocaleProviderProps {
  locale: Locale;
  children: ReactNode;
}

export function LocaleProvider({
  locale,
  children,
}: LocaleProviderProps) {
  const dictionary = getDictionary(locale);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        dictionary,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}