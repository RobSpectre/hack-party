<template lang="pug">
div(:class='{ "hp-score": uplink }')
  template(v-if='uplink && isNumber')
    span.hp-score-value(:key='value') {{ value }}
    span.hp-hex {{ hex }}
  template(v-else) {{ value }}
</template>

<script>
import themed from '@/theme/mixin'

// A player's score. Uplink also prints it in hex, for the hackers in the room.
export default {
  name: 'ScoreChip',
  mixins: [themed],
  props: {
    value: {
      type: [Number, String],
      default: undefined
    }
  },
  computed: {
    isNumber () {
      return Number.isInteger(this.value)
    },
    hex () {
      const sign = this.value < 0 ? '-' : ''

      return `${sign}0x${Math.abs(this.value).toString(16).toUpperCase().padStart(2, '0')}`
    }
  }
}
</script>
