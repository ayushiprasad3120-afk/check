import { Link } from "react-router-dom";
import CallButton from "./CallButton";
import { ADVERTISER_NAME, COPYRIGHT_YEAR, CONTACT_EMAIL } from "../config/campaign";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-deep)] text-white/80">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-14 pb-28 lg:pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-display text-xl font-extrabold text-white mb-3">{ADVERTISER_NAME}</p>
            <p className="text-sm leading-relaxed max-w-xs">
              An auto insurance connection and lead-generation service helping U.S. drivers
              explore coverage options.
            </p>
            <div className="mt-5">
              <CallButton variant="ghost" className="!border-white/30 !text-white hover:!bg-white/10" />
            </div>
          </div>

          <div>
            <p className="font-display font-semibold text-white mb-3">Company</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#coverage-hero" className="hover:text-white">
                  Auto Insurance
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display font-semibold text-white mb-3">Legal</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/ccpa" className="hover:text-white">
                  CCPA / State Privacy Rights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display font-semibold text-white mb-3">Contact</p>
            <p className="text-sm">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white break-all">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="text-xs text-white/50 mt-1">Placeholder — replace before launch.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 space-y-3 text-xs leading-relaxed text-white/55 max-w-4xl">
          <p>
            {ADVERTISER_NAME} is a marketing and lead-generation service and is not an insurance
            carrier unless expressly stated. Insurance products, coverage availability,
            eligibility, premiums, discounts, and policy terms vary by state and provider.
            Information submitted through this website may be shared with participating insurance
            professionals or service providers as described in our Privacy Policy.
          </p>
          <p>
            Insurance coverage is subject to policy terms, conditions, exclusions, underwriting
            guidelines, and applicable state law.
          </p>
          <p>Not all insurance products or providers are available in every state. Availability and eligibility may vary.</p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {COPYRIGHT_YEAR} {ADVERTISER_NAME}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white">
              Terms
            </Link>
            <Link to="/ccpa" className="hover:text-white">
              CCPA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
