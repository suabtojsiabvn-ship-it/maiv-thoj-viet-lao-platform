import { Resend } from "resend";

import type { BookingFormValues } from "../schema/booking.schema";

const resendApiKey = process.env.RESEND_API_KEY;
const bookingToEmail = process.env.BOOKING_TO_EMAIL;

export async function sendBookingEmail(booking: BookingFormValues) {
  if (!resendApiKey || !bookingToEmail) {
    console.warn("Missing RESEND_API_KEY or BOOKING_TO_EMAIL.");
    return;
  }

  const resend = new Resend(resendApiKey);

  await resend.emails.send({
    from: "An Nhien Dental <onboarding@resend.dev>",
    to: bookingToEmail,
    subject: `New Booking Request - ${booking.fullName}`,
    html: `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${booking.fullName}</p>
      <p><strong>Country:</strong> ${booking.country}</p>
      <p><strong>Language:</strong> ${booking.preferredLanguage}</p>
      <p><strong>WhatsApp:</strong> ${booking.whatsapp}</p>
      <p><strong>Email:</strong> ${booking.email}</p>
      <p><strong>Treatment:</strong> ${booking.treatment}</p>
      <p><strong>Travel Date:</strong> ${booking.travelDate || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${booking.message || "No message"}</p>
    `,
  });
}