# Homepage battery diagram callouts

## Goal
Replace only the homepage hero’s current product photo with the attached battery diagram, keeping the diagram itself unchanged. Add accessible HTML callout text and subtle heartbeat-style dot animation around it.

## Implementation
1. **Add the supplied diagram as a project asset**
   - Store the uploaded `Chairman.png` through the project asset flow and use its unchanged image URL in the homepage hero.
   - Preserve the image’s intrinsic aspect ratio and provide descriptive alternative text.

2. **Build the desktop callout composition**
   - Replace the existing right-side hero image element with a responsive, aspect-ratio-stable figure.
   - Position four real HTML labels relative to that figure so they stay aligned with the image’s fixed corner dots:
     - Top left: “Lower price, direct from an Authorized Distributor”
     - Top right: “Form, fit & function replacement”
     - Bottom left: “100% recyclable — the green solution”
     - Bottom right: “Hazmat exempt — ships by land, sea, or air”
   - Use the site’s existing body font, semantic hero text color, and restrained weight/size.
   - Keep left labels left-aligned and right labels right-aligned.
   - Leave the hero’s headline, copy, actions, navigation, spacing outside the right visual, and all other sections unchanged.

3. **Add pulsing dot overlays**
   - Overlay four non-interactive CSS dots directly over the four dots already visible in the static image.
   - Color the overlays with `var(--brand)` and animate a gentle scale/opacity ring on an approximately two-second loop.
   - Disable the pulse under `prefers-reduced-motion` while keeping the dots visible.

4. **Create the mobile presentation**
   - Keep the diagram first at its natural aspect ratio.
   - Hide the desktop-positioned labels and render the same four labels as a clean vertical HTML list beneath the image.
   - Keep all text readable without overlap or horizontal scrolling.

## Technical scope
- Update only the homepage hero markup and the minimal shared CSS needed for the dot animation/responsive callouts.
- Add one asset pointer for the uploaded image.
- Do not alter the source image, other pages, navigation, footer, theme behavior, or unrelated styles.

## Verification
- Check desktop and phone widths for label alignment, clipping, and overlap.
- Confirm the image remains unchanged and all four labels are selectable HTML text.
- Confirm the pulse uses the active theme’s `--brand` value and reduced-motion disables animation.
- Check light and dark themes and confirm there are no runtime or console errors.

## Estimated credits
**2 credits** — one implementation pass plus responsive/runtime verification. This is an estimate; actual usage may vary if the preview exposes an unrelated issue requiring an additional repair pass.
