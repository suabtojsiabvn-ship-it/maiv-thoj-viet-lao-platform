import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import { getDictionary } from "@/content/locales";
import {
  buildMetadata,
  createBreadcrumbSchema,
  createCollectionPageSchema,
  getSeoKeywords,
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
  const currentLocale = locale as Locale;

  return buildMetadata({
    title: pageDictionary.seo.title,
    description: pageDictionary.seo.description,
    canonical: `/${locale}/travel-guide`,
    keywords: getSeoKeywords(currentLocale, "travelGuide"),
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
  const currentLocale = locale as Locale;
  const guides = getTravelGuidesByLocale(currentLocale);

  const pageUrl = new URL(`/${locale}/travel-guide`, seo.siteUrl).toString();

  const homeUrl = new URL(`/${locale}`, seo.siteUrl).toString();

  const collectionSchema = createCollectionPageSchema({
    name: pageDictionary.schema.collectionName,
    description: pageDictionary.seo.description,
    url: pageUrl,
    inLanguage: currentLocale,
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

      <main className="min-h-screen bg-[#090806] text-[#F8F4EC]">
        <section className="px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A84B] sm:text-sm">
              {pageDictionary.badge}
            </p>

            <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[#F7F3EA] sm:text-5xl lg:text-7xl">
              {pageDictionary.heading}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#B8B0A2] sm:text-lg">
              {pageDictionary.description}
            </p>

            <TravelGuideGrid
              guides={guides}
              locale={currentLocale}
              page={pageDictionary}
            />
          </div>
        </section>
      </main>
    </>
  );
}
