import type { BookingFormValues } from "../schema/booking.schema";

import { sendBookingEmail } from "./email.service";

export interface ProcessBookingResult {
  success: true;
  message: string;
  emailId: string;
}

export async function processBooking(
  booking: BookingFormValues,
): Promise<ProcessBookingResult> {
  const emailResult = await sendBookingEmail(booking);

  return {
    success: true,
    message: "Booking request received successfully.",
    emailId: emailResult.emailId,
  };
}