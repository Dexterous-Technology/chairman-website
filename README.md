# Chairman Homepage

Build a homepage for Chairman Battery (chairmanbattery.com), a premium AGM deep-cycle battery manufacturer that builds to aerospace manufacturing standards (ISO 9001, AS9100, MIL-B-8565/MIL-PRF-8565). Tagline: "...the heart of your system®"

BRAND COLORS

- Primary: #011689 (deep navy blue) — used for headers, primary text, nav, footer, primary buttons

- Secondary: #00a7e2 (bright cyan/electric blue) — used for accents, CTAs, highlights, hover states, data visualizations, the "heartbeat pulse" motif

- Supporting neutrals: white/off-white backgrounds, charcoal gray (#1a1a1a or similar) for body copy, light gray (#f5f6f8) for section backgrounds

DESIGN DIRECTION

Sleek, modern, professional industrial-tech aesthetic — think aerospace engineering meets premium B2B SaaS, not a dated industrial-supplier catalog site. Clean geometric layouts, generous white space, confident typography hierarchy. Use a bold sans-serif for headings (something like Inter, Space Grotesk, or Manrope) paired with a highly legible body font. Subtle grid/blueprint-line textures or a faint EKG/heartbeat waveform motif (echoing the logo's pulse line) can appear as a background accent under the hero or section dividers — sparingly, never decorative clutter. Sharp edges or very slightly rounded corners (4-8px radius) on cards and buttons to feel precise and engineered rather than soft. High-contrast, confident, no gradients-for-gradients-sake — this is a technical credibility brand, not a consumer lifestyle brand.

PAGE STRUCTURE (top to bottom)

1. NAVIGATION BAR

Sticky top nav, white background, navy text. Logo left. Nav items: Applications, Why Chairman, Find Your Battery, Documentation, Distributors, Contact. Two CTA buttons on the right: "Find Your Battery" (secondary/outline style) and "Request a Quote" (solid cyan #00a7e2 fill, navy text or white text — high contrast, primary action).

2. HERO SECTION

Full-width, navy (#011689) background with subtle blueprint-grid or pulse-line texture. Large bold headline: "The Heart of Every System That Can't Afford to Fail." Subheadline: one or two lines on aerospace-grade AGM batteries engineered for continuous duty, vibration, and temperature extremes. Two CTAs side by side: "Find Your Battery" (cyan solid) and "Explore Applications" (outline/ghost button, white border). Right side or background: a large product battery image or an abstract cyan pulse-wave graphic echoing the logo mark.

3. "WHAT ARE YOU POWERING?" — APPLICATION SELECTOR

This is the critical UX section — a visitor must self-select their world within seconds. Build this as 5-6 large clickable cards in a responsive grid (3 columns desktop, 2 tablet, 1 mobile):

- Robotics & Automation

- Material Handling & Industrial

- Health Care & Mobility

- Utility Vehicles

- Office & Backup Power (UPS)

- Transportation & Leisure (Golf Carts/EV)

Each card: an icon or illustrative image, category name, one-line description, subtle cyan underline or accent that animates/brightens on hover. Clicking a card should visually indicate it would route to that category's landing page.

4. "WHY CHAIRMAN AGM" — COMPARISON TEASER

Section with navy or light-gray background. Headline: "Aerospace-Grade. Not Just Industrial-Grade." Five-point visual comparison (icon + short label each) contrasting Chairman AGM against Chinese AGM and LFP alternatives:

- Aerospace-Quality Robust Design

- Long Life in Rugged/Extreme Temperatures

- Infinitely Recyclable & Sustainable

- Proven Safety & Reliability

- Secure Western Supply Chain

Present as a clean horizontal comparison row or a set of 5 icon cards with cyan accent icons on navy or white background. Include a "See the Full Comparison" button linking to a deeper interactive comparison page.

5. CERTIFICATIONS & CREDIBILITY BAND

A slim, high-contrast strip (navy or white) displaying certification badges/logos: ISO 9001, AS9100, MIL-B-8565, MIL-PRF-8565, PolyGuard® separator technology, pure lead-calcium grid construction. Include one short line of plain-language explanation under each, not just a logo wall.

6. GUIDED BATTERY FINDER TEASER

A prominent, visually distinct module (card or banner) — cyan or gradient navy-to-cyan background — inviting the visitor to use a step-by-step finder tool: "Not sure which battery you need? Answer 3 quick questions and we'll match you to the right part number." CTA button: "Start Battery Finder." This should feel like a premium, guided tool, not a search bar.

7. INDUSTRIES/TRUST SECTION

Brief, confident section reinforcing manufacturing credibility — a short paragraph on Concorde Battery Corporation's manufacturing heritage, paired with a supporting image (facility, engineering, or product close-up). Include a stat row (e.g., years in operation, certifications count, applications served) styled as bold cyan numbers with navy labels underneath.

8. FOOTER

Navy background (#011689), white/light-gray text. Columns: Applications (linking to each category), Resources (Documentation Center, Certifications, Case Studies), Company (About, Contact, Distributors), and a Request a Quote CTA repeated. Include the tagline "...the heart of your system®" near the logo. Social/contact icons in cyan.

INTERACTIONS & POLISH

- Smooth scroll-reveal animations on section entry (fade/slide up, subtle, fast — under 400ms)

- Hover states on all cards and buttons using the cyan accent (glow, underline, or lift/shadow)

- Sticky nav with a slight shadow on scroll

- Fully responsive: mobile should stack the application cards to a single column and keep the Battery Finder and Request a Quote CTAs prominent and thumb-reachable

TONE OF COPY

Confident and comparative, not hedging — this is a company with real aerospace-grade credentials competing against lower-cost AGM and lithium alternatives. Technical enough to earn trust from robotics/industrial engineers but plain enough for a Health Care/mobility buyer to follow.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://chairman-battery.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8a8c3d3b-4d0d-49c0-bf67-660d4d127500).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
