import type { BookingFormValues } from "../schema/booking.schema";

import { sendBookingEmail } from "./email.service";

export async function processBooking(booking: BookingFormValues) {
  await sendBookingEmail(booking);

  return {
    success: true,
    message: "Booking request received successfully.",
  };
}