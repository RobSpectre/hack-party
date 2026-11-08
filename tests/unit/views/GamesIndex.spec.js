import { mount } from '@vue/test-utils'

import GamesIndex from '@/views/GamesIndex.vue'
import games from '@/games'

describe('GamesIndex', () => {
  test('links to every game', () => {
    const wrapper = mount(GamesIndex)
    const links = wrapper.findAll('a.game-link')

    expect(links.length).toBe(games.length)
    expect(links[0].attributes('href')).toBe(`/${games[0].slug}`)
  })
})
