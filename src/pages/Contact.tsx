import Seo from "../components/Seo";
import LegalLayout from "../components/LegalLayout";
import CallButton from "../components/CallButton";
import { ADVERTISER_NAME, CONTACT_EMAIL, PRIVACY_EMAIL } from "../config/campaign";

export default function Contact() {
  return (
    <>
      <Seo
        title={`Contact Us | ${ADVERTISER_NAME}`}
        description={`Get in touch with ${ADVERTISER_NAME} by phone or email.`}
        path="/contact"
      />
      <LegalLayout title="Contact Us">
        <p>
          Have a question about auto insurance options, your submission, or your privacy rights?
          Reach us using the options below.
        </p>

        <div className="not-prose grid sm:grid-cols-2 gap-4 mt-2">
          <div className="rounded-2xl border border-[var(--color-navy-deep)]/10 p-6">
            <h2 className="font-display font-bold text-[var(--color-navy-deep)] mb-2">Call</h2>
            <p className="text-sm text-[var(--color-text-muted)] mb-4">
              Speak with an available insurance representative or participating service.
            </p>
            <CallButton showNumber />
          </div>
          <div className="rounded-2xl border border-[var(--color-navy-deep)]/10 p-6">
            <h2 className="font-display font-bold text-[var(--color-navy-deep)] mb-2">Email</h2>
            <p className="text-sm text-[var(--color-text-muted)] mb-1">
              General questions:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--color-blue-primary)] underline break-all">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              Privacy questions:{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="text-[var(--color-blue-primary)] underline break-all">
                {PRIVACY_EMAIL}
              </a>
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-3">
              Placeholder addresses — replace with monitored inboxes before launch.
            </p>
          </div>
        </div>
      </LegalLayout>
    </>
  );
}
