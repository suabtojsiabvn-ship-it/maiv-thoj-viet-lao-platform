export type TravelPartyType =
  | "alone"
  | "couple"
  | "family"
  | "friends"
  | "medical-companion";

export interface TravelPartyOption {
  id: TravelPartyType;
  label: string;
  description: string;
}

export const travelPartyOptions: readonly TravelPartyOption[] = [
  {
    id: "alone",
    label: "Traveling Alone",
    description:
      "I expect to travel to Vietnam without another traveler.",
  },
  {
    id: "couple",
    label: "Traveling as a Couple",
    description:
      "I expect to travel with my spouse or partner.",
  },
  {
    id: "family",
    label: "Traveling with Family",
    description:
      "I expect to travel with one or more family members.",
  },
  {
    id: "friends",
    label: "Traveling with Friends",
    description:
      "I expect to travel with one or more friends.",
  },
  {
    id: "medical-companion",
    label: "Traveling with a Medical Companion",
    description:
      "I expect to travel with someone who will support me during treatment and recovery.",
  },
] as const;

export interface TravelFlexibilityOption {
  value: "fixed" | "flexible" | "not-decided";
  label: string;
}

export const travelFlexibilityOptions: readonly TravelFlexibilityOption[] = [
  {
    value: "fixed",
    label: "My expected dates are fixed",
  },
  {
    value: "flexible",
    label: "My expected dates are flexible",
  },
  {
    value: "not-decided",
    label: "I have not decided yet",
  },
] as const;

export function getTravelPartyOptions(): readonly TravelPartyOption[] {
  return travelPartyOptions;
}

export function getTravelFlexibilityOptions(): readonly TravelFlexibilityOption[] {
  return travelFlexibilityOptions;
}