# Hermes Desktop True Solarized Dark

**Name:** `hermes-desktop-true-solarized-dark` · **Version:** 1.0.0 · **Date:** 2026-10-31 · **License:** MIT

A theme plugin for [Hermes Desktop](https://hermes-agent.nousresearch.com) — Solarized theme for those who like the color design but disappointed with the default shipped theme.

## Installation

1. Copy the `true-solarized-dark/` folder (folder name must equal the plugin id) into your Hermes plugins directory:
   - Windows: `%LOCALAPPDATA%\hermes\desktop-plugins\`
   - Linux/macOS: `~/.hermes/desktop-plugins/`
2. The plugin root self-watches — the row appears in **Settings → Plugins** within a few seconds; no restart needed.
3. Pick **True Solarized Dark** in **Settings → Appearance**.
4. Typography: left to the system on purpose — bring your own font plugin.

## Why it exists

Honestly I just felt the default Solarized theme was a bad immitation of the design philosophy and color grading, which causes very poor visual like a dark, muddy swamp.

//AI Generated content//
The shipped Solarized port kept the colors but quietly broke the philosophy: invented browns and grays that don't exist in the palette, a muted-foreground value filed under the wrong name, a gray ANSI set replacing the author's official 16-value mapping, and a light mode that no longer mirrored the dark one. This rebuild keeps every one of the canonical sixteen values, none invented, and lets the design system's own mechanics do the work:

- **Hues are locked roles** — the author's syntax palette assignments (yellow = de-emphasis, blue = links, red = delete...) never move; **lightness walks the ladder**, and only along documented routes (the published tier percentages, the documented blend mix-ins, the system's AA-deepening contract).
- **Both modes are true mirrors** — one recipe per mode, the CIELAB symmetry the palette promises.
- **Punchy where it counts** — every text pairing instrument-certified (calibrated WCAG sRGB) for menus, thinking blocks and tool runs, because philosophy-subtle grays are lovely for code comments and rough on a wall of chat.
- **The name is honest** — the official link-role blue, `#268bd2`, runs the whole room: fields, strokes, rings, selection, and the ANSI table exactly as published.

## License

MIT — see [LICENSE](LICENSE).
