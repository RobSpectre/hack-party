---
name: new-game
description: Create a new hack.party game (title screen, rules, player board, rounds of questions) from an idea, scaffolded with `npm run new-game` and built from the existing round components. Use when asked to make, add or build a new game.
---

# Make a new hack.party game

Call them **games**, never events. A game is one Reveal.js deck in
`src/games/<slug>/Game.vue`, listed in `src/games/index.js` and played at `/<slug>`.
It is streamed over Zoom (a 4K window sent as 1080p), so keep slide text short and big.

## 1. Pin down the game

Before building, be clear on:

- **Title and slug.** The slug is the title in lowercase with dashes: "The Biggest
  GOPdamn Loser" → `the-biggest-gopdamn-loser`.
- **Date** it will be played (defaults to today). The registry is newest first, and the
  newest game is the home page default.
- **Rounds.** The usual shape is three rounds of five questions, worth 1, 2 and 3 points.
- **Question mechanic.** Match it to an existing round component (table below). Reuse
  before writing anything new.
- **Boss fights or other extras.** Leave a `//- ... boss fight goes here` comment where
  they go if they come later.

If something is ambiguous, pick the most likely reading, build it, and say which reading
you chose.

## 2. Scaffold

```
npm run new-game -- <slug> --title "Game Title" --date 2026-11-08
```

This writes:

- `src/games/<slug>/Game.vue`: title, rules slide, player board, one round header.
- the registry entry in `src/games/index.js`, in date order.
- `tests/unit/games/<slug>.spec.js`: a smoke test that the deck renders.
- `public/games/<slug>/{images,sounds,video}/` plus `.gitignore` lines so this game's
  media **is committed**. (Only the old archived games use `media.json` and
  `npm run media`; new games never need them.)

## 3. Build the deck

The standard order, copied from the other games:

1. `GameTitle(heading='Title' headingType='text')`. For an image logo, use
   `heading='/games/<slug>/images/logo.png'`. `background` takes a video (default) or
   an image with `backgroundType='image'`.
2. A rules `Slide`: `h2.fragment` lines, one idea each, about six at most, then
   `h1 Gameplay` (it becomes the slide label). Put scoring on a second slide if needed.
3. `PlayerBoard`, where the host adds players.
4. For each round: `Slide(class='darkgray')` with `h2.text-white Round N: Name`, then
   `Slide(class='green')` with the points, then the questions, then `PlayerBoard`.

Points come from each round component's `:prize`. Put question data in
`src/games/<slug>/<something>.js` (plain arrays with a `source` URL on every fact) and
loop over it with `template(v-for=...)` in pug, as
`src/games/the-biggest-gopdamn-loser/` does. That keeps `Game.vue` short and the facts
easy to check.

### Round components (in `src/components`)

| Component | Mechanic | Key props |
|---|---|---|
| `CameoPriceIsRight/CameoPriceIsRightRound` | 3 hints, optional video or YouTube, then Price Is Right guess (closest without going over, exact = double) | `celebrity hint1-3 image video youtube price prize denomination suffix separators question` |
| `WhichIsWhich/WhichIsWhichRound`, `ItemGuess` | pick one of several items | `items winnerIndex question headerImage` |
| `AuctionEar/AuctionEarRound` | bid on how few seconds of audio you need | see component |
| `AudioChoice/AudioChoiceRound` | multiple choice after audio | see component |
| `VideoChoice/VideoChoiceRound`, `Wager/VideoWagerRound` | multiple choice or wager after video | see component |
| `SnackTrack`, `LasikRacing`, `WordleRipoff`, `ClimbTheLadder`, `HelpComputer`, `DiffsquisiteCorpse`, `KnockoutRound`, `RandomTrivia` | special formats | read the component and a game that uses it |
| `Scoreboard/Scoreboard` | host picks who got it right | `question prize` |

Find a game that uses a component with
`grep -l ComponentName src/games/*/Game.vue` and copy its usage.

Base slides (`src/components/base`): `Slide`, `GameSlide`, `GameContent`,
`GameContentWithSidebar`, `BackgroundImageSlide`, `VideoSlide`, `GameVideo` (video
files), `GameYouTube` (a YouTube id; reveal.js starts it on the slide and stops it when
you leave), `GameIframe`, `WinnerCard`, `LoserCard`.

Price Is Right with big numbers: `denomination=''`, `suffix=' votes'` and `separators`
show `17,135 votes`, and guesses typed as `17,135` or `$17,135` are read correctly.

Style shared components through the theme files (see `DESIGN.md`). Don't restyle a
shared component for one game, and keep the Classic theme looking exactly as it did.

## 4. Research and media

- Cite a source for every fact in the data file. Where a number can still change
  (uncertified vote counts, live prices), keep an `asOf` with the source and tell the
  person which ones aren't final.
- Images, sounds and video go in `public/games/<slug>/...` and are referenced as
  `/games/<slug>/images/foo.png`. Prefer files you download over hotlinks, which break.
- YouTube: store the 11-character video id. To find a channel's most-viewed videos,
  run this where YouTube is reachable (the person's machine, or a cloud environment that
  allows www.youtube.com):

  ```
  yt-dlp --flat-playlist --print "%(view_count)s %(id)s %(title)s" \
    "https://www.youtube.com/@<handle>/videos" | sort -rn | head -20
  ```

  Then check the top results' upload dates (`yt-dlp --print "%(upload_date)s" <id>`)
  so the pick is from the right cycle or season. Never guess an id, a channel or a view
  count: leave the field `null` (the round skips the slide) and say what's missing.

## 5. Check it

```
npm run lint; echo $?    # check the exit code: tail-ing the output can hide errors
npm test
npm run dev              # then open http://localhost:5173/<slug>
```

Add tests for any change to a shared component and a data test for the game (round
counts, points, every fact has a source). Look at the slides the way the stream sees
them: a 3840x2160 window scaled down to 1920x1080. Lines on the rules slide must not run
into the label at the bottom.

Then commit on a branch and open a PR that lists the game's sources and anything still
unverified.
