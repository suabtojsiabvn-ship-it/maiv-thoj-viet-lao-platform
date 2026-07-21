import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import { ArrowLeft, ArrowRight, CalendarDays, MapPin } from "lucide-react";

import { Container } from "@/components/ui/container";
import {
  getDestinationBySlugWithFallback,
  getDestinationStaticParams,
  isDestinationKey,
} from "@/content/destinations";
import { getDictionary } from "@/content/locales";
import {
  buildMetadata,
  createArticleSchema,
  createBreadcrumbSchema,
  seo,
} from "@/content/seo";
import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

interface DestinationDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getDestinationStaticParams();
}

export async function generateMetadata({
  params,
}: DestinationDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale) || !isDestinationKey(slug)) {
    return {};
  }

  const currentLocale = locale as Locale;
  const destination = getDestinationBySlugWithFallback(currentLocale, slug);

  if (!destination) {
    return {};
  }

  const dictionary = await getDictionary(currentLocale);
  const page = dictionary.pages.destinations;
  const content = page.items[slug];

  return buildMetadata({
    title: `${content.title} | ${page.schema.collectionName}`,
    description: content.summary,
    canonical: `/${currentLocale}/destinations/${slug}`,
    image: destination.seo.image ?? destination.media.coverImage,
    locale: currentLocale,
  });
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale) || !isDestinationKey(slug)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const destination = getDestinationBySlugWithFallback(currentLocale, slug);

  if (!destination) {
    notFound();
  }

  const dictionary = await getDictionary(currentLocale);
  const page = dictionary.pages.destinations;
  const content = page.items[slug];
  const gallery = destination.media.gallery ?? [];

  const destinationUrl = new URL(
    `/${currentLocale}/destinations/${slug}`,
    seo.siteUrl,
  ).toString();

  const destinationsUrl = new URL(
    `/${currentLocale}/destinations`,
    seo.siteUrl,
  ).toString();

  const homeUrl = new URL(`/${currentLocale}`, seo.siteUrl).toString();

  const articleSchema = createArticleSchema({
    headline: content.title,
    description: content.summary,
    url: destinationUrl,
    image: destination.seo.image ?? destination.media.coverImage,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: page.schema.breadcrumbHome,
      url: homeUrl,
    },
    {
      name: page.schema.breadcrumbCurrent,
      url: destinationsUrl,
    },
    {
      name: content.title,
      url: destinationUrl,
    },
  ]);

  const metaItems = [
    {
      label: page.labels.country,
      value: page.labels.vietnam,
    },
    {
      label: page.labels.province,
      value: destination.location.province,
    },
    {
      label: page.labels.district,
      value: destination.location.district ?? page.labels.regionalDestination,
    },
    {
      label: page.labels.duration,
      value: content.recommendedDuration ?? page.labels.flexibleJourney,
    },
  ];

  return (
    <>
      <Script
        id={`destination-article-${currentLocale}-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Script
        id={`destination-breadcrumb-${currentLocale}-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#090806] text-[#F8F4EC]">
        <section className="relative border-b border-[#D6A84B]/15 py-14 sm:py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(214,168,75,0.13),transparent_42%)]"
          />

          <Container>
            <div className="relative">
              <Link
                href={`/${currentLocale}/destinations`}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#C9C0B2] transition hover:text-[#E9CC82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9CC82]"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                {page.backLabel}
              </Link>

              <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#D6A84B]/30 bg-[#D6A84B]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#E9CC82]">
                    <MapPin aria-hidden="true" className="size-4" />
                    {destination.location.province}
                  </span>

                  <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] text-[#F7F3EA] sm:text-6xl lg:text-7xl">
                    {content.title}
                  </h1>

                  <p className="mt-6 max-w-xl text-base leading-8 text-[#B8B0A2] sm:text-lg">
                    {content.summary}
                  </p>

                  <Link
                    href={`/${currentLocale}/booking`}
                    className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D6A84B] px-6 py-3 text-sm font-bold text-[#090806] transition hover:bg-[#E9CC82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3EA] focus-visible:ring-offset-4 focus-visible:ring-offset-[#090806]"
                  >
                    {page.bookingCta}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#D6A84B]/25 bg-[#15130F] shadow-[0_30px_90px_rgba(0,0,0,0.42)]">
                  <Image
                    src={destination.media.coverImage}
                    alt={content.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090806]/45 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-16">
          <Container>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metaItems.map((item, index) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-[#D6A84B]/18 bg-[#15130F] p-5"
                >
                  <div className="flex items-center gap-2 text-[#E9CC82]">
                    {index === 3 ? (
                      <CalendarDays aria-hidden="true" className="size-4" />
                    ) : (
                      <MapPin aria-hidden="true" className="size-4" />
                    )}
                    <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                      {item.label}
                    </p>
                  </div>
                  <p className="mt-3 text-base font-semibold text-[#F7F3EA]">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-[#D6A84B]/12 bg-[#15130F]/55 py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E9CC82]">
                {page.badge}
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#F7F3EA] sm:text-5xl">
                {page.labels.highlights}
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {content.highlights.map((highlight, index) => (
                <article
                  key={highlight.title}
                  className="rounded-[1.75rem] border border-[#D6A84B]/20 bg-[#090806] p-6 sm:p-7"
                >
                  <span className="font-[family-name:var(--font-display)] text-4xl font-semibold text-[#D6A84B]/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#F7F3EA]">
                    {highlight.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#B8B0A2]">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-[#D6A84B]/20 bg-[#1D1912] p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#F7F3EA]">
                {page.labels.bestFor}
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {content.bestFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#D6A84B]/25 bg-[#D6A84B]/7 px-4 py-2 text-sm text-[#E9CC82]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {gallery.length > 0 ? (
          <section className="py-16 sm:py-20 lg:py-24">
            <Container>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E9CC82]">
                    {content.title}
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#F7F3EA] sm:text-5xl">
                    {page.labels.gallery}
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {gallery.map((image, index) => (
                  <div
                    key={image}
                    className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-[#D6A84B]/20 bg-[#15130F]"
                  >
                    <Image
                      src={image}
                      alt={`${content.title} — ${page.labels.gallery} ${index + 1}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
            </Container>
          </section>
        ) : null}
      </main>
    </>
  );
}
