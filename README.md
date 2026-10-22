# Beyond The Prompt: Landing Page

Static landing page for the Beyond The Prompt AI/agentic tech event. Plain HTML5 + modern CSS, no build step.

## Preview

```sh
npm run dev          # or: python3 -m http.server 8080
```

Then open http://localhost:8080. Any static file server works.

## Structure

```
index.html          Page markup
styles/
  reset.css         Cross-browser reset (load first)
  tokens.css        Design tokens: colours, type scale, spacing, radii, motion
  main.css          Base styles, layout primitives, components
scripts/
  main.js           ES module entry point
assets/
  icons/            SVG icons, favicon
  images/           Raster/vector imagery
  fonts/            Self-hosted web fonts
```

## Styling conventions

- Use variables from `styles/tokens.css`. Don't hard-code colours or spacing.
- Palette: dark base (`--color-bg`), neon accent (`--color-accent`, `--color-accent-alt`), neutral text (`--color-text`, `--color-text-muted`, `--color-text-subtle`).
- Layout primitives: `.container`, `.section`, `.stack` (`--stack-space`), `.cluster` (`--cluster-space`).
- Breakpoints: 40rem / 48rem / 64rem / 80rem (mobile-first `min-width` queries).
