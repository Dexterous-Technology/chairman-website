# Add "See More" Buttons to Category Product Sections

Add a "See More" call-to-action at the end of the product listing section on each of the six application landing pages, linking to the battery catalog (`/find-your-battery`). No other layout or content changes.

## Scope

- Six category landing pages under `src/routes/categories/`:
  - `robotics-automation.tsx`
  - `material-handling-industrial.tsx`
  - `healthcare-mobility.tsx`
  - `utility-vehicles.tsx`
  - `office-backup-power-ups.tsx`
  - `transportation-leisure.tsx`

## Implementation

1. **Robotics, Utility, Office/UPS, Transportation & Leisure** (card-grid layouts)
   - After the closing `</div>` of the battery grid (the element immediately following the `{visible.map(...)}` block), add a centered wrapper with a TanStack `Link` to `/find-your-battery`.
   - Use the existing yellow primary CTA style: `rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink`, with an `ArrowRight` icon and a subtle `hover:-translate-y-0.5` lift.
   - Label: "See More"
   - Keep the wrapper inside the same `max-w-7xl` container so it aligns with the grid above; add `mt-10 flex justify-center`.

2. **Material Handling & Industrial** (spec-table layout)
   - After the equipment/spec table section's closing container, add the same "See More" `Link` centered below the table.
   - Use the same button style and wrapper spacing (`mt-10 flex justify-center`).

3. **Health Care & Mobility** (two-column list layout)
   - After the battery lineup list section's closing container/map, add the same "See More" `Link` centered below the lineup.
   - Use the same button style and wrapper spacing (`mt-10 flex justify-center`).

4. **Imports**
   - Ensure `ArrowRight` and `Link` are already imported (they are in most pages). Add `ArrowRight` where missing.

## Verification

- Run `tsgo --noEmit`.
- Use Playwright to open each of the six category routes, confirm a "See More" button appears below the product section, and that clicking it navigates to `/find-your-battery`.
- Confirm no console errors and no visual shifts to existing cards, tables, or lists.
