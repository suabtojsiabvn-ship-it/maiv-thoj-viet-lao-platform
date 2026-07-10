import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getTravelGuidesByLocale } from "@/content/travel-guide";
import { TravelGuideGrid } from "@/features/travel-guide/components";
import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

interface TravelGuideListingPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: TravelGuideListingPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return {
    title: "Travel Guide | Maiv Thoj Viet Lao Platform",
    description:
      "Practical guidance for international patients preparing for dental treatment, travel support, hotel stay, transportation and aftercare in Vietnam.",
    alternates: {
      canonical: `/${locale}/travel-guide`,
    },
    openGraph: {
      title: "Travel Guide | Maiv Thoj Viet Lao Platform",
      description:
        "Practical guidance for international patients preparing for dental treatment, travel support, hotel stay, transportation and aftercare in Vietnam.",
    },
  };
}

export default async function TravelGuideListingPage({
  params,
}: TravelGuideListingPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const guides = getTravelGuidesByLocale(locale as Locale);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Travel Guide
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Practical guidance for your treatment journey in Vietnam.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore helpful guidance for airport arrival, hotel stay, local
            transportation, travel preparation, food, culture and aftercare
            support during your patient journey with Maiv Thoj Viet Lao
            Platform.
          </p>

          <TravelGuideGrid guides={guides} />
        </div>
      </section>
    </main>
  );
}