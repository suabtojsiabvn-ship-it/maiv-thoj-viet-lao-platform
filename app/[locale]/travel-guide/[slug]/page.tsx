import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getTravelGuideBySlug, getTravelGuideSlugs } from "@/content/travel-guide";
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
  const guide = getTravelGuideBySlug(locale as Locale, slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.seo.title,
    description: guide.seo.description,
    alternates: {
      canonical:
        guide.seo.canonical ?? `/${guide.locale}/travel-guide/${guide.slug}`,
    },
    openGraph: {
      title: guide.seo.title,
      description: guide.seo.description,
      images: [
        {
          url: guide.seo.image ?? guide.media.coverImage,
          alt: guide.title,
        },
      ],
    },
  };
}

export default async function TravelGuideDetailPage({
  params,
}: TravelGuideDetailPageProps) {
  const { locale, slug } = await params;
  const guide = getTravelGuideBySlug(locale as Locale, slug);

  if (!guide) {
    notFound();
  }

  return <TravelGuideArticle guide={guide} />;
}