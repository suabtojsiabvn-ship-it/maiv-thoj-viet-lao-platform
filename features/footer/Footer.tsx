import { Container } from "@/components/ui/container";

import { FooterBottom } from "./components/FooterBottom";
import { FooterBrand } from "./components/FooterBrand";
import { FooterContact } from "./components/FooterContact";
import { FooterNavigation } from "./components/FooterNavigation";
import { FooterServices } from "./components/FooterServices";
import { FooterSocial } from "./components/FooterSocial";

export function Footer() {
  return (
    <footer className="border-t border-[#D6A84B]/25 bg-[#090806] text-[#F8F4EC]">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-4">
            <FooterBrand />
          </div>

          <div className="lg:col-span-2">
            <FooterNavigation />
          </div>

          <div className="lg:col-span-2">
            <FooterServices />
          </div>

          <div className="lg:col-span-2">
            <FooterContact />
          </div>

          <div className="lg:col-span-2">
            <FooterSocial />
          </div>
        </div>

        <FooterBottom />
      </Container>
    </footer>
  );
}
