import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import {
  buildMetadata,
  createBreadcrumbSchema,
  createCollectionPageSchema,
  seo,
} from "@/content/seo";
import { getTreatmentsByLocale } from "@/content/treatments";
import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

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

  return buildMetadata({
    title: "Dental Treatments | Maiv Thoj Viet Lao",
    description:
      "Explore dental treatment options supported by Maiv Thoj Viet Lao Platform and trusted clinical partners in Vietnam.",
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

  const treatments = getTreatmentsByLocale(
    locale as Locale,
  );

  const pageUrl = new URL(
    `/${locale}/treatments`,
    seo.siteUrl,
  ).toString();

  const homeUrl = new URL(
    `/${locale}`,
    seo.siteUrl,
  ).toString();

  const collectionSchema =
    createCollectionPageSchema({
      name: "Dental Treatments",
      description:
        "Explore dental treatment options supported by Maiv Thoj Viet Lao Platform and trusted clinical partners in Vietnam.",
      url: pageUrl,
    });

  const breadcrumbSchema =
    createBreadcrumbSchema([
      {
        name: "Home",
        url: homeUrl,
      },
      {
        name: "Treatments",
        url: pageUrl,
      },
    ]);

  return (
    <>
      <Script
        id={`treatments-collection-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionSchema,
          ),
        }}
      />

      <Script
        id={`treatments-breadcrumb-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema,
          ),
        }}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Treatments
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Dental treatment options for your journey in Vietnam.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Explore treatment options supported by Maiv Thoj Viet Lao
              Platform and provided by trusted clinical partners in
              Vietnam.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {treatments.map((treatment) => (
                <article
                  key={treatment.slug}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h2 className="text-2xl font-semibold text-white">
                    {treatment.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-300">
                    {treatment.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}