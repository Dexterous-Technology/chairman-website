# Remove application filters, randomise lineups, add a product page

## 1. Filters removed from the 6 category pages

Each category landing page currently filters its battery list by a set of chips or tabs. All of them are removed, and the section keeps its "Batteries offered by Chairman" heading and layout:

- Robotics & Automation — voltage chips (All / 12V / 6V / 2V)
- Material Handling & Industrial — equipment tabs (All / Forklifts / Pallet Jacks / Floor Scrubbers / Aerial Lifts)
- Transportation & Leisure — "choose your ride" tabs
- Health Care & Mobility, Utility Vehicles, Office & Backup Power — no filter controls, unchanged

Supporting copy that references filtering (for example "Filter by equipment type, then compare...") is reworded so it no longer promises a filter.

## 2. Randomised product lists

Each category page stops using its own hand-written product list. Instead it shows 8 batteries picked at random from the 18 real batteries in the catalogue, reshuffled on every page load. Each card/row shows the same fields that page shows today (part number, voltage, capacity, and where applicable the "Best for" and cycle-life columns) drawn from the catalogue data.

Because the list is random, the "Best for" column on the Material Handling table becomes a neutral catalogue-derived value rather than an equipment claim.

To avoid a flash of mismatched content between the server-rendered page and the browser, the shuffle runs once after the page mounts.

## 3. Application filter removed sitewide

The "Applications" filter disappears from the Find Your Battery page: the category dropdown, its applied-filter pill, the `?application=` URL parameter, and the category-based keyword matching. Search, voltage, weight/capacity/dimension sliders, sorting and the grid/table toggle all stay exactly as they are.

Links that currently carry an application value are updated to plain links:
- the header search action
- the homepage application cards (these already point at the 6 category pages; the fallback link is cleaned up)

## 4. New single product page

A new page at `/products/<part-number>` (for example `/products/AGM-1265T`). For now it contains only:

- the standard site header (Concorde bar, navigation, header actions)
- a navy hero showing the product name as the page heading with a short subheading
- the shared site footer

Every "View details" link on the 6 category pages, the Featured Batteries cards on the homepage, and the "View Details" links on Find Your Battery point to this page for their part number. Unknown part numbers show a "product not found" state on the same page shell.

## Technical notes

- New route file `src/routes/products.$part.tsx` using `createFileRoute("/products/$part")`, with `head()` metadata built from the part number, `SiteNav` + `HeaderActions` + `ConcordeTopBar` header and `SiteFooter`.
- New helper in `src/lib/catalog.ts` (or a small `src/lib/random.ts`): `pickRandomBatteries(n)` returning a shuffled slice of `BATTERIES`; called from a `useEffect`-seeded `useState` in each category page so SSR and hydration agree.
- `src/routes/find-your-battery.tsx`: drop `validateSearch`, `useSearch`, `CATEGORY_OPTIONS`, the `category` state, its pill and the category branch of the keyword match; change the "View Details" link to `/products/$part`.
- `src/components/HeaderActions.tsx`: remove `search={{ application: "" }}`.
- `src/routes/index.tsx`: remove the `search: { application: app.cat }` fallback; point Featured Batteries links at `/products/$part`.
- The six files in `src/routes/categories/` lose their filter state, filter constants and chip/tab markup, and their hard-coded lineup arrays.
- `Category` typing stays in the catalogue data (batteries keep their `categories` field) — only the user-facing filter is removed.
- Verify with `tsgo --noEmit` and a Playwright pass over the 6 category pages, the finder and a product page in light and dark mode.
