import games, { findGame } from '@/games'

describe('games registry', () => {
  test('every game has a unique slug, a title and a component', () => {
    const slugs = games.map(game => game.slug)

    expect(new Set(slugs).size).toBe(slugs.length)
    games.forEach(game => {
      expect(game.slug).toMatch(/^[a-z0-9-]+$/)
      expect(game.title).toBeTruthy()
      expect(typeof game.component).toBe('function')
    })
  })

  test('finds a game by slug', () => {
    expect(findGame('las-vegas-gp-2025').title).toBe('Las Vegas GP 2025')
    expect(findGame('nope')).toBeUndefined()
  })
})
