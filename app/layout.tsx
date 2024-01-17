import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

interface CustomMetadata extends Metadata {
  favicon?: string;
}

export const metadata: CustomMetadata = {
  title: "Portfolio Kliapko Oleh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <div id="modal-root"></div>
        </body>
      </html>
    </>
  );
}
