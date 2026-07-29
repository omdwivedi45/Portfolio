import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { USER_PROFILE } from "@/data/portfolioData";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: `${USER_PROFILE.name} | ${USER_PROFILE.title}`,
  description: USER_PROFILE.tagline,
  keywords: [
    "Full Stack Engineer",
    "Next.js Developer",
    "TypeScript Architect",
    "Software Engineer Portfolio",
    "React Developer",
  ],
  authors: [{ name: USER_PROFILE.name }],
  openGraph: {
    title: `${USER_PROFILE.name} | Portfolio`,
    description: USER_PROFILE.tagline,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-zinc-100 antialiased selection:bg-purple-500/30 selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
