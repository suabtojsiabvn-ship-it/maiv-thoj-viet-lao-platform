"use client";

import { Cookie } from "lucide-react";

import { useDictionary } from "@/hooks/useDictionary";

interface CookieConsentProps {
  open: boolean;
  onAccept: () => void;
  onOpen: () => void;
  onReject: () => void;
}

export function CookieConsent({
  open,
  onAccept,
  onOpen,
  onReject,
}: CookieConsentProps) {
  const { cookieConsent } = useDictionary();

  if (!open) {
    return (
      <button
        type="button"
        onClick={onOpen}
        aria-label={cookieConsent.settings}
        title={cookieConsent.settings}
        className="fixed bottom-4 left-4 z-[70] inline-flex size-11 items-center justify-center rounded-full border border-[#d6a84b]/35 bg-[#15130f] text-[#d6a84b] shadow-[0_12px_35px_rgba(0,0,0,0.35)] transition hover:border-[#d6a84b]/70 hover:bg-[#1d1912] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9cc82] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090806]"
      >
        <Cookie aria-hidden="true" className="size-5" />
      </button>
    );
  }

  return (
    <section
      data-nosnippet
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-3xl rounded-3xl border border-[#d6a84b]/30 bg-[#15130f]/98 p-5 text-[#f8f4ec] shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-6"
    >
      <div className="flex items-start gap-4">
        <div className="hidden size-11 shrink-0 items-center justify-center rounded-full bg-[#d6a84b]/12 text-[#d6a84b] sm:flex">
          <Cookie aria-hidden="true" className="size-5" />
        </div>

        <div className="min-w-0 flex-1">
          <h2
            id="cookie-consent-title"
            className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#f8f4ec]"
          >
            {cookieConsent.title}
          </h2>

          <p
            id="cookie-consent-description"
            className="mt-2 text-sm leading-6 text-[#b8b0a2]"
          >
            {cookieConsent.description}
          </p>

          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onReject}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d6a84b]/30 px-5 text-sm font-semibold text-[#e9cc82] transition hover:border-[#d6a84b]/60 hover:bg-[#d6a84b]/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9cc82] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15130f]"
            >
              {cookieConsent.reject}
            </button>

            <button
              type="button"
              onClick={onAccept}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#d6a84b] px-5 text-sm font-semibold text-[#090806] transition hover:bg-[#e9cc82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9cc82] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15130f]"
            >
              {cookieConsent.accept}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
