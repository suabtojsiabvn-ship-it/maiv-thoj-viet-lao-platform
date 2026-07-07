import { CheckCircle2 } from "lucide-react";

interface BookingSuccessProps {
  title?: string;
  description?: string;
}

export function BookingSuccess({
  title = "Request Sent Successfully",
  description = "Thank you. Our team will contact you shortly to discuss your consultation.",
}: BookingSuccessProps) {
  return (
    <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-10 text-center">
      <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400" />

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-300">
        {description}
      </p>
    </div>
  );
}