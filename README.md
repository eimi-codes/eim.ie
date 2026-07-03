# Éimí / eim.ie

**[https://eim.ie](https://eim.ie)**

[![Uses HTML](https://forthebadge.com/badges/uses-html.svg)](https://forthebadge.com)
[![Uses CSS](https://forthebadge.com/badges/uses-css.svg)](https://forthebadge.com)
[![Built With Love](https://forthebadge.com/badges/built-with-love.svg)](https://forthebadge.com)

![HTML5](https://img.shields.io/badge/HTML-standards--mode-7A72BD?style=for-the-badge&labelColor=1C3A2E)
![No Frameworks](https://img.shields.io/badge/Frameworks-none-EBF5EE?style=for-the-badge&labelColor=1C3A2E&color=7A72BD)
![PowerPC Friendly](https://img.shields.io/badge/PowerPC-friendly-CAC6F9?style=for-the-badge&labelColor=1C3A2E&color=7A72BD)
![Gaeilge First](https://img.shields.io/badge/Gaeilge-first-EBF5EE?style=for-the-badge&labelColor=1C3A2E&color=7A72BD)
![License: EUPL 1.2](https://img.shields.io/badge/License-EUPL%201.2-CAC6F9?style=for-the-badge&labelColor=1C3A2E&color=7A72BD)

🌿 **Cad é seo?**
Suíomh pearsanta Gaeilge-first do **Éimí Mhic an Ridire**: socair, inrochtana, retro, agus cairdiúil do PowerPC.

🌿 **What is this?**
A Gaeilge-first personal site for **Éimí Mhic an Ridire**: calm, accessible, retro, and PowerPC-friendly.

## ✨ Gnéithe / Highlights

- 🕰️ Standards-mode HTML, hand-written and lean
- 🌱 Gaeilge first, English alongside it
- ♿ Accessibility-conscious layout, contrast, focus states, and language markup
- 💾 Built for old Macs, slow links, and ordinary browsers
- 🧾 Metadata-rich: Open Graph, `rel="me"`, and Schema.org
- 🛠️ No framework, tiny no-dependency build step, no nonsense

## 🗂️ Struchtúr / Structure

```text
public/
  img/
  posts/
  *.htm
  style.css
  _headers
src/
  includes/
  pages/
tools/
  build.mjs
package.json
wrangler.jsonc
LICENSE.md
style.md
```

Edit pages in `src/pages/` and shared site chrome in `src/includes/`.
The generated site still lives in `public/`.

## 🛠️ Tógáil / Build

```sh
npm run build
```

There are no package dependencies. The build script uses Node.js to combine
`src/pages/` with the shared includes and writes static `.htm` files to
`public/`.

## 🧪 Rith go háitiúil / Run Locally

Build the site, then open `public/index.htm`, or serve the folder:

```sh
npm run build
cd public
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 🚀 Foilsiú / Deploy

Static assets live in `public/`. `wrangler.jsonc` runs `npm run build` before
Wrangler deploys, then publishes `public/` as the static assets directory.

For Cloudflare Workers Builds / Git integration, also set the build command to
`npm run build` in Cloudflare, because Workers Builds has its own build-command
setting.

## 📜 Ceadúnas / License

Source and site scaffolding: **EUPL 1.2**.
Written content and images may have their own terms, noted on-site where needed.
