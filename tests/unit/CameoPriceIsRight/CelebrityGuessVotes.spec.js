import { mount } from '@vue/test-utils'

import { createTestingPinia } from '@pinia/testing'

import CelebrityGuess from '@/components/CameoPriceIsRight/CelebrityGuess.vue'
import CameoPriceIsRightRound from '@/components/CameoPriceIsRight/CameoPriceIsRightRound.vue'

const players = [
  { index: 0, name: 'Morty', score: 0, team: undefined },
  { index: 1, name: 'Rick', score: 0, team: undefined }
]

const pinia = () => createTestingPinia({
  initialState: { 'hack.party game board': { game: { players } } }
})

describe('CelebrityGuess with votes', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CelebrityGuess, {
      props: {
        celebrity: 'Mike Lawler',
        price: 17135,
        prize: 1,
        denomination: '',
        suffix: ' votes',
        separators: true
      },
      global: { plugins: [pinia()] }
    })
  })

  it('reads guesses typed with commas or a dollar sign', () => {
    expect(wrapper.vm.parseGuess('17,000')).toBe(17000)
    expect(wrapper.vm.parseGuess('$1,234')).toBe(1234)
    expect(wrapper.vm.parseGuess('42')).toBe(42)
  })

  it('shows answers and guesses as votes', async () => {
    expect(wrapper.vm.dollarify(17135)).toBe('17,135 votes')

    const input = wrapper.find('input')
    await input.setValue('12,500')
    await input.trigger('keydown.enter')

    expect(wrapper.vm.players[0].value).toBe('12,500 votes')
  })

  it('has no header image when none is given', () => {
    expect(wrapper.find('img.clear-reveal').exists()).toBe(false)
  })
})

describe('CelebrityGuess, the way older games use it', () => {
  it('keeps dollars in the sidebar', async () => {
    const wrapper = mount(CelebrityGuess, {
      props: { celebrity: 'Lea Thompson', price: 125, prize: 1 },
      global: { plugins: [pinia()] }
    })

    const input = wrapper.find('input')
    await input.setValue('100')
    await input.trigger('keydown.enter')

    expect(wrapper.vm.players[0].value).toBe('$100')
    expect(wrapper.vm.dollarify(1250)).toBe('$1250')
  })
})

describe('CameoPriceIsRightRound with a YouTube ad', () => {
  const mountRound = props => mount(CameoPriceIsRightRound, {
    props: { celebrity: 'Mike Lawler', price: 17135, prize: 1, ...props },
    global: { plugins: [pinia()] }
  })

  it('plays the YouTube video instead of a video file', () => {
    const wrapper = mountRound({ youtube: 'abc123', video: '/video/nope.mp4' })

    expect(wrapper.findComponent({ name: 'GameYouTube' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'CelebrityVideo' }).exists()).toBe(false)
  })

  it('skips the video slide when there is no video', () => {
    const wrapper = mountRound({})

    expect(wrapper.findComponent({ name: 'GameYouTube' }).exists()).toBe(false)
    expect(wrapper.findComponent({ name: 'CelebrityVideo' }).exists()).toBe(false)
  })
})
