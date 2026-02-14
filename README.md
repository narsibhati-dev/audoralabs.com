# audoralabs.com

AudoraLabs marketing site and product studio homepage. Built with the [next-starter](https://github.com/AudoraLabs/next-starter) base (from [create-audora-next](https://www.npmjs.com/package/create-audora-next)).

## Quick Start

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## What's Included

### Core Stack

| Technology   | Version | Notes                          |
| ------------ | ------- | ------------------------------ |
| Next.js      | 16.1.1  | App Router, Turbopack enabled  |
| React        | 19.2.3  | React Compiler enabled         |
| TypeScript   | 5       | Strict mode                    |
| Tailwind CSS | 4       | PostCSS, no config file needed |
| Bun          | Latest  | Package manager and runtime    |

### Pages & Routes

| Route | Description |
| ----- | ----------- |
| `/` | Home: hero, expertise, products, philosophy, blog preview, CTA |
| `/blogs` | Blog index with pagination (3 posts per page) |
| `/blogs/[slug]` | MDX blog post with table of contents and syntax highlighting |
| `/products` | Product listing |
| `/products/[id]` | Product detail (Audora, Better Uptime, Billary, Emply) |
| `/terms` | Terms of service |
| `/privacy` | Privacy policy |

### Content & Data

- **MDX blogs** – `src/blogs/content/*.mdx` with gray-matter frontmatter (`title`, `publishedAt`, `summary`, `image`, `repoUrl`). Rendered with `next-mdx-remote`, rehype-slug, rehype-autolink-headings, rehype-pretty-code.
- **Products** – `src/data/products.ts` (id, name, description, status, techStack, links).
- **Philosophy** – `src/data/philosophy.ts` (principles with icons).
- **Expertise** – `src/data/expertise.ts` (areas with icons).

### SEO

- **Open Graph & Twitter Cards** – Via `getMetadata()` / `getPageMetadata()` in `src/lib/seo.ts`. Default OG image: `public/images/og-image.webp` (or set `NEXT_PUBLIC_OG_IMAGE` to a full URL).
- **Verifying OG image** – After deploy, confirm link previews with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) or [Twitter Card Validator](https://cards-dev.twitter.com/validator). Use your live site URL; crawlers need the image to be publicly reachable (no 404).
- **Structured Data (JSON-LD)** – WebSite, Organization, Breadcrumb (in layout and blog post pages)
- **robots.txt** – `src/app/robots.ts` (allow `/`, disallow `/api/`, `/_next/`, `/private/`, sitemap reference)
- **sitemap.xml** – `src/app/sitemap.ts` (home, products, blog posts with priorities)
- **llms.txt** – `src/app/llms.txt/route.ts` and `src/app/llms-full.txt/route.ts` (content from `src/data/llms.ts`)
- **Title template** – `%s - AudoraLabs`
- **Canonical URLs** – Per-page canonical in metadata
- **PWA Manifest** – `src/app/manifest.ts` (name, icons, screenshots, start_url)

### Security Headers (`next.config.ts`)

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`: camera, microphone, geolocation, browsing-topics disabled

### Developer Experience

- **ESLint 9** – Flat config (`eslint.config.mjs`) with Next.js rules
- **Prettier** – With Tailwind plugin; `bun format` / `bun format:check`
- **Husky + lint-staged** – Pre-commit lint on staged files
- **Path alias** – `@/*` → `./src/*` (`tsconfig.json`)

> **Note:** If you init Git after installing deps, run `bun install` again to enable Husky hooks.

- **Type checking** – `bun check-types` (tsc --noEmit)

### UI & Theming

- **Dark mode** – next-themes with system preference; class-based (`ThemeProvider`, `ThemeToggle`)
- **Fonts** – Inter (sans), Geist Mono (mono) from `next/font/google`
- **cn()** – `src/utils/cn.ts` (clsx + tailwind-merge)
- **Motion** – `motion` for animations (e.g. hero, sections, blog list)
- **3D / GL** – `@react-three/fiber`, `@react-three/drei`, `three`, `maath` for particle hero (`src/components/gl/`)
- **Radix** – Dialog, Dropdown Menu; **cmdk** for global search (`src/components/search-command.tsx`)

### Key Dependencies

| Package | Purpose |
| ------- | ------- |
| next-mdx-remote | MDX compilation for blog posts |
| gray-matter | Frontmatter parsing for MDX |
| rehype-slug, rehype-autolink-headings, rehype-pretty-code | MDX headings and code blocks |
| motion | Animations |
| @react-three/fiber, @react-three/drei, three, maath | 3D particle background |
| cmdk | Command palette / search |
| @radix-ui/react-dialog, @radix-ui/react-dropdown-menu | UI primitives |
| next-themes | Theme switching |
| schema-dts | JSON-LD types |
| lucide-react | Icons |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, metadata, JSON-LD, Header/Footer
│   ├── page.tsx                # Home (sections)
│   ├── manifest.ts             # PWA manifest
│   ├── robots.ts               # robots.txt
│   ├── sitemap.ts              # sitemap.xml (home, products, blogs)
│   ├── llms.txt/route.ts       # llms.txt summary
│   ├── llms-full.txt/route.ts  # llms.txt full doc
│   ├── blogs/
│   │   ├── page.tsx            # Blog index (paginated)
│   │   └── [slug]/page.tsx     # Single post (MDX + TOC)
│   ├── products/
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Product list
│   │   └── [id]/page.tsx       # Product detail
│   ├── terms/page.tsx
│   └── privacy/page.tsx
├── blogs/
│   ├── content/                # .mdx files
│   ├── components/             # mdx.tsx, blog-post-card, table-of-contents, etc.
│   ├── data/mdx.ts             # getBlogPosts(), getBlogPost(slug)
│   └── utils/extract-headings.ts
├── components/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── search-command.tsx      # cmdk command palette
│   ├── section-heading.tsx
│   ├── sections/               # hero, expertise, products, philosophy, blog, cta
│   ├── gl/                     # particle canvas, shaders
│   └── ui/                     # badge, card, dialog, dropdown, product-card, etc.
├── config/
│   └── site.ts                 # SITE_CONFIG, META_THEME_COLORS (from data/site)
├── data/
│   ├── site.ts                 # SITE_DATA (name, url, tagline, description, links, keywords)
│   ├── llms.ts                 # llms.txt content config
│   ├── products.ts             # Product list and getProductById
│   ├── philosophy.ts           # principles
│   └── expertise.ts            # expertiseAreas
├── lib/
│   ├── seo.ts                  # getMetadata, getPageMetadata, getViewport, JSON-LD helpers
│   └── utils.ts
├── styles/
│   └── globals.css             # Tailwind, theme variables
└── utils/
    └── cn.ts
```

## Configuration

### Site metadata

Edit `src/data/site.ts`:

- `name`, `url`, `ogImage`, `tagline`, `description`, `shortDescription`
- `alternateNames`, `twitterHandle`, `githubHandle`, `linkedinHandle`
- `keywords`, `links` (twitter, github, linkedin)

Optional env: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_OG_IMAGE`.

### LLMs.txt

Edit `src/data/llms.ts` for content used by `llms.txt` and `llms-full.txt` routes.

## Scripts

| Command | Description |
| ------- | ----------- |
| `bun dev` | Dev server with Turbopack |
| `bun run build` | Production build (Turbopack) |
| `bun start` | Production server |
| `bun lint` | ESLint |
| `bun lint:fix` | ESLint with auto-fix |
| `bun check-types` | TypeScript (tsc --noEmit) |
| `bun format` | Prettier write |
| `bun format:check` | Prettier check only |
| `bun clean` | Remove .next and node_modules |
| `bun upgrade:next` | Upgrade Next.js |
| `bun upgrade:tailwind` | Upgrade Tailwind |

## Why These Choices

- **Bun** – Fast installs, native TS, small lockfile.
- **App Router** – Server components, streaming, layouts.
- **React Compiler** – Auto memoization.
- **Tailwind CSS 4** – `@theme`, no config for basics.
- **ESLint flat config** – Single composable config.
- **Radix + custom UI** – Primitives where needed, no full component library.
- **Turbopack** – Faster dev and build.
