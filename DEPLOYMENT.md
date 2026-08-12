# Deployment

## Vercel (recommended)

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Framework preset: Next.js (auto-detected).
4. Add environment variables (see `CONFIGURATION.md`) in Project Settings → Environment Variables for both
   Production and Preview.
5. Deploy. Vercel runs `npm run build` automatically, which also triggers the `next-sitemap` postbuild step.

## Custom Domain

1. In Vercel: Project Settings → Domains → add your domain.
2. Update `NEXT_PUBLIC_SITE_URL` and `next-sitemap.config.js`'s `siteUrl` to match the final domain exactly
   (including `https://` and no trailing slash) — this value feeds canonical URLs, sitemap entries, and
   Open Graph URLs throughout the site.
3. Point your domain's DNS to Vercel per their dashboard instructions.

## Environment Variables in Production

At minimum, set:

```
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_GA4_ID
NEXT_PUBLIC_GTM_ID
NEXT_PUBLIC_GOOGLE_ADS_ID
NEXT_PUBLIC_META_PIXEL_ID
NEXT_PUBLIC_CLARITY_ID
```

Analytics scripts only fire once a visitor grants the relevant cookie-consent category (see
`components/consent/analytics-scripts.tsx`), so it's safe to set these in every environment.

## Other Hosts (self-hosted / Docker)

The project builds as a standard Next.js app and can be self-hosted with `next start` behind any Node
process manager, or containerized. If self-hosting, ensure:

- `middleware.ts` (campaign/UTM attribution cookie) runs at the edge or Node runtime per your host's
  support for Next.js middleware.
- Static assets under `public/` are served with long cache lifetimes; Next.js handles this automatically
  under `next start` / Vercel, but a custom reverse proxy config may need explicit cache headers.

## Production Build Checklist

- [ ] `npm run build` completes with zero type errors
- [ ] All placeholder images replaced
- [ ] `config/tracking.config.ts` DIDs point to real numbers or a real call-tracking vendor
- [ ] `config/campaign.config.ts` reviewed — remove/disable example campaigns before go-live
- [ ] `config/analytics.config.ts` / environment variables point to real GA4/GTM/Ads/Pixel/Clarity IDs
- [ ] `next.config.js` Content-Security-Policy reviewed against final third-party script list
- [ ] `robots.txt` / `sitemap.xml` verified at the deployed domain
