"use client";

import { useDictionary } from "@/hooks/useDictionary";

export function useTrust() {
  const { trust } = useDictionary();

  return {
    trust,
  };
}