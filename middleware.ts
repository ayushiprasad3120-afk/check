import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "id_src";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days — standard attribution window

/**
 * First-touch attribution: reads utm_source / gclid on entry and persists
 * a lightweight cookie so the DID resolver can pick the right tracking
 * number on subsequent navigations without re-parsing query params.
 * Does not overwrite an existing cookie (first-touch, not last-touch).
 */
export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const response = NextResponse.next();

  const alreadyTracked = request.cookies.has(COOKIE_NAME);
  if (alreadyTracked) return response;

  const gclid = searchParams.get("gclid");
  const utmSource = searchParams.get("utm_source");
  const utmCampaign = searchParams.get("utm_campaign");

  let source: string | null = null;
  if (gclid || utmSource === "google-ads" || utmSource === "google") {
    source = "google-ads";
  } else if (utmSource) {
    source = utmSource;
  }

  if (source || utmCampaign) {
    response.cookies.set(
      COOKIE_NAME,
      JSON.stringify({ source, campaign: utmCampaign }),
      {
        maxAge: COOKIE_MAX_AGE_SECONDS,
        path: "/",
        sameSite: "lax",
      }
    );
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|icons).*)"],
};
