<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/poker.mp4')
    VideoSlide(background='/video/fail_compilation.mp4')
    Slide(class='darkgray')
      h2.text-white Reddit Roulette
    VideoSlide(background='/video/goodoutcome.mp4')
      h1 /r/nonononoyes
    VideoSlide(background='/video/badoutcome.mp4')
      h1 /r/whatcouldgowrong
    Slide(heading='Rules')
      h2.fragment Solo
      h2.fragment A Precarious Moment
      h2.fragment Does the subject win or fail?
      h2.fragment Place a bet
      h2.fragment Contrarians win big
      h2.fragment Rebuys available
    PlayerBoard
      ActionButton(label='Charge Players' @clicked='chargePlayers')
    VideoWagerRound(
      :items='items',
      video='/video/stove_fire.mp4',
      :limit='12',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/video/motorcycle_pushups.mp4',
      :limit='17',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/video/landslide.mp4',
      :limit='20',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/video/column_drop.mp4',
      :limit='4',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/video/wolves.mp4',
      :limit='7',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/video/chairbreak.mp4',
      :limit='8',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/video/arsonist.mp4',
      :limit='5',
      :winnerIndex='1'
    )
    PlayerBoard
    VideoSlide(
      background='/video/lunch_feeder.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(label='Rebuy' @clicked='rebuy')
    VideoWagerRound(
      :items='items',
      video='/video/penguin.mp4',
      :limit='2',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/video/cats_and_bird.mp4',
      :limit='33',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/video/joseph_ball.mp4',
      :limit='2',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/video/motorcycle_flip.mp4',
      :limit='2',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/video/car_cliff.mp4',
      :limit='7',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/video/goal_header.mp4',
      :limit='6',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/video/fatguy_waterslide.mp4',
      :limit='12',
      :winnerIndex='1'
    )
    PlayerBoard
    VideoSlide(
      background='/video/cruddy_couple.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(label='Rebuy' @clicked='rebuy')
    VideoWagerRound(
      :items='items',
      video='/video/justdoit.mp4',
      :limit='9',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/video/bearscare.mp4',
      :limit='17',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/video/excavator.mp4',
      :limit='3',
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items',
      video='/video/robbing_alcohol.mp4',
      :limit='10',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/video/mindthegap.mp4',
      :limit='12',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/video/childswing.mp4',
      :limit='3',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items',
      video='/video/holdmybeer.mp4',
      :limit='14',
      :winnerIndex='0'
    )
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useGameStore } from '@/store'

import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import VideoWagerRound from '@/components/Wager/VideoWagerRound.vue'

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
    VideoWagerRound
  },
  computed: {
    ...mapState(useGameStore, ['game'])
  },
  data () {
    return {
      items: [
        { name: 'Win', emoji: '👍️' },
        { name: 'Fail', emoji: '👎️' }
      ]
    }
  },
  methods: {
    chargePlayers () {
      this.game.players.forEach((player) => {
        this.increasePlayerScore(player.name, 1000)
      })
    },
    rebuy () {
      this.game.players.forEach((player) => {
        if (player.score <= 0) {
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
