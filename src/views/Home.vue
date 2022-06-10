<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(
      background='/video/traffas_auctioning.mp4'
    )
      .mt-60.text-9xl 👨‍⚖️️👂️
    VideoSlide(
      background='/video/wrong_gig_cut.mp4'
    )
    VideoSlide(
      background='/video/barry_and_levon.mp4'
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
      background='/video/richard_cheese_cut.mp4'
    )
    AuctionEarRound(
      src='/sounds/creep.mp3'
      answer='"Creep" by Radiohead'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/sounds/welcome_to_the_jungle.mp3'
      answer='"Welcome to the Jungle" by Guns-n-Roses'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/sounds/chop_suey.mp3'
      answer='"Chop Suey" by System of a Down'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/sounds/wreck.mp3'
      answer='"The Wreck of the Edmund Fitzgerald" by Gordon Lightfoot'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/sounds/pour_some_sugar_on_me.mp3'
      answer='"Pour Some Sugar On Me" by Def Leppard'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/sounds/man_in_the_box.mp3'
      answer='"Man in the Box" by Alice in Chains'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/sounds/enter_sandman.mp3'
      answer='"Enter Sandman" by Metallica'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/richard_cheese.png'
    )
    AuctionEarRound(
      src='/sounds/down_with_the_sickness.mp3'
      answer='"Down with the Sickness" by Disturbed'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/richard_cheese.png'
    )
    PlayerBoard
    VideoSlide(
      background='/video/wrong_gig.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    Slide(class='darkgray')
      h2.text-white Me First and the Gimme Gimmes
    VideoSlide(
      background='/video/me_first_full.mp4'
    )
    AuctionEarRound(
      src='/sounds/rocketman.mp3'
      answer='"Rocket Man" by Elton John'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/sounds/science_fiction_double_feature.mp3'
      answer='"Science Fiction Double Feature" from Rocky Horror Picture Show'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/sounds/my_boyfriends_back.mp3'
      answer='"My Boyfriends Back" by The Angels'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/sounds/jolene.mp3'
      answer='"Jolene" by Dolly Parton'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/sounds/country_roads.mp3'
      answer='"Country Roads" by John Denver'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/sounds/tomorrow.mp3'
      answer='"Tomorrow" from Annie'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/sounds/my_heart_will_go_on.mp3'
      answer='"My Heart Will Go On" by Celine Dion'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/gimme_gimmes.png'
    )
    AuctionEarRound(
      src='/sounds/i_believe_i_can_fly.mp3'
      answer='"I Believe I Can Fly" by R. Kelly'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/gimme_gimmes.png'
    )
    PlayerBoard
    VideoSlide(
      background='/video/me_first_full.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    Slide(class="darkgray")
      h2.text-white Krappy Karaoke
    AuctionEarRound(
      src='/sounds/someone_like_you.mp3'
      answer='"Someone Like You" by Adele'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/karaoke.png'
    )
    AuctionEarRound(
      src='/sounds/hows_it_gonna_be.mp3'
      answer='"Hows It Gonna Be" by Third Eye Blind'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/karaoke.png'
    )
    AuctionEarRound(
      src='/sounds/whats_up.mp3'
      answer='"Whats Up" by 4 Non Blondes'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/karaoke.png'
    )
    AuctionEarRound(
      src='/sounds/soul_to_squeeze.mp3'
      answer='"Soul To Squeeze" by Red Hot Chili Peppers'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/karaoke.png'
    )
    AuctionEarRound(
      src='/sounds/from_a_distance.mp3'
      answer='Bette Midler'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/karaoke.png'
    )
    AuctionEarRound(
      src='/sounds/beauty_and_the_beast.mp3'
      answer='"Beauty and the Beast" from the Disney film'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/karaoke.png'
    )
    AuctionEarRound(
      src='/sounds/lose_yourself.mp3'
      answer='"Lose Yourself" by Eminem'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/karaoke.png'
    )
    AuctionEarRound(
      src='/sounds/fuck_her_gently.mp3'
      answer='"Fuck Her Gently" by Tenacious D'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/karaoke.png'
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

import AuctionEarRound from '@/components/AuctionEar/AuctionEarRound.vue'
import { useGameStore } from '@/store'
import { mapState, mapActions } from 'pinia'

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
    AuctionEarRound
  },
  computed: {
    ...mapState(useGameStore, ['game'])
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
