"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="m-0 bg-slate-950">
        <main className="flex min-h-screen items-center justify-center px-6">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Application error
            </p>

            <h1 className="mt-4 text-3xl font-bold text-white">
              The platform encountered an unexpected problem
            </h1>

            <p className="mt-4 leading-7 text-slate-300">
              Please reload the application or try again in a moment.
            </p>

            <button
              type="button"
              onClick={reset}
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Reload Application
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}