# Dark mode with a header toggle

Add a light/dark switch to the header that changes the whole site instantly, remembers the choice, and follows the visitor's device setting on a first visit. Layout, spacing and behaviour stay exactly as they are.

## What the visitor sees

- A small sun/moon button in the header (and in the mobile menu), next to the search and Contact buttons.
- Clicking it switches the site between light and dark immediately, with no page reload and no flash of the wrong theme when a page loads.
- The choice sticks across page changes and reloads. First-time visitors get whatever their computer is already set to.
- In dark mode the page surfaces become deep charcoal/navy instead of white, and text flips to light. The Chairman navy and cyan stay the brand colours; the deep navy hero, certifications band and footer stay navy so those sections keep their identity. Yellow accents stay warm but are toned down slightly so they don't glare.
- The Chairman and Concorde logos switch to their light/inverted versions on dark surfaces so nothing sits on a white box. Product photos keep a light tile behind them so they still read correctly.

## Pages covered

Home, Find Your Battery (including the filter panel, applied-filter pills, grid cards and results table), Contact (form fields, labels, buttons), Deep Cycle Battery Specifications, AGM-12105TG, plus the shared header, Concorde credit bar, footer and the 404/error screens.

## Technical notes

- Tailwind v4 here has no `tailwind.config.js`; class-based dark mode already exists in `src/styles.css` as `@custom-variant dark`. It will be widened to `(&:where(.dark, .dark *))` so the root element itself matches, and the `dark` class is applied to `<html>`.
- Most of the work is token-level in `src/styles.css`: rewrite the existing `.dark` block, which currently inverts `--primary` to near-white and would break every navy heading and navy section. New split:
  - `--brand-navy` / `--brand-cyan` keep their light-mode values in both themes, for surfaces that must stay navy (hero, certifications band, footer, dark cards).
  - `--primary` in dark becomes a light cyan-tinted ink for text/borders, so `text-primary` headings stay legible.
  - `--background`, `--card`, `--surface`, `--muted`, `--border`, `--input`, `--yellow`, `--yellow-ink` retuned for dark contrast.
- Where a component uses `bg-primary` to mean "navy section" rather than "themed primary", switch it to the brand token so it renders identically in both modes. Pass over `src/routes/{index,find-your-battery,contact,specs,agm-12105tg}.tsx` and `src/components/{SiteNav,HeaderActions,ConcordeBar}.tsx` for remaining hardcoded white/light assumptions and add `dark:` variants for shadows and hover states.
- New `src/components/ThemeProvider.tsx`: React context holding `theme` and `toggleTheme`, reading `localStorage['chairman-theme']` then `prefers-color-scheme`, writing the `dark` class to `document.documentElement`. Mounted in `src/routes/__root.tsx` around `<Outlet />`.
- SSR safety: an inline blocking script in the root `<head>` sets the class before first paint to avoid a flash; the React provider reads the already-applied class after hydration rather than assuming a value in `useState`.
- New `ThemeToggle` button rendered inside `src/components/HeaderActions.tsx` (desktop row and mobile menu), styled to match the existing icon button, with `aria-label` and `aria-pressed`.
- Verify with Playwright: toggle, reload, navigate between routes, and screenshot each page in both modes; run `tsgo --noEmit`.
