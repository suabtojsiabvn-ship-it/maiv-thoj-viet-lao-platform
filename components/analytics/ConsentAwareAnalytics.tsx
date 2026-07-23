"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

import {
  getStoredAnalyticsConsent,
  storeAnalyticsConsent,
  updateGoogleConsent,
} from "@/lib/analytics";
import type { AnalyticsConsent } from "@/lib/analytics";

import { ConversionTracker } from "./ConversionTracker";
import { CookieConsent } from "./CookieConsent";

interface ConsentAwareAnalyticsProps {
  measurementId: string;
}

export function ConsentAwareAnalytics({
  measurementId,
}: ConsentAwareAnalyticsProps) {
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  useEffect(() => {
    const storedConsent = getStoredAnalyticsConsent();

    if (storedConsent) {
      updateGoogleConsent(storedConsent);
    }

    const readyTimer = window.setTimeout(() => {
      setConsent(storedConsent);
      setIsBannerOpen(storedConsent === null);
      setIsReady(true);
    }, 0);

    return () => window.clearTimeout(readyTimer);
  }, []);

  const chooseConsent = (nextConsent: AnalyticsConsent) => {
    storeAnalyticsConsent(nextConsent);
    updateGoogleConsent(nextConsent);
    setConsent(nextConsent);
    setIsBannerOpen(false);
  };

  if (!isReady) {
    return null;
  }

  return (
    <>
      {consent === "granted" && (
        <>
          <ConversionTracker />
          <GoogleAnalytics gaId={measurementId} />
        </>
      )}

      <CookieConsent
        open={isBannerOpen}
        onOpen={() => setIsBannerOpen(true)}
        onReject={() => chooseConsent("denied")}
        onAccept={() => chooseConsent("granted")}
      />
    </>
  );
}
