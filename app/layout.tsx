// app/layout.tsx (SERVER)
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import ClientShell from "./client-shell";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          <ClientShell>{children}</ClientShell>
        </body>
      </html>
    </ClerkProvider>
  );
}
