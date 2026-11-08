// Writes src/games/<slug>/media.json for every game, from the media paths
// its Game.vue references under /games/<slug>/. Each entry maps the file's
// place under public/games/<slug>/ to where it lives in the archive/<slug> tag.
//
//   node scripts/media-manifest.mjs [slug ...]
//
// `branch` is the game's original branch, used when the archive tag doesn't
// exist. It defaults to the slug; edit media.json if the branch is named
// differently.
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const gamesDir = new URL('../src/games/', import.meta.url).pathname
const slugs = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync(gamesDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name)

for (const slug of slugs) {
  const gamePath = join(gamesDir, slug, 'Game.vue')
  if (!existsSync(gamePath)) continue

  const source = readFileSync(gamePath, 'utf8')
  const pattern = new RegExp(`/games/${slug}/((?:images|sounds|video|data)/[^'"\\s)]+)`, 'g')
  const files = {}
  for (const [, path] of source.matchAll(pattern)) {
    files[path] = `public/${path}`
  }

  const manifestPath = join(gamesDir, slug, 'media.json')
  const previous = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {}
  const manifest = {
    tag: `archive/${slug}`,
    branch: previous.branch || slug,
    files: Object.fromEntries(Object.entries({ ...files, ...(previous.files || {}) }).sort())
  }
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
  console.log(`${slug}: ${Object.keys(manifest.files).length} files`)
}
