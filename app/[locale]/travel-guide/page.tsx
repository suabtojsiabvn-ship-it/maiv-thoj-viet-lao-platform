import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import { getDictionary } from "@/content/locales";
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

  const dictionary = await getDictionary(locale);
  const pageDictionary = dictionary.pages.travelGuide;

  return buildMetadata({
    title: pageDictionary.seo.title,
    description: pageDictionary.seo.description,
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

  const dictionary = await getDictionary(locale);
  const pageDictionary = dictionary.pages.travelGuide;
  const guides = getTravelGuidesByLocale(locale as Locale);

  const pageUrl = new URL(
    `/${locale}/travel-guide`,
    seo.siteUrl,
  ).toString();

  const homeUrl = new URL(
    `/${locale}`,
    seo.siteUrl,
  ).toString();

  const collectionSchema = createCollectionPageSchema({
    name: pageDictionary.schema.collectionName,
    description: pageDictionary.seo.description,
    url: pageUrl,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: pageDictionary.schema.breadcrumbHome,
      url: homeUrl,
    },
    {
      name: pageDictionary.schema.breadcrumbCurrent,
      url: pageUrl,
    },
  ]);

  return (
    <>
      <Script
        id={`travel-guide-collection-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <Script
        id={`travel-guide-breadcrumb-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              {pageDictionary.badge}
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              {pageDictionary.heading}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {pageDictionary.description}
            </p>

            <TravelGuideGrid guides={guides} />
          </div>
        </section>
      </main>
    </>
  );
}
