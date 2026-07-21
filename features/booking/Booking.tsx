import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { BookingContent } from "./components/BookingContent";

export function Booking() {
  return (
    <Section
      id="booking"
      spacing="xl"
      className="relative overflow-hidden bg-[#090806]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6a84b]/50 to-transparent"
      />
      <Container>
        <BookingContent />
      </Container>
    </Section>
  );
}
