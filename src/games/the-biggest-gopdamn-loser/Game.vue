<template lang="pug">
Reveal
  .slides
    GameTitle(
      heading='The Biggest GOPdamn Loser'
      headingType='text'
    )
    Slide
      h2.fragment Solo
      h2.fragment 15 seats Democrats flipped on Nov 3
      h2.fragment Meet the Republican who lost
      h2.fragment Watch their top campaign ad
      h2.fragment Guess the Democrat's margin in votes
      h2.fragment Closest without going over wins
      h1 Gameplay
    Slide
      h2.fragment Round 1: 1 point a race
      h2.fragment Round 2: 2 points a race
      h2.fragment Round 3: 3 points a race
      h2.fragment Exactly right? Double points
      h1 Scoring
    PlayerBoard
    template(v-for='round in rounds' :key='round.number')
      Slide(class='darkgray')
        h2.text-white Round {{ round.number }}: {{ round.title }}
      Slide(class='green')
        h2.text-white {{ round.points }} {{ round.points === 1 ? 'point' : 'points' }} a race
      CameoPriceIsRightRound(
        v-for='race in round.races'
        :key='race.place'
        :celebrity='race.republican'
        :hint1='race.place'
        :hint2='race.seat'
        :hint3='lastWin(race)'
        :youtube='race.ad || ""'
        :youtubeTitle='race.republican + " for " + race.place'
        :price='margin(race)'
        :prize='round.points'
        denomination=''
        suffix=' votes'
        separators
        :question='"By how many votes did " + race.democrat + " beat " + race.republican + "?"'
      )
      //- The round's boss fight goes here.
      PlayerBoard
</template>

<script>
import Reveal from '@/components/base/Reveal.vue'
import GameTitle from '@/components/base/GameTitle.vue'
import Slide from '@/components/base/Slide.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import CameoPriceIsRightRound from '@/components/CameoPriceIsRight/CameoPriceIsRightRound.vue'

import { rounds, margin } from './races.js'

const number = value => value.toLocaleString('en-US')

export default {
  name: 'TheBiggestGopdamnLoserGame',
  components: {
    Reveal,
    GameTitle,
    Slide,
    PlayerBoard,
    CameoPriceIsRightRound
  },
  data () {
    return {
      rounds
    }
  },
  methods: {
    margin,
    // "In 2024 Lawler won by 23,946 votes (6.3 points)"
    lastWin (race) {
      const { year, winner, votes, points } = race.before
      const who = winner || race.republican.replace(/,? Jr\.$/, '').split(' ').pop()
      return `In ${year} ${who} won by ${number(votes)} votes (${points} points)`
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: 36px;
}
</style>
