<template lang='pug'>
section
  .h-screen.flex.overflow-hidden
    PlayersSidebar(:players='players')
    .relative.mt-12.mx-auto(v-if='!complete')
      .flex.flex-col.mx-32.rounded-lg.shadow-lg.overflow-hidden.text-left
        .flex-shrink-0
          img.h-48.m-0.w-full.clear-reveal.object-cover(:src='image' alt='')
        .flex-1.bg-white.p-6.flex.flex-col.justify-between
          .flex-1
            span.block.mt-2.text-xl.leading-7.font-semibold.text-gray-900
              | How much is {{ celebrity }}&apos;s rate on Cameo?
            .my-4.text-center
              input.shadow.appearance-none.border.rounded.py-2.px-3.text-gray-700.leading-tight(class='w-1/3 focus:outline-none focus:shadow-outline' type='text' placeholder='Guess' v-model='guess' v-on:keydown.enter='addGuess(currentPlayer, guess)')
        .flex-1.bg-green.p-6.flex.flex-col.justify-between
          span.text-2xl.leading-7.font-semibold.text-white
            | {{ currentPlayer }}
    .mx-auto.align-middle(v-else='')
      span.inline-flex.rounded-md.shadow-sm
        button.inline-flex.items-center.px-6.py-3.border.border-transparent.text-base.leading-6.font-medium.rounded-md.text-white.bg-indigo-600.transition.ease-in-out.duration-150.mt-12(type='button' class='hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700' @click='findWinner()')
          | Is The Price Right?&#x9;
          svg.ml-3.-mr-1.h-5.w-5(fill='currentColor' viewbox='0 0 20 20')
            path(d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z')
  h1 {{ celebrity }}
  .fixed.bottom-0.inset-x-0.px-4.pb-6.transition.ease-in-out.duration-700(v-if='winner' class='sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center')
    .fixed.inset-0.transition-opacity
      .absolute.inset-0.bg-gray-500.opacity-75
    .bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-hidden.shadow-xl.transform.transition-all(class='sm:max-w-sm sm:w-full sm:p-6' role='dialog' aria-modal='true' aria-labelledby='modal-headline')
      div
        .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-green
          svg.h-6.w-6.text-white(stroke='currentColor' fill='none' viewbox='0 0 24 24')
            path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7')
        .mt-3.text-center(class='sm:mt-5')
          h3#modal-headline.text-lg.leading-6.font-medium.text-gray-900
            | {{ winner }}
          .mt-2
            p.text-sm.leading-5.text-gray-500
              | {{ winner }}&apos;s guess was ${{ winningGuess }}
            p.text-sm.leading-5.text-gray-800
              | {{ celebrity }}&apos;s rate on Cameo is
              b ${{ price }}
</template>

<script>
/* eslint vue/no-side-effects-in-computed-properties: "off" */
import { mapState, mapMutations } from 'vuex'

import PlayersSidebar from '@/components/Players/PlayersSidebar.vue'

export default {
  name: 'CelebrityGuess',
  components: {
    PlayersSidebar
  },
  props: {
    celebrity: String,
    image: String,
    price: Number,
    prize: Number
  },
  data () {
    return {
      guesses: [],
      complete: false,
      winner: '',
      winningGuess: 0
    }
  },
  computed: {
    guessesByPrice () {
      if (this.guesses.length > 0) {
        return this.guesses.sort((a, b) => a.guess - b.guess).reverse()
      } else {
        return []
      }
    },
    currentPlayer () {
      if (this.game.players.length > 0) {
        return this.game.players[this.game.playerIndex].name
      } else {
        return ''
      }
    },
    players () {
      const players = this.guessesByPrice

      players.forEach((player) => {
        player.name = player.playerName
        player.value = '$' + player.guess
      })

      return players
    },
    ...mapState(['game'])
  },
  methods: {
    addGuess (playerName, guess) {
      this.guesses.push({
        playerName: playerName,
        guess: guess
      })
      this.nextPlayer()
    },
    nextPlayer () {
      this.guess = ''
      this.increasePlayerIndex()

      if (this.game.playerIndex === this.game.playerButton) {
        this.complete = true
      }
    },
    findWinner () {
      let bestGuess = 0
      let winner = ''

      this.guesses.forEach((guess) => {
        if (parseInt(guess.guess) > bestGuess && parseInt(guess.guess) <= parseInt(this.price)) {
          bestGuess = guess.guess
          winner = guess.playerName
        }
      })

      if (parseInt(bestGuess) === this.price) {
        this.increasePlayerScore({
          playerName: winner,
          value: (parseInt(this.prize) * 2)
        })
      } else {
        this.increasePlayerScore({
          playerName: winner,
          value: parseInt(this.prize)
        })
      }

      const audio = new Audio('/sounds/fanfare.mp3')
      audio.volume = 0.2
      audio.play()

      this.winner = winner
      this.winningGuess = bestGuess

      this.increasePlayerButton()
    },
    ...mapMutations(['increasePlayerScore',
      'increasePlayerButton',
      'increasePlayerIndex'])
  }
}

</script>