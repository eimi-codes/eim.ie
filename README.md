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
├── index.htm           # Home page
├── posts.htm           # Archive of blog posts
├── gallery.htm         # Photo gallery
├── attribution.htm     # Credits and licensing
├── style.css          # Shared site stylesheet
├── README.md          # This file
├── .instructions.md   # Copilot project instructions
│
└── posts/             # Blog post directories
    ├── 2024/
    │   └── getting-started/index.htm
    ├── 2025/
    │   ├── disabled-and-denied/index.htm
    │   └── just-autistic/index.htm
    └── 2026/
        ├── eimi-fada/index.htm
        ├── eupl-as-gaeilge/index.htm
        └── passbolt-to-vaultwarden/index.htm
```

- `.htm` extension used (early web standard)
- All files are standalone, self-contained
- Each page includes complete HTML structure (no partials/templating)
- Relative paths for navigation

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
   - **Build output directory**: (leave empty or set to `.`)
   - **Environment**: Production
4. **Deploy** — Cloudflare automatically serves `.htm` files

### Why No Build Step?

This is pure static HTML. No build process needed. Every page is ready to serve as-is.

### Custom Domain

Point your domain to Cloudflare and enable it in Pages settings. Currently points to **eim.ie**.

---

## Design System

### Color Palette

All colors use CSS custom properties for consistency:

```css
--bg-paper: #EBF5EE         /* Mint Cream — page background */
--text-ink: #1C3A2E         /* Dark Evergreen — main text */
--brand-500: #7A72BD        /* Lavender Indigo — links/accent */
--accent-soft: #CAC6F9      /* Periwinkle — hover/highlights */
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

All posts tagged and linked from `posts.htm`.

---

## TODO & Known Issues

### Gallery Page (`gallery.htm`)

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

1. Open any `.htm` file in a browser
2. Navigation works via relative paths
3. No local server needed (but recommended for testing)

Optional: Start a simple HTTP server for consistent testing:
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Adding New Content

1. **New blog post**: Create directory `posts/YYYY/slug/index.htm`
2. **Update archives**: Add entry to `posts.htm`
3. **Update homepage**: Add to latest posts section on `index.htm`
4. **Maintain structure**: Copy HTML template from existing post, update content

All pages must include:
- Valid HTML 4.01 Transitional doctype
- Irish and English content
- Proper `lang` attributes
- Navigation sidebar (consistent across all pages)
- Meta tags (charset, description)

### Maintaining Consistency

- Use `style.css` for shared styles (avoid per-page embedded `<style>` blocks)
- Keep base font size at 11px
- Use semantic class names (`.navbox`, `.contentbox`, etc.)
- Include bilingual content in every page
- Test in multiple browsers (especially consider retro browser compatibility)

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

See `attribution.htm` for full credits, including:

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
- `attribution.htm` — Resources and credits
- Individual `.htm` files — Code examples and patterns

---

**Made with care for accessibility, simplicity, and retro charm.** ☘️

> "Gaelscoil múinteoir meets indie accessibility-focused developer."
