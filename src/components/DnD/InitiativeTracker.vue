<template lang="pug">
.initiative-tracker.bg-gray-900.bg-opacity-90.p-2.border.border-cyan-900.h-full.flex.flex-col.shadow-lg.shadow-cyan-900_20
  h3.text-cyan-400.uppercase.tracking-widest.text-xs.font-bold.border-b.border-cyan-900.mb-2.pb-1 Initiative
  ul.flex-1.overflow-y-auto.mb-2
    li.flex.justify-between.items-center.p-1.mb-1.bg-black.border.border-gray-800(
      v-for="ent in sortedEntities"
      :key="ent.id"
      :class="{ 'border-l-4 border-l-cyan-400': ent.type === 'ally', 'border-l-4 border-l-red-500': ent.type === 'enemy' }"
    )
      span.text-xs.font-bold(:class="ent.type === 'ally' ? 'text-cyan-100' : 'text-red-100'") {{ ent.name }}
      input.bg-transparent.w-8.text-right.font-mono.text-xs.text-gray-400.focus_text-white(
        type="number"
        :value="ent.initiative"
        @change="updateInit(ent.id, $event)"
      )
  
  .logs.h-32.overflow-y-auto.bg-black.p-1.text-xs.font-mono.border-t.border-cyan-900
    div.text-cyan-700(v-for="(log, i) in logs" :key="i") > {{ log }}
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
