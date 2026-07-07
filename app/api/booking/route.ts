import { NextResponse } from "next/server";

import { bookingSchema } from "@/features/booking/schema/booking.schema";
import { processBooking } from "@/features/booking/services/booking.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = bookingSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid booking data.",
          errors: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const response = await processBooking(result.data);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Booking API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}