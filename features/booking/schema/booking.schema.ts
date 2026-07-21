import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your name."),

  country: z.string().min(2),

  preferredLanguage: z.string(),

  whatsapp: z.string().min(5),

  email: z.string().email(),

  treatment: z.string(),

  travelDate: z.string().optional(),

  message: z.string().max(1000).optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;