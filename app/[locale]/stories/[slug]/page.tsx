import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentBody } from "@/components/content/ContentBody";
import { ContentGallery } from "@/components/content/ContentGallery";
import { ContentHero } from "@/components/content/ContentHero";
import { ContentMeta } from "@/components/content/ContentMeta";
import { ContentTags } from "@/components/content/ContentTags";
import {
  getPatientStoryBySlug,
  patientStories,
} from "@/content/stories";

interface StoryDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return patientStories
    .filter((story) => story.published)
    .map((story) => ({
      locale: story.locale,
      slug: story.slug,
    }));
}

export async function generateMetadata({
  params,
}: StoryDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const story = getPatientStoryBySlug(locale, slug);

  if (!story) {
    return {};
  }

  return {
    title: story.seo.title,
    description: story.seo.description,
    alternates: {
      canonical:
        story.seo.canonical ?? `/${story.locale}/stories/${story.slug}`,
    },
    openGraph: {
      title: story.seo.title,
      description: story.seo.description,
      images: [
        {
          url: story.seo.image ?? story.media.coverImage,
          alt: story.title,
        },
      ],
    },
  };
}

export default async function StoryDetailPage({
  params,
}: StoryDetailPageProps) {
  const { locale, slug } = await params;
  const story = getPatientStoryBySlug(locale, slug);

  if (!story) {
    notFound();
  }

  const metaItems = [
    {
      label: "Patient",
      value: story.patient.displayName,
    },
    {
      label: "Country",
      value: story.patient.country,
    },
    {
      label: "Language",
      value: story.patient.language ?? "International",
    },
    {
      label: "Treatment",
      value: story.treatment.name,
    },
    {
      label: "Material",
      value: story.treatment.material ?? "Personalized plan",
    },
    {
      label: "Doctor",
      value: story.treatment.doctor ?? "Clinical team",
    },
    {
      label: "Duration",
      value: story.treatment.duration ?? "By treatment plan",
    },
  ];

  const body = story.testimonial.body ?? [story.testimonial.quote];

  return (
    <main className="min-h-screen bg-slate-950">
      <ContentHero
        title={story.title}
        summary={story.summary}
        coverImage={story.media.coverImage}
      />

      <ContentMeta items={metaItems} />

      <ContentBody paragraphs={body} />

      <ContentGallery
        images={story.media.gallery}
        title={`${story.title} Gallery`}
      />

      <ContentTags tags={story.tags} />
    </main>
  );
}