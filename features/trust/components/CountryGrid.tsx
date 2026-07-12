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
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {countries.map((country) => (
        <div
          key={country.name}
          className="group rounded-2xl border border-cyan-500/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
        >
          <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
            {country.code}
          </div>

          <h3 className="mt-4 text-base font-semibold text-white">
            {country.name}
          </h3>

          <div className="mx-auto mt-4 h-px w-10 bg-cyan-500/30" />
        </div>
      ))}
    </div>
  );
}