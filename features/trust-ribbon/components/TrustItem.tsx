import type { LucideIcon } from "lucide-react";

interface TrustItemProps {
  label: string;
  description: string;
  icon: LucideIcon;
}

export function TrustItem({ label, description, icon: Icon }: TrustItemProps) {
  return (
    <div className="group flex h-full items-start gap-3.5 rounded-2xl border border-primary/15 bg-background/55 p-4 backdrop-blur transition duration-300 hover:border-primary/40 hover:bg-primary/[0.07]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>

        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
