import { mount } from '@vue/test-utils'

import { createTestingPinia } from '@pinia/testing'

import Game from '@/games/las-vegas-gp-2025/Game.vue'

describe('Las Vegas GP 2025', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Game, {
      props: {
        addTeamsAllowed: true
      },
      global: {
        plugins: [createTestingPinia()]
      }
    })
  })
  test('should render the game', async () => {
    const reveal = await wrapper.find('.reveal')

    expect(reveal.exists()).toBe(true)
  })
})
