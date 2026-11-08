# Design

hack.party has two themes. **Uplink** (the default) is a game show broadcast live from the
year 2387, with a graphics package built from the 16 ANSI terminal colors. **Classic** is
the original look, kept pixel-identical so old games replay as they were played.

## How theming works

- The active theme is `data-theme` on `<html>`, set by `src/theme/index.js`.
- Order of precedence: `?theme=` in the URL, then the viewer's last choice (localStorage
  `hp-theme`), then a game's own `theme` in `src/games/index.js`, then the default.
- `Shift+T` cycles themes anywhere; the home page has a switch.
- Every theme sets the `--hp-*` tokens. The Tailwind colors `green`, `blue`, `orange` and
  `darkgray`, the reveal theme's fonts and heading style, and the slide label all read them.
- `src/assets/styles/themes/classic.css` holds the original values and is also the fallback
  on `:root`.
- `src/assets/styles/themes/uplink.scss` holds Uplink's tokens and every Uplink override,
  scoped to `:root[data-theme='uplink']`.
- Components that render differently in Uplink mix in `src/theme/mixin.js` and check
  `uplink`. Classic markup stays untouched behind `v-else`.
- Shared components carry `hp-*` hook classes (`hp-card`, `hp-card-body`, `hp-card-foot`,
  `hp-rail`, `hp-board`, `hp-prompt`, `hp-counter`, `hp-points`). They have no Classic
  styles.

### Adding a theme

1. Add `{ id, name, description }` to `themes` in `src/theme/index.js`.
2. Create `src/assets/styles/themes/<id>.(s)css` that sets every `--hp-*` token under
   `:root[data-theme='<id>']`, plus any overrides. Import it in `src/main.js`.
3. Check Classic is still identical: screenshot a few games with `?theme=classic` before
   and after, and compare them.

## Uplink

### Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--hp-ink` | #100c24 | Page and slide background |
| `--hp-ink-2` | #161131 | Inputs, rail |
| `--hp-panel` | #1d1840 | Cards, lower thirds, board |
| `--hp-panel-2` | #2a2358 | Buttons, Classic `darkgray` |
| `--hp-rule` | #3a3270 | Hairlines |
| `--hp-signal` | #ffd23f | The host color: focus, hover, now-playing, winner |
| `--hp-cyan` | #45e3ff | Scores, timers, links |
| `--hp-magenta` | #ff4fae | Loss, hurry-up |
| `--hp-lime` | #3dff9a | Prompts, "ok" |
| `--hp-red` | #ff5a36 | The live dot |
| `--hp-fg` / `--hp-muted` / `--hp-dim` | #f5f2ff / #b8b0e6 / #8a82bd | Text, 15:1 / 9:1 / 5:1 on ink |
| `--hp-green` / `--hp-blue` / `--hp-orange` | #007a50 / #3346f0 / #c8321a | Classic color names, re-lit so white text passes 4.5:1 |
| `--hp-bars` | gradient | The seven color bars |

Why dark: the show is played on a TV or projector in a dim room. The base is violet ink lit
by two soft key lights, never black with one neon accent.

### Type

- Display: Unbounded (variable), uppercase for slide headings, tracking -0.02em. Headings
  are 1.55em, smaller than Classic, because Unbounded runs a third wider.
- Body: Atkinson Hyperlegible Next, for anything read from the couch.
- Data: JetBrains Mono, only for numbers, scores, timers, key hints and prompts.
- All three are bundled with `@fontsource-variable`, so they work offline.
- Games set `html { font-size: 36px }`; Uplink chrome is sized in px to stay put.

### Furniture

- **Station bug** (bottom right): live dot, wordmark, `CH 1337` and the slide counter.
- **Lower third**: slide labels (`h1`) are a panel with the color-bar rule on top.
- **Signal meter**: the reveal progress bar is filled with the color bars.
- **Question card**: panel, 14px radius, one shadow, question in Unbounded, the current
  player in the yellow foot.
- **Buttons**: panel buttons that light yellow on hover and focus, with their reveal
  accesskey shown as a keycap.
- **Scoreboard rail** and **player board**: ranked rows, scores in cyan mono with hex below.
- **Prompt**: the add-player bar is a shell prompt (`$`, `sudo useradd`).
- **Home page**: a channel guide with the next game billed, a `grep -i` filter and games
  grouped by year.

### Motion

| Moment | What | Time |
| --- | --- | --- |
| Focal: the verdict | Screen dims, `ACCESS GRANTED` or `PERMISSION DENIED` and the names decrypt from glyphs over a band of color bars | ~1.2 s |
| Continuity: slide change | The new slide is wiped in behind a skewed band of color bars, in the direction of travel | 560 ms |
| Title boot | Boot log lines appear, then the wordmark decrypts | ~1.7 s |
| Lower third | Clip-path wipe in from the left | 640 ms |
| Feedback | Buttons 120 ms; scores and timer digits tick in; the timer turns magenta and pulses once in its last quarter | 120–320 ms |

- Easing `cubic-bezier(0.16, 1, 0.3, 1)`; no bounce.
- Content is visible without animation; the wipe runs on the Web Animations API on its own
  layer, so reveal.js still switches slides instantly.
- Reduced motion: the wipe becomes a 150 ms fade, decrypts show the final text, entrances
  fade, and loops stop.

### Hacker nods

Konami code during a game (pirate-signal takeover), *Hackers* handles as player
placeholders, `sudo useradd`, `$ ./verify --answer · exit 0/1`, scores in hex, `T-minus`
timer, `CH 1337`, boot log, a 404 that asks if you tried turning it off and on again, and an
ASCII banner in the dev tools console.

### Rules

- No eyebrow labels above headings, no gradient text, no glass as decoration, no colored
  side borders on cards, no hard offset shadows.
- Mono only for data, prompts and key hints.
- One elevation per element: a shadow or a hairline, not both.
- Text on color passes 4.5:1; large display text at least 3:1.
