import type { Metadata } from "next";
import { Merriweather, Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

// Main font (serif for elegant headings)
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
});

// Secondary font (sans-serif for body text)
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "J & S Wedding | Under the Northern Lights",
  description: "Join us for our magical wedding day under the northern lights",
  keywords: ["wedding", "aurora", "northern lights", "invitation", "rsvp"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${roboto.variable} font-sans scroll-smooth`}
    >
      <ClientBody>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </ClientBody>
    </html>
  );
}
