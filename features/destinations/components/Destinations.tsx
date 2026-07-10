import { getFeaturedDestinations } from "@/content/destinations";
import type { Locale } from "@/types/i18n";

import { DestinationGrid } from "./DestinationGrid";

interface DestinationsProps {
  locale: Locale;
}

export function Destinations({ locale }: DestinationsProps) {
  const destinations = getFeaturedDestinations(locale);

  if (destinations.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Travel with care
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
          Destinations that can become part of your patient journey.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          These destinations are selected to support a calm, meaningful and
          memorable experience around your treatment journey in Vietnam.
        </p>

        <DestinationGrid destinations={destinations} />
      </div>
    </section>
  );
}