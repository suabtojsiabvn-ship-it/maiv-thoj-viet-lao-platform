import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";

import { BeforeAfterGrid } from "./BeforeAfterGrid";

export function BeforeAfter() {
  return (
    <Section className="bg-slate-950">
      <Container>
        <SectionHeading
          badge="Real Patient Results"
          title="Before & After Transformations"
          description="Every smile tells a story. Explore real treatment results achieved with personalized care and premium dental materials."
        />

        <BeforeAfterGrid />
      </Container>
    </Section>
  );
}