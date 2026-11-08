<template lang="pug">
.hp-chrome(:class='{ "hp-chrome--hijacked": hijacked }')
  .hp-bug(aria-hidden='true')
    span.hp-live
      span.hp-live-dot
      | {{ hijacked ? 'Signal lost' : 'Live' }}
    Wordmark(size='small')
    span.hp-channel
      span CH 1337
      span.hp-channel-count {{ slideLabel }}
  .hp-wipe(ref='wipe' aria-hidden='true')
  .hp-hijack(v-if='hijacked' role='status')
    span Hack the planet
</template>

<script>
import Wordmark from '@/components/base/Wordmark.vue'
import { prefersReducedMotion } from '@/theme/decrypt'

const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft',
  'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

const pad = n => String(n).padStart(3, '0')

// Uplink's broadcast package around a deck: the live bug, the channel and
// slide counter, the color-bar wipe between slides, and one pirate signal.
export default {
  name: 'BroadcastChrome',
  components: {
    Wordmark
  },
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

      const timing = { duration: 560, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
      const from = direction > 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)'

      layers.forEach(layer => layer.animate(
        [{ clipPath: from }, { clipPath: 'inset(0 0 0 0)' }],
        timing
      ))

      // The band's centre rides the clip edge, then fades as it reaches the far side.
      const skew = direction > 0 ? -14 : 14
      const at = edge => `translateX(calc(${edge}vw - 50%)) skewX(${skew}deg)`
      const [start, end] = direction > 0 ? [0, 100] : [100, 0]

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

<style lang="scss">
.hp-chrome {
  position: fixed;
  inset: 0;
  z-index: 40;
  pointer-events: none;
  font-size: 16px;
  text-transform: none;
}

.hp-bug {
  position: absolute;
  bottom: 22px;
  right: 22px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 14px;
  border-radius: 10px;
  background: rgb(16 12 36 / 0.72);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 20px -10px rgb(4 2 14 / 0.8);
}

.hp-bug {
  .hp-wordmark--small {
    font-size: 18px;
  }
}

.hp-live {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--hp-font-data);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--hp-fg);
}

.hp-live-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--hp-red);
  box-shadow: 0 0 0 3px rgb(255 90 54 / 0.25);
  animation: hp-live 2s ease-in-out infinite;
}

.hp-channel {
  display: inline-flex;
  gap: 10px;
  padding-left: 14px;
  box-shadow: -1px 0 0 var(--hp-rule);
  font-family: var(--hp-font-data);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--hp-muted);
  font-variant-numeric: tabular-nums;
}

.hp-channel-count {
  color: var(--hp-fg);
}

// The band of color bars that rides the leading edge of every slide change.
.hp-wipe {
  position: absolute;
  top: -5vh;
  bottom: -5vh;
  left: 0;
  width: 22vw;
  background: var(--hp-bars);
  opacity: 0;
  will-change: transform;
}

.hp-hijack {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;

  span {
    padding: 0.2em 0.5em;
    font-family: var(--hp-font-display);
    font-size: clamp(48px, 8vw, 160px);
    font-weight: 800;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: var(--hp-ink);
    background: var(--hp-lime);
    animation: hp-hijack 4s steps(1, end) both;
  }
}

.hp-chrome--hijacked .hp-live-dot {
  background: var(--hp-lime);
  box-shadow: 0 0 0 3px rgb(61 255 154 / 0.25);
}

:root.hp-hijacked .reveal > .slides,
:root.hp-hijacked .reveal > .backgrounds {
  animation: hp-glitch 4s steps(1, end) both;
}

@keyframes hp-live {
  50% {
    opacity: 0.35;
  }
}

@keyframes hp-hijack {
  0% { transform: translate(-3%, 1%) skewX(8deg); }
  4% { transform: translate(2%, -2%) skewX(-6deg); clip-path: inset(10% 0 40% 0); }
  8% { transform: none; clip-path: none; }
  70% { opacity: 1; }
  74% { opacity: 0; }
  78% { opacity: 1; }
  96% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes hp-glitch {
  0% { filter: hue-rotate(90deg) saturate(2); transform: translateX(-1.5%); }
  5% { filter: invert(1); transform: translateX(2%); clip-path: inset(30% 0 20% 0); }
  10% { filter: hue-rotate(-60deg) contrast(1.6); transform: none; clip-path: none; }
  20% { filter: none; }
  60% { filter: hue-rotate(140deg); }
  62% { filter: none; }
}

@media (prefers-reduced-motion: reduce) {
  .hp-live-dot,
  .hp-hijack span,
  :root.hp-hijacked .reveal > .slides,
  :root.hp-hijacked .reveal > .backgrounds {
    animation: none;
  }
}
</style>
