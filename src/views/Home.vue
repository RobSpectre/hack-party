<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/ricky.png')
    VideoSlide(background='/video/cake_trailer.mp4')
    VideoSlide(background='/video/cake_trailer.mp4')
      h2.title Cake or Fake?
    Slide(class='darkgray')
      h2.text-white.fragment Solo
      h2.text-white.fragment Presented with a video
      h2.text-white.fragment Guess if it is cake or not
      h2.text-white.fragment Contrarian bonus!
      h1 Game Play
    PlayerBoard
    VideoChoiceRound(
      video='/video/cake_1_0.mp4'
      :items='items'
      :limit='3'
      :winnerIndex='0'
    )
    VideoChoiceRound(
      video='/video/cake_10_0.mp4'
      :items='items'
      :limit='2'
      :winnerIndex='0'
    )
    VideoChoiceRound(
      video='/video/cake_12_1.mp4'
      :items='items'
      :limit='2'
      :winnerIndex='1'
    )
    VideoChoiceRound(
      video='/video/cake_11_0.mp4'
      :items='items'
      :limit='2'
      :winnerIndex='0'
    )
    VideoChoiceRound(
      video='/video/cake_13_1.mp4'
      :items='items'
      :limit='2'
      :winnerIndex='1'
    )
    VideoChoiceRound(
      video='/video/cake_2_0.mp4'
      :items='items'
      :limit='2'
      :winnerIndex='0'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/oligarchs.mp4')
      h2.spooky Unused Explanations for an Oligarch's Death
    Slide(class='darkgray')
      h2.text-white.fragment Three mysterious explanations for a Russian oligarch's demise
      h2.text-white.fragment Two are real - one are fake
      h2.text-white.fragment Spot the fake for points
      h2.text-white.fragment Contrarian bonus!
      h1 Game Play
    ItemGuess(
      :items='oligarch_one'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/oligarchs.png'
      question='Which is not a way an oligarch mysteriously died?'
      :prize='3'
      :fragmentItemReveal='true'
    )
    PlayerBoard
    VideoSlide(
      background='/video/ultimate.mp4'
      :muted='false'
    )
    PlayerBoard
    VideoChoiceRound(
      video='/video/cake_14_1.mp4'
      :items='items'
      :limit='1'
      :winnerIndex='1'
      :prize='2'
    )
    VideoChoiceRound(
      video='/video/cake_15_0.mp4'
      :items='items'
      :limit='1'
      :winnerIndex='0'
      :prize='2'
    )
    VideoChoiceRound(
      video='/video/cake_16_1.mp4'
      :items='items'
      :limit='1'
      :winnerIndex='1'
      :prize='2'
    )
    VideoChoiceRound(
      video='/video/cake_8_0.mp4'
      :items='items'
      :limit='1'
      :winnerIndex='0'
      :prize='2'
    )
    VideoChoiceRound(
      video='/video/cake_3_1.mp4'
      :items='items'
      :limit='2'
      :winnerIndex='1'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/oligarchs.mp4')
      h2.spooky Unused Explanations for an Oligarch's Death
    ItemGuess(
      :items='oligarch_two'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/oligarchs.png'
      question='Which is not a way an oligarch mysteriously died?'
      :prize='5'
      :fragmentItemReveal='true'
    )
    PlayerBoard
    VideoSlide(
      background='/video/helicopter.mp4'
      :muted='false'
    )
    PlayerBoard
    VideoChoiceRound(
      video='/video/cake_4_0.mp4'
      :items='items'
      :limit='2'
      :winnerIndex='0'
      :prize='3'
    )
    VideoChoiceRound(
      video='/video/cake_5_1.mp4'
      :items='items'
      :limit='2'
      :winnerIndex='1'
      :prize='3'
    )
    VideoChoiceRound(
      video='/video/cake_6_0.mp4'
      :items='items'
      :limit='2'
      :winnerIndex='0'
      :prize='3'
    )
    VideoChoiceRound(
      video='/video/cake_7_0.mp4'
      :items='items'
      :limit='1'
      :winnerIndex='0'
      :prize='3'
    )
    VideoChoiceRound(
      video='/video/cake_17_1.mp4'
      :items='items'
      :limit='2'
      :winnerIndex='1'
      :prize='3'
    )
    VideoChoiceRound(
      video='/video/cake_9_0.mp4'
      :items='items'
      :limit='3'
      :winnerIndex='0'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/oligarchs.mp4')
      h2.spooky Unused Explanations for an Oligarch's Death
    ItemGuess(
      :items='oligarch_three'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/oligarchs.png'
      question='Which is not a way an oligarch mysteriously died?'
      :prize='10'
      :fragmentItemReveal='true'
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

import VideoChoiceRound from '@/components/VideoChoice/VideoChoiceRound.vue'

import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'

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
    VideoChoiceRound,
    ItemGuess
  },
  data () {
    return {
      items: [
        { name: 'Cake', emoji: '🍰️', value: ' the video' },
        { name: 'Not Cake', emoji: '🪨️', value: ' the video' }
      ],
      oligarch_one: [
        { name: 'Heart attack', emoji: '💓️', value: ' the excuse' },
        { name: 'Hung by own robe off a handrail', emoji: '🪢️', value: ' the excuse' },
        { name: 'Shot self multiple times in head', emoji: '🔫️', value: ' the excuse' }
      ],
      oligarch_two: [
        { name: 'Suffocation from stroke', emoji: '🏌️', value: ' the excuse' },
        { name: 'Fell from boat', emoji: '🚎️', value: ' the excuse' },
        { name: 'Stepped in front of bus', emoji: '🚎️', value: ' the excuse' }
      ],
      oligarch_three: [
        { name: 'Fell off a cliff', emoji: '🥾️', value: ' the excuse' },
        { name: 'Private plane crash', emoji: '🛩️', value: ' the excuse' },
        { name: 'Toad poison from shamanic ritual', emoji: '🐸️', value: ' the excuse' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Shrikhand&family=Creepster&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Shrikhand', cursive !important;
  @apply mt-64 text-9xl text-white #{!important};
}

.spooky {
  font-family: 'Creepster', cursive !important;
  @apply mt-32 text-9xl text-red-600 #{!important};
}

html {
  font-size: 36px;
}
</style>
