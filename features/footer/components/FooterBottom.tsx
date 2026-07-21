"use client";

import { site } from "@/content/site";
import { useDictionary } from "@/hooks/useDictionary";

export function FooterBottom() {
  const dictionary = useDictionary();
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-3 border-t border-[#D6A84B]/20 py-6 text-xs leading-6 text-[#8F877A] md:flex-row md:items-center md:justify-between">
      <p>
        © {year} {site.branding.name}.{" "}
        {dictionary.footer.bottom.rightsReserved}
      </p>

      <p className="text-[#B8B0A2]">
        {dictionary.footer.bottom.builtFor}
      </p>
    </div>
  );
}
