<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/famous_dead_writers.webp')
    Slide
      h2.fragment Solo
      h2.fragment Interact with a GPT trained to emulate a famous dead writer
      h2.fragment Ask questions of the writer at will
      h2.fragment First to guess by name wins
      h2.fragment We'll adjust difficulty each round
      h1 Game Play
    PlayerBoard
    Scoreboard
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    CameoPriceIsRightRound(
      v-for='figure in actionFigures.slice(0, 3)'
      :key='figure.name'
      :celebrity='figure.name'
      :hint1='figure.year.toString()'
      :hint2='figure.name'
      hint3=''
      video=''
      :image='figure.image'
      :price='figure.price'
      question='How much did this action figure fetch?'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(
      background='/video/action_league.mp4'
      :muted='false'
    )
    PlayerBoard
    Scoreboard(:prize='2')
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    CameoPriceIsRightRound(
      v-for='figure in actionFigures.slice(3, 6)'
      :key='figure.name'
      :celebrity='figure.name'
      :hint1='figure.year.toString()'
      :hint2='figure.name'
      hint3=''
      video=''
      :image='figure.image'
      :price='figure.price'
      question='How much did this action figure fetch?'
      :prize='5'
    )
    PlayerBoard
    VideoSlide(
      background='/video/prometheus_and_bob.mp4'
      :muted='false'
    )
    PlayerBoard
    Scoreboard(:prize='3')
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    CameoPriceIsRightRound(
      v-for='figure in actionFigures.slice(6, 10)'
      :key='figure.name'
      :celebrity='figure.name'
      :hint1='figure.year.toString()'
      :hint2='figure.name'
      hint3=''
      video=''
      :image='figure.image'
      :price='figure.price'
      question='How much did this action figure fetch?'
      :prize='10'
    )
    PlayerBoard
</template>

<script>
import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import Scoreboard from '@/components/Scoreboard/Scoreboard.vue'

import CameoPriceIsRightRound from '@/components/CameoPriceIsRight/CameoPriceIsRightRound.vue'

import actionFigures from '@/assets/most_expensive_action_figures.json'

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
    Scoreboard,
    CameoPriceIsRightRound
  },
  data () {
    return {
      actionFigures: actionFigures
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
