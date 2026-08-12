import type { ServiceSlug } from "./service";

export interface LeadPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  service: ServiceSlug;
  source?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
