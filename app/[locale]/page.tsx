import { notFound } from "next/navigation";

import { BeforeAfter } from "@/features/before-after";
import { Booking } from "@/features/booking";
import { ClinicalPartner } from "@/features/clinical-partner";
import { Footer } from "@/features/footer";
import { Founder } from "@/features/founder";
import { Hero } from "@/features/hero";
import { Journey } from "@/features/journey";
import { PatientCoordinator } from "@/features/patient-coordinator";
import { Treatments } from "@/features/treatments";
import { isSupportedLocale } from "@/lib/i18n-routing";

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

      <Founder />

      <PatientCoordinator />

      <ClinicalPartner />

      <Treatments />

      <BeforeAfter />

      <Journey />

      <Booking />

      <Footer />
    </main>
  );
}