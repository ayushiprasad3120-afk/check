# Installation

## Requirements

- Node.js 20 LTS or newer
- npm 10+ (bundled with Node 20)

## Steps

```bash
git clone <your-repo-url> insuredirect
cd insuredirect
npm install
cp .env.example .env.local   # create this from CONFIGURATION.md's variable list
npm run dev
```

The site runs at `http://localhost:3000`.

## Development

- `npm run dev` — Next.js dev server with fast refresh.
- Edit files under `config/` to change brand, services, navigation, FAQs, testimonials, campaigns, states,
  or tracking behavior — most content changes never require touching a component.
- Blog posts live as MDX files in `content/blog/`; author profiles in `content/authors/*.json`.

## Production Build

```bash
npm run build
npm run start
```

`npm run build` triggers `postbuild` (see `package.json`), which runs `next-sitemap` to generate
`public/sitemap-*.xml` files as a companion to the native `app/sitemap.ts` route.

## Troubleshooting

- **`npm error ERESOLVE unable to resolve dependency tree` on `lucide-react`**: fixed as of the version
  pinned in `package.json` (`^0.460.0`), which has a React 19–compatible peer range — earlier versions
  (including `^0.383.0`, which this project shipped with initially) only declare support for React 16–18
  and hard-fail `npm install` against React 19. As a safety net against the same class of issue with any
  other dependency in the future, `.npmrc` sets `legacy-peer-deps=true`, so a peer mismatch degrades to a
  warning instead of blocking the build — this applies automatically on Vercel and most CI hosts, which
  read `.npmrc` during `vercel build` / `npm install`.
- **Type errors on build**: this project was generated without network access to run `npm install`, so a
  full type-check has not been executed end-to-end. Run `npx tsc --noEmit` after installing and address any
  surfaced errors — most likely candidates are React 19 / Next.js 15 type signature changes that shifted
  after this project's dependency versions were pinned.
- **Missing images**: `public/images/*` referenced by config (logo, OG images, blog covers, author avatars)
  are not included as binary files — add your own before deploying.
