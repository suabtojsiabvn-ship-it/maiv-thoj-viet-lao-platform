import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/content/seo";
import { Journey } from "@/features/journey";
import { isSupportedLocale } from "@/lib/i18n-routing";

interface JourneyPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: JourneyPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);
  const journey = dictionary.pages.journey;

  return buildMetadata({
    title: journey.seo.title,
    description: journey.seo.description,
    canonical: `/${locale}/journey`,
    locale,
  });
}

export default async function JourneyPage({
  params,
}: JourneyPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  await getDictionary(locale);

  return (
    <main className="min-h-screen bg-[#090806] text-[#F8F4EC]">
      <Journey />
    </main>
  );
}
