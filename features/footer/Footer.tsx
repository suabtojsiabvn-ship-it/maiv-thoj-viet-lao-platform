import { Container } from "@/components/ui/container";

import { FooterBottom } from "./components/FooterBottom";
import { FooterBrand } from "./components/FooterBrand";
import { FooterContact } from "./components/FooterContact";
import { FooterNavigation } from "./components/FooterNavigation";
import { FooterServices } from "./components/FooterServices";
import { FooterSocial } from "./components/FooterSocial";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
          <FooterBrand />
          <FooterNavigation />
          <FooterServices />
          <FooterContact />
          <FooterSocial />
        </div>

        <FooterBottom />
      </Container>
    </footer>
  );
}