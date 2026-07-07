import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { founder } from "@/content/people/founder";

import { FounderContent } from "./components/FounderContent";
import { FounderImage } from "./components/FounderImage";

export function Founder() {
  return (
    <Section
      id="founder"
      spacing="xl"
      className="bg-slate-950"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Image */}
          <FounderImage
  src={founder.profileImage.src}
  alt={founder.profileImage.alt}
/>

          {/* Content */}
          <FounderContent />
        </div>
      </Container>
    </Section>
  );
}