import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novantys Solutions | Assurance & Financement",
  description: "Votre partenaire confiance en assurance et financement. Accompagnement personnalisé pour particuliers et professionnels.",
  icons: {
    icon: [
      { url: "/assets/images/logo-dor-removebg-preview.png" },
      { url: "/assets/images/logo-dor-removebg-preview.png", type: "image/png" },
      { url: "/assets/images/logo-noir-removebg-preview.png", type: "image/png" },
    ],
    shortcut: ["/assets/images/logo-dor-removebg-preview.png"],
    apple: ["/assets/images/logo-dor-removebg-preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`dark:bg-black ${inter.className}`}>
        <Providers>
          <Lines />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
