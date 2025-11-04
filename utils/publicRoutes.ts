// utils/publicRoutes.ts
export const publicRoutes = [
  "/",
  "/about",
  "/products(.*)",
  "/sign-in",
  "/sign-up",
];

export function isPublicRoute(pathname: string) {
  return publicRoutes.some((pattern) =>
    new RegExp(`^${pattern}$`).test(pathname)
  );
}
