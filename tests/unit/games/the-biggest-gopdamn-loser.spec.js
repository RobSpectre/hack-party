import { mount } from '@vue/test-utils'

import { createTestingPinia } from '@pinia/testing'

import Game from '@/games/the-biggest-gopdamn-loser/Game.vue'

describe('The Biggest GOPdamn Loser', () => {
  test('should render the game', () => {
    const wrapper = mount(Game, {
      global: {
        plugins: [createTestingPinia()]
      }
    })

    expect(wrapper.find('.reveal').exists()).toBe(true)
  })
})
