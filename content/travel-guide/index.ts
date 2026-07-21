import { aftercareTravelGuide } from "./aftercare-travel";
import { airportArrivalGuide } from "./airport-arrival";
import { foodCultureGuide } from "./food-culture";
import { hotelStayGuide } from "./hotel-stay";
import { localTransportationGuide } from "./local-transportation";
import { visaPreparationGuide } from "./visa-preparation";

export { aftercareTravelGuide } from "./aftercare-travel";
export { airportArrivalGuide } from "./airport-arrival";
export { foodCultureGuide } from "./food-culture";
export { hotelStayGuide } from "./hotel-stay";
export { localTransportationGuide } from "./local-transportation";
export { visaPreparationGuide } from "./visa-preparation";

export const travelGuides = [
  airportArrivalGuide,
  hotelStayGuide,
  localTransportationGuide,
  visaPreparationGuide,
  foodCultureGuide,
  aftercareTravelGuide,
];

export {
  getFeaturedTravelGuides,
  getTravelGuideBySlug,
  getTravelGuideBySlugWithFallback,
  getTravelGuideSlugs,
  getTravelGuideStaticParams,
  getTravelGuidesByCategory,
  getTravelGuidesByLocale,
  isTravelGuideKey,
  travelGuideKeys,
} from "./helpers";
