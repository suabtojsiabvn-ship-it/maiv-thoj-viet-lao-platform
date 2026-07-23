"use client";

import { useEffect } from "react";

import { EVENTS, trackEvent } from "@/lib/analytics";
import { locales } from "@/types/i18n";

function getLocale(pathname: string) {
  const locale = pathname.split("/")[1];

  return locales.includes(locale as (typeof locales)[number])
    ? locale
    : undefined;
}

export function ConversionTracker() {
  useEffect(() => {
    const trackContactClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest<HTMLAnchorElement>("a[href]");

      if (!link) {
        return;
      }

      const href = link.getAttribute("href")?.trim().toLowerCase() ?? "";
      const pagePath = window.location.pathname;
      const params = {
        locale: getLocale(pagePath),
        page_path: pagePath,
        source: link.dataset.analyticsSource ?? "site_link",
      };

      if (
        href.startsWith("https://wa.me/") ||
        href.startsWith("https://api.whatsapp.com/") ||
        href.startsWith("whatsapp:")
      ) {
        trackEvent(EVENTS.WHATSAPP_CLICK, {
          ...params,
          channel: "whatsapp",
        });
        return;
      }

      if (href.startsWith("tel:")) {
        trackEvent(EVENTS.PHONE_CLICK, {
          ...params,
          channel: "phone",
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEvent(EVENTS.EMAIL_CLICK, {
          ...params,
          channel: "email",
        });
      }
    };

    document.addEventListener("click", trackContactClick, true);

    return () => {
      document.removeEventListener("click", trackContactClick, true);
    };
  }, []);

  return null;
}
