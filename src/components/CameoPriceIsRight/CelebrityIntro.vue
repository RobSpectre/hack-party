<template lang='pug'>
GameSlide
  PlayersSidebar(:players='players')
  GameContent
    template(v-slot:header)
      h3.fragment.text-white
        slot(name='hint1') {{ hint1 }}
      h3.fragment.text-white
        slot(name='hint2') {{ hint2 }}
      h3.fragment.text-white
        slot(name='hint3') {{ hint3 }}
    template(v-slot:content)
      img.fragment(v-if='image' :src='image')
    template(v-slot:footer)
      h1.fragment {{ celebrity }}
</template>

<script>
import { mapGetters } from 'pinia'
import { useGameStore } from '@/store'

import PlayersSidebar from '@/components/Players/PlayersSidebar.vue'
import GameSlide from '@/components/base/GameSlide.vue'
import GameContent from '@/components/base/GameContent.vue'

export default {
  name: 'CelebrityIntro',
  components: {
    PlayersSidebar,
    GameSlide,
    GameContent
  },
  props: {
    celebrity: {
      type: String,
      default: undefined
    },
    hint1: {
      type: String,
      default: undefined
    },
    hint2: {
      type: String,
      default: undefined
    },
    hint3: {
      type: String,
      default: undefined
    },
    image: {
      type: String,
      default: undefined
    }
  },
  computed: {
    ...mapGetters(useGameStore, ['getPlayersByScore']),
    players () {
      const players = this.getPlayersByScore

      players.forEach((player) => {
        player.value = player.score
      })

      return players
    }
  }
}
</script>
