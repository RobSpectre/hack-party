<template lang="pug">
.quick-notes.bg-gray-900.bg-opacity-90.p-2.border.border-cyan-900.h-full.flex.flex-col.shadow-lg.shadow-cyan-900_20
  h3.text-cyan-400.uppercase.tracking-widest.text-xs.font-bold.border-b.border-cyan-900.mb-2.pb-1 Notes
  textarea.w-full.flex-1.bg-black.border.border-gray-800.text-gray-300.font-mono.text-xs.p-2.rounded-sm.resize-none.focus_border-cyan-500.outline-none(
    v-model="notes"
    @input="updateNotes"
    placeholder="DM Notes..."
  )
</template>

<script>
import { useCampaignStore } from '@/store/campaign'
import { computed } from 'vue'

export default {
  name: 'QuickNotes',
  setup () {
    const store = useCampaignStore()
    
    const notes = computed({
      get: () => store.notes,
      set: (val) => store.updateNotes(val)
    })
    
    const updateNotes = (e) => {
      store.updateNotes(e.target.value)
    }

    return { notes, updateNotes }
  }
}
</script>
