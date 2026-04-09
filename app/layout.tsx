import type {Metadata} from "next";
import {Geist, Geist_Mono, Open_Sans} from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "@/components/NavBar";


const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: "variable"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ResourceAI",
  description: "Cross-platform AI Resource Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <NavBar />
        
        <main>
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
