<template lang="pug">
Reveal
  .slides
    GameTitle
    VideoSlide(
      background='/games/auction-ear-undercover-lover/video/traffas_auctioning.mp4'
    )
      .mt-60.text-9xl 👨‍⚖️️👂️
    VideoSlide(
      background='/games/auction-ear-undercover-lover/video/wrong_gig_cut.mp4'
    )
    VideoSlide(
      background='/games/auction-ear-undercover-lover/video/barry_and_levon.mp4'
    )
      h2.title Undercover Lovers
    Slide
      h2.fragment Solo
      h2.fragment 3 rounds / 3 cover themes
      h2.fragment Each cover broken into 1 chunk per player
      h2.fragment Bid for position for each chunk
      h2.fragment ☝️  earlier in the song, more risk
      h2.fragment 👇️ less risk, less opportunity
      h2.fragment Hear the chunk, guess the original song and artist
      h2.fragment One repeat per chunk
      h2.fragment Wrong answer, bid goes into the pot
      h2.fragment Winner takes all
      h1 Gameplay
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Charge Players' @clicked='chargePlayers')
    Slide(class='darkgray')
      h2.text-white Lounge Against The Machine
    VideoSlide(
      background='/games/auction-ear-undercover-lover/video/richard_cheese_cut.mp4'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/creep.mp3'
      answer='"Creep" by Radiohead'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/welcome_to_the_jungle.mp3'
      answer='"Welcome to the Jungle" by Guns-n-Roses'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/chop_suey.mp3'
      answer='"Chop Suey" by System of a Down'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/wreck.mp3'
      answer='"The Wreck of the Edmund Fitzgerald" by Gordon Lightfoot'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/pour_some_sugar_on_me.mp3'
      answer='"Pour Some Sugar On Me" by Def Leppard'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/man_in_the_box.mp3'
      answer='"Man in the Box" by Alice in Chains'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/enter_sandman.mp3'
      answer='"Enter Sandman" by Metallica'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/down_with_the_sickness.mp3'
      answer='"Down with the Sickness" by Disturbed'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/richard_cheese.png'
    )
    VideoSlide(background='/games/auction-ear-undercover-lover/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='green')
      h2.text-white Reddit Roulette
    VideoWagerRound(
      :items='bossfight',
      video='/games/auction-ear-undercover-lover/video/impress.mp4',
      :limit='4',
      :winnerIndex='1'
    )
    PlayerBoard
    VideoSlide(
      background='/games/auction-ear-undercover-lover/video/wrong_gig.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    Slide(class='darkgray')
      h2.text-white Me First and the Gimme Gimmes
    VideoSlide(
      background='/games/auction-ear-undercover-lover/video/me_first_full.mp4'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/rocketman.mp3'
      answer='"Rocket Man" by Elton John'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/science_fiction_double_feature.mp3'
      answer='"Science Fiction Double Feature" from Rocky Horror Picture Show'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/my_boyfriends_back.mp3'
      answer='"My Boyfriends Back" by The Angels'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/jolene.mp3'
      answer='"Jolene" by Dolly Parton'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/country_roads.mp3'
      answer='"Country Roads" by John Denver'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/tomorrow.mp3'
      answer='"Tomorrow" from Annie'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/my_heart_will_go_on.mp3'
      answer='"My Heart Will Go On" by Celine Dion'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/i_believe_i_can_fly.mp3'
      answer='"I Believe I Can Fly" by R. Kelly'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/gimme_gimmes.png'
    )
    VideoSlide(background='/games/auction-ear-undercover-lover/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoWagerRound(
      :items='bossfight',
      video='/games/auction-ear-undercover-lover/video/sheep.mp4',
      :limit='2',
      :winnerIndex='0'
    )
    PlayerBoard
    VideoSlide(
      background='/games/auction-ear-undercover-lover/video/me_first_full.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    Slide(class="darkgray")
      h2.text-white Krappy Karaoke
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/someone_like_you.mp3'
      answer='"Someone Like You" by Adele'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/karaoke.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/hows_it_gonna_be.mp3'
      answer='"Hows It Gonna Be" by Third Eye Blind'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/karaoke.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/whats_up.mp3'
      answer='"Whats Up" by 4 Non Blondes'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/karaoke.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/soul_to_squeeze.mp3'
      answer='"Soul To Squeeze" by Red Hot Chili Peppers'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/karaoke.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/from_a_distance.mp3'
      answer='Bette Midler'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/karaoke.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/beauty_and_the_beast.mp3'
      answer='"Beauty and the Beast" from the Disney film'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/karaoke.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/lose_yourself.mp3'
      answer='"Lose Yourself" by Eminem'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/karaoke.png'
    )
    AuctionEarRound(
      src='/games/auction-ear-undercover-lover/sounds/fuck_her_gently_fucked.mp3'
      answer='"Fuck Her Gently" by Tenacious D'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/games/auction-ear-undercover-lover/images/karaoke.png'
    )
    VideoSlide(background='/games/auction-ear-undercover-lover/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoWagerRound(
      :items='bossfight',
      video='/games/auction-ear-undercover-lover/video/backflip.mp4',
      :limit='2',
      :winnerIndex='0'
    )
    PlayerBoard
</template>

<script>
import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import GameTitle from '@/components/base/GameTitle.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import AuctionEarRound from '@/components/AuctionEar/AuctionEarRound.vue'
import VideoWagerRound from '@/components/Wager/VideoWagerRound.vue'

import { useGameStore } from '@/store'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'AuctionEarUndercoverLoverGame',
  components: {
    PlayerBoard,
    GameTitle,
    Slide,
    Reveal,
    BackgroundImageSlide,
    VideoSlide,
    ActionButton,
    GameVideo,
    AuctionEarRound,
    VideoWagerRound
  },
  computed: {
    ...mapState(useGameStore, ['game'])
  },
  data () {
    return {
      bossfight: [
        { name: 'Win', emoji: '👍️' },
        { name: 'Fail', emoji: '👎️' }
      ]
    }
  },
  methods: {
    chargePlayers () {
      this.game.players.forEach((player) => {
        this.increasePlayerScore(player.name, 100)
      })
    },
    rebuy () {
      this.game.players.forEach((player) => {
        if (player.score < 10) {
          this.increasePlayerScore(player.name, 50)
        }
      })
    },
    resetPlayers () {
      this.game.players.forEach((player) => {
        this.changeAttributeOfPlayer(player.name, 'score', 100)
      })
    },
    ...mapActions(useGameStore,
      ['increasePlayerScore',
        'changeAttributeOfPlayer'])
  }
}
</script>

<style lang='scss'>
@import
url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Great Vibes', cursive !important;
  @apply mt-72 text-9xl skew-y-12 text-white normal-case #{!important};
}

html {
  font-size: 36px;
}
</style>
