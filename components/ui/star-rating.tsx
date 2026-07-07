import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  max?: number;
}

export function StarRating({
  rating,
  max = 5,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={index}
          size={16}
          className={
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-slate-600"
          }
        />
      ))}
    </div>
  );
}