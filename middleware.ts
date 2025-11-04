import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/", // Home page is public
  "/about", // About page is public
  "/products(.*)", // Any /products pages are public
  "/sign-in", // Sign-in page must be public
  "/sign-up", // Sign-up page must be public
]);

export default clerkMiddleware(async (_auth, req) => {
  if (!isPublicRoute(req)) {
    await _auth();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};
