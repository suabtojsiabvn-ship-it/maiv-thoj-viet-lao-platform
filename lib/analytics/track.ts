"use client";

import { sendGAEvent } from "@next/third-parties/google";

import { getStoredAnalyticsConsent } from "./consent";
import type { AnalyticsEventName } from "./events";
import { isGoogleAnalyticsEnabled } from "./google-analytics";
import type { AnalyticsEventParams } from "./types";

export function trackEvent(
  event: AnalyticsEventName,
  params: AnalyticsEventParams = {},
) {
  if (
    typeof window === "undefined" ||
    !isGoogleAnalyticsEnabled ||
    getStoredAnalyticsConsent() !== "granted"
  ) {
    return;
  }

  sendGAEvent("event", event, params);
}
