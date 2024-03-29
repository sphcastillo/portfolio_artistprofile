import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "girl in red",
  description: "Marie Ulven Ringheim. Songwriter, Storyteller, Activist, Queer.",
};

export default function RootLayout(
  {
  children,
  }
  : Readonly<
    {
      children: React.ReactNode;
    }
  >) {
  return (

      <html lang="en">
        <body className={inter.className}>
          <ClientProviders>
          {children}
          </ClientProviders>
        </body>
      </html>

  );
}