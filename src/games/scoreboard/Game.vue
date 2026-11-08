<template lang="pug">
Reveal
  .slides
    GameTitle
    PlayerBoard
    Scoreboard(
      question='Who answered the question correctly?'
      :prize='1'
    )
</template>

<script>
import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import GameTitle from '@/components/base/GameTitle.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import Scoreboard from '@/components/Scoreboard/Scoreboard.vue'

export default {
  name: 'ScoreboardGame',
  components: {
    PlayerBoard,
    GameTitle,
    Slide,
    Reveal,
    BackgroundImageSlide,
    VideoSlide,
    ActionButton,
    GameVideo,
    Scoreboard
  }
}
</script>

<style lang='scss'>
html {
  font-size: 36px;
}
</style>
