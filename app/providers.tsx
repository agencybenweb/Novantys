"use client";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme="dark"
    >
      {children}
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

