<template lang="pug">
.dice-roller.bg-gray-700.p-4.rounded.border.border-gray-600
  h3.text-xl.font-bold.mb-2 Dice Roller
  .grid.grid-cols-3.gap-2
    button.bg-blue-600.hover_bg-blue-500.p-2.rounded.text-white.font-bold(
      v-for="d in [4, 6, 8, 10, 12, 20]"
      :key="d"
      @click="roll(d)"
    ) d{{ d }}
  
  .mt-4.text-center(v-if="lastResult")
    .text-xs.text-gray-400 Last Roll
    .text-4xl.font-bold.text-yellow-400 {{ lastResult }}
</template>

<script>
import { useCampaignStore } from '@/store/campaign'
import { ref } from 'vue'

export default {
  name: 'DiceRoller',
  setup () {
    const store = useCampaignStore()
    const lastResult = ref(null)

    const roll = (d) => {
      lastResult.value = store.rollDice(d)
    }

    return { roll, lastResult }
  }
}
</script>
