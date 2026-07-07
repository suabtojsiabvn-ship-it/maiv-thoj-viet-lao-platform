import { SectionHeader } from "@/components/shared";

import { bookingContent } from "../data/booking-content";

import { BookingBenefits } from "./BookingBenefits";
import { BookingForm } from "./BookingForm";

export function BookingContent() {
  return (
    <>
      <SectionHeader
        badge={bookingContent.badge}
        title={bookingContent.heading}
        description={bookingContent.intro}
        align="center"
      />

      <div className="mt-16 grid gap-16 lg:grid-cols-2">
        <BookingBenefits />

        <BookingForm />
      </div>
    </>
  );
}