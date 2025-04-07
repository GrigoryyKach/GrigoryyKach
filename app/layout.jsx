import { Analytics } from "@vercel/analytics/react";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components imports
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";
import { Toaster } from "@/components/ui/toaster";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata = {
  title: "Hryhorii Kachurovskyi | Front-end developer",
  description: "My porfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairEffect />
        <PageTransition>
          {children}
        </PageTransition>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
