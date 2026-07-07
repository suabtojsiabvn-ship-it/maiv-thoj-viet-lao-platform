import { site } from "@/content/site";

export function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
      <p>
        © {year} {site.branding.name}. All rights reserved.
      </p>

      <p>
        Built for international patient concierge services in Vietnam.
      </p>
    </div>
  );
}