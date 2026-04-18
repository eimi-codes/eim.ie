# 🌿 eim.ie

> Suíomh pearsanta Éimí ar Hugo | Éimí's personal website built with Hugo  
> Deartha leis an mbrandáil 2026 **Minimalist Tech Gael** | Designed with 2026 branding **Minimalist Tech Gael**

[![Hugo](https://img.shields.io/badge/Hugo-000000?style=flat&logo=hugo)](https://gohugo.io/)
[![Deployed with GitHub Pages](https://img.shields.io/badge/Deployed%20with-GitHub%20Pages-success?style=flat&logo=github)](https://github.com/eimi-codes/eim.ie)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](LICENSE)
[![Language: Bilingual (GA/EN)](https://img.shields.io/badge/Language-Bilingual%20GA%2FEN-blue?style=flat)](https://eim.ie/)
[![Accessibility: WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-brightgreen?style=flat)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 📑 Table of Contents

- [About](#-about)
- [Site Sections](#-site-sections)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Development](#-development)
- [Build & Deployment](#-build--deployment)
- [Content Model](#-content-model)
- [Design System](#-design-system)
- [To-Do Suggestions](#-to-do-suggestions)

---

## 💭 About

**Éimí Mhic an Ridire** is an Irish woman living in North-East Scotland with expertise in **digital accessibility, neurodiversity, and disability rights**. This is her personal website featuring writing, photography, and projects centered on building tech that works for everyone.

### Core Values

🔗 **Bridges, not walls** – Contributing to open-source projects like Wikimedia Commons and OpenStreetMap  
♿ **Accessibility-first design** – Real-world insights as a wheelchair user and neurodivergent technologist  
🌍 **Bilingual content** – Irish language promotion alongside English  
💻 **Minimalist digital experience** – Clean, fast, and intentional design

---

## 🗂️ Site Sections

| Section                        | Purpose                                        | Status         |
| ------------------------------ | ---------------------------------------------- | -------------- |
| 🏠 **Home** (`/`)              | Landing page with site introduction            | ✅ Active      |
| 📝 **Writing** (`/writing/`)   | Blog posts on work, language, and digital life | ✅ 4 articles  |
| 🖼️ **Gallery** (`/gallery/`)   | Photography and visual projects                | ✅ In progress |
| 👤 **About** (`/about/`)       | Bio, projects, and now page                    | ✅ Active      |
| 🔗 **Links** (`/links/`)       | Curated link directory                         | ✅ Static      |
| 📌 **Projects** (`/projects/`) | Ongoing projects and updates                   | 🔄 Planned     |

---

## 🏗️ Architecture

```
eim.ie/
├── content/              # Markdown content (Gaeilge & English)
│   ├── _index.md        # Homepage metadata
│   ├── about/           # About page + aliases
│   ├── writing/         # Blog posts
│   ├── gallery/         # Visual content
│   ├── projects/        # Project pages
│   ├── links/           # Link directory
│   └── now/             # Now page (aliased to /about)
├── layouts/             # Hugo templates
│   ├── _default/        # Reusable templates
│   │   ├── baseof.html  # Base template wrapper
│   │   ├── list.html    # List page template
│   │   └── single.html  # Single page template
│   └── partials/        # Reusable components
│       ├── head.html    # Meta & styles
│       ├── header.html  # Navigation
│       ├── footer.html  # Social links
│       └── components/  # Modular components
│           └── card.html
├── assets/              # Compiled assets
│   └── css/             # Design token system
├── static/              # Static assets
│   └── fonts/           # Local font files
└── hugo.toml            # Hugo configuration
```

---

## 🛠️ Tech Stack

| Layer          | Technology                                      | Notes                                     |
| -------------- | ----------------------------------------------- | ----------------------------------------- |
| **Generator**  | [Hugo](https://gohugo.io/)                      | Static site generator                     |
| **Language**   | [TOML](https://toml.io/) / Markdown             | Configuration & content                   |
| **Styling**    | CSS + Custom Properties                         | Design tokens system                      |
| **Typography** | Local Web Fonts                                 | Accessibility-focused                     |
| **Fonts**      | Atkinson Hyperlegible, Fraunces, JetBrains Mono | High legibility & variable support        |
| **Hosting**    | GitHub Pages                                    | Free, fast, integrated                    |
| **CI/CD**      | GitHub Actions                                  | Automated deployment                      |
| **Markup**     | Goldmark                                        | Secure Markdown renderer (unsafe = false) |

---

## 👨‍💻 Development

Start the Hugo development server with live reload:

```bash
hugo server
```

The site will be available at `http://localhost:1313`

### Development Commands

```bash
# Watch for changes
hugo server --watch

# Include draft content
hugo server -D

# Verbose output
hugo server -v
```

---

## 🚀 Build & Deployment

### Local Build

```bash
hugo --minify
```

This generates the `public/` folder with minified assets.

### GitHub Pages Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions (`/.github/workflows/hugo.yml`):

- Triggered on push to `main` branch
- Builds with Hugo
- Deploys to `gh-pages` branch
- Live at: https://eim.ie/

---

## 📋 Content Model

### Pages (Static Content)

```toml
+++
title = 'Page Title'
summary = 'Brief description'
aliases = ['/alternative-url/']
+++
```

### Posts (Blog Articles)

```toml
+++
title = 'Article Title'
date = 2026-04-18
summary = 'Summary for listings'
tags = ['tag1', 'tag2']
categories = ['category']
+++
```

### Taxonomies

- `tags` – Topic labels (accessibility, neurodivergent, etc.)
- `categories` – Content grouping

---

## 🎨 Design System

### Design Tokens

The site uses **CSS custom properties (variables)** defined in `assets/css/site.css`:

- Color tokens for semantic color values
- Typography tokens for consistent font usage
- Spacing/sizing tokens for layout

### Typography Stack

| Font                      | Usage     | Features                                            |
| ------------------------- | --------- | --------------------------------------------------- |
| **Atkinson Hyperlegible** | Body text | High x-height, clear distinction between characters |
| **Fraunces**              | Headings  | Variable font, optical sizing                       |
| **JetBrains Mono**        | Code      | Monospace, excellent readability                    |

### Accessibility Features

✅ WCAG 2.1 AA compliant  
✅ Semantic HTML  
✅ High contrast ratios  
✅ Keyboard navigation  
✅ Screen reader optimized  
✅ No auto-playing media

---

## ✅ To-Do Suggestions

### High Priority

- [ ] **Add sitemap.xml generation meta** – Update README with sitemap URL and SEO best practices
- [ ] **Implement search functionality** – Add a site search feature (e.g., Lunr.js or Fuse.js) for blog posts
- [ ] **Create contribution guidelines** – Add `CONTRIBUTING.md` for potential contributors/translators
- [ ] **Add analytics dashboard** – Document privacy-respecting analytics strategy (Plausible/Fathom)
- [ ] **Language switcher UI** – Improve Gaeilge/English toggle visibility and prominence

### Medium Priority

- [ ] **Expand projects section** – Complete `/projects/` with detailed project showcases
- [ ] **Blog series structure** – Add support for multi-part articles with navigation
- [ ] **Image optimization** – Add responsive image pipeline with WebP formats and srcsets
- [ ] **Social media cards** – Implement Open Graph meta tags for better link previews
- [ ] **Related posts feature** – Add "Related articles" suggestions based on tags
- [ ] **Translation workflow** – Document process for maintaining bilingual content sync

### Low Priority (Nice-to-Have)

- [ ] **Dark mode toggle** – Add optional dark theme preference
- [ ] **Reading time estimates** – Display estimated reading time on articles
- [ ] **Comments section** – Evaluate privacy-respecting comment system (e.g., Remark42)
- [ ] **RSS feed customization** – Enhance feed with summaries, images, and categories
- [ ] **Performance budget tracking** – Add CI check for Core Web Vitals
- [ ] **Changelog page** – Document site updates and design iterations
- [ ] **Speaking/Conference page** – Showcase talks, presentations, and appearances
- [ ] **Newsletter signup** – Consider minimal email subscription option

### Technical Debt

- [ ] **Automated link checker** – CI job to detect broken internal/external links
- [ ] **Accessibility audit automation** – Automated WCAG checks in CI
- [ ] **CSS architecture review** – Consider CSS modules or BEM structure as site grows
- [ ] **Component library docs** – Document reusable component patterns in Markdown
- [ ] **Benchmark competitors** – Compare site speed/accessibility with similar Irish tech sites

---

## 📞 Connect

- 🦋 **Bluesky**: [@eim.ie](https://bsky.app/profile/eim.ie)
- 🐘 **Mastodon**: [@eimi@mastodon.ie](https://mastodon.ie/@eimi)
- 🐙 **GitHub**: [@eimi-codes](https://www.github.com/eimi-codes)

---

**Last updated**: April 2026 | **Current branch**: `trim` | **Status**: 🚧 Website Refresh 2026
