"use client";

import { SectionHeader } from "@/components/shared";

import { useBooking } from "../hooks/useBooking";

import { BookingBenefits } from "./BookingBenefits";
import { BookingForm } from "./BookingForm";

export function BookingContent() {
  const { booking } = useBooking();

  return (
    <>
      <SectionHeader
        badge={booking.badge}
        title={booking.heading}
        description={booking.intro}
        align="center"
      />

      <div className="mt-16 grid gap-16 lg:grid-cols-2">
        <BookingBenefits />

        <BookingForm />
      </div>
    </>
  );
}