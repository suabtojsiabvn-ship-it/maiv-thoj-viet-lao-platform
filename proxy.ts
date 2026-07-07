import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale } from "@/lib/i18n";
import {
  addLocaleToPathname,
  getLocaleFromPathname,
} from "@/lib/i18n-routing";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/manifest.webmanifest") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const locale = getLocaleFromPathname(pathname);

  if (locale) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = addLocaleToPathname(pathname, defaultLocale);

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};