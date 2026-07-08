"use client";

import { useDictionary } from "@/hooks/useDictionary";

import {
  bookingBenefitsMeta,
  bookingLanguageValues,
  bookingTreatmentValues,
} from "../data/booking-content";
import type {
  BookingBenefit,
  BookingContentData,
  BookingOption,
} from "../types/booking.types";

export function useBooking() {
  const { booking } = useDictionary();

  const benefits: BookingBenefit[] = bookingBenefitsMeta.map((meta) => ({
    id: meta.id,
    icon: meta.icon,
    title: booking.benefits[meta.id].title,
    description: booking.benefits[meta.id].description,
  }));

  const treatments: BookingOption[] = bookingTreatmentValues.map(
    (value) => ({
      value,
      label: booking.treatments[value],
    })
  );

  const languages: BookingOption[] = bookingLanguageValues.map((value) => ({
    value,
    label: booking.languages[value],
  }));

  const content: BookingContentData = {
    badge: booking.badge,
    heading: booking.heading,
    intro: booking.intro,
    benefits,
    fields: booking.fields,
    treatments,
    languages,
    cta: booking.cta,
  };

  return {
    booking: content,
  };
}