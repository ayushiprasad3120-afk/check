export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  state: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  ownership: "own" | "finance" | "lease" | "";
  dob: string;
  currentlyInsured: "yes" | "no" | "";
  numVehicles: string;
  numDrivers: string;
  drivingHistory: string;
  coverageInterest: "standard" | "full" | "liability" | "not_sure" | "";
  consent: boolean;
}

export const initialQuoteFormData: QuoteFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  zip: "",
  state: "",
  vehicleYear: "",
  vehicleMake: "",
  vehicleModel: "",
  ownership: "",
  dob: "",
  currentlyInsured: "",
  numVehicles: "",
  numDrivers: "",
  drivingHistory: "",
  coverageInterest: "",
  consent: false,
};

export type QuoteFormErrors = Partial<Record<keyof QuoteFormData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const ZIP_RE = /^\d{5}(-\d{4})?$/;

export const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID",
  "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS",
  "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
  "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
  "WI", "WY", "DC",
];

function isAdult(dob: string): boolean {
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return false;
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age >= 16 && age <= 100;
}

/** Validates only the fields required on the given form step. */
export function validateStep(step: 1 | 2 | 3, data: QuoteFormData): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (step === 1) {
    if (!data.firstName.trim()) errors.firstName = "First name is required.";
    if (!data.lastName.trim()) errors.lastName = "Last name is required.";
    if (!data.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!EMAIL_RE.test(data.email.trim())) {
      errors.email = "Enter a valid email address.";
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!PHONE_RE.test(data.phone.trim())) {
      errors.phone = "Enter a valid 10-digit US phone number.";
    }
    if (!data.zip.trim()) {
      errors.zip = "ZIP code is required.";
    } else if (!ZIP_RE.test(data.zip.trim())) {
      errors.zip = "Enter a valid 5-digit ZIP code.";
    }
    if (!data.state) errors.state = "Please select your state.";
  }

  if (step === 2) {
    if (!data.vehicleYear.trim()) errors.vehicleYear = "Vehicle year is required.";
    if (!data.vehicleMake.trim()) errors.vehicleMake = "Vehicle make is required.";
    if (!data.vehicleModel.trim()) errors.vehicleModel = "Vehicle model is required.";
    if (!data.ownership) errors.ownership = "Please select an ownership status.";
    if (!data.dob) {
      errors.dob = "Date of birth is required.";
    } else if (!isAdult(data.dob)) {
      errors.dob = "Enter a valid date of birth.";
    }
    if (!data.currentlyInsured) errors.currentlyInsured = "Please select an option.";
    if (!data.numVehicles.trim()) errors.numVehicles = "Number of vehicles is required.";
    if (!data.numDrivers.trim()) errors.numDrivers = "Number of drivers is required.";
  }

  if (step === 3) {
    if (!data.coverageInterest) errors.coverageInterest = "Please select a coverage interest.";
    if (!data.consent) errors.consent = "You must provide consent to continue.";
  }

  return errors;
}

export function validateAll(data: QuoteFormData): QuoteFormErrors {
  return {
    ...validateStep(1, data),
    ...validateStep(2, data),
    ...validateStep(3, data),
  };
}
