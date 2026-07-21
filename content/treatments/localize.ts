import type { Locale } from "@/types/i18n";

import type { TreatmentContent, TreatmentSlug } from "./types";

export type TreatmentTranslation = Omit<
  TreatmentContent,
  | "locale"
  | "slug"
  | "category"
  | "conversion"
  | "relatedTreatments"
  | "media"
  | "seo"
> & {
  conversion: Omit<TreatmentContent["conversion"], "contacts">;
  seo: Pick<TreatmentContent["seo"], "title" | "description">;
};

export type TreatmentTranslations = Record<TreatmentSlug, TreatmentTranslation>;

function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith(`/${locale}/`)) {
    return href;
  }

  return `/${locale}${href}`;
}

export function localizeTreatment(
  source: TreatmentContent,
  locale: Locale,
  translation: TreatmentTranslation,
): TreatmentContent {
  return {
    ...source,
    ...translation,
    locale,
    conversion: {
      ...translation.conversion,
      primaryAction: {
        ...translation.conversion.primaryAction,
        href: localizeHref(translation.conversion.primaryAction.href, locale),
      },
      secondaryAction: translation.conversion.secondaryAction
        ? {
            ...translation.conversion.secondaryAction,
            href: localizeHref(
              translation.conversion.secondaryAction.href,
              locale,
            ),
          }
        : undefined,
      contacts: source.conversion.contacts,
    },
    seo: {
      ...translation.seo,
      canonical: `/${locale}/treatments/${source.slug}`,
      image: source.media.og,
    },
  };
}
