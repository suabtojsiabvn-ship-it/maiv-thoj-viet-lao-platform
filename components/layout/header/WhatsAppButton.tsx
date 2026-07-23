"use client";

import { site } from "@/content/site";
import { useDictionary } from "@/hooks/useDictionary";

export function WhatsAppButton() {
  const dictionary = useDictionary();
  const label = dictionary.footer.contact.whatsappLabel;

  return (
    <a
      href={site.contact.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${site.contact.whatsapp.value}`}
      title={label}
      className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-400/35 bg-emerald-500/15 text-emerald-300 shadow-lg shadow-emerald-950/20 transition hover:border-emerald-300/70 hover:bg-emerald-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background xl:w-auto xl:gap-2 xl:px-4"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5 shrink-0"
      >
        <path d="M12.04 2a9.84 9.84 0 0 0-8.53 14.75L2 22l5.39-1.42A9.86 9.86 0 1 0 12.04 2Zm0 17.98a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.2.84.86-3.12-.2-.32a8.12 8.12 0 1 1 6.97 3.91Zm4.45-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.25-.63.79-.77.95-.14.17-.28.19-.52.07-.24-.12-1.03-.38-1.96-1.21a7.35 7.35 0 0 1-1.35-1.68c-.14-.24-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.47c-.16 0-.43.06-.65.3-.22.25-.85.83-.85 2.02 0 1.2.87 2.35.99 2.51.12.17 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>

      <span className="hidden whitespace-nowrap text-sm font-semibold xl:inline">
        {label}
      </span>
    </a>
  );
}
