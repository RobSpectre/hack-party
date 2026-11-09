import { rounds, margin } from '@/games/the-biggest-gopdamn-loser/races.js'

describe('The Biggest GOPdamn Loser races', () => {
  const races = rounds.flatMap(round => round.races)

  test('three rounds of five races worth 1, 2 and 3 points', () => {
    expect(rounds.map(round => round.races.length)).toEqual([5, 5, 5])
    expect(rounds.map(round => round.points)).toEqual([1, 2, 3])
  })

  test('the setup never names the Republican before the reveal', () => {
    races.forEach(race => {
      const surname = race.republican.replace(/,? Jr\.$/, '').split(' ').pop()
      expect(race.place).not.toContain(surname)
      expect(race.seat).not.toContain(surname)
      expect(race.before.winner || '').not.toContain(surname)
    })
  })

  test('every race is a Democratic win with a source', () => {
    races.forEach(race => {
      expect(margin(race)).toBeGreaterThan(0)
      expect(race.result.source).toMatch(/^https:\/\//)
      expect(race.before.source).toMatch(/^https:\/\//)
      expect(race.before.votes).toBeGreaterThan(0)
    })
  })

  test('race keys are unique and ad overrides are YouTube ids or page URLs', () => {
    expect(new Set(races.map(race => race.key)).size).toBe(races.length)
    races.filter(race => race.ad).forEach(race => {
      expect(race.ad).toMatch(/^([\w-]{11}|https:\/\/\S+)$/)
    })
  })
})

describe('The Biggest GOPdamn Loser ads', () => {
  test('every downloaded ad belongs to a race and says where it came from', async () => {
    const { default: ads } = await import('@/games/the-biggest-gopdamn-loser/ads.json')
    const keys = rounds.flatMap(round => round.races).map(race => race.key)

    Object.entries(ads).forEach(([key, ad]) => {
      expect(keys).toContain(key)
      // A YouTube id, or the page the video came from when it isn't on YouTube.
      expect(ad.id || ad.url).toMatch(/^([\w-]{11}|https:\/\/.+)$/)
      expect(ad.file).toBe(`video/${key}.mp4`)
    })
  })
})

describe('The Biggest GOPdamn Loser boss fights', () => {
  test('one question closes each round, worth 3, 5 and 10 points', async () => {
    const { bossFights } = await import('@/games/the-biggest-gopdamn-loser/bossfights.js')

    expect(rounds.map(round => bossFights[round.number].points)).toEqual([3, 5, 10])
    expect(rounds.map(round => bossFights[round.number].questions.length)).toEqual([1, 1, 1])
    Object.values(bossFights).forEach(fight => {
      fight.questions.forEach(q => {
        expect(q.choices.length).toBeGreaterThan(1)
        expect(q.choices[q.answer]).toBeTruthy()
      })
    })
  })
})
