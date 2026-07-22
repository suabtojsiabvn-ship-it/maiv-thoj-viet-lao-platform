import { NextResponse } from "next/server";

import { bookingSchema } from "@/features/booking/schema/booking.schema";
import { processBooking } from "@/features/booking/services/booking.service";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request format. Expected JSON data.",
        },
        {
          status: 415,
        },
      );
    }

    const body: unknown = await request.json();

    const validationResult = bookingSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the booking information and try again.",
          errors: validationResult.error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    const result = await processBooking(validationResult.data);

    return NextResponse.json(result, {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Booking API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit the booking request.",
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }
}
