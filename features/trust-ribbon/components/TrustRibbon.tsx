import { Container, Section } from "@/components/ui";

import { trustItems } from "../data/trust-items";

import { TrustItem } from "./TrustItem";

export function TrustRibbon() {
  return (
    <Section className="relative overflow-hidden bg-slate-950 py-10">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl md:p-6">
          <div className="mb-6 flex flex-col gap-2 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Trusted Journey Signals
            </p>

            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Everything You Need to Feel Safe Before You Travel
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {trustItems.map((item) => (
              <TrustItem
                key={item.label}
                label={item.label}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}