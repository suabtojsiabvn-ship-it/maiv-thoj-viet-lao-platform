"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";

import { site } from "@/content/site";
import { useDictionary } from "@/hooks/useDictionary";

export function FooterContact() {
  const dictionary = useDictionary();
  const phones = [
    {
      ...site.contact.phone.vietnam,
      label: dictionary.footer.contact.vietnamPhoneLabel,
    },
    {
      ...site.contact.phone.laos,
      label: dictionary.footer.contact.laosPhoneLabel,
    },
  ];

  const linkClassName =
    "group flex min-h-11 items-start gap-3 text-sm text-[#B8B0A2] transition-colors hover:text-[#E9CC82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#090806]";

  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A84B]">
        {dictionary.footer.contact.title}
      </h3>

      <ul className="mt-4 space-y-2">
        {phones.map((phone) => (
          <li key={phone.href}>
            <a href={phone.href} className={linkClassName}>
              <Phone
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-[#D6A84B]"
              />
              <span>
                <span className="block text-xs text-[#8F877A]">
                  {phone.label}
                </span>
                <span className="mt-0.5 block">{phone.value}</span>
              </span>
            </a>
          </li>
        ))}

        <li>
          <a href={site.contact.email.href} className={linkClassName}>
            <Mail
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-[#D6A84B]"
            />
            <span className="whitespace-nowrap text-[0.82rem] tracking-[-0.01em]">
              {site.contact.email.value}
            </span>
          </a>
        </li>

        <li>
          <a
            href={site.contact.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
          >
            <MessageCircle
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-[#D6A84B]"
            />
            <span>{dictionary.footer.contact.whatsappLabel}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
