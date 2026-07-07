import { Hero } from "@/features/hero";
import { Founder } from "@/features/founder";
import { PatientCoordinator } from "@/features/patient-coordinator";
import { ClinicalPartner } from "@/features/clinical-partner";
import { Treatments } from "@/features/treatments";
import { BeforeAfter } from "@/features/before-after";
import { Journey } from "@/features/journey";
import { Booking } from "@/features/booking";
import { Footer } from "@/features/footer";

export default function HomePage() {
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