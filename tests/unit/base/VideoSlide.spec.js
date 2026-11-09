import { mount } from '@vue/test-utils'

import VideoSlide from '@/components/base/VideoSlide.vue'

describe('VideoSlide', () => {
  test('leaves the background size to reveal.js by default', () => {
    const wrapper = mount(VideoSlide, { props: { background: '/video/a.mp4' } })

    expect(wrapper.attributes('data-background-size')).toBeUndefined()
  })

  test('can show a vertical video whole', () => {
    const wrapper = mount(VideoSlide, { props: { background: '/video/a.mp4', muted: false, size: 'contain' } })

    expect(wrapper.attributes('data-background-size')).toBe('contain')
  })
})
