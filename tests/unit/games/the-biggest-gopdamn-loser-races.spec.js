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

  test('ads are YouTube ids when set', () => {
    races.filter(race => race.ad).forEach(race => {
      expect(race.ad).toMatch(/^[\w-]{11}$/)
    })
  })
})
