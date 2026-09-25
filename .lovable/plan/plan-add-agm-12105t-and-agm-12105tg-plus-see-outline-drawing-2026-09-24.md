# Plan: Add AGM-12105T and AGM-12105TG, plus "See Outline Drawing" on every product page

## 1. Two new batteries in the catalogue (18 becomes 20)

I took the specs from the uploaded drawings and the existing AGM-12105TG page. Both batteries share the same specs:

| Part | Volts | L x W x H (in) | Weight | 20-hr capacity | Min @ 25A |
|---|---|---|---|---|---|
| AGM-12105T | 12 | 12.86 x 6.58 x 8.16 | 64 lb | 105 Ah | 195 |
| AGM-12105TG | 12 | 12.86 x 6.58 x 8.16 | 64 lb | 105 Ah | 195 |

- Both marked In stock and Certified. AGM-12105TG is listed under Robotics & Automation (AutoStore robots). AGM-12105T is listed under Robotics & Automation and Material Handling.
- They then show up automatically in Find Your Battery, in the random lineups on the category pages, and each gets its own product page (`/products/AGM-12105T`, `/products/AGM-12105TG`).
- The AGM-12105TG product page also links to the existing dedicated AGM-12105TG page. That page itself is not changed.

## 2. "See Outline Drawing" button and popup

- The button sits next to the indicator chips under the four key figures on each product page. It uses the site's yellow button style.
- It opens a centered popup that matches the existing Envelope Drawing popup:
  - The title shows the part number, and there's a close (X) button
  - Clicking outside the popup or pressing Escape also closes it
  - The PDF fits the popup on desktop and phone, and you can scroll and zoom it
  - A spinner shows while the drawing loads
  - "Download" and "Open in new tab" links are always visible, as a fallback
- Drawings follow your mapping, so all 20 batteries have one. AGM-1265T uses the AGM-1280T drawing, as you listed.

## Technical details

- Upload the 19 PDFs with `lovable-assets` to `src/assets/outline-drawings/<file>.pdf.asset.json`, normalizing `AGM-12105TG_Rev_B.PDF` to `.pdf`.
- `src/lib/catalog.ts`: add two `mk(...)` entries and update `RANGES` if needed (current ranges already cover these values).
- New `src/lib/outline-drawings.ts`: a part-to-URL map plus `getOutlineDrawing(part)`.
- Update `src/components/PdfModal.tsx` without breaking the AGM-12105TG page's current use of it:
  - A loading overlay that hides on iframe `onLoad`
  - Viewer height `h-[75vh] sm:h-[80vh]`
  - Download and "Open in new tab" links, both shown on mobile
- `src/routes/products.$part.tsx`: button, modal state and `<PdfModal>`; for AGM-12105TG, also a small link to `/agm-12105tg`.
- Verify with `tsgo --noEmit`, then use Playwright to check:
  - The new parts appear in the finder and their product pages render
  - The popup works on AGM-1265T, AGM-12210L and AGM-12105T, including the loading state and closing via X, Escape and the backdrop
  - It works in mobile view and dark mode
