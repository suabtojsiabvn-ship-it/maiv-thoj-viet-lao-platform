import { z } from "zod";

import type { BookingValidationMessages } from "../types/booking.types";

const defaultValidationMessages: BookingValidationMessages = {
  fullName: "Please enter your name.",
  country: "Please enter your country or region.",
  whatsapp: "Please enter a valid WhatsApp or phone number.",
  email: "Please enter a valid email address.",
  treatment: "Please select a treatment or consultation option.",
  message: "Please keep your message under 1,000 characters.",
};

export function createBookingSchema(messages: BookingValidationMessages) {
  return z.object({
    fullName: z.string().trim().min(2, messages.fullName),

    country: z.string().trim().min(2, messages.country),

    preferredLanguage: z.string().min(1),

    whatsapp: z.string().trim().min(5, messages.whatsapp),

    email: z.string().trim().email(messages.email),

    treatment: z.string().min(1, messages.treatment),

    travelDate: z.string().optional(),

    message: z.string().trim().max(1000, messages.message).optional(),
  });
}

export const bookingSchema = createBookingSchema(defaultValidationMessages);

export type BookingFormValues = z.infer<typeof bookingSchema>;
