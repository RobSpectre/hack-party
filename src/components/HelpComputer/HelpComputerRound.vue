<template lang="pug">
ImageIntro(
  :image='image'
  :title='title'
)
GenerateImage(
  v-for='player in getPlayersFromButton'
  :comparisonImage='image'
  :playerName='player.name'
  @imageGenerated='handleImageGenerated'
)
ChooseWinner(
  :images='images'
  :title='title'
  :prize='prize'
)
</template>

<script>
import ImageIntro from '@/components/HelpComputer/ImageIntro.vue'
import GenerateImage from '@/components/HelpComputer/GenerateImage.vue'
import ChooseWinner from '@/components/HelpComputer/ChooseWinner.vue'

import { mapGetters } from 'pinia'
import { useGameStore } from '@/store'

export default {
  name: 'HelpComputerRound',
  components: {
    GenerateImage,
    ImageIntro,
    ChooseWinner
  },
  props: {
    image: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    prize: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      images: [],
      winner: null,
      completed: false
    }
  },
  computed: {
    ...mapGetters(useGameStore, ['getPlayersFromButton'])
  },
  methods: {
    handleImageGenerated (event) {
      this.images.push(event)
    }
  }
}
</script>
