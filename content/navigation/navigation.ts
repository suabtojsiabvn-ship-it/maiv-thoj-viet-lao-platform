export type NavigationItemKey =
  | "home"
  | "treatments"
  | "journey"
  | "media"
  | "about"
  | "contact";

export interface NavigationItem {
  key: NavigationItemKey;
  href: string;
}

export const navigation = {
  main: [
    { key: "home", href: "/" },
    { key: "treatments", href: "/treatments" },
    { key: "journey", href: "/journey" },
    { key: "media", href: "/media" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
  ] satisfies readonly NavigationItem[],
} as const;
