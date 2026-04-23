import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Mobile World | Authorized Mi Store in Alambagh, Lucknow",
  description: "Mobile World - The Future of Tech in Lucknow. Premier Mi Experience Center in Alambagh. Find Xiaomi 14 Ultra, Redmi Note 13 Pro+, Mi Smart TV and more.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobilePhoneStore",
  "name": "Mobile World",
  "description": "Authorized Mi Store",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "569/165, Kanpur Main Road, near Piccadilly Hotel, Sector B, Bargawan, LDA Colony",
    "addressLocality": "Lucknow",
    "addressRegion": "UP",
    "postalCode": "226012",
    "addressCountry": "IN"
  },
  "telephone": "+91-9005144137"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
