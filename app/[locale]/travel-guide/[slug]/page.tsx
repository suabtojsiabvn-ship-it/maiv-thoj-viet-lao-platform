import { notFound } from "next/navigation";

import {
  getTravelGuideBySlug,
  getTravelGuideSlugs,
} from "@/content/travel-guide";
import { buildMetadata } from "@/content/seo";
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
}: TravelGuideDetailPageProps) {
  const { locale, slug } = await params;
  const guide = getTravelGuideBySlug(locale as Locale, slug);

  if (!guide) {
    return {};
  }

  return buildMetadata({
    title: guide.seo.title,
    description: guide.seo.description,
    canonical:
      guide.seo.canonical ?? `/${guide.locale}/travel-guide/${guide.slug}`,
    image: guide.seo.image ?? guide.media.coverImage,
  });
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