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
    <Section
      spacing="md"
      className="border-b border-primary/15 bg-ivory text-ivory-foreground"
    >
      <Container>
        <SectionHeading
          badge={treatments.sectionLabel}
          title={treatments.title}
          description={treatments.description}
          tone="light"
        />

        <TreatmentGrid />
      </Container>
    </Section>
  );
}
