import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";

import { TreatmentGrid } from "./TreatmentGrid";

export function Treatments() {
  return (
    <Section className="bg-slate-950">
      <Container>
        <SectionHeading
          badge="Featured Treatments"
          title="Advanced Dental Treatments"
          description="Discover premium dental solutions designed for international patients seeking lasting quality, natural aesthetics and personalized care."
        />

        <TreatmentGrid />
      </Container>
    </Section>
  );
}