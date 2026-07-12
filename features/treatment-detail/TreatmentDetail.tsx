import type { TreatmentContent } from "@/content/treatments";

import {
  Hero,
  HeroHeader,
  HeroMedia,
} from "./components/Hero";
import { Overview } from "./components/Overview";

import { Benefits } from "./components/Benefits";
import { Candidates } from "./components/Candidates";
import { Procedure } from "./components/Procedure";

interface TreatmentDetailProps {
  treatment: TreatmentContent;
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

      <Overview overview={treatment.overview} />
        <Benefits
        benefits={treatment.benefits}
      />
      <Candidates
           candidates={treatment.candidates}
          />
          <Procedure
            procedure={treatment.procedure}
      />

    </>
  );
}