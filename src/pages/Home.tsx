import Seo from "../components/Seo";
import Hero from "../components/Hero";
import CallCTA from "../components/CallCTA";
import QuoteFormSection from "../components/QuoteFormSection";
import TrustSection from "../components/TrustSection";
import HowItWorks from "../components/HowItWorks";
import CoverageSection from "../components/CoverageSection";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <>
      <Seo
        title="InsureDirect | Explore Auto Insurance Options"
        description="Explore auto insurance options and connect with insurance professionals serving U.S. drivers."
        path="/"
      />
      <Hero />
      <CallCTA />
      <QuoteFormSection />
      <TrustSection />
      <HowItWorks />
      <CoverageSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
