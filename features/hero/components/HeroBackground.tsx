"use client";

import { Floating } from "@/components/motion";

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-slate-950" />

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-slate-950 to-slate-950" />

      <Floating>
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </Floating>

      <Floating>
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[120px]" />
      </Floating>
    </>
  );
}