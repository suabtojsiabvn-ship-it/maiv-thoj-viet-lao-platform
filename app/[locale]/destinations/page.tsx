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
import { Destinations } from "@/features/destinations";
import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

interface DestinationListingPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: DestinationListingPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);
  const page = dictionary.pages.destinations;

  return buildMetadata({
    title: page.seo.title,
    description: page.seo.description,
    canonical: `/${locale}/destinations`,
    locale,
  });
}

export default async function DestinationListingPage({
  params,
}: DestinationListingPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dictionary = await getDictionary(currentLocale);
  const page = dictionary.pages.destinations;

  const pageUrl = new URL(
    `/${currentLocale}/destinations`,
    seo.siteUrl,
  ).toString();

  const homeUrl = new URL(`/${currentLocale}`, seo.siteUrl).toString();

  const collectionSchema = createCollectionPageSchema({
    name: page.schema.collectionName,
    description: page.seo.description,
    url: pageUrl,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: page.schema.breadcrumbHome,
      url: homeUrl,
    },
    {
      name: page.schema.breadcrumbCurrent,
      url: pageUrl,
    },
  ]);

  return (
    <>
      <Script
        id={`destinations-collection-schema-${currentLocale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <Script
        id={`destinations-breadcrumb-schema-${currentLocale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen bg-[#090806] text-[#F8F4EC]">
        <Destinations locale={currentLocale} />
      </main>
    </>
  );
}
