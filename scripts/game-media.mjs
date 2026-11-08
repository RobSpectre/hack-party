// Shared helpers for game media. Media for each game lives in git history
// (the game's archive/<slug> tag, or its original branch) and is copied into
// public/games/<slug>/, which git ignores, only when it's needed.
import { spawn } from 'node:child_process'
import { createWriteStream, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'

export const root = new URL('..', import.meta.url).pathname
export const gamesDir = join(root, 'src/games')
export const mediaDir = join(root, 'public/games')

function git (args, { stdout } = {}) {
  return new Promise(resolve => {
    const child = spawn('git', args, { cwd: root, stdio: ['ignore', stdout ? 'pipe' : 'ignore', 'pipe'] })
    let stderr = ''
    child.stderr.on('data', chunk => { stderr += chunk })

    const exited = new Promise(resolve => child.on('close', resolve))
    // When writing to a file, wait until it is flushed, not just until git exits.
    const flushed = stdout
      ? new Promise(resolve => child.stdout.pipe(stdout).on('finish', resolve))
      : Promise.resolve()
    Promise.all([exited, flushed]).then(([code]) => resolve({ ok: code === 0, stderr }))
  })
}

export function listGames () {
  return readdirSync(gamesDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name)
}

export function readManifest (slug) {
  const path = join(gamesDir, slug, 'media.json')
  if (!/^[a-z0-9-]+$/.test(slug) || !existsSync(path)) return null
  return JSON.parse(readFileSync(path, 'utf8'))
}

const archives = new Map()

// Resolves (and fetches, the first time) a local ref holding the game's
// archived commit: the archive/<slug> tag if it exists, else its branch.
export function resolveArchive ({ tag, branch }, log = () => {}) {
  const key = `${tag} ${branch}`
  if (!archives.has(key)) {
    archives.set(key, (async () => {
      const tagRef = `refs/tags/${tag}`
      if ((await git(['rev-parse', '--verify', '--quiet', tagRef])).ok) return tagRef
      if ((await git(['fetch', '--no-tags', 'origin', `${tagRef}:${tagRef}`])).ok) return tagRef

      if (!branch) return null
      const branchRef = `refs/remotes/origin/${branch}`
      if ((await git(['rev-parse', '--verify', '--quiet', branchRef])).ok) return branchRef
      log(`fetching branch ${branch} from origin (first time only)...`)
      if ((await git(['fetch', '--no-tags', 'origin', `refs/heads/${branch}:${branchRef}`])).ok) return branchRef
      return null
    })())
  }
  return archives.get(key)
}

const extracting = new Map()

// Copies one manifest entry (dest relative to public/games/<slug>/) out of
// git. Resolves to the file's path, or null if it can't be found.
export function extractMedia (slug, dest, { force = false, log } = {}) {
  const out = join(mediaDir, slug, dest)
  if (existsSync(out) && !force) return Promise.resolve(out)

  const key = out
  if (!extracting.has(key)) {
    extracting.set(key, (async () => {
      try {
        const manifest = readManifest(slug)
        const src = manifest && manifest.files[dest]
        if (!src) return null

        const ref = await resolveArchive(manifest, log)
        if (!ref) return null

        mkdirSync(dirname(out), { recursive: true })
        const tmp = `${out}.part`
        const result = await git(['cat-file', 'blob', `${ref}:${src}`], { stdout: createWriteStream(tmp) })
        if (!result.ok) {
          rmSync(tmp, { force: true })
          return null
        }
        renameSync(tmp, out)
        return out
      } finally {
        extracting.delete(key)
      }
    })())
  }
  return extracting.get(key)
}
