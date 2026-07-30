import type { Metadata } from "next";
import "./globals.css";
import { Inter, Caveat } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const caveat = Caveat({ subsets: ["latin"], variable: '--font-caveat' });

export const metadata: Metadata = {
  title: "Peeyush Nanhe - Premium Developer Portfolio",
  description: "Senior Mobile Architect and Flutter Expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${caveat.variable} font-sans bg-background text-foreground antialiased`}>
        <div className="aurora-bg" aria-hidden="true"></div>
        <div className="noise-overlay" aria-hidden="true"></div>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
