# Remove All Applications Filter from Search Page

## Goal
Remove the visible "All Applications" category dropdown from the Find Your Battery search page while preserving deep-link behavior from the homepage application cards.

## Changes

1. Remove the category `<select>` from the search row in `src/routes/find-your-battery.tsx`.
2. Keep the `category` state, `validateSearch` parsing, and filter logic so that navigating from the homepage still applies the category and shows it as an Applied Filter pill.
3. Keep the existing category Applied Filter pill with its remove button, so users can clear a category pre-applied by a deep link.
4. Keep `resetAll` clearing the category so "Clear All" still works for deep-linked categories.
5. Remove now-unused imports only if they become unused after deleting the select (e.g., confirm `CATEGORIES` and `Category` are still used elsewhere).

## Out of scope
- No changes to the homepage application card links.
- No changes to the URL schema or `validateSearch`.
- No layout, color, or typography changes.

## Verification
- `tsgo --noEmit` passes.
- Preview check: the search row shows only the keyword input, Voltage dropdown, and Filters sheet trigger; no "All Applications" dropdown.
- Preview check: clicking a homepage application card still lands on `/find-your-battery?application=...` with the category shown as an Applied Filter pill.
