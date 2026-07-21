import { z } from "zod";

export interface BookingValidationMessages {
  fullName: string;
  country: string;
  whatsapp: string;
  email: string;
}

const defaultValidationMessages: BookingValidationMessages = {
  fullName: "Please enter your name.",
  country: "Please enter your country or region.",
  whatsapp: "Please enter a valid WhatsApp or phone number.",
  email: "Please enter a valid email address.",
};

export function createBookingSchema(messages: BookingValidationMessages) {
  return z.object({
    fullName: z.string().trim().min(2, messages.fullName),

    country: z.string().trim().min(2, messages.country),

    preferredLanguage: z.string(),

    whatsapp: z.string().trim().min(5, messages.whatsapp),

    email: z.string().trim().email(messages.email),

    treatment: z.string(),

    travelDate: z.string().optional(),

    message: z.string().max(1000).optional(),
  });
}

export const bookingSchema = createBookingSchema(defaultValidationMessages);

export type BookingFormValues = z.infer<typeof bookingSchema>;
