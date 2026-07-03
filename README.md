# Resca-Landing

Landing page for **RESCA** (Rewarding Farmers Conserving Crop Diversity), an
initiative that rewards Andean smallholder farmers for keeping endangered crop
varieties alive. Built to drive donations with a highly visual, responsive,
SEO-optimized experience.

## Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** (parallax, scroll reveals, 3D tilt, counters)
- **next-themes** (dark / light)
- **sharp** for build-time image optimization (AVIF/WebP)
- Automatic **Spanish / English** language detection with manual toggle

## Getting started

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

## Build

```bash
pnpm build
pnpm start
```

## Deploy (Netlify)

This repository root is the Next.js app, so Netlify auto-detects it:

- **Build command:** `next build` (or `pnpm build`)
- **Publish directory:** handled automatically by the Next.js runtime

Optimized images are already committed under `public/images`, so a plain
`next build` is enough. To regenerate them from source art you also need the
`CONTENIDO/` and `LOGOS/` folders and can run `pnpm optimize:images`.
