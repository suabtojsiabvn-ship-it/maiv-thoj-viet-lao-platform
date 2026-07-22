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

interface SubmitBookingFeedback {
  invalidResponse: string;
  requestFailed: string;
}

export async function submitBooking(
  data: BookingFormValues,
  feedback: SubmitBookingFeedback,
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
    throw new Error(feedback.invalidResponse);
  }

  if (!response.ok || !result.success) {
    throw new Error(feedback.requestFailed);
  }

  return result;
}
