interface PersonalizedCareProps {
  text: string;
}

export function PersonalizedCare({
  text,
}: PersonalizedCareProps) {
  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-6 py-5 text-center">
      <p className="leading-7 text-slate-700">
        {text}
      </p>
    </div>
  );
}