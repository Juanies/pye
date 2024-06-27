import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "@/app/global.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PyE",
  description: "Página web oficial de PyE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <Header/>

        {children}
        </body>
    </html>
  );
}
