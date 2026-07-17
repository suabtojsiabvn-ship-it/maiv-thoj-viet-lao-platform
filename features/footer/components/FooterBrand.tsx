"use client";

import { site } from "@/content/site";
import { useDictionary } from "@/hooks/useDictionary";

export function FooterBrand() {
  const dictionary = useDictionary();

  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl font-bold text-white">
        {site.branding.name}
      </h2>

      <p className="mt-3 max-w-md leading-7 text-slate-400">
        {dictionary.footer.description}
      </p>

      <p className="mt-4 text-sm text-slate-500">
        {site.branding.businessLocation}
      </p>
    </div>
  );
}