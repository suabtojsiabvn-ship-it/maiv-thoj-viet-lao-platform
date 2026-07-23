import { GoogleAnalytics } from "@next/third-parties/google";

import { googleAnalyticsId } from "@/lib/analytics";

import { ConversionTracker } from "./ConversionTracker";

export function SiteAnalytics() {
  if (!googleAnalyticsId) {
    return null;
  }

  return (
    <>
      <ConversionTracker />
      <GoogleAnalytics gaId={googleAnalyticsId} />
    </>
  );
}
