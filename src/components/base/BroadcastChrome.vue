<template lang="pug">
.hp-chrome(:class='{ "hp-chrome--hijacked": hijacked }')
  .hp-bug(aria-hidden='true')
    span.hp-live
      span.hp-live-dot
      | {{ hijacked ? 'Signal lost' : copy.live }}
    Wordmark(size='small')
    span.hp-channel
      span {{ copy.channel }}
      span.hp-channel-count {{ slideLabel }}
  .hp-wipe(ref='wipe' :class='`hp-wipe--${theme.wipe.axis || "x"}`' aria-hidden='true')
  .hp-hijack(v-if='hijacked' role='status')
    span Hack the planet
</template>

<script>
import Wordmark from '@/components/base/Wordmark.vue'
import { prefersReducedMotion } from '@/theme/decrypt'
import themed from '@/theme/mixin'

const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft',
  'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

const pad = n => String(n).padStart(3, '0')

// The broadcast package around a deck on every stage theme: the station bug,
// the slide counter, the theme's slide-change wipe, and one pirate signal.
export default {
  name: 'BroadcastChrome',
  components: {
    Wordmark
  },
  mixins: [themed],
  props: {
    deck: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      index: 0,
      total: 0,
      hijacked: false,
      typed: []
    }
  },
  computed: {
    slideLabel () {
      return `${pad(this.index + 1)} / ${pad(this.total)}`
    }
  },
  mounted () {
    this.sync()
    this.deck.on('slidechanged', this.onSlideChanged)
    window.addEventListener('keydown', this.onKeydown)
  },
  beforeUnmount () {
    this.deck.off('slidechanged', this.onSlideChanged)
    window.removeEventListener('keydown', this.onKeydown)
    clearTimeout(this.hijackTimer)
    clearTimeout(this.printTimer)
  },
  methods: {
    sync () {
      this.total = this.deck.getTotalSlides()
      this.index = this.deck.getSlidePastCount()
    },
    onSlideChanged (event) {
      const previous = this.index

      this.sync()
      this.wipe(this.index >= previous ? 1 : -1, event)
    },
    wipe (direction) {
      const root = this.$el.closest('.reveal')

      if (!root || typeof Element.prototype.animate !== 'function') {
        return
      }

      const layers = root.querySelectorAll(':scope > .slides, :scope > .backgrounds')

      if (prefersReducedMotion()) {
        layers.forEach(layer => layer.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          { duration: 150, easing: 'linear' }
        ))
        return
      }

      const { kind, axis, skew, duration, easing } = this.theme.wipe
      const timing = { duration, easing }

      if (kind === 'dots') {
        // A halftone iris: the new slide prints in as Ben-Day dots that swell
        // until they touch. --hp-dot is a registered property (stage.scss).
        const cell = 52 * Math.min(window.innerWidth / 1920, window.innerHeight / 1080)

        layers.forEach(layer => layer.animate(
          [{ '--hp-dot': '0px' }, { '--hp-dot': `${cell}px` }],
          timing
        ))
        root.classList.add('hp-printing')
        clearTimeout(this.printTimer)
        this.printTimer = setTimeout(() => root.classList.remove('hp-printing'), duration)
        return
      }

      // A band rides the leading edge of a clip-path reveal, then fades as it
      // reaches the far side.
      const forward = direction > 0
      const from = axis === 'y'
        ? (forward ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)')
        : (forward ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)')

      layers.forEach(layer => layer.animate(
        [{ clipPath: from }, { clipPath: 'inset(0 0 0 0)' }],
        timing
      ))

      const tilt = forward ? -skew : skew
      const at = edge => axis === 'y'
        ? `translateY(calc(${100 - edge}vh - 50%))`
        : `translateX(calc(${edge}vw - 50%)) skewX(${tilt}deg)`
      const [start, end] = forward ? [0, 100] : [100, 0]

      this.$refs.wipe.animate(
        [
          { transform: at(start), opacity: 1 },
          { transform: at(start + (end - start) * 0.6), opacity: 1, offset: 0.6 },
          { transform: at(end), opacity: 0 }
        ],
        timing
      )
    },
    onKeydown (event) {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key

      this.typed = [...this.typed, key].slice(-konami.length)

      if (konami.every((key, index) => key === this.typed[index])) {
        this.typed = []
        this.hijack()
      }
    },
    hijack () {
      this.hijacked = true
      document.documentElement.classList.add('hp-hijacked')

      clearTimeout(this.hijackTimer)
      this.hijackTimer = setTimeout(() => {
        this.hijacked = false
        document.documentElement.classList.remove('hp-hijacked')
      }, 4000)
    }
  }
}
</script>

