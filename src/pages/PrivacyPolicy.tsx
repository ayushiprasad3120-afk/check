import Seo from "../components/Seo";
import LegalLayout from "../components/LegalLayout";
import { ADVERTISER_NAME, PRIVACY_EMAIL } from "../config/campaign";

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title={`Privacy Policy | ${ADVERTISER_NAME}`}
        description={`How ${ADVERTISER_NAME} collects, uses, and protects your information.`}
        path="/privacy-policy"
      />
      <LegalLayout title="Privacy Policy" updated="January 2026 (placeholder — confirm before launch)">
        <p>
          This Privacy Policy explains how {ADVERTISER_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
          or &ldquo;our&rdquo;) collects, uses, shares, and protects information in connection
          with our auto insurance lead-generation website. This is a general template intended
          for a U.S. audience and should be reviewed by qualified legal counsel before launch.
        </p>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Information We Collect
          </h2>
          <p>
            When you use our quote form or contact us, we may collect information such as your
            name, email address, phone number, ZIP code, state, date of birth, vehicle details,
            driving history, insurance status, and coverage preferences. We do not ask for your
            Social Security number through this website, and we do not request a driver&rsquo;s
            license number unless a legally reviewed backend process is added in the future. We
            may also automatically collect technical information such as IP address, browser
            type, device information, and pages visited through cookies and similar technologies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            How We Use Information
          </h2>
          <p>
            We use the information you provide to operate our lead-generation service, including
            to help connect you with licensed insurance professionals or participating providers
            who may be able to assist with auto insurance options, to respond to inquiries, to
            improve our website, and to comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Sharing Your Information
          </h2>
          <p>
            We may share the information you submit with participating insurance professionals,
            agencies, or service providers who assist us in operating our website and connecting
            consumers with auto insurance options. We may also share information with vendors that
            provide analytics, hosting, or call-tracking services on our behalf. We do not sell
            your information to unrelated third parties for purposes unrelated to the service you
            requested, except as may be permitted or required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Cookies and Analytics
          </h2>
          <p>
            We and our service providers may use cookies, pixels, and similar technologies to
            operate the site, measure performance, and support marketing and call-tracking
            attribution. You can typically control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Marketing Communications
          </h2>
          <p>
            If you consent, we and participating insurance professionals may contact you by
            phone, text message, or email regarding auto insurance, including through automated
            technology where permitted by applicable law. Consent is not a condition of purchasing
            insurance or any other service. You may opt out of marketing communications at any
            time by contacting us using the information below or by following opt-out
            instructions provided in a specific communication.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Data Security
          </h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards designed to
            protect the information we collect. No method of transmission or storage is completely
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Data Retention
          </h2>
          <p>
            We retain information for as long as reasonably necessary to fulfill the purposes
            described in this policy, unless a longer retention period is required or permitted
            by law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            State Privacy Rights
          </h2>
          <p>
            Depending on where you live, you may have additional privacy rights under applicable
            state law, which may include rights to access, correct, delete, or limit the use of
            certain personal information, and to opt out of certain sharing. See our{" "}
            <a href="/ccpa" className="text-[var(--color-blue-primary)] underline">
              CCPA / State Privacy Rights
            </a>{" "}
            page for more information. We do not make blanket claims that we are automatically
            subject to every state privacy law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise a privacy right,
            contact us at{" "}
            <a href={`mailto:${PRIVACY_EMAIL}`} className="text-[var(--color-blue-primary)] underline">
              {PRIVACY_EMAIL}
            </a>
            . This email address is a placeholder and must be replaced with a monitored, reviewed
            contact before launch. We have not listed a physical office address; add one only if
            accurate and required.
          </p>
        </section>
      </LegalLayout>
    </>
  );
}
