import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/", // Home page is public
  "/about", // About page is public
  "/products(.*)", // Any /products pages are public
  "/sign-in", // Sign-in page must be public
  "/sign-up", // Sign-up page must be public
]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (_auth, req) => {
  const isAdminUser =
    (await _auth()).userId === process.env.NEXT_PUBLIC_ADMIN_USER_ID;

  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!isPublicRoute(req)) {
    await _auth();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};
