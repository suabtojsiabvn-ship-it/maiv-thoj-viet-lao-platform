export type SupportServiceId =
  | "airport-pickup"
  | "airport-drop-off"
  | "hotel-assistance"
  | "local-transportation"
  | "language-support"
  | "vip-companion"
  | "travel-experience";

export interface SupportService {
  id: SupportServiceId;
  title: string;
  description: string;
  optional: boolean;
  availabilityNote?: string;
}

export const bookingSupportServices: readonly SupportService[] = [
  {
    id: "airport-pickup",
    title: "Airport Pickup",
    description:
      "Coordinate your arrival meeting point and transfer from the airport according to the confirmed journey plan.",
    optional: true,
    availabilityNote:
      "Available according to confirmed arrival details and treatment schedule.",
  },
  {
    id: "airport-drop-off",
    title: "Airport Drop-off",
    description:
      "Coordinate transportation to the airport after your final clinical review and before your return flight.",
    optional: true,
    availabilityNote:
      "Available according to the confirmed departure schedule.",
  },
  {
    id: "hotel-assistance",
    title: "Hotel Assistance",
    description:
      "Receive support identifying accommodation that is convenient for the clinic, transportation and recovery needs.",
    optional: true,
    availabilityNote:
      "Hotel cost and availability depend on location, dates and room category.",
  },
  {
    id: "local-transportation",
    title: "Local Transportation Coordination",
    description:
      "Coordinate transportation between the hotel, clinic and confirmed journey activities during your stay.",
    optional: true,
    availabilityNote:
      "Transportation arrangements depend on the approved journey plan.",
  },
  {
    id: "language-support",
    title: "Language Support",
    description:
      "Request communication support in Hmong, Vietnamese, English, Lao or Thai during appropriate stages of the journey.",
    optional: true,
    availabilityNote:
      "Language support depends on team availability and appointment schedule.",
  },
  {
    id: "vip-companion",
    title: "Maiv Thoj VIP Companion",
    description:
      "Request Maiv Thoj to accompany selected parts of your journey when personal support is especially important.",
    optional: true,
    availabilityNote:
      "Available only by advance request and subject to Maiv Thoj's schedule.",
  },
  {
    id: "travel-experience",
    title: "Optional Vietnam Travel Experience",
    description:
      "Request help planning a suitable travel experience when your clinical condition and treatment schedule allow.",
    optional: true,
    availabilityNote:
      "Travel activities require clinical suitability and sufficient available time.",
  },
] as const;

export function getBookingSupportServices(): readonly SupportService[] {
  return bookingSupportServices;
}

export function getSupportService(
  id: SupportServiceId,
): SupportService | undefined {
  return bookingSupportServices.find(
    (service) => service.id === id,
  );
}