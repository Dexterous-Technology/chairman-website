# Health Care & Mobility landing page

A new page at `/categories/healthcare-mobility`, linked from the "View batteries" link on the Health Care & Mobility card on the homepage. Calmer, trust-led tone — deliberately different in structure from the Robotics and Material Handling pages.

## Sections

1. **Hero** — headline on quiet, sealed, non-spillable power for wheelchairs, mobility scooters and clinical carts; one or two lines on patient safety and worry-free indoor use; primary "View Batteries" (scrolls to the lineup) and secondary "Talk to Our Team" (goes to the contact page). Uses the same medical icon as the homepage card, with more whitespace and a softer feel than the other category pages.

2. **Trust & compliance strip** — a single horizontal badge row under the hero: "Non-spillable, AGM sealed design", "UL-recognized", "Zero-maintenance", "Safe for indoor & patient-adjacent use". Placeholder labels, easy to swap once the exact certifications are confirmed.

3. **Battery lineup** — the 8 mobility-suited batteries as a calm two-column list (no cards, no spec table): name, voltage/Ah, one short line of description, and a "View details" link into Find Your Battery with the Health Care & Mobility filter applied.

4. **Why it matters for care environments** — a two-column contrast layout: "Risks in standard batteries" (leakage, fumes, noise, upkeep) against "What our sealed batteries deliver" (silent operation, no maintenance, safe indoor use, spill-proof).

5. **Testimonials + contact CTA** — two placeholder quotes (Mobility Equipment Manufacturer, Clinical Facilities Manager) followed by the closing banner "Have a mobility or clinical power need?" with a "Request a Consultation" button to the contact page.

## Technical notes

- New route file `src/routes/categories/healthcare-mobility.tsx`, matching the existing category route pattern, with its own `head()` metadata.
- Reuses the shared nav (`SiteNav` / `HeaderActions`), the Concorde bar, footer pattern, existing colour tokens, and `getBatteryProductImage` only if imagery is needed; yellow stays a small accent, never a large surface.
- Battery entries drawn from the mobility-suited items already in the catalog.
- Fully responsive: two-column list and contrast layout stack to one column on small screens.
- The only change outside the new file is the Health Care & Mobility card's link in `src/routes/index.tsx`.
