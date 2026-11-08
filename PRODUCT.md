# Product

<!-- impeccable:product-schema 1 -->

> Facts marked *(inferred)* were not confirmed in an interview; they come from the repository
> and the owner's requests, and should be corrected if wrong.

## Platform

web

## Users

A host (Rob) runs a party game show for friends and family from a laptop, driving a TV or
projector. Players watch from across a room, often in the evening with the lights down
*(inferred)*, and answer out loud or through the host. Some games add a second screen or a
HelpComputer chat backend.

## Product Purpose

hack.party is a collection of quick party games ("games", never "events"): quizzes, guessing
rounds, auctions, Wordle-style rounds and AI-driven rounds, each built as a slide deck with
live scoring. Success is a night where everyone, including people who don't play games, can
join in and laugh. Old games should still be replayable years later.

## Positioning

Hastily coded, home-made games with in-jokes, real media and a live scoreboard, run by a
host who codes. It is a hacker's party, not a commercial trivia product.

## Operating Context

- Served locally by the host with `npm run dev`; media is fetched from git on demand or
  prefetched with `npm run media` before a party without internet.
- The host drives slides with the keyboard; buttons on a slide get letter shortcuts.
- 60 games live in `src/games/<slug>/`, each with its own fonts and art.

## Capabilities and Constraints

- Vue 3, reveal.js 6, Tailwind 4, Pinia, Vite, Vitest.
- Shared round components in `src/components` are used by many games, so changes to them
  must keep old games working.
- Themes: Uplink (default) and Classic (the original look, kept pixel-identical).

## Brand Commitments

- Name: hack.party, lower case, with the dot.
- Tagline: "Quarantine friendly party games where everyone is welcome and anyone can play."
- Built in New York.

## Evidence on Hand

Real games and their media under `public/games/` (fetched from git). No testimonials, press
or metrics exist; do not invent any.

## Product Principles

1. Anyone can play: legible from across a room, no reading-heavy controls for players.
2. The host stays in control: everything works from the keyboard, nothing waits on an animation.
3. Old games replay as they were: Classic stays faithful.
4. Jokes for the people who notice: hacker culture lives in the details, never in the way.
