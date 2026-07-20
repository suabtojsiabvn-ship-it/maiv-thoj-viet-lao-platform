export default function TreatmentDetailLoading() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="h-4 w-40 rounded-full bg-primary/15" />

        <div className="mt-8 h-12 max-w-3xl rounded-2xl bg-card md:h-14" />

        <div className="mt-6 h-6 max-w-2xl rounded-xl bg-card" />

        <div className="mt-10 aspect-[16/9] w-full rounded-3xl border border-primary/10 bg-card md:mt-12 md:aspect-[16/8]" />
      </div>
    </main>
  );
}
