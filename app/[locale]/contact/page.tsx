import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { Container, Section } from "@/components/ui";
import { contactInfo } from "@/content/contact";
import { getDictionary } from "@/content/locales";
import { buildMetadata, getSeoKeywords } from "@/content/seo";
import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

interface ContactPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);
  const contact = dictionary.pages.contact;
  const currentLocale = locale as Locale;

  return buildMetadata({
    title: contact.seo.title,
    description: contact.seo.description,
    canonical: `/${locale}/contact`,
    keywords: getSeoKeywords(currentLocale, "contact"),
    locale,
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const contact = dictionary.pages.contact;

  const standardCardClass =
    "group rounded-[1.75rem] border border-[#D6A84B]/20 bg-[#15130F] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#D6A84B]/50 hover:bg-[#1D1912] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9CC82] focus-visible:ring-offset-4 focus-visible:ring-offset-[#090806] sm:p-8";

  return (
    <main className="min-h-screen overflow-hidden bg-[#090806] text-[#F8F4EC]">
      <Section spacing="lg" className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(214,168,75,0.12),transparent_68%)]"
        />

        <Container>
          <div className="relative mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-[#D6A84B]/35 bg-[#D6A84B]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#E9CC82] sm:px-5">
                {contact.badge}
              </span>

              <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight tracking-tight text-[#F7F3EA] sm:text-5xl lg:text-6xl">
                {contact.heading}
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#B8B0A2] sm:mt-6 sm:text-lg sm:leading-8">
                {contact.description}
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 sm:mt-16 sm:gap-6">
              <Link
                href={contactInfo.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[1.75rem] border border-[#176B5B]/70 bg-[#0C1713] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#2A8A77] hover:bg-[#10221C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7FC9B9] focus-visible:ring-offset-4 focus-visible:ring-offset-[#090806] sm:p-8"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl border border-[#176B5B]/70 bg-[#176B5B]/15 text-[#7FC9B9]">
                  <MessageCircle aria-hidden="true" className="size-6" />
                </span>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#7FC9B9]">
                  {contactInfo.whatsapp.label}
                </p>

                <h2 className="mt-3 break-words font-[family-name:var(--font-display)] text-2xl font-semibold text-[#F7F3EA]">
                  {contactInfo.whatsapp.value}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#B8B0A2] sm:text-base">
                  {contact.channels.whatsapp.description}
                </p>
              </Link>

              <Link href={contactInfo.email.href} className={standardCardClass}>
                <span className="flex size-12 items-center justify-center rounded-2xl border border-[#D6A84B]/30 bg-[#D6A84B]/10 text-[#E9CC82]">
                  <Mail aria-hidden="true" className="size-6" />
                </span>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#E9CC82]">
                  {contactInfo.email.label}
                </p>

                <h2 className="mt-3 break-all font-[family-name:var(--font-display)] text-xl font-semibold text-[#F7F3EA] sm:text-2xl">
                  {contactInfo.email.value}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#B8B0A2] sm:text-base">
                  {contact.channels.email.description}
                </p>
              </Link>

              <Link
                href={contactInfo.phone.vietnam.href}
                className={standardCardClass}
              >
                <span className="flex size-12 items-center justify-center rounded-2xl border border-[#D6A84B]/30 bg-[#D6A84B]/10 text-[#E9CC82]">
                  <Phone aria-hidden="true" className="size-6" />
                </span>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#E9CC82]">
                  {contactInfo.phone.vietnam.label}
                </p>

                <h2 className="mt-3 break-words font-[family-name:var(--font-display)] text-2xl font-semibold text-[#F7F3EA]">
                  {contactInfo.phone.vietnam.value}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#B8B0A2] sm:text-base">
                  {contact.channels.vietnamPhone.description}
                </p>
              </Link>

              <Link
                href={contactInfo.phone.laos.href}
                className={standardCardClass}
              >
                <span className="flex size-12 items-center justify-center rounded-2xl border border-[#D6A84B]/30 bg-[#D6A84B]/10 text-[#E9CC82]">
                  <Phone aria-hidden="true" className="size-6" />
                </span>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#E9CC82]">
                  {contactInfo.phone.laos.label}
                </p>

                <h2 className="mt-3 break-words font-[family-name:var(--font-display)] text-2xl font-semibold text-[#F7F3EA]">
                  {contactInfo.phone.laos.value}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#B8B0A2] sm:text-base">
                  {contact.channels.laosPhone.description}
                </p>
              </Link>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-[#D6A84B]/25 bg-[#1D1912] p-6 text-center shadow-[0_20px_65px_rgba(0,0,0,0.2)] sm:mt-10 sm:p-9">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#F7F3EA] sm:text-3xl">
                {contact.cta.heading}
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#B8B0A2] sm:text-base">
                {contact.cta.description}
              </p>

              <Link
                href={`/${locale}/booking`}
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#D6A84B] px-7 py-3 text-sm font-semibold text-[#15130F] shadow-[0_14px_40px_rgba(214,168,75,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E9CC82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9CC82] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1D1912] sm:px-9"
              >
                {contact.cta.label}
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
