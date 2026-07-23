export const ANALYTICS_CONSENT_STORAGE_KEY = "mtvl_analytics_consent_v1";

export type AnalyticsConsent = "granted" | "denied";

export const googleConsentDefaultScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  });
  gtag('set', 'ads_data_redaction', true);
`;

declare global {
  interface Window {
    gtag?: (
      command: "consent",
      action: "update",
      params: {
        ad_storage: AnalyticsConsent;
        ad_user_data: AnalyticsConsent;
        ad_personalization: AnalyticsConsent;
        analytics_storage: AnalyticsConsent;
      },
    ) => void;
  }
}

export function getStoredAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);

    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function storeAnalyticsConsent(consent: AnalyticsConsent) {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, consent);
  } catch {
    // Consent still applies to the current page when storage is unavailable.
  }
}

export function updateGoogleConsent(consent: AnalyticsConsent) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: consent,
  });
}
