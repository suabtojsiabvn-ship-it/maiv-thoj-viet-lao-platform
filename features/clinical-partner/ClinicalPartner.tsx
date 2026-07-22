import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { anNhienDental } from "@/content/partners/an-nhien-dental";

import { ClinicalPartnerContent } from "./components/ClinicalPartnerContent";
import { ClinicalPartnerImage } from "./components/ClinicalPartnerImage";

export function ClinicalPartner() {
  return (
    <Section
      id="clinical-partner"
      spacing="md"
      className="overflow-clip border-b border-primary/15 bg-ivory text-ivory-foreground"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <ClinicalPartnerImage src={anNhienDental.profileImage.src} />

          <ClinicalPartnerContent />
        </div>
      </Container>
    </Section>
  );
}
