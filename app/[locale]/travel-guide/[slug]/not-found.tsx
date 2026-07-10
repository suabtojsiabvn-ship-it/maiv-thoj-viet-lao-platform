import Link from "next/link";

export default function TravelGuideNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-white">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Travel Guide
        </p>

        <h1 className="mt-4 text-4xl font-bold">Guide not found</h1>

        <p className="mt-4 max-w-xl text-slate-300">
          The travel guide you are looking for is not available or has not been
          published yet.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}