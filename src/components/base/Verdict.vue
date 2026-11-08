<template lang="pug">
.hp-verdict(:class='`hp-verdict--${kind}`' role='dialog' aria-modal='true' :aria-label='headline')
  .hp-verdict-bars(aria-hidden='true')
  .hp-verdict-stage
    img.hp-verdict-image(v-if='headerImage' :src='headerImage' alt='')
    p.hp-verdict-status {{ status }}
    .hp-verdict-burst
      h2.hp-verdict-headline(ref='headline') {{ headline }}
    ul.hp-verdict-names(v-if='names.length > 0')
      li(v-for='(name, index) in names' :key='name' :ref='el => nameEls[index] = el') {{ name }}
    p.hp-verdict-answer(v-if='answer') {{ answer }}
</template>

<script>
import { decrypt } from '@/theme/decrypt'
import themed from '@/theme/mixin'

// The stage themes' winner and loser reveal. Every theme dresses it in
// stage.scss and its own file; Uplink also decrypts the words out of glyphs.
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Verdict',
  mixins: [themed],
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
      return this.kind === 'granted' ? this.copy.granted : this.copy.denied
    },
    status () {
      return this.kind === 'granted' ? this.copy.grantedStatus : this.copy.deniedStatus
    }
  },
  mounted () {
    if (!this.theme.decrypt) {
      return
    }

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

