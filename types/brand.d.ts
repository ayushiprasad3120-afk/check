export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

export interface BrandConfig {
  brandName: string;
  brandLegalName: string;
  brandTagline: string;
  brandLogo: {
    light: string;
    dark: string;
    icon: string;
  };
  brandEmail: string;
  brandPhone: string;
  brandAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  socialLinks: SocialLinks;
  licensing: {
    npnNumber: string;
    statesLicensed: string[];
  };
}
