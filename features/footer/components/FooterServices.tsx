"use client";

import { useDictionary } from "@/hooks/useDictionary";

export function FooterServices() {
  const dictionary = useDictionary();

  const services = Object.values(
    dictionary.footer.sections.treatments.links,
  );

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
        {dictionary.footer.sections.treatments.title}
      </h3>

      <ul className="mt-5 space-y-3">
        {services.map((service) => (
          <li
            key={service}
            className="text-sm text-slate-400"
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}