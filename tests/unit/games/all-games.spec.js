import { mount, flushPromises } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import games from '@/games'

// Smoke test: every game in the registry mounts and renders its deck.
describe.each(games.map(game => [game.slug, game]))('%s', (slug, game) => {
  test('renders', async () => {
    const { default: Game } = await game.component()
    const wrapper = mount(Game, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    await flushPromises()

    expect(wrapper.find('.reveal').exists()).toBe(true)
    wrapper.unmount()
  })
})
