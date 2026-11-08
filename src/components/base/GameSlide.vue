<template lang="pug">
section(
  :class='classes'
  :data-state='dataState'
)
  .h-screen.flex.overflow-hidden
    slot
    h1(v-if='heading') {{ heading }}
</template>

<script>
export default {
  name: 'GameSlide',
  props: {
    heading: {
      type: String,
      default: undefined
    },
    classes: {
      type: String,
      default: undefined
    },
    dataState: {
      type: String,
      default: null
    }
  }
}
</script>
