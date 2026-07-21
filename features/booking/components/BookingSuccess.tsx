import { CheckCircle2 } from "lucide-react";

interface BookingSuccessProps {
  title: string;
  description: string;
}

export function BookingSuccess({ title, description }: BookingSuccessProps) {
  return (
    <div className="rounded-[2rem] border border-[#2f8f79]/30 bg-[#176b5b]/10 p-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-10">
      <CheckCircle2 className="mx-auto h-14 w-14 text-[#7fc7b7]" />

      <h3 className="mt-6 font-serif text-2xl font-semibold text-[#f8f4ec] sm:text-3xl">
        {title}
      </h3>

      <p className="mx-auto mt-3 max-w-md leading-7 text-[#b8b0a2]">
        {description}
      </p>
    </div>
  );
}
