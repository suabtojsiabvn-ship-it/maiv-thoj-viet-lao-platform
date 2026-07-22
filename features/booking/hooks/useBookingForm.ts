import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createBookingSchema,
  type BookingFormValues,
} from "../schema/booking.schema";
import type {
  BookingLanguageKey,
  BookingValidationMessages,
} from "../types/booking.types";

export function useBookingForm(
  validation: BookingValidationMessages,
  defaultLanguage: BookingLanguageKey,
) {
  const schema = useMemo(() => createBookingSchema(validation), [validation]);

  return useForm<BookingFormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    reValidateMode: "onChange",

    defaultValues: {
      fullName: "",
      country: "",
      preferredLanguage: defaultLanguage,
      whatsapp: "",
      email: "",
      treatment: "",
      travelDate: "",
      message: "",
    },
  });
}
