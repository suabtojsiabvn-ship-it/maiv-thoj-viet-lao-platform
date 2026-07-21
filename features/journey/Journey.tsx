import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { JourneyContent } from "./components/JourneyContent";

export function Journey() {
  return (
    <Section
      id="journey"
      spacing="lg"
      className="overflow-hidden bg-[#090806] text-[#F8F4EC]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(214,168,75,0.12),transparent_68%)]"
      />

      <Container>
        <JourneyContent />
      </Container>
    </Section>
  );
}
