import type { Metadata } from "next";
import { Inter, Outfit, Saira, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import ImageRightClickGuard from "@/components/ImageRightClickGuard";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap'
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap'
});

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const SITE_URL = "https://argos-eo.com";
const TR_DESCRIPTION = "Lazer mesafe ölçerler, hedef takip sistemleri ve elektro-optik savunma çözümleri. ODTÜ Teknokent merkezli yerli ve milli teknoloji.";
const EN_DESCRIPTION = "Laser range finders, target tracking systems, and advanced electro-optical defense solutions developed in METU Technopolis.";

export const metadata: Metadata = {
  // Temel Meta
  title: {
    default: "Argos Elektro-Optik | İleri Teknoloji Savunma Çözümleri",
    template: "%s | Argos Elektro-Optik",
  },
  description: `${TR_DESCRIPTION} ${EN_DESCRIPTION}`,
  keywords: [
    "elektro-optik",
    "lazer mesafe ölçer",
    "savunma sanayi",
    "hedef takip sistemi",
    "LIDAR",
    "gömülü sistemler",
    "ODTÜ Teknokent",
    "Argos",
    "Argos Elektro-Optik",
    "laser range finder",
    "Laser Spot Tracker",
    "ASL-40",
    "CSAL",
    "savunma teknolojileri",
    "elektro-optik sistem tasarımı",
    "hibrit batarya",
    "FPGA",
    "Ankara savunma sanayi",
  ],
  icons: {
    icon: "/argos-logo.png",
    apple: "/argos-logo.png",
  },
  authors: [{ name: "Argos Elektro-Optik", url: "https://argos-eo.com" }],
  creator: "Argos Elektro-Optik",
  publisher: "Argos Elektro-Optik",

  // Canonical URL
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      tr: "/",
      en: "/",
    },
  },

  // Open Graph
  openGraph: {
    title: "Argos Elektro-Optik | İleri Teknoloji Savunma Çözümleri",
    description: `${TR_DESCRIPTION} ${EN_DESCRIPTION}`,
    url: SITE_URL,
    siteName: "Argos Elektro-Optik",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/argos-anasayfa.png",
        width: 1200,
        height: 630,
        alt: "Argos Elektro-Optik - İleri Teknoloji Savunma Çözümleri",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Argos Elektro-Optik | İleri Teknoloji Savunma Çözümleri",
    description: `${TR_DESCRIPTION} ${EN_DESCRIPTION}`,
    images: ["/argos-anasayfa.png"],
  },

  // Robots
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

  // Google Search Console doğrulama
  // Google Search Console'dan aldığınız doğrulama kodunu buraya ekleyin
  verification: GOOGLE_SITE_VERIFICATION
    ? {
      google: GOOGLE_SITE_VERIFICATION,
    }
    : undefined,

  // Diğer
  category: "technology",
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Argos Elektro-Optik",
  alternateName: "Argos Electro-Optics",
  url: SITE_URL,
  logo: `${SITE_URL}/argos-logo.png`,
  description: `${TR_DESCRIPTION} ${EN_DESCRIPTION}`,
  availableLanguage: ["tr", "en"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mustafa Kemal Mahallesi, Bilişim İnovasyon Merkezi, ODTÜ Teknokent",
    addressLocality: "Ankara",
    addressCountry: "TR",
  },
  email: "info@argoseo.com",
  sameAs: [
    "https://www.linkedin.com/company/argos-eo",
  ],
  knowsAbout: [
    "Elektro-Optik Sistemler",
    "Lazer Mesafe Ölçer",
    "Hedef Takip Sistemi",
    "LIDAR",
    "Gömülü Sistemler",
    "Savunma Teknolojileri",
  ],
  areaServed: {
    "@type": "Country",
    name: "Turkey",
  },
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Argos Elektro-Optik",
  alternateName: "Argos Electro-Optics",
  url: SITE_URL,
  description: `${TR_DESCRIPTION} ${EN_DESCRIPTION}`,
  inLanguage: ["tr", "en"],
  publisher: {
    "@type": "Organization",
    name: "Argos Elektro-Optik",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/argos-logo.png`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable} ${saira.variable} ${figtree.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <ImageRightClickGuard />
          <GoogleAnalytics />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </LanguageProvider>
        {/* Keep JSON-LD outside <head> to reduce extension-induced head hydration mismatches. */}
        <script
          id="structured-data-org"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          id="structured-data-website"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
      </body>
    </html>
  );
}
