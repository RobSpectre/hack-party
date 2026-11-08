<template lang="pug">
.hp-verdict(:class='`hp-verdict--${kind}`' role='dialog' aria-modal='true' :aria-label='headline')
  .hp-verdict-bars(aria-hidden='true')
  .hp-verdict-stage
    img.hp-verdict-image(v-if='headerImage' :src='headerImage' alt='')
    p.hp-verdict-status {{ status }}
    h2.hp-verdict-headline(ref='headline') {{ headline }}
    ul.hp-verdict-names(v-if='names.length > 0')
      li(v-for='(name, index) in names' :key='name' :ref='el => nameEls[index] = el') {{ name }}
    p.hp-verdict-answer(v-if='answer') {{ answer }}
</template>

<script>
import { decrypt } from '@/theme/decrypt'

// Uplink's winner and loser reveal: the screen goes dark and the verdict
// decrypts out of random glyphs over the color bars.
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Verdict',
  props: {
    kind: {
      type: String,
      default: 'granted'
    },
    names: {
      type: Array,
      default: () => []
    },
    answer: {
      type: String,
      default: ''
    },
    headerImage: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      nameEls: [],
      cancels: []
    }
  },
  computed: {
    headline () {
      return this.kind === 'granted' ? 'Access granted' : 'Permission denied'
    },
    status () {
      return this.kind === 'granted' ? '$ ./verify --answer  ·  exit 0' : '$ ./verify --answer  ·  exit 1'
    }
  },
  mounted () {
    this.cancels.push(decrypt(this.$refs.headline, this.headline.toUpperCase(), { duration: 700, delay: 250 }))

    this.nameEls.forEach((el, index) => {
      this.cancels.push(decrypt(el, this.names[index], { duration: 600, delay: 650 + index * 160 }))
    })
  },
  beforeUnmount () {
    this.cancels.forEach(cancel => cancel())
  }
}
</script>

<style lang="scss">
.hp-verdict {
  --hp-verdict-color: var(--hp-signal);

  position: fixed;
  inset: 0;
  z-index: 60;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: rgb(16 12 36 / 0.9);
  backdrop-filter: blur(10px) saturate(0.6);
  font-size: 16px;
  color: var(--hp-fg);
  text-align: center;
  animation: hp-verdict-scrim 220ms var(--hp-ease) both;
}

.hp-verdict--denied {
  --hp-verdict-color: var(--hp-magenta);
}

// The color bars cross the screen once behind the verdict.
.hp-verdict-bars {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 34vh;
  transform: translateY(-50%) scaleX(0);
  transform-origin: left center;
  background: var(--hp-bars);
  opacity: 0.16;
  animation: hp-verdict-bars 900ms var(--hp-ease) 120ms both;
}

.hp-verdict--denied .hp-verdict-bars {
  transform-origin: right center;
  filter: grayscale(0.7);
}

.hp-verdict-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  max-width: min(1400px, 90vw);
  padding: 0 4vw;
}

.hp-verdict-image {
  max-height: 26vh;
  max-width: 40vw;
  border-radius: var(--hp-radius) !important;
  box-shadow: var(--hp-shadow) !important;
  animation: hp-verdict-rise 600ms var(--hp-ease) 100ms both;
}

.hp-verdict-status {
  margin: 8px 0 0;
  font-family: var(--hp-font-data);
  font-size: clamp(14px, 1.2vw, 22px);
  letter-spacing: 0.04em;
  color: var(--hp-muted);
  animation: hp-verdict-rise 500ms var(--hp-ease) 160ms both;
}

:root[data-theme] .reveal .hp-verdict-headline,
.hp-verdict-headline {
  margin: 0;
  font-family: var(--hp-font-display);
  font-size: clamp(48px, 7.4vw, 150px);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--hp-verdict-color);
  text-wrap: balance;
}

.hp-verdict-names {
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px 0.9em;
  margin: 6px 0 0 !important;
  padding: 0;
  list-style: none;

  li,
  :root[data-theme] .reveal & li {
    font-family: var(--hp-font-display);
    font-size: clamp(36px, 4.6vw, 96px);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--hp-fg);
  }
}

.hp-verdict-answer {
  margin: 10px 0 0;
  max-width: 40ch;
  font-family: var(--hp-font-body);
  font-size: clamp(20px, 2vw, 40px);
  line-height: 1.3;
  color: var(--hp-muted);
  animation: hp-verdict-rise 600ms var(--hp-ease) 1000ms both;
}

@keyframes hp-verdict-scrim {
  from {
    opacity: 0;
  }
}

@keyframes hp-verdict-bars {
  to {
    transform: translateY(-50%) scaleX(1);
  }
}

@keyframes hp-verdict-rise {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hp-verdict-bars {
    animation: none;
    transform: translateY(-50%);
  }

  .hp-verdict-image,
  .hp-verdict-status,
  .hp-verdict-answer {
    animation: hp-verdict-scrim 200ms linear both;
  }
}
</style>
