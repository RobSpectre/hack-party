<template lang="pug">
Reveal
  .slides
    Title
    PlayerBoard
    Slide
      h2.fragment Solo
      h2.fragment A popular television theme song
      h2.fragment Each cover broken into 1 chunk per player
      h2.fragment Bid for position for each chunk
      h2.fragment ☝️  earlier in the song, more risk
      h2.fragment 👇️ less risk, less opportunity
      h2.fragment Hear the chunk, guess the show
      h2.fragment One repeat per chunk
      h2.fragment Wrong answer, bid goes into the pot
      h2.fragment Winner takes all
      h1 Gameplay
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Charge Players' @clicked='chargePlayers')
    AuctionEarRound(
      src='/sounds/the_simpsons_cut.mp3'
      answer='The Simpsons'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    AuctionEarRound(
      src='/sounds/star_trek_cut.mp3'
      answer='Star Trek'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    AuctionEarRound(
      src='/sounds/breaking_bad_cut.mp3'
      answer='Breaking Bad'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    AuctionEarRound(
      src='/sounds/letterkenny_cut.mp3'
      answer='Letterkenny'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    AuctionEarRound(
      src='/sounds/game_of_thrones_cut.mp3'
      answer='Game of Thrones'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='darkgray')
      h2.text-white Climb the Ladder
    Slide
      h2.fragment Solo
      h2.fragment Start with the lowest score and go to the highest
      h2.fragment Introduce something you should name
      h2.fragment Name as many as possible in 30 seconds...
      h2.fragment ...without repeating one already named.
      h2.fragment 1 point per title!
      h1 Game Play
    Slide(class='darkgray')
      h2.text-white People who died in Game of Thrones
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/images/cut_the_cord_header.png'
      :prize='1'
    )
    PlayerBoard
    VideoSlide(
      background='/video/debate.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    AuctionEarRound(
      src='/sounds/mad_men_cut.mp3'
      answer='Mad Men'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    AuctionEarRound(
      src='/sounds/kimmy_schmidt_cut.mp3'
      answer='Unbreakable Kimmy Schmidt'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    AuctionEarRound(
      src='/sounds/succession_cut.mp3'
      answer='Succession'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    AuctionEarRound(
      src='/sounds/the_wire_cut.mp3'
      answer='The Wire'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    AuctionEarRound(
      src='/sounds/lost_cut.mp3'
      answer='Lost'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='darkgray')
      h2.text-white Climb the Ladder
    Slide(class='darkgray')
      h2.text-white Written or directed by JJ Abrams
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/images/cut_the_cord_header.png'
      :prize='2'
    )
    PlayerBoard
    VideoSlide(
      background='/video/hell.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    AuctionEarRound(
      src='/sounds/hee_haw_cut.mp3'
      answer='HeeHaw'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    AuctionEarRound(
      src='/sounds/malcolm_in_the_middle_cut.mp3'
      answer='Malcolm in the Middle'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    AuctionEarRound(
      src='/sounds/stranger_things_cut.mp3'
      answer='Stranger Things'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    AuctionEarRound(
      src='/sounds/buffy_cut.mp3'
      answer='Buffy the Vampire Slayer'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    AuctionEarRound(
      src='/sounds/too_many_cooks_cut.mp3'
      answer='Too Many Cooks'
      :chunks='game.players.length'
      gameType='bidForChunk'
      :ascending='false'
      image='/images/cut_the_cord_header.png'
    )
    PlayerBoard
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='darkgray')
      h2.text-white Climb the Ladder
    Slide(class='darkgray')
      h2.text-white Adult Swim shows
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/images/cut_the_cord_header.png'
      :prize='3'
    )
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
import ClimbTheLadderRound from '@/components/ClimbTheLadder/ClimbTheLadderRound.vue'

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
    AuctionEarRound,
    ClimbTheLadderRound
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
