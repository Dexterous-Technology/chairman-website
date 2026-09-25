# Rework homepage battery hero illustration

## Goal
Replace the current homepage hero battery illustration with the newly uploaded image and restructure the right-side hero block so the battery is larger, four labels float absolutely around it, pulsing dots sit on the corners, and a yellow SVG ring/ellipse connects the dots behind the battery.

## What will change

1. **Asset**
   - Upload `user-uploads://Gemini_Generated_Image_o12c5ao12c5ao12c_1.png` to Lovable Assets.
   - Create `src/assets/chairman-battery-hero.png.asset.json` and import it in `src/routes/index.tsx` as the new `heroDiagram` source.

2. **`src/routes/index.tsx` hero illustration block**
   - Swap the image source to the new asset; keep the same `width`/`height` attributes and `alt` text.
   - Wrap the image in a single relative container with `overflow: visible`.
   - Increase the rendered battery size to roughly 1.4–1.6× its current size while keeping it responsive within the right-hand column.
   - Render four labels absolutely inside that wrapper:
     - Top-left: "Lower price, direct from an Authorized Distributor" — `bottom` set 20 px above the wrapper top edge, `left` aligned above the battery top-left corner, text left-aligned.
     - Top-right: "Form, fit & function replacement" — same vertical offset, `right` aligned above the top-right corner, text right-aligned.
     - Bottom-left: "100% recyclable — the green solution" — 20 px gap below the wrapper bottom edge, `left` aligned under the bottom-left corner, text left-aligned.
     - Bottom-right: "Hazmat exempt — ships by land, sea, or air" — same vertical offset, `right` aligned under the bottom-right corner, text right-aligned.
   - Keep the four pulsing dot elements near the four battery corners inside the same wrapper.
   - Add an SVG `<ellipse>` (or `<circle>` if the wrapper is square) behind the image. It uses `viewBox` scaling so it stays proportional, is colored with the existing `--yellow` token, and passes through or near each dot position. The battery image sits above it via `z-index`.
   - Preserve the existing reduced-motion support for the pulse animation.
   - Below the `lg` breakpoint, switch to the existing stacked mobile layout: centered image followed by the four labels as a simple list, with the ring and corner dots hidden.

3. **`src/styles.css`**
   - Keep the existing `@keyframes battery-heartbeat`, `.battery-callout-dot`, and `.battery-callout-list-dot` utilities.
   - Add a new utility/class for the SVG ring (e.g., `.battery-callout-ring`) using `stroke: var(--yellow)` and no fill.
   - Add positioning helpers for the absolute labels if needed, reusing the existing `text-brand-foreground` color so labels stay white/readable on the navy hero.

## Verification
- Run `tsgo --noEmit` to confirm type safety.
- Run Playwright at desktop width to confirm:
  - The new battery image renders.
  - Labels sit outside the image bounding box with no overlaps.
  - The yellow ring/ellipse connects the four dots behind the battery.
  - The dots pulse.
- Run Playwright at mobile width to confirm the stacked layout (image + label list) and that ring/dots are hidden.
- Check both light and dark modes.

## Estimated credit usage
35–50 credits (image asset upload + single-route component rework + SVG ring styling + desktop/mobile Playwright verification).
