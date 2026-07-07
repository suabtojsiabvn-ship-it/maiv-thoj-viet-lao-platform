import Link from "next/link";

import { site } from "@/content/site";

export function FooterNavigation() {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
        Quick Links
      </h3>

      <ul className="mt-5 space-y-3">
        {site.navigation.main.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}