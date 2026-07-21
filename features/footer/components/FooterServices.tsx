"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useDictionary } from "@/hooks/useDictionary";
import { defaultLocale } from "@/lib/i18n";
import { getLocaleFromPathname } from "@/lib/i18n-routing";

import { footerTreatmentLinks } from "../data/footer.data";

export function FooterServices() {
  const dictionary = useDictionary();
  const pathname = usePathname();
  const locale =
    getLocaleFromPathname(pathname) ?? defaultLocale;

  return (
    <nav aria-label={dictionary.footer.sections.treatments.title}>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A84B]">
        {dictionary.footer.sections.treatments.title}
      </h3>

      <ul className="mt-4 space-y-1">
        {footerTreatmentLinks.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/${locale}/treatments/${item.slug}`}
              className="inline-flex min-h-11 items-center text-sm text-[#B8B0A2] transition-colors hover:text-[#E9CC82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#090806]"
            >
              {
                dictionary.footer.sections.treatments.links[
                  item.dictionaryKey
                ]
              }
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
