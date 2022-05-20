<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(
      background='/images/heardle.png'
    )
    VideoSlide(
      background='/video/traffas_auctioning.mp4'
    )
    BackgroundImageSlide(
      background='/images/supermax.gif'
    )
      h1 Super Max
    BackgroundImageSlide(
      background='/images/namethattune.gif'
    )
    BackgroundImageSlide(
      background='/images/auction.gif'
    )
      .mt-60.text-9xl 👨‍⚖️️👂️
    Slide
      h2.fragment Solo
      h2.fragment 3 rounds / 3 genres
      h2.fragment Each song broken into 5 chunks
      h2.fragment Bid for position on each chunk
      h2.fragment ☝️  more listening, more risk
      h2.fragment 👇️ less risk, less opportunity
      h2.fragment Hear the chunk, guess the tune
      h2.fragment One repeat per chunk
      h2.fragment Wrong answer, bid goes into the pot
      h2.fragment Winner takes all
      h1 Gameplay
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Charge Players' @clicked='chargePlayers')
    Slide(class='green')
      h2.text-white DEMO
    AuctionEarRound(
      src='/sounds/pretty_fly_for_a_white_guy_cut.mp3'
      answer='"Pretty Fly for a White Guy" by The Offspring'
      :chunks='5'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Reset Players' @clicked='resetPlayers')
    Slide(class='darkgray')
      h2.text-white Grunge
    AuctionEarRound(
      src='/sounds/man_in_the_box_cut.mp3'
      answer='"Man in the Box" by Alice in Chains'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/come_as_you_are_cut.mp3'
      answer='"Come As You Are" by Nirvana'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/glycerine_cut.mp3'
      answer='"Glycerine" by Bush'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/evenflow_cut.mp3'
      answer='"Even Flow" by Pearl Jam'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/spoonman_cut.mp3'
      answer='"Spoonman" by Soundgarden'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/my_name_is_mud_cut.mp3'
      answer='"My Name Is Mud" by Primus'
      :chunks='5'
    )
    PlayerBoard
    VideoSlide(
      background='/video/wrapping_cables.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    Slide(class='darkgray')
      h2.text-white Broadway
    AuctionEarRound(
      src='/sounds/younger_than_springtime_cut.mp3'
      answer='"Younger Than Springtime" from South Pacific'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/big_girls_dont_cry_cut.mp3'
      answer="Big Girls Don't Cry from Jersey Boys"
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/seasons_of_love_cut.mp3'
      answer='"Seasons of Love" from RENT'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/all_i_ask_of_you_cut.mp3'
      answer='"All I Ask Of You" from Phantom of the Opera'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/la_resistance_cut.mp3'
      answer='"La Resistance" from South Park: Bigger, Longer and Uncut'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/youll_be_back_cut.mp3'
      answer="You'll Be Back from Hamilton"
      :chunks='5'
    )
    PlayerBoard
    VideoSlide(
      background='/video/the_emo_test.mp4'
      :muted='false'
    )
    PlayerBoard
      ActionButton(v-if='game.players.length > 0' label='Rebuy' @clicked='rebuy')
    Slide(class='darkgray')
      h2.text-white Emotional Feedback Covers
    AuctionEarRound(
      src='/sounds/torn_cut.mp3'
      answer='"Torn" by Natalie Imbruglia'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/fly_by_night_cut.mp3'
      answer='"Fly By Night" by Rush'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/drown_cut.mp3'
      answer='"Drown" by Son Volt'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/rain_king_cut.mp3'
      answer='"Rain King" by Counting Crows'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/say_you_love_me_cut.mp3'
      answer='"Say You Love Me" by Fleetwood Mac'
      :chunks='5'
    )
    AuctionEarRound(
      src='/sounds/honky_tonk_woman_cut.mp3'
      answer='"Honky Tonk Woman" by The Rolling Stones'
      :chunks='5'
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

import { mapState, mapActions } from 'pinia'

import { useGameStore } from '@/store'

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
html {
  font-size: 36px;
}
</style>
