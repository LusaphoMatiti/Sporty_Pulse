"use client";

import { ThemeProvider } from "./theme-switch";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider disableTransitionOnChange>{children}</ThemeProvider>;
}
