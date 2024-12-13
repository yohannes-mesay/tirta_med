import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Hero/Header";
import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "TirtaMed",
  description: "Generated by create next app",
  // icons: {
  //   icon: "/logo.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="designer" content="Yohannes Mesay" />

      <body className={`${roboto.className}`}>
        <Header />
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
