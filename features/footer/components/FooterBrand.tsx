"use client";

import Image from "next/image";

import { site } from "@/content/site";
import { useDictionary } from "@/hooks/useDictionary";

export function FooterBrand() {
  const dictionary = useDictionary();

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-full border border-[#D6A84B]/45 bg-black shadow-[0_0_32px_rgba(214,168,75,0.12)]">
          <Image
            src="/images/logo.png"
            alt={`${site.branding.name} logo`}
            fill
            sizes="80px"
            className="object-contain"
          />
        </div>

        <div>
          <p className="font-[family-name:var(--font-display)] text-xl font-semibold leading-tight text-[#F7F3EA]">
            {site.branding.name}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#D6A84B]">
            Smile
          </p>
        </div>
      </div>

      <p className="mt-5 max-w-md text-sm leading-7 text-[#B8B0A2]">
        {dictionary.footer.description}
      </p>

      <p className="mt-4 text-sm text-[#E9CC82]">
        {site.branding.businessLocation}
      </p>
    </div>
  );
}
