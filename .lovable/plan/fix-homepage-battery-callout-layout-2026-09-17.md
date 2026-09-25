# Fix homepage battery callout layout

## Goal
Polish the homepage hero diagram so the illustration sits cleanly on the navy brand background, the four HTML labels sit outside the battery graphic, and the new supplied illustration replaces the current one. Keep the pulsing-dot animation and the mobile stacked-label behavior unchanged.

## Changes

1. **Remove the white card behind the illustration**
   - Drop the `bg-brand-foreground` background on the figure's inner container so the battery diagram sits directly on the existing `--brand` hero background.

2. **Reposition desktop labels outside the illustration**
   - Switch from absolute labels overlaid on the image to a padded, relative container that reserves gutter space around the image.
   - Place each label in its corresponding gutter, aligned with the image's corner dot:
     - Top-left label on the left, aligned with the top-left dot.
     - Top-right label on the right, aligned with the top-right dot.
     - Bottom-left label on the left, aligned with the bottom-left dot.
     - Bottom-right label on the right, aligned with the bottom-right dot.
   - Ensure generous margin so no label text touches the battery outline, connector lines, or image edges at any desktop width.

3. **Make all label text white**
   - Change desktop label color from navy to white (`text-brand-foreground`).
   - Keep mobile list labels in their current white/light color.

4. **Swap the illustration asset**
   - Upload `Untitled-1.png` as a new Lovable asset and replace the current `Chairman.png` source in the homepage hero.
   - Preserve the existing centered sizing, aspect-ratio handling, and `object-contain` rendering.

5. **Keep dots visible on the navy background**
   - Change the overlay dot color from `--brand` (navy) to `--brand-foreground` (white) so the pulsing dots remain visible once the white card is removed.
   - Keep the existing `battery-heartbeat` scale/opacity animation and `prefers-reduced-motion` behavior.

6. **Preserve mobile behavior**
   - Keep the stacked list of four labels below the image on screens below `lg`, with no layout or animation changes.

## Technical scope
- Update only the homepage hero markup in `src/routes/index.tsx` and the minimal CSS utilities for the callout dot color.
- Add one new asset pointer for `Untitled-1.png`; remove or leave unused the old `Chairman.png` pointer.
- Do not alter other pages, navigation, footer, theme, or unrelated styles.

## Verification
- Desktop widths: confirm labels sit outside the image, text is white, dots pulse over the four corner markers, and no text overlaps the battery graphic.
- Mobile width: confirm the image stacks above the four-label list and remains readable.
- Check light and dark themes and confirm no console errors.

## Estimated credits
**1–2 credits** — a single focused layout pass plus responsive and cross-theme verification.
