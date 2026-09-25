# Populate the battery product detail pages

## Scope
Update the existing `/products/<part-number>` page so every known catalogue battery displays its real product data and the three existing Chairman battery placeholder images. Keep the current shared header and footer unchanged.

## Page structure
- Keep the existing navy product heading area, blueprint texture, navigation, theme toggle, and shared footer.
- Replace the temporary “coming soon” message with a concise product descriptor using the selected battery’s voltage and capacity.
- Add a responsive product overview directly below the heading:
  - one large primary battery image;
  - three clickable image thumbnails using the existing product-grid image set;
  - active-thumbnail styling and accessible labels;
  - product name, sealed AGM description, and key figures for voltage, 20-hour capacity, runtime at 25A, and weight.
- Add a complete specification section using the catalogue/CSV values:
  - part number and voltage;
  - length, width, and height in inches, with millimetres calculated from the supplied inch values;
  - weight in pounds, with kilograms calculated from the supplied pound value;
  - nominal capacity in Ah at the 20-hour rate;
  - runtime in minutes at 25A;
  - catalogue indicators such as in-stock, certified, recommended, and wheelchair suitability only when applicable.
- Keep unknown part numbers within the same page shell and show a clear product-not-found message without fabricated specifications.

## Design and behavior
- Follow the existing navy, cyan, yellow-accent, blueprint, compact-radius, Space Grotesk/Inter design language.
- Use semantic theme colors so the page remains readable in light and dark mode.
- Make the gallery and specification layout responsive: stacked on mobile and balanced in columns on larger screens.
- Keep all imagery contained and square, matching the existing product cards without implying that the placeholder photos depict each exact part number.

## Files
- Update `src/routes/products.$part.tsx` for the data lookup, gallery, product overview, and specifications.
- Reuse `BATTERY_PRODUCT_IMAGES` from `src/lib/battery-images.ts`; no new images or catalogue records are required.

## Verification
- Check a known 12V, 6V, and 2V product URL plus an unknown part number.
- Confirm thumbnail switching, correct displayed values and unit conversions, shared header/footer, mobile layout, dark mode, and clean browser/type checks.
