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
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {services.map((service) => {
        const Icon = serviceIcons[service.id];

        return (
          <article
            key={service.id}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/5"
          >
            <div className="flex items-start gap-4">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300"
              >
                <Icon className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
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
