import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { anNhienDental } from "@/content/partners/an-nhien-dental";

import { ClinicalPartnerContent } from "./components/ClinicalPartnerContent";
import { ClinicalPartnerImage } from "./components/ClinicalPartnerImage";

export function ClinicalPartner() {
  return (
    <Section
      id="clinical-partner"
      spacing="xl"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <ClinicalPartnerImage
            src={anNhienDental.profileImage.src}
            alt={anNhienDental.profileImage.alt}
          />

          <ClinicalPartnerContent />
        </div>
      </Container>
    </Section>
  );
}