<template lang='pug'>
GameContentWithSidebar
  template(v-slot:content)
    h2 {{ currentPrompt }}
    ChooseItemModal(
      :selectedPlayer='playerName'
      :items='hints'
      @guess='onGuess'
    )
  template(v-slot:footer)
    h1(v-if="hint !== ''") {{ hint }}
GenerateImage(
  :playerName='playerName'
  :currentPrompt='currentPrompt'
  @imageGenerated="$emit('imageGenerated', $event)"
)
</template>

<script>
import ChooseItemModal from '@/components/base/ChooseItemModal.vue'
import GenerateImage from '@/components/HelpComputer/GenerateImage.vue'
import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

export default {
  name: 'GenerateCorpse',
  components: {
    ChooseItemModal,
    GenerateImage,
    GameContentWithSidebar
  },
  props: {
    currentPrompt: {
      type: String,
      default: undefined
    },
    playerName: {
      type: String,
      default: undefined
    },
    hints: {
      type: Array,
      default: undefined
    }
  },
  emits: ['imageGenerated'],
  data () {
    return {
      hint: ''
    }
  },
  methods: {
    onGuess (event) {
      this.hint = this.hints[event.value].values[Math.floor(Math.random() *
        this.hints[event.value].values.length)]
    }
  }
}
</script>
