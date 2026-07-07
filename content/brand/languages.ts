export const languages = {
  default: "en",

  supported: [
    {
      code: "en",
      name: "English",
      nativeName: "English",
      locale: "en",
      flag: "🇺🇸",
      direction: "ltr",
      enabled: true,
      primary: true,
    },

    {
      code: "vi",
      name: "Vietnamese",
      nativeName: "Tiếng Việt",
      locale: "vi",
      flag: "🇻🇳",
      direction: "ltr",
      enabled: true,
      primary: false,
    },

    {
      code: "lo",
      name: "Lao",
      nativeName: "ລາວ",
      locale: "lo",
      flag: "🇱🇦",
      direction: "ltr",
      enabled: true,
      primary: false,
    },

    {
      code: "hmn",
      name: "Hmong",
      nativeName: "Hmong",
      locale: "hmn",
      flag: "🏔️",
      direction: "ltr",
      enabled: true,
      primary: false,
    },

    {
      code: "th",
      name: "Thai",
      nativeName: "ไทย",
      locale: "th",
      flag: "🇹🇭",
      direction: "ltr",
      enabled: true,
      primary: false,
    },
  ],
} as const;