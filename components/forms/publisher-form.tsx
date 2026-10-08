"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Field, inputClass } from "./field";

export function PublisherForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl card-surface p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-wine" size={40} />
        <h3 className="mt-5 font-display text-2xl text-charcoal dark:text-cream">Application received</h3>
        <p className="mt-2 text-sm text-charcoal/65 dark:text-cream/65 max-w-sm mx-auto">
          Our publisher team typically reviews applications within one business day. Questions? Email info@visionovahq.com.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl card-surface p-6 md:p-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Full Name">
          <input required name="fullName" className={inputClass} placeholder="Jane Doe" />
        </Field>
        <Field label="Company">
          <input name="company" className={inputClass} placeholder="Optional" />
        </Field>
        <Field label="Email">
          <input required type="email" name="email" className={inputClass} placeholder="jane@publisher.com" />
        </Field>
        <Field label="Traffic Sources">
          <input required name="trafficSources" className={inputClass} placeholder="e.g. Native, Push, Social" />
        </Field>
        <Field label="Internal or Third Party">
          <select name="trafficType" className={inputClass} defaultValue="Internal">
            <option>Internal</option>
            <option>Third Party</option>
            <option>Both</option>
          </select>
        </Field>
        <Field label="Monthly Volume">
          <input name="monthlyVolume" className={inputClass} placeholder="e.g. 2M clicks/mo" />
        </Field>
        <Field label="Top GEOs">
          <input name="topGeos" className={inputClass} placeholder="e.g. US, UK, CA, AU" />
        </Field>
        <Field label="Verticals">
          <input name="verticals" className={inputClass} placeholder="e.g. Finance, Insurance" />
        </Field>
      </div>
      <Field label="Notes">
        <textarea name="notes" rows={4} className={inputClass} placeholder="Anything else we should know?" />
      </Field>
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto rounded-full bg-wine text-cream px-8 py-3.5 text-sm font-medium hover:bg-burgundy transition-colors disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Publisher Application"}
      </button>
    </form>
  );
}
