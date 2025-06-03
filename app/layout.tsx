import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/Responsive";
import Footer from "@/components/Home/Footer/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ThemeProvider from "@/components/ThemeProvider";

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
      <body className={`${font.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <ResponsiveNavbar />
            
            {/* Main Content */}
            <main className="flex-1 pt-20">
              {children}
            </main>
            
            {/* Footer */}
            <Footer />
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
