import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { coordinator } from "@/content/people/coordinator";

import { CoordinatorContent } from "./components/CoordinatorContent";
import { CoordinatorImage } from "./components/CoordinatorImage";

export function PatientCoordinator() {
  return (
    <Section
      id="patient-coordinator"
      spacing="xl"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <CoordinatorImage
  src={coordinator.profileImage.src}
  alt={coordinator.profileImage.alt}
/>

          <CoordinatorContent />
        </div>
      </Container>
    </Section>
  );
}