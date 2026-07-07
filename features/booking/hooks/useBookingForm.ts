import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  bookingSchema,
  BookingFormValues,
} from "../schema/booking.schema";

export function useBookingForm() {
  return useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),

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