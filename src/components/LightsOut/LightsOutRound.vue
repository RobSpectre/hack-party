<template lang="pug">
GameContentWithSidebar(:players='formattedPlayers')
  template(v-slot:header)
    h2.text-white(v-if='roundState === null') Ready?
    h2.text-white(v-if='roundState === "ready"') Ready
    h2.text-white(v-if='roundState === "started" && time > 0') {{ formattedTime }}
    h2.text-white(v-if='roundState === "started" && !time') Away We Go!
    h2.text-white(v-if='roundState === "complete"') {{ time }}
    h2.text-white(v-if='failed') Jump Start
  template(v-slot:content)
    .flex.flex-col.items-center.justify-center.h-screen
      Lights(v-if='roundState === "ready" || roundState === "started"')
      div.flex.flex-col.items-center.justify-center(v-else-if='roundState === "complete"')
        img(v-if='failed' src='/images/loser.gif')
        h2 Press the button to switch players
        .mt-32.text-9xl.classification-bounce(
          v-if='sortedPlayers.length > 1 && sortedPlayers[0].name === currentPlayer'
        ) {{ time }}
        .mt-32.text-9xl.classification(v-else) {{ time }}
      div(v-else)
        h2 Press the button to advance the game
      h1(v-if="demoMode") Demo
      h1(v-else) {{ currentPlayer }}
  template(v-slot:footer)
    #lightsout
    WinnerCard(
      v-if='winners.length > 0'
      :winners='winners'
      answerName='Reaction'
      answerValue='key'
      :constrainHeaderImage='false'
    )
    LoserCard(
      v-if='losers.length > 0'
      :losers='losers'
      answerName='No one'
      answerValue='a Formula 1 driver'
      :constrainHeaderImage='false'
    )
</template>

<script>
import { mapState, mapActions } from 'pinia'

import { v4 as uuidv4 } from 'uuid'

import { useGameStore } from '@/store'

import ActionButton from '@/components/base/ActionButton.vue'
import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

import Lights from '@/components/LightsOut/Lights.vue'

import WinnerCard from '@/components/base/WinnerCard.vue'
import LoserCard from '@/components/base/LoserCard.vue'

export default {
  name: 'LightsOutRound',
  components: {
    ActionButton,
    GameContentWithSidebar,
    WinnerCard,
    LoserCard,
    Lights
  },
  props: {
    prize: {
      type: Number,
      default: 1
    },
    minDelay: {
      type: Number,
      default: 0.2
    },
    maxDelay: {
      type: Number,
      default: 3
    },
    volume: {
      type: Number,
      default: 0.2
    },
    demoMode: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.uuid = uuidv4()

    this.mouseEvent = addEventListener('mousedown', event => {
      if (event.button === 0) {
        const slide = window.deck.getCurrentSlide()
        console.log(slide)

        if (slide.querySelector('#lightsout') && !this.complete) {
          this.lights = Array.prototype.slice.call(slide.querySelectorAll('.light-strip'))
          this.tap(event)
        }
      }
    }, { passive: false })

    this.keyEvent = addEventListener('keydown', event => {
      if (event.key === ' ') {
        const slide = window.deck.getCurrentSlide()

        if (slide.querySelector('#lightsout') && !this.complete) {
          this.lights = Array.prototype.slice.call(slide.querySelectorAll('.light-strip'))
          this.tap(event)
        }
      }
    }, { passive: false })
  },
  data () {
    return {
      reactionTimes: [],
      complete: false,
      winners: [],
      losers: [],
      lights: null,
      time: 0,
      roundState: null,
      failed: false,
      lightsOn: 0,
      lightsStart: 0,
      lightsOutTime: 0,
      previousLight: 0,
      raf: null,
      timeout: null,
      mouseEvent: null,
      keyEvent: null,
      uuid: null
    }
  },
  computed: {
    currentPlayer () {
      if (this.game.players.length > 0) {
        return this.game.players[this.game.playerIndex].name
      } else {
        return ''
      }
    },
    sortedPlayers () {
      const times = this.reactionTimes
      return times.sort((a, b) => a.value - b.value)
    },
    formattedPlayers () {
      return this.sortedPlayers.map(player => ({
        ...player,
        value: this.formatTime(player.value)
      }))
    },
    formattedTime () {
      return this.formatTime(this.time)
    },
    ...mapState(useGameStore, ['game'])
  },
  methods: {
    formatTime (time) {
      time = Math.round(time)

      let outputTime = time / 1000

      if (time < 10000) {
        outputTime = '0' + outputTime
      }

      while (outputTime.length < 6) {
        outputTime += '0'
      }

      return outputTime
    },
    start () {
      for (const light of this.lights) {
        light.classList.remove('on')
      }

      this.lightsOutTime = 0
      this.lightsOn = 0
      this.lightsStart = performance.now()

      this.raf = requestAnimationFrame(this.frame)
    },
    frame (now) {
      const toLight = Math.floor((now - this.lightsStart) / 1000) + 1

      if (toLight !== this.previousLight) {
        this.previousLight = toLight
        this.playSound('/sounds/light_sound.wav')
      }

      if (toLight > this.lightsOn) {
        for (const light of this.lights.slice(0, toLight)) {
          light.classList.add('on')
        }
      }

      if (toLight < 5) {
        this.raf = requestAnimationFrame(this.frame)
      } else {
        const delay = Math.random() * (this.maxDelay * 1000) + (this.minDelay * 1000)
        this.timeout = setTimeout(() => {
          for (const light of this.lights) {
            light.classList.remove('on')
          }
          this.lightsOutTime = performance.now()

          this.raf = requestAnimationFrame(this.updateTime)
        }, delay)
      }
    },
    updateTime (now) {
      this.time = performance.now() - this.lightsOutTime
      this.raf = requestAnimationFrame(this.updateTime)
    },
    end (timeStamp) {
      cancelAnimationFrame(this.raf)
      clearTimeout(this.timeout)

      if (!this.lightsOutTime) {
        this.time = null

        for (const light of this.lights) {
          light.classList.remove('on')
        }

        this.playSound('/sounds/lights_out_fail.wav')
        this.playSound('/sounds/sad_trombone.mp3')

        this.failed = true
      } else {
        const thisTime = timeStamp - this.lightsOutTime
        this.time = this.formatTime(thisTime)

        if (!this.demoMode) {
          this.reactionTimes.push(
            { name: this.currentPlayer, value: thisTime }
          )
        }
        if (this.demoMode) {
          this.playSound('/sounds/lights_out_success.wav')
        } else {
          if (this.sortedPlayers.length > 1 && this.sortedPlayers[0].name === this.currentPlayer) {
            this.playSound('/sounds/sorry_for_party_rocking.mp3')
          } else {
            this.playSound('/sounds/lights_out_success.wav')
          }
        }
      }
    },
    tap (event) {
      const timeStamp = performance.now()

      if (!this.roundState && event.target && event.target.closest &&
        event.target.closest('a')) {
        return event.preventDefault()
      }

      if (this.roundState === null) {
        this.roundState = 'ready'
        this.playSound('/sounds/ready.wav')
      } else if (this.roundState === 'ready') {
        this.start()
        this.roundState = 'started'
      } else if (this.roundState === 'started') {
        this.end(timeStamp)
        this.roundState = 'complete'
      } else {
        this.nextPlayer()
      }
    },
    playSound (soundPath) {
      const audio = new Audio(soundPath)
      audio.volume = this.volume
      audio.play()
    },
    nextPlayer () {
      this.time = 0
      this.time = 0
      this.roundState = null
      this.lightsOn = 0
      this.lightsStart = 0
      this.lightsOutTime = 0
      this.previousLight = 0
      this.failed = false

      if (this.demoMode === false) {
        this.increasePlayerIndex()

        if (this.game.playerIndex === this.game.playerButton) {
          this.complete = true
          this.findWinners()
        }
      }
    },
    findWinners () {
      const winners = []

      let prize = this.game.players.length

      this.reactionTimes.forEach((reactionTime) => {
        winners.push(reactionTime.name)

        this.increasePlayerScore(reactionTime.name, prize * this.prize)

        prize--
      })

      if (winners.length === 1) {
        this.increasePlayerScore(winners[0].name, this.game.players.length)

        this.playSound('/sounds/sorry_for_party_rocking.mp3')

        this.winners = winners
      } else if (winners.length > 0) {
        this.playSound('/sounds/fanfare.mp3')

        this.winners = winners
      } else {
        this.losers = this.game.players.map(player => player.name)
      }

      this.increasePlayerButton()
    },
    ...mapActions(useGameStore, ['increasePlayerScore',
      'increasePlayerButton',
      'increasePlayerIndex'])
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Faster+One&display=swap');

.classification {
  font-family: 'Faster One', cursive !important;
  @apply mt-36 skew-x-6 skew-y-12 text-9xl text-green tracking-tight text-shadow shadow-black #{!important};
}

.classification-bounce {
  font-family: 'Faster One', cursive !important;
  @apply mt-36 skew-x-6 skew-y-12 text-9xl text-green tracking-tight text-shadow shadow-black animate-bounce #{!important};
}
</style>
