import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { siteConfig } from "@/config/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },

  description: siteConfig.defaultDescription,

  applicationName: siteConfig.name,

  keywords: [
    "SEOC",
    "Sweat Equity over Cash",
    "commerce infrastructure",
    "ecommerce development",
    "landing page development",
    "storefront optimization",
    "conversion optimization",
    "technical SEO",
    "website performance",
    "Next.js development",
  ],

  manifest: "/manifest.webmanifest",

  alternates: {
    canonical: siteConfig.url,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: siteConfig.url,

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [siteConfig.ogImage],
  },

  icons: {
    icon: [
      {
        url: siteConfig.icons.icon192,
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: siteConfig.icons.icon512,
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: siteConfig.icons.icon192,
      },
    ],

    shortcut: [siteConfig.icons.icon192],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}