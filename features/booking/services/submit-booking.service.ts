import type { BookingFormValues } from "../schema/booking.schema";

export async function submitBooking(data: BookingFormValues) {
  const response = await fetch("/api/booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.message ?? "Failed to submit booking.");
  }

  return result;
}