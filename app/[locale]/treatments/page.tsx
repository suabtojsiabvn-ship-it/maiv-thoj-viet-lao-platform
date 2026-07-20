import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import { getDictionary } from "@/content/locales";
import {
  buildMetadata,
  createBreadcrumbSchema,
  createCollectionPageSchema,
  seo,
} from "@/content/seo";
import { getTreatmentSlugs } from "@/content/treatments";
import { isSupportedLocale } from "@/lib/i18n-routing";

interface TreatmentsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: TreatmentsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);
  const treatmentsPage = dictionary.pages.treatments;

  return buildMetadata({
    title: treatmentsPage.seo.title,
    description: treatmentsPage.seo.description,
    canonical: `/${locale}/treatments`,
    locale,
  });
}

export default async function TreatmentsPage({
  params,
}: TreatmentsPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const treatmentsPage = dictionary.pages.treatments;

  const treatments = getTreatmentSlugs().map((slug) => ({
    slug,
    title: dictionary.treatments.items[slug].title,
    summary: dictionary.treatments.items[slug].description,
  }));

  const pageUrl = new URL(
    `/${locale}/treatments`,
    seo.siteUrl,
  ).toString();

  const homeUrl = new URL(
    `/${locale}`,
    seo.siteUrl,
  ).toString();

  const collectionSchema = createCollectionPageSchema({
    name: treatmentsPage.schema.collectionName,
    description: treatmentsPage.seo.description,
    url: pageUrl,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: treatmentsPage.schema.breadcrumbHome,
      url: homeUrl,
    },
    {
      name: treatmentsPage.schema.breadcrumbCurrent,
      url: pageUrl,
    },
  ]);

  return (
    <>
      <Script
        id={`treatments-collection-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <Script
        id={`treatments-breadcrumb-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen bg-ivory text-ivory-foreground">
        <section className="px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#765817] md:tracking-[0.25em]">
              {treatmentsPage.badge}
            </p>

            <h1 className="mt-4 max-w-4xl text-balance font-heading text-3xl font-bold tracking-tight text-ivory-foreground md:text-5xl lg:text-6xl">
              {treatmentsPage.heading}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-[#665f54] md:mt-6 md:text-lg md:leading-8">
              {treatmentsPage.description}
            </p>

            {treatments.length > 0 ? (
              <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
                {treatments.map((treatment) => (
                  <article
                    key={treatment.slug}
                    className="flex h-full flex-col rounded-3xl border border-primary/15 bg-white/70 p-5 shadow-sm shadow-black/5 transition hover:border-primary/40 hover:bg-white md:p-6"
                  >
                    <h2 className="font-heading text-xl font-semibold text-ivory-foreground md:text-2xl">
                      {treatment.title}
                    </h2>

                    <p className="mt-3 flex-1 leading-7 text-[#665f54] md:mt-4">
                      {treatment.summary}
                    </p>

                    <Link
                      href={`/${locale}/treatments/${treatment.slug}`}
                      className="mt-5 inline-flex font-semibold text-[#765817] transition-colors hover:text-[#4f3a0f]"
                    >
                      {dictionary.treatments.cta.learnMore}
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-3xl border border-primary/15 bg-white/70 p-6 md:mt-12 md:p-8">
                <h2 className="font-heading text-2xl font-semibold text-ivory-foreground">
                  {treatmentsPage.emptyState.heading}
                </h2>

                <p className="mt-4 leading-7 text-[#665f54]">
                  {treatmentsPage.emptyState.description}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
