import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ResponsiveNavbar } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ThemeToggle from "@/components/ui/Theme/ThemeToggle";
import ThemeProvider from "@/components/ui/Theme/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "GeoSME Batangas",
    template: "%s | GeoSME Batangas",
  },
  description:
    "Discover Small and Medium Enterprises in Batangas with advanced mapping technology. Features business directory, fintech adoption insights, density analytics, and business owner dashboard for comprehensive market intelligence.",
  metadataBase: new URL("https://geosme.vercel.app"),
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
            <main className="flex-1  pt-20 justify-center items-center">
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
