import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { companyInfo } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: `${companyInfo.name} | Ontario's Premier Home Renovation Experts`,
    template: `%s | ${companyInfo.name}`,
  },
  description:
    "White Wall Renovation transforms houses into homes across Ontario. Expert basement renovation, flooring, tiling, deck construction, and more. Get your free quote today!",
  keywords: [
    "home renovation",
    "basement renovation",
    "flooring installation",
    "tiling services",
    "deck construction",
    "Ontario renovation",
    "Toronto renovation",
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: companyInfo.name,
    title: `${companyInfo.name} | Ontario's Premier Home Renovation Experts`,
    description:
      "White Wall Renovation transforms houses into homes across Ontario. Expert basement renovation, flooring, tiling, deck construction, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.name} | Ontario's Premier Home Renovation Experts`,
    description:
      "White Wall Renovation transforms houses into homes across Ontario. Expert basement renovation, flooring, tiling, deck construction, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
