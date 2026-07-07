export const environment = {
  isProduction: process.env.NODE_ENV === "production",
  resendConfigured: Boolean(process.env.RESEND_API_KEY),
  bookingEmailConfigured: Boolean(process.env.BOOKING_TO_EMAIL),
};