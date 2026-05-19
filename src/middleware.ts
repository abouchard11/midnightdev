import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "midnightdev.dev";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  // Redirect www to apex domain
  if (host.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    "/((?!_next/static|_next/image|favicon.ico|icon-.*\\.png|apple-touch-icon\\.png).*)",
  ],
};
