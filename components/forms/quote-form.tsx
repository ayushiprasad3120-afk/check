"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { leadFormSchema, type LeadFormValues } from "@/lib/validation/schemas";
import { services } from "@/config/services.config";
import { trackEvent } from "@/lib/tracking/analytics";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface QuoteFormProps {
  defaultService?: LeadFormValues["service"];
  source?: string;
}

export function QuoteForm({ defaultService, source = "quote-page" }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: defaultService ? { service: defaultService } : undefined,
  });

  const onSubmit = async (data: LeadFormValues) => {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
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
      <div role="status" className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" aria-hidden="true" />
        <h3 className="font-display text-xl text-navy-950">Thanks — we've got your information</h3>
        <p className="max-w-sm text-sm text-ink-muted">
          A licensed agent will reach out shortly. There's no obligation to purchase anything.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-2xl border border-border bg-surface p-7 shadow-card">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="First name" required {...register("firstName")} error={errors.firstName?.message} />
        <Input label="Last name" required {...register("lastName")} error={errors.lastName?.message} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Email" type="email" required {...register("email")} error={errors.email?.message} />
        <Input label="Phone" type="tel" required {...register("phone")} error={errors.phone?.message} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="ZIP code" required {...register("zipCode")} error={errors.zipCode?.message} />
        <Select
          label="Coverage type"
          required
          placeholder="Select coverage"
          options={services.map((s) => ({ label: s.name, value: s.slug }))}
          {...register("service")}
          error={errors.service?.message}
        />
      </div>
      <Checkbox
        label="I agree to be contacted by InsureDirect and its licensed agent partners by phone, email, or text about insurance options. Consent is not a condition of purchase."
        {...register("consent")}
        error={errors.consent?.message}
      />
      <Button type="submit" variant="primary" size="lg" className="w-full justify-center" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Compare Coverage Options"}
      </Button>
    </form>
  );
}
