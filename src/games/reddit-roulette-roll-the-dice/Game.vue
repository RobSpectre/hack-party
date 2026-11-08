<template lang="pug">
Reveal
  .slides
    GameTitle
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
      video='/games/reddit-roulette-roll-the-dice/video/wild_horse.mp4',
      :limit='2',
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/monkey_bite.mp4',
      :limit='5'
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/broken_lid.mp4',
      :limit='11'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/fake_kidnap.mp4',
      :limit='19'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/close_truck_call.mp4',
      :limit='8'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/bridge_fail.mp4',
      :limit='14'
      :winnerIndex='1'
    )
    PlayerBoard
    VideoSlide(
      background='/games/reddit-roulette-roll-the-dice/video/mtg_on_american_idol.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/burning_wood.mp4',
      :limit='7'
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/gas_station_arson.mp4',
      :limit='19'
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/beat_saber.mp4',
      :limit='9'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/windmill_dunk.mp4',
      :limit='5'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/ghost_ride.mp4',
      :limit='5'
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/atv_fail.mp4',
      :limit='4'
      :winnerIndex='1'
    )
    PlayerBoard
    VideoSlide(
      background='/games/reddit-roulette-roll-the-dice/video/youtube_individual.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/burnout_fail.mp4',
      :limit='3'
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/brick_fail.mp4',
      :limit='3'
      :winnerIndex='1'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/quad_win.mp4',
      :limit='17'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/button_push.mp4',
      :limit='12'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/cougar_attack.mp4',
      :limit='2'
      :winnerIndex='0'
    )
    VideoWagerRound(
      :items='items'
      video='/games/reddit-roulette-roll-the-dice/video/alligator.mp4',
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
import GameTitle from '@/components/base/GameTitle.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'
import PlayerBoard from '@/components/Players/PlayerBoard.vue'
import VideoWagerRound from '@/components/Wager/VideoWagerRound.vue'
export default {
  name: 'RedditRouletteRollTheDiceGame',
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
