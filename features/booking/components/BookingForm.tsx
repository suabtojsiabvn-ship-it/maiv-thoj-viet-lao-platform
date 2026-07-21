"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import { useBooking } from "../hooks/useBooking";
import { useBookingForm } from "../hooks/useBookingForm";
import { submitBooking } from "../services/submit-booking.service";

import { BookingSuccess } from "./BookingSuccess";

export function BookingForm() {
  const { booking } = useBooking();
  const { fields } = booking;

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useBookingForm(booking.validation);

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);

    try {
      await submitBooking(values, booking.feedback);
      reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : booking.feedback.requestFailed,
      );
    }
  });

  if (submitted) {
    return (
      <BookingSuccess
        title={booking.feedback.successTitle}
        description={booking.feedback.successDescription}
      />
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] border border-[#d6a84b]/20 bg-[#15130f] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.3)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-[#f8f4ec]">
            {fields.fullName}
          </label>

          <input
            {...register("fullName")}
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-[#d6a84b]/20 bg-[#090806] px-4 py-3 text-[#f8f4ec] outline-none transition placeholder:text-[#756f65] focus:border-[#d6a84b] focus:ring-2 focus:ring-[#d6a84b]/15"
            placeholder={fields.fullNamePlaceholder}
          />

          {errors.fullName && (
            <p className="mt-2 text-sm text-red-400">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-[#f8f4ec]">
            {fields.country}
          </label>

          <input
            {...register("country")}
            autoComplete="country-name"
            className="mt-2 w-full rounded-xl border border-[#d6a84b]/20 bg-[#090806] px-4 py-3 text-[#f8f4ec] outline-none transition placeholder:text-[#756f65] focus:border-[#d6a84b] focus:ring-2 focus:ring-[#d6a84b]/15"
            placeholder={fields.countryPlaceholder}
          />

          {errors.country && (
            <p className="mt-2 text-sm text-red-400">
              {errors.country.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-[#f8f4ec]">
            {fields.preferredLanguage}
          </label>

          <select
            {...register("preferredLanguage")}
            className="mt-2 w-full rounded-xl border border-[#d6a84b]/20 bg-[#090806] px-4 py-3 text-[#f8f4ec] outline-none transition focus:border-[#d6a84b] focus:ring-2 focus:ring-[#d6a84b]/15"
          >
            {booking.languages.map((language) => (
              <option key={language.value} value={language.value}>
                {language.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-[#f8f4ec]">
            {fields.whatsapp}
          </label>

          <input
            {...register("whatsapp")}
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-[#d6a84b]/20 bg-[#090806] px-4 py-3 text-[#f8f4ec] outline-none transition placeholder:text-[#756f65] focus:border-[#d6a84b] focus:ring-2 focus:ring-[#d6a84b]/15"
            placeholder={fields.whatsappPlaceholder}
          />

          {errors.whatsapp && (
            <p className="mt-2 text-sm text-red-400">
              {errors.whatsapp.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-[#f8f4ec]">
            {fields.email}
          </label>

          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-[#d6a84b]/20 bg-[#090806] px-4 py-3 text-[#f8f4ec] outline-none transition placeholder:text-[#756f65] focus:border-[#d6a84b] focus:ring-2 focus:ring-[#d6a84b]/15"
            placeholder={fields.emailPlaceholder}
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-[#f8f4ec]">
            {fields.treatment}
          </label>

          <select
            {...register("treatment")}
            className="mt-2 w-full rounded-xl border border-[#d6a84b]/20 bg-[#090806] px-4 py-3 text-[#f8f4ec] outline-none transition focus:border-[#d6a84b] focus:ring-2 focus:ring-[#d6a84b]/15"
          >
            <option value="">{fields.selectTreatment}</option>

            {booking.treatments.map((treatment) => (
              <option key={treatment.value} value={treatment.value}>
                {treatment.label}
              </option>
            ))}
          </select>

          {errors.treatment && (
            <p className="mt-2 text-sm text-red-400">
              {errors.treatment.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-[#f8f4ec]">
          {fields.travelDate}
        </label>

        <input
          {...register("travelDate")}
          type="date"
          className="mt-2 w-full rounded-xl border border-[#d6a84b]/20 bg-[#090806] px-4 py-3 text-[#f8f4ec] outline-none transition focus:border-[#d6a84b] focus:ring-2 focus:ring-[#d6a84b]/15"
        />
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-[#f8f4ec]">
          {fields.message}
        </label>

        <textarea
          {...register("message")}
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-[#d6a84b]/20 bg-[#090806] px-4 py-3 text-[#f8f4ec] outline-none transition placeholder:text-[#756f65] focus:border-[#d6a84b] focus:ring-2 focus:ring-[#d6a84b]/15"
          placeholder={fields.messagePlaceholder}
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      {submitError && (
        <p className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#d6a84b] px-7 py-4 text-sm font-semibold text-[#090806] shadow-[0_12px_30px_rgba(214,168,75,0.18)] transition hover:bg-[#e9cc82] focus:outline-none focus:ring-2 focus:ring-[#e9cc82] focus:ring-offset-2 focus:ring-offset-[#15130f] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {booking.cta.submitting}
          </>
        ) : (
          booking.cta.submit
        )}
      </button>

      <p className="mt-4 text-center text-sm leading-6 text-[#948c7f]">
        {booking.cta.privacy}
      </p>
    </form>
  );
}
