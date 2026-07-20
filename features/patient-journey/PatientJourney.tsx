"use client";

import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  getPatientJourneyTimelineMeta,
} from "@/content/journey";
import { useDictionary } from "@/hooks/useDictionary";

import { TimelineItem } from "./components/TimelineItem";

export function PatientJourney() {
  const { patientJourney } = useDictionary();
  const stepsMeta = getPatientJourneyTimelineMeta();

  const steps = stepsMeta.map((step) => {
    const content =
      patientJourney.steps[step.dictionaryKey];

    return {
      ...step,
      stageLabel: content.stage,
      title: content.title,
      description: content.description,
      estimatedDuration:
        content.estimatedDuration,
    };
  });

  return (
    <Section
      id="patient-journey"
      className="border-b border-primary/10 bg-background"
      spacing="md"
    >
      <Container size="lg">
        <SectionHeading
          badge={patientJourney.badge}
          title={patientJourney.title}
          description={patientJourney.description}
          maxWidth="lg"
        />

        <ol className="mx-auto mt-10 max-w-4xl md:mt-14">
          {steps.map((step, index) => (
            <TimelineItem
              key={step.id}
              step={step}
              optionalLabel={
                patientJourney.optional
              }
              timingLabel={patientJourney.timing}
              isLast={
                index === steps.length - 1
              }
            />
          ))}
        </ol>
      </Container>
    </Section>
  );
}
