// Copies each game's media out of git history into public/games/<slug>/,
// which git ignores. Media is read from the game's archive/<slug> tag, or
// from its original branch if the tag doesn't exist (yet), so nothing is
// stored twice.
//
//   npm run media                 every game
//   npm run media -- vegas-gp     one or more games by slug
//   npm run media -- --force ...  overwrite files already on disk
import { execFileSync, spawnSync } from 'node:child_process'
import { readdirSync, readFileSync, existsSync, mkdirSync, openSync, closeSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const gamesDir = join(root, 'src/games')
const args = process.argv.slice(2)
const force = args.includes('--force')
const wanted = args.filter(arg => !arg.startsWith('--'))

const slugs = wanted.length
  ? wanted
  : readdirSync(gamesDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name)

function git (...gitArgs) {
  return spawnSync('git', gitArgs, { cwd: root, encoding: 'utf8' })
}

function hasRef (ref) {
  return git('rev-parse', '--verify', '--quiet', ref).status === 0
}

// Returns a local ref holding the game's archived commit, fetching it if needed.
function resolveArchive (tag, branch) {
  const tagRef = `refs/tags/${tag}`
  if (hasRef(tagRef)) return tagRef
  if (git('fetch', '--no-tags', 'origin', `${tagRef}:${tagRef}`).status === 0) return tagRef

  if (!branch) return null
  const branchRef = `refs/remotes/origin/${branch}`
  if (hasRef(branchRef)) return branchRef
  console.log(`  fetching branch ${branch} from origin...`)
  if (git('fetch', '--no-tags', 'origin', `refs/heads/${branch}:${branchRef}`).status === 0) return branchRef
  return null
}

let missing = 0
for (const slug of slugs) {
  const manifestPath = join(gamesDir, slug, 'media.json')
  if (!existsSync(manifestPath)) {
    console.log(`${slug}: no media.json, skipping`)
    continue
  }

  const { tag, branch, files } = JSON.parse(readFileSync(manifestPath, 'utf8'))
  const entries = Object.entries(files)
  if (entries.length === 0) continue

  const ref = resolveArchive(tag, branch)
  console.log(`${slug}: ${entries.length} files from ${ref || tag}`)
  if (!ref) {
    console.log(`  could not find tag ${tag} or branch ${branch}`)
    missing += entries.length
    continue
  }

  for (const [dest, src] of entries) {
    const out = join(root, 'public/games', slug, dest)
    if (existsSync(out) && !force) continue

    if (git('cat-file', '-e', `${ref}:${src}`).status !== 0) {
      console.log(`  missing in ${ref}: ${src}`)
      missing += 1
      continue
    }

    mkdirSync(dirname(out), { recursive: true })
    const fd = openSync(out, 'w')
    try {
      execFileSync('git', ['cat-file', 'blob', `${ref}:${src}`], { cwd: root, stdio: ['ignore', fd, 'inherit'] })
    } catch (error) {
      closeSync(fd)
      rmSync(out, { force: true })
      throw error
    }
    closeSync(fd)
  }
}

if (missing) {
  console.log(`\n${missing} file(s) could not be found. Those slides will show without them.`)
}
