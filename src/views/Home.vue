<template lang="pug">
Reveal
  .slides
    GameTitle
    PlayerBoard
    BackgroundImageSlide(background='/images/podium.png')
      .monotitle Real or Slop?
    VideoSlide(
      background='/video/chokeslam.mp4'
      :muted='false'
    )
    Slide
      h2.fragment Solo
      h2.fragment Presented with an image
      h2.fragment is it slop?
      h2.fragment or is it real?
      h2.fragment Contrarians bonus in effect
      h1 Game Play
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/images/tyrell_p41.webp')
    ItemGuess(
      :items='car_choices'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/tyrell_p41.webp'
      question='Is this car real or slop?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/images/mclaren.jpeg')
    ItemGuess(
      :items='car_choices'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/mclaren.jpeg'
      question='Is this car real or slop?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/images/brabham_bt64b.webp')
    ItemGuess(
      :items='car_choices'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/brabham_bt64b.webp'
      question='Is this car real or slop?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/images/march_711.webp')
    ItemGuess(
      :items='car_choices'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/march_711.webp'
      question='Is this car real or slop?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/images/ferrari.jpeg')
    ItemGuess(
      :items='car_choices'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/ferrari.jpeg'
      question='Is this car real or slop?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/images/tyrell_x_wing.jpg')
    ItemGuess(
      :items='car_choices'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/tyrell_x_wing.jpg'
      question='Is this car real or slop?'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    LightsOutRound(isDemo='true')
    PlayerBoard
    VideoSlide(
      background='/video/hoonitron.webm'
      :muted='false'
    )
    PlayerBoard
    BackgroundImageSlide(background='/images/yuki.png')
      .title Guess That Scream
    VideoSlide(
      background='/video/yuki_rage.mp4'
      :muted='false'
    )
    Slide
      h2.fragment Solo
      h2.fragment Presented with a radio message
      h2.fragment Guess the driver! 
      h2.fragment Points are 2x
      h1 Game Play
    AudioInputRound(
      src='/sounds/daniel.wav'
      headerImage='/images/guess_the_scream.jpeg'
      correctAnswer='Ricciardo'
      :prize='2'
    )
    AudioInputRound(
      src='/sounds/pierre.wav'
      headerImage='/images/guess_the_scream.jpeg'
      correctAnswer='Gasly'
      :prize='2'
    )
    AudioInputRound(
      src='/sounds/charles.wav'
      headerImage='/images/guess_the_scream.jpeg'
      correctAnswer='Leclerc'
      :prize='2'
    )
    AudioInputRound(
      src='/sounds/nico.wav'
      headerImage='/images/guess_the_scream.jpeg'
      correctAnswer='Rosberg'
      :prize='2'
    )
    AudioInputRound(
      src='/sounds/valterri.wav'
      headerImage='/images/guess_the_scream.jpeg'
      correctAnswer='Bottas'
      :prize='2'
    )
    AudioInputRound(
      src='/sounds/vettel.wav'
      headerImage='/images/guess_the_scream.jpeg'
      correctAnswer='Vettel'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    PlayerBoard
    VideoSlide(
      background='/video/battlebots.webm'
      :muted='false'
    )
    PlayerBoard
    BackgroundImageSlide(background='/images/guess_that_track.jpg')
      .title What's that track?
    VideoSlide(
      background='/video/track.mp4'
      :muted='false'
    )
    Slide
      h2.fragment Solo
      h2.fragment Presented with a track layout
      h2.fragment Name the track!
      h2.fragment Points are 3x!
      h1 Game Play
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/images/vegas.png')
    StringGuess(
      answer='Vegas'
      question='What is this track?'
      headerImage='/images/vegas.png'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/images/monza.jpg')
    StringGuess(
      answer='Monza'
      question='What is this track?'
      headerImage='/images/monza.jpg'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/images/redbullring.jpg')
    StringGuess(
      answer='Red Bull Ring'
      question='What is this track?'
      headerImage='/images/redbullring.jpg'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/images/spa.jpg')
    StringGuess(
      answer='Spa'
      question='What is this track?'
      headerImage='/images/spa.jpg'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/images/monaco.png')
    StringGuess(
      answer='Monaco'
      question='What is this track?'
      headerImage='/images/monaco.png'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/images/baku.jpg')
    StringGuess(
      answer='Baku'
      question='What is this track?'
      headerImage='/images/baku.jpg'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    PlayerBoard
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

import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

import AudioChoiceRound from '@/components/AudioChoice/AudioChoiceRound.vue'
import AudioInputRound from '@/components/AudioInput/AudioInputRound.vue'

import StringGuess from '@/components/base/StringGuess.vue'

/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Home',
  components: {
    PlayerBoard,
    GameTitle,
    Slide,
    Reveal,
    BackgroundImageSlide,
    VideoSlide,
    ActionButton,
    GameVideo,
    ItemGuess,
    GameContentWithSidebar,
    AudioInputRound,
    StringGuess
  },
  data () {
    return {
      car_choices: [
        { name: 'Real', emoji: '🏎️', value: '' },
        { name: 'Slop', emoji: '🪣', value: '' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import
url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=IBM+Plex+Mono&family=Fugaz+One&display=swap');

/* Emoji rendering improvements */
button .emoji,
.actionButton .emoji,
[data-emoji] {
  font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif !important;
  font-size: 1.3em;
  vertical-align: middle;
  margin: 0 0.2em;
}

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white uppercase tracking-tight text-shadow shadow-black #{!important};
}

.monotitle {
  font-family: 'IBM Plex Mono', monospace !important;
  @apply mt-72 text-9xl text-white uppercase tracking-tight text-shadow shadow-black #{!important};
}

.title {
  font-family: 'Fugaz One', monospace !important;
  @apply mt-72 text-9xl text-white uppercase tracking-tight text-shadow shadow-black #{!important};
}

html {
  font-size: 36px;
}
</style>
