import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { CookieBanner } from "@/components/cookie-banner";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "RESCA",
    "crop diversity",
    "quinoa",
    "agrobiodiversity",
    "seed conservation",
    "smallholder farmers",
    "Andes",
    "Peru",
    "Bolivia",
    "NGO donation",
    "conservation agreements",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "nonprofit",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Andean farmers standing in a field of colourful native quinoa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf6f1" },
    { media: "(prefers-color-scheme: dark)", color: "#140510" },
  ],
  colorScheme: "light dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  description: site.description,
  slogan: site.tagline,
  email: site.email,
  logo: `${site.url}/images/logo-640.png`,
  image: `${site.url}/images/og.jpg`,
  areaServed: site.countries.map((c) => ({ "@type": "Country", name: c })),
  knowsAbout: [
    "Crop diversity conservation",
    "Quinoa landraces",
    "Agrobiodiversity",
    "Seed systems",
  ],
  potentialAction: {
    "@type": "DonateAction",
    name: "Donate to RESCA",
    target: `${site.url}/#donate`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        {/* Preload the LCP hero image (AVIF) — must match ResponsiveImage's
            srcset (ASSET_VERSION=4) so the browser reuses the same download. */}
        <link
          rel="preload"
          as="image"
          type="image/avif"
          imageSrcSet="/images/hero-field-480.avif?v=4 480w, /images/hero-field-960.avif?v=4 960w, /images/hero-field-1600.avif?v=4 1600w"
          imageSizes="100vw"
          fetchPriority="high"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-primary-contrast focus:font-semibold"
            >
              Skip to content
            </a>
            {children}
            <CookieBanner />
          </LanguageProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
