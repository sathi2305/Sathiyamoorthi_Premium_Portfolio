# Sathiyamoorthi Premium Portfolio V3

A cinematic static portfolio upgrade built from the V1 portfolio.

## V3 upgrades

- Real repository-linked project preview images using GitHub Open Graph previews.
- Dedicated case-study pages for six flagship projects.
- Live-preview links for projects where a supplied deployment URL is available.
- 3D hover tilt on project visuals.
- Magnetic buttons and navigation interactions.
- Custom cursor with hover states.
- Scroll progress indicator.
- Loading transition.
- Scroll reveal animation system.
- Architecture visualization.
- Responsive mobile layout.
- Resume page.
- Consolidated project families instead of listing every repository.

## Run locally

Because this is a static site, open `index.html` directly or use a local server:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Deployment

Works on GitHub Pages, Vercel, Netlify or any static hosting service.

## Important

The repository preview images are loaded from GitHub's Open Graph image service at runtime. If you want literal screenshots of each running application, replace each project's `image` URL in `index.html` / case-study pages with exported screenshots from the actual application.

Project facts were kept aligned with the supplied resume/project material. No fabricated performance metrics were added.

## V3 additions (from reference video)
- 3D floating device mockup in hero
- Fanned architecture cards (hover to spread)
- Glowing 3D keycap tech tiles
- Drag/scroll project carousel
- Tilted certificate cards
- Terminal-style contact form (opens a prefilled email draft)

## V3.1 additions
- Aurora glow + interactive constellation canvas in hero
- Typewriter role line and count-up stats
- Cursor spotlight, scroll-linked 3D section headings, active nav state
- Project filter chips + carousel arrows/progress bar
- Command palette (Ctrl/Cmd + K), back-to-top, toast feedback

## V4
- Your photo (background removed) in hero + About section
- Real tech logos (assets/icons) in hero, marquee and keycaps
- Projects stack one-by-one on scroll with built-in UI mockups (no more empty images)
- Modern gradient theme

## V4.1
- Résumé redesigned to match the portfolio (dark, photo, logos, timeline) and opens as an overlay on the home page (Esc to close); resume.html still works standalone.
- "Download PDF" uses the browser print dialog with a clean light print layout.
