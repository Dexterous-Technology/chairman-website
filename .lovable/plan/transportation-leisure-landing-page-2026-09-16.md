# Transportation & Leisure landing page

A new page at `/categories/transportation-leisure`, linked from the "View batteries" link on the Transportation & Leisure card on the homepage. Lighter, warmer, lifestyle-led tone — less technical density than the five existing category pages, and a different structure from all of them.

## Sections

1. **Hero** — headline about dependable power for golf carts, low-speed EVs and marine house banks, framed around enjoying the outing worry-free; a line or two on long range, reliable starts, and power that lasts a full day on the course, road or water. Primary "View Batteries" (scrolls to the lineup) and secondary "Find My Battery" (Find Your Battery page). Uses the same car icon as the homepage card, with a warmer, more inviting treatment than the industrial pages.

2. **"Choose your ride" tabs** — a visual segmented row: Golf Carts, Low-Speed EVs, Marine. Selecting one swaps a short highlight blurb and filters the lineup below; "All" shows everything. Stacks into wrapped pills on mobile.

3. **Battery lineup** — 8 batteries as a light card grid (product image, name, voltage/Ah, one-line description, "View details" link into Find Your Battery with the Transportation & Leisure filter), filtered by the selected ride. Simpler and airier than the industrial page cards.

4. **"Perfect for your outings"** — three lifestyle blurbs in a simple three-column layout with light icons: a full round without range anxiety, reliable marine house power for weekend trips, quiet smooth power for neighbourhood EVs.

5. **Testimonials + contact CTA** — two placeholder quotes (Golf Cart Owner, Marine Enthusiast) and the closing banner "Ready to power your next outing?" with a "Find My Battery" button to the contact page.

## Technical notes

- New route file `src/routes/categories/transportation-leisure.tsx` following the existing category route pattern, with its own `head()` metadata.
- Reuses the shared nav (`SiteNav` / `HeaderActions`), Concorde bar, footer pattern, reveal animations, `getBatteryProductImage` and existing colour tokens; yellow stays a small accent only.
- Placeholder battery entries tagged by ride type for client-side filtering; no backend.
- Fully responsive.
- The only change outside the new file is the Transportation & Leisure card's link in `src/routes/index.tsx`.
