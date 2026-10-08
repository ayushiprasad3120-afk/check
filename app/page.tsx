import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { StatsSection } from "@/components/home/stats-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { TrafficPreview } from "@/components/home/traffic-preview";
import { VerticalsMarquee } from "@/components/home/verticals-marquee";
import { WhyUsPreview } from "@/components/home/why-us-preview";
import { CtaSection } from "@/components/home/cta-section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "VisionovaHQ — Global Performance Advertising Network",
  description:
    "VisionovaHQ connects advertisers with high-quality, fraud-verified traffic worldwide, and publishers with exclusive, high-payout campaigns.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesPreview />
      <TrafficPreview />
      <VerticalsMarquee />
      <WhyUsPreview />
      <CtaSection />
    </>
  );
}
