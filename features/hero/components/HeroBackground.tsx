"use client";

import { Floating } from "@/components/motion";

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(214,168,75,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,168,75,0.08)_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <Floating>
        <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[140px] md:h-[34rem] md:w-[34rem]" />
      </Floating>

      <Floating>
        <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-emerald/10 blur-[130px]" />
      </Floating>
    </>
  );
}
