// Dev server plugin: when a game asks for /games/<slug>/<file> and the file
// isn't on disk yet, copy it out of git history (see game-media.mjs) and
// serve it. Media arrives the first time each slide needs it, so there's
// nothing to download before `npm run dev`.
import { createReadStream, statSync } from 'node:fs'
import { extname } from 'node:path'
import { extractMedia } from './game-media.mjs'

const TYPES = {
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.json': 'application/json',
  '.m4a': 'audio/mp4',
  '.mkv': 'video/x-matroska',
  '.mov': 'video/quicktime',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.ogg': 'audio/ogg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.webm': 'video/webm',
  '.webp': 'image/webp'
}

const MEDIA_URL = /^\/games\/([a-z0-9-]+)\/((?:images|sounds|video|data)\/.+)$/

// Serves a file with Range support, so video and audio can seek.
function sendFile (req, res, path) {
  const { size } = statSync(path)
  const type = TYPES[extname(path).toLowerCase()] || 'application/octet-stream'
  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || '')

  res.setHeader('Content-Type', type)
  res.setHeader('Accept-Ranges', 'bytes')
  res.setHeader('Cache-Control', 'no-cache')

  if (range && (range[1] || range[2])) {
    let start = range[1] ? Number(range[1]) : size - Number(range[2])
    let end = range[1] && range[2] ? Number(range[2]) : size - 1
    start = Math.max(0, start)
    end = Math.min(end, size - 1)
    if (start > end) {
      res.statusCode = 416
      res.setHeader('Content-Range', `bytes */${size}`)
      return res.end()
    }
    res.statusCode = 206
    res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`)
    res.setHeader('Content-Length', end - start + 1)
    if (req.method === 'HEAD') return res.end()
    return createReadStream(path, { start, end }).pipe(res)
  }

  res.setHeader('Content-Length', size)
  if (req.method === 'HEAD') return res.end()
  createReadStream(path).pipe(res)
}

export default function gameMedia () {
  return {
    name: 'hack-party:game-media',
    apply: 'serve',
    configureServer (server) {
      const log = message => server.config.logger.info(`[game media] ${message}`, { timestamp: true })

      server.middlewares.use(async (req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next()

        let pathname
        try {
          pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
        } catch {
          return next()
        }
        const match = MEDIA_URL.exec(pathname)
        if (!match || match[2].split('/').includes('..')) return next()

        try {
          const path = await extractMedia(match[1], match[2], { log })
          if (!path) {
            res.statusCode = 404
            return res.end()
          }
          sendFile(req, res, path)
        } catch (error) {
          next(error)
        }
      })
    }
  }
}
