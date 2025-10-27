import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Parallax - Game Dev & AR/VR Club | PESU",
  description: "Parallax is the premier Game Development and AR/VR club at PESU Electronic City Campus. Join us for workshops, hackathons, and immersive tech projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-[#050a15] via-[#0a0f1f] to-[#0f1628]`}
      >
        {children}
      </body>
    </html>
  );
}
