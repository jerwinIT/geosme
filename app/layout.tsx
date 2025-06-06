import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/ui/Navbar/Responsive";
import Footer from "@/components/ui/Footer";
import ThemeToggle from "@/components/ui/Theme/ThemeToggle";
import ThemeProvider from "@/components/ui/Theme/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <ResponsiveNavbar />

            {/* Main Content */}
            <main className="flex-1 pt-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[100px]">
              {children}
            </main>

            {/* Footer */}
            <Footer />

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </ThemeProvider>

        <SpeedInsights />
      </body>
    </html>
  );
}
