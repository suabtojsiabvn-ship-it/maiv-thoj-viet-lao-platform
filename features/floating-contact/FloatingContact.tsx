"use client";

import { MessageCircle, Phone, Send } from "lucide-react";

const contactItems = [
  {
    label: "Talk with Maiv Thoj",
    href: "#booking",
    icon: MessageCircle,
  },
  {
    label: "Talk with A Su",
    href: "#booking",
    icon: Send,
  },
  {
    label: "Call Now",
    href: "tel:+84000000000",
    icon: Phone,
  },
];

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <div className="hidden flex-col gap-3 md:flex">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/90 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-cyan-950/30 backdrop-blur-xl transition hover:border-cyan-300/50 hover:bg-cyan-500 hover:text-slate-950"
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>

      <div className="flex w-[calc(100vw-2.5rem)] items-center justify-between gap-2 rounded-2xl border border-cyan-400/20 bg-slate-950/95 p-2 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl md:hidden">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl px-2 py-3 text-center text-[11px] font-semibold text-slate-200 transition hover:bg-cyan-500 hover:text-slate-950"
            >
              <Icon className="h-5 w-5" />
              <span>{item.label.replace("Talk with ", "")}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}