import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import Footer from "./(components)/Footer";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Generated by Ploydy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col max-h-screen bg-yellow-100">
          <Nav />
        </div>
        <div className="flex-grow overflow-y-auto bg-page text-default-text">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
