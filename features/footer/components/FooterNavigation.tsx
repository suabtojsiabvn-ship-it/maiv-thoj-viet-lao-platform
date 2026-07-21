"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { site } from "@/content/site";
import { useDictionary } from "@/hooks/useDictionary";
import { defaultLocale } from "@/lib/i18n";
import {
  addLocaleToPathname,
  getLocaleFromPathname,
} from "@/lib/i18n-routing";

const linkClassName =
  "inline-flex min-h-11 items-center text-sm text-[#B8B0A2] transition-colors hover:text-[#E9CC82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#090806]";

export function FooterNavigation() {
  const dictionary = useDictionary();
  const pathname = usePathname();
  const locale =
    getLocaleFromPathname(pathname) ?? defaultLocale;

  return (
    <nav aria-label={dictionary.footer.sections.company.title}>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A84B]">
        {dictionary.footer.sections.company.title}
      </h3>

      <ul className="mt-4 space-y-1">
        {site.navigation.main.map((item) => {
          const href =
            item.href === "/"
              ? `/${locale}`
              : addLocaleToPathname(item.href, locale);

          return (
            <li key={item.key}>
              <Link href={href} className={linkClassName}>
                {dictionary.navigation.items[item.key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
