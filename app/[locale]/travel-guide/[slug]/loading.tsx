export default function TravelGuideDetailLoading() {
  return (
    <main className="min-h-screen animate-pulse bg-[#090806] px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="h-4 w-40 rounded-full bg-[#D6A84B]/15" />
        <div className="mt-12 h-16 max-w-4xl rounded-2xl bg-[#F7F3EA]/8" />
        <div className="mt-6 h-6 max-w-2xl rounded-xl bg-[#F7F3EA]/8" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="h-36 rounded-2xl border border-[#D6A84B]/10 bg-[#15130F]"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
