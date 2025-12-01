import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
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

const BASE_URL = "https://whitewallrenovation.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${companyInfo.name} | Ontario's Premier Home Renovation Experts`,
    template: `%s | ${companyInfo.name}`,
  },
  description:
    "Transform your home with White Wall Renovation. Expert basement renovation, flooring, tiling, deck construction, interior painting & more across Ontario. Get your free quote today!",
  keywords: [
    "home renovation Ontario",
    "basement renovation",
    "flooring installation",
    "tiling services",
    "deck construction",
    "interior painting",
    "drywall installation",
    "handyman services",
    "Toronto renovation",
    "home improvement",
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: companyInfo.name,
    title: `${companyInfo.name} | Ontario's Premier Home Renovation Experts`,
    description:
      "Transform your home with White Wall Renovation. Expert basement renovation, flooring, tiling, deck construction, interior painting & more across Ontario.",
    url: BASE_URL,
    images: [
      {
        url: `/images/twitter.png`,
        width: 1200,
        height: 630,
        alt: "White Wall Renovation - Home Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.name} | Ontario's Premier Home Renovation Experts`,
    description:
      "Transform your home with White Wall Renovation. Expert basement renovation, flooring, tiling, deck construction, interior painting & more.",
    images: [`/images/twitter.png`],
  },

  icons: {
    icon: "/images/logo_white_background.png",
    apple: "/images/logo_white_background.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "verification_code_here",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: companyInfo.name,
  image: `${BASE_URL}/images/logo.png`,
  description:
    "Ontario's premier home renovation company specializing in basement renovations, flooring, tiling, deck construction, and more.",
  url: BASE_URL,
  telephone: companyInfo.phone,
  email: companyInfo.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "CA",
    addressRegion: "ON",
  },
  priceRange: "$$",
  areaServed: "ON",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "15",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={BASE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e4b8f" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="manifest" href="/manifest.json" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          strategy="afterInteractive"
        />
      </head>
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
