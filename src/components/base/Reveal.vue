<template lang="pug">
.reveal(class='theater' ref='presentation')
  slot
  BroadcastChrome(v-if='stage && ready' :deck='deck')
  SettingsPanel(v-if='ready' :deck='deck')
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
import Reveal from 'reveal.js'

import BroadcastChrome from '@/components/base/BroadcastChrome.vue'
import SettingsPanel from '@/components/base/SettingsPanel.vue'
import themed from '@/theme/mixin'

export default {
  name: 'Reveal',
  components: {
    BroadcastChrome,
    SettingsPanel
  },
  mixins: [themed],
  emits: ['reveal-rendered', 'slide-changed'],
  data: function () {
    return {
      deck: undefined,
      ready: false,
      alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    }
  },
  mounted () {
    this.presentation = this.$refs.presentation

    // Stage themes size a deck for a 1080p stream (see stage.scss).
    document.documentElement.classList.add('hp-deck')

    this.waitToRenderReveal()
  },
  beforeUnmount () {
    this.presentation = null
    document.documentElement.classList.remove('hp-deck')

    if (this.deck) {
      this.deck.destroy()
    }
  },
  methods: {
    waitToRenderReveal () {
      // Stop waiting if the deck was unmounted before it ever got a size.
      if (!this.presentation || !this.presentation.parentElement) {
        return
      }

      if (!(this.presentation.parentElement.clientWidth > 0)) {
        setTimeout(() => window.requestAnimationFrame(this.waitToRenderReveal),
          500)
      } else {
        this.renderReveal()
      }
    },
    renderReveal () {
      this.deck = new Reveal({
        controls: false,
        progress: true,
        history: true,
        overview: false,
        loop: false,
        transition: 'none',
        embedded: true,
        margin: 0,
        width: '100%',
        height: '100%',
        keyboard: {
          32: null,
          66: null,
          70: null,
          72: null,
          75: null,
          76: null,
          78: null,
          79: null,
          80: null
        }
      })

      this.deck.initialize().then(() => {
        this.deck.layout()
        this.$emit('reveal-rendered', this.deck)
        window.deck = this.deck
        this.setShortcuts(window.deck.getCurrentSlide())
        this.setShortcutListener()
        this.ready = true
      })
    },
    setShortcutListener () {
      window.deck.on('slidechanged', event => {
        this.$emit('slide-changed', event)
        this.setShortcuts(event.currentSlide)
      })
    },
    setShortcuts (slide) {
      if (slide.getElementsByTagName('button').length > 0) {
        this.setButtonShortcuts(slide)
      } else if (slide.getElementsByTagName('a').length > 0) {
        this.setAnchorShortcuts(slide)
      }

      if (slide.getElementsByTagName('input').length > 0) {
        this.setInputShortcut(slide)
      }
    },
    setButtonShortcuts (slide) {
      Array.from(slide.getElementsByTagName('button')).forEach((button, index) => {
        button.setAttribute('accesskey', this.alphabet[index])
      })
    },
    setAnchorShortcuts (slide) {
      Array.from(slide.getElementsByTagName('a')).forEach((button, index) => {
        button.setAttribute('accesskey', this.alphabet[index])
      })
    },
    setInputShortcut (slide) {
      slide.getElementsByTagName('input')[0].setAttribute('accesskey', 'i')
    }
  }
}
</script>

<style src="@/../node_modules/reveal.js/dist/reveal.css"></style>
<style>
/*
  Tailwind 3 pulled its utilities in through the reveal theme, so they loaded
  again here, after each game's own styles. Games rely on that order.
*/
@import '../../assets/styles/tailwind.css';
</style>
<style lang="scss" src="../../assets/styles/reveal_theme.scss"></style>
<style lang="scss">
@reference '../../assets/styles/tailwind.css';
.theater {
  @apply h-screen w-full;
}

section {
  @apply h-full;
}
</style>
