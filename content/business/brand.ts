export const brand = {
  name: "Maiv Thoj Viet Lao Platform",

  shortName: "Maiv Thoj Viet Lao",

  slogan: "A Smile Worth Traveling For",

  mission:
    "Connecting international patients with trusted healthcare partners in Vietnam through personal guidance, multilingual support, and unforgettable experiences.",

  vision:
    "To become the most trusted international healthcare concierge platform for the Hmong community and global patients seeking treatment in Vietnam.",

  philosophy:
    "We don't just help you achieve a beautiful smile. We help you return home with beautiful memories of Vietnam.",

  defaultLocale: "en",

  supportedLocales: [
    "en",
    "hmn",
    "vi",
    "th",
    "lo",
  ] as const,
} as const;

export type Brand = typeof brand;