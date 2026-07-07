import { countries } from "../data/countries";

export function CountryGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
      {countries.map((country) => (
        <div
          key={country.name}
          className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-4 transition hover:shadow-md"
        >
          <span className="text-4xl">{country.code}</span>
          <span className="mt-2 font-medium text-slate-700">
            {country.name}
          </span>
        </div>
      ))}
    </div>
  );
}