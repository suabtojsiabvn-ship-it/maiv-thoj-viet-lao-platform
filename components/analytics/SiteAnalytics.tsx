import { googleAnalyticsId } from "@/lib/analytics";

import { ConsentAwareAnalytics } from "./ConsentAwareAnalytics";

export function SiteAnalytics() {
  if (!googleAnalyticsId) {
    return null;
  }

  return <ConsentAwareAnalytics measurementId={googleAnalyticsId} />;
}
