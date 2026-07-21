"use client";

import {
  ClipboardList,
  MessageCircle,
  PlaneTakeoff,
  Users,
} from "lucide-react";

import { useBooking } from "../hooks/useBooking";
import type { BookingBenefitIcon } from "../types/booking.types";

const iconMap: Record<
  BookingBenefitIcon,
  React.ComponentType<{ className?: string }>
> = {
  "message-circle": MessageCircle,
  "clipboard-list": ClipboardList,
  "plane-takeoff": PlaneTakeoff,
  users: Users,
};

export function BookingBenefits() {
  const { booking } = useBooking();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
      {booking.benefits.map((benefit) => {
        const Icon = iconMap[benefit.icon];

        return (
          <article
            key={benefit.id}
            className="group rounded-2xl border border-[#d6a84b]/15 bg-[#15130f] p-5 transition hover:-translate-y-0.5 hover:border-[#d6a84b]/35 sm:p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d6a84b]/25 bg-[#d6a84b]/10 text-[#e9cc82]">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-[#f8f4ec]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#b8b0a2]">
                  {benefit.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
