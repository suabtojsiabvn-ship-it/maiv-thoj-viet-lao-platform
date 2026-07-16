"use client";

import type {
  AnalyticsEventName,
} from "./events";
import type {
  AnalyticsEventParams,
} from "./types";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export function trackEvent(
  event: AnalyticsEventName,
  params: AnalyticsEventParams = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer?.push({
    event,
    ...params,
  });

  window.gtag?.("event", event, params);
}