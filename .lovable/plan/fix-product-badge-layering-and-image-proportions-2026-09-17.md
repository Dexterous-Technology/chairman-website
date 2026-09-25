# Fix product badge layering and image proportions

## Changes

- Keep every yellow product badge above its battery image by giving the badge an explicit foreground stacking level.
  - Homepage Featured Batteries “Best Seller” pills
  - Robotics & Automation “Best Seller” pills
  - Find Your Battery “Best Match” pills
- Change product-card image areas from short landscape rectangles to responsive squares, while keeping each battery centered and fully visible with `object-contain`.
  - Homepage Featured Batteries
  - Robotics & Automation
  - Utility Vehicles
  - Transportation & Leisure
  - Find Your Battery
- Preserve all existing card content, links, colors, grid layouts, randomized products, and hover behavior.
- Leave the Material Handling, Health Care, and Office/UPS lineups unchanged because they are table/list layouts without product images.

## Verification

- Check all six category pages, the homepage featured grid, and Find Your Battery at desktop and mobile sizes.
- Confirm yellow badges remain visible above images, image areas are square, cards do not overlap, and product links still work.
- Run the project typecheck and check the browser console for errors.
