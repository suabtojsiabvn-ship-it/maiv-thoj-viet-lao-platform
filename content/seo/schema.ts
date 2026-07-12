import { brand } from "@/content/branding";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: brand.name,

  url: "https://maivthojvietlao.com",

  logo: "https://maivthojvietlao.com/images/logo.png",

  description:
    "International Patient Journey Platform supporting Hmong and international patients seeking dental care in Vietnam.",

  sameAs: [
    "https://facebook.com/...", // TODO
    "https://tiktok.com/...",   // TODO
  ],
};