import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import { applyTheme, currentTheme, cycleTheme, defaultTheme, resolveTheme, setTheme } from '@/theme'

import AddPlayersBar from '@/components/Players/AddPlayersBar.vue'
import ScoreChip from '@/components/Players/ScoreChip.vue'
import WinnerCard from '@/components/base/WinnerCard.vue'
import LoserCard from '@/components/base/LoserCard.vue'
import GamesIndex from '@/views/GamesIndex.vue'
import games from '@/games'

describe('themes', () => {
  afterEach(() => {
    window.localStorage.clear()
    window.history.replaceState(null, '', '/')
    applyTheme('classic')
  })

  test('the default theme is Uplink', () => {
    expect(resolveTheme()).toBe(defaultTheme)
    expect(defaultTheme).toBe('uplink')
  })

  test('applying a theme sets data-theme on <html>', () => {
    applyTheme('uplink')
    expect(document.documentElement.dataset.theme).toBe('uplink')
    expect(currentTheme.value).toBe('uplink')
  })

  test('an unknown theme falls back to the default', () => {
    expect(applyTheme('vaporwave')).toBe(defaultTheme)
  })

  test('a game can pick its theme, but the viewer and the URL win', () => {
    expect(resolveTheme('classic')).toBe('classic')

    setTheme('uplink')
    expect(resolveTheme('classic')).toBe('uplink')

    window.history.replaceState(null, '', '/?theme=classic')
    expect(resolveTheme('uplink')).toBe('classic')
  })

  test('cycling moves to the next theme and remembers it', () => {
    applyTheme('uplink')
    expect(cycleTheme()).toBe('classic')
    expect(window.localStorage.getItem('hp-theme')).toBe('classic')
  })
})

describe('Uplink components', () => {
  beforeEach(() => applyTheme('uplink'))
  afterEach(() => applyTheme('classic'))

  test('the add bar speaks sudo and suggests a hacker handle', () => {
    const wrapper = mount(AddPlayersBar, { global: { plugins: [createTestingPinia()] } })

    expect(wrapper.find('button').text()).toBe('sudo useradd')
    expect(wrapper.find('input').attributes('placeholder')).toBe('Shrimply Pibbles')
  })

  test('scores show their hex value', () => {
    const wrapper = mount(ScoreChip, { props: { value: 12 } })

    expect(wrapper.find('.hp-score-value').text()).toBe('12')
    expect(wrapper.find('.hp-hex').text()).toBe('0x0C')
  })

  test('winners get access granted', () => {
    const wrapper = mount(WinnerCard, { props: { winners: ['Rick'], answerName: 'Life', answerValue: '42' } })

    expect(wrapper.find('.hp-verdict--granted').exists()).toBe(true)
    expect(wrapper.find('.hp-verdict-answer').text()).toBe('Life is 42.')
  })

  test('losers get permission denied', () => {
    const wrapper = mount(LoserCard, { props: { answerName: 'Life', answerValue: '42' } })

    expect(wrapper.find('.hp-verdict--denied').exists()).toBe(true)
  })

  test('the channel guide lists and filters every game', async () => {
    const wrapper = mount(GamesIndex)

    expect(wrapper.findAll('a.game-link').length).toBe(games.length)

    await wrapper.find('.hp-grep input').setValue('christmas')
    const titles = wrapper.findAll('a.game-link').map(link => link.find('.hp-title').text())

    expect(titles.length).toBeGreaterThan(0)
    titles.forEach(title => expect(title.toLowerCase()).toContain('christmas'))
  })
})
