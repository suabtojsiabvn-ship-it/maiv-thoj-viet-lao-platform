import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { BookingContent } from "./components/BookingContent";

export function Booking() {
  return (
    <Section id="booking" spacing="xl">
      <Container>
        <BookingContent />
      </Container>
    </Section>
  );
}