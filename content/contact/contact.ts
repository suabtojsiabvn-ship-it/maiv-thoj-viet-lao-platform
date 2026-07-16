export const contactInfo = {
  phone: {
    vietnam: {
      label: "Vietnam Hotline",
      value: "+84 963 305 681",
      href: "tel:+84963305681",
    },

    laos: {
      label: "Lao Hotline",
      value: "020 5250 4085",
      href: "tel:02052504085",
    },
  },

  whatsapp: {
    label: "WhatsApp",
    value: "+84 963 305 681",
    href: "https://wa.me/84963305681",
  },

  email: {
    label: "Email",
    value: "suabtojsiabvn@gmail.com",
    href: "mailto:suabtojsiabvn@gmail.com",
  },
} as const;

/**
 * Backward-compatible alias for existing imports.
 */
export const contact = contactInfo;