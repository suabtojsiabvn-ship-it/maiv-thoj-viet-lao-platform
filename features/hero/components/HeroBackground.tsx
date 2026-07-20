"use client";

import { Floating } from "@/components/motion";

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

      <Floating>
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] md:h-[38rem] md:w-[38rem]" />
      </Floating>

      <Floating>
        <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-emerald/10 blur-[130px]" />
      </Floating>
    </>
  );
}
