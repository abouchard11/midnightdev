import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "midnightdev.dev";

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0];
  const isLocal = host === "localhost" || host === "127.0.0.1";
  const isVercelPreview =
    process.env.VERCEL_ENV === "preview" && host.endsWith(".vercel.app");

  if (host !== CANONICAL_HOST && !isLocal && !isVercelPreview) {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.port = "";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon-.*\\.png|apple-touch-icon\\.png).*)",
  ],
};
