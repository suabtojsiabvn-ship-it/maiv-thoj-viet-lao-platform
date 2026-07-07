import {
  ClipboardList,
  MessageCircle,
  PlaneTakeoff,
  Users,
} from "lucide-react";

import { FeatureCard } from "@/components/shared";

import { bookingContent } from "../data/booking-content";
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
  return (
    <div className="grid gap-6">
      {bookingContent.benefits.map((benefit) => {
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