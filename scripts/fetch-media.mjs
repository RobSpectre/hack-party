// Copies games' media out of git history into public/games/<slug>/ ahead of
// time. The dev server also does this on demand, file by file, so this is
// only needed for `vite build` / `vite preview` or to prefetch before a party.
//
//   npm run media                 every game (several GB)
//   npm run media -- vegas-gp     one or more games by slug
//   npm run media -- --force ...  overwrite files already on disk
import { extractMedia, listGames, readManifest } from './game-media.mjs'

const args = process.argv.slice(2)
const force = args.includes('--force')
const wanted = args.filter(arg => !arg.startsWith('--'))
const slugs = wanted.length ? wanted : listGames()

let missing = 0
for (const slug of slugs) {
  const manifest = readManifest(slug)
  if (!manifest) {
    console.log(`${slug}: no media.json, skipping`)
    continue
  }

  const files = Object.keys(manifest.files)
  if (files.length === 0) continue

  console.log(`${slug}: ${files.length} files`)
  for (const dest of files) {
    const out = await extractMedia(slug, dest, { force, log: message => console.log(`  ${message}`) })
    if (!out) {
      console.log(`  missing: ${manifest.files[dest]}`)
      missing += 1
    }
  }
}

if (missing) {
  console.log(`\n${missing} file(s) could not be found. Those slides will show without them.`)
}
