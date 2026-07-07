import { beforeAfterCases } from "../data/before-after.data";
import { BeforeAfterCard } from "./BeforeAfterCard";

export function BeforeAfterGrid() {
  return (
    <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2">
      {beforeAfterCases.map((item) => (
        <BeforeAfterCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}