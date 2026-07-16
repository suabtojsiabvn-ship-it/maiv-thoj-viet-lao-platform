import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { peopleMedia } from "@/content/media";

import { CoordinatorContent } from "./components/CoordinatorContent";
import { CoordinatorImage } from "./components/CoordinatorImage";

export function Coordinator() {
  return (
    <Section id="patient-coordinator" spacing="xl">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <CoordinatorImage
            src={peopleMedia.coordinator.profile}
            alt="A Sử (Txhim), International Patient Journey Manager"
          />

          <CoordinatorContent />
        </div>
      </Container>
    </Section>
  );
}