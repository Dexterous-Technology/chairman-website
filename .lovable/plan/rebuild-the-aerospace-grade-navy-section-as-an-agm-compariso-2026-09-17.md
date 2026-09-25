# Rebuild the "Aerospace-Grade" navy section as an AGM comparison block

Replace everything inside the existing dark navy section on the homepage. The navy background stays exactly as it is; all content is restyled for light-on-dark readability.

## New content, top to bottom

1. Eyebrow label: `03 · THE AGM ADVANTAGE` — small, muted light, letter-spaced.
2. Headline: "Read the Row That Matters **to Your Application.**" — white, with "to your application" in the yellow accent.
3. Subtext: "Deep-cycle AGM is a mature chemistry. What separates products is manufacturing discipline. Below: representative field data compared to a commodity import AGM and a mid-tier LFP alternative." — light gray.
4. Three stat cards in a row on a subtly lighter translucent panel:
   - 1,000+ / DESIGN CYCLES @ 50% DoD
   - 80°C / UPPER OPERATING LIMIT
   - 38 yrs / CONTINUOUS US PRODUCTION
   Numbers in yellow, captions in light gray.
5. Comparison table with columns PARAMETER · CHAIRMAN · CHINESE AGM · LFP and these seven rows:
   - Design cycle life @ 50% DoD — 1,000+ cycles / ~400 cycles / 3,000+ cycles
   - Manufacturing standard — AS9100 aerospace / Commodity / Varies
   - Plate alloy — Proprietary Pb-Ca-Sn / Recycled Pb-Sb / N/A
   - Non-spillable / DOT-38.3 — Yes / Claimed / Yes
   - Warranty (deep-cycle) — 2 yrs full / 7 pro-rata / 1 yr / 2-5 yrs
   - Operating temp range — -40° to +80°C / 0° to +40°C / 0° to +45°C
   - Field-serviceable BMS req. — None / None / Required

   Thin translucent white row dividers; each Chairman value preceded by a small yellow square marker; the other two columns and headers muted light gray; table data and stat numbers in a monospace/technical face.
6. Footer reference line under the table, monospace and muted: `REF · CB-DS-001 REV. 1 · FULL DATASHEET IN RESOURCES`.

## Removals

- The five icon cards (Aerospace-Quality Robust Design, etc.).
- The "See the Full Comparison" yellow button.

## Technical notes

- Edit only the `#why` section in `src/routes/index.tsx`; keep `bg-brand`, the blueprint grid overlay, section padding and the `Reveal` animation wrappers.
- Drop the now-unused `WHY` constant and any icon imports it alone used; keep `ArrowRight` if still used elsewhere on the page.
- On mobile the table becomes horizontally scrollable (or stacks per row) so no value is clipped; stat cards stack.
- Verify with a typecheck and a browser pass in light and dark mode for contrast and no console errors.
