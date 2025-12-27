<template lang="pug">
.npcs-tracker.bg-gray-700.p-4.rounded.border.border-gray-600.h-full.flex.flex-col
  h3.text-xl.font-bold.mb-2 NPCs
  
  // Add NPC Form
  .mb-4.grid.grid-cols-2.gap-2
    .col-span-2
      label.block.text-xs.font-bold.mb-1.text-gray-400 Name
      input.bg-gray-800.p-1.rounded.text-white.text-sm.w-full(
        v-model="newNPC.name"
        placeholder="Name"
      )
    .col-span-2.grid.grid-cols-2.gap-2
      div
        label.block.text-xs.font-bold.mb-1.text-gray-400 AC
        input.bg-gray-800.p-1.rounded.text-white.text-sm.w-full(
          type="number"
          v-model.number="newNPC.ac"
          placeholder="AC"
        )
      div
        label.block.text-xs.font-bold.mb-1.text-gray-400 HP
        input.bg-gray-800.p-1.rounded.text-white.text-sm.w-full(
          type="number"
          v-model.number="newNPC.hp"
          placeholder="HP"
        )
    button.bg-yellow-600.hover_bg-yellow-500.text-white.font-bold.p-1.rounded.col-span-2(
      @click="addNPC"
    ) Add NPC

  // NPC List
  ul.flex-1.overflow-y-auto
    li.flex.justify-between.items-center.p-2.mb-1.bg-gray-800.rounded(
      v-for="n in npcs"
      :key="n.id"
    )
      div
        .font-bold {{ n.name }}
        .text-xs.text-gray-400 NPC
      .text-right.text-sm
        span.mr-2 AC: {{ n.ac }}
        span.cursor-pointer.hover_text-blue-300(
          v-if="editingId !== n.id"
          @click="startEdit(n)"
        ) HP: {{ n.hp }}/{{ n.maxHp }}
        input.bg-gray-900.text-white.text-xs.p-1.rounded.w-16(
          v-else
          v-model="editValue"
          @blur="saveEdit"
          @keyup.enter="saveEdit"
          ref="editInput"
        )
        button.ml-2.text-red-400.hover_text-red-300(@click="remove(n.id)") ✕
</template>

<script>
import { useCampaignStore } from '@/store/campaign'
import { computed, reactive, ref, nextTick } from 'vue'

export default {
  name: 'NPCsTracker',
  setup () {
    const store = useCampaignStore()
    const editInput = ref(null)
    const editingId = ref(null)
    const editValue = ref('')
    
    const newNPC = reactive({
      name: '',
      ac: 10,
      hp: 10
    })

    const npcs = computed(() => {
      return store.entities.filter(e => {
        return e.type === 'npc' && (e.scene === store.activeScene || !e.scene)
      })
    })

    const addNPC = () => {
      if (!newNPC.name) return
      
      store.addEntity({
        name: newNPC.name,
        ac: newNPC.ac,
        hp: newNPC.hp,
        maxHp: newNPC.hp,
        initiative: 0, // NPCs don't need initiative
        type: 'npc'
      })
      
      // Reset form
      newNPC.name = ''
      newNPC.ac = 10
      newNPC.hp = 10
    }
    
    const startEdit = (npc) => {
      editingId.value = npc.id
      editValue.value = npc.hp
      nextTick(() => {
        if (editInput.value && editInput.value[0]) {
          editInput.value[0].focus()
          editInput.value[0].select()
        }
      })
    }

    const saveEdit = () => {
      if (editingId.value === null) return

      const npc = store.entities.find(e => e.id === editingId.value)
      if (npc) {
        const valStr = String(editValue.value).trim()
        let newHp = npc.hp

        if (valStr.startsWith('+') || valStr.startsWith('-')) {
          newHp = npc.hp + parseInt(valStr)
        } else {
          const parsed = parseInt(valStr)
          if (!isNaN(parsed)) {
            newHp = parsed
          }
        }
        
        store.updateEntity(npc.id, { hp: newHp })
      }

      editingId.value = null
      editValue.value = ''
    }

    const remove = (id) => {
      if (confirm('Remove this NPC?')) {
        store.removeEntity(id)
      }
    }

    return { 
      newNPC, 
      npcs, 
      addNPC, 
      remove,
      editingId,
      editValue,
      editInput,
      startEdit,
      saveEdit
    }
  }
}
</script>
