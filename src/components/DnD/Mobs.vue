<template lang="pug">
.mobs-tracker.bg-gray-900.bg-opacity-90.p-2.border.border-cyan-900.h-full.flex.flex-col.shadow-lg.shadow-cyan-900_20
  .flex.justify-between.items-center.mb-2.border-b.border-cyan-900.pb-1
    h3.text-cyan-400.uppercase.tracking-widest.text-xs.font-bold Mobs
    button.border.border-purple-500.text-purple-300.hover_bg-purple-900_50.text-xs.font-bold.px-2.py-0_5.rounded-sm(
      @click="rollAllInitiative"
    ) Roll Init
  
  // Add Mob Form
  .mb-2.grid.grid-cols-2.gap-1
    .col-span-2
      label.block.text-xs.font-bold.mb-0_5.text-cyan-700 Name
      input.bg-black.border.border-gray-700.p-1.rounded-sm.text-cyan-300.text-xs.w-full.placeholder-gray-800(
        v-model="newMob.name"
        placeholder="Name"
      )
    .col-span-2.grid.grid-cols-3.gap-1
      div
        label.block.text-xs.font-bold.mb-0_5.text-cyan-700 AC
        input.bg-black.border.border-gray-700.p-1.rounded-sm.text-cyan-300.text-xs.w-full.placeholder-gray-800(
          type="number"
          v-model.number="newMob.ac"
          placeholder="AC"
        )
      div
        label.block.text-xs.font-bold.mb-0_5.text-cyan-700 HP
        input.bg-black.border.border-gray-700.p-1.rounded-sm.text-cyan-300.text-xs.w-full.placeholder-gray-800(
          type="number"
          v-model.number="newMob.hp"
          placeholder="HP"
        )
      div
        label.block.text-xs.font-bold.mb-0_5.text-cyan-700 Init
        input.bg-black.border.border-gray-700.p-1.rounded-sm.text-cyan-300.text-xs.w-full.placeholder-gray-800(
          type="number"
          v-model.number="newMob.initiative"
          placeholder="Init"
        )
    button.border.border-red-600.text-red-400.hover_bg-red-900_50.text-xs.font-bold.p-1.rounded-sm.col-span-2.mt-1(
      @click="addMob"
    ) Add Mob

  // Mob List
  ul.flex-1.overflow-y-auto.space-y-1
    li.flex.justify-between.items-center.p-1.bg-black.border.border-gray-800.rounded-sm(
      v-for="m in mobs"
      :key="m.id"
    )
      div
        .font-bold.text-sm.text-gray-300.cursor-pointer.hover_text-cyan-300(
          v-if="editingId !== m.id || editingField !== 'name'"
          @click="startEdit(m, 'name')"
        ) {{ m.name }}
        input.bg-gray-900.text-white.text-xs.p-0_5.rounded-sm.w-32.border.border-gray-700(
          v-else-if="editingId === m.id && editingField === 'name'"
          v-model="editValue"
          @blur="saveEdit"
          @keyup.enter="saveEdit"
          ref="editInput"
        )
        .text-xs.text-gray-600 Init: {{ m.initiative }}
      .text-right.text-xs.text-gray-400
        span.mr-2 AC: {{ m.ac }}
        span.cursor-pointer.hover_text-cyan-300.font-mono(
          v-if="editingId !== m.id || editingField !== 'hp'"
          @click="startEdit(m, 'hp')"
          :class="getHpClass(m)"
        ) HP: {{ m.hp }}/{{ m.maxHp }}
        input.bg-gray-900.text-white.text-xs.p-0_5.rounded-sm.w-12.border.border-gray-700(
          v-else-if="editingId === m.id && editingField === 'hp'"
          v-model="editValue"
          @blur="saveEdit"
          @keyup.enter="saveEdit"
          ref="editInput"
        )
        button.ml-2.text-red-600.hover_text-red-400(@click="remove(m.id)") ✕
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
    const editingField = ref(null)
    const editValue = ref('')
    
    const newMob = reactive({
      name: '',
      ac: 10,
      hp: 10,
      initiative: 0
    })

    const mobs = computed(() => {
      // Filter by active scene
      return store.entities.filter(e => 
        e.type === 'enemy' && 
        (e.scene === store.activeScene || !e.scene)
      )
    })

    const addMob = () => {
      if (!newMob.name) return
      
      store.addEntity({
        ...newMob,
        maxHp: newMob.hp,
        type: 'enemy'
      })
      
      // Reset form (keep initiative spread or reset? Let's reset)
      newMob.name = ''
      newMob.ac = 10
      newMob.hp = 10
      newMob.initiative = 0
    }
    
    const startEdit = (mob, field) => {
      editingId.value = mob.id
      editingField.value = field
      editValue.value = mob[field]
      
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

      const mob = store.entities.find(e => e.id === editingId.value)
      if (mob) {
        if (editingField.value === 'name') {
          if (editValue.value.trim()) {
            store.updateEntity(mob.id, { name: editValue.value.trim() })
          }
        } else if (editingField.value === 'hp') {
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
      }

      editingId.value = null
      editingField.value = null
      editValue.value = ''
    }

    const getHpClass = (mob) => {
      const ratio = mob.hp / mob.maxHp
      if (ratio <= 0.25) return 'text-red-500 font-bold'
      if (ratio <= 0.5) return 'text-yellow-500'
      return 'text-green-500'
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
      rollAllInitiative,
      getHpClass
    }
  }
}
</script>
