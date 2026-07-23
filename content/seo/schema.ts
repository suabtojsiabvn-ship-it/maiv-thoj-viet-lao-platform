import { brand } from "@/content/branding";
import { partners, people } from "@/content/business";
import { urls } from "@/content/config";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ArticleSchemaInput {
  headline: string;
  description: string;
  url: string;
  image: string;
  inLanguage?: string;
  datePublished?: string;
  dateModified?: string;
}

interface CollectionPageSchemaInput {
  name: string;
  description: string;
  url: string;
  inLanguage?: string;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: brand.name,
  alternateName: brand.alternateNames,

  url: urls.production,
  logo: `${urls.production}/images/logo.png`,

  description: brand.description,
  email: brand.email,

  areaServed: "International",
  serviceType: brand.positioning,

  sameAs: [
    "https://www.facebook.com/maivthoj93",
    "https://www.tiktok.com/@maivthojvietlaobrand1993",
  ],
} as const;

export const maivThojPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: people.founder.name,
  alternateName: people.founder.alternateNames,
  jobTitle: people.founder.role,
  description: people.founder.description,

  url: `${urls.production}/#founder`,

  worksFor: {
    "@type": "Organization",
    name: brand.name,
    url: urls.production,
  },

  sameAs: [
    "https://www.facebook.com/maivthoj93",
    "https://www.tiktok.com/@maivthojvietlaobrand1993",
  ],
} as const;

export const aSuPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: people.coordinator.name,
  alternateName: people.coordinator.alternateNames,
  jobTitle: "International Patient Journey Manager",
  description: people.coordinator.description,

  url: `${urls.production}/#coordinator`,

  worksFor: {
    "@type": "Organization",
    name: brand.name,
    url: urls.production,
  },

  knowsLanguage: people.coordinator.languages,
} as const;

export const anNhienDentalSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",

  name: partners.primary.name,
  description: partners.primary.description,

  url: urls.production,

  address: {
    "@type": "PostalAddress",
    addressLocality: "Hanoi",
    addressCountry: "VN",
  },

  areaServed: "International",

  availableLanguage: ["English", "Vietnamese", "Hmong", "Thai", "Lao"],
} as const;

export const doctorToanSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: people.clinicalDirector.name,
  jobTitle: people.clinicalDirector.role,
  description: people.clinicalDirector.description,

  worksFor: {
    "@type": "Dentist",
    name: partners.primary.name,
  },
} as const;

export function createTreatmentSchema(
  title: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",

    name: title,
    description,
    url,

    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: urls.production,
    },
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createFaqSchema(faqs: FaqItem[], inLanguage?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(inLanguage ? { inLanguage } : {}),

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createArticleSchema({
  headline,
  description,
  url,
  image,
  inLanguage,
  datePublished,
  dateModified,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",

    headline,
    description,
    url,
    ...(inLanguage ? { inLanguage } : {}),

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },

    image: [new URL(image, urls.production).toString()],

    ...(datePublished ? { datePublished } : {}),

    ...(dateModified ? { dateModified } : {}),

    author: {
      "@type": "Organization",
      name: brand.name,
      url: urls.production,
    },

    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: urls.production,

      logo: {
        "@type": "ImageObject",
        url: `${urls.production}/images/logo.png`,
      },
    },
  };
}

export function createCollectionPageSchema({
  name,
  description,
  url,
  inLanguage,
}: CollectionPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    name,
    description,
    url,
    ...(inLanguage ? { inLanguage } : {}),

    mainEntity: {
      "@type": "ItemList",
    },

    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: urls.production,
    },
  };
}

export const homepageSchema = {
  "@context": "https://schema.org",

  "@graph": [
    organizationSchema,
    maivThojPersonSchema,
    aSuPersonSchema,
    anNhienDentalSchema,
    doctorToanSchema,
  ],
} as const;
