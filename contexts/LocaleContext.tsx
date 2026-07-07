"use client";

import { createContext } from "react";

import type { Locale, LocaleDictionary } from "@/types/i18n";

export interface LocaleContextValue {
  locale: Locale;
  dictionary: LocaleDictionary;
}

export const LocaleContext =
  createContext<LocaleContextValue | null>(null);