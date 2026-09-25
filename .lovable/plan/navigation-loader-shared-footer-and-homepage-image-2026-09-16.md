# Navigation loader, shared footer, and homepage image

## Scope
- Replace the selected homepage hero battery image with the newly attached AGM-12105TG photo, preserving the existing hero layout, dimensions, and alternative text.
- Add a sitewide navigation-loading experience that works for all internal page changes, including desktop and mobile menu links.
- Extract the homepage footer into one shared footer component and use that exact component on the six category landing pages without changing their other content or layouts.

## Navigation loading
- Add a shared route-progress component at the app root so every internal route transition is covered, regardless of which menu or page initiated it.
- Show a thin, fast cyan brand-accent progress bar directly beneath the sticky header while navigation is pending; complete and disappear immediately when the destination is ready, without an artificial delay.
- Show a restrained centered spinner over the content area when a transition or delayed page load remains pending.
- Give the pending content layer a fully opaque semantic background: white in light mode and the existing dark page background in dark mode. It will react to the active theme and preserve the current theme across navigation and refresh.
- Respect reduced-motion preferences.
- Convert internal header and dropdown destinations from full-document anchors to the site router’s links where needed, so transitions are observable and the loader consistently covers Technical Docs, specifications, AGM-12105TG, search, Contact, and mobile-menu navigation. External and intentionally blank links remain unchanged.

## Shared homepage footer
- Move the homepage footer markup and its column helper/data into a reusable shared component without changing its visible content, spacing, colors, or styling.
- Render that shared footer on the homepage and replace the custom footers on:
  - Robotics & Automation
  - Material Handling & Industrial
  - Health Care & Mobility
  - Utility Vehicles
  - Office & Backup Power (UPS)
  - Transportation & Leisure
- Preserve the homepage footer’s navigation, contact actions, social icons, copyright, and Concorde affiliation credit; use homepage-qualified anchor destinations where necessary so those links behave consistently from category routes.
- Remove imports that become unused after deleting the six duplicated footer blocks.

## Verification
- Check route changes initiated from desktop and mobile navigation, including Technical Docs and Contact.
- Confirm the progress bar, pending content state, light/dark background flush, theme switching, and persisted theme behavior.
- Confirm all six category pages render the identical homepage footer and that its links resolve consistently.
- Confirm the attached battery image appears in the homepage hero with no layout change.
- Test desktop and phone widths and check for runtime errors.
