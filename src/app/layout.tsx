import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Mutalib | Web Developer & Frontend Engineer",
  description: "Futuristic portfolio of Abdul Mutalib, a world-class Web Developer specializing in high-performance, visually stunning digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="bg-background text-foreground selection:bg-accent-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
