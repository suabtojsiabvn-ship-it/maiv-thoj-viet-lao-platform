"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { site } from "@/content/site";
import { useDictionary } from "@/hooks/useDictionary";
import {
  getLocaleFromPathname,
  addLocaleToPathname,
} from "@/lib/i18n-routing";
import { defaultLocale } from "@/lib/i18n";

export function FooterNavigation() {
  const dictionary = useDictionary();
  const pathname = usePathname();

  const locale =
    getLocaleFromPathname(pathname) ?? defaultLocale;

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
        {dictionary.footer.sections.company.title}
      </h3>

      <ul className="mt-5 space-y-3">
        {site.navigation.main.map((item) => {
          const href =
            item.href === "/"
              ? `/${locale}`
              : addLocaleToPathname(item.href, locale);

          return (
            <li key={item.key}>
              <Link
                href={href}
                className="text-sm text-slate-400 transition hover:text-cyan-300"
              >
                {dictionary.navigation.items[item.key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}