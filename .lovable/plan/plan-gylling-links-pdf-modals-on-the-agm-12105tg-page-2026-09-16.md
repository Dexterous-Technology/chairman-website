# Plan: Gylling links + PDF modals on the AGM-12105TG page

## What changes (all on the AGM-12105TG page, `/agm-12105tg`)

1. **Link "Gylling Teknikk"** — the underlined "Gylling Teknikk" text in the distributor paragraph becomes a link to https://gylling.no/ (opens in a new tab).

2. **Request a Quote** — currently links to the Contact page; changes to the Gylling product page https://gylling.no/batterier/blybatterier/chairman/772108 (new tab).

3. **"AGM-12105TG direct from Gylling Teknikk"** — currently a dead `#` link; points to the same Gylling product page (new tab).

4. **Envelope Drawing & Data Sheet links open a PDF modal** — clicking either link opens a popup overlay on the page instead of navigating away:
   - The PDF displays inline, full width of the popup, exactly **80vh** tall (same viewer style already used on the technical document pages).
   - A header shows the document title with a close (X) button; clicking the backdrop or pressing Escape also closes it.
   - A "Download PDF" link is included in the popup.
   - The popup works in both light and dark mode and uses the existing colors, fonts, and rounded corners — no layout changes to the page itself.

## Technical details

- Upload the two uploaded files (`envelope_drawing.pdf`, `data_sheet.pdf`) via lovable-assets to `src/assets/AGM-12105TG_Envelope_Drawing.pdf.asset.json` and `src/assets/AGM-12105TG_Data_Sheet.pdf.asset.json`; reference their CDN URLs.
- New small reusable component `src/components/PdfModal.tsx`: controlled modal (title + PDF URL), `<object>`/`<iframe>` viewer at `h-[80vh] w-full`, Escape key + backdrop click to close, scroll-lock while open, dark-mode aware.
- `src/routes/agm-12105tg.tsx`: local state for which document (if any) is open; the two document links become buttons that open the modal; the three Gylling links become external `<a target="_blank" rel="noreferrer">` anchors.
- Verify with Playwright: links go to gylling.no, both modals open with the PDF rendered at 80vh, close via X/Escape/backdrop, dark mode looks right, no console errors.
