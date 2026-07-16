"use client";

import { useCallback } from "react";

import type { AnalyticsEventName } from "../events";
import { trackEvent } from "../track";
import type { AnalyticsEventParams } from "../types";

export function useAnalytics() {
  const track = useCallback(
    (
      event: AnalyticsEventName,
      params: AnalyticsEventParams = {},
    ) => {
      trackEvent(event, params);
    },
    [],
  );

  return {
    track,
  };
}