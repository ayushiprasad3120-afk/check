"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { generalInquiryFormSchema, type GeneralInquiryFormValues } from "@/lib/validation/schemas";
import { trackEvent } from "@/lib/tracking/analytics";

const topicOptions = [
  { label: "General question", value: "general" },
  { label: "Billing", value: "billing" },
  { label: "Question about my policy", value: "policy-question" },
  { label: "Partnership inquiry", value: "partnership" },
  { label: "Other", value: "other" },
];

export function GeneralInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GeneralInquiryFormValues>({ resolver: zodResolver(generalInquiryFormSchema) });

  const onSubmit = async (data: GeneralInquiryFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind: "general-inquiry" }),
      });
      if (!res.ok) throw new Error("Submission failed");
      trackEvent({ name: "lead_submit", service: "general-inquiry" });
      setSubmitted(true);
    } catch {
      // In production: surface a form-level error state here.
    }
  };

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" aria-hidden="true" />
        <h3 className="font-display text-xl text-navy-950">Thanks for reaching out</h3>
        <p className="max-w-sm text-sm text-ink-muted">We typically respond within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-2xl border border-border bg-surface p-7 shadow-card">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Full name" required {...register("name")} error={errors.name?.message} />
        <Input label="Email" type="email" required {...register("email")} error={errors.email?.message} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="ZIP code (optional)" {...register("zipCode")} error={errors.zipCode?.message} />
        <Select label="Topic" required placeholder="Select a topic" options={topicOptions} {...register("topic")} error={errors.topic?.message} />
      </div>
      <Textarea label="Message" required {...register("message")} error={errors.message?.message} />
      <Button type="submit" variant="primary" size="lg" className="w-full justify-center" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}
