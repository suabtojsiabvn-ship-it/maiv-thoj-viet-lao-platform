import { notFound } from "next/navigation";

import { getDictionary } from "@/content/locales";
import { buildMetadata, getHomeSeo, getSeoKeywords } from "@/content/seo";

import { BeforeAfter } from "@/features/before-after";
import { Booking } from "@/features/booking";
import { ClinicalPartner } from "@/features/clinical-partner";
import { Coordinator } from "@/features/coordinator";
import { Founder } from "@/features/founder";
import { Explore } from "@/features/explore";
import { Hero } from "@/features/hero";
import { Journey } from "@/features/journey";
import { PatientJourney } from "@/features/patient-journey";
import { Treatments } from "@/features/treatments";
import { Trust } from "@/features/trust";
import { TrustRibbon } from "@/features/trust-ribbon";
import { Why } from "@/features/why";

import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);
  const currentLocale = locale as Locale;
  const homeSeo = getHomeSeo(currentLocale);

  return buildMetadata({
    title: homeSeo?.title ?? dictionary.common.tagline,
    description: homeSeo?.description ?? dictionary.hero.subtitle,
    canonical: `/${locale}`,
    keywords: getSeoKeywords(currentLocale, "home"),
    locale,
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <TrustRibbon />
      <Trust />
      <Why />
      <Founder />
      <Coordinator />
      <ClinicalPartner />
      <PatientJourney />
      <Treatments />
      <BeforeAfter />
      <Journey />
      <Explore locale={locale} />
      <Booking />
    </main>
  );
}
