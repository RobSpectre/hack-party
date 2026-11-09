<template lang='pug'>
celebrity-intro(:celebrity='celebrity' :hint1='hint1' :hint2='hint2' :hint3='hint3' :image='image')
  //- A game can pass hint1-3 slots to style a hint, e.g. highlight a number.
  template(v-for='name in hintSlots' :key='name' #[name])
    slot(:name='name')
slot(name='post-intro')
game-you-tube(
  v-if='youtube'
  :video='youtube'
  :title='youtubeTitle || celebrity'
)
celebrity-video(
  v-else-if='video.length > 0'
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
  :suffix='suffix'
  :separators='separators'
)
</template>

<script>
import CelebrityIntro from './CelebrityIntro.vue'
import CelebrityVideo from './CelebrityVideo.vue'
import CelebrityGuess from './CelebrityGuess.vue'
import GameYouTube from '@/components/base/GameYouTube.vue'

export default {
  name: 'CameoPriceIsRightRound',
  components: {
    CelebrityIntro,
    CelebrityVideo,
    CelebrityGuess,
    GameYouTube
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
    // A YouTube video id to play instead of `video`.
    youtube: {
      type: String,
      default: ''
    },
    youtubeTitle: {
      type: String,
      default: undefined
    },
    denomination: {
      type: String,
      default: '$'
    },
    // Shown after the answer and each guess, e.g. ' votes'.
    suffix: {
      type: String,
      default: ''
    },
    // Show numbers with thousands separators (12,345).
    separators: {
      type: Boolean,
      default: false
    },
    question: {
      type: String,
      default: 'What is the rate on Cameo?'
    }
  },
  computed: {
    hintSlots () {
      return ['hint1', 'hint2', 'hint3'].filter(name => this.$slots[name])
    }
  }
}
</script>
