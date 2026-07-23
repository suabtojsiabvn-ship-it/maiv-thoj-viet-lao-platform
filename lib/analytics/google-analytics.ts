const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

export const googleAnalyticsId = /^G-[A-Z0-9]+$/.test(measurementId)
  ? measurementId
  : null;

export const isGoogleAnalyticsEnabled = Boolean(googleAnalyticsId);
