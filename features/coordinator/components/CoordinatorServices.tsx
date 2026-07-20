import {
  CalendarDays,
  Camera,
  Languages,
  MapPinned,
  Plane,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type {
  CoordinatorService,
  CoordinatorServiceId,
} from "../types/coordinator.types";

interface CoordinatorServicesProps {
  services: CoordinatorService[];
}

const serviceIcons: Record<CoordinatorServiceId, LucideIcon> = {
  planning: CalendarDays,
  airportWelcome: Plane,
  communication: Languages,
  coordination: MapPinned,
  memories: Camera,
};

export function CoordinatorServices({
  services,
}: CoordinatorServicesProps) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 md:gap-5">
      {services.map((service) => {
        const Icon = serviceIcons[service.id];

        return (
          <article
            key={service.id}
            className="group h-full rounded-3xl border border-primary/15 bg-card/65 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-secondary/80 sm:p-5"
          >
            <div className="flex items-start gap-4">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary"
              >
                <Icon className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
