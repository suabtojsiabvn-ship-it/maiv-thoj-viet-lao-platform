import { useDictionary } from "@/hooks/useDictionary";

export function useFounder() {
  const { founder } = useDictionary();

  return {
    founder,
  };
}