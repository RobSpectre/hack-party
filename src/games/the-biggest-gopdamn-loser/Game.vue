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
        :key='race.key'
        :celebrity='race.republican'
        :hint1='race.place'
        :hint2='race.seat'
        :image='photo(race)'
        :video='adFile(race)'
        :youtube='adFile(race) ? "" : race.ad || ""'
        :youtubeTitle='race.republican'
        :price='margin(race)'
        :prize='round.points'
        denomination=''
        suffix=' votes'
        separators
        :question='"By how many votes did " + race.democrat + " beat " + race.republican + "?"'
      )
        template(#hint3)
          | In {{ race.before.year }} {{ lastWinner(race) }} won by
          |
          span.gop-votes {{ number(race.before.votes) }} votes
          |
          | ({{ race.before.points }}%)
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
import ads from './ads.json'

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
    number,
    // Who won the seat last time, without naming this year's Republican
    // before the reveal: whoever held an open seat, or "the Republican".
    lastWinner (race) {
      return race.before.winner || 'the Republican'
    },
    photo (race) {
      return race.photo ? `/games/the-biggest-gopdamn-loser/images/${race.photo}` : ''
    },
    // The downloaded ad, if fetch-ads.mjs has fetched one.
    adFile (race) {
      const ad = ads[race.key]
      return ad && ad.file ? `/games/the-biggest-gopdamn-loser/${ad.file}` : ''
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: 36px;
}

// The vote count in each race's last-win hint.
.gop-votes {
  display: inline-block;
  padding: 0 0.3em;
  border-radius: var(--hp-radius-control, 0.15em);
  background: var(--hp-data, #fde047);
  color: var(--hp-on-data, #111827);
  font-variant-numeric: tabular-nums;
}
</style>
