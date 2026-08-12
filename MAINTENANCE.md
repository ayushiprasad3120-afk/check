# Maintenance Guide

## Updating Dependencies

```bash
npm outdated          # see what's behind
npm update             # update within semver ranges
npm run build           # verify the build still passes after updating
```

Pay particular attention to `next`, `react`, and `react-dom` — this project targets Next.js 15 / React 19;
major-version bumps to either should be tested against a full `npm run build` and manual QA pass (see the
Final QA checklist below) before deploying.

## Updating Content

- **Brand/campaign/business changes** → edit the relevant file in `config/` (see `CONFIGURATION.md` and
  `CAMPAIGN_GUIDE.md`). These changes take effect on the next build/deploy (or immediately in `next dev`).
- **Blog posts** → add/edit `.mdx` files in `content/blog/` (see `SEO.md`).
- **Legal copy** → edit `.mdx` files in `content/legal/`; each legal route pulls its `title`/`lastUpdated`
  from frontmatter automatically.

## Deploying Updates

1. Commit changes and open a PR (or push directly per your team's workflow).
2. CI / Vercel Preview builds automatically — review the preview deployment.
3. Merge to your production branch — Vercel (or your CI/CD pipeline) builds and deploys automatically.
4. Spot-check the deployed site: homepage, one service page, one campaign page (if any are active), and the
   sitemap/robots endpoints.

## Final QA Checklist

Run through this before any significant release:

- [ ] Every route in `app/` renders without error (homepage, `/insurance`, all 4 vertical pages, a sample
      state and city page per vertical, `/blog` and a sample article, `/quote` and a service-specific quote
      page, `/contact`, `/about`, `/how-it-works`, `/faq`, all 5 legal pages, `/sitemap-page`, a sample
      active campaign page, `404`, and the error boundary)
- [ ] Every component renders with real (non-empty) config data — no `undefined`/blank sections
- [ ] Keyboard navigation reaches and operates the Navbar dropdown, mobile menu, FAQ accordions, and all
      forms without a mouse
- [ ] Screen reader spot-check on the homepage hero, a form, and the FAQ accordion (labels, error
      announcements, `aria-expanded` states)
- [ ] Responsive check at mobile (375px), tablet (768px), and desktop (1440px) widths
- [ ] All 4 forms (Quote, Contact, Call Back, General Inquiry) submit successfully and show their success
      state; submitting invalid data shows field-level errors
- [ ] Navbar/Footer/Sticky Call Bar all show a phone number (never a blank or broken CTA)
- [ ] `/robots.txt` and `/sitemap.xml` resolve and list the expected routes
- [ ] View source on a service page and a blog article to confirm `<title>`, meta description, canonical
      link, and JSON-LD `<script>` tags are present and accurate
- [ ] Cookie consent banner appears on first visit, and analytics scripts do not fire until a category is
      granted (check the Network tab)
