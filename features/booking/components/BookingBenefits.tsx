"use client";

import {
  ClipboardList,
  MessageCircle,
  PlaneTakeoff,
  Users,
} from "lucide-react";

import { FeatureCard } from "@/components/shared";

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
    <div className="grid gap-6">
      {booking.benefits.map((benefit) => {
        const Icon = iconMap[benefit.icon];

        return (
          <FeatureCard
            key={benefit.id}
            icon={<Icon className="h-6 w-6" />}
            title={benefit.title}
            description={benefit.description}
          />
        );
      })}
    </div>
  );
}