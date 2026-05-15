# Éimí — Retro Personal Website

A functional retro-era personal website built with early-2000s web standards. Accessible, bilingual (Irish/English), and designed to run on vintage hardware.

**Live:** https://eim.ie/

## Overview

This is an intentionally retro website—not just a visual theme, but actual older-web technology:

- **HTML 4.01 Transitional** — semantic, lean markup
- **Shared CSS file** — `style.css` is loaded by all pages (still no build step)
- **Static HTML** — pure content, no frameworks or JavaScript
- **No external build process** — works as-is
- **Accessible** — WCAG 2.2 AA, bilingual content, readable by screen readers

### Design Philosophy

**Éimí — "Minimalist Tech Gael"** combines:
- Turn-of-millennium aesthetics (PowerPC iMac era)
- Irish-first language support (Gaeilge before English)
- Modern accessibility standards
- Indie developer sensibility (not corporate, not AI hype)
- Restrained Irish modernism (no tourist clichés)

### Target Compatibility

- **Early-2000s hardware**: PowerPC Macs, PowerBooks (OS 9 → 10.5)
- **Vintage browsers**: Safari 1.x–3.x, iCab, older Opera versions
- **Modern devices**: Graceful degradation, works everywhere else too

---

## Project Structure

```
.
├── public/             # Cloudflare Pages / Wrangler static output
│   ├── index.htm       # Home page
│   ├── posts.htm       # Archive of blog posts
│   ├── gallery.htm     # Photo gallery
│   ├── attribution.htm # Credits and licensing
│   ├── disclaimer.htm  # Site disclaimer
│   ├── style.css       # Shared site stylesheet
│   ├── _redirects      # Cloudflare redirects for old post paths
│   ├── img/            # Images, badges, favicons
│   └── posts/          # Blog post files grouped by year
├── wrangler.jsonc      # Cloudflare deploy config
├── README.md           # This file
├── .instructions.md    # Project instructions
│
└── style.md            # Site style guide
```

- `.htm` extension used (early web standard)
- All files are standalone, self-contained
- Each page includes complete HTML structure (no partials/templating)
- Relative paths for navigation
- `public/` is the only directory Cloudflare should serve as the web root

---

## Deployment with Cloudflare Pages

### Quick Start

1. **Push to GitHub** — this repository
2. **Connect to Cloudflare Pages**:
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages → Create project → Connect to Git → Select this repo
3. **Build settings**:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: `public`
   - **Environment**: Production
4. **Deploy** — Cloudflare serves `public/` as the site root

The repository also includes `wrangler.jsonc` for Cloudflare's current Wrangler-based static-assets deploy flow:

```bash
npx wrangler deploy
```

That command uses `assets.directory = "./public"`, which fixes Wrangler's "Could not detect a directory containing static files" error.

For a direct Pages upload instead, use:

```bash
npx wrangler pages deploy public
```

Do not set a Pages deploy command to plain `npx wrangler deploy` if the project is meant to remain a classic Pages deployment; use `npx wrangler pages deploy public`, or leave the deploy command empty and set the build output directory to `public`.

### Why No Build Step?

This is pure static HTML. No build process needed. Every page is ready to serve as-is.

### Custom Domain

Point your domain to Cloudflare and enable it in Pages settings. Currently points to **eim.ie**.

---

## Design System

### Color Palette

Colors are kept as plain hex values in `style.css` for older-browser compatibility. Use these values consistently rather than introducing near-matches:

```css
#EBF5EE  /* Mint Cream — light surfaces */
#1C3A2E  /* Dark Evergreen — main background / strong text */
#7A72BD  /* Lavender Indigo — links / accents */
#CAC6F9  /* Periwinkle — hover / highlights */
```

**Dark Mode**: Background `#1C3A2E`, text `#EBF5EE` (soft, not pure black/white).

### Typography

- **Body**: [Atkinson Hyperlegible Next](https://www.brailleinstitute.org/freefont/) (via Google Fonts)
  - Fallback: Verdana, Arial
  - Size: 11px baseline (retro standard)
  - Line-height: ~1.5
- **Headings**: Clean serif (Fraunces in brand guide)
- **Monospace**: JetBrains Mono (code blocks only)

### Layout

- **Table-based layout** — intentional retro design (not `<div>` soup)
- **Width**: 760px (optimized for 800x600 displays)
- **Sidebar navigation**: 145px left column
- **Main content**: Flexible center area
- **Border radius**: ~16px (CSS classes)
- **Spacing**: 8px rhythm where possible

### CSS Classes

Common utility classes (see individual `.htm` files):

- `.navbox` — navigation/sidebar boxes
- `.contentbox` — main content container
- `.sectionhead` — section headings (with colored left border)
- `.postitem`, `.postdate` — blog post styling
- `.tag` — inline tags
- `.year-divider` — year separators
- `.goodday`, `.hardday` — callout boxes (colored borders)
- `.notice`, `.cta`, `.howto` — content-specific callouts
- `.bilingual-en` — English translations (italicized)

---

## Accessibility

Meets **WCAG 2.2 AA** (AAA where practical):

- ✅ **Color contrast** — Dark Evergreen (#1C3A2E) on Mint Cream (#EBF5EE) ≥ 7:1
- ✅ **Focus states** — 2–3px visible focus ring (Periwinkle)
- ✅ **Links** — underlined + colored (not color alone)
- ✅ **Touch targets** — minimum 44×44px
- ✅ **Language markup** — proper `lang="ga"` and `lang="en"` attributes
- ✅ **Semantic HTML** — headings, lists, proper structure
- ✅ **Bilingual by design** — Irish prominently displayed, never secondary
- ✅ **Motion** — no animations, respects `prefers-reduced-motion`

---

## Language Support

All pages are **bilingual** (Irish/English):

- **Irish-first**: Gaeilge headings/titles appear first
- **Visible distinction**: Both languages equally prominent, clear visual separation
- **Proper diacritics**: Full support for Irish fadas (á, é, í, ó, ú)
- **Screen reader friendly**: `lang` attributes on all language blocks

Example structure:
```html
<h1>Éimí Mhic an Ridire</h1>
<p>Accessibility-focused developer and Gaeilgeoir</p>
```

---

## Current Content

### Blog Posts

| Year | Title | Topic |
|------|-------|-------|
| 2024 | Getting Started | Intro to the retro redesign |
| 2025 | Just Autistic | Disability, functioning, lived experience |
| 2025 | Disabled and Denied | Scottish transport accessibility |
| 2026 | Éimí ata orm, ní hEimi | Irish diacritics and identity |
| 2026 | EUPL as Gaeilge | Missing Irish translations in open-source law |
| 2026 | Passbolt to Vaultwarden | Password manager migration guide |

All posts tagged and linked from `public/posts.htm`.

---

## TODO & Known Issues

### Gallery Page (`public/gallery.htm`)

**Status**: Complete and bilingual

1. Gallery images now use self-hosted `/img/` assets
2. Each photo has descriptive `alt` text
3. Captions are presented in Gaeilge and English
4. Keep adding new photos only when the source image and captions are ready

---

## Development

### No Build Step Required

This is pure static HTML. Just edit `.htm` files and deploy.

### Local Testing

Start a simple HTTP server from the repository root so root-relative assets such as `/style.css`, `/img/`, and `/img/favicon/` resolve the same way they do in production:
```bash
python3 -m http.server 8000 --directory public
# Visit http://localhost:8000
```

You can still inspect individual `.htm` files directly, but images, CSS, and favicons are most reliable through a local server.

### Adding New Content

1. **New blog post**: Create file `public/posts/YYYY/slug.htm`
2. **Update archives**: Add entry to `public/posts.htm`
3. **Update homepage**: Add to latest posts section on `public/index.htm`
4. **Maintain structure**: Copy HTML template from existing post, update content

All pages must include:
- Valid HTML 4.01 Transitional doctype
- Irish and English content
- Proper `lang` attributes
- Navigation sidebar (consistent across all pages)
- Meta tags (charset, description)
- The shared favicon block using `/img/favicon/`

Recommended page-head pattern:

```html
<link rel="stylesheet" href="/style.css" type="text/css">
<link rel="shortcut icon" href="/img/favicon/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png">
<link rel="manifest" href="/img/favicon/site.webmanifest">
<meta name="theme-color" content="#1C3A2E">
```

### Maintaining Consistency

- Use `style.css` for shared styles (avoid per-page embedded `<style>` blocks)
- Keep base font size at 11px
- Use semantic class names (`.navbox`, `.contentbox`, etc.)
- Include bilingual content in every page
- Test in multiple browsers (especially consider retro browser compatibility)

Before committing, run:

```bash
git diff --check
jq . public/img/favicon/site.webmanifest
rg --files-without-match 'href="/img/favicon/site.webmanifest"' -g '*.htm' public
rg --files-without-match '<meta name="theme-color" content="#1C3A2E">' -g '*.htm' public
```

The two `rg --files-without-match` commands should print no files.

---

## Browser Compatibility

### Tested / Supported

- ✅ Safari 1.x–3.x (PowerPC Mac OS X)
- ✅ iCab 3.x (vintage Mac)
- ✅ Opera 9.x–10.x
- ✅ Firefox 2.x–3.x
- ✅ Modern browsers (Chrome, Safari, Firefox, Edge)

### Graceful Degradation

- No JavaScript required
- CSS 2.1 safe (no modern grid/flexbox complexity)
- Table-based layout compatible with all era browsers
- Semantic HTML works without CSS

---

## Performance

- **No external build step** — instant deployment
- **Minimal dependencies** — just one Google Font
- **Lean markup** — each page typically 10–15KB
- **Fast load times** — essential for vintage device support
- **Cloudflare edge caching** — automatic on all `.htm` files

---

## Attribution & Licensing

See `public/attribution.htm` for full credits, including:

- Font sources (Atkinson, Fraunces, JetBrains Mono)
- Color palette inspiration
- Accessibility resources
- Open-source tools used

---

## Contributing

This is a personal website, but suggestions/feedback welcome:

1. **Issues**: Report accessibility problems, rendering issues, outdated content
2. **Content corrections**: Typos, outdated info
3. **Design questions**: Ask before major changes (retro aesthetic is intentional)

---

## Project Instructions

Full design system, accessibility guidelines, and implementation notes are in `.instructions.md` (for Copilot integration).

Quick reference:
- **Minimum contrast**: WCAG AA (7:1 for text)
- **Touch targets**: 44×44px minimum
- **Focus states**: Always visible (2–3px ring)
- **Motion**: Subtle only, respect `prefers-reduced-motion`
- **Bilingual**: Irish equally prominent as English

---

## Questions?

Refer to:
- `.instructions.md` — Full project guidelines
- `public/attribution.htm` — Resources and credits
- Individual `.htm` files — Code examples and patterns

---

**Made with care for accessibility, simplicity, and retro charm.** ☘️

> "Gaelscoil múinteoir meets indie accessibility-focused developer."
