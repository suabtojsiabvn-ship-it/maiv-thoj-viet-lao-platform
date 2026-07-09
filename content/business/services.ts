export const services = {
  implant: {
    id: "implant",

    name: "Dental Implant",

    featured: true,
  },

  crowns: {
    id: "crowns",

    name: "Dental Crowns",

    featured: true,
  },

  veneers: {
    id: "veneers",

    name: "Porcelain Veneers",

    featured: true,
  },

  smileMakeover: {
    id: "smile-makeover",

    name: "Smile Makeover",

    featured: true,
  },
} as const;

export type Services = typeof services;