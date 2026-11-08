<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/games/wordle-ripoff/video/goodfellas_cut.mp4')
    VideoSlide(
      background='/games/wordle-ripoff/video/wordle_tutorial_cut.mp4'
    )
      h2.title I Ripped Off Wordle
    VideoSlide(background='/games/wordle-ripoff/video/wordle_tutorial_cut.mp4')
    Slide
      h2.fragment Solo
      h2.fragment Poker progression
      h2.fragment Guess a word
      h2.fragment 1 point for present letter
      h2.fragment 2 points for correct letter
      h2.fragment Bonus points for correct guess
      h1 Game Play
    PlayerBoard
    WordleRipoffRound
    WordleRipoffRound
    WordleRipoffRound
    WordleRipoffRound
    WordleRipoffRound
    WordleRipoffRound
    VideoSlide(background='/games/wordle-ripoff/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/games/wordle-ripoff/video/late_stage_capitalism_cut.mp4')
      h2.handwriting(style='margin-top: 24 rem;') Winners of Late Stage Capitalism
    BackgroundImageSlide(background='/games/wordle-ripoff/images/housing_market.png')
    ItemGuess(
      :items='homes'
      :winnerIndex='2'
      denomination=''
      headerImage='/games/wordle-ripoff/images/housing_header.png'
      question='Who won the housing boom from 2015?'
      :prize='10'
      :fragmentItemReveal='true'
    )
    PlayerBoard
    VideoSlide(
      background='/games/wordle-ripoff/video/surfin_Bird.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Each letter is 2x!
    WordleRipoffRound(
      :prize='2'
    )
    WordleRipoffRound(
      :prize='2'
    )
    WordleRipoffRound(
      :prize='2'
    )
    WordleRipoffRound(
      :prize='2'
    )
    WordleRipoffRound(
      :prize='2'
    )
    WordleRipoffRound(
      :prize='2'
    )
    VideoSlide(background='/games/wordle-ripoff/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/games/wordle-ripoff/video/late_stage_capitalism_cut.mp4')
      h2.handwriting(style='margin-top: 24 rem;') Winners of Late Stage Capitalism
    ItemGuess(
      :items='education'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/wordle-ripoff/images/education_header.png'
      question='Who has the higher average salary in NYC?'
      :prize='20'
      :fragmentItemReveal='true'
    )
    PlayerBoard
    VideoSlide(
      background='/games/wordle-ripoff/video/wordle_sketch.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Each letter is 3x!
    WordleRipoffRound(
      :prize='3'
    )
    WordleRipoffRound(
      :prize='3'
    )
    WordleRipoffRound(
      :prize='3'
    )
    WordleRipoffRound(
      :prize='3'
    )
    WordleRipoffRound(
      :prize='3'
    )
    WordleRipoffRound(
      :prize='3'
    )
    VideoSlide(background='/games/wordle-ripoff/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/games/wordle-ripoff/video/late_stage_capitalism_cut.mp4')
      h2.handwriting(style='margin-top: 24 rem;') Winners of Late Stage Capitalism
    ItemGuess(
      :items='finance'
      :winnerIndex='2'
      denomination=''
      headerImage='/games/wordle-ripoff/images/finance_header.png'
      question='Which is the bigger market in the US?'
      :prize='30'
      :fragmentItemReveal='true'
    )
    PlayerBoard
</template>

<script>
import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/GameTitle.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import WordleRipoffRound from '@/components/WordleRipoff/WordleRipoffRound.vue'

import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'

export default {
  name: 'WordleRipoffGame',
  components: {
    PlayerBoard,
    Title,
    Slide,
    Reveal,
    BackgroundImageSlide,
    VideoSlide,
    ActionButton,
    GameVideo,
    WordleRipoffRound,
    ItemGuess
  },
  data () {
    return {
      education: [
        { name: 'Juris doctorate', emoji: '⚖️️' },
        { name: 'MAS-II', emoji: '⚖️️' },
        { name: 'Doctor of Dental Medicine', emoji: '😁️', value: ' the answer' },
        { name: 'Skip', emoji: '💩️' }
      ],
      homes: [
        { name: 'Homeowner in Canada', emoji: '🏔️', value: ' the answer' },
        { name: 'Homeowner in US', emoji: '🏘️' },
        { name: 'Homeowner in Ireland', emoji: '☘️' },
        { name: 'Skip', emoji: '💩️' }
      ],
      finance: [
        { name: 'Debt Collection', emoji: '🏦️' },
        { name: 'Payday Loans', emoji: '💵️' },
        { name: 'Subprime Auto Loans', emoji: '🏎️', value: ' the answer' },
        { name: 'Skip', emoji: '💩️' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Berkshire+Swash&family=Roboto:wght@700&display=swap');
.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Roboto', cursive !important;
  @apply mt-64 text-9xl text-white #{!important};
}

.handwriting {
  font-family: 'Berkshire Swash', cursive !important;
  @apply mt-32 text-9xl text-white normal-case #{!important};
}

html {
  font-size: 36px;
}
</style>
