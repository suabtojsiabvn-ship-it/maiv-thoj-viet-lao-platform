"use client";

import { site } from "@/content/site";
import { useDictionary } from "@/hooks/useDictionary";

export function FooterBottom() {
  const dictionary = useDictionary();
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
      <p>
        © {year} {site.branding.name}.{" "}
        {dictionary.footer.bottom.rightsReserved}
      </p>

      <p>{dictionary.footer.bottom.builtFor}</p>
    </div>
  );
}