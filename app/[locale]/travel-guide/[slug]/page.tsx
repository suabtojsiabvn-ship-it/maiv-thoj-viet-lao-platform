import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import { getDictionary } from "@/content/locales";
import {
  buildMetadata,
  createArticleSchema,
  createBreadcrumbSchema,
  getSeoKeywords,
  seo,
} from "@/content/seo";
import {
  getTravelGuideBySlugWithFallback,
  getTravelGuideStaticParams,
  isTravelGuideKey,
} from "@/content/travel-guide";
import { TravelGuideArticle } from "@/features/travel-guide";
import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

interface TravelGuideDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getTravelGuideStaticParams();
}

export async function generateMetadata({
  params,
}: TravelGuideDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale) || !isTravelGuideKey(slug)) {
    return {};
  }

  const currentLocale = locale as Locale;
  const guide = getTravelGuideBySlugWithFallback(currentLocale, slug);

  if (!guide) {
    return {};
  }

  const dictionary = await getDictionary(currentLocale);
  const content = dictionary.pages.travelGuide.items[slug];

  return buildMetadata({
    title: content.seo.title,
    description: content.seo.description,
    canonical: `/${currentLocale}/travel-guide/${slug}`,
    image: guide.seo.image ?? guide.media.coverImage,
    keywords: getSeoKeywords(currentLocale, "travelGuideArticle", slug),
    locale: currentLocale,
  });
}

export default async function TravelGuideDetailPage({
  params,
}: TravelGuideDetailPageProps) {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale) || !isTravelGuideKey(slug)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const guide = getTravelGuideBySlugWithFallback(currentLocale, slug);

  if (!guide) {
    notFound();
  }

  const dictionary = await getDictionary(currentLocale);
  const page = dictionary.pages.travelGuide;
  const content = page.items[slug];

  const guideUrl = new URL(
    `/${currentLocale}/travel-guide/${slug}`,
    seo.siteUrl,
  ).toString();
  const travelGuideUrl = new URL(
    `/${currentLocale}/travel-guide`,
    seo.siteUrl,
  ).toString();
  const homeUrl = new URL(`/${currentLocale}`, seo.siteUrl).toString();

  const articleSchema = createArticleSchema({
    headline: content.title,
    description: content.seo.description,
    url: guideUrl,
    image: guide.seo.image ?? guide.media.coverImage,
    inLanguage: currentLocale,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: page.schema.breadcrumbHome,
      url: homeUrl,
    },
    {
      name: page.schema.breadcrumbCurrent,
      url: travelGuideUrl,
    },
    {
      name: content.title,
      url: guideUrl,
    },
  ]);

  return (
    <>
      <Script
        id={`travel-guide-article-${currentLocale}-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <Script
        id={`travel-guide-breadcrumb-${currentLocale}-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <TravelGuideArticle
        guide={guide}
        locale={currentLocale}
        content={content}
        page={page}
      />
    </>
  );
}
