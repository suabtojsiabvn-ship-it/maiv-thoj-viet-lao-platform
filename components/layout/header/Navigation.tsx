import Link from "next/link";

import { navigation } from "@/data/navigation";

export function Navigation() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}