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
- 🛠️ No framework, no build step, no nonsense

## 🗂️ Struchtúr / Structure

```text
public/
  index.htm
  posts.htm
  gallery.htm
  attribution.htm
  disclaimer.htm
  posts/
  img/
  style.css
  _headers
wrangler.jsonc
LICENSE.md
style.md
```

## 🧪 Rith go háitiúil / Run Locally

Open `public/index.htm`, or serve the folder:

```sh
cd public
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 🚀 Foilsiú / Deploy

Static assets live in `public/`. Cloudflare Workers/Pages reads that from `wrangler.jsonc`.

## 📜 Ceadúnas / License

Source and site scaffolding: **EUPL 1.2**.
Written content and images may have their own terms, noted on-site where needed.
