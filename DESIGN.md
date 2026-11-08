# Design

hack.party has five themes. Four are "stage" themes that share one structure and differ in
world; **Classic** is the original look, kept pixel-identical so old games replay as they
were played.

| Theme | World | Verdict | Slide change |
| --- | --- | --- | --- |
| **Uplink** (default) | A game show broadcast live from 2387, graphics built from the 16 ANSI terminal colors | `ACCESS GRANTED` decrypts over color bars | Skewed band of color bars |
| **Brutal** | Neobrutalism at game-show volume: raw paper, 5px black ink, hard slab shadows | The screen floods flat yellow (pink if wrong): `CORRECT.` / `WRONG.` | Hard-cut yellow slab in 7 steps |
| **Ben-Day** | A 1970s Saturday-night show printed as a pop-art comic | `KAPOW!` on a red starburst over a halftone sky | The next slide prints in as halftone dots |
| **Stadium** | The summer games of 1972, covered by a broadcaster with a Swiss design desk | A gold medal on the games ribbon (`No medal` if wrong) | Sky and grass band drops top to bottom |
| **Classic** | The original look | Unchanged | Unchanged |

## Sized for the stream

Games are played over Zoom: a 4K browser window sent as a 1080p feed. Everything on a deck
is sized in `--u`, one pixel of a 1920×1080 frame (`min(100vw/1920, 100vh/1080)`), so a size
reads the same on a laptop, a 4K screen and the stream.

- Body copy on a slide is 44u, headings 1.6–1.9em, the lower third 64u, buttons 40u, the
  question on a card 50u, board names 60u, the timer 120u, the verdict 150–260u.
- Nothing on a deck is smaller than 22u (the hex under a score).
- On a deck, the games' own `html { font-size: 36px }` becomes `36u`, so a game's rem-sized
  content scales with the window too.
- The home page is also read on laptops and phones, so it uses `--gu = max(1px, --u)`: it
  grows on a 4K screen and never shrinks below CSS pixels.
- Check a change as the stream sees it: screenshot a 3840×2160 window and downscale it to
  1920×1080.

## How theming works

- The active theme is `data-theme` on `<html>`, set by `src/theme/index.js`.
- Order of precedence: `?theme=` in the URL, then the viewer's last choice (localStorage
  `hp-theme`), then a game's own `theme` in `src/games/index.js`, then the default.
- `Shift+T` cycles themes anywhere; the home page has a switch.
- Each theme in `src/theme/index.js` carries its `wipe` (band on x or y, or halftone dots),
  whether it decrypts text, and its `copy`: the words for the bug, the title card, the
  add-player prompt, the board, the timer and the verdict.
- Components mix in `src/theme/mixin.js` and read `stage`, `theme` and `copy`. Classic markup
  stays untouched behind `v-else`.
- `src/assets/styles/themes/classic.css` holds the original values and is the fallback on
  `:root`.
- `src/assets/styles/themes/stage.scss` is the shared structure for every stage theme:
  layout, sizes and motion, written only against semantic tokens. It never names a color.
- `src/assets/styles/themes/guide.scss` is the home page, on the same tokens.
- `src/assets/styles/themes/<id>.scss` sets a theme's tokens and adds its world.

### Semantic tokens

Every stage theme sets these under `:root[data-theme][data-theme='<id>']`.

| Group | Tokens |
| --- | --- |
| Surfaces and text | `--hp-bg`, `--hp-bg-2`, `--hp-surface`, `--hp-surface-2`, `--hp-line`, `--hp-fg`, `--hp-muted`, `--hp-dim` |
| Accents | `--hp-accent`, `--hp-accent-text` (accent used as text), `--hp-on-accent`, `--hp-data`, `--hp-on-data` |
| States | `--hp-ok`, `--hp-alert`, `--hp-alert-bg`, `--hp-live`, `--hp-granted`, `--hp-denied`, `--hp-keycap`, `--hp-focus` |
| Classic names | `--hp-green`, `--hp-blue`, `--hp-orange`, `--hp-darkgray` (white text on them passes 4.5:1) |
| Type | `--hp-font-body`, `--hp-font-display`, `--hp-font-data`, `--hp-font-control`, `--hp-heading-weight`, `--hp-heading-transform`, `--hp-heading-tracking`, `--hp-h2`, `--hp-h3` |
| Shape | `--hp-stroke`, `--hp-stroke-color`, `--hp-radius`, `--hp-radius-control`, `--hp-shadow`, `--hp-shadow-sm`, `--hp-press`, `--hp-ease` |
| World hooks | `--hp-stripe` and `--hp-stripe-h`, `--hp-stage-bg`, `--hp-feature-bg`, `--hp-scrim`, `--hp-wipe-bg`, `--hp-label-in`, `--hp-card-in`, `--hp-title-in`, `--hp-burst-in`, `--hp-wordmark-*`, `--hp-verdict-*` |

### Adding a theme

1. Add an entry to `themes` in `src/theme/index.js` with its `wipe` and `copy`.
2. Create `src/assets/styles/themes/<id>.scss`: set every semantic token under
   `:root[data-theme][data-theme='<id>']` (the doubled attribute matches the stage's weight,
   so the theme's rules win by load order), then add its world. Import it in `src/main.js`
   after `stage.scss`.
3. Write a surface brief in `.impeccable/surfaces/<id>.md`.
4. Check it as the stream sees it, and check Classic is still identical: screenshot a few
   games with `?theme=classic` before and after, and compare them.

## Settings page

The down arrow during a game raises the host's settings page over the deck
(`SettingsPanel.vue`, styled in `src/assets/styles/settings.scss`). It shows on the stream,
so it is sized in stream pixels on every theme, Classic included, and colored by the
theme's tokens with Classic fallbacks. While it is open the deck's keyboard is off; the up
arrow or `Esc` hands it back. It never takes the down arrow from a game's own vertical
slide or from the Konami code.

## Uplink

Violet ink (#100c24) lit by two soft key lights, never black with one neon accent. Signal
yellow #ffd23f is the host color; cyan #45e3ff for scores and timers; magenta #ff4fae for
loss; lime #3dff9a for prompts; red #ff5a36 for the live dot. Unbounded for display,
Atkinson Hyperlegible Next for body, JetBrains Mono only for data and prompts.

Hacker nods: the Konami code during a game (pirate-signal takeover), *Hackers* handles as
player placeholders, `sudo useradd`, `$ ./verify --answer · exit 0/1`, scores in hex, the
`T-minus` timer, `CH 1337`, the boot log, a 404 that asks if you tried turning it off and on
again, and an ASCII banner in the dev tools console.

## Brutal

Paper #f2ede1, ink #111, yellow #ffd60a, pink #ff6b57, blue #2b4cff for data. Archivo Black
for everything that speaks, uppercase; Archivo for body. 5u black strokes, no rounding, hard
14u slab shadows that press flat when clicked. Panels slam in (overshoot by a few pixels,
then land), and the slide change is a yellow slab that cuts across in seven hard steps.
The verdict is the whole screen in one flat color.

## Ben-Day

Cream newsprint #fff6dc with large pale dots on the backdrop only (32u apart, never under
text, so Zoom's compression can't moiré them). Red #d42a1f, yellow #ffd400, blue #1f5fd1,
black #151515. Bangers for headings, numbers and sound effects; Comic Neue Bold for captions
and body; Shrikhand for the wordmark, yellow with a black keyline and a red print offset.
Slide labels and title lines are Lichtenstein caption boxes, buttons are speech balloons,
the timer is a yellow disc. Panels arrive with a comic overshoot; the slide change prints
the next slide through a growing halftone mask.

## Stadium

Off-white #f4f3ee, navy #14263a text, sky #1a73b5, grass #21804a, orange #f08a24 as the
host color, gold #d9a422 for the medal. One grotesk (Hanken Grotesk) in sentence case. No
shadows, no rounding, flat fields of color. The games ribbon (six equal bands) is the only
ornament: on top of the lower third, cards, the title card and the progress bar. Things run
in from their lane with no bounce, and the slide change is a sky-and-grass band that drops
down the screen.

## Rules for every stage theme

- No eyebrow labels above headings, no gradient text, no glass as decoration, no colored
  side borders on cards. Hard offset shadows only where the world is printed or brutal
  (Brutal, Ben-Day).
- One focal moment: the verdict. Everything else is continuity or feedback.
- Content is visible without animation; the wipe runs on the Web Animations API on its own
  layer, so reveal.js still switches slides instantly.
- Reduced motion: the wipe becomes a 150 ms fade, decrypts show the final text, entrances
  fade, loops stop and tilted panels straighten.
- Text on color passes 4.5:1; large display text at least 3:1.
- Words over a photo or video stay white in every theme.
