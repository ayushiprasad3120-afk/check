import { useState, type ChangeEvent } from "react";
import ConsentDisclosure from "./ConsentDisclosure";
import CallButton from "./CallButton";
import {
  initialQuoteFormData,
  validateStep,
  US_STATES,
  type QuoteFormData,
  type QuoteFormErrors,
} from "../lib/validation";
import { submitLead } from "../lib/submitLead";

const TOTAL_STEPS = 3;

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-[var(--color-navy-deep)] mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border-2 border-[var(--color-navy-deep)]/15 bg-white px-4 py-2.75 text-[var(--color-text-dark)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-blue-primary)] outline-none transition-colors";

export default function QuoteForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [data, setData] = useState<QuoteFormData>(initialQuoteFormData);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update<K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onTextChange(key: keyof QuoteFormData) {
    return (e: ChangeEvent<HTMLInputElement>) => update(key, e.target.value as never);
  }

  function goNext() {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep((s) => (s < TOTAL_STEPS ? ((s + 1) as 1 | 2 | 3) : s));
  }

  function goBack() {
    setErrors({});
    setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3) : s));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const stepErrors = validateStep(3, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setStatus("loading");
    const result = await submitLead(data);
    if (result.status === "success") {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.message);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-white shadow-xl shadow-blue-950/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-success)]/10">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-[var(--color-navy-deep)]">
          Thanks — your information was submitted
        </h3>
        <p className="mt-2 text-[var(--color-text-muted)]">
          Depending on your information and participating providers, you may be connected with an
          insurance professional who can discuss auto insurance options with you. Submission does
          not guarantee eligibility, coverage, approval, or a particular premium.
        </p>
        <div className="mt-6">
          <CallButton label="Prefer to talk now? Call" showNumber />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white shadow-xl shadow-blue-950/5 p-6 sm:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-semibold text-[var(--color-text-muted)] mb-2">
          <span>
            Step {step} of {TOTAL_STEPS}
          </span>
          <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
        </div>
        <div className="h-2 rounded-full bg-[var(--color-beige-warm)] overflow-hidden">
          <div
            className="h-full rounded-full bg-[var(--color-blue-primary)] transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {step === 1 && (
          <fieldset className="grid sm:grid-cols-2 gap-4">
            <legend className="sr-only">Your contact information</legend>
            <Field label="First Name" htmlFor="firstName" error={errors.firstName}>
              <input
                id="firstName"
                className={inputClass}
                value={data.firstName}
                onChange={onTextChange("firstName")}
                autoComplete="given-name"
                required
              />
            </Field>
            <Field label="Last Name" htmlFor="lastName" error={errors.lastName}>
              <input
                id="lastName"
                className={inputClass}
                value={data.lastName}
                onChange={onTextChange("lastName")}
                autoComplete="family-name"
                required
              />
            </Field>
            <Field label="Email Address" htmlFor="email" error={errors.email}>
              <input
                id="email"
                type="email"
                className={inputClass}
                value={data.email}
                onChange={onTextChange("email")}
                autoComplete="email"
                required
              />
            </Field>
            <Field label="Phone Number" htmlFor="phone" error={errors.phone}>
              <input
                id="phone"
                type="tel"
                placeholder="(555) 555-5555"
                className={inputClass}
                value={data.phone}
                onChange={onTextChange("phone")}
                autoComplete="tel"
                required
              />
            </Field>
            <Field label="ZIP Code" htmlFor="zip" error={errors.zip}>
              <input
                id="zip"
                inputMode="numeric"
                className={inputClass}
                value={data.zip}
                onChange={onTextChange("zip")}
                autoComplete="postal-code"
                required
              />
            </Field>
            <Field label="State" htmlFor="state" error={errors.state}>
              <select
                id="state"
                className={inputClass}
                value={data.state}
                onChange={(e) => update("state", e.target.value as never)}
                autoComplete="address-level1"
                required
              >
                <option value="">Select state</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="grid sm:grid-cols-2 gap-4">
            <legend className="sr-only">Vehicle and driver information</legend>
            <Field label="Vehicle Year" htmlFor="vehicleYear" error={errors.vehicleYear}>
              <input
                id="vehicleYear"
                inputMode="numeric"
                placeholder="2020"
                className={inputClass}
                value={data.vehicleYear}
                onChange={onTextChange("vehicleYear")}
                required
              />
            </Field>
            <Field label="Vehicle Make" htmlFor="vehicleMake" error={errors.vehicleMake}>
              <input
                id="vehicleMake"
                placeholder="Honda"
                className={inputClass}
                value={data.vehicleMake}
                onChange={onTextChange("vehicleMake")}
                required
              />
            </Field>
            <Field label="Vehicle Model" htmlFor="vehicleModel" error={errors.vehicleModel}>
              <input
                id="vehicleModel"
                placeholder="Accord"
                className={inputClass}
                value={data.vehicleModel}
                onChange={onTextChange("vehicleModel")}
                required
              />
            </Field>
            <Field label="Ownership Status" htmlFor="ownership" error={errors.ownership}>
              <select
                id="ownership"
                className={inputClass}
                value={data.ownership}
                onChange={(e) => update("ownership", e.target.value as never)}
                required
              >
                <option value="">Select status</option>
                <option value="own">Own</option>
                <option value="finance">Finance</option>
                <option value="lease">Lease</option>
              </select>
            </Field>
            <Field label="Date of Birth" htmlFor="dob" error={errors.dob}>
              <input
                id="dob"
                type="date"
                className={inputClass}
                value={data.dob}
                onChange={onTextChange("dob")}
                autoComplete="bday"
                required
              />
            </Field>
            <Field label="Currently Insured?" htmlFor="currentlyInsured" error={errors.currentlyInsured}>
              <select
                id="currentlyInsured"
                className={inputClass}
                value={data.currentlyInsured}
                onChange={(e) => update("currentlyInsured", e.target.value as never)}
                required
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </Field>
            <Field label="Number of Vehicles" htmlFor="numVehicles" error={errors.numVehicles}>
              <input
                id="numVehicles"
                inputMode="numeric"
                className={inputClass}
                value={data.numVehicles}
                onChange={onTextChange("numVehicles")}
                required
              />
            </Field>
            <Field label="Number of Drivers" htmlFor="numDrivers" error={errors.numDrivers}>
              <input
                id="numDrivers"
                inputMode="numeric"
                className={inputClass}
                value={data.numDrivers}
                onChange={onTextChange("numDrivers")}
                required
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Driving History (accidents or violations, optional)" htmlFor="drivingHistory">
                <textarea
                  id="drivingHistory"
                  rows={2}
                  className={inputClass}
                  value={data.drivingHistory}
                  onChange={(e) => update("drivingHistory", e.target.value as never)}
                />
              </Field>
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset>
            <legend className="sr-only">Coverage interest and consent</legend>
            <Field label="Coverage Interest" htmlFor="coverageInterest" error={errors.coverageInterest}>
              <div className="grid sm:grid-cols-2 gap-3 mt-1">
                {[
                  { value: "standard", label: "Standard coverage" },
                  { value: "full", label: "Full coverage" },
                  { value: "liability", label: "Liability coverage" },
                  { value: "not_sure", label: "Not sure" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-2.5 rounded-xl border-2 px-4 py-3 cursor-pointer transition-colors ${
                      data.coverageInterest === opt.value
                        ? "border-[var(--color-blue-primary)] bg-[var(--color-beige-warm)]/60"
                        : "border-[var(--color-navy-deep)]/15 hover:border-[var(--color-blue-sky)]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="coverageInterest"
                      value={opt.value}
                      checked={data.coverageInterest === opt.value}
                      onChange={(e) => update("coverageInterest", e.target.value as never)}
                      className="h-4 w-4 text-[var(--color-blue-primary)]"
                    />
                    <span className="text-sm font-medium text-[var(--color-text-dark)]">{opt.label}</span>
                  </label>
                ))}
              </div>
            </Field>

            <ConsentDisclosure
              checked={data.consent}
              onChange={(c) => update("consent", c as never)}
              error={errors.consent}
            />
          </fieldset>
        )}

        {status === "error" && (
          <p role="alert" className="mt-4 text-sm font-medium text-red-700">
            {errorMessage}
          </p>
        )}

        <div className="mt-7 flex items-center gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={goBack}
              className="rounded-full border-2 border-[var(--color-navy-deep)]/20 px-6 py-3 font-display font-semibold text-[var(--color-navy-deep)] hover:bg-[var(--color-beige-warm)] transition-colors"
            >
              Back
            </button>
          )}
          {step < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={goNext}
              className="flex-1 sm:flex-none rounded-full bg-[var(--color-blue-primary)] text-white px-8 py-3 font-display font-semibold hover:bg-[var(--color-navy-deep)] transition-colors"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex-1 sm:flex-none rounded-full bg-[var(--color-blue-primary)] text-white px-8 py-3 font-display font-semibold hover:bg-[var(--color-navy-deep)] transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Submitting…" : "Explore Your Options"}
            </button>
          )}
        </div>
      </form>

      <p className="mt-5 text-xs text-[var(--color-text-muted)] leading-relaxed">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-[var(--color-blue-primary)]">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms-and-conditions" className="underline hover:text-[var(--color-blue-primary)]">
          Terms &amp; Conditions
        </a>
        .
      </p>
    </div>
  );
}
