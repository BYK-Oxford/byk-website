import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BYK Oxford",
  description: "BYK Oxford. Your Accounting solution",
  icons: {
    icon: "/logo.png",
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
        {/* site verification for google */}
        <meta
          name="google-site-verification"
          content="-Ia_-3AuF1ufaCrdP7Gc5eyaAkbylox_ZB4NH4Es7Fs"
        />
        {/* site verification for bing */}
        <meta name="msvalidate.01" content="C5476D18650320E358ECB1C4F2CEA6E9" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
