<template lang="pug">
VideoSlide(
  v-if='backgroundType === "video"'
  :background='background'
)
  .h-full.flex.items-center.justify-center
    TitleCard(v-if='stage && heading === defaultLogo')
    img(
      v-else-if='headingType === "image"'
      class='titleLogo'
      :src='heading'
    )
    h2(v-else class='titleLogo') {{ heading }}
BackgroundImageSlide(v-else)
  div(class='flex h-full')
    img(
      v-if='headingType === "image"'
      class='titleLogo'
      :src='heading'
    )
    h2(v-else class='titleLogo') {{ heading }}
</template>

<script>
import VideoSlide from '@/components/base/VideoSlide.vue'
import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import TitleCard from '@/components/base/TitleCard.vue'
import themed from '@/theme/mixin'

const defaultLogo = '/images/hackparty_logo.png'

export default {
  name: 'GameTitle',
  components: {
    VideoSlide,
    BackgroundImageSlide,
    TitleCard
  },
  mixins: [themed],
  props: {
    background: {
      type: String,
      default: '/video/intro.mp4'
    },
    backgroundType: {
      type: String,
      default: 'video'
    },
    heading: {
      type: String,
      default: defaultLogo
    },
    headingType: {
      type: String,
      default: 'image'
    }
  },
  data () {
    return {
      defaultLogo
    }
  }
}
</script>

<style lang="scss" scoped>
@reference '../../assets/styles/tailwind.css';
.titleLogo {
  @apply flex grow-0;
}
</style>
