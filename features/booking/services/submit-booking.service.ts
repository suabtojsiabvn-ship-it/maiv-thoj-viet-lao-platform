import type { BookingFormValues } from "../schema/booking.schema";

interface SubmitBookingSuccessResponse {
  success: true;
  message: string;
  emailId: string;
}

interface SubmitBookingErrorResponse {
  success: false;
  message?: string;
}

export async function submitBooking(
  data: BookingFormValues,
): Promise<SubmitBookingSuccessResponse> {
  const response = await fetch("/api/booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let result: SubmitBookingSuccessResponse | SubmitBookingErrorResponse;

  try {
    result = await response.json();
  } catch {
    throw new Error(
      "The server returned an invalid response. Please try again.",
    );
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to submit the booking request.");
  }

  return result;
}