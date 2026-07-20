import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { peopleMedia } from "@/content/media";

import { CoordinatorContent } from "./components/CoordinatorContent";
import { CoordinatorImage } from "./components/CoordinatorImage";

export function Coordinator() {
  return (
    <Section
      id="patient-coordinator"
      spacing="md"
      className="overflow-hidden border-b border-primary/10 bg-background"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <CoordinatorImage
            src={peopleMedia.coordinator.profile}
          />

          <CoordinatorContent />
        </div>
      </Container>
    </Section>
  );
}
