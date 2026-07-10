import { notFound } from "next/navigation";

import { BeforeAfter } from "@/features/before-after";
import { Booking } from "@/features/booking";
import { ClinicalPartner } from "@/features/clinical-partner";
import { Coordinator } from "@/features/coordinator";
import { Destinations } from "@/features/destinations";
import { FAQ } from "@/features/faq";
import { FloatingContact } from "@/features/floating-contact";
import { Footer } from "@/features/footer";
import { Founder } from "@/features/founder";
import { Hero } from "@/features/hero";
import { Journey } from "@/features/journey";
import { PatientStories } from "@/features/patient-stories";
import { Treatments } from "@/features/treatments";
import { TravelGuide } from "@/features/travel-guide";
import { TrustRibbon } from "@/features/trust-ribbon";
import { Why } from "@/features/why";
import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden bg-slate-950 text-white">
      <Hero />

      <Why />

      <TrustRibbon />

      <Founder />

      <Coordinator />

      <ClinicalPartner />

      <Treatments />

      <BeforeAfter />

      <PatientStories />

      <Journey />

      <TravelGuide locale={locale as Locale} />

      <Destinations locale={locale as Locale} />

      <Booking />

      <FAQ />

      <Footer />

      <FloatingContact />
    </main>
  );
}