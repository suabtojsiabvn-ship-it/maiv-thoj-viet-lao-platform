import type { Locale } from "@/types/i18n";

export type SeoKeywordSection =
  | "home"
  | "about"
  | "booking"
  | "contact"
  | "journey"
  | "treatments"
  | "treatment"
  | "destinations"
  | "destination"
  | "travelGuide"
  | "travelGuideArticle";

interface LocalizedHomeSeo {
  title: string;
  description: string;
}

const homeSeo: Partial<Record<Locale, LocalizedHomeSeo>> = {
  en: {
    title: "Hmong Dental Care in Vietnam | Maiv Thoj Viet Lao",
    description:
      "Plan dental care in Vietnam with Hmong and English support for implants, veneers, crowns and smile makeovers, plus airport pickup and travel coordination.",
  },
  hmn: {
    title: "Kho Hniav Hauv Nyab Laj | Maiv Thoj Viet Lao",
    description:
      "Maiv Thoj Viet Lao pab cov Hmoob nyob thoob qab ntuj npaj tuaj kho hniav hauv Nyab Laj, xws li cog hniav, looj hniav thiab veneer, nrog kev txhais lus thiab kev mus los.",
  },
};

const coreKeywords: Partial<Record<Locale, readonly string[]>> = {
  en: [
    "dental care Vietnam",
    "dental treatment Vietnam",
    "dentist Vietnam",
    "dental clinic Vietnam",
    "dental tourism Vietnam",
    "dentist Hanoi",
    "international dental patients Vietnam",
    "Hmong dental care",
    "Hmong dentist Vietnam",
    "Hmong speaking dental support",
  ],
  hmn: [
    "kho hniav",
    "kws kho hniav",
    "chaw kho hniav",
    "nqi kho hniav",
    "kho hniav hauv Nyab Laj",
    "mus kho hniav hauv Nyab Laj",
    "kho hniav rau cov neeg Hmoob",
    "kws kho hniav hais lus Hmoob",
    "Hmong dental care",
    "Hmong dentist Vietnam",
  ],
};

const sectionKeywords: Partial<
  Record<Locale, Partial<Record<SeoKeywordSection, readonly string[]>>>
> = {
  en: {
    home: [
      "dental care in Vietnam for Hmong patients",
      "dental travel support Vietnam",
      "dental treatment with airport pickup Vietnam",
    ],
    about: [
      "Maiv Thoj Viet Lao",
      "Hmong patient journey support",
      "international dental coordinator Vietnam",
    ],
    booking: [
      "book dental consultation Vietnam",
      "Hmong dental consultation",
      "dental treatment enquiry Vietnam",
    ],
    contact: [
      "contact dental support Vietnam",
      "Hmong dental support",
      "international patient coordinator Vietnam",
    ],
    journey: [
      "dental treatment journey Vietnam",
      "dental trip to Vietnam",
      "dental treatment with travel support",
      "airport pickup for dental patients Vietnam",
    ],
    treatments: [
      "dental treatments in Vietnam",
      "cosmetic dentistry Vietnam",
      "dental implants Vietnam",
      "veneers Vietnam",
      "dental crowns Vietnam",
      "smile makeover Vietnam",
    ],
    destinations: [
      "Vietnam dental tourism destinations",
      "dental holiday Vietnam",
      "travel after dental treatment Vietnam",
    ],
    travelGuide: [
      "Vietnam dental tourism guide",
      "dental travel Vietnam",
      "dental holiday planning Vietnam",
      "travel guide for dental patients",
    ],
  },
  hmn: {
    home: [
      "kev pab cov Hmoob kho hniav",
      "pab neeg Hmoob kho hniav",
      "kho hniav thiab mus ncig hauv Nyab Laj",
    ],
    about: [
      "Maiv Thoj Viet Lao",
      "pab cov neeg Hmoob tuaj kho hniav",
      "tus pab txhais lus kho hniav",
    ],
    booking: [
      "teem caij kho hniav",
      "nug nqi kho hniav",
      "tham txog kev kho hniav hauv Nyab Laj",
    ],
    contact: [
      "tiv tauj pab neeg kho hniav",
      "pab cov Hmoob kho hniav",
      "tham lus Hmoob txog kho hniav",
    ],
    journey: [
      "txoj kev tuaj kho hniav hauv Nyab Laj",
      "npaj tuaj kho hniav",
      "tos tshav dav hlau kho hniav",
      "kho hniav thiab mus ncig",
    ],
    treatments: [
      "kev kho hniav hauv Nyab Laj",
      "kho hniav kom zoo nkauj",
      "cog hniav hauv Nyab Laj",
      "looj hniav hauv Nyab Laj",
      "veneer hniav",
      "kho kom luag ntxhi zoo",
    ],
    destinations: [
      "mus ncig Nyab Laj tom qab kho hniav",
      "kho hniav thiab mus ncig Nyab Laj",
      "teb chaws Nyab Laj chaw mus ncig",
    ],
    travelGuide: [
      "kev qhia tuaj kho hniav hauv Nyab Laj",
      "npaj visa tuaj kho hniav",
      "tsev so thaum kho hniav",
      "kev mus los thaum kho hniav",
      "mus ncig tom qab kho hniav",
    ],
  },
};

const treatmentKeywords: Partial<
  Record<Locale, Record<string, readonly string[]>>
> = {
  en: {
    implant: [
      "dental implants Vietnam",
      "dental implants Hanoi",
      "dental implants cost Vietnam",
      "affordable dental implants Vietnam",
      "All-on-4 dental implants Vietnam",
      "full mouth dental implants Vietnam",
    ],
    veneers: [
      "veneers Vietnam",
      "veneers Hanoi",
      "veneers cost Vietnam",
      "porcelain veneers Vietnam",
      "eMax veneers Vietnam",
      "cosmetic dentistry Vietnam",
    ],
    crowns: [
      "dental crowns Vietnam",
      "dental crowns Hanoi",
      "dental crown cost Vietnam",
      "zirconia crowns Vietnam",
      "ceramic crowns Vietnam",
    ],
    smileMakeover: [
      "smile makeover Vietnam",
      "Hollywood smile Vietnam",
      "full mouth restoration Vietnam",
      "cosmetic dentist Hanoi",
      "dental makeover abroad",
    ],
  },
  hmn: {
    implant: [
      "cog hniav",
      "cog hniav implant",
      "nqi cog hniav",
      "cog hniav hauv Nyab Laj",
      "hloov hniav ploj",
      "Hmong dental implants",
    ],
    veneers: [
      "veneer hniav",
      "veneer hauv Nyab Laj",
      "nqi veneer hniav",
      "npog hniav porcelain",
      "kho hniav kom zoo nkauj",
      "Hmong veneers",
    ],
    crowns: [
      "looj hniav",
      "hniav looj ceramic",
      "looj hniav hauv Nyab Laj",
      "nqi looj hniav",
      "zirconia crown Hmong",
    ],
    smileMakeover: [
      "kho kom luag ntxhi zoo",
      "kho tag nrho lub luag ntxhi",
      "smile makeover Hmong",
      "kho hniav kom zoo nkauj hauv Nyab Laj",
      "kho hniav tag nrho",
    ],
  },
};

const travelGuideKeywords: Partial<
  Record<Locale, Record<string, readonly string[]>>
> = {
  en: {
    "airport-arrival": [
      "Vietnam airport pickup dental patients",
      "airport arrival dental tourism Vietnam",
    ],
    "hotel-stay": [
      "hotel for dental treatment Vietnam",
      "where to stay for dental treatment Hanoi",
    ],
    "local-transportation": [
      "transport for dental patients Vietnam",
      "dental clinic airport transfer Vietnam",
    ],
    "visa-preparation": [
      "Vietnam visa for dental treatment",
      "dental tourism Vietnam visa",
    ],
    "food-culture": [
      "food after dental treatment Vietnam",
      "soft food after dental work",
    ],
    "aftercare-travel": [
      "travel after dental treatment Vietnam",
      "dental aftercare travel guide",
    ],
  },
  hmn: {
    "airport-arrival": [
      "tos tshav dav hlau kho hniav",
      "tuaj tshav dav hlau hauv Nyab Laj",
    ],
    "hotel-stay": [
      "tsev so thaum kho hniav",
      "nyob qhov twg thaum kho hniav hauv Nyab Laj",
    ],
    "local-transportation": [
      "kev mus los thaum kho hniav",
      "tsheb tos neeg tuaj kho hniav",
    ],
    "visa-preparation": [
      "visa tuaj Nyab Laj kho hniav",
      "npaj ntaub ntawv tuaj kho hniav",
    ],
    "food-culture": [
      "zaub mov tom qab kho hniav",
      "noj dab tsi tom qab kho hniav",
    ],
    "aftercare-travel": [
      "mus ncig tom qab kho hniav",
      "saib xyuas tom qab kho hniav",
    ],
  },
};

const destinationKeywords: Partial<
  Record<Locale, Record<string, readonly string[]>>
> = {
  en: {
    sapa: ["Sa Pa dental tourism", "visit Sa Pa after dental treatment"],
    "bac-ha": ["Bac Ha travel Vietnam", "Bac Ha Hmong market tour"],
    "ha-giang": [
      "Ha Giang dental tourism itinerary",
      "Ha Giang aftercare travel",
    ],
    "moc-chau": ["Moc Chau after dental treatment", "Moc Chau Vietnam travel"],
    "ha-long": ["Ha Long Bay dental tourism", "Ha Long after dental treatment"],
  },
  hmn: {
    sapa: ["mus ncig Sa Pa tom qab kho hniav", "Sa Pa zos Hmoob"],
    "bac-ha": ["mus ncig Bắc Hà", "Bắc Hà khw Hmoob"],
    "ha-giang": ["mus ncig Hà Giang tom qab kho hniav", "Hà Giang Hmoob"],
    "moc-chau": ["mus ncig Mộc Châu", "Mộc Châu tom qab kho hniav"],
    "ha-long": ["mus ncig Hạ Long", "Hạ Long tom qab kho hniav"],
  },
};

function uniqueKeywords(groups: Array<readonly string[] | undefined>) {
  return [...new Set(groups.flatMap((group) => group ?? []))];
}

export function getHomeSeo(locale: Locale) {
  return homeSeo[locale];
}

export function getSeoKeywords(
  locale: Locale,
  section: SeoKeywordSection,
  slug?: string,
) {
  const details =
    section === "treatment" && slug
      ? treatmentKeywords[locale]?.[slug]
      : section === "travelGuideArticle" && slug
        ? travelGuideKeywords[locale]?.[slug]
        : section === "destination" && slug
          ? destinationKeywords[locale]?.[slug]
          : undefined;

  const parentSection =
    section === "treatment"
      ? "treatments"
      : section === "travelGuideArticle"
        ? "travelGuide"
        : section === "destination"
          ? "destinations"
          : section;

  return uniqueKeywords([
    coreKeywords[locale],
    sectionKeywords[locale]?.[parentSection],
    details,
  ]);
}
