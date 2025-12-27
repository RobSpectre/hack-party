<template lang="pug">
.initiative-tracker.bg-gray-700.p-4.rounded.border.border-gray-600.h-full.flex.flex-col
  h3.text-xl.font-bold.mb-2 Initiative
  ul.flex-1.overflow-y-auto.mb-4
    li.flex.justify-between.items-center.p-2.mb-1.bg-gray-800.rounded(
      v-for="ent in sortedEntities"
      :key="ent.id"
      :class="{ 'border-l-4 border-green-500': ent.type === 'ally', 'border-l-4 border-red-500': ent.type === 'enemy' }"
    )
      span {{ ent.name }}
      input.bg-transparent.w-8.text-right.font-mono(
        type="number"
        :value="ent.initiative"
        @change="updateInit(ent.id, $event)"
      )
  
  .logs.h-32.overflow-y-auto.bg-black.p-2.text-xs.font-mono.rounded
    div.text-gray-400(v-for="(log, i) in logs" :key="i") {{ log }}
</template>

<script>
import { useCampaignStore } from '@/store/campaign'
import { computed } from 'vue'

export default {
  name: 'InitiativeTracker',
  setup () {
    const store = useCampaignStore()
    
    const sortedEntities = computed(() => {
      return store.entities
        .filter(e => {
          // Exclude NPCs
          if (e.type === 'npc') return false
          // Include Allies (Global)
          if (e.type === 'ally') return true
          // Include matched Scene entities (or legacy no-scene)
          return e.scene === store.activeScene || !e.scene
        })
        .sort((a, b) => b.initiative - a.initiative)
    })
    
    const logs = computed(() => store.logs)

    const updateInit = (id, event) => {
      store.updateEntity(id, { initiative: parseInt(event.target.value) })
    }

    return { sortedEntities, logs, updateInit }
  }
}
</script>
