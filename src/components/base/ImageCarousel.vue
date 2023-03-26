<template lang='pug'>
GameContentWithSidebar(v-for='image in images' :key='image')
  template(v-slot:header)
    slot(name='header')
  template(v-slot:content)
    .flex.flex-grow.flex-col
      img(:src='image')
</template>

<script>
import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

export default {
  name: 'ImageCarousel',
  components: {
    GameContentWithSidebar
  },
  props: {
    images: Array
  }
}
</script>
