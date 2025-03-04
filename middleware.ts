import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // The middleware no longer needs to handle authentication for /locked paths
  // as those pages have been removed
  return NextResponse.next();
}

// Remove the matcher since we no longer need to match /locked paths
export const config = {
  matcher: [], // Empty matcher - middleware won't be applied to any routes
};
