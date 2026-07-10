import { bacHaDestination } from "./bac-ha";
import { haGiangDestination } from "./ha-giang";
import { haLongDestination } from "./ha-long";
import { mocChauDestination } from "./moc-chau";
import { sapaDestination } from "./sapa";

export { bacHaDestination } from "./bac-ha";
export { haGiangDestination } from "./ha-giang";
export { haLongDestination } from "./ha-long";
export { mocChauDestination } from "./moc-chau";
export { sapaDestination } from "./sapa";

export const destinations = [
  sapaDestination,
  bacHaDestination,
  haGiangDestination,
  mocChauDestination,
  haLongDestination,
];

export {
  getDestinationBySlug,
  getDestinationSlugs,
  getDestinationsByLocale,
  getFeaturedDestinations,
} from "./helpers";