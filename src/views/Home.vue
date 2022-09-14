<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/corpse_bride_cut.mp4')
      h1 Exquisite Corpse?
    BackgroundImageSlide(background='/images/exquisite_corpse.png')
      h1 Collaborative Creation
    BackgroundImageSlide(background='/images/diffusion_release.png')
      h1 Stable Diffusion
    Slide(class='darkgray')
      .flex.flex-col.w-full.h-screen.justify-center.items-center
        img(src='/images/bart_simpson_wearing_a_batman_suit.png')
        h2.text-white Bart Simpson wearing a batman suit
    Slide(class='darkgray')
      .flex.flex-col.w-full.h-screen.justify-center.items-center
        img(src='/images/bart_simpon_wearing_a_bat_man_suit_while_riding_an_elephant_in_a_parade.png')
        h2.text-white Bart Simpson wearing a batman suit while riding an elephant in a parade
    Slide(class='darkgray')
      .flex.flex-col.w-full.h-screen.justify-center.items-center
        img(src='/images/bart_simpson_wearing_a_batman_suit_riding_an_elephant_while_a_helicopter.png')
        h2.text-white Bart Simpson wearing a batman suit while riding an elephant while a
          | while a helicopter rains french fries and cole slaw
    VideoSlide(background='/video/corpse_bride_cut.mp4')
      h2.title Diffsquisite Corpse
    Slide
      h2.fragment You will provide a prompt in poker order
      h2.fragment You will receive a word or phrase to incorporate in your prompt
      h2.fragment For this word/phrase you can pick between a noun or verb
      h2.fragment Each round will have a theme
      h2.fragment The corpse will grow with each player
      h2.fragment Funniest image wins!
      h1 Game Play
    PlayerBoard
    DiffsquisiteCorpseRound(
      :hints='maga_hints'
    )
    DiffsquisiteCorpseRound(
      :hints='maga_hints'
    )
    DiffsquisiteCorpseRound(
      :hints='maga_hints'
    )
    DiffsquisiteCorpseRound(
      :hints='maga_hints'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/queen_hoon.mp4')
    CelebrityGuess(
      celebrity="Total presidencies?"
      image='/images/queen.png'
      :price='17'
      :prize='3'
      question='How many US presidencies did Queen Elizabeth live through?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/voldemort.mp4'
      :muted='false'
    )
    PlayerBoard
    DiffsquisiteCorpseRound(
      :hints='trek_hints'
      :prize='2'
    )
    DiffsquisiteCorpseRound(
      :hints='trek_hints'
      :prize='2'
    )
    DiffsquisiteCorpseRound(
      :hints='trek_hints'
      :prize='2'
    )
    DiffsquisiteCorpseRound(
      :hints='trek_hints'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/queen_hoon.mp4')
    CelebrityGuess(
      celebrity="Total Commonwealth states?"
      image='/images/queen.png'
      :price='32'
      :prize='5'
      question='How many states did Queen Elizabeth serve as head of state?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/still_alive.mp4'
      :muted='false'
    )
    PlayerBoard
    DiffsquisiteCorpseRound(
      :hints='service_hints'
      :prize='3'
    )
    DiffsquisiteCorpseRound(
      :hints='service_hints'
      :prize='3'
    )
    DiffsquisiteCorpseRound(
      :hints='service_hints'
      :prize='3'
    )
    DiffsquisiteCorpseRound(
      :hints='service_hints'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/queen_hoon.mp4')
    CelebrityGuess(
      celebrity="Record reign length?"
      image='/images/queen.png'
      :price='7'
      :prize='10'
      question='How much longer did Queen Elizabeth reign than the next longest monarch?'
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

import DiffsquisiteCorpseRound from '@/components/DiffsquisiteCorpse/DiffsquisiteCorpseRound.vue'

import CelebrityGuess from '@/components/CameoPriceIsRight/CelebrityGuess.vue'

import axios from 'axios'

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
    DiffsquisiteCorpseRound,
    CelebrityGuess
  },
  data () {
    return {
      maga_hints: null,
      trek_hints: null,
      service_hints: null
    }
  },
  async mounted () {
    this.maga_hints = await axios.get('/data/maga.json').then(res => { return res.json() })
    this.trek_hints = await axios.get('/data/trek.json').then(res => { return res.json() })
    this.service_hints = await axios.get('/data/service.json').then(res => { return res.json() })
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Alex+Brush&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Alex Brush', cursive !important;
  @apply mt-64 text-9xl text-white #{!important};
}
html {
  font-size: 36px;
}
</style>
