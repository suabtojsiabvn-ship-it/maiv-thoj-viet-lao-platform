import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import {
  buildMetadata,
  createArticleSchema,
  createBreadcrumbSchema,
  seo,
} from "@/content/seo";
import {
  getTravelGuideBySlug,
  getTravelGuideSlugs,
} from "@/content/travel-guide";
import { TravelGuideArticle } from "@/features/travel-guide";
import type { Locale } from "@/types/i18n";

interface TravelGuideDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getTravelGuideSlugs();
}

export async function generateMetadata({
  params,
}: TravelGuideDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  const guide = getTravelGuideBySlug(
    locale as Locale,
    slug,
  );

  if (!guide) {
    return {};
  }

  return buildMetadata({
    title: guide.seo.title,
    description: guide.seo.description,
    canonical:
      guide.seo.canonical ??
      `/${guide.locale}/travel-guide/${guide.slug}`,
    image:
      guide.seo.image ??
      guide.media.coverImage,
    locale: guide.locale,
  });
}

export default async function TravelGuideDetailPage({
  params,
}: TravelGuideDetailPageProps) {
  const { locale, slug } = await params;

  const guide = getTravelGuideBySlug(
    locale as Locale,
    slug,
  );

  if (!guide) {
    notFound();
  }

  const guideUrl = new URL(
    guide.seo.canonical ??
      `/${guide.locale}/travel-guide/${guide.slug}`,
    seo.siteUrl,
  ).toString();

  const travelGuideUrl = new URL(
    `/${guide.locale}/travel-guide`,
    seo.siteUrl,
  ).toString();

  const homeUrl = new URL(
    `/${guide.locale}`,
    seo.siteUrl,
  ).toString();

  const articleSchema =
    createArticleSchema({
      headline: guide.title,
      description: guide.seo.description,
      url: guideUrl,
      image:
        guide.seo.image ??
        guide.media.coverImage,
    });

  const breadcrumbSchema =
    createBreadcrumbSchema([
      {
        name: "Home",
        url: homeUrl,
      },
      {
        name: "Travel Guide",
        url: travelGuideUrl,
      },
      {
        name: guide.title,
        url: guideUrl,
      },
    ]);

  return (
    <>
      <Script
        id={`travel-guide-article-${guide.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema,
          ),
        }}
      />

      <Script
        id={`travel-guide-breadcrumb-${guide.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema,
          ),
        }}
      />

      <TravelGuideArticle guide={guide} />
    </>
  );
}