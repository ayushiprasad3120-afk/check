export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: "auto" | "health" | "home" | "final-expense";
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Marianne K.",
    location: "Columbus, OH",
    service: "home",
    quote:
      "I finally understood the difference between replacement cost and actual cash value before I signed anything. The agent I spoke with actually answered my questions instead of rushing me.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Devon R.",
    location: "Austin, TX",
    service: "auto",
    quote:
      "I compared a few coverage options in about ten minutes and had a licensed agent on the phone the same afternoon. No pressure, just clear answers.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Patricia L.",
    location: "Tampa, FL",
    service: "final-expense",
    quote:
      "I wanted something simple for my kids so they wouldn't have to worry about costs later. The explanation of guaranteed issue versus simplified issue made the decision easy.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Samuel A.",
    location: "Newark, NJ",
    service: "health",
    quote:
      "I didn't realize how much the metal tiers mattered until it was explained plainly. Helped me pick a plan that actually matched how my family uses healthcare.",
    rating: 4,
  },
];
