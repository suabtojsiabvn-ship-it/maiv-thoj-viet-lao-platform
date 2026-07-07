import { Button } from "@/components/ui/button";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";

import { PatientStoryGrid } from "./PatientStoryGrid";

export function PatientStories() {
  return (
    <Section className="bg-slate-950">
      <Container>
        <SectionHeading
          badge="Real Smile Journeys"
          title="Every Smile Has a Story"
          description="Discover real experiences from international patients who trusted Smile Journey Vietnam for their new smile."
        />

        <PatientStoryGrid />

        <div className="mt-16 flex justify-center">
          <Button
            size="lg"
            variant="outline"
            aria-label="View more patient stories"
          >
            View More Stories
          </Button>
        </div>
      </Container>
    </Section>
  );
}