export type ContactMethodId =
  | "whatsapp"
  | "phone"
  | "email"
  | "messenger"
  | "line"
  | "wechat";

export interface ContactMethod {
  id: ContactMethodId;
  label: string;
  description: string;
  currentlyAvailable: boolean;
}

export const bookingContactMethods: readonly ContactMethod[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    description:
      "Receive messages and consultation coordination through WhatsApp.",
    currentlyAvailable: true,
  },
  {
    id: "phone",
    label: "Phone Call",
    description:
      "Request a phone call from the international support team.",
    currentlyAvailable: true,
  },
  {
    id: "email",
    label: "Email",
    description:
      "Receive consultation information and follow-up communication by email.",
    currentlyAvailable: true,
  },
  {
    id: "messenger",
    label: "Facebook Messenger",
    description:
      "Request communication through the official Facebook channel.",
    currentlyAvailable: false,
  },
  {
    id: "line",
    label: "LINE",
    description:
      "Request communication through LINE when support becomes available.",
    currentlyAvailable: false,
  },
  {
    id: "wechat",
    label: "WeChat",
    description:
      "Request communication through WeChat when support becomes available.",
    currentlyAvailable: false,
  },
] as const;

export function getBookingContactMethods(): readonly ContactMethod[] {
  return bookingContactMethods;
}

export function getAvailableBookingContactMethods(): ContactMethod[] {
  return bookingContactMethods.filter(
    (method) => method.currentlyAvailable,
  );
}