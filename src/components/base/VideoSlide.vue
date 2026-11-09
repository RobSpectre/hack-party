<template lang="pug">
section(
  v-if='muted'
  :data-background-video='background'
  :data-background-size='size'
  data-background-color='#000'
  data-background-video-muted
  data-background-video-loop
)
  slot
section(
  v-else
  :data-background-video='background'
  :data-background-size='size'
  data-background-color='#000'
)
  slot
</template>

<script>
export default {
  name: 'VideoSlide',
  props: {
    background: {
      type: String,
      default: undefined
    },
    muted: {
      type: Boolean,
      default: true
    },
    // reveal.js background size: 'contain' shows a vertical video whole
    // instead of cropping it to fill the screen.
    size: {
      type: String,
      default: undefined
    }
  }
}
</script>
