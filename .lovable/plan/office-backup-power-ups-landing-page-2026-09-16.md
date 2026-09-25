# Office & Backup Power (UPS) landing page

A new page at `/categories/office-backup-power-ups`, linked from the "View batteries" link on the Office & Backup Power (UPS) card on the homepage. Calm, technical reliability-and-readiness tone — structurally distinct from the Robotics, Material Handling, Health Care and Utility Vehicles pages.

## Sections

1. **Hero** — headline on float-service reliability that holds capacity for years; one or two lines on standby readiness, protecting critical systems during outages and long float life; primary "View Batteries" (scrolls to the lineup) and secondary "Get a Backup Power Assessment" (contact page). Uses the same server/UPS icon as the homepage card, with the "New" badge echoed near the hero.

2. **Standby readiness stat band** — a clean horizontal band under the hero with four readiness figures shown as large numbers with small labels (float life years, capacity retention, sealed VRLA/AGM design, rated for continuous float charging). Placeholder numbers, easy to swap later. Stacks cleanly on mobile.

3. **Battery lineup** — the 8 batteries as a light spec list with columns Part Number, Voltage/Ah, Float Life Rating and a "View details" link into Find Your Battery with the Office & Backup Power filter. Deliberately lighter than the Material Handling table; collapses to stacked rows on mobile.

4. **Why float-service reliability matters** — a plain two-column contrast (no cards): left, the cost of backup power failing (data loss, downtime, equipment damage); right, how this line is built for standby duty (low self-discharge, consistent readiness, long design life).

5. **Testimonials + contact CTA** — two placeholder quotes (IT Infrastructure Manager, Facilities Operations Lead) and the closing banner "Make sure your backup power is ready when you need it." with a "Get a Backup Power Assessment" button to the contact page.

## Technical notes

- New route file `src/routes/categories/office-backup-power-ups.tsx` matching the existing category route pattern, with its own `head()` metadata.
- Reuses the shared nav (`SiteNav` / `HeaderActions`), Concorde bar, footer pattern, reveal animations and existing colour tokens; yellow stays a small accent only.
- Battery entries drawn from the backup-power-suited parts already in the catalog, with placeholder float-life ratings.
- Fully responsive.
- The only change outside the new file is the Office & Backup Power (UPS) card's link in `src/routes/index.tsx`.
