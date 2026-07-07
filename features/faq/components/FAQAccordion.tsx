"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

import type { FAQItem } from "../types/faq.types";

interface FAQAccordionProps {
  item: FAQItem;
}

export function FAQAccordion({
  item,
}: FAQAccordionProps) {
  const [open, setOpen] = useState(false);

  const contentId = useId();

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition-all duration-300 hover:border-cyan-500/30">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={contentId}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-slate-800/40"
      >
        <h3 className="text-lg font-semibold text-white">
          {item.question}
        </h3>

        <ChevronDown
          size={22}
          aria-hidden="true"
          className={`flex-shrink-0 text-cyan-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={contentId}
        className={`grid transition-all duration-300 ${
          open
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-800 px-6 py-5 leading-8 text-slate-300">
            {item.answer}
          </div>
        </div>
      </div>
    </article>
  );
}