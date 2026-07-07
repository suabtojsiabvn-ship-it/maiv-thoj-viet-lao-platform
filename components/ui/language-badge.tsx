import { Badge } from "./badge";

const ICONS: Record<string, string> = {
  English: "🇺🇸",
  Vietnamese: "🇻🇳",
  Hmong: "🏔️",
  French: "🇫🇷",
  Thai: "🇹🇭",
  Lao: "🇱🇦",
};

interface LanguageBadgeProps {
  language: string;
}

export function LanguageBadge({
  language,
}: LanguageBadgeProps) {
  return (
    <Badge variant="outline">
      {ICONS[language] ?? "🌐"} {language}
    </Badge>
  );
}