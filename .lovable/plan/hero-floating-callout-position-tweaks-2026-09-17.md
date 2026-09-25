# Hero floating callout position tweaks

Adjust the desktop hero battery-illustration callouts in `src/routes/index.tsx` only.

1. **Top two text labels** — change `bottom-[calc(100%+20px)]` to `bottom-[100%]`.
2. **Top two pulsing blobs** — change `top-[8%]` to `top-[5%]`.
3. **Bottom two text labels** — change `top-[calc(100%+20px)]` to `top-[calc(100%+50px)]`.
4. **Bottom two pulsing blobs** — change `bottom-[8%]` to `bottom-[-8%]`.

Keep mobile stacked layout, pulse animation, text color, and image sizing unchanged.

## Verification
- `bunx tsgo --noEmit`
- Playwright screenshots: desktop light/dark and mobile light homepage hero.
