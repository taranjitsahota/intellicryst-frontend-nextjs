import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MainWrapper from "@/components/layout/MainWrapper";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://intellicryst.com"),
  title:
    "Software Development Company in Navi Mumbai | Serving Clients Worldwide - Intellicryst",
  description:
    "Looking for the best software development company in Navi Mumbai? Intellicryst is serving clients worldwide, mobile & cloud solutions. Get a free consultation today.",
  keywords: [
    "software development company in navi mumbai",
    "mobile app development company navi mumbai",
    "web development company india",
    "cloud engineering services",
  ],
  openGraph: {
    title: "Best Software Development Company in Navi Mumbai | Intellicryst",
    description:
      "We build scalable web, mobile & cloud solutions for modern businesses. Get a free consultation today.",
    url: "https://intellicryst.com",
    siteName: "Intellicryst",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZEEY001DKD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZEEY001DKD', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </body>
    </html>
  );
}
