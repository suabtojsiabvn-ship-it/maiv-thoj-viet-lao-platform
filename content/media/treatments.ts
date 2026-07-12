export const treatmentsMedia = {
  implant: {
    thumbnail: "/images/treatments/implant.webp",
    hero: "/images/treatments/implant.webp",
    og: "/images/treatments/implant.webp",
    gallery: [],
  },

  crowns: {
    thumbnail: "/images/treatments/crown.webp",
    hero: "/images/treatments/crown.webp",
    og: "/images/treatments/crown.webp",
    gallery: [],
  },

  veneers: {
    thumbnail: "/images/treatments/veneer.webp",
    hero: "/images/treatments/veneer.webp",
    og: "/images/treatments/veneer.webp",
    gallery: [],
  },

  smileMakeover: {
    thumbnail: "/images/treatments/smile-makeover.webp",
    hero: "/images/treatments/smile-makeover.webp",
    og: "/images/treatments/smile-makeover.webp",
    gallery: [],
  },
} as const;

export type TreatmentMediaKey =
  keyof typeof treatmentsMedia;