<template lang="pug">
.hp-settings(
  v-if='open'
  ref='panel'
  role='dialog'
  aria-modal='true'
  aria-labelledby='hp-settings-title'
  tabindex='-1'
  @keydown='onPanelKeydown'
)
  header.hp-settings-head
    h2#hp-settings-title.hp-settings-title Settings
    p.hp-settings-hint
      kbd ↑
      |  or
      kbd Esc
      |  back to the game
    button.hp-settings-close(type='button' aria-label='Back to the game' @click='close')
      XMarkIcon

  .hp-settings-grid
    section.hp-settings-section.hp-settings-players(aria-labelledby='hp-settings-players')
      h3#hp-settings-players.hp-settings-label Players
      AddPlayersBar
      ul.hp-settings-roster(v-if='players.length')
        li.hp-settings-player(v-for='player in players' :key='player.name')
          input.hp-settings-name(
            :value='player.name'
            :aria-label='`Name of ${player.name}`'
            spellcheck='false'
            autocomplete='off'
            @change='rename(player.name, $event)'
            @keydown.enter='$event.target.blur()'
          )
          .hp-settings-score
            button(type='button' :aria-label='`One point less for ${player.name}`' @click='increasePlayerScore(player.name, -1)')
              MinusIcon
            input(
              type='number'
              inputmode='numeric'
              :value='player.score'
              :aria-label='`Score of ${player.name}`'
              @change='setScore(player.name, $event)'
              @keydown.enter='$event.target.blur()'
            )
            button(type='button' :aria-label='`One point more for ${player.name}`' @click='increasePlayerScore(player.name, 1)')
              PlusIcon
          button.hp-settings-remove(type='button' :aria-label='`Remove ${player.name}`' @click='removePlayer(player.name)')
            TrashIcon
      p.hp-settings-empty(v-else) No players yet. Add one above.

    .hp-settings-side
      section.hp-settings-section(aria-labelledby='hp-settings-game')
        h3#hp-settings-game.hp-settings-label Game
        .hp-settings-game
          select(v-model='chosenGame' aria-labelledby='hp-settings-game')
            option(v-for='game in games' :key='game.slug' :value='game.slug') {{ game.title }} ({{ game.date }})
          button.hp-settings-go(type='button' :disabled='chosenGame === currentGame' @click='switchGame')
            | Play
            ArrowRightIcon
        p.hp-settings-note Players and scores come with you.

      section.hp-settings-section(aria-labelledby='hp-settings-theme')
        h3#hp-settings-theme.hp-settings-label Theme
        .hp-settings-themes(role='radiogroup' aria-labelledby='hp-settings-theme')
          button.hp-settings-theme(
            v-for='option in themes'
            :key='option.id'
            type='button'
            role='radio'
            :aria-checked='String(option.id === currentThemeId)'
            @click='chooseTheme(option.id)'
          )
            span.hp-settings-theme-name {{ option.name }}
            span.hp-settings-theme-desc {{ option.description }}
</template>

<script>
import { mapActions, mapGetters } from 'pinia'
import { useGameStore } from '@/store'

import { ArrowRightIcon, MinusIcon, PlusIcon, TrashIcon, XMarkIcon } from '@heroicons/vue/24/solid'

import AddPlayersBar from '@/components/Players/AddPlayersBar.vue'
import games from '@/games'
import { currentTheme, setTheme, themes } from '@/theme'

// The first keys of the Konami code. A down arrow that could be part of it
// is left to the code (BroadcastChrome) and does not open settings.
const konamiStart = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown']

const typing = target => target && (
  target.isContentEditable ||
  ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
)

// The host's settings, one arrow below the deck: change the game, fix the
// scoreboard, pick the theme. The deck keeps its place underneath.
export default {
  name: 'SettingsPanel',
  components: {
    AddPlayersBar,
    ArrowRightIcon,
    MinusIcon,
    PlusIcon,
    TrashIcon,
    XMarkIcon
  },
  props: {
    deck: {
      type: Object,
      required: true
    },
    game: {
      type: String,
      default: undefined
    }
  },
  data () {
    return {
      open: false,
      recent: [],
      games,
      themes,
      chosenGame: undefined
    }
  },
  computed: {
    currentGame () {
      return this.game || this.$route?.name
    },
    currentThemeId () {
      return currentTheme.value
    },
    players () {
      return this.getPlayersByScore
    },
    ...mapGetters(useGameStore, ['getPlayersByScore'])
  },
  mounted () {
    // Capture, so a down arrow that opens settings never reaches reveal.js.
    window.addEventListener('keydown', this.onKeydown, true)
  },
  beforeUnmount () {
    window.removeEventListener('keydown', this.onKeydown, true)
    if (this.open) {
      this.restoreKeyboard()
    }
  },
  methods: {
    onKeydown (event) {
      if (this.open || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
        return
      }

      const recent = [...this.recent, event.key].slice(-konamiStart.length)
      this.recent = recent

      if (event.key !== 'ArrowDown' || typing(event.target)) {
        return
      }

      // A game's own vertical slide below this one keeps the arrow.
      if (this.deck.availableRoutes && this.deck.availableRoutes().down) {
        return
      }

      // ↑ ↑ ↓ and ↑ ↑ ↓ ↓ are the Konami code under way.
      const konami = [3, 4].some(n => recent.slice(-n).join() === konamiStart.slice(0, n).join())

      if (konami) {
        return
      }

      event.preventDefault()
      event.stopImmediatePropagation()
      this.show()
    },
    onPanelKeydown (event) {
      if (event.key === 'Escape' || (event.key === 'ArrowUp' && !typing(event.target))) {
        event.preventDefault()
        this.close()
      }
    },
    show () {
      this.chosenGame = this.currentGame
      this.keyboard = this.deck.getConfig ? this.deck.getConfig().keyboard : undefined
      if (this.deck.configure) {
        this.deck.configure({ keyboard: false })
      }
      this.open = true
      this.$nextTick(() => this.$refs.panel && this.$refs.panel.focus())
    },
    close () {
      this.open = false
      this.recent = []
      this.restoreKeyboard()
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur()
      }
    },
    restoreKeyboard () {
      if (this.deck.configure) {
        this.deck.configure({ keyboard: this.keyboard === undefined ? true : this.keyboard })
      }
    },
    rename (name, event) {
      const value = event.target.value.trim()

      if (value === '' || value === name || this.players.some(player => player.name === value)) {
        event.target.value = name
        return
      }

      this.changeAttributeOfPlayer(name, 'name', value)
    },
    setScore (name, event) {
      const value = Number.parseInt(event.target.value, 10)

      if (Number.isNaN(value)) {
        event.target.value = this.players.find(player => player.name === name).score
        return
      }

      this.changeAttributeOfPlayer(name, 'score', value)
    },
    chooseTheme (id) {
      setTheme(id)
    },
    switchGame () {
      // A full page load, like the home page, so one game's deck and styles
      // never leak into the next. The scoreboard is persisted, so it comes along.
      window.location.assign(`/${this.chosenGame}`)
    },
    ...mapActions(useGameStore, ['changeAttributeOfPlayer', 'increasePlayerScore', 'removePlayer'])
  }
}
</script>
