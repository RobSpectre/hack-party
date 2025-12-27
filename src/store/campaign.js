import { defineStore } from 'pinia'

export const useCampaignStore = defineStore('campaign', {
  state: () => ({
    activeScene: 'default',
    entities: [
      { id: 1, name: 'Goblin Skirmisher', hp: 7, maxHp: 7, ac: 15, initiative: 12, type: 'enemy' },
      { id: 2, name: 'Paladin Hero', hp: 32, maxHp: 32, ac: 18, initiative: 8, type: 'ally' }
    ],
    initiative: [],
    logs: [],
    notes: ''
  }),

  actions: {
    addLog(entry) {
      const timestamp = new Date().toLocaleTimeString()
      this.logs.unshift(`[${timestamp}] ${entry}`)
    },

    rollDice(d) {
      const result = Math.floor(Math.random() * d) + 1
      this.addLog(`Rolled d${d}: ${result}`)
      return result
    },

    addEntity(entity) {
      const newId = Math.max(...this.entities.map(e => e.id), 0) + 1
      const scene = entity.type === 'ally' ? 'global' : this.activeScene
      this.entities.push({ ...entity, id: newId, scene })
      this.addLog(`Added entity: ${entity.name}`)
    },

    removeEntity(id) {
      const index = this.entities.findIndex(e => e.id === id)
      if (index !== -1) {
        const name = this.entities[index].name
        this.entities.splice(index, 1)
        this.addLog(`Removed entity: ${name}`)
      }
    },

    updateEntity(id, updates) {
      const entity = this.entities.find(e => e.id === id)
      if (entity) {
        Object.assign(entity, updates)
      }
    },

    setInitiative(order) {
      this.initiative = order
    },

    setActiveScene(sceneName) {
      this.activeScene = sceneName
      this.addLog(`Scene switched to: ${sceneName}`)
    },

    updateNotes(newNotes) {
      this.notes = newNotes
    }
  },

  persist: true
})
