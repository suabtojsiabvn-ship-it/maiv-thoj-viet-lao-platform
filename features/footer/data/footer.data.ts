import {
  Globe,
  Play,
  Image,
  MapPinned,
} from "lucide-react";

import type {
  FooterContactInfo,
  FooterSection,
  FooterSocialLink,
} from "../types/footer.types";

export const footerSections: FooterSection[] = [
  {
    title: "Treatments",
    links: [
      {
        label: "Dental Implants",
        href: "/treatments/implants",
      },
      {
        label: "Smile Makeover",
        href: "/treatments/smile-makeover",
      },
      {
        label: "Porcelain Veneers",
        href: "/treatments/veneers",
      },
      {
        label: "Dental Crowns",
        href: "/treatments/crowns",
      },
    ],
  },

  {
    title: "Travel",
    links: [
      {
        label: "Airport Pickup",
        href: "/travel-guide",
      },
      {
        label: "Hotels",
        href: "/travel-guide",
      },
      {
        label: "Travel Guide",
        href: "/travel-guide",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        label: "About Us",
        href: "/about",
      },
      {
        label: "Doctors",
        href: "/doctors",
      },
      {
        label: "Patient Stories",
        href: "/patient-stories",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },

  {
    title: "Resources",
    links: [
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Privacy Policy",
        href: "/privacy",
      },
      {
        label: "Terms of Service",
        href: "/terms",
      },
      {
        label: "Sitemap",
        href: "/sitemap.xml",
      },
    ],
  },
];

export const footerContact: FooterContactInfo = {
  address: "Hanoi, Vietnam",

  phone: "+84 963 305 861",

  email: "txhimtsawbvn@gmail.com",

  hours: "Mon – Sat | 08:00 – 18:00",

  languages: [
    "English",
    "Vietnamese",
    "Hmong",
  ],
};

export const footerSocials: FooterSocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: Globe,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: Play,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Image,
  },
  {
    label: "Google Maps",
    href: "https://maps.google.com",
    icon: MapPinned,
  },
];