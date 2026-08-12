import type { BrandConfig } from "@/types/brand";

/**
 * The ONLY place brand identity values are defined.
 * Every component reads from here — never hardcode brand name, logo,
 * phone, email, or address anywhere else in the codebase.
 */
export const brand: BrandConfig = {
  brandName: "InsureDirect",
  brandLegalName: "InsureDirect Insurance Services LLC",
  brandTagline: "Clear coverage. Straight answers.",
  brandLogo: {
    light: "/images/logo-light.svg",
    dark: "/images/logo-dark.svg",
    icon: "/images/logo-icon.svg",
  },
  brandEmail: "support@insuredirect.com",
  brandPhone: "(844) 555-0182",
  brandAddress: {
    street: "500 Market Street, Suite 400",
    city: "Wilmington",
    state: "DE",
    zip: "19801",
  },
  socialLinks: {
    facebook: "https://facebook.com/insuredirect",
    instagram: "https://instagram.com/insuredirect",
    linkedin: "https://linkedin.com/company/insuredirect",
    twitter: "https://twitter.com/insuredirect",
  },
  licensing: {
    npnNumber: "20394857",
    statesLicensed: [
      "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","ID","IL","IN","IA",
      "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH",
      "NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX",
      "UT","VT","VA","WA","WV","WI","WY",
    ],
  },
};
