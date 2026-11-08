import { mount } from '@vue/test-utils'

import { createTestingPinia } from '@pinia/testing'

import GameYouTube from '@/components/base/GameYouTube.vue'

describe('GameYouTube', () => {
  it('lazy-loads the embed so reveal.js starts and stops it', () => {
    const wrapper = mount(GameYouTube, {
      props: { video: 'dQw4w9WgXcQ', title: 'Never gonna', start: 42 },
      global: { plugins: [createTestingPinia()] }
    })

    const iframe = wrapper.find('iframe')
    expect(iframe.attributes('src')).toBeUndefined()
    expect(iframe.attributes('data-src')).toBe(
      'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1&start=42'
    )
    expect(wrapper.find('h1').text()).toBe('Never gonna')
  })
})
