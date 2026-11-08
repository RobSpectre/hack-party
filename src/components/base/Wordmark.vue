<template lang="pug">
span.hp-wordmark(:class='`hp-wordmark--${size}`' role='img' aria-label='hack.party')
  span.hp-wordmark-text(ref='text' aria-hidden='true') hack.party
  span.hp-wordmark-cursor(aria-hidden='true')
</template>

<script>
import { decrypt } from '@/theme/decrypt'

// The hack.party wordmark. Each stage theme letters it in its own face;
// Uplink adds a blinking block cursor and can decrypt it in.
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
