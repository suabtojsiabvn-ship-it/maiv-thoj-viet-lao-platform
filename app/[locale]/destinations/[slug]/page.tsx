import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentBody } from "@/components/content/ContentBody";
import { ContentGallery } from "@/components/content/ContentGallery";
import { ContentHero } from "@/components/content/ContentHero";
import { ContentMeta } from "@/components/content/ContentMeta";
import { ContentTags } from "@/components/content/ContentTags";
import {
  getDestinationBySlug,
  getDestinationSlugs,
} from "@/content/destinations";
import type { Locale } from "@/types/i18n";

interface DestinationDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getDestinationSlugs();
}

export async function generateMetadata({
  params,
}: DestinationDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const destination = getDestinationBySlug(locale as Locale, slug);

  if (!destination) {
    return {};
  }

  return {
    title: destination.seo.title,
    description: destination.seo.description,
    alternates: {
      canonical:
        destination.seo.canonical ??
        `/${destination.locale}/destinations/${destination.slug}`,
    },
    openGraph: {
      title: destination.seo.title,
      description: destination.seo.description,
      images: [
        {
          url: destination.seo.image ?? destination.media.coverImage,
          alt: destination.title,
        },
      ],
    },
  };
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const { locale, slug } = await params;
  const destination = getDestinationBySlug(locale as Locale, slug);

  if (!destination) {
    notFound();
  }

  const metaItems = [
    {
      label: "Country",
      value: destination.location.country,
    },
    {
      label: "Province",
      value: destination.location.province,
    },
    {
      label: "District",
      value: destination.location.district ?? "Regional destination",
    },
    {
      label: "Duration",
      value: destination.recommendedDuration ?? "Flexible journey",
    },
  ];

  const body = [
    destination.summary,
    ...destination.highlights.map(
      (highlight) => `${highlight.title}: ${highlight.description}`,
    ),
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <ContentHero
        title={destination.title}
        summary={destination.summary}
        coverImage={destination.media.coverImage}
      />

      <ContentMeta items={metaItems} />

      <ContentBody paragraphs={body} />

      <ContentGallery
        images={destination.media.gallery}
        title={`${destination.title} Gallery`}
      />

      <ContentTags tags={destination.tags} />
    </main>
  );
}