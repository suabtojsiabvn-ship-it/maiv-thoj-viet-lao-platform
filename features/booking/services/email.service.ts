import { Resend } from "resend";

import type { BookingFormValues } from "../schema/booking.schema";

interface BookingEmailResult {
  emailId: string;
}

function escapeHtml(value: string | undefined): string {
  if (!value) {
    return "";
  }

  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getRequiredEnvironmentVariable(
  name: "RESEND_API_KEY" | "BOOKING_TO_EMAIL",
): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(
      `Booking email configuration is missing: ${name}.`,
    );
  }

  return value;
}

export async function sendBookingEmail(
  booking: BookingFormValues,
): Promise<BookingEmailResult> {
  const resendApiKey =
    getRequiredEnvironmentVariable("RESEND_API_KEY");

  const bookingToEmail =
    getRequiredEnvironmentVariable("BOOKING_TO_EMAIL");

  const bookingFromEmail =
    process.env.BOOKING_FROM_EMAIL?.trim() ||
    "booking@maivthojvietlao.com";

  const resend = new Resend(resendApiKey);

  const fullName = escapeHtml(booking.fullName);
  const country = escapeHtml(booking.country);
  const preferredLanguage = escapeHtml(
    booking.preferredLanguage,
  );
  const whatsapp = escapeHtml(booking.whatsapp);
  const email = escapeHtml(booking.email);
  const treatment = escapeHtml(booking.treatment);
  const travelDate = escapeHtml(
    booking.travelDate || "Not provided",
  );
  const message = escapeHtml(
    booking.message || "No message provided.",
  );

  const { data, error } = await resend.emails.send({
    from: `Maiv Thoj Viet Lao <${bookingFromEmail}>`,
    to: [bookingToEmail],
    replyTo: booking.email,
    subject: `New booking request — ${booking.fullName}`,
    text: [
      "New Booking Request",
      "",
      `Name: ${booking.fullName}`,
      `Country: ${booking.country}`,
      `Preferred language: ${booking.preferredLanguage}`,
      `WhatsApp: ${booking.whatsapp}`,
      `Email: ${booking.email}`,
      `Treatment: ${booking.treatment}`,
      `Travel date: ${booking.travelDate || "Not provided"}`,
      "",
      "Message:",
      booking.message || "No message provided.",
    ].join("\n"),
    html: `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <title>New Booking Request</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 24px;
            background: #f1f5f9;
            color: #0f172a;
            font-family: Arial, Helvetica, sans-serif;
          "
        >
          <div
            style="
              max-width: 680px;
              margin: 0 auto;
              overflow: hidden;
              border: 1px solid #e2e8f0;
              border-radius: 20px;
              background: #ffffff;
            "
          >
            <div
              style="
                padding: 28px;
                background: #020617;
                color: #ffffff;
              "
            >
              <p
                style="
                  margin: 0 0 10px;
                  color: #22d3ee;
                  font-size: 12px;
                  font-weight: 700;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                "
              >
                Maiv Thoj Viet Lao
              </p>

              <h1
                style="
                  margin: 0;
                  font-size: 28px;
                  line-height: 1.3;
                "
              >
                New Booking Request
              </h1>
            </div>

            <div style="padding: 28px">
              <table
                role="presentation"
                style="
                  width: 100%;
                  border-collapse: collapse;
                "
              >
                <tbody>
                  <tr>
                    <td style="padding: 10px 0; font-weight: 700">
                      Full name
                    </td>
                    <td style="padding: 10px 0">
                      ${fullName}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 10px 0; font-weight: 700">
                      Country
                    </td>
                    <td style="padding: 10px 0">
                      ${country}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 10px 0; font-weight: 700">
                      Preferred language
                    </td>
                    <td style="padding: 10px 0">
                      ${preferredLanguage}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 10px 0; font-weight: 700">
                      WhatsApp
                    </td>
                    <td style="padding: 10px 0">
                      ${whatsapp}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 10px 0; font-weight: 700">
                      Email
                    </td>
                    <td style="padding: 10px 0">
                      ${email}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 10px 0; font-weight: 700">
                      Treatment
                    </td>
                    <td style="padding: 10px 0">
                      ${treatment}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 10px 0; font-weight: 700">
                      Travel date
                    </td>
                    <td style="padding: 10px 0">
                      ${travelDate}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div
                style="
                  margin-top: 24px;
                  padding: 20px;
                  border-radius: 14px;
                  background: #f8fafc;
                "
              >
                <p
                  style="
                    margin: 0 0 10px;
                    font-weight: 700;
                  "
                >
                  Message
                </p>

                <p
                  style="
                    margin: 0;
                    white-space: pre-wrap;
                    line-height: 1.7;
                  "
                >
                  ${message}
                </p>
              </div>

              <p
                style="
                  margin: 24px 0 0;
                  color: #64748b;
                  font-size: 13px;
                  line-height: 1.6;
                "
              >
                Reply directly to this email to contact the customer.
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
    tags: [
      {
        name: "source",
        value: "website_booking",
      },
    ],
  });

  if (error) {
    console.error("Resend booking email error:", {
      name: error.name,
      message: error.message,
    });

    throw new Error(
      `Unable to send booking email: ${error.message}`,
    );
  }

  if (!data?.id) {
    console.error(
      "Resend booking email returned no email ID.",
    );

    throw new Error(
      "Unable to confirm that the booking email was sent.",
    );
  }

  console.info("Booking email sent successfully.", {
    emailId: data.id,
  });

  return {
    emailId: data.id,
  };
}