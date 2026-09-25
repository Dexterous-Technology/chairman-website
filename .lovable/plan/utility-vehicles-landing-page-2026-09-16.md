# Utility Vehicles landing page

A new page at `/categories/utility-vehicles`, linked from the "View batteries" link on the Utility Vehicles card on the homepage. Structured around a fleet duty day — deliberately unlike the Robotics, Material Handling and Health Care pages.

## Sections

1. **Hero** — headline on deep discharge tolerance and all-day power for utility and grounds fleets; one or two lines on long duty days, outdoor terrain and repeated deep cycling without degrading; primary "View Batteries" (scrolls to the lineup) and secondary "Get Fleet Pricing" (contact page). Uses the same utility-vehicle icon as the homepage card.

2. **"A day in the fleet" timeline** — a horizontal strip of four stages (Morning startup, Full-day grounds rounds, Deep discharge by dusk, Overnight recharge), each with a short line on how the battery performs at that point. Stacks vertically on mobile.

3. **Battery lineup** — the 8 batteries in a single horizontally scrolling row of compact cards: name, voltage/Ah, one-line description, "View details" link into Find Your Battery with the Utility Vehicles filter. Swipes on mobile rather than reflowing into a grid.

4. **Built for outdoor duty** — two columns: short copy on weather resistance, deep-cycle tolerance and lifespan under heavy use on the left; a stat highlight box on the right (rated deep-discharge cycles, wide temperature tolerance, reduced fleet downtime).

5. **Testimonials + contact CTA** — two placeholder quotes (Facilities Fleet Manager, Grounds Operations Lead) with the closing banner "Need power for your utility fleet?" and a "Get Fleet Pricing" button to the contact page.

## Technical notes

- New route file `src/routes/categories/utility-vehicles.tsx` matching the existing category route pattern, with its own `head()` metadata.
- Reuses the shared nav (`SiteNav` / `HeaderActions`), Concorde bar, footer pattern, reveal animations and existing colour tokens; yellow stays a small accent only.
- Battery entries drawn from the utility-suited parts already in the catalog, with placeholder descriptions.
- Fully responsive: timeline stacks, card row scrolls horizontally on small screens.
- The only change outside the new file is the Utility Vehicles card's link in `src/routes/index.tsx`.
