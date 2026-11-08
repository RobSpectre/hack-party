<template lang="pug">
Reveal
  .slides
    GameTitle
    VideoSlide(background='/games/reddit-roulette/video/poker.mp4')
    VideoSlide(background='/games/reddit-roulette/video/fail_compilation.mp4')
    Slide(class='darkgray')
      h2.text-white Reddit Roulette
    VideoSlide(background='/games/reddit-roulette/video/goodoutcome.mp4')
      h1 /r/nonononoyes
    VideoSlide(background='/games/reddit-roulette/video/badoutcome.mp4')
      h1 /r/whatcouldgowrong
    Slide(heading='Rules')
      h2.fragment Solo
      h2.fragment A Precarious Moment
      h2.fragment Does the subject win or fail?
      h2.fragment Place a bet
      h2.fragment Contrarians win big
      h2.fragment Rebuys available
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Charge Players' @clicked='chargePlayers')
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/stove_fire.mp4',
      :limit='12',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/motorcycle_pushups.mp4',
      :limit='17',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/landslide.mp4',
      :limit='20',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/column_drop.mp4',
      :limit='4',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/wolves.mp4',
      :limit='7',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/anthill.mp4',
      :limit='14',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/gator.mp4',
      :limit='7',
      :winnerIndex='1'
    )
    PlayerBoard
    VideoSlide(
      background='/games/reddit-roulette/video/lunch_feeder.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/penguin.mp4',
      :limit='2',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/cats_and_bird.mp4',
      :limit='33',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/joseph_ball.mp4',
      :limit='2',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/motorcycle_flip.mp4',
      :limit='3',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/car_cliff.mp4',
      :limit='7',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/goal_header.mp4',
      :limit='6',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/fatguy_waterslide.mp4',
      :limit='12',
      :winnerIndex='1'
    )
    PlayerBoard
    VideoSlide(
      background='/games/reddit-roulette/video/cruddy_couple.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/justdoit.mp4',
      :limit='9',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/bearscare.mp4',
      :limit='17',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/excavator.mp4',
      :limit='3',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/robbing_alcohol.mp4',
      :limit='10',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/mindthegap.mp4',
      :limit='12',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/childswing.mp4',
      :limit='3',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/games/reddit-roulette/video/holdmybeer.mp4',
      :limit='14',
      :winnerIndex='0'
    )
    PlayerBoard
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useGameStore } from '@/store'

import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import GameTitle from '@/components/base/GameTitle.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import VideoWagerRound from '@/components/Wager/VideoWagerRound.vue'

export default {
  name: 'RedditRouletteGame',
  components: {
    PlayerBoard,
    GameTitle,
    Slide,
    Reveal,
    BackgroundImageSlide,
    VideoSlide,
    ActionButton,
    GameVideo,
    VideoWagerRound
  },
  data () {
    return {
      items: [
        { name: 'Win', emoji: '👍️' },
        { name: 'Fail', emoji: '👎️' }
      ]
    }
  },
  computed: {
    ...mapState(useGameStore, ['game'])
  },
  methods: {
    chargePlayers () {
      this.game.players.forEach((player) => {
        this.increasePlayerScore(player.name, 1000)
      })
    },
    rebuy () {
      this.game.players.forEach((player) => {
        if (player.score <= 50) {
          this.increasePlayerScore(player.name, 500)
        }
      })
    },
    ...mapActions(useGameStore, ['increasePlayerScore'])
  }
}
</script>

<style lang='scss'>
html {
  font-size: 36px;
}
</style>
