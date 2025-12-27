<template lang="pug">
.player-tracker.bg-gray-900.bg-opacity-90.p-2.border.border-cyan-900.h-full.flex.flex-col.shadow-lg.shadow-cyan-900_20
  h3.text-cyan-400.uppercase.tracking-widest.text-xs.font-bold.border-b.border-cyan-900.mb-2.pb-1 Players
  
  // Add Player Form
  .mb-2.grid.grid-cols-2.gap-1
    div
      label.block.text-xs.font-bold.mb-0_5.text-cyan-700 Name
      input.bg-black.border.border-gray-700.p-1.rounded-sm.text-cyan-300.text-xs.w-full.placeholder-gray-800(
        v-model="newPlayer.name"
        placeholder="Name"
      )
    div
      label.block.text-xs.font-bold.mb-0_5.text-cyan-700 Class
      input.bg-black.border.border-gray-700.p-1.rounded-sm.text-cyan-300.text-xs.w-full.placeholder-gray-800(
        v-model="newPlayer.class"
        placeholder="Class/Role"
      )
    .col-span-2.grid.grid-cols-2.gap-1
      div
        label.block.text-xs.font-bold.mb-0_5.text-cyan-700 AC
        input.bg-black.border.border-gray-700.p-1.rounded-sm.text-cyan-300.text-xs.w-full.placeholder-gray-800(
          type="number"
          v-model.number="newPlayer.ac"
          placeholder="AC"
        )
      div
        label.block.text-xs.font-bold.mb-0_5.text-cyan-700 HP
        input.bg-black.border.border-gray-700.p-1.rounded-sm.text-cyan-300.text-xs.w-full.placeholder-gray-800(
          type="number"
          v-model.number="newPlayer.hp"
          placeholder="HP"
        )
    button.border.border-green-600.text-green-400.hover_bg-green-900_50.text-xs.font-bold.p-1.rounded-sm.mt-1(
      @click="addPlayer"
    ) Add Player

  // Player List
  ul.flex-1.overflow-y-auto.space-y-1.mt-1
    li.flex.justify-between.items-center.p-1.bg-black.border.border-gray-800.rounded-sm(
      v-for="p in players"
      :key="p.id"
    )
      div
        .font-bold.text-sm.text-gray-300 {{ p.name }}
        .text-xs.text-cyan-900 {{ p.class }}
      .text-right.text-xs.text-gray-400.flex.items-center.gap-1.justify-end
        span.mr-1 AC: {{ p.ac }}
        // HP Controls
        button.text-red-500.hover_bg-red-900_30.px-1.rounded-sm(@click.stop="updateHp(p, -1)") -
        span.cursor-pointer.hover_text-cyan-300.font-mono.mx-1(
          v-if="editingId !== p.id"
          @click="startEdit(p)"
          :class="getHpClass(p)"
        ) {{ p.hp }}/{{ p.maxHp }}
        input.bg-gray-900.text-white.text-xs.p-0_5.rounded-sm.w-12.border.border-gray-700(
          v-else
          v-model="editValue"
          @blur="saveEdit"
          @keyup.enter="saveEdit"
          ref="editInput"
        )
        button.text-green-500.hover_bg-green-900_30.px-1.rounded-sm(@click.stop="updateHp(p, 1)") +
        button.ml-2.text-red-600.hover_text-red-400(@click="remove(p.id)") ✕
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

    const updateHp = (player, amount) => {
      const newHp = player.hp + amount
      store.updateEntity(player.id, { hp: newHp })
    }

    const getHpClass = (player) => {
      const ratio = player.hp / player.maxHp
      if (ratio <= 0.25) return 'text-red-500 font-bold'
      if (ratio <= 0.5) return 'text-yellow-500'
      return 'text-green-500'
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
      saveEdit,
      updateHp,
      getHpClass
    }
  }
}
</script>
