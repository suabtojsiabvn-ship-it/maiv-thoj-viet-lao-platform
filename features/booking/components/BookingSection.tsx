import { Container, Section } from "@/components/ui";

import { BookingContent } from "./BookingContent";

export function Booking() {
  return (
    <Section
      id="booking"
      spacing="xl"
      className="bg-slate-950"
    >
      <Container>
        <BookingContent />
      </Container>
    </Section>
  );
}