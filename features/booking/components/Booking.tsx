"use client";

import { bookingContent } from "../data/booking-content";
import { useBookingForm } from "../hooks/useBookingForm";

export function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useBookingForm();

  const onSubmit = handleSubmit(async (values) => {
    console.log("Booking request:", values);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/10 bg-white/5 p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-white">
            Full Name
          </label>
          <input
            {...register("fullName")}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            placeholder="Your name"
          />
          {errors.fullName && (
            <p className="mt-2 text-sm text-red-400">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-white">
            Country
          </label>
          <input
            {...register("country")}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            placeholder="Your country"
          />
          {errors.country && (
            <p className="mt-2 text-sm text-red-400">
              {errors.country.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-white">
            Preferred Language
          </label>
          <select
            {...register("preferredLanguage")}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          >
            {bookingContent.languages.map((language) => (
              <option
                key={language.value}
                value={language.value}
              >
                {language.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-white">
            WhatsApp
          </label>
          <input
            {...register("whatsapp")}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            placeholder="+84..."
          />
          {errors.whatsapp && (
            <p className="mt-2 text-sm text-red-400">
              {errors.whatsapp.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-white">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-white">
            Treatment
          </label>
          <select
            {...register("treatment")}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          >
            <option value="">Select treatment</option>
            {bookingContent.treatments.map((treatment) => (
              <option
                key={treatment.value}
                value={treatment.value}
              >
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
        <label className="text-sm font-medium text-white">
          Preferred Travel Date
        </label>
        <input
          {...register("travelDate")}
          type="date"
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
        />
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-white">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          placeholder="Tell us about your dental needs..."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full rounded-xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting
          ? "Sending..."
          : bookingContent.cta.submit}
      </button>

      <p className="mt-4 text-center text-sm leading-6 text-slate-400">
        {bookingContent.cta.privacy}
      </p>
    </form>
  );
}