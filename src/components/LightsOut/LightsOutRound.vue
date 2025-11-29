<template lang="pug">
GameContentWithSidebar(:players='players')
  template(v-slot:content)
    .flex.flex-col.items-center.justify-center.h-full.w-full.p-8(v-if='!complete')
      h2.text-4xl.font-bold.mb-8.text-center Formula 1 Lights Out!

      // F1 Starting Lights Display
      .flex.gap-4.mb-12
        .light-column(v-for='column in 5' :key='column')
          .flex.flex-col.gap-2
            .f1-light(
              v-for='light in 2'
              :key='`${column}-${light}`'
              :class='getLightClass(column)'
            )
              .light-bulb

      // Game State Display
      .text-center.mb-8
        .text-2xl.font-bold(v-if='!gameStarted && !isWaiting')
          | {{ currentPlayer }}'s Turn
        .text-xl.text-yellow-500(v-if='isWaiting')
          | Get ready...
        .text-3xl.font-bold.text-green-500(v-if='canReact')
          | GO GO GO!
        .text-2xl.text-red-500(v-if='jumpStart')
          | Jump Start! +1 second penalty
        .text-2xl(v-if='reactionTime !== null')
          | Reaction Time: {{ formatTime(reactionTime) }}

      // Instructions
      .text-center.text-lg.mb-8(v-if='!gameStarted')
        p.mb-2 Press START to begin the sequence
        p.text-gray-600 When the lights go out, press SPACE as fast as you can!
        p.text-gray-600.text-sm.mt-2 Jump starts add 1 second penalty

      // Controls
      .flex.gap-4
        ActionButton(
          v-if='!gameStarted && !isDemo'
          @click='startSequence'
        ) Start

        ActionButton(
          v-if='isDemo'
          @click='endDemo'
        ) End Demo

        ActionButton(
          v-if='gameStarted && reactionTime !== null'
          @click='nextPlayer'
        ) Next Player

    // Results Screen
    .flex.flex-col.items-center.justify-center.h-full(v-else)
      h2.text-4xl.font-bold.mb-8 Race Results!
      .w-full.max-w-2xl
        .bg-white.rounded-lg.shadow-lg.p-6
          .space-y-3
            .flex.items-center.p-3.rounded(
              v-for='(result, index) in sortedResults'
              :key='result.playerName'
              :class='getResultClass(index)'
            )
              .text-2xl.font-bold.mr-4 {{ index + 1 }}
              .flex-grow
                .font-semibold.text-lg {{ result.playerName }}
                .text-sm {{ formatTime(result.time) }}
              .text-2xl(v-if='index === 0') 🏆
              .text-2xl(v-else-if='index === 1') 🥈
              .text-2xl(v-else-if='index === 2') 🥉

          .mt-8.flex.justify-center
            ActionButton(@click='resetGame') Play Again
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useGameStore } from '@/store'

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'
import ActionButton from '@/components/base/ActionButton.vue'

export default {
  name: 'LightsOutRound',
  components: {
    GameContentWithSidebar,
    ActionButton
  },
  props: {
    startWithDemo: {
      type: Boolean,
      default: false
    },
    minDelay: {
      type: Number,
      default: 1000 // Minimum delay before lights out (ms)
    },
    maxDelay: {
      type: Number,
      default: 4000 // Maximum delay before lights out (ms)
    }
  },
  data () {
    return {
      gameStarted: false,
      isDemo: false,
      complete: false,

      // Light sequence state
      lightsOn: 0,
      lightsOut: false,
      isWaiting: false,
      canReact: false,

      // Timing
      sequenceTimer: null,
      lightsOutTimer: null,
      startTime: null,
      reactionTime: null,
      jumpStart: false,

      // Results
      results: [],
      currentPlayerIndex: 0
    }
  },
  computed: {
    ...mapState(useGameStore, ['game']),
    players () {
      const players = []

      this.results.forEach((result) => {
        players.push({
          name: result.playerName,
          value: this.formatTime(result.time)
        })
      })

      if (this.currentPlayerIndex < this.game.players.length) {
        const remainingPlayers = this.game.players.slice(this.currentPlayerIndex)
        remainingPlayers.forEach(player => {
          players.push({
            name: player.name,
            value: 'Waiting...'
          })
        })
      }

      return players
    },
    currentPlayer () {
      if (this.game.players && this.game.players.length > this.currentPlayerIndex) {
        return this.game.players[this.currentPlayerIndex].name
      }
      return ''
    },
    sortedResults () {
      return [...this.results].sort((a, b) => a.time - b.time)
    }
  },
  mounted () {
    if (this.startWithDemo) {
      this.startDemo()
    }

    // Add spacebar listener
    window.addEventListener('keydown', this.handleKeyPress)
  },
  beforeUnmount () {
    window.removeEventListener('keydown', this.handleKeyPress)
    this.clearTimers()
  },
  methods: {
    ...mapActions(useGameStore, ['increasePlayerScore']),

    getLightClass (column) {
      if (this.lightsOut) {
        return 'light-off'
      }
      return column <= this.lightsOn ? 'light-on' : 'light-off'
    },

    startDemo () {
      this.isDemo = true
      this.startSequence()
    },

    endDemo () {
      this.isDemo = false
      this.resetRound()
    },

    startSequence () {
      this.resetRound()
      this.gameStarted = true
      this.isWaiting = true
      this.lightsOn = 0
      this.lightsOut = false

      // Start turning on lights one by one
      let lightIndex = 0
      this.sequenceTimer = setInterval(() => {
        lightIndex++
        this.lightsOn = lightIndex

        if (lightIndex >= 5) {
          clearInterval(this.sequenceTimer)
          this.sequenceTimer = null

          // Random delay before lights out
          const delay = Math.random() * (this.maxDelay - this.minDelay) + this.minDelay

          this.lightsOutTimer = setTimeout(() => {
            this.doLightsOut()
          }, delay)
        }
      }, 1000)
    },

    doLightsOut () {
      this.lightsOut = true
      this.lightsOn = 0
      this.isWaiting = false
      this.canReact = true
      this.startTime = performance.now()

      // Play sound
      const audio = new Audio('/sounds/fanfare.mp3')
      audio.volume = 0.3
      audio.play()
    },

    handleKeyPress (event) {
      // Only react to spacebar
      if (event.code !== 'Space') return

      // Prevent default spacebar behavior
      event.preventDefault()

      // Check if we're in the right state
      if (!this.gameStarted || this.reactionTime !== null) return

      if (this.isWaiting && !this.canReact) {
        // Jump start!
        this.jumpStart = true
        this.reactionTime = 1000 // 1 second penalty
        this.clearTimers()

        // Play error sound
        const audio = new Audio('/sounds/loser_sound.mp3')
        audio.volume = 0.3
        audio.play()
      } else if (this.canReact) {
        // Valid reaction
        const endTime = performance.now()
        this.reactionTime = endTime - this.startTime

        if (this.jumpStart) {
          this.reactionTime += 1000 // Add penalty
        }

        // Play success sound
        const audio = new Audio('/sounds/sorry_for_party_rocking.mp3')
        audio.volume = 0.2
        audio.play()
      }
    },

    nextPlayer () {
      // Save result
      if (this.reactionTime !== null) {
        this.results.push({
          playerName: this.currentPlayer,
          time: this.reactionTime,
          jumpStart: this.jumpStart
        })
      }

      // Move to next player
      this.currentPlayerIndex++

      if (this.currentPlayerIndex >= this.game.players.length) {
        this.complete = true
        this.awardPoints()
      } else {
        this.resetRound()
      }
    },

    resetRound () {
      this.gameStarted = false
      this.isWaiting = false
      this.canReact = false
      this.lightsOn = 0
      this.lightsOut = false
      this.reactionTime = null
      this.jumpStart = false
      this.startTime = null
      this.clearTimers()
    },

    resetGame () {
      this.complete = false
      this.currentPlayerIndex = 0
      this.results = []
      this.resetRound()
    },

    clearTimers () {
      if (this.sequenceTimer) {
        clearInterval(this.sequenceTimer)
        this.sequenceTimer = null
      }
      if (this.lightsOutTimer) {
        clearTimeout(this.lightsOutTimer)
        this.lightsOutTimer = null
      }
    },

    formatTime (ms) {
      if (ms >= 1000) {
        return `${(ms / 1000).toFixed(3)}s`
      }
      return `${Math.round(ms)}ms`
    },

    getResultClass (index) {
      const classes = [
        'bg-yellow-100 border-yellow-400',
        'bg-gray-100 border-gray-400',
        'bg-orange-100 border-orange-400'
      ]
      return classes[index] || 'bg-white'
    },

    awardPoints () {
      const sorted = this.sortedResults

      // Award points based on position
      if (sorted.length > 0) {
        this.increasePlayerScore(sorted[0].playerName, 3) // 1st place
      }
      if (sorted.length > 1) {
        this.increasePlayerScore(sorted[1].playerName, 2) // 2nd place
      }
      if (sorted.length > 2) {
        this.increasePlayerScore(sorted[2].playerName, 1) // 3rd place
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.light-column {
  display: flex;
  flex-direction: column;
}

.f1-light {
  width: 3rem;
  height: 3rem;
  background: #2a2a2a;
  border-radius: 50%;
  padding: 0.25rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;

  &.light-on {
    .light-bulb {
      background: #ff0000;
      box-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000;
    }
  }

  &.light-off {
    .light-bulb {
      background: #4a0000;
    }
  }
}

.light-bulb {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.actionButton {
  @apply px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg;
}

// Results styling
.bg-yellow-100 {
  border-left: 4px solid;
}

.bg-gray-100 {
  border-left: 4px solid;
}

.bg-orange-100 {
  border-left: 4px solid;
}
</style>