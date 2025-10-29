import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Background from "./components/Background";

const raleway = localFont({
  src: [
    {
      path: "./assets/fonts/Raleway-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/fonts/Raleway-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/Raleway-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/Raleway-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./assets/fonts/Raleway-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/Raleway-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-raleway",
});

const lato = localFont({
  src: [
    {
      path: "./assets/fonts/Lato-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/fonts/Lato-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./assets/fonts/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/Lato-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./assets/fonts/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/Lato-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-lato",
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
        className={`${raleway.variable} ${lato.variable} antialiased`}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}
