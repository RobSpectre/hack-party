<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(
      background='/video/wordle_tutorial_cut.mp4'
    )
      h2.title I Ripped Off Wordle
    Slide
      h2.fragment Solo
      h2.fragment Poker progression
      h2.fragment Guess a word
      h2.fragment 1 point for present letter
      h2.fragment 2 points for correct letter
      h2.fragment Bonus points for correct guess
      h1 Game Play
    VideoSlide(background='/video/bands.mp4')
    Slide
      h2 Solo
      h2 Poker progression
      h2 Guess a word
      h2 1 point for present letter
      h2 2 points for correct letter
      h2 Bonus points for correct guess
      h2.fragment All band names
      h2.fragment No "The" and no whitespace
      h1 Game Play
    PlayerBoard
    WordleRipoffRound(
      answer='oasis'
    )
    WordleRipoffRound(
      answer='queen'
    )
    WordleRipoffRound(
      answer='kinks'
    )
    WordleRipoffRound(
      answer='spoon'
    )
    WordleRipoffRound(
      answer='cream'
    )
    WordleRipoffRound(
      answer='vines'
    )
    PlayerBoard
    VideoSlide(
      background='/video/scott_mass_effect.mp4'
      :muted='false'
    )
    WordleRipoffRound(
      answer='clash'
      :prize='2'
    )
    WordleRipoffRound(
      answer='doors'
      :prize='2'
    )
    WordleRipoffRound(
      answer='jewel'
      :prize='2'
    )
    WordleRipoffRound(
      answer='wings'
      :prize='2'
    )
    WordleRipoffRound(
      answer='slits'
      :prize='2'
    )
    WordleRipoffRound(
      answer='adele'
      :prize='2'
    )
    PlayerBoard
    VideoSlide(
      background='/video/peaches.mp4'
      :muted='false'
    )
    PlayerBoard
    WordleRipoffRound(
      answer='byrds'
      :prize='3'
    )
    WordleRipoffRound(
      answer='mrbig'
      :prize='3'
    )
    WordleRipoffRound(
      answer='keane'
      :prize='3'
    )
    WordleRipoffRound(
      answer='verve'
      :prize='3'
    )
    WordleRipoffRound(
      answer='zztop'
      :prize='3'
    )
    WordleRipoffRound(
      answer='wilco'
      :prize='3'
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

import WordleRipoffRound from '@/components/WordleRipoff/WordleRipoffRound.vue'

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
    WordleRipoffRound
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@700&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Roboto', cursive !important;
  @apply mt-64 text-9xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
