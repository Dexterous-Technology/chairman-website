# Update battery product imagery

## Scope
- Add the three uploaded AGM-12105TG photos to the site’s managed image assets.
- Replace the repeated placeholder battery image on every product card in the homepage Featured Batteries section and the Find Your Battery grid.
- Distribute the three photos deterministically by product position, so cards appear varied while remaining stable between page loads and during filtering.
- Replace the repeated images on the AGM-12105TG product page with the three corresponding uploaded views, including an appropriate lead image in its product banner.
- Keep the current layout, colors, typography, card sizing, filters, and product data unchanged.

## Technical details
- Store each uploaded JPG through the project asset flow and import its generated image reference.
- Use a shared image-selection helper or ordered image array rather than `Math.random()`, preventing server/client mismatches and avoiding images changing unexpectedly during interaction.
- Preserve descriptive, product-specific alternative text and lazy loading where appropriate.
- Check desktop and phone layouts, image cropping/containment, filtering behavior, and browser console errors after implementation.
