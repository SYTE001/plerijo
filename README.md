# Personal Portfolio (Next.js + TypeScript)

A modern, minimalist personal portfolio built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Prerequisites

- **Node.js 20+** (recommended: latest LTS)
- **npm 10+**

## Getting Started (Tutor Guide)

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

### 3) Run lint

```bash
npm run lint
```

### 4) Run type-check/test script

```bash
npm run test
```

> In this project, `npm run test` runs TypeScript checks (`tsc --noEmit`) to catch type errors early.

### 5) Create production build

```bash
npm run build
npm run start
```

Open: [http://localhost:3000](http://localhost:3000)

## Project Structure

```text
app/
  api/contact/route.ts   # Contact form API validation endpoint
  globals.css            # Global styles and design tokens
  layout.tsx             # Root layout + font + ThemeProvider
  page.tsx               # Main portfolio page sections
components/
  contact-form.tsx       # Client form with validation and UX states
  navbar.tsx             # Sticky blurred navbar + active section + theme toggle
  section.tsx            # Reusable animated section wrapper
  theme-provider.tsx     # Dark mode context/provider

data/
  portfolio.ts           # Typed data models + content arrays
public/
  profile-placeholder.svg
```

## Customization

Update these fields in `data/portfolio.ts`:

- `projects`
- `experiences`
- `skills`
- `socials`
- `navItems`

Update SEO/basic metadata in `app/layout.tsx`.

## Troubleshooting

### `npm install` fails with registry/network errors

If your environment blocks npm registry access (for example, a corporate sandbox), installation can fail with HTTP errors.

Try:

1. Verify network access to `https://registry.npmjs.org`
2. Check npm proxy config:

```bash
npm config get proxy
npm config get https-proxy
```

3. If needed, clear incorrect proxy values:

```bash
npm config delete proxy
npm config delete https-proxy
```

Then re-run:

```bash
npm install
```

## Notes

- Dark mode preference is persisted in `localStorage`.
- The contact form includes both client-side and server-side validation.
