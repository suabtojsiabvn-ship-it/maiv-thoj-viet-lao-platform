"use client";

import { useBooking } from "../hooks/useBooking";

import { BookingBenefits } from "./BookingBenefits";
import { BookingForm } from "./BookingForm";

export function BookingContent() {
  const { booking } = useBooking();

  return (
    <div>
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d6a84b] sm:text-sm">
          {booking.badge}
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#f8f4ec] sm:text-4xl lg:text-5xl">
          {booking.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#b8b0a2] sm:text-lg">
          {booking.intro}
        </p>
      </header>

      <div className="mt-10 grid items-start gap-8 sm:mt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <BookingBenefits />

        <BookingForm />
      </div>
    </div>
  );
}
