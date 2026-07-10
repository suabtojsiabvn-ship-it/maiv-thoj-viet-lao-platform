import { getFeaturedTravelGuides } from "@/content/travel-guide";
import type { Locale } from "@/types/i18n";

import { TravelGuideGrid } from "./TravelGuideGrid";

interface TravelGuideProps {
  locale: Locale;
}

export function TravelGuide({ locale }: TravelGuideProps) {
  const guides = getFeaturedTravelGuides(locale);

  if (guides.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Travel guide
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
          Practical guidance for a calm patient journey.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Helpful guidance for airport arrival, hotel stay, transportation,
          culture, food and aftercare travel during your journey in Vietnam.
        </p>

        <TravelGuideGrid guides={guides} />
      </div>
    </section>
  );
}