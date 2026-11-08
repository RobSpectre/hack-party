<template lang="pug">
.hp-title-card
  ol.hp-title-lines(v-if='copy.titleLines.length' aria-hidden='true')
    li(v-for='(line, index) in copy.titleLines' :key='line[0]' :style='{ animationDelay: `${index * 140}ms` }')
      span {{ line[0] }}
      span.hp-title-ok(v-if='line[1]') {{ line[1] }}
  h2.hp-title-mark
    Wordmark(size='large' :decryptAfter='theme.decrypt ? 620 : null')
  p.hp-title-tagline {{ copy.tagline }}
</template>

<script>
import Wordmark from '@/components/base/Wordmark.vue'
import themed from '@/theme/mixin'

// The opening card on a stage theme. Uplink boots and decrypts the wordmark;
// the other themes stage it in their own stylesheet.
export default {
  name: 'TitleCard',
  components: {
    Wordmark
  },
  mixins: [themed]
}
</script>
