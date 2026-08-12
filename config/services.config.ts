import { Car, HeartPulse, Home, Flower2 } from "lucide-react";
import type { ServiceConfig } from "@/types/service";

/**
 * The 4 supported insurance verticals — do not add categories here.
 * Every vertical page, nav entry, and sitemap route is generated from this file.
 */
export const services: ServiceConfig[] = [
  {
    slug: "auto",
    name: "Auto Insurance",
    shortName: "Auto",
    icon: Car,
    tagline: "Coverage built around how you actually drive.",
    heroDescription:
      "Compare auto coverage options from licensed carriers and understand what you're buying before you buy it.",
    overview:
      "Auto insurance protects you financially if you're involved in a collision, your vehicle is stolen or damaged, or you're found liable for injuries or property damage to others. Most states require a minimum level of liability coverage to legally drive, and the right policy depends on your vehicle, driving history, and how much financial protection you want beyond the legal minimum.",
    benefits: [
      "Understand state minimum requirements before you shop",
      "Compare liability, collision, and comprehensive coverage side by side",
      "Learn how deductibles and limits affect your premium",
      "Get connected with licensed agents who can answer specific questions",
    ],
    howItWorks: [
      { title: "Compare", description: "Tell us about your vehicle and driving history so we can point you to relevant coverage options." },
      { title: "Connect", description: "We connect you with a licensed insurance professional in your state." },
      { title: "Choose", description: "Review your options and choose the policy that fits your budget and coverage needs." },
    ],
    eligibilityNotes: [
      "Coverage availability and pricing depend on your state, driving record, vehicle, and the carrier's own underwriting guidelines.",
      "Most states require proof of liability insurance to register and legally operate a vehicle.",
      "Drivers with recent violations or claims may see different available options than drivers with a clean record.",
    ],
    coverageOptions: [
      { name: "Liability Coverage", description: "Pays for injuries or property damage you cause to others. Required in nearly every state." },
      { name: "Collision Coverage", description: "Pays to repair or replace your vehicle after a collision, regardless of fault." },
      { name: "Comprehensive Coverage", description: "Covers non-collision events like theft, vandalism, weather, or hitting an animal." },
      { name: "Uninsured/Underinsured Motorist", description: "Protects you if you're hit by a driver with little or no insurance." },
      { name: "Medical Payments / PIP", description: "Helps cover medical costs for you and your passengers after an accident." },
    ],
    faqs: [
      { question: "How much auto insurance do I need?", answer: "At minimum, most states require liability coverage. Beyond that, the right amount depends on your vehicle's value, your assets, and how much risk you're comfortable carrying yourself through a higher deductible." },
      { question: "What affects my auto insurance rate?", answer: "Carriers generally consider your driving record, the vehicle you drive, where you live, your coverage limits and deductible, and how you use the vehicle (commuting, business use, mileage)." },
      { question: "Can I change my policy after purchasing it?", answer: "Yes. Most carriers allow you to adjust coverage, add or remove a vehicle, or change your deductible during your policy term — a licensed agent can walk you through the process." },
    ],
    relatedBlogCategory: "auto-insurance",
    metaTitle: "Auto Insurance Quotes & Coverage Guide | InsureDirect",
    metaDescription:
      "Compare auto insurance coverage options and connect with licensed agents. Understand liability, collision, and comprehensive coverage before you buy.",
  },
  {
    slug: "health",
    name: "ACA Health Insurance",
    shortName: "Health",
    icon: HeartPulse,
    tagline: "Marketplace health coverage, explained plainly.",
    heroDescription:
      "Understand your ACA Marketplace options — metal tiers, subsidies, and enrollment windows — before you choose a plan.",
    overview:
      "The Affordable Care Act (ACA) Health Insurance Marketplace allows individuals and families to compare and enroll in health plans, often with income-based premium tax credits that lower monthly costs. Plans are organized into metal tiers (Bronze, Silver, Gold, Platinum) that reflect how costs are split between you and the insurer, not the quality of care.",
    benefits: [
      "Learn how metal tiers affect your premium and out-of-pocket costs",
      "Understand whether you may qualify for a premium tax credit",
      "Get clarity on Open Enrollment and Special Enrollment Periods",
      "Connect with a licensed agent who can help you compare plans in your area",
    ],
    howItWorks: [
      { title: "Compare", description: "Share your household size and general income range to see which plan types may fit." },
      { title: "Connect", description: "Speak with a licensed health insurance agent who can explain your specific options." },
      { title: "Choose", description: "Enroll during an open or special enrollment period with guidance every step of the way." },
    ],
    eligibilityNotes: [
      "Marketplace eligibility and subsidy amounts depend on household income, size, and where you live.",
      "Enrollment is generally limited to the annual Open Enrollment Period unless you qualify for a Special Enrollment Period (such as after a job loss, move, or marriage).",
      "InsureDirect is not affiliated with or operated by the federal or state government Marketplace.",
    ],
    coverageOptions: [
      { name: "Bronze Plans", description: "Typically the lowest monthly premium with higher out-of-pocket costs when you need care." },
      { name: "Silver Plans", description: "A mid-range balance of premium and out-of-pocket costs; eligible for extra savings for some households." },
      { name: "Gold Plans", description: "Higher monthly premium with lower costs when you use care." },
      { name: "Platinum Plans", description: "The highest premium tier, with the lowest cost-sharing when receiving care." },
    ],
    faqs: [
      { question: "When can I enroll in an ACA health plan?", answer: "The annual Open Enrollment Period typically runs in the fall for coverage starting the following January. Outside that window, you generally need a qualifying life event to enroll through a Special Enrollment Period." },
      { question: "What is a premium tax credit?", answer: "It's a subsidy based on your household income and size that lowers your monthly premium for a Marketplace plan. Many households qualify for some level of assistance." },
      { question: "What's the difference between metal tiers?", answer: "Metal tiers (Bronze, Silver, Gold, Platinum) describe how costs are split between you and the insurer — they do not reflect the quality of doctors or hospitals in the plan's network." },
    ],
    relatedBlogCategory: "health-insurance",
    metaTitle: "ACA Health Insurance Marketplace Guide | InsureDirect",
    metaDescription:
      "Understand ACA Marketplace health plans, metal tiers, and premium tax credits. Connect with a licensed agent to compare your options.",
  },
  {
    slug: "home",
    name: "Home Insurance",
    shortName: "Home",
    icon: Home,
    tagline: "Protect the place that protects you.",
    heroDescription:
      "Learn what a standard homeowners policy covers — and doesn't — before you compare quotes.",
    overview:
      "Homeowners insurance helps protect your home's structure, your personal belongings, and you financially if someone is injured on your property. Most mortgage lenders require proof of coverage, and policies vary meaningfully in what perils they cover, so it's worth understanding the basics before comparing options.",
    benefits: [
      "Understand what dwelling, personal property, and liability coverage each protect",
      "Learn which perils are typically covered — and which need separate policies (like flood)",
      "Compare replacement cost versus actual cash value coverage",
      "Connect with a licensed agent to review coverage for your specific home",
    ],
    howItWorks: [
      { title: "Compare", description: "Tell us about your home so we can surface relevant coverage information." },
      { title: "Connect", description: "A licensed agent can help you understand coverage gaps specific to your property." },
      { title: "Choose", description: "Select a policy that matches your home's value and your risk tolerance." },
    ],
    eligibilityNotes: [
      "Coverage availability can depend on your home's age, condition, location, and regional risk factors (such as wildfire or flood zones).",
      "Standard homeowners policies typically exclude flood and earthquake damage, which require separate policies.",
      "Mortgage lenders commonly require a minimum level of dwelling coverage as a condition of the loan.",
    ],
    coverageOptions: [
      { name: "Dwelling Coverage", description: "Pays to repair or rebuild your home's structure after a covered loss." },
      { name: "Personal Property Coverage", description: "Covers your belongings — furniture, electronics, clothing — up to your policy limit." },
      { name: "Liability Protection", description: "Helps cover legal and medical costs if someone is injured on your property." },
      { name: "Loss of Use", description: "Helps pay for temporary living expenses if your home becomes uninhabitable after a covered loss." },
      { name: "Additional Structures", description: "Covers detached structures like a garage, fence, or shed." },
    ],
    faqs: [
      { question: "Does homeowners insurance cover flooding?", answer: "Generally, no. Flood damage typically requires a separate flood insurance policy, often through the National Flood Insurance Program or a private flood carrier." },
      { question: "What's the difference between replacement cost and actual cash value?", answer: "Replacement cost coverage pays to rebuild or replace your property at today's prices. Actual cash value factors in depreciation, which usually results in a lower payout." },
      { question: "Do I need home insurance if my mortgage is paid off?", answer: "It's not legally required once there's no lender, but most homeowners keep coverage to protect against the financial risk of rebuilding or replacing belongings out of pocket." },
    ],
    relatedBlogCategory: "home-insurance",
    metaTitle: "Home Insurance Coverage Guide & Quotes | InsureDirect",
    metaDescription:
      "Understand homeowners insurance coverage — dwelling, personal property, and liability — and connect with a licensed agent to compare options.",
  },
  {
    slug: "final-expense",
    name: "Final Expense Insurance",
    shortName: "Final Expense",
    icon: Flower2,
    tagline: "A simpler way to plan ahead for your family.",
    heroDescription:
      "Learn how final expense coverage works and whether it fits your family's plans.",
    overview:
      "Final expense insurance (sometimes called burial or funeral insurance) is a type of whole life insurance designed to help cover end-of-life costs — such as funeral services, medical bills, or outstanding debts — so your loved ones aren't left with the financial burden. Policies typically have smaller death benefits than traditional life insurance and are often easier to qualify for.",
    benefits: [
      "Understand how final expense coverage differs from traditional life insurance",
      "Learn about simplified-issue and guaranteed-issue policy types",
      "See how premiums are typically structured for this coverage type",
      "Connect with a licensed agent to discuss options based on your age and health",
    ],
    howItWorks: [
      { title: "Compare", description: "Share some basic information about your age and general health history." },
      { title: "Connect", description: "A licensed agent explains policy types available to you and answers your questions." },
      { title: "Choose", description: "Select a plan and coverage amount that fits your family's needs and your budget." },
    ],
    eligibilityNotes: [
      "Eligibility, premiums, and available coverage amounts depend on your age, health history, and the issuing carrier's underwriting rules.",
      "Some policies require health questions (simplified issue); others require no health questions but may have a waiting period before full benefits apply (guaranteed issue).",
      "Coverage amounts for final expense policies are typically smaller than traditional term or whole life policies, reflecting their intended purpose.",
    ],
    coverageOptions: [
      { name: "Simplified Issue", description: "Requires answering health questions but no medical exam; often faster to qualify for than traditional life insurance." },
      { name: "Guaranteed Issue", description: "No health questions or exam required, though it may include a graded benefit period early in the policy." },
      { name: "Level Premiums", description: "Many final expense policies offer premiums that stay the same for the life of the policy." },
    ],
    faqs: [
      { question: "How is final expense insurance different from a traditional life insurance policy?", answer: "Final expense policies typically offer smaller coverage amounts focused on end-of-life costs, with simpler underwriting than larger traditional life insurance policies." },
      { question: "Do I need a medical exam to qualify?", answer: "It depends on the policy type. Simplified issue policies ask health questions but skip the exam; guaranteed issue policies typically require neither, though they may cost more or include a waiting period." },
      { question: "What can the payout be used for?", answer: "Beneficiaries can generally use the death benefit for any purpose, though it's commonly used for funeral costs, medical bills, or other outstanding debts." },
    ],
    relatedBlogCategory: "final-expense-insurance",
    metaTitle: "Final Expense Insurance Guide & Quotes | InsureDirect",
    metaDescription:
      "Learn how final expense (burial) insurance works, including simplified and guaranteed issue policies, and connect with a licensed agent.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
