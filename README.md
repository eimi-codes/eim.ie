# eim.ie

Suíomh pearsanta Éimí ar Hugo, deartha leis an mbrandáil 2026 **Minimalist Tech Gael**.

## Stack

- Hugo static site generator
- CSS custom properties (design tokens)
- Font files from `/static/fonts` with Google Fonts fallback
- GitHub Pages deployment via Actions

## Site architecture

- `content/_index.md` – homepage metadata
- `content/about` – about page
- `content/writing` – posts list + entries
- `content/projects` – projects list + entries
- `content/gallery` – gallery list + entries
- `content/links` – links/contact page
- `content/now` – now page
- `layouts/_default` – reusable list/single/base templates
- `layouts/partials/components` – starter component library (`card`, `knot`)
- `assets/css/site.css` – design token system + global styles

## Content model

- **Pages**: `title`, `summary`
- **Posts**: `title`, `date`, `summary`, `tags`, `categories`
- **Projects**: `title`, `date`, `summary`, `stack`, `repo`, `status`

## Development

```bash
hugo server
```

## Build

```bash
hugo --minify
```
