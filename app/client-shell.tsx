// app/client-shell.tsx
"use client";

import { SignedIn, SignedOut, ClerkLoaded, SignIn } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { isPublicRoute } from "@/utils/publicRoutes";
import Container from "@/components/global/Container";
import Providers from "@/components/providers";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Providers>
      <Container className="py-20">
        {isPublicRoute(pathname) ? (
          children
        ) : (
          <ClerkLoaded>
            <SignedIn>{children}</SignedIn>
            <SignedOut>
              <div className="flex justify-center mt-20">
                <SignIn routing="hash" signUpUrl="/sign-up" />
              </div>
            </SignedOut>
          </ClerkLoaded>
        )}
      </Container>
    </Providers>
  );
}
