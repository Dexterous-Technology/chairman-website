# Footer: Replace Resources with Technical Docs

## Goal
In the shared footer (`SiteFooter`), remove the "Resources" column and replace it with a "Technical Docs" column listing all eight Technical Docs dropdown items, each linking to its real page. Because the footer is the single shared component, the change appears on every page with no other edits.

## What changes

### 1. `src/components/SiteFooter.tsx`
- Delete the `Resources` column (`FooterCol title="Resources" ...`) entirely.
- Add a new "Technical Docs" column in its place that maps over the existing `TECH_DOCS` list from `src/lib/tech-docs.ts` (the exact same source the header dropdown uses), rendering each item's label as a link to its `href`:
  1. Technical Bulletin - Electrolyte Content (PDF) → `/docs/electrolyte-content`
  2. Internal Resistance & Short Circuit Current (6-0108 Rev. B) (PDF) → `/docs/internal-resistance`
  3. Chairman® Technical Manual (PDF) → `/docs/technical-manual`
  4. Chairman® Owner's Manual (6-0105 Rev. B) (PDF) → `/docs/owners-manual`
  5. Chairman® Battery SDS (PDF) → `/docs/safety-data-sheet`
  6. Chairman® Transportation Information → `/transportation`
  7. Chairman® Battery Brochure (PDF) → `/docs/brochure`
  8. Chairman® EU REACH Regulation - Article 33 Compliance (PDF) → `/docs/eu-reach-compliance`
- Reuse the footer's existing column styling (accent uppercase title, `text-brand-foreground/80` links, hover accent) so the new column matches Applications and Company visually.

### 2. Nothing else
- Applications column, Company column, Contact Chairman button, brand block, social icons, copyright and Concorde credit stay untouched.
- All pages automatically inherit the change since they all render `<SiteFooter />`.

## Technical details
- The existing `FooterCol` helper only supports homepage hash links, so add a small `FooterDocsCol` (or extend `FooterCol` with an optional `links` mode) that renders a TanStack `Link` per doc. For the seven `/docs/$slug` entries use `to="/docs/$slug"` with `params={{ slug: doc.slug }}`; the Transportation entry links `to="/transportation"`.
- Labels in the footer can keep the full document names from `TECH_DOCS`; the "(PDF)" suffixes stay as-is to mirror the dropdown.
- Grid stays `lg:grid-cols-4` — the column count is unchanged, so no layout/spacing changes.

## Verification
- `tsgo --noEmit` passes.
- Playwright spot-check: footer on `/`, one category page, and `/find-your-battery` shows "Technical Docs" with 8 working links and no Resources column; click one docs link and the Transportation link to confirm routing; no console errors; light + dark mode.
