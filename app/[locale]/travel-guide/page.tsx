import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import {
  buildMetadata,
  createBreadcrumbSchema,
  createCollectionPageSchema,
  seo,
} from "@/content/seo";
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

  return buildMetadata({
    title: "Travel Guide | Maiv Thoj Viet Lao Platform",
    description:
      "Practical guidance for international patients preparing for dental treatment, travel support, hotel stay, transportation and aftercare in Vietnam.",
    canonical: `/${locale}/travel-guide`,
    locale,
  });
}

export default async function TravelGuideListingPage({
  params,
}: TravelGuideListingPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const guides = getTravelGuidesByLocale(
    locale as Locale,
  );

  const pageUrl = new URL(
    `/${locale}/travel-guide`,
    seo.siteUrl,
  ).toString();

  const homeUrl = new URL(
    `/${locale}`,
    seo.siteUrl,
  ).toString();

  const collectionSchema =
    createCollectionPageSchema({
      name: "Travel Guide",
      description:
        "Practical guidance for international patients preparing for dental treatment, travel support, hotel stay, transportation and aftercare in Vietnam.",
      url: pageUrl,
    });

  const breadcrumbSchema =
    createBreadcrumbSchema([
      {
        name: "Home",
        url: homeUrl,
      },
      {
        name: "Travel Guide",
        url: pageUrl,
      },
    ]);

  return (
    <>
      <Script
        id={`travel-guide-collection-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionSchema,
          ),
        }}
      />

      <Script
        id={`travel-guide-breadcrumb-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema,
          ),
        }}
      />

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
              Explore helpful guidance for airport arrival, hotel stay,
              local transportation, travel preparation, food, culture
              and aftercare support during your patient journey with
              Maiv Thoj Viet Lao Platform.
            </p>

            <TravelGuideGrid guides={guides} />
          </div>
        </section>
      </main>
    </>
  );
}