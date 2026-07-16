import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import {
  Container,
  Section,
} from "@/components/ui";
import { contactInfo } from "@/content/contact";
import { buildMetadata } from "@/content/seo";
import { isSupportedLocale } from "@/lib/i18n-routing";

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

  return buildMetadata({
    title: "Contact Our Patient Journey Team",
    description:
      "Contact Maiv Thoj Viet Lao by WhatsApp, phone or email for dental consultation, journey planning and international patient support in Vietnam.",
    canonical: `/${locale}/contact`,
    locale,
  });
}

export default async function ContactPage({
  params,
}: ContactPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Section spacing="xl">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Contact
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Talk with our patient journey team
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Ask questions, share your dental concerns or begin planning
                your journey to Vietnam. Our team will help you understand the
                next step before you make a decision.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <Link
                href={contactInfo.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
              >
                <MessageCircle className="h-8 w-8 text-cyan-300" />

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {contactInfo.whatsapp.label}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white">
                  {contactInfo.whatsapp.value}
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Chat directly with our team for consultation and journey
                  support.
                </p>
              </Link>

              <Link
                href={contactInfo.email.href}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <Mail className="h-8 w-8 text-cyan-300" />

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {contactInfo.email.label}
                </p>

                <h2 className="mt-3 break-all text-xl font-bold text-white">
                  {contactInfo.email.value}
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Send your questions, travel details or dental information by
                  email.
                </p>
              </Link>

              <Link
                href={contactInfo.phone.vietnam.href}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <Phone className="h-8 w-8 text-cyan-300" />

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {contactInfo.phone.vietnam.label}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white">
                  {contactInfo.phone.vietnam.value}
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Call our Vietnam support number.
                </p>
              </Link>

              <Link
                href={contactInfo.phone.laos.href}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <Phone className="h-8 w-8 text-cyan-300" />

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {contactInfo.phone.laos.label}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white">
                  {contactInfo.phone.laos.value}
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Call our Laos support number.
                </p>
              </Link>
            </div>

            <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <h2 className="text-2xl font-bold text-white">
                Ready to share your dental needs?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                Complete the consultation form so our team can understand your
                case, preferred language and expected travel date.
              </p>

              <Link
                href={`/${locale}/booking`}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}