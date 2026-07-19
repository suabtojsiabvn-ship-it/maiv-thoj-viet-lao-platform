import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/content/seo";
import { ClinicalPartner } from "@/features/clinical-partner";
import { Coordinator } from "@/features/coordinator";
import { Founder } from "@/features/founder";
import { isSupportedLocale } from "@/lib/i18n-routing";

interface AboutPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);
  const about = dictionary.pages.about;

  return buildMetadata({
    title: about.seo.title,
    description: about.seo.description,
    canonical: `/${locale}/about`,
    locale,
  });
}

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  // Load dictionary to ensure this page uses the locale data.
  // The page-level heading/description can be consumed by child
  // components in a later sprint if they are migrated.
  await getDictionary(locale);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Founder />
      <Coordinator />
      <ClinicalPartner />
    </main>
  );
}