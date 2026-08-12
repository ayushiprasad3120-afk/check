import { ADVERTISER_NAME } from "../config/campaign";

interface ConsentDisclosureProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}

export default function ConsentDisclosure({ checked, onChange, error }: ConsentDisclosureProps) {
  return (
    <div className="mt-6 rounded-2xl border-2 border-[var(--color-blue-sky)]/40 bg-[var(--color-beige-warm)]/50 p-5">
      <div className="flex items-start gap-3">
        <input
          id="consent-checkbox"
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-describedby="consent-text consent-error"
          aria-invalid={Boolean(error)}
          className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-[var(--color-navy-deep)]/40 text-[var(--color-blue-primary)] focus:ring-2 focus:ring-[var(--color-blue-sky)]"
        />
        <label htmlFor="consent-checkbox" id="consent-text" className="text-sm leading-relaxed text-[var(--color-text-dark)]">
          By checking this box and clicking the button below, I provide my electronic signature
          and expressly consent to be contacted by {ADVERTISER_NAME} and/or participating
          insurance professionals regarding auto insurance at the phone number and email address
          I provided. I understand that calls or text messages may be made using automated
          technology, including an autodialer or prerecorded/artificial voice where permitted by
          applicable law.{" "}
          <strong className="font-semibold">
            Consent is not a condition of purchasing insurance or any other service.
          </strong>{" "}
          Message/data rates may apply for text messages. I may opt out of marketing
          communications at any time.
        </label>
      </div>

      {error && (
        <p id="consent-error" role="alert" className="mt-2 ml-8 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <p className="mt-4 ml-8 text-xs text-[var(--color-text-muted)] leading-relaxed">
        Participating insurance professionals may include licensed agents or agencies available
        to assist with auto insurance options. This consent language is provided as a general
        template and may not be legally sufficient in every state; consult qualified legal
        counsel before launch.
      </p>
    </div>
  );
}
