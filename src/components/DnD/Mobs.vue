<template lang="pug">
.mobs-tracker.bg-gray-700.p-4.rounded.border.border-gray-600.h-full.flex.flex-col
  .flex.justify-between.items-center.mb-2
    h3.text-xl.font-bold Mobs
    button.bg-purple-600.hover_bg-purple-500.text-white.text-xs.font-bold.px-2.py-1.rounded(
      @click="rollAllInitiative"
    ) Roll Init
  
  // Add Mob Form
  .mb-4.grid.grid-cols-2.gap-2
    .col-span-2
      label.block.text-xs.font-bold.mb-1.text-gray-400 Name
      input.bg-gray-800.p-1.rounded.text-white.text-sm.w-full(
        v-model="newMob.name"
        placeholder="Name"
      )
    .col-span-2.grid.grid-cols-3.gap-2
      div
        label.block.text-xs.font-bold.mb-1.text-gray-400 AC
        input.bg-gray-800.p-1.rounded.text-white.text-sm.w-full(
          type="number"
          v-model.number="newMob.ac"
          placeholder="AC"
        )
      div
        label.block.text-xs.font-bold.mb-1.text-gray-400 HP
        input.bg-gray-800.p-1.rounded.text-white.text-sm.w-full(
          type="number"
          v-model.number="newMob.hp"
          placeholder="HP"
        )
      div
        label.block.text-xs.font-bold.mb-1.text-gray-400 Init
        input.bg-gray-800.p-1.rounded.text-white.text-sm.w-full(
          type="number"
          v-model.number="newMob.initiative"
          placeholder="Init"
        )
    button.bg-red-600.hover_bg-red-500.text-white.font-bold.p-1.rounded.col-span-2(
      @click="addMob"
    ) Add Mob

  // Mob List
  ul.flex-1.overflow-y-auto
    li.flex.justify-between.items-center.p-2.mb-1.bg-gray-800.rounded(
      v-for="m in mobs"
      :key="m.id"
    )
      div
        .font-bold {{ m.name }}
        .text-xs.text-gray-400 Init: {{ m.initiative }}
      .text-right.text-sm
        span.mr-2 AC: {{ m.ac }}
        span.cursor-pointer.hover_text-blue-300(
          v-if="editingId !== m.id"
          @click="startEdit(m)"
        ) HP: {{ m.hp }}/{{ m.maxHp }}
        input.bg-gray-900.text-white.text-xs.p-1.rounded.w-16(
          v-else
          v-model="editValue"
          @blur="saveEdit"
          @keyup.enter="saveEdit"
          ref="editInput"
        )
        button.ml-2.text-red-400.hover_text-red-300(@click="remove(m.id)") ✕
</template>

<script>
import { useCampaignStore } from '@/store/campaign'
import { computed, reactive, ref, nextTick } from 'vue'

export default {
  name: 'MobsTracker',
  setup () {
    const store = useCampaignStore()
    const editInput = ref(null)
    const editingId = ref(null)
    const editValue = ref('')
    
    const newMob = reactive({
      name: '',
      ac: 12,
      hp: 10,
      initiative: 10
    })

    const mobs = computed(() => {
      return store.entities.filter(e => {
        return e.type === 'enemy' && (e.scene === store.activeScene || !e.scene)
      })
    })

    const addMob = () => {
      if (!newMob.name) return
      
      store.addEntity({
        name: newMob.name,
        ac: newMob.ac,
        hp: newMob.hp,
        maxHp: newMob.hp,
        initiative: newMob.initiative,
        type: 'enemy'
      })
      
      // Reset form (keep stats for quick multi-add)
      newMob.name = ''
    }
    
    const startEdit = (mob) => {
      editingId.value = mob.id
      editValue.value = mob.hp
      nextTick(() => {
        if (editInput.value && editInput.value[0]) {
          editInput.value[0].focus()
          editInput.value[0].select()
        }
      })
    }

    const saveEdit = () => {
      if (editingId.value === null) return

      const mob = store.entities.find(e => e.id === editingId.value)
      if (mob) {
        const valStr = String(editValue.value).trim()
        let newHp = mob.hp

        if (valStr.startsWith('+') || valStr.startsWith('-')) {
          newHp = mob.hp + parseInt(valStr)
        } else {
          const parsed = parseInt(valStr)
          if (!isNaN(parsed)) {
            newHp = parsed
          }
        }
        
        store.updateEntity(mob.id, { hp: newHp })
      }

      editingId.value = null
      editValue.value = ''
    }

    const remove = (id) => {
      if (confirm('Remove this mob?')) {
        store.removeEntity(id)
      }
    }
    
    const rollAllInitiative = () => {
      mobs.value.forEach(mob => {
        const roll = Math.floor(Math.random() * 20) + 1
        store.updateEntity(mob.id, { initiative: roll })
      })
    }

    return { 
      newMob, 
      mobs, 
      addMob, 
      remove,
      editingId,
      editValue,
      editInput,
      startEdit,
      saveEdit,
      rollAllInitiative
    }
  }
}
</script>
