# Vertabyte brand assets

The approved identity combines a navy hexagon, white V, green right-tip accent and subtle binary texture. These files are the production artwork for Vertabyte Tech Limited.

## Guide

- `brand-guidelines.pdf`: printable visual guide.
- `brand-guidelines.png`: high-resolution visual guide.
- `brand-guidelines.html`: editable layout source; open locally with the repository folder structure intact.

## Artwork

Website-ready files live in `../public/brand/`. All SVGs use vector paths, including the wordmark and binary glyphs, and do not load fonts or external resources. All PNG exports have transparent backgrounds.

| Base filename | Use |
| --- | --- |
| `logo` | Full-colour horizontal logo, simplified for navigation and everyday use |
| `logo-textured` | Horizontal logo with detailed binary emblem, for large presentation |
| `logo-mono` | Navy and white horizontal logo for one-colour use |
| `logo-reverse` | White wordmark and reversed emblem with green accent for dark backgrounds |
| `symbol` | Plain full-colour emblem |
| `symbol-textured` | Emblem with exact `01010110` binary rows |
| `symbol-mono` | Navy and white emblem |
| `symbol-reverse` | White emblem with navy V, for dark backgrounds |
| `favicon` | Padded SVG favicon |
| `icon-32`, `icon-180`, `icon-192`, `icon-512` | PNG icons at the specified square pixel sizes |

Each logo/symbol base has both SVG and PNG versions. Horizontal PNGs are 2400px wide; standalone symbol PNGs are 1024px wide. Icons are intentionally plain for small-size clarity. The root `public/favicon.svg` and `public/apple-touch-icon.png` are the website copies.

`source/emblem-master.svg` is the detailed editable emblem. `source/wordmark.svg` is the outlined wordmark, reconstructed from the approved concept. The wordmark is artwork, not a font specification. Supporting website typography remains Arial, Helvetica, sans-serif. No font files are redistributed.

## Colours and rules

- Navy: `#142C3B` / RGB 20, 44, 59.
- Green: `#BFEA75` / RGB 191, 234, 117.
- White: `#FFFFFF`.
- Supporting body text: `#52636D`; pale surface: `#F3F6F7`.
- Binary: white paths at 23% opacity, clipped inside the navy hexagon.
- Maintain clear space of at least one quarter of the emblem width.
- Use the simplified horizontal logo at widths of 150px or more; symbol at 24px or more. Use the dedicated favicon below that.
- Show binary only when the emblem is at least 96px wide. Use the plain version for smaller placements.
- Never stretch or retype the wordmark, rotate the emblem, move the accent, or add effects.

The guide's HTML is editable using normal HTML/CSS. Open in a browser to print a PDF using the page size specified in its print stylesheet. Its relative image links use the SVG files in `public/brand/`.
