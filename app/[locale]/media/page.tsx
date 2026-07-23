import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";

import { getMediaPageCopy, getMediaVideos } from "@/content/media";
import {
  buildMetadata,
  createBreadcrumbSchema,
  createCollectionPageSchema,
  getSeoKeywords,
  seo,
} from "@/content/seo";
import { site } from "@/content/site";
import { MediaGallery } from "@/features/media";
import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

interface MediaPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: MediaPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const currentLocale = locale as Locale;
  const copy = getMediaPageCopy(currentLocale);

  return buildMetadata({
    title: copy.seo.title,
    description: copy.seo.description,
    canonical: `/${locale}/media`,
    keywords: getSeoKeywords(currentLocale, "media"),
    locale,
  });
}

export default async function MediaPage({ params }: MediaPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const copy = getMediaPageCopy(currentLocale);
  const videos = getMediaVideos(currentLocale);
  const pageUrl = new URL(`/${locale}/media`, seo.siteUrl).toString();
  const homeUrl = new URL(`/${locale}`, seo.siteUrl).toString();

  const collectionSchema = createCollectionPageSchema({
    name: copy.seo.title,
    description: copy.seo.description,
    url: pageUrl,
    inLanguage: currentLocale,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: copy.breadcrumbHome,
      url: homeUrl,
    },
    {
      name: copy.breadcrumbCurrent,
      url: pageUrl,
    },
  ]);

  const videoListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.seo.title,
    itemListElement: videos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: video.title,
      url: video.url,
    })),
  };

  return (
    <>
      <Script
        id={`media-collection-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <Script
        id={`media-breadcrumb-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Script
        id={`media-video-list-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoListSchema),
        }}
      />

      <main className="min-h-screen bg-[#090806] text-[#F8F4EC]">
        <section className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_20%_0%,rgba(214,168,75,0.13),transparent_46%)]"
          />

          <div className="relative mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A84B] sm:text-sm">
              {copy.badge}
            </p>

            <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[#F7F3EA] sm:text-5xl lg:text-7xl">
              {copy.heading}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#B8B0A2] sm:text-lg">
              {copy.description}
            </p>

            <MediaGallery videos={videos} copy={copy} />

            <p className="mt-8 rounded-2xl border border-[#D6A84B]/15 bg-[#D6A84B]/5 px-5 py-4 text-sm leading-6 text-[#AFA697]">
              {copy.disclaimer}
            </p>

            <section className="mt-16 overflow-hidden rounded-[2rem] border border-[#D6A84B]/25 bg-[linear-gradient(135deg,rgba(214,168,75,0.16),rgba(17,16,13,0.96)_46%)] p-7 sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
              <div className="max-w-2xl">
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#F7F3EA] sm:text-4xl">
                  {copy.ctaTitle}
                </h2>

                <p className="mt-4 text-base leading-8 text-[#B8B0A2]">
                  {copy.ctaDescription}
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
                <Link
                  href={`/${locale}/booking`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D6A84B] px-6 py-3 text-sm font-bold text-[#090806] transition hover:bg-[#E8C96E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11100D]"
                >
                  {copy.bookingLabel}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>

                <a
                  href={site.contact.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-6 py-3 text-sm font-bold text-emerald-300 transition hover:border-emerald-300/70 hover:bg-emerald-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  {copy.whatsappLabel}
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
