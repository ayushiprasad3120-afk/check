# InsureDirect

A responsive, production-ready U.S. auto-insurance lead-generation / pay-per-call landing page. Built with React, TypeScript, Vite, Tailwind CSS, and React Router.

This is an **original design and original codebase**. It is not affiliated with, and does not copy the text, branding, layout, or assets of, any third-party insurance website.

> **Compliance note:** This project ships with placeholder legal, contact, and consent language (Privacy Policy, Terms & Conditions, CCPA page, TCPA-style consent disclosure). These are general templates only — **have qualified legal counsel review all consent, privacy, and disclosure language for your specific campaign, states of operation, and advertiser relationships before launch.**

---

## 1. Run locally

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## 2. Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## 3. Deploy to GitHub

1. Push this repository to GitHub as normal (`git init`, `git add .`, `git commit`, `git push`).
2. For GitHub Pages, Netlify, Vercel, or similar static hosts: point the build command to `npm run build` and the publish directory to `dist`.
3. No server-side code is required to host the static site itself — form submission is handled client-side and posts to whatever endpoint you configure (see §7).

## 4. Where to change the phone number

Edit **`src/config/campaign.ts`**:

```ts
export const CALL_NUMBER = "+1-XXX-XXX-XXXX";       // display format
export const CALL_NUMBER_TEL = "tel:+1XXXXXXXXXX";  // tel: link, digits only
export const CALL_TRACKING_NUMBER = "";              // optional DNI number
```

Every call button on the site (header, hero, mobile sticky bar, CTA sections, footer, contact page) reads from this single file — there are no other hardcoded phone numbers anywhere in the codebase.

## 5. Where to change the advertiser name

Edit `ADVERTISER_NAME` in **`src/config/campaign.ts`**. This value is used in the header logo, footer, consent disclosure, FAQ answers, and legal pages.

## 6. Where to change the privacy / contact email

Edit `PRIVACY_EMAIL` and `CONTACT_EMAIL` in **`src/config/campaign.ts`**. These are placeholders (`@insuredirect.example`) and **must** be replaced with real, monitored inboxes before launch.

## 7. Where to connect a backend / WordPress API

Lead submission goes through a single abstraction in **`src/lib/submitLead.ts`**. By default (no endpoint configured) it simulates a network call so you can review the full UI flow (loading → success/error states) without a backend.

To connect a real backend:

1. Set the `VITE_LEAD_SUBMIT_ENDPOINT` environment variable (e.g. in a `.env` file, gitignored) to your WordPress REST API route, webhook URL, CRM endpoint, or lead-buyer/call-tracking platform URL.
2. `submitLead()` will `POST` a JSON payload of the form data plus captured tracking parameters and campaign ID to that endpoint.
3. Adjust the response handling in `submitLead.ts` if your backend returns a different response shape.

No API keys or secrets should ever be placed directly in frontend code — if your integration requires authentication, proxy the request through your own backend/serverless function.

## 8. Where to configure tracking parameters

**`src/config/campaign.ts`** defines `CAMPAIGN_CONFIG` (campaign ID, source, sub ID, click ID) and the list of URL parameters captured on page load (`TRACKED_PARAMS`): `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `subid`, `clickid`, `campaign_id`.

**`src/lib/tracking.ts`** captures these from the URL on load, persists them to `sessionStorage` so they survive in-site navigation, and `submitLead()` automatically attaches them to every form submission.

---

## Project structure

```
src/
  components/     Header, Hero, CallButton, CallCTA, MobileStickyCall,
                   QuoteForm, ConsentDisclosure, CoverageSection,
                   HowItWorks, TrustSection, FAQ, FinalCTA, Footer, Seo,
                   CarIllustration, LegalLayout
  pages/          Home, PrivacyPolicy, Terms, CCPA, Contact
  config/         campaign.ts   (single source of truth for phone/email/tracking)
  lib/            validation.ts, submitLead.ts, tracking.ts, phone.ts
```

## Design system

- **Palette:** warm beige/cream backgrounds, deep navy (`#102A43`) and primary blue (`#1769AA`) accents, soft sky blue (`#5BA7D8`) highlights — defined as CSS variables in `src/index.css` under `@theme`.
- **Type:** Plus Jakarta Sans (display/headings) + Manrope (body), loaded via Google Fonts.
- **Hero image:** an original SVG illustration (`CarIllustration.tsx`) rather than a licensed stock photo, so there are zero third-party image-licensing dependencies to manage. Swap it for a licensed photograph if you prefer — just replace the component's usage in `Hero.tsx`.

## Compliance & content notes baked into this build

- Consent checkbox defaults to **unchecked** and cannot be bypassed — form submission is blocked client-side until consent is given.
- No Social Security number field. No driver's license field.
- No fabricated statistics, testimonials, review counts, awards, or insurer logos anywhere on the site.
- Footer and legal pages avoid absolute claims ("licensed in all 50 states," "guaranteed savings," etc.) in favor of "varies by state" language, per the brief.
- All legal pages (`/privacy-policy`, `/terms-and-conditions`, `/ccpa`, `/contact`) are functional routes with original template copy — review and finalize with counsel before go-live.

## Accessibility

Semantic landmarks, a skip-to-content link, visible focus states, labeled form fields with associated error messages (`role="alert"`), an accessible FAQ accordion (`aria-expanded`/`aria-controls`), and `prefers-reduced-motion` support are implemented throughout.

## Tech stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router
