"use client";

import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";

import { useTreatments } from "../hooks/useTreatments";
import { TreatmentGrid } from "./TreatmentGrid";

export function Treatments() {
  const { treatments } = useTreatments();

  return (
    <Section className="bg-slate-950">
      <Container>
        <SectionHeading
          badge={treatments.sectionLabel}
          title={treatments.title}
          description={treatments.description}
        />

        <TreatmentGrid />
      </Container>
    </Section>
  );
}