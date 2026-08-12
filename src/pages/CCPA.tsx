import Seo from "../components/Seo";
import LegalLayout from "../components/LegalLayout";
import { ADVERTISER_NAME, PRIVACY_EMAIL } from "../config/campaign";

export default function CCPA() {
  return (
    <>
      <Seo
        title={`CCPA / State Privacy Rights | ${ADVERTISER_NAME}`}
        description="Information about state privacy rights that may apply to residents of certain U.S. states."
        path="/ccpa"
      />
      <LegalLayout title="CCPA / State Privacy Rights">
        <p>
          Depending on where you live, you may have additional privacy rights under applicable
          state law, such as the California Consumer Privacy Act (CCPA), as amended by the
          California Privacy Rights Act (CPRA), and similar laws in other states. This page is a
          general template and does not constitute legal advice. We do not claim that{" "}
          {ADVERTISER_NAME} is automatically subject to every state privacy law — applicability
          depends on factors such as company size, revenue, and the volume of data processed.
        </p>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Rights That May Apply to You
          </h2>
          <p>Where applicable state law grants these rights, you may be able to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Request access to the categories or specific pieces of personal information we hold about you.</li>
            <li>Request correction of inaccurate personal information.</li>
            <li>Request deletion of personal information, subject to certain exceptions.</li>
            <li>Opt out of the sale or sharing of personal information, where applicable.</li>
            <li>Not be discriminated against for exercising your privacy rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            How to Submit a Request
          </h2>
          <p>
            To submit a privacy rights request, contact us at{" "}
            <a href={`mailto:${PRIVACY_EMAIL}`} className="text-[var(--color-blue-primary)] underline">
              {PRIVACY_EMAIL}
            </a>{" "}
            (placeholder — replace with a monitored address before launch). We may need to verify
            your identity before completing certain requests.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[var(--color-navy-deep)]">
            Sharing With Participating Insurance Professionals
          </h2>
          <p>
            As described in our Privacy Policy, information submitted through our quote form may
            be shared with participating licensed insurance professionals or service providers so
            they can discuss auto insurance options with you. Depending on your state, this
            sharing may be considered a &ldquo;sale&rdquo; or &ldquo;share&rdquo; of personal
            information under certain definitions, and you may have the right to opt out.
          </p>
        </section>
      </LegalLayout>
    </>
  );
}
