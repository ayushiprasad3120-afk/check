import { z } from "zod";

const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const zipRegex = /^\d{5}(-\d{4})?$/;
const stateRegex = /^[A-Za-z]{2}$/;

export const leadFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  lastName: z.string().trim().min(1, "Last name is required").max(60),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().regex(phoneRegex, "Enter a valid phone number"),
  zipCode: z.string().trim().regex(zipRegex, "Enter a valid ZIP code"),
  state: z.string().trim().regex(stateRegex, "Use a 2-letter state code").optional(),
  service: z.enum(["auto", "health", "home", "final-expense"], {
    errorMap: () => ({ message: "Select a coverage type" }),
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to be contacted to continue" }),
  }),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Enter a valid phone number")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const callBackFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  phone: z.string().trim().regex(phoneRegex, "Enter a valid phone number"),
  preferredTime: z.enum(["morning", "afternoon", "evening", "anytime"], {
    errorMap: () => ({ message: "Choose a preferred time" }),
  }),
  service: z.enum(["auto", "health", "home", "final-expense"], {
    errorMap: () => ({ message: "Select a coverage type" }),
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to be contacted to continue" }),
  }),
});

export type CallBackFormValues = z.infer<typeof callBackFormSchema>;

export const generalInquiryFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email address"),
  zipCode: z.string().trim().regex(zipRegex, "Enter a valid ZIP code").optional().or(z.literal("")),
  topic: z.enum(["general", "billing", "policy-question", "partnership", "other"], {
    errorMap: () => ({ message: "Select a topic" }),
  }),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

export type GeneralInquiryFormValues = z.infer<typeof generalInquiryFormSchema>;

export const newsletterFormSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
