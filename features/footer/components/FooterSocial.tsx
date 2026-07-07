import { site } from "@/content/site";

export function FooterSocial() {
  const socials = Object.values(site.socials).filter(
    (social) => social.url
  );

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
        Follow Us
      </h3>

      <ul className="mt-5 space-y-3">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}