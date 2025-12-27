<template lang="pug">
.quick-notes.bg-gray-700.p-4.rounded.border.border-gray-600.h-full.flex.flex-col
  h3.text-xl.font-bold.mb-2 Notes
  textarea.w-full.flex-1.bg-gray-800.text-white.p-2.rounded.resize-none(
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
