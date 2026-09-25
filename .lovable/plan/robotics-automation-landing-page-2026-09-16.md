# Robotics & Automation Landing Page

Create a new category landing page at `/categories/robotics-automation` and link the homepage's Robotics & Automation card to it. No other pages or homepage layout changes beyond that one link.

## Page structure (5 sections)

1. **Hero** — navy blueprint-grid hero matching the other pages. Headline about powering AMRs, AGVs, service robots, and continuous-duty cycling; 1-2 sentence subtext on 24/7 robotic operations; cyan robotics icon matching the homepage card; primary CTA "View Batteries" (scrolls to the grid), secondary "Talk to an Engineer" (scrolls to the contact section).
2. **Battery listing** — 8 products picked from the real `src/lib/catalog.ts` data (batteries already categorized "Robotics & Automation" where available), using the same card style as Featured Batteries: product image via `getBatteryProductImage`, part number, voltage/Ah spec line, one-line description, "View details" link to `/find-your-battery` (with category pre-applied). A small tag/filter row above the grid (voltage tags) if it fits the pattern; otherwise a clean 4-column grid collapsing to 2 then 1.
3. **Why it helps this industry** — 3-4 benefit cards (continuous-duty cycling for AMRs/AGVs, fast opportunity charging, compact form factor for tight chassis, vibration & shock resistance / long cycle life to reduce downtime), icon + heading + 1-2 sentences, matching the site's existing icon/card style.
4. **Testimonials** — 3 cards with placeholder names and company types ("AMR Fleet Operator", "Automation Integrator", etc.), simple quote/name/title layout.
5. **Contact CTA** — closing navy gradient banner, "Need help matching a battery to your robot?" with a "Get a Quote" button linking to the existing `/contact` page (the site's established pattern).

## Reuse, not duplication

- New file `src/routes/categories/robotics-automation.tsx` with the same header (ConcordeTopBar, sticky header with SiteNav + HeaderActions) and navy footer with ConcordeFooterCredit used by every other page.
- Same fonts, navy/cyan palette, yellow reserved for the "BEST SELLER"-style badge only (solid yellow with solid yellow border per standing rule).
- Own `head()` with unique title/description, og:type, twitter:card.
- Full dark-mode `dark:` variants throughout, matching the sitewide theme system.
- Fully responsive; SiteNav/header untouched (category pages don't live in the nav).

## Homepage change

In `src/routes/index.tsx`, change only the Robotics & Automation card's "View batteries" link target from `/find-your-battery` to `/categories/robotics-automation`.

## Verification

`tsgo --noEmit`, then Playwright: the new page renders all 5 sections in light and dark mode, CTAs scroll correctly, homepage card link navigates to the new page, no console errors.
