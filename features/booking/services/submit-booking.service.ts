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

interface SubmitBookingMessages {
  invalidResponse: string;
  requestFailed: string;
}

export async function submitBooking(
  data: BookingFormValues,
  messages: SubmitBookingMessages,
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
    throw new Error(messages.invalidResponse);
  }

  if (!response.ok || !result.success) {
    throw new Error(messages.requestFailed);
  }

  return result;
}
