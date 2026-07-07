const services = [
  "Dental Tourism",
  "Medical Concierge",
  "Plastic Surgery",
  "Airport Pickup",
];

export function FooterServices() {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
        Services
      </h3>

      <ul className="mt-5 space-y-3">
        {services.map((service) => (
          <li
            key={service}
            className="text-sm text-slate-400"
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}