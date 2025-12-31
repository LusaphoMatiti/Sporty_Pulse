// app/layout.tsx (SERVER)
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import ClientShell from "./client-shell";
import { ClerkProvider } from "@clerk/nextjs";
import ClientProviders from "./client-providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ClientProviders>
            <Navbar />
            <ClientShell>{children}</ClientShell>
          </ClientProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
