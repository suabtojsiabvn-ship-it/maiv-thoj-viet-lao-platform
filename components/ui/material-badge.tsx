import { Badge } from "./badge";

const MATERIAL_ORIGIN: Record<string, string> = {
  Cercon: "🇩🇪",
  Nacera: "🇩🇪",
  "HT Smile": "🇩🇪",
  "Lava Plus": "🇺🇸",
  "E.max": "🇨🇭",
};

interface MaterialBadgeProps {
  material: string;
}

export function MaterialBadge({
  material,
}: MaterialBadgeProps) {
  return (
    <Badge variant="cyan">
      {MATERIAL_ORIGIN[material] ?? "🦷"} {material}
    </Badge>
  );
}