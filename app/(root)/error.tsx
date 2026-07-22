"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Something went wrong
        </p>

        <h1 className="mt-4 text-3xl font-bold text-white">
          We could not load this page
        </h1>

        <p className="mt-4 leading-7 text-slate-300">
          Please try again. If the problem continues, contact our team for
          assistance.
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
