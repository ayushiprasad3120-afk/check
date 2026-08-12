"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { callBackFormSchema, type CallBackFormValues } from "@/lib/validation/schemas";
import { services } from "@/config/services.config";
import { trackEvent } from "@/lib/tracking/analytics";

const timeOptions = [
  { label: "Morning", value: "morning" },
  { label: "Afternoon", value: "afternoon" },
  { label: "Evening", value: "evening" },
  { label: "Anytime", value: "anytime" },
];

/** Shown as the after-hours alternate CTA when a campaign or the site is closed. */
export function CallBackForm({ defaultService }: { defaultService?: CallBackFormValues["service"] }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CallBackFormValues>({
    resolver: zodResolver(callBackFormSchema),
    defaultValues: defaultService ? { service: defaultService } : undefined,
  });

  const onSubmit = async (data: CallBackFormValues) => {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "call-back-form" }),
      });
      if (!res.ok) throw new Error("Submission failed");
      trackEvent({ name: "lead_submit", service: data.service });
      setSubmitted(true);
    } catch {
      // In production: surface a form-level error state here.
    }
  };

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="h-9 w-9 text-emerald-600" aria-hidden="true" />
        <h3 className="font-display text-lg text-navy-950">We'll call you back</h3>
        <p className="max-w-sm text-sm text-ink-muted">A licensed agent will reach out during your preferred time.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-card">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="First name" required {...register("firstName")} error={errors.firstName?.message} />
        <Input label="Phone" type="tel" required {...register("phone")} error={errors.phone?.message} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select label="Best time to call" required placeholder="Select a time" options={timeOptions} {...register("preferredTime")} error={errors.preferredTime?.message} />
        <Select label="Coverage type" required placeholder="Select coverage" options={services.map((s) => ({ label: s.name, value: s.slug }))} {...register("service")} error={errors.service?.message} />
      </div>
      <Checkbox
        label="I agree to be contacted by InsureDirect and its licensed agent partners about insurance options."
        {...register("consent")}
        error={errors.consent?.message}
      />
      <Button type="submit" variant="emerald" size="md" className="w-full justify-center" disabled={isSubmitting}>
        {isSubmitting ? "Requesting..." : "Request a Callback"}
      </Button>
    </form>
  );
}
