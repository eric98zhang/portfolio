import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if user is signed in, redirect them away from the login page
  if (user && req.nextUrl.pathname === "/locked/login") {
    return NextResponse.redirect(new URL("/locked", req.url));
  }

  // if user is not signed in, redirect them to the login page
  if (!user && req.nextUrl.pathname !== "/locked/login") {
    return NextResponse.redirect(new URL("/locked/login", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/locked", "/locked/:path*"],
};
