<template lang='pug'>
celebrity-intro(:celebrity='celebrity' :hint1='hint1' :hint2='hint2' :hint3='hint3' :image='image')
slot(name='post-intro')
celebrity-video(
  v-if='video.length > 0'
  :celebrity='celebrity'
  :video='video'
)
slot(name='post-video')
celebrity-guess(
  :celebrity='celebrity'
  :image='image'
  :price='price'
  :prize='prize'
  :question='question'
  :denomination='denomination'
)
</template>

<script>
import CelebrityIntro from './CelebrityIntro.vue'
import CelebrityVideo from './CelebrityVideo.vue'
import CelebrityGuess from './CelebrityGuess.vue'

export default {
  name: 'CameoPriceIsRightRound',
  components: {
    CelebrityIntro,
    CelebrityVideo,
    CelebrityGuess
  },
  props: {
    celebrity: {
      type: String,
      default: undefined
    },
    hint1: {
      type: String,
      default: undefined
    },
    hint2: {
      type: String,
      default: undefined
    },
    hint3: {
      type: String,
      default: undefined
    },
    video: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: undefined
    },
    price: {
      type: Number,
      default: undefined
    },
    prize: {
      type: Number,
      default: undefined
    },
    denomination: {
      type: String,
      default: '$'
    },
    question: {
      type: String,
      default: 'What is the rate on Cameo?'
    }
  }
}
</script>
