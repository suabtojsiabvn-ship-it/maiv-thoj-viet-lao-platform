import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createBookingSchema,
  BookingFormValues,
  type BookingValidationMessages,
} from "../schema/booking.schema";

export function useBookingForm(validationMessages: BookingValidationMessages) {
  return useForm<BookingFormValues>({
    resolver: zodResolver(createBookingSchema(validationMessages)),

    defaultValues: {
      fullName: "",
      country: "",
      preferredLanguage: "en",
      whatsapp: "",
      email: "",
      treatment: "",
      travelDate: "",
      message: "",
    },
  });
}
