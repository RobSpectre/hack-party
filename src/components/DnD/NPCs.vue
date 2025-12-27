<template lang="pug">
.npcs-tracker.bg-gray-900.bg-opacity-90.p-2.border.border-cyan-900.h-full.flex.flex-col.shadow-lg.shadow-cyan-900_20
  h3.text-cyan-400.uppercase.tracking-widest.text-xs.font-bold.border-b.border-cyan-900.mb-2.pb-1 NPCs
  
  // Add NPC Form
  .mb-2.grid.grid-cols-2.gap-1
    .col-span-2
      label.block.text-xs.font-bold.mb-0_5.text-cyan-700 Name
      input.bg-black.border.border-gray-700.p-1.rounded-sm.text-cyan-300.text-xs.w-full.placeholder-gray-800(
        v-model="newNPC.name"
        placeholder="Name"
      )
    .col-span-2.grid.grid-cols-2.gap-1
      div
        label.block.text-xs.font-bold.mb-0_5.text-cyan-700 AC
        input.bg-black.border.border-gray-700.p-1.rounded-sm.text-cyan-300.text-xs.w-full.placeholder-gray-800(
          type="number"
          v-model.number="newNPC.ac"
          placeholder="AC"
        )
      div
        label.block.text-xs.font-bold.mb-0_5.text-cyan-700 HP
        input.bg-black.border.border-gray-700.p-1.rounded-sm.text-cyan-300.text-xs.w-full.placeholder-gray-800(
          type="number"
          v-model.number="newNPC.hp"
          placeholder="HP"
        )
    button.border.border-yellow-600.text-yellow-300.hover_bg-yellow-900_50.text-xs.font-bold.p-1.rounded-sm.col-span-2.mt-1(
      @click="addNPC"
    ) Add NPC

  // NPC List
  ul.flex-1.overflow-y-auto.space-y-1
    li.flex.justify-between.items-center.p-1.bg-black.border.border-gray-800.rounded-sm(
      v-for="n in npcs"
      :key="n.id"
    )
      div
        .font-bold.text-sm.text-gray-300.cursor-pointer.hover_text-cyan-300(
          v-if="editingId !== n.id || editingField !== 'name'"
          @click="startEdit(n, 'name')"
        ) {{ n.name }}
        input.bg-gray-900.text-white.text-xs.p-0_5.rounded-sm.w-32.border.border-gray-700(
          v-else-if="editingId === n.id && editingField === 'name'"
          v-model="editValue"
          @blur="saveEdit"
          @keyup.enter="saveEdit"
          ref="editInput"
        )
        .text-xs.text-cyan-900 NPC
      .text-right.text-xs.text-gray-400
        span.mr-2 AC: {{ n.ac }}
        span.cursor-pointer.hover_text-cyan-300.font-mono(
          v-if="editingId !== n.id || editingField !== 'hp'"
          @click="startEdit(n, 'hp')"
        ) HP: {{ n.hp }}/{{ n.maxHp }}
        input.bg-gray-900.text-white.text-xs.p-0_5.rounded-sm.w-12.border.border-gray-700(
          v-else-if="editingId === n.id && editingField === 'hp'"
          v-model="editValue"
          @blur="saveEdit"
          @keyup.enter="saveEdit"
          ref="editInput"
        )
        button.ml-2.text-red-600.hover_text-red-400(@click="remove(n.id)") ✕
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
    const editingField = ref(null)
    const editValue = ref('')
    
    const newNPC = reactive({
      name: '',
      ac: 10,
      hp: 10
    })

    const npcs = computed(() => {
      // Filter by active scene
      return store.entities.filter(e => 
        e.type === 'npc' && 
        (e.scene === store.activeScene || !e.scene)
      )
    })

    const addNPC = () => {
      if (!newNPC.name) return
      
      store.addEntity({
        ...newNPC,
        maxHp: newNPC.hp,
        type: 'npc'
      })
      
      // Reset form
      newNPC.name = ''
      newNPC.ac = 10
      newNPC.hp = 10
    }

    const startEdit = (npc, field) => {
      editingId.value = npc.id
      editingField.value = field
      editValue.value = npc[field]
      
      nextTick(() => {
        if (editInput.value && editInput.value[0]) {
          editInput.value[0].focus()
          if (field === 'name') {
            editInput.value[0].select()
          }
        }
      })
    }

    const saveEdit = () => {
      if (editingId.value === null) return

      const npc = store.entities.find(e => e.id === editingId.value)
      if (npc) {
        if (editingField.value === 'name') {
          if (editValue.value.trim()) {
            store.updateEntity(npc.id, { name: editValue.value.trim() })
          }
        } else if (editingField.value === 'hp') {
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
      }

      editingId.value = null
      editingField.value = null
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
