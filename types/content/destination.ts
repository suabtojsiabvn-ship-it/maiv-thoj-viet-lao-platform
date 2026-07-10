import type { BaseContent } from "./base-content";

export interface DestinationLocation {
  country: string;
  province: string;
  district?: string;
}

export interface DestinationHighlight {
  title: string;
  description: string;
}

export interface DestinationContent extends BaseContent {
  location: DestinationLocation;
  highlights: DestinationHighlight[];
  bestFor?: string[];
  recommendedDuration?: string;
}