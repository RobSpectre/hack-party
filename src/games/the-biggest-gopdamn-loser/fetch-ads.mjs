#!/usr/bin/env node
// Downloads each Republican's most-viewed campaign ad for The Biggest
// GOPdamn Loser. Run it on a machine that can reach YouTube, with yt-dlp
// (and ffmpeg, to merge video and audio) installed:
//
//   node src/games/the-biggest-gopdamn-loser/fetch-ads.mjs --find
//       Search YouTube for each Republican's campaign channel and print the
//       candidates. Copy the right one into `channel` in races.js.
//
//   node src/games/the-biggest-gopdamn-loser/fetch-ads.mjs [key ...]
//       For each race with a channel (or only the keys given, like ny-17):
//       list the channel's videos uploaded since --since (default
//       2025-01-01), print the top ten by views, download the most-viewed
//       one (or the race's `ad` id, if set) to
//       public/games/the-biggest-gopdamn-loser/video/<key>.mp4, and record
//       it in ads.json. Check the printed list: the top video might be a
//       speech or interview rather than an ad. If it is, set `ad` in
//       races.js to the right id and run it again for that race.
//
// Options: --since YYYY-MM-DD, --force (download again even if the file exists)
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { parseArgs } from 'node:util'

import { rounds } from './races.js'

const here = new URL('.', import.meta.url).pathname
const root = join(here, '../../..')
const slug = 'the-biggest-gopdamn-loser'
const videoDir = join(root, 'public/games', slug, 'video')
const adsPath = join(here, 'ads.json')

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    find: { type: 'boolean' },
    since: { type: 'string', default: '2025-01-01' },
    force: { type: 'boolean' }
  }
})

function ytdlp (args) {
  const result = spawnSync('yt-dlp', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
  if (result.error) {
    console.error('Could not run yt-dlp. Install it first: https://github.com/yt-dlp/yt-dlp#installation')
    process.exit(1)
  }
  if (result.status !== 0) throw new Error(result.stderr.trim().split('\n').pop())
  return result.stdout
}

// One JSON object per line, from --print with a tab-free template.
function listing (args) {
  return ytdlp([...args, '--print', '%(.{id,title,view_count,upload_date,channel,channel_id,channel_url})j'])
    .split('\n').filter(Boolean).map(line => JSON.parse(line))
}

const views = n => (n ?? 0).toLocaleString('en-US').padStart(12)
const races = rounds.flatMap(round => round.races)
  .filter(race => positionals.length === 0 || positionals.includes(race.key))

if (values.find) {
  for (const race of races) {
    console.log(`\n${race.key}  ${race.republican}`)
    const results = listing(['--flat-playlist', `ytsearch25:${race.republican} campaign ad`])
    const channels = new Map()
    for (const video of results) {
      const url = video.channel_url || (video.channel_id && `https://www.youtube.com/channel/${video.channel_id}`)
      if (!url) continue
      const entry = channels.get(url) || { name: video.channel || '?', count: 0 }
      entry.count++
      channels.set(url, entry)
    }
    const surname = race.republican.replace(/,? Jr\.$/, '').split(' ').pop().toLowerCase()
    ;[...channels].sort((a, b) => b[1].count - a[1].count).slice(0, 6).forEach(([url, { name, count }]) => {
      const likely = name.toLowerCase().includes(surname) ? '  <- has their name' : ''
      console.log(`  ${String(count).padStart(2)} videos  ${name}  ${url}${likely}`)
    })
  }
  process.exit(0)
}

const ads = existsSync(adsPath) ? JSON.parse(readFileSync(adsPath, 'utf8')) : {}
mkdirSync(videoDir, { recursive: true })
const since = values.since.replaceAll('-', '')

for (const race of races) {
  if (!race.channel && !race.ad) {
    console.log(`\n${race.key}: no channel or ad in races.js yet, skipping (try --find)`)
    continue
  }
  console.log(`\n${race.key}  ${race.republican}`)

  let pick
  if (race.channel) {
    const videos = listing([
      '--flat-playlist',
      '--extractor-args', 'youtubetab:approximate_date',
      `${race.channel.replace(/\/$/, '')}/videos`
    ])
      .filter(video => !video.upload_date || video.upload_date >= since)
      .sort((a, b) => (b.view_count ?? 0) - (a.view_count ?? 0))
    videos.slice(0, 10).forEach((video, i) => {
      console.log(`  ${i + 1}.${views(video.view_count)} views  ${video.upload_date || '????????'}  ${video.id}  ${video.title}`)
    })
    pick = race.ad ? videos.find(video => video.id === race.ad) || { id: race.ad } : videos[0]
  } else {
    pick = { id: race.ad }
  }
  if (!pick) {
    console.log('  no videos found')
    continue
  }

  const file = `video/${race.key}.mp4`
  const out = join(root, 'public/games', slug, file)
  if (values.force || !existsSync(out)) {
    console.log(`  downloading ${pick.id}...`)
    ytdlp([
      '-S', 'res:1080,ext:mp4:m4a',
      '--merge-output-format', 'mp4',
      '--no-playlist',
      '-o', out,
      '--force-overwrites',
      `https://www.youtube.com/watch?v=${pick.id}`
    ])
  }

  // Fill in details the channel listing didn't have.
  const details = pick.title && pick.upload_date ? pick : listing(['--skip-download', `https://www.youtube.com/watch?v=${pick.id}`])[0]
  ads[race.key] = {
    id: pick.id,
    title: details.title,
    views: details.view_count ?? null,
    uploaded: details.upload_date ?? null,
    channel: race.channel || details.channel_url || null,
    checked: new Date().toISOString().slice(0, 10),
    file
  }
  console.log(`  saved ${file}: ${details.title}`)
}

writeFileSync(adsPath, JSON.stringify(ads, null, 2) + '\n')
console.log(`\nWrote ${adsPath}`)
