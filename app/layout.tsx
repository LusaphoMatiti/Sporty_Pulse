// app/layout.tsx (SERVER)
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import ClientShell from "./client-shell";
import { ClerkProvider } from "@clerk/nextjs";
import ClientProviders from "./client-providers";
import Footer from "@/components/footer/Footer";
import CTA from "@/components/footer/CTA";

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
            {children}
            <CTA />
            <Footer />
          </ClientProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
