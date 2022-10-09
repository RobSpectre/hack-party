<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/ratings_publication.png')
      h1 Radio Ratings
    VideoSlide(
      background='/video/traffas_auctioning.mp4'
    )
      .mt-60.text-9xl 👨‍⚖️️👂️
    Slide
      h2.fragment Solo
      h2.fragment 3 rounds / 3 radio stations
      h2.fragment Each cover broken into 1 chunk per player
      h2.fragment Bid for position for each chunk
      h2.fragment ☝️  earlier in the song, more risk
      h2.fragment 👇️ bigger payoff, less opportunity
      h2.fragment Hear the chunk, guess the original song and artist
      h2.fragment One repeat per chunk
      h2.fragment Wrong answer, bid goes into the pot
      h2.fragment Winner takes all
      h1 Gameplay
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Charge Players' @clicked='chargePlayers')
    BackgroundImageSlide(background='/images/chicago_ratings.png')
      h1 107.5 WGCI - Chicago
    AuctionEarRound(
      src='/sounds/boyz2men.mp3'
      answer="I'll Make Love To You by Boyz II Men"
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/aaliyah.mp3'
      answer='"Back and Forth" by Aaliyah'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/janet.mp3'
      answer='"Any Time, Any Place" by Janet Jackson'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/tlc.mp3'
      answer='"Creep" by TLC'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/brandy.mp3'
      answer='"I Wanna Be Down" by Brandy'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(
      background='/video/exploding_hammer_intro.mov'
      :muted='false'
    )
    VideoWagerRound(
      :items='bossfight',
      video='/video/exploding_hammer_1_1.mov',
      :limit='1',
      :winnerIndex='1'
    )
    PlayerBoard
    VideoSlide(
      background='/video/geoguessr.mp4'
      :muted='false'
    )
    PlayerBoard
    BackgroundImageSlide(background='/images/wichita_ratings.png')
      h1 102.1 KZSN - Wichita
    AuctionEarRound(
      src='/sounds/alan_jackson.mp3'
      answer='"Summertime Blues" by Alan Jackson'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/mcgraw.mp3'
      answer="Don't Take The Girl by Tim McGraw"
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/diffie.mp3'
      answer='"Third Rock From The Sun" by Joe Diffie'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/hill.mp3'
      answer='"Piece Of My Heart" by Faith Hill'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/carpenter.mp3'
      answer='"Shut Up and Kiss Me" by Mary Chapin Carpenter'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/lawrence.mp3'
      answer='"If The Good Die Young" by Tracy Lawrence'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoWagerRound(
      :items='bossfight',
      video='/video/exploding_hammer_2_0.mov',
      :limit='1',
      :winnerIndex='0'
    )
    PlayerBoard
    VideoSlide(
      background='/video/lfb.mp4'
      :muted='false'
    )
    PlayerBoard
    BackgroundImageSlide(background='/images/new_york_ratings.png')
      h1 WLTW 106.7 - New York
    AuctionEarRound(
      src='/sounds/john.mp3'
      answer='"Can You Feel The Love Tonight?" by Elton John'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/mellencamp.mp3'
      answer='"Wild Night" by John Cougar Mellencamp'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/crow.mp3'
      answer='"All I Wanna Do" by Sheryl Crow'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/madonna.mp3'
      answer="I'll Remember by Madonna"
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/marx.mp3'
      answer='"Now and Forever" by Richard Marx'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    AuctionEarRound(
      src='/sounds/etheridge.mp3'
      answer='"Come To My Window" by Melissa Etheridge'
      :chunks='game.players.length',
      gameType='bidForChunk',
      :ascending='false'
      image='/images/auctionear_header.png'
    )
    PlayerBoard
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoWagerRound(
      :items='bossfight',
      video='/video/exploding_hammer_3_0.mov',
      :limit='1',
      :winnerIndex='0'
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

import VideoWagerRound from '@/components/Wager/VideoWagerRound.vue'

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
    VideoWagerRound
  },
  computed: {
    ...mapState(useGameStore, ['game'])
  },
  data () {
    return {
      bossfight: [
        { name: 'Hold', emoji: '👍️' },
        { name: 'Fold', emoji: '👎️' }
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
