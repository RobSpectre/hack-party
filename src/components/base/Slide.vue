<template lang="pug">
section(:class='classes')
  div(class='flex items-center justify-center h-full')
    div(class='flex flex-col')
      slot
  h1(v-if='heading') {{ heading }}
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Slide',
  props: {
    heading: {
      type: String,
      default: undefined
    },
    classes: {
      type: String,
      default: undefined
    }
  }
}
</script>
