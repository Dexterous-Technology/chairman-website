# Material Handling & Industrial landing page

A new page at `/categories/material-handling-industrial`, built for how warehouse and industrial buyers shop: specs and duty cycles first, not generic benefit cards. Reuses the site's existing navigation, footer, fonts, navy/cyan colors and button styles. Deliberately different in structure from the Robotics page.

## Sections (in order)

1. **Hero** — Navy hero with the forklift icon used on the homepage card. Headline on vibration-hardened, heavy-duty power for forklifts, pallet jacks, lifts, scrubbers and sweepers; 1-2 sentences on harsh floors and multi-shift duty cycles. Buttons: "View Batteries" (scrolls to the table) and "Request a Fleet Quote" (contact page).

2. **Equipment-type selector + spec table** — A horizontal row of pills across the top: Forklifts, Pallet Jacks, Floor Scrubbers, Aerial Lifts (plus "All"). Selecting one filters the table below. Table lists 8 batteries with columns Part Number, Voltage, Ah Capacity, Best For, Cycle Life, and a "View details" link per row. Placeholder spec data for now, easy to swap later. On phones the pills scroll sideways and the table becomes a stacked card list.

3. **Built for the warehouse floor** — Two columns: left is short paragraph copy on vibration and shock resistance, deep discharge tolerance and multi-shift reliability; right is a single highlight box with a stat strip (rated charge cycles, sealed spill-proof design, fast opportunity charging) — one box, not cards.

4. **Use-case callouts** — A compact horizontal strip of three scenarios: three shifts on the warehouse floor, outdoor yard equipment in extreme temperatures, cold storage forklift operations — each with a one-line note on how the battery line handles it.

5. **Testimonials + closing CTA** — Two quotes from placeholder warehouse/industrial customers (Warehouse Operations Manager, Fleet Maintenance Lead), with a closing banner directly below: "Need the right battery for your fleet?" and a "Get a Quote" button to the contact page.

## Homepage change

The only homepage edit: the Material Handling & Industrial card's link points to the new page instead of the filtered battery finder. Nothing else on the homepage or any other page changes.

## Technical notes

- New file `src/routes/categories/material-handling-industrial.tsx` following the Robotics page's route pattern, with its own `head()` metadata (title, description, og:title, og:description, og:type, twitter:card).
- Reuses `SiteNav`, `HeaderActions`, `ConcordeTopBar`, `ConcordeFooterCredit`, `Reveal`/`PulseLine`, and existing semantic color tokens — no new styles or hardcoded colors.
- Equipment filter is local `useState`; table renders from a local placeholder array typed for later real data. "View details" rows link to `/find-your-battery`.
- Works in light and dark mode; verified in the browser after building.
