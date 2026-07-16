import { site } from "@/content/site";

export function FooterContact() {
  const phones = [
    site.contact.phone.vietnam,
    site.contact.phone.laos,
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
        Contact
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
            {site.contact.whatsapp.label}:{" "}
            {site.contact.whatsapp.value}
          </a>
        </li>
      </ul>
    </div>
  );
}