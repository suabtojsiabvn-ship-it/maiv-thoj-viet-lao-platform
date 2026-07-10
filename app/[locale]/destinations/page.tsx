import { notFound } from "next/navigation";

import { getDestinationsByLocale } from "@/content/destinations";
import { buildMetadata } from "@/content/seo";
import { DestinationGrid } from "@/features/destinations/components/DestinationGrid";
import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

interface DestinationListingPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: DestinationListingPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildMetadata({
    title: "Destinations | Maiv Thoj Viet Lao Platform",
    description:
      "Explore selected destinations in Vietnam that can become part of your patient journey with Maiv Thoj Viet Lao Platform.",
    canonical: `/${locale}/destinations`,
  });
}

export default async function DestinationListingPage({
  params,
}: DestinationListingPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const destinations = getDestinationsByLocale(locale as Locale);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Destinations
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Travel experiences that support your treatment journey.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore selected destinations in Vietnam that can become part of a
            calm, meaningful and well-supported patient journey with Maiv Thoj
            Viet Lao Platform.
          </p>

          <DestinationGrid destinations={destinations} />
        </div>
      </section>
    </main>
  );
}