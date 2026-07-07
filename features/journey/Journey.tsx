import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { JourneyContent } from "./components/JourneyContent";

export function Journey() {
  return (
    <Section
      id="journey"
      spacing="xl"
    >
      <Container>
        <JourneyContent />
      </Container>
    </Section>
  );
}