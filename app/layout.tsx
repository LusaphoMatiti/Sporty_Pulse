"use client";

import "@/styles/globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  ClerkLoaded,
  SignIn,
} from "@clerk/nextjs";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import { Providers } from "./providers";

import { isPublicRoute } from "@/utils/publicRoutes";
import { usePathname } from "next/navigation"; // get current path

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Providers>
            <Navbar />
            <Container className="py-20">
              {isPublicRoute(pathname) ? (
                children
              ) : (
                // Protected pages show SignedIn / SignedOut logic
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
        </body>
      </html>
    </ClerkProvider>
  );
}
