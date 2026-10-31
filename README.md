# Next.js template

This is a Next.js template with shadcn/ui.

## SEO

Canonical URLs, Open Graph, Twitter cards, the sitemap and robots.txt are all
generated from code.

| Concern | Where |
| --- | --- |
| Canonical host, titles, OG image | `lib/seo.ts` |
| Business name, phone, address, geo | `lib/site-config.ts` |
| Hotel/WebSite structured data | `lib/structured-data.ts` |
| Sitemap | `app/sitemap.ts` |
| Robots | `app/robots.ts` |
| Social preview image | `public/assets/images/og-image.jpg` (1200×630) |

Environment variables:

- `NEXT_PUBLIC_SITE_URL` — production origin used for canonicals and the
  sitemap. Defaults to `https://eldoretwhitecastle.com`; set it to the real
  domain before going live (preview deployments should not be indexed).
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — optional Search Console token.

When the phone number, address, room count or check-in times change, update
`lib/site-config.ts` so the JSON-LD stays accurate.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```
