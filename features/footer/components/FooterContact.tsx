"use client";

import { site } from "@/content/site";
import { useDictionary } from "@/hooks/useDictionary";

export function FooterContact() {
  const dictionary = useDictionary();

  const phones = [
    {
      ...site.contact.phone.vietnam,
      label:
        dictionary.footer.contact.vietnamPhoneLabel,
    },
    {
      ...site.contact.phone.laos,
      label: dictionary.footer.contact.laosPhoneLabel,
    },
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
        {dictionary.footer.contact.title}
      </h3>

      <ul className="mt-5 space-y-3">
        {phones.map((phone) => (
          <li key={phone.href}>
            <a
              href={phone.href}
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              {phone.label}: {phone.value}
            </a>
          </li>
        ))}

        <li>
          <a
            href={site.contact.email.href}
            className="text-sm text-slate-400 transition hover:text-cyan-300"
          >
            {dictionary.footer.contact.emailLabel}:{" "}
            {site.contact.email.value}
          </a>
        </li>

        <li>
          <a
            href={site.contact.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-400 transition hover:text-cyan-300"
          >
            {dictionary.footer.contact.whatsappLabel}:{" "}
            {site.contact.whatsapp.value}
          </a>
        </li>
      </ul>
    </div>
  );
}