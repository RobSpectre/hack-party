import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

import SettingsPanel from '@/components/base/SettingsPanel.vue'
import { useGameStore } from '@/store'
import { applyTheme, currentTheme } from '@/theme'
import games from '@/games'

function fakeDeck (down = false) {
  const config = { keyboard: { 32: null } }

  return {
    config,
    availableRoutes: () => ({ down }),
    getConfig: () => config,
    configure: vi.fn(next => Object.assign(config, next))
  }
}

function press (key, target = window) {
  const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true })
  target.dispatchEvent(event)
  return event
}

describe('SettingsPanel', () => {
  let pinia
  let store
  let wrapper

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
    store = useGameStore()
    store.addPlayer('Acid Burn')
    store.addPlayer('Zero Cool')
    store.changeAttributeOfPlayer('Acid Burn', 'score', 12)
    applyTheme('uplink')
  })

  afterEach(() => {
    wrapper.unmount()
    window.localStorage.clear()
    applyTheme('classic')
  })

  const mountPanel = (deck = fakeDeck()) => {
    wrapper = mount(SettingsPanel, {
      props: { deck, game: 'christmas-2025' },
      global: { plugins: [pinia] },
      attachTo: document.body
    })
    return deck
  }

  test('the down arrow opens settings and pauses the deck keyboard', async () => {
    const deck = mountPanel()

    expect(wrapper.find('.hp-settings').exists()).toBe(false)

    const event = press('ArrowDown')
    await wrapper.vm.$nextTick()

    expect(event.defaultPrevented).toBe(true)
    expect(wrapper.find('.hp-settings').exists()).toBe(true)
    expect(deck.configure).toHaveBeenLastCalledWith({ keyboard: false })
  })

  test('Escape closes settings and gives the deck its keys back', async () => {
    const deck = mountPanel()

    press('ArrowDown')
    await wrapper.vm.$nextTick()
    await wrapper.find('.hp-settings').trigger('keydown', { key: 'Escape' })

    expect(wrapper.find('.hp-settings').exists()).toBe(false)
    expect(deck.configure).toHaveBeenLastCalledWith({ keyboard: { 32: null } })
  })

  test('a vertical slide below keeps the down arrow', async () => {
    mountPanel(fakeDeck(true))

    press('ArrowDown')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.hp-settings').exists()).toBe(false)
  })

  test('the Konami code does not open settings', async () => {
    mountPanel()

    press('ArrowUp')
    press('ArrowUp')
    press('ArrowDown')
    press('ArrowDown')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.hp-settings').exists()).toBe(false)
  })

  test('the board can set a score, rename and remove a player', async () => {
    mountPanel()
    press('ArrowDown')
    await wrapper.vm.$nextTick()

    const zero = wrapper.findAll('.hp-settings-player')[1]
    const score = zero.find('.hp-settings-score input')
    await score.setValue('20')
    await score.trigger('change')
    expect(store.getPlayer('Zero Cool').score).toBe(20)

    const name = wrapper.findAll('.hp-settings-name')[0]
    expect(name.element.value).toBe('Zero Cool')
    await name.setValue('Crash Override')
    await name.trigger('change')
    expect(store.getPlayer('Crash Override').score).toBe(20)

    await wrapper.findAll('.hp-settings-remove')[1].trigger('click')
    expect(store.game.players.map(player => player.name)).toEqual(['Crash Override'])
  })

  test('a rename to an empty or taken name is refused', async () => {
    mountPanel()
    press('ArrowDown')
    await wrapper.vm.$nextTick()

    const name = wrapper.findAll('.hp-settings-name')[0]
    await name.setValue('Zero Cool')
    await name.trigger('change')

    expect(store.game.players.map(player => player.name)).toEqual(['Acid Burn', 'Zero Cool'])
    expect(name.element.value).toBe('Acid Burn')
  })

  test('the theme picker switches and remembers the theme', async () => {
    mountPanel()
    press('ArrowDown')
    await wrapper.vm.$nextTick()

    const benday = wrapper.findAll('.hp-settings-theme').find(button => button.text().includes('Ben-Day'))
    await benday.trigger('click')

    expect(currentTheme.value).toBe('benday')
    expect(window.localStorage.getItem('hp-theme')).toBe('benday')
    expect(benday.attributes('aria-checked')).toBe('true')
  })

  test('the game picker lists every game and starts on this one', async () => {
    mountPanel()
    press('ArrowDown')
    await wrapper.vm.$nextTick()

    const select = wrapper.find('.hp-settings-game select')
    expect(select.findAll('option').length).toBe(games.length)
    expect(select.element.value).toBe('christmas-2025')
    expect(wrapper.find('.hp-settings-go').attributes('disabled')).toBeDefined()
  })
})
