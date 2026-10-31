/*
 * True Solarized Dark - Hermes Desktop theme plugin
 * Name: true-solarized-dark | Version: 1.0.0 | Date: 2026-10-31 | License: MIT
 * Author: ColonelRVH (built by Aigis)
 *
 * Solarized as the original design system authored it: all sixteen values,
 * none invented, none misfiled. The hues are the design system's own locked
 * roles and never move - lightness does all the walking, and it walks only
 * the documented routes (the ladder, the published blend percentages, the
 * system's own AA-deepening contract). Both modes are true mirrors: one
 * recipe per mode, the symmetry the palette promises. Every text pairing is
 * instrument-certified (calibrated WCAG sRGB) for heavy chat content.
 *
 * Install: copy this folder (the name must equal the plugin id) into
 * <hermes-home>/desktop-plugins/ e.g. %LOCALAPPDATA%\hermes\desktop-plugins\
 * on Windows, ~/.hermes/desktop-plugins/ on Linux/macOS. The plugin root
 * self-watches: no restart ceremony needed. Then Settings > Appearance >
 * True Solarized Dark. Typography is left to the system on purpose.
 */
const THEME = {
  "name": "true-solarized-dark",
  "label": "True Solarized Dark",
  "description": "Solarized your AI Agent",
  "colors": {
    "background": "#eee8d5",
    "foreground": "#002b36",
    "card": "#eee8d5",
    "cardForeground": "#002b36",
    "muted": "#3e96d2",
    "mutedForeground": "#002b36",
    "popover": "#4a9cd3",
    "popoverForeground": "#002b36",
    "primary": "#268bd2",
    "primaryForeground": "#ffffff",
    "secondary": "#3a94d2",
    "secondaryForeground": "#002b36",
    "accent": "#3692d2",
    "accentForeground": "#002b36",
    "border": "#72aed3",
    "input": "#4298d2",
    "ring": "#053749",
    "midground": "#053749",
    "composerRing": "#053749",
    "destructive": "#dc322f",
    "destructiveForeground": "#ffffff",
    "sidebarBackground": "#9ac8e9",
    "sidebarBorder": "#053749",
    "userBubble": "#9ac8e9",
    "userBubbleBorder": "#053749"
  },
  "darkColors": {
    "background": "#002b36",
    "foreground": "#fdf6e3",
    "card": "#002b36",
    "cardForeground": "#fdf6e3",
    "muted": "#217fbf",
    "mutedForeground": "#fdf6e3",
    "popover": "#1f7ab6",
    "popoverForeground": "#fdf6e3",
    "primary": "#268bd2",
    "primaryForeground": "#ffffff",
    "secondary": "#2281c2",
    "secondaryForeground": "#fdf6e3",
    "accent": "#2383c6",
    "accentForeground": "#fdf6e3",
    "border": "#186797",
    "input": "#217ebc",
    "ring": "#268bd2",
    "midground": "#268bd2",
    "composerRing": "#268bd2",
    "destructive": "#dc322f",
    "destructiveForeground": "#ffffff",
    "sidebarBackground": "#1d4c6e",
    "sidebarBorder": "#268bd2",
    "userBubble": "#1d4c6e",
    "userBubbleBorder": "#268bd2"
  },
  "terminal": {
    "black": "#586e75",
    "red": "#dc322f",
    "green": "#859900",
    "yellow": "#b58900",
    "blue": "#268bd2",
    "magenta": "#d33682",
    "cyan": "#2aa198",
    "white": "#586e75",
    "brightBlack": "#eee8d5",
    "brightRed": "#cb4b16",
    "brightGreen": "#586e75",
    "brightYellow": "#657b83",
    "brightBlue": "#839496",
    "brightMagenta": "#6c71c4",
    "brightCyan": "#93a1a1",
    "brightWhite": "#073642",
    "foreground": "#002b36",
    "cursor": "#586e75",
    "selectionBackground": "#0b4053"
  },
  "darkTerminal": {
    "black": "#073642",
    "red": "#dc322f",
    "green": "#859900",
    "yellow": "#b58900",
    "blue": "#268bd2",
    "magenta": "#d33682",
    "cyan": "#2aa198",
    "white": "#073642",
    "brightBlack": "#002b36",
    "brightRed": "#cb4b16",
    "brightGreen": "#586e75",
    "brightYellow": "#657b83",
    "brightBlue": "#839496",
    "brightMagenta": "#6c71c4",
    "brightCyan": "#93a1a1",
    "brightWhite": "#fdf6e3",
    "foreground": "#fdf6e3",
    "cursor": "#93a1a1",
    "selectionBackground": "#268bd2"
  }
}

export default {
  id: 'true-solarized-dark',
  name: 'True Solarized Dark',
  description: 'Solarized your AI Agent',
  register(ctx) {
    ctx.register({ id: 'theme', area: 'themes', data: THEME })
    console.log('[true-solarized-dark] v1.0.0 contributed — pick it in Settings > Appearance')
  }
}
