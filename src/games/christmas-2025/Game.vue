<template lang="pug">
Reveal
  .slides
    GameTitle
    Slide(class='darkgray')
      h2.text-white What is AI?
    Slide(class='darkgray')
      .h-fit
        img(src='/games/christmas-2025/images/real_cover.png')
    Slide(class='darkgray')
      .h-fit
        img(src='/games/christmas-2025/images/fake_cover.jpeg')
    BackgroundImageSlide(background='/games/christmas-2025/images/podium.png')
    VideoSlide(
      background='/games/christmas-2025/video/chokeslam.mp4'
      :muted='false'
    )
    BackgroundImageSlide(background='/games/christmas-2025/images/podium.png')
      .title Real or Slop?
    Slide
      h2.fragment Solo
      h2.fragment Presented with an image
      h2.fragment is it slop?
      h2.fragment or is it real?
      h2.fragment Contrarian bonus is in effect
      h1 Game Play
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/games/christmas-2025/images/tyrell_p41.webp')
    ItemGuess(
      headerImageClass='m-0 clear-reveal object-cover'
      :items='car_choices'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/christmas-2025/images/tyrell_p41.webp'
      question='Is this car real or slop?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/games/christmas-2025/images/mclaren.jpeg')
    ItemGuess(
      headerImageClass='m-0 clear-reveal object-cover'
      :items='car_choices'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/christmas-2025/images/mclaren.jpeg'
      question='Is this car real or slop?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/games/christmas-2025/images/brabham_bt64b.webp')
    ItemGuess(
      headerImageClass='m-0 clear-reveal object-cover'
      :items='car_choices'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/christmas-2025/images/brabham_bt64b.webp'
      question='Is this car real or slop?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/games/christmas-2025/images/march_711.webp')
    ItemGuess(
      headerImageClass='m-0 clear-reveal object-cover'
      :items='car_choices'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/christmas-2025/images/march_711.webp'
      question='Is this car real or slop?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/games/christmas-2025/images/ferrari.jpeg')
    ItemGuess(
      headerImageClass='m-0 clear-reveal object-cover'
      :items='car_choices'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/christmas-2025/images/ferrari.jpeg'
      question='Is this car real or slop?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-full.flex.items-center.justify-center
          img.max-h-full.max-w-full.object-contain(src='/games/christmas-2025/images/tyrell_x_wing.jpg')
    ItemGuess(
      headerImageClass='m-0 clear-reveal object-cover'
      :items='car_choices'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/christmas-2025/images/tyrell_x_wing.jpg'
      question='Is this car real or slop?'
    )
    VideoSlide(background='/games/christmas-2025/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='darkgray')
      h2.text-white FIND THE BLOBS OUTSIDE
    Scoreboard
    PlayerBoard
    VideoSlide(
      background='/games/christmas-2025/video/first_break.mp4'
      :muted='false'
    )
    PlayerBoard
    AudioChoiceRound(
      headerImageClass='object-cover'
      src='/games/christmas-2025/sounds/olaf.mp3'
      :items='car_choices'
      headerImage='/games/christmas-2025/images/olaf.avif'
      :winnerIndex='1'
      :prize='2'
    )
    AudioChoiceRound(
      headerImageClass='object-cover'
      src='/games/christmas-2025/sounds/kpop.mp3'
      :items='car_choices'
      headerImage='/games/christmas-2025/images/kpop.jpg'
      :winnerIndex='0'
      :prize='2'
    )
    AudioChoiceRound(
      headerImageClass='object-cover'
      src='/games/christmas-2025/sounds/mcconaughey.mp3'
      :items='car_choices'
      headerImage='/games/christmas-2025/images/mcconaughey.webp'
      :winnerIndex='1'
      :prize='2'
    )
    AudioChoiceRound(
      headerImageClass='object-cover'
      src='/games/christmas-2025/sounds/attenborough.mp3'
      :items='car_choices'
      headerImage='/games/christmas-2025/images/attenborough.webp'
      :winnerIndex='1'
      :prize='2'
    )
    AudioChoiceRound(
      headerImageClass='object-cover'
      src='/games/christmas-2025/sounds/yukon.mp3'
      :items='car_choices'
      headerImage='/games/christmas-2025/images/yukon.png'
      :winnerIndex='0'
      :prize='2'
    )
    AudioChoiceRound(
      headerImageClass='object-cover'
      src='/games/christmas-2025/sounds/montoya.mp3'
      :items='car_choices'
      headerImage='/games/christmas-2025/images/montoya.webp'
      :winnerIndex='0'
      :prize='2'
    )
    VideoSlide(background='/games/christmas-2025/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='darkgray')
      h2.text-white TEACH A GROWNUP TO DOUGIE 
    Scoreboard(:prize='2')
    PlayerBoard
    VideoSlide(
      background='/games/christmas-2025/video/second_break.mp4'
      :muted='false'
    )
    PlayerBoard
    VideoSlide(
      background='/games/christmas-2025/video/volvo.webm'
      :muted='false'
    )
    ItemGuess(
      headerImageClass='m-0 clear-reveal object-cover'
      :items='car_choices'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/christmas-2025/images/volvo.png'
      question='Is this commercial real or slop?'
      :prize='3'
    )
    VideoSlide(
      background='/games/christmas-2025/video/kalshi.webm'
      :muted='false'
    )
    ItemGuess(
      headerImageClass='m-0 clear-reveal object-cover'
      :items='car_choices'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/christmas-2025/images/kalshi.jpg'
      question='Is this commercial real or slop?'
      :prize='3'
    )
    VideoSlide(
      background='/games/christmas-2025/video/toysrus.webm'
      :muted='false'
    )
    ItemGuess(
      headerImageClass='m-0 clear-reveal object-cover'
      :items='car_choices'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/christmas-2025/images/toysrus.jpg'
      question='Is this commercial real or slop?'
      :prize='3'
    )
    VideoSlide(
      background='/games/christmas-2025/video/intermarche.webm'
      :muted='false'
    )
    ItemGuess(
      headerImageClass='m-0 clear-reveal object-cover'
      :items='car_choices'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/christmas-2025/images/intermarche.jpg'
      question='Is this commercial real or slop?'
      :prize='3'
    )
    VideoSlide(
      background='/games/christmas-2025/video/porsche.webm'
      :muted='false'
    )
    ItemGuess(
      headerImageClass='m-0 clear-reveal object-cover'
      :items='car_choices'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/christmas-2025/images/porsche.jpg'
      question='Is this commercial real or slop?'
      :prize='3'
    )
    VideoSlide(
      background='/games/christmas-2025/video/tide.mkv'
      :muted='false'
    )
    ItemGuess(
      headerImageClass='m-0 clear-reveal object-cover'
      :items='car_choices'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/christmas-2025/images/tide.jpg'
      question='Is this commercial real or slop?'
      :prize='3'
    )
    VideoSlide(background='/games/christmas-2025/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='darkgray')
      h2.text-white Find the Jesus figurines inside! 
    Scoreboard(:prize='5')
    PlayerBoard
    VideoSlide(
      background='/games/christmas-2025/video/third_break.mp4'
      :muted='false'
    )
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

import StringGuess from '@/components/base/StringGuess.vue'

import Scoreboard from '@/components/Scoreboard/Scoreboard.vue'

/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Christmas2025',
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
    AudioChoiceRound,
    StringGuess,
    Scoreboard
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
url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=IBM+Plex+Mono&family=Fugaz+One&family=Henny+Penny&display=swap');

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
  font-family: 'Henny Penny', cursive !important;
  @apply mt-72 text-9xl text-white uppercase tracking-tight text-shadow shadow-black #{!important};
}

html {
  font-size: 36px;
}
</style>
