"use client";

import { sendGAEvent } from "@next/third-parties/google";

import type { AnalyticsEventName } from "./events";
import { isGoogleAnalyticsEnabled } from "./google-analytics";
import type { AnalyticsEventParams } from "./types";

export function trackEvent(
  event: AnalyticsEventName,
  params: AnalyticsEventParams = {},
) {
  if (typeof window === "undefined" || !isGoogleAnalyticsEnabled) {
    return;
  }

  sendGAEvent("event", event, params);
}
