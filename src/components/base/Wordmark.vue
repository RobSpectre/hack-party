<template lang="pug">
span.hp-wordmark(:class='`hp-wordmark--${size}`' role='img' aria-label='hack.party')
  span.hp-wordmark-text(ref='text' aria-hidden='true') hack.party
  span.hp-wordmark-cursor(aria-hidden='true')
</template>

<script>
import { decrypt } from '@/theme/decrypt'

// The Uplink wordmark: hack.party with a blinking block cursor.
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Wordmark',
  props: {
    size: {
      type: String,
      default: 'medium'
    },
    // Decrypt the letters in after this many milliseconds; null to skip.
    decryptAfter: {
      type: Number,
      default: null
    }
  },
  mounted () {
    if (this.decryptAfter !== null) {
      this.cancel = decrypt(this.$refs.text, 'hack.party', { duration: 1100, delay: this.decryptAfter })
    }
  },
  beforeUnmount () {
    if (this.cancel) {
      this.cancel()
    }
  }
}
</script>

<style lang="scss">
.hp-wordmark {
  display: inline-flex;
  align-items: baseline;
  font-family: var(--hp-font-display);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--hp-fg);
  text-transform: none;
  white-space: nowrap;
}

.hp-wordmark--small {
  font-size: 26px;
}

.hp-wordmark--medium {
  font-size: 40px;
}

.hp-wordmark--large {
  font-size: clamp(40px, 11vw, 140px);
}

.hp-wordmark-cursor {
  display: inline-block;
  width: 0.42em;
  height: 0.7em;
  margin-left: 0.08em;
  background: var(--hp-signal);
  animation: hp-cursor 1.06s steps(1, end) infinite;
}

@keyframes hp-cursor {
  50% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hp-wordmark-cursor {
    animation: none;
  }
}
</style>
