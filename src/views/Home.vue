<template lang="pug">
Reveal
  .slides
    Title
    PlayerBoard
      ActionButton(label='Charge Players' @clicked='chargePlayers')
    VideoWagerRound(
      :items='items',
      video='/video/boat_out_of_water.mp4',
      :limit='5',
      :winnerIndex='1'
    )
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useGameStore } from '@/store'

import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import VideoWagerRound from '@/components/Wager/VideoWagerRound.vue'

export default {
  name: 'Home',
  components: {
    PlayerBoard,
    Title,
    Slide,
    Reveal,
    BackgroundImageSlide,
    VideoSlide,
    ActionButton,
    GameVideo,
    VideoWagerRound
  },
  computed: {
    ...mapState(useGameStore, ['game'])
  },
  data () {
    return {
      items: [
        { name: 'Win', emoji: '👍️' },
        { name: 'Fail', emoji: '👎️' }
      ]
    }
  },
  methods: {
    chargePlayers () {
      this.game.players.forEach((player) => {
        this.increasePlayerScore(player.name, 1000)
      })
    },
    ...mapActions(useGameStore, ['increasePlayerScore'])
  }
}
</script>

<style lang='scss'>
html {
  font-size: 36px;
}
</style>
