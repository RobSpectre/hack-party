<template lang="pug">
Reveal.gop-loser
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
      h2.fragment Boss fights: 3, 5, then 10 points a question
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
      PlayerBoard
      template(v-if='bossFights[round.number].questions.length > 0')
        VideoSlide(background='/games/the-biggest-gopdamn-loser/video/bossfight.mp4')
          h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
        GameContentWithSidebar(v-if='bossFights[round.number].setup')
          template(v-slot:content)
            .h-full.flex.items-center.justify-center
              img.max-h-full.max-w-full.object-contain(:src='media("images", bossFights[round.number].setup)')
        Slide(class='green')
          h2.text-white {{ bossFights[round.number].points }} points a question
        ItemGuess(
          v-for='(q, i) in bossFights[round.number].questions'
          :key='round.number + "-" + i'
          :items='q.choices.map(name => ({ name, value: "" }))'
          :winnerIndex='q.answer'
          :prize='bossFights[round.number].points'
          denomination=''
          :headerImage='bossFights[round.number].setup ? media("images", bossFights[round.number].setup) : undefined'
          headerImageClass='m-0 w-full clear-reveal object-cover object-top'
          :question='q.question'
        )
        PlayerBoard
      VideoSlide(
        v-if='bossFights[round.number].after'
        :background='media("video", bossFights[round.number].after)'
        :muted='false'
        size='contain'
      )
</template>

<script>
import Reveal from '@/components/base/Reveal.vue'
import GameTitle from '@/components/base/GameTitle.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import CameoPriceIsRightRound from '@/components/CameoPriceIsRight/CameoPriceIsRightRound.vue'
import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'

import { rounds, margin } from './races.js'
import ads from './ads.json'
import { bossFights } from './bossfights.js'

const number = value => value.toLocaleString('en-US')

export default {
  name: 'TheBiggestGopdamnLoserGame',
  components: {
    Reveal,
    GameTitle,
    Slide,
    VideoSlide,
    GameContentWithSidebar,
    PlayerBoard,
    CameoPriceIsRightRound,
    ItemGuess
  },
  data () {
    return {
      rounds,
      bossFights
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
    media (kind, file) {
      return `/games/the-biggest-gopdamn-loser/${kind}/${file}`
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
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

html {
  font-size: 36px;
}

// "Boss Fight!!" over the boss fight video, as in the other games.
.gop-loser .nintendo {
  font-size: 8rem;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 0 0.06em 0 #000;
}

// Keep each candidate's photo clear of the name label at the bottom.
.gop-loser img.fragment {
  max-height: 46vh;
  width: auto;
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
