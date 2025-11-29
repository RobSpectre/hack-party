<template lang='pug'>
GameSlide
  PlayersSidebar(:players='players')
  .relative.mt-12.mx-auto(v-if='!complete')
    .flex.flex-col.mx-32.rounded-lg.shadow-lg.overflow-hidden.text-left
      .flex-shrink-0
        img.m-0.w-full.clear-reveal.object-cover(:src='headerImage' alt='')
      .flex-1.bg-white.p-6.flex.flex-col.justify-between
        .flex-1
          span.block.text-lg.leading-7.font-semibold.text-gray-900.uppercase {{ question }}
          .my-4.text-center
            form(@submit.prevent='submitGuess')
              input.shadow.appearance-none.border.rounded.py-3.px-4.text-gray-700.text-xl.leading-tight(
                class='w-full focus:outline-none focus:shadow-outline'
                type='text'
                :placeholder='placeholder'
                v-model.trim='currentGuess'
                ref='guessInput'
                @keydown.enter='submitGuess'
                :disabled='complete'
              )
              .mt-4.flex.gap-2.justify-center
                button.actionButton(
                  type='submit'
                  :disabled='!currentGuess || complete'
                ) {{ submitButtonText }}
                button.actionButton.bg-gray-500(
                  type='button'
                  v-if='allowSkip'
                  @click='skipPlayer'
                  :disabled='complete'
                  class='hover:bg-gray-600'
                ) Skip
              .mt-2.text-sm.text-gray-600(v-if='showHint && hint')
                | Hint: {{ hint }}
              .mt-2.text-sm.text-gray-600(v-if='caseSensitive')
                | Note: Answer is case-sensitive
      .flex-1.bg-green.p-6.flex.flex-col.justify-between
        span.text-2xl.uppercase.leading-7.font-semibold.text-white {{ currentPlayer }}
  .mx-auto.align-middle(v-if='complete == true && winners.length <= 0 && losers.length <= 0')
    span.inline-flex.rounded-md.shadow-sm
      button.inline-flex.items-center.px-6.py-3.border.border-transparent.text-base.leading-6.font-medium.rounded-md.text-white.uppercase.bg-slate-400.transition.ease-in-out.duration-150.mt-12(
      type='button'
      class='hover:bg-slate-700 focus:outline-none focus:border-slate-700 active:bg-slate-700'
      @click='findWinners()'
      accesskey='z')
        | {{ revealButtonText }}
  WinnerCard(
    v-if='winners.length > 0'
    :winners='winners'
    :answerName='answer'
    :answerValue='answerDetails'
  )
  LoserCard(
    v-if='losers.length > 0'
    :losers='losers'
    :answerName='answer'
    :answerValue='answerDetails'
  )
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useGameStore } from '@/store'

import GameSlide from '@/components/base/GameSlide.vue'
import WinnerCard from '@/components/base/WinnerCard.vue'
import LoserCard from '@/components/base/LoserCard.vue'
import PlayersSidebar from '@/components/Players/PlayersSidebar.vue'

export default {
  name: 'StringGuess',
  components: {
    GameSlide,
    PlayersSidebar,
    WinnerCard,
    LoserCard
  },
  props: {
    answer: {
      type: String,
      required: true
    },
    acceptableAnswers: {
      type: Array,
      default: () => []
    },
    answerDetails: {
      type: String,
      default: ''
    },
    prize: {
      type: Number,
      default: 1
    },
    question: {
      type: String,
      default: 'What is your guess?'
    },
    placeholder: {
      type: String,
      default: 'Type your answer...'
    },
    headerImage: {
      type: String,
      default: '/images/hackparty_logo.png'
    },
    caseSensitive: {
      type: Boolean,
      default: false
    },
    exactMatch: {
      type: Boolean,
      default: false
    },
    allowSkip: {
      type: Boolean,
      default: true
    },
    showHint: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String,
      default: ''
    },
    submitButtonText: {
      type: String,
      default: 'Submit'
    },
    revealButtonText: {
      type: String,
      default: 'Reveal Answer'
    },
    fuzzyThreshold: {
      type: Number,
      default: 0.8
    }
  },
  data () {
    return {
      guesses: [],
      complete: false,
      winners: [],
      losers: [],
      currentGuess: ''
    }
  },
  computed: {
    ...mapState(useGameStore, ['game']),
    currentPlayer () {
      if (this.game.players.length > 0) {
        return this.game.players[this.game.playerIndex].name
      } else {
        return ''
      }
    },
    players () {
      const players = []

      this.guesses.forEach((guess) => {
        players.push(
          {
            name: guess.playerName,
            value: guess.answer,
            correct: guess.isCorrect ? '✅' : '❌'
          }
        )
      })

      return players
    },
    allAcceptableAnswers () {
      const answers = [this.answer, ...this.acceptableAnswers]
      return this.caseSensitive ? answers : answers.map(a => a.toLowerCase())
    }
  },
  mounted () {
    // Auto-focus input on mount
    this.$nextTick(() => {
      if (this.$refs.guessInput) {
        this.$refs.guessInput.focus()
      }
    })
  },
  methods: {
    ...mapActions(useGameStore, ['increasePlayerButton', 'increasePlayerIndex', 'increasePlayerScore']),

    submitGuess () {
      if (!this.currentGuess || this.complete) return

      const isCorrect = this.validateAnswer(this.currentGuess)

      this.guesses.push({
        playerName: this.currentPlayer,
        answer: this.currentGuess,
        isCorrect: isCorrect
      })

      this.currentGuess = ''
      this.nextPlayer()
    },

    validateAnswer (guess) {
      const processedGuess = this.caseSensitive ? guess : guess.toLowerCase()

      // Check exact match first
      if (this.allAcceptableAnswers.includes(processedGuess)) {
        return true
      }

      // If exact match is required, stop here
      if (this.exactMatch) {
        return false
      }

      // Check fuzzy match
      return this.allAcceptableAnswers.some(acceptableAnswer => {
        return this.fuzzyMatch(processedGuess, acceptableAnswer)
      })
    },

    fuzzyMatch (str1, str2) {
      // Simple fuzzy matching based on Levenshtein distance
      const distance = this.levenshteinDistance(str1, str2)
      const maxLength = Math.max(str1.length, str2.length)
      const similarity = 1 - (distance / maxLength)

      return similarity >= this.fuzzyThreshold
    },

    levenshteinDistance (str1, str2) {
      const matrix = []

      for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i]
      }

      for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j
      }

      for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
          if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1]
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1, // substitution
              matrix[i][j - 1] + 1,     // insertion
              matrix[i - 1][j] + 1      // deletion
            )
          }
        }
      }

      return matrix[str2.length][str1.length]
    },

    skipPlayer () {
      this.guesses.push({
        playerName: this.currentPlayer,
        answer: '(skipped)',
        isCorrect: false
      })

      this.currentGuess = ''
      this.nextPlayer()
    },

    nextPlayer () {
      this.increasePlayerIndex()

      if (this.game.playerIndex === this.game.playerButton) {
        this.complete = true
      } else {
        // Focus input for next player
        this.$nextTick(() => {
          if (this.$refs.guessInput) {
            this.$refs.guessInput.focus()
          }
        })
      }
    },

    findWinners () {
      const winners = []

      this.guesses.forEach((guess) => {
        if (guess.isCorrect) {
          winners.push(guess.playerName)
          this.increasePlayerScore(guess.playerName, this.prize)
        }
      })

      // Award contrarian bonus for single correct answer
      if (winners.length === 1) {
        this.increasePlayerScore(winners[0], this.prize)

        const audio = new Audio('/sounds/sorry_for_party_rocking.mp3')
        audio.volume = 0.2
        audio.play()

        this.winners = winners
      } else if (winners.length > 0) {
        const audio = new Audio('/sounds/fanfare.mp3')
        audio.volume = 0.2
        audio.play()

        this.winners = winners
      } else {
        const audio = new Audio('/sounds/loser_sound.mp3')
        audio.volume = 0.2
        audio.play()

        this.losers = this.guesses.map(g => g.playerName)
      }

      this.increasePlayerButton()
    },

    denominate (value) {
      return value
    }
  }
}
</script>

<style lang="scss" scoped>
.actionButton {
  @apply px-4 py-2 bg-blue text-white font-bold rounded transition-all duration-200;

  &:hover:not(:disabled) {
    @apply bg-opacity-90;
  }

  &:disabled {
    @apply opacity-50 cursor-not-allowed;
  }
}

input {
  font-size: 1.25rem;

  &:focus {
    border-color: #00bc70;
    box-shadow: 0 0 0 3px rgba(0, 188, 112, 0.1);
  }

  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
  }
}
</style>