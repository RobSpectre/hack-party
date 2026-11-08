<template lang='pug'>
template(
  v-if='remainingPlayers.length > 1'
  v-for='question in questions'
)
  Slide(class='green')
    h2.text-white {{ question.text }}
  ItemGuess(
    :items='question.answers'
    :winnerIndex='question.winnerIndex'
    :prize='prize',
    :denomination='denomination',
    :fragmentItemReveal='fragmentItemReveal'
    :headerImage='headerImage'
    @winners='findWinners'
    @losers='findLosers'
  )
GameContentWithSidebar(v-else)
  template(v-slot:content)
    WinnerCard(
      v-if='winners.length > 0'
      :winners='winners'
      answerName=''
      answerValue='the winner of the knockout'
    )
    LoserCard(
      v-if='losers.length > 0'
      :losers='losers'
      answerName='the winner'
      answerValue='in another castle'
    )
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useGameStore } from '@/store'

import WinnerCard from '@/components/base/WinnerCard.vue'
import LoserCard from '@/components/base/LoserCard.vue'

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'
import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'

import Slide from '@/components/base/Slide.vue'

export default {
  name: 'KnockoutRound',
  components: {
    GameContentWithSidebar,
    ItemGuess,
    WinnerCard,
    LoserCard,
    Slide
  },
  props: {
    questions: Array,
    prize: Number,
    bonus: {
      type: Number,
      default: 5
    },
    denomination: {
      type: String,
      default: '$'
    },
    fragmentItemReveal: {
      type: Boolean,
      default: false
    },
    headerImage: {
      type: String,
      default: '/images/which_is_which_cover.jpg'
    }
  },
  data () {
    return {
      remainingPlayers: [],
      winners: [],
      losers: [],
      round: 0
    }
  },
  computed: {
    ...mapState(useGameStore, ['game'])
  },
  mounted () {
    this.remainingPlayers = this.game.players
  },
  methods: {
    findWinners (winners) {
      this.round++

      const remainingPlayers = []

      this.remainingPlayers.forEach((player) => {
        if (winners.includes(player.name)) {
          remainingPlayers.push(player.name)
        }
      })

      if (remainingPlayers.length === 1 || this.round > this.questions.length) {
        this.winners.forEach((player) => {
          this.increasePlayerScore(player, this.bonus)
        })

        if (remainingPlayers.length === 1) {
          this.increasePlayerScore(this.winners[0], this.bonus)
        }

        this.remainingPlayers = remainingPlayers

        this.winners = winners
      }

      this.remainingPlayers = remainingPlayers
    },
    findLosers (losers) {
      this.losers = losers

      this.remainingPlayers = []
    },
    ...mapActions(useGameStore, ['increasePlayerScore'])
  }
}
</script>
