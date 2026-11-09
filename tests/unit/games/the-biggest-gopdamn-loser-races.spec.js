import { rounds, margin } from '@/games/the-biggest-gopdamn-loser/races.js'

describe('The Biggest GOPdamn Loser races', () => {
  const races = rounds.flatMap(round => round.races)

  test('three rounds of five races worth 1, 2 and 3 points', () => {
    expect(rounds.map(round => round.races.length)).toEqual([5, 5, 5])
    expect(rounds.map(round => round.points)).toEqual([1, 2, 3])
  })

  test('every race is a Democratic win with a source', () => {
    races.forEach(race => {
      expect(margin(race)).toBeGreaterThan(0)
      expect(race.result.source).toMatch(/^https:\/\//)
      expect(race.before.source).toMatch(/^https:\/\//)
      expect(race.before.votes).toBeGreaterThan(0)
    })
  })

  test('race keys are unique and ad overrides are YouTube ids', () => {
    expect(new Set(races.map(race => race.key)).size).toBe(races.length)
    races.filter(race => race.ad).forEach(race => {
      expect(race.ad).toMatch(/^[\w-]{11}$/)
    })
  })
})

describe('The Biggest GOPdamn Loser ads', () => {
  test('every downloaded ad belongs to a race and says where it came from', async () => {
    const { default: ads } = await import('@/games/the-biggest-gopdamn-loser/ads.json')
    const keys = rounds.flatMap(round => round.races).map(race => race.key)

    Object.entries(ads).forEach(([key, ad]) => {
      expect(keys).toContain(key)
      expect(ad.id).toMatch(/^[\w-]{11}$/)
      expect(ad.file).toBe(`video/${key}.mp4`)
    })
  })
})
