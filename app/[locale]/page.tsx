import { notFound } from "next/navigation";

import { BeforeAfter } from "@/features/before-after";
import { Booking } from "@/features/booking";
import { ClinicalPartner } from "@/features/clinical-partner";
import { FloatingContact } from "@/features/floating-contact";
import { Footer } from "@/features/footer";
import { Hero } from "@/features/hero";
import { Why } from "@/features/why";
import { Founder } from "@/features/founder";
import { Coordinator  } from "@/features/coordinator";
import { Journey } from "@/features/journey";
import { Treatments } from "@/features/treatments";
import { TrustRibbon } from "@/features/trust-ribbon";
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
<Why />
<TrustRibbon />

<Founder />

<Coordinator  />

<ClinicalPartner />

<Treatments />

<BeforeAfter />

<Journey />
<Booking />

<Footer />

<FloatingContact />
    </main>
  );
}