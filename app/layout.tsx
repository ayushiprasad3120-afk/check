import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallCta } from "@/components/layout/mobile-call-cta";
import { ScrollDepthTracker } from "@/components/shared/scroll-depth-tracker";
import { CampaignProvider } from "@/lib/campaign/campaign-context";
import { ConsentProvider } from "@/lib/consent/consent-context";
import { AnalyticsScripts } from "@/components/consent/analytics-scripts";
import { CookieConsentBanner } from "@/components/consent/cookie-consent-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { organizationJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600"],
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["500"],
});

export const metadata: Metadata = buildMetadata({ path: "/" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}>
      <body className="pb-[68px] lg:pb-0">
        <a
          href="#main-content"
          className="sr-only-focusable fixed left-4 top-4 z-50 rounded-md bg-navy-950 px-4 py-2 text-sm text-white"
        >
          Skip to content
        </a>
        <JsonLd data={organizationJsonLd()} />
        {/*
          CampaignProvider defaults to null here so every non-campaign
          route gets standard organic behavior automatically. The
          `/campaign/[slug]` route layout overrides this value with the
          resolved campaign — see app/campaign/[campaignSlug]/layout.tsx.
        */}
        <CampaignProvider campaign={null}>
          <ConsentProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <MobileCallCta />
            <ScrollDepthTracker />
            <AnalyticsScripts />
            <CookieConsentBanner />
          </ConsentProvider>
        </CampaignProvider>
      </body>
    </html>
  );
}
