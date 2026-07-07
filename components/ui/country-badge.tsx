import { Badge } from "./badge";

const FLAGS: Record<string, string> = {
  USA: "🇺🇸",
  Australia: "🇦🇺",
  France: "🇫🇷",
  Vietnam: "🇻🇳",
  Thailand: "🇹🇭",
  Laos: "🇱🇦",
  Germany: "🇩🇪",
  Switzerland: "🇨🇭",
};

interface CountryBadgeProps {
  country: string;
}

export function CountryBadge({
  country,
}: CountryBadgeProps) {
  return (
    <Badge variant="cyan">
      {FLAGS[country] ?? "🌍"} {country}
    </Badge>
  );
}