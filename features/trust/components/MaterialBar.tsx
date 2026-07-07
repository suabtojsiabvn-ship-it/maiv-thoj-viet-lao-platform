import { ShieldCheck } from "lucide-react";

export function MaterialBar() {
  return (
    <div className="mt-12 flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-5 text-center text-white">
      <ShieldCheck className="h-6 w-6 text-cyan-400" />
      <span>
        Certified German • Swiss • USA Premium Ceramic Systems
      </span>
    </div>
  );
}