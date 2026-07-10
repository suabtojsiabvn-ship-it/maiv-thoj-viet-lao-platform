"use client";

import { Button } from "@/components/ui/button";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";

import { usePatientStories } from "../hooks/usePatientStories";
import { PatientStoryGrid } from "./PatientStoryGrid";

export function PatientStoriesSection() {
  const { section, stories } = usePatientStories();

  return (
    <Section
      id="patient-stories"
      spacing="xl"
      className="bg-slate-950"
    >
      <Container>
        <SectionHeading
          badge={section.sectionLabel}
          title={section.title}
          description={section.description}
          maxWidth="lg"
        />

        <PatientStoryGrid
          stories={stories}
          labels={section.labels}
        />

        <div className="mt-16 flex justify-center">
          <Button
            size="lg"
            variant="outline"
            aria-label={section.cta.label}
          >
            {section.cta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}