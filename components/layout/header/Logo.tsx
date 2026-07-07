import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white font-bold">
        AN
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold">
          An Nhien Dental
        </span>

        <span className="text-xs text-muted-foreground">
          Smile Journey Vietnam
        </span>
      </div>
    </Link>
  );
}