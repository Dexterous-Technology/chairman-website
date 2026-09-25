# Light default, theme-specific navy, and shared footers

Make only the three requested updates without changing page layouts, navigation, content, spacing, or unrelated styles.

## Changes

1. **Default new visitors to light mode**
   - Update the pre-paint theme initialization so it uses a saved light/dark choice when one exists, but chooses light when no choice has been saved.
   - Keep the existing toggle behavior and persistence unchanged.

2. **Set the brand navy by theme**
   - Set the light-theme `--brand` color to the requested exact `#040f71` equivalent.
   - Set only the dark-theme `--brand` color to a darker navy in the requested range, using `#030a45` as the target.
   - Leave every other color variable unchanged.

3. **Use the homepage footer on the five named pages**
   - Replace the duplicated/outdated footer markup on `/specs`, `/transportation`, `/agm-12105tg`, `/find-your-battery`, and `/contact` with the existing shared `SiteFooter` used by the homepage.
   - Remove only imports, constants, and helper code made obsolete by those footer replacements.
   - Keep all page content above the footer unchanged.

## Verification

- Confirm a fresh browser session opens in light mode.
- Confirm manually selected dark mode persists across reloads and navigation.
- Confirm the two theme-specific brand colors render correctly and no other tokens changed.
- Confirm all five pages render the same shared footer as the homepage, with matching links and content.
- Check desktop and mobile rendering and ensure no page errors are introduced.
