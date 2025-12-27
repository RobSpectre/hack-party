<template lang="pug">
.stat-block.bg-gray-700.p-4.rounded.border.border-gray-600
  h3.text-xl.font-bold.mb-2 {{ entity.name }}
  .grid.grid-cols-2.gap-2.mb-4
    .stat
      span.text-xs.text-gray-400 AC
      .text-lg {{ entity.ac }}
    .stat
      span.text-xs.text-gray-400 HP
      .text-lg
        input.bg-transparent.w-16.text-center(
          type="number"
          :value="entity.hp"
          @input="updateHp"
        )
        span.text-gray-400 / {{ entity.maxHp }}
  
  .attributes.grid.grid-cols-6.gap-1.text-center.text-xs
    div(v-for="attr in ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']" :key="attr")
      .font-bold.text-gray-400 {{ attr }}
      div 10 (+0)
</template>

<script>
import { useCampaignStore } from '@/store/campaign'

export default {
  name: 'StatBlock',
  props: {
    entityId: {
      type: Number,
      required: true
    }
  },
  setup () {
    const campaignStore = useCampaignStore()
    return { campaignStore }
  },
  computed: {
    entity () {
      return this.campaignStore.entities.find(e => e.id === this.entityId) || {}
    }
  },
  methods: {
    updateHp (event) {
      this.campaignStore.updateEntity(this.entityId, { hp: parseInt(event.target.value) })
    }
  }
}
</script>
