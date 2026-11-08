# hack.party

Quarantine friendly party games where everyone is welcome and anyone can play.

[![RobSpectre](https://circleci.com/gh/RobSpectre/hack-party.svg?style=svg)](https://app.circleci.com/pipelines/github/RobSpectre/hack-party) [![codecov](https://codecov.io/gh/RobSpectre/hack-party/branch/master/graph/badge.svg?token=7SVBDUXJMN)](https://codecov.io/gh/RobSpectre/hack-party)


## Project setup

Requires Node 26 (see `.nvmrc`; run `nvm use` if you use nvm).

```
npm ci
```

## Games

Each game lives in its own folder:

* `src/games/<slug>/Game.vue` is the show: the slides and rounds in order.
* `public/games/<slug>/` holds its images, sounds, video and data. Git ignores these.
* `src/games/<slug>/media.json` says where each of those files lives in the game's
  `archive/<slug>` tag, which is the old branch the game was played from.
* `src/games/index.js` lists every game. Add an entry there to make a game show up on the
  home page and at `/<slug>`.

`npm run dev` fetches media for you: the first time a slide asks for a file, the dev server
copies it out of git history (the first file of an old game can take a moment while its
branch is fetched). To fetch ahead of time, for example before `npm run build` or a party
without internet:

```
npm run media -- christmas-2025     # one or more games
npm run media                       # every game (several GB)
```

`node scripts/media-manifest.mjs <slug>` rebuilds a game's `media.json` from the paths its
`Game.vue` uses.

Round components shared by every game live in `src/components`, and media those components
use lives in `public/images`, `public/sounds` and `public/video`.

The help-computer games talk to the HelpComputer backend at `ws://localhost:8000/ws`. To use
a backend somewhere else, set `VITE_HELP_COMPUTER_WS` in `.env.local`.

## Themes

hack.party has five looks. **Uplink**, the default, is a game show broadcast from the year
2387. **Brutal** is neobrutalism at game-show volume. **Ben-Day** is a 1970s pop-art comic.
**Stadium** is the 1972 summer games on public TV. **Classic** is the original look, kept
exactly as the games were played. Every look but Classic is sized for a 4K window sent over
Zoom at 1080p. Press `Shift+T` to switch, use the switch on the home page, or add
`?theme=benday` (or `uplink`, `brutal`, `stadium`, `classic`) to a game's URL. A game can
pick its own theme with `theme: 'classic'` in `src/games/index.js`.
`DESIGN.md` explains the tokens and how to add a theme.

### Compiles and hot-reloads for development
```
npm run dev 
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test
```

### Lints files
```
npm run lint
```

### Lints and fixes files
```
npm run lint:fix
```


## Meta

* Written by [Rob Spectre](http://brooklynhacker.com)
* This work is licensed under MIT License.
* Lovingly crafted in the greatest city in the world, New York.
* No warranty expressed or implied. Software is as is. Diggity.
