import { site } from "@/content/site";

export function FooterBrand() {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl font-bold text-white">
        {site.branding.name}
      </h2>

      <p className="mt-3 max-w-md leading-7 text-slate-400">
        {site.branding.tagline}
      </p>

      <p className="mt-4 text-sm text-slate-500">
        {site.branding.businessLocation}
      </p>
    </div>
  );
}