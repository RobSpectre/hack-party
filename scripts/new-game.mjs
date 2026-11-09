#!/usr/bin/env node
// Scaffolds a new game:
//
//   npm run new-game -- <slug> --title "Game Title" [--date YYYY-MM-DD]
//
// It creates src/games/<slug>/Game.vue (title, rules, player board, one round
// to copy), adds the game to src/games/index.js in date order, adds a smoke
// test, and makes public/games/<slug>/ for media. A new game's media is
// committed like any other file: the archive tags (and media.json) are only
// for the games that used to live on their own branches.
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { parseArgs } from 'node:util'

const root = new URL('..', import.meta.url).pathname

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    title: { type: 'string' },
    date: { type: 'string' },
    help: { type: 'boolean', short: 'h' }
  }
})

const usage = 'Usage: npm run new-game -- <slug> --title "Game Title" [--date YYYY-MM-DD]'

if (values.help) {
  console.log(usage)
  process.exit(0)
}

function fail (message) {
  console.error(`new-game: ${message}\n${usage}`)
  process.exit(1)
}

const slug = positionals[0]
const title = values.title
const date = values.date || new Date().toISOString().slice(0, 10)

if (!slug) fail('give the game a slug, like the-biggest-loser')
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(`"${slug}" isn't a slug: use lowercase letters, digits and dashes`)
if (!title) fail('give the game a --title')
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) fail(`--date "${date}" should look like 2026-11-08`)

const gameDir = join(root, 'src/games', slug)
const registryPath = join(root, 'src/games/index.js')
const registry = readFileSync(registryPath, 'utf8')

if (existsSync(gameDir) || registry.includes(`slug: '${slug}'`)) fail(`a game called ${slug} already exists`)

// PascalCase name for the Vue component, e.g. TheBiggestLoserGame.
const componentName = slug.split('-').map(part => part[0].toUpperCase() + part.slice(1)).join('') + 'Game'
const quoted = text => `'${text.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`

// --- src/games/<slug>/Game.vue
const game = `<template lang="pug">
Reveal
  .slides
    GameTitle(
      heading=${quoted(title)}
      headingType='text'
    )
    Slide
      h2.fragment Solo
      h2.fragment Explain the game here, one line per fragment
      h2.fragment Closest without going over wins
      h1 Gameplay
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Round 1
    Slide(class='green')
      h2.text-white 1 point each
    //- Questions for round 1 go here.
    PlayerBoard
</template>

<script>
import Reveal from '@/components/base/Reveal.vue'
import GameTitle from '@/components/base/GameTitle.vue'
import Slide from '@/components/base/Slide.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

export default {
  name: '${componentName}',
  components: {
    Reveal,
    GameTitle,
    Slide,
    PlayerBoard
  }
}
</script>

<style lang="scss">
html {
  font-size: 36px;
}
</style>
`

mkdirSync(gameDir, { recursive: true })
writeFileSync(join(gameDir, 'Game.vue'), game)

// --- src/games/index.js: newest first, so insert before the first older game.
const entry = `  {
    slug: '${slug}',
    title: ${quoted(title)},
    date: '${date}',
    component: () => import('./${slug}/Game.vue')
  },
`
const lines = registry.split('\n')
const start = lines.findIndex(line => line.startsWith('const games = ['))
if (start < 0) fail('could not find "const games = [" in src/games/index.js')

let insertAt = -1
for (let i = start + 1; i < lines.length && !lines[i].startsWith(']'); i++) {
  const match = /^ {4}date: '(\d{4}-\d{2}-\d{2})'/.exec(lines[i])
  if (match && match[1] <= date) {
    // Walk back to the "  {" that opens this entry.
    insertAt = i
    while (lines[insertAt] !== '  {') insertAt--
    break
  }
}
if (insertAt < 0) {
  insertAt = lines.findIndex((line, i) => i > start && line.startsWith(']'))
  // The last entry has no trailing comma; give it one.
  if (lines[insertAt - 1] === '  }') lines[insertAt - 1] = '  },'
}
lines.splice(insertAt, 0, ...entry.trimEnd().split('\n'))
// An entry added at the end shouldn't leave a trailing comma before "]".
const close = lines.findIndex((line, i) => i > start && line.startsWith(']'))
if (lines[close - 1] === '  },') lines[close - 1] = '  }'
writeFileSync(registryPath, lines.join('\n'))

// --- tests/unit/games/<slug>.spec.js
const testPath = join(root, 'tests/unit/games', `${slug}.spec.js`)
writeFileSync(testPath, `import { mount } from '@vue/test-utils'

import { createTestingPinia } from '@pinia/testing'

import Game from '@/games/${slug}/Game.vue'

describe(${quoted(title)}, () => {
  test('should render the game', () => {
    const wrapper = mount(Game, {
      global: {
        plugins: [createTestingPinia()]
      }
    })

    expect(wrapper.find('.reveal').exists()).toBe(true)
  })
})
`)

// --- public/games/<slug>/: committed, unlike the archived games' media.
const mediaDir = join(root, 'public/games', slug)
for (const kind of ['images', 'sounds', 'video']) {
  mkdirSync(join(mediaDir, kind), { recursive: true })
  writeFileSync(join(mediaDir, kind, '.gitkeep'), '')
}

const gitignorePath = join(root, '.gitignore')
const gitignore = readFileSync(gitignorePath, 'utf8')
const unignore = ['images', 'sounds', 'video', 'data'].map(kind => `!/public/games/${slug}/${kind}/`)
if (!gitignore.includes(unignore[0])) {
  appendFileSync(gitignorePath, `${gitignore.endsWith('\n') ? '' : '\n'}\n# ${title}: a new game, so its media is committed\n${unignore.join('\n')}\n`)
}

console.log(`Made ${slug}:
  src/games/${slug}/Game.vue          the show
  src/games/index.js                  registry entry (${date})
  tests/unit/games/${slug}.spec.js    smoke test
  public/games/${slug}/               media, referenced as /games/${slug}/images/...

Next: npm run dev, then open http://localhost:5173/${slug}`)
