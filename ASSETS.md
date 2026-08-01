# Asset inventory and provenance

`public/` is both the generated-site output and the deployable asset root. The
HTML files in it are generated; the documents, fonts, images, scripts, and
stylesheets are source assets and must not be removed by a clean build.

## Working map

- `public/documents/` contains language-sorted reference publications. EU
  publications use `european-union/{ga,en,de}/`; the Irish Universal
  Declaration of Human Rights is under `united-nations/ga/`.
- `public/fonts/web/` is the compact set used by most site font choices.
- `public/fonts/Gentium/` contains the OFL-licensed Gentium web subset and its
  licence/provenance files.
- `public/fonts/Gaeilge/` is a historical Irish-type reference collection from
  [Gaelchló](https://www.gaelchlo.com/index.html). It is not part of the site's
  open-source licence; see the README in that folder.
- Full source families elsewhere under `public/fonts/` are retained for
  document work, future subsetting, and accessibility experiments.
- `public/img/profile/` contains the two current commissioned profile avatars.
- `public/img/branding/` contains the earlier Éimí monogram retained for
  brand and compatibility use.
- `public/img/dvs/`, `public/img/projects/`, `public/img/iBook/`, and
  `public/img/iMac/` contain project and gallery media used or ready for use on
  the site.
- `public/img/Flags/`, `public/img/icons/`, and `public/img/Cucons/` are
  reusable upstream-style collections. Their internal names are deliberately
  preserved until an item becomes a public-facing site dependency.
- `public/sig/` and `public/img/email-signature/` support signature assets and
  the compatibility email-signature page.

## Public path conventions

New public-facing paths use lowercase kebab-case names, language folders use
BCP 47 language tags where practical, and file extensions must match their
actual media type. Existing upstream collections keep their original structure
unless a file is promoted into the site's active UI.

When moving an already published asset, add a redirect in `public/_redirects`
and update references in `src/`, not only the generated HTML in `public/`.

## Commissioned portraits

- `eimi-avatar-irish-tricolour.jpg`
- `eimi-avatar-bisexual-pride.jpg`

Commissioned artwork by [Cial](http://www.demon-sushi.com), May 2025. See
[Cial's art portfolio](http://www.demon-sushi.com/art/). No reuse licence is
implied by their presence in this repository.

## Gaelic-type research

The following catalogues were checked while expanding the font resources:

- [Gaelic Fonts for MS-Windows](https://www3.smo.uhi.ac.uk/oduibhin/mearchlar/fonts.htm#Free)
- [An Drouizig's archived font catalogue](https://web.archive.org/web/20100328173540/http://www.drouizig.org/fonts/en/index.html)
- [Gaelic type external links](https://en.wikipedia.org/wiki/Gaelic_type#External_links)

Many legacy downloads are described as "free" but do not include sufficiently
clear redistribution terms. They are research leads, not permission to mirror
the files in `public/`. Gentium was added from its current official SIL package
because the SIL Open Font License explicitly permits redistribution. Gaelchló
fonts were not expanded during this audit because Gaelchló's current terms
require prior permission to redistribute its collection.

## Large-file note

The EU colouring books are larger than 25 MiB each. They are useful reference
assets, but that exceeds the per-file limit on some static-asset hosts. Check
the active hosting limit before exposing them as direct production downloads;
an object store may be a better home if the current platform rejects them.
