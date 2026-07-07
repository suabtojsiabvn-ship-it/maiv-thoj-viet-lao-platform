import { site } from "@/content/site";

function getPhoneHref(number: string) {
  return `tel:${number.replace(/\s+/g, "")}`;
}

export function FooterContact() {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
        Contact
      </h3>

      <ul className="mt-5 space-y-3">
        {site.contact.phones.map((phone) => (
          <li key={phone.number}>
            <a
              href={getPhoneHref(phone.number)}
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              {phone.label}: {phone.number}
            </a>
          </li>
        ))}

        {site.contact.email && (
          <li>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              {site.contact.email}
            </a>
          </li>
        )}

        <li>
          <a
            href={`https://wa.me/${site.contact.whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-400 transition hover:text-cyan-300"
          >
            WhatsApp: {site.contact.whatsapp}
          </a>
        </li>
      </ul>
    </div>
  );
}