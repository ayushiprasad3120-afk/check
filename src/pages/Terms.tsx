import Seo from "../components/Seo";
import LegalLayout from "../components/LegalLayout";
import { ADVERTISER_NAME, PRIVACY_EMAIL } from "../config/campaign";

export default function Terms() {
  return (
    <>
      <Seo
        title={`Terms & Conditions | ${ADVERTISER_NAME}`}
        description={`The terms and conditions governing use of the ${ADVERTISER_NAME} website.`}
        path="/terms-and-conditions"
      />
      <LegalLayout title="Terms & Conditions" updated="January 2026 (placeholder — confirm before launch)">
        <p>
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the{" "}
          {ADVERTISER_NAME} website. By using this website or submitting the quote form, you agree
          to these Terms. This is a general template and should be reviewed by qualified legal
          counsel before launch.
        </p>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Nature of Our Service
          </h2>
          <p>
            {ADVERTISER_NAME} is a marketing and lead-generation service. Unless expressly stated
            otherwise, we are not an insurance carrier, and we do not underwrite, issue, bind, or
            guarantee any insurance policy. Information you submit may be shared with participating
            licensed insurance professionals or service providers who may contact you regarding
            auto insurance options.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            No Guarantee of Coverage or Pricing
          </h2>
          <p>
            Submitting the quote form does not guarantee eligibility, coverage, approval, a
            particular premium, or that you will be contacted by any specific provider. Coverage
            availability, eligibility, limits, deductibles, and pricing vary by state, insurer,
            driver, vehicle, and individual circumstances, and are ultimately determined by the
            insurance provider through its own underwriting process.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Eligibility
          </h2>
          <p>
            This website is intended for use by individuals located in the United States who are
            legally able to enter into agreements under applicable law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Accuracy of Information
          </h2>
          <p>
            You agree to provide accurate, current, and complete information when using our forms.
            Providing false information may affect your ability to be connected with an insurance
            professional or provider.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Consent to Contact
          </h2>
          <p>
            If you provide consent through our quote form, {ADVERTISER_NAME} and/or participating
            insurance professionals may contact you by phone, text, or email as described in that
            consent disclosure and in our Privacy Policy. Consent is not a condition of purchasing
            insurance or any other service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Intellectual Property
          </h2>
          <p>
            The content, design, and branding of this website are the property of{" "}
            {ADVERTISER_NAME} or its licensors and may not be copied or reused without permission.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Disclaimer &amp; Limitation of Liability
          </h2>
          <p>
            This website and its content are provided &ldquo;as is&rdquo; without warranties of
            any kind. To the fullest extent permitted by law, {ADVERTISER_NAME} disclaims
            liability for any damages arising from your use of this website or reliance on its
            content, including educational content about insurance coverage, which is provided for
            general informational purposes only and is not insurance advice or a binding offer.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. Continued use of the website after
            changes are posted constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Contact Us
          </h2>
          <p>
            Questions about these Terms can be sent to{" "}
            <a href={`mailto:${PRIVACY_EMAIL}`} className="text-[var(--color-blue-primary)] underline">
              {PRIVACY_EMAIL}
            </a>{" "}
            (placeholder — replace before launch).
          </p>
        </section>
      </LegalLayout>
    </>
  );
}
