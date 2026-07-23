import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import { ContentBody } from "@/components/content/ContentBody";
import { ContentGallery } from "@/components/content/ContentGallery";
import { ContentHero } from "@/components/content/ContentHero";
import { ContentMeta } from "@/components/content/ContentMeta";
import { ContentTags } from "@/components/content/ContentTags";
import {
  buildMetadata,
  createArticleSchema,
  createBreadcrumbSchema,
  seo,
} from "@/content/seo";
import {
  getPatientStoryBySlug,
  getPatientStoryStaticParams,
} from "@/content/stories";

interface StoryDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getPatientStoryStaticParams();
}

export async function generateMetadata({
  params,
}: StoryDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  const story = getPatientStoryBySlug(locale, slug);

  if (!story) {
    return {};
  }

  return buildMetadata({
    title: story.seo.title,
    description: story.seo.description,
    canonical: story.seo.canonical ?? `/${story.locale}/stories/${story.slug}`,
    image: story.seo.image ?? story.media.coverImage,
    locale: story.locale,
    includeLanguageAlternates: false,
  });
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

  const storyUrl = new URL(
    story.seo.canonical ?? `/${story.locale}/stories/${story.slug}`,
    seo.siteUrl,
  ).toString();

  const storiesUrl = new URL(
    `/${story.locale}/stories`,
    seo.siteUrl,
  ).toString();

  const homeUrl = new URL(`/${story.locale}`, seo.siteUrl).toString();

  const articleSchema = createArticleSchema({
    headline: story.title,
    description: story.seo.description,
    url: storyUrl,
    image: story.seo.image ?? story.media.coverImage,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: "Home",
      url: homeUrl,
    },
    {
      name: "Patient Stories",
      url: storiesUrl,
    },
    {
      name: story.title,
      url: storyUrl,
    },
  ]);

  return (
    <>
      <Script
        id={`story-article-${story.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Script
        id={`story-breadcrumb-${story.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

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
    </>
  );
}
