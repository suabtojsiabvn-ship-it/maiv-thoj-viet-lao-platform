"use client";

import type { Locale } from "@/types/i18n";

import { useTravelGuide } from "../hooks/useTravelGuide";
import { TravelGuideGrid } from "./TravelGuideGrid";

interface TravelGuideProps {
  locale: Locale;
  featuredOnly?: boolean;
}

export function TravelGuide({ locale, featuredOnly = true }: TravelGuideProps) {
  const { page, guides } = useTravelGuide(locale, featuredOnly);

  if (guides.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#090806] px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A84B] sm:text-sm">
          {page.badge}
        </p>

        <h2 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[#F7F3EA] sm:text-5xl lg:text-6xl">
          {page.heading}
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-8 text-[#B8B0A2] sm:text-lg">
          {page.description}
        </p>

        <TravelGuideGrid guides={guides} locale={locale} page={page} />
      </div>
    </section>
  );
}
