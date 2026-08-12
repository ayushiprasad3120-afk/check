export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  topics: ("general" | "auto" | "health" | "home" | "final-expense")[];
}

export const faqs: FaqItem[] = [
  {
    id: "what-is-insuredirect",
    question: "What is InsureDirect?",
    answer:
      "InsureDirect is an insurance marketplace that helps you understand your coverage options across auto, health, home, and final expense insurance, and connects you with licensed insurance professionals who can help you compare and choose a policy.",
    topics: ["general"],
  },
  {
    id: "is-insuredirect-an-insurer",
    question: "Is InsureDirect an insurance company?",
    answer:
      "No. InsureDirect is not an insurance carrier. We provide educational information and connect you with licensed agents and carrier partners who issue actual policies.",
    topics: ["general"],
  },
  {
    id: "cost-to-use",
    question: "Does it cost anything to use InsureDirect?",
    answer:
      "Comparing information and speaking with a licensed agent through InsureDirect is free. You only pay for the insurance policy you choose to purchase, directly to the carrier or agent.",
    topics: ["general"],
  },
  {
    id: "how-long-quote",
    question: "How long does it take to compare coverage options?",
    answer:
      "Most people can share basic information in a few minutes. A licensed agent will follow up to walk through specific coverage options based on your situation.",
    topics: ["general", "auto", "home"],
  },
  {
    id: "data-privacy",
    question: "How is my information used?",
    answer:
      "Information you share is used to connect you with relevant licensed agents and carrier partners. See our Privacy Policy for full details on how your data is collected, used, and protected.",
    topics: ["general"],
  },
  {
    id: "aca-govt-affiliation",
    question: "Is InsureDirect affiliated with the government health insurance Marketplace?",
    answer:
      "No. InsureDirect is a private company and is not affiliated with or endorsed by any government agency or the federal or state ACA Marketplace.",
    topics: ["health"],
  },
];

export function getFaqsByTopic(topic: FaqItem["topics"][number]) {
  return faqs.filter((f) => f.topics.includes(topic));
}
