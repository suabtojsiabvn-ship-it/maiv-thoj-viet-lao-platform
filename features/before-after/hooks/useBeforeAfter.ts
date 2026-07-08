"use client";

import { useDictionary } from "@/hooks/useDictionary";

import { beforeAfterMeta } from "../data/before-after.data";
import type { BeforeAfterCase } from "../types/before-after.types";

export function useBeforeAfter() {
  const { beforeAfter } = useDictionary();

  const cases: BeforeAfterCase[] = beforeAfterMeta.map((meta) => ({
    key: meta.key,
    before: meta.before,
    after: meta.after,
    title: beforeAfter.cases[meta.key].title,
    treatment: beforeAfter.cases[meta.key].treatment,
    country: beforeAfter.cases[meta.key].country,
  }));

  return {
    beforeAfter,
    cases,
  };
}