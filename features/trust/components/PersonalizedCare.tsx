interface PersonalizedCareProps {
  text: string;
}

export function PersonalizedCare({
  text,
}: PersonalizedCareProps) {
  return (
    <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-primary/25 bg-white/65 px-5 py-5 text-center shadow-sm shadow-black/5 md:mt-10 md:px-6">
      <p className="leading-7 text-[#554e43]">
        {text}
      </p>
    </div>
  );
}
