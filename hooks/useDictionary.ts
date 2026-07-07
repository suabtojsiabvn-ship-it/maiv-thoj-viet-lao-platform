"use client";

import { useContext } from "react";

import { LocaleContext } from "@/contexts/LocaleContext";

export function useDictionary() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error(
      "useDictionary must be used inside LocaleProvider."
    );
  }

  return context.dictionary;
}

export function useCurrentLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error(
      "useCurrentLocale must be used inside LocaleProvider."
    );
  }

  return context.locale;
}