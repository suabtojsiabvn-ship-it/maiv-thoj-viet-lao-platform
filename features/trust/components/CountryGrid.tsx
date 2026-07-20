interface Country {
  code: string;
  name: string;
}

interface CountryGridProps {
  countries: Country[];
}

export function CountryGrid({
  countries,
}: CountryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
      {countries.map((country) => (
        <div
          key={country.name}
          className="group rounded-2xl border border-primary/15 bg-gradient-to-b from-secondary to-background p-4 text-center shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-xl hover:shadow-primary/10 sm:p-5 lg:p-6"
        >
          <div className="text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
            {country.code}
          </div>

          <h3 className="mt-3 text-sm font-semibold text-foreground sm:mt-4 sm:text-base">
            {country.name}
          </h3>

          <div className="mx-auto mt-3 h-px w-10 bg-primary/40 sm:mt-4" />
        </div>
      ))}
    </div>
  );
}
