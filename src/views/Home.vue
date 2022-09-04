<template lang="pug">
Reveal
  .slides
    Title
    Slide(class='darkgray')
      h2.text-white Reddit Roulette
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
      video='/video/wild_horse.mp4',
      :limit='2',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/video/monkey_bite.mp4',
      :limit='5'
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/video/broken_lid.mp4',
      :limit='11'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/video/fake_kidnap.mp4',
      :limit='19'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/video/close_truck_call.mp4',
      :limit='8'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/video/bridge_fail.mp4',
      :limit='14'
      :winnerIndex='1'
    )
    PlayerBoard
    VideoSlide(
      background='/video/mtg_on_american_idol.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    VideoWagerRound(
      :items='items'
      video='/video/burning_wood.mp4',
      :limit='7'
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/video/gas_station_arson.mp4',
      :limit='19'
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/video/beat_saber.mp4',
      :limit='9'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/video/windmill_dunk.mp4',
      :limit='5'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/video/ghost_ride.mp4',
      :limit='5'
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/video/atv_fail.mp4',
      :limit='4'
      :winnerIndex='1'
    )
    PlayerBoard
    VideoSlide(
      background='/video/youtube_individual.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    VideoWagerRound(
      :items='items'
      video='/video/burnout_fail.mp4',
      :limit='3'
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/video/brick_fail.mp4',
      :limit='3'
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/video/quad_win.mp4',
      :limit='17'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/video/button_push.mp4',
      :limit='12'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/video/cougar_attack.mp4',
      :limit='2'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/video/alligator.mp4',
      :limit='14'
      :winnerIndex='1'
    )
    PlayerBoard
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
