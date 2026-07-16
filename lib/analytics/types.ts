import type { AnalyticsEventName } from "./events";

export interface AnalyticsEventParams {
  page?: string;
  locale?: string;
  source?: string;
  treatment?: string;
  story?: string;
  country?: string;
  query?: string;
  resultId?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface AnalyticsEvent {
  event: AnalyticsEventName;
  params?: AnalyticsEventParams;
}