import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/Responsive";
import ThemeToggle from "@/components/ThemeToggle";
import ThemeScript from "@/components/ThemeScript";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "GeoSME",
  description: "GeoSME Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
      </head>
      <body className={`${font.className} antialiased`}>
        <ResponsiveNavbar />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
