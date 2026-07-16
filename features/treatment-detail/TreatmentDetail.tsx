import type { TreatmentContent as TreatmentContentType } from "@/content/treatments";
import { TreatmentJourney } from "@/features/treatment-journey";

import {
  Hero,
  HeroHeader,
  HeroMedia,
} from "./components/Hero";
import { TreatmentContent } from "./TreatmentContent";

interface TreatmentDetailProps {
  treatment: TreatmentContentType;
}

export function TreatmentDetail({
  treatment,
}: TreatmentDetailProps) {
  return (
    <>
      <Hero>
        <HeroHeader hero={treatment.hero} />

        <HeroMedia
          media={treatment.media}
          title={treatment.title}
        />
      </Hero>

      <TreatmentContent treatment={treatment} />

      <TreatmentJourney
        locale={treatment.locale}
        treatmentSlug={treatment.slug}
      />
    </>
  );
}