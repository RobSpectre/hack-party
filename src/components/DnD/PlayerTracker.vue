<template lang="pug">
.player-tracker.bg-gray-700.p-4.rounded.border.border-gray-600.h-full.flex.flex-col
  h3.text-xl.font-bold.mb-2 Player Tracker
  
  // Add Player Form
  .mb-4.grid.grid-cols-2.gap-2
    div
      label.block.text-xs.font-bold.mb-1.text-gray-400 Name
      input.bg-gray-800.p-1.rounded.text-white.text-sm.w-full(
        v-model="newPlayer.name"
        placeholder="Name"
      )
    div
      label.block.text-xs.font-bold.mb-1.text-gray-400 Class
      input.bg-gray-800.p-1.rounded.text-white.text-sm.w-full(
        v-model="newPlayer.class"
        placeholder="Class/Role"
      )
    .col-span-2.grid.grid-cols-2.gap-2
      div
        label.block.text-xs.font-bold.mb-1.text-gray-400 AC
        input.bg-gray-800.p-1.rounded.text-white.text-sm.w-full(
          type="number"
          v-model.number="newPlayer.ac"
          placeholder="AC"
        )
      div
        label.block.text-xs.font-bold.mb-1.text-gray-400 HP
        input.bg-gray-800.p-1.rounded.text-white.text-sm.w-full(
          type="number"
          v-model.number="newPlayer.hp"
          placeholder="HP"
        )
    button.bg-green-600.hover_bg-green-500.text-white.font-bold.p-1.rounded(
      @click="addPlayer"
    ) Add Player

  // Player List
  ul.flex-1.overflow-y-auto
    li.flex.justify-between.items-center.p-2.mb-1.bg-gray-800.rounded(
      v-for="p in players"
      :key="p.id"
    )
      div
        .font-bold {{ p.name }}
        .text-xs.text-gray-400 {{ p.class }}
      .text-right.text-sm
        span.mr-2 AC: {{ p.ac }}
        span.cursor-pointer.hover_text-blue-300(
          v-if="editingId !== p.id"
          @click="startEdit(p)"
        ) HP: {{ p.hp }}/{{ p.maxHp }}
        input.bg-gray-900.text-white.text-xs.p-1.rounded.w-16(
          v-else
          v-model="editValue"
          @blur="saveEdit"
          @keyup.enter="saveEdit"
          ref="editInput"
        )
        button.ml-2.text-red-400.hover_text-red-300(@click="remove(p.id)") ✕
</template>

<script>
import { useCampaignStore } from '@/store/campaign'
import { computed, reactive, ref, nextTick } from 'vue'

export default {
  name: 'PlayerTracker',
  setup () {
    const store = useCampaignStore()
    const editInput = ref(null)
    const editingId = ref(null)
    const editValue = ref('')
    
    const newPlayer = reactive({
      name: '',
      class: '',
      ac: 10,
      hp: 10
    })

    const players = computed(() => store.entities.filter(e => e.type === 'ally'))

    const addPlayer = () => {
      if (!newPlayer.name) return
      
      store.addEntity({
        name: newPlayer.name,
        class: newPlayer.class, // Storing class for flavor
        ac: newPlayer.ac,
        hp: newPlayer.hp,
        maxHp: newPlayer.hp,
        initiative: 0,
        type: 'ally'
      })
      
      // Reset form
      newPlayer.name = ''
      newPlayer.class = ''
      newPlayer.ac = 10
      newPlayer.hp = 10
      newPlayer.hp = 10
    }

    const startEdit = (player) => {
      editingId.value = player.id
      editValue.value = player.hp
      nextTick(() => {
        if (editInput.value && editInput.value[0]) {
          editInput.value[0].focus()
          editInput.value[0].select()
        }
      })
    }

    const saveEdit = () => {
      if (editingId.value === null) return

      const player = store.entities.find(e => e.id === editingId.value)
      if (player) {
        const valStr = String(editValue.value).trim()
        let newHp = player.hp

        if (valStr.startsWith('+') || valStr.startsWith('-')) {
          newHp = player.hp + parseInt(valStr)
        } else {
          const parsed = parseInt(valStr)
          if (!isNaN(parsed)) {
            newHp = parsed
          }
        }
        
        store.updateEntity(player.id, { hp: newHp })
      }

      editingId.value = null
      editValue.value = ''
    }

    const remove = (id) => {
      if (confirm('Remove this player?')) {
        store.removeEntity(id)
      }
    }

    return { 
      newPlayer, 
      players, 
      addPlayer, 
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
