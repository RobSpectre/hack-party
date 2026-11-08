<template lang="pug">
GenerateCorpse(
  v-for='player in getPlayersFromButton'
  :playerName='player.name'
  :hints='hints'
  :currentPrompt='prompt'
  @imageGenerated='handleImageGenerated'
)
ChooseWinner(
  :images='images'
  :title='prompt'
  :prize='prize'
  congratulation='That is the funniest corpse'
)
</template>

<script>
import ChooseWinner from '@/components/HelpComputer/ChooseWinner.vue'
import GenerateCorpse from '@/components/DiffsquisiteCorpse/GenerateCorpse.vue'

import { mapGetters } from 'pinia'
import { useGameStore } from '@/store'

export default {
  name: 'DiffsquisiteCorpseRound',
  components: {
    ChooseWinner,
    GenerateCorpse
  },
  props: {
    hints: {
      type: Array,
      default: undefined
    },
    prize: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      images: [],
      winner: null,
      prompt: '',
      completed: false
    }
  },
  computed: {
    ...mapGetters(useGameStore, ['getPlayersFromButton'])
  },
  methods: {
    handleImageGenerated (event) {
      this.images.push(event)

      this.prompt = event.prompt
    }
  }
}
</script>
