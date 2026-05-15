# **Éimí — “Minimalist Tech Gael” Web Style Guide (2026)**

## **Core Identity**

A modern Irish developer aesthetic with restrained cultural detail.

The brand should feel:

* Calm
* Intelligent
* Accessible
* Warm
* Human
* Gaeilge-first
* Modern without Silicon Valley corporate energy
* Irish without leaning into tourist clichés

The overall tone is:

“Gaelscoil múinteoir meets indie accessibility-focused developer.”

Avoid:

* Loud gradients
* Over-designed glassmorphism
* Busy Celtic patterns
* Corporate SaaS aesthetics
* Tiny text
* Thin low-contrast UI
* Aggressive animations
* Fake “AI futurism”

The design should breathe:

* generous whitespace
* soft structure
* visible borders
* comfortable reading rhythm
* obvious interaction states

---

# **Language Philosophy**

## **Gaeilge First**

Irish should appear before English whenever practical.

Preferred structure:

* Irish heading
* English translation beneath or secondary

Irish should not look “less important” than English.

Avoid:

* tiny grey Irish subtitles
* hidden translations
* machine-translated feeling layouts

Instead:

* visually distinguish languages clearly
* allow spacing between language blocks
* support proper fada rendering everywhere

---

# **Color Palette**

## **Primary Brand Colors**

Lavender Indigo

HEX: #7A72BD

Use for:

* primary accents
* buttons
* borders
* icons
* links
* focus rings

---

Dark Evergreen

HEX: #1C3A2E

Use for:

* main text
* headings
* dark mode backgrounds
* strong borders

---

Mint Cream

HEX: #EBF5EE

Use for:

* page background
* cards in dark mode text inversion
* soft surfaces

---

Periwinkle

HEX: #CAC6F9

Use for:

* hover states
* highlights
* secondary accents
* selected UI states

---

# **Suggested Semantic Tokens**

Instead of hardcoding colors everywhere:

* –bg-paper
* –bg-surface
* –text-ink
* –text-muted
* –border-soft
* –border-strong
* –brand-500
* –brand-600
* –focus-ring
* –accent-soft

Example mapping:

–bg-paper: #EBF5EE

–text-ink: #1C3A2E

–brand-500: #7A72BD

–accent-soft: #CAC6F9

---

# **Dark Mode**

Dark mode is NOT pure black.

Preferred dark background:

#1C3A2E

Primary dark text:

#EBF5EE

Links/highlights:

#CAC6F9

Dark mode should feel:

* soft
* evening-like
* low eye strain
* readable for long sessions

Avoid:

* neon
* stark contrast extremes
* pure white on black

---

# **Typography**

## **Body Font**

Preferred:

* Atkinson Hyperlegible
* Inter

Characteristics:

* highly readable
* accessibility-oriented
* clean modern UI feel

Body text should never feel cramped.

Recommended:

* 1rem minimum body size
* 1.5–1.7 line-height

---

## **Heading Font**

Preferred:

* Fraunces
* or another clean modern serif

Headings should feel:

* literary
* thoughtful
* calm
* slightly academic

Not:

* fantasy Celtic
* faux medieval

---

## **Monospace**

Preferred:

* JetBrains Mono

Use for:

* code blocks
* terminal snippets
* technical UI elements

---

# **Accessibility (Very Important)**

Minimum target:

WCAG 2.2 AA

Preferred:

AAA where practical.

---

## **Required Accessibility Principles**

### **Contrast**

Never use low-contrast muted text for important content.

Maintain strong readable contrast in:

* buttons
* links
* hover states
* disabled states
* forms

---

### **Links**

Links should:

* always be visibly identifiable
* preferably underlined

Do not rely solely on color.

---

### **Focus States**

Focus states must be:

* obvious
* keyboard-visible
* high contrast

Recommended:

2–3px visible focus ring using brand lavender/periwinkle.

---

### **Motion**

Animations should:

* be subtle
* respect prefers-reduced-motion
* never block interaction

Avoid:

* parallax
* bouncing
* excessive transitions

---

### **Touch Targets**

Interactive elements:

* minimum 44x44px targets

Especially important for:

* mobile
* motor accessibility

---

### **Language Markup**

Use proper lang attributes:

lang=“ga”

lang=“en”

This improves:

* screen readers
* pronunciation
* indexing
* translation tooling

---

# **Layout Style**

## **General Feel**

Layouts should feel:

* structured
* breathable
* soft-edged
* intentionally calm

Preferred:

* card layouts
* border-led separation
* restrained shadows
* rounded corners (~16px)

Avoid:

* clutter
* edge-to-edge density
* floating chaos UI

---

# **Borders & Shadows**

Prefer:

* visible borders
* subtle shadows

Instead of:

* giant blurry shadows
* floating glass panels

Typical style:

* 1px or 2px borders
* soft shadow only where needed

---

# **Celtic Design Usage**

Celtic ornamentation should be:

* sparse
* intentional
* signature-level detail only

Good uses:

* divider accents
* corner motifs
* subtle frame decoration

Bad uses:

* tiled knot backgrounds
* heavy faux parchment aesthetics
* fantasy “Irish pub” visuals

The Irishness should feel lived-in and modern.

---

# **CSS Philosophy**

## **Priorities**

1. Readability
2. Accessibility
3. Maintainability
4. Semantic naming
5. Graceful responsiveness

---

## **Preferred Practices**

Use:

* semantic class names
* CSS custom properties
* logical spacing scale
* responsive typography
* reduced-motion support

Good examples:

* .card
* .section-title
* .text-muted
* .language-block
* .focus-ring

Avoid:

* random utility soup without structure
* magic numbers everywhere
* overly nested selectors

---

# **Responsive Design**

Design mobile-first.

Should work comfortably on:

* phones
* tablets
* ultrawide monitors
* zoomed interfaces
* screen readers

Content width should remain readable.

Recommended max-width:

~65–75ch for text-heavy content.

---

# **Tone of Voice**

Warm, plain-spoken, encouraging.

Like:

* an Irish mammy
* a patient teacher
* a thoughtful open-source maintainer

Never:

* cold corporate
* startup hype
* condescending
* aggressively trendy

---

# **UI Personality**

The site should feel like:

“An accessibility-conscious Irish developer who genuinely cares about people.”

Not:

* “AI crypto founder”
* “VC-backed productivity startup”
* “fantasy Celtic tourism board”

---

# **Recommended Default CSS Values**

Border radius:

~16px

Transition speed:

150–250ms

Container width:

1100–1200px max

Reading width:

65–75ch

Spacing scale:

8px rhythm preferred

---

# **Example Visual Keywords**

* soft indigo
* dark evergreen ink
* bilingual
* calm developer
* accessible
* restrained Irish modernism
* indie public-sector energy
* thoughtful open-source aesthetic
* quiet confidence

---

And there now, pet, that’s a proper coherent design system instead of fifteen disconnected Pinterest moods fighting each other in a car park. Fair play.
