import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";
import { ThemeProvider } from "@/components/general/theme-provider";
import { ModeToggle } from "@/components/general/theme-toggle";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hector John | Software Engineer & Product Architect",
    template: "%s | Hector John",
  },
  description:
    "I build scalable digital products that bridge the gap between complex code and business value. Focused on performance, strategy, and user experience.",
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "Product Design",
    "UI Design",
    "Next.js Developer",
    "Strategic Web Development",
  ],
  authors: [{ name: "Hector John" }],
  creator: "Hector John",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hector-john.online",
    title: "Hector John | Software Engineer & Product Architect",
    description: "Building scalable digital products that drive business growth.",
    siteName: "Hector John Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hector John | Software Engineer & Product Architect",
    description: "Building scalable digital products that drive business growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
            <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
