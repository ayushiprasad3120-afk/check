"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation/schemas";
import { trackEvent } from "@/lib/tracking/analytics";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      trackEvent({ name: "lead_submit", service: "contact" });
      setSubmitted(true);
    } catch {
      // In production: surface a form-level error state here.
    }
  };

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" aria-hidden="true" />
        <h3 className="font-display text-xl text-navy-950">Message sent</h3>
        <p className="max-w-sm text-sm text-ink-muted">We'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-2xl border border-border bg-surface p-7 shadow-card">
      <Input label="Full name" required {...register("name")} error={errors.name?.message} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Email" type="email" required {...register("email")} error={errors.email?.message} />
        <Input label="Phone (optional)" type="tel" {...register("phone")} error={errors.phone?.message} />
      </div>
      <Textarea label="Message" required {...register("message")} error={errors.message?.message} />
      <Button type="submit" variant="primary" size="lg" className="w-full justify-center" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
