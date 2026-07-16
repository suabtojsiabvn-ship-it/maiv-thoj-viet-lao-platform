import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  getPatientJourneyTimeline,
} from "@/content/journey";

import { TimelineItem } from "./components/TimelineItem";

export function PatientJourney() {
  const steps = getPatientJourneyTimeline();

  return (
    <Section
      id="patient-journey"
      className="border-t border-white/10 bg-slate-950"
      spacing="xl"
    >
      <Container size="lg">
        <SectionHeading
          badge="Your Journey"
          title="From Your First Conversation to Returning Home"
          description="Understand how the Maiv Thoj Viet Lao team supports your consultation, travel, treatment coordination, recovery and follow-up journey in Vietnam."
          maxWidth="lg"
        />

        <ol className="mx-auto mt-16 max-w-4xl">
          {steps.map((step, index) => (
            <TimelineItem
              key={step.id}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </ol>
      </Container>
    </Section>
  );
}