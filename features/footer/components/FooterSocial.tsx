"use client";

import { ExternalLink } from "lucide-react";

import { site } from "@/content/site";
import { useDictionary } from "@/hooks/useDictionary";

export function FooterSocial() {
  const dictionary = useDictionary();
  const socials = Object.values(site.socials).filter(
    (social) => social.url,
  );

  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A84B]">
        {dictionary.footer.socialTitle}
      </h3>

      <ul className="mt-4 space-y-1">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 text-sm text-[#B8B0A2] transition-colors hover:text-[#E9CC82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#090806]"
            >
              {social.label}
              <ExternalLink
                aria-hidden="true"
                className="size-3.5 text-[#8F877A] transition-colors group-hover:text-[#D6A84B]"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
