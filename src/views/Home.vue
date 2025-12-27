<template lang="pug">
Reveal(@slide-changed="handleSlideChange")
  .slides
    DnDScene(name="ten_forward")
      template(v-slot:col1)
        InitiativeTracker
      template(v-slot:col2)
        Mobs
      template(v-slot:col3)
        PlayerTracker
      template(v-slot:col4)
        NPCs
      template(v-slot:col5)
        .flex.flex-col.gap-4.h-full
          QuickNotes.h-1_2
          Elements.h-1_2
            Element(label="Ten Forward" src="/docs/ten_forward.md")
    DnDScene(name="bridge")
      template(v-slot:col1)
        InitiativeTracker
      template(v-slot:col2)
        Mobs
      template(v-slot:col3)
        PlayerTracker
      template(v-slot:col4)
        NPCs
      template(v-slot:col5)
        .flex.flex-col.gap-4.h-full
          QuickNotes.h-1_2
          Elements.h-1_2
            Element(label="Bridge" src="/docs/bridge.md")
    DnDScene(name="away_party")
      template(v-slot:col1)
        InitiativeTracker
      template(v-slot:col2)
        Mobs
      template(v-slot:col3)
        PlayerTracker
      template(v-slot:col4)
        NPCs
      template(v-slot:col5)
        .flex.flex-col.gap-4.h-full
          QuickNotes.h-1_2
          Elements.h-1_2
            Element(label="Away Party" src="/docs/away_party.md")
    DnDScene(name="bridge_2")
      template(v-slot:col1)
        InitiativeTracker
      template(v-slot:col2)
        Mobs
      template(v-slot:col3)
        PlayerTracker
      template(v-slot:col4)
        NPCs
      template(v-slot:col5)
        .flex.flex-col.gap-4.h-full
          QuickNotes.h-1_2
          Elements.h-1_2
            Element(label="Bridge" src="/docs/bridge_2.md")
    DnDScene(name="space")
      template(v-slot:col1)
        InitiativeTracker
      template(v-slot:col2)
        Mobs
      template(v-slot:col3)
        PlayerTracker
      template(v-slot:col4)
        NPCs
      template(v-slot:col5)
        .flex.flex-col.gap-4.h-full
          QuickNotes.h-1_2
          Elements.h-1_2
            Element(label="Space" src="/docs/space.md")
    DnDScene(name="engineering")
      template(v-slot:col1)
        InitiativeTracker
      template(v-slot:col2)
        Mobs
      template(v-slot:col3)
        PlayerTracker
      template(v-slot:col4)
        NPCs
      template(v-slot:col5)
        .flex.flex-col.gap-4.h-full
          QuickNotes.h-1_2
          Elements.h-1_2
            Element(label="Engineering" src="/docs/engineering.md")
    DnDScene(name="hive_core")
      template(v-slot:col1)
        InitiativeTracker
      template(v-slot:col2)
        Mobs
      template(v-slot:col3)
        PlayerTracker
      template(v-slot:col4)
        NPCs
      template(v-slot:col5)
        .flex.flex-col.gap-4.h-full
          QuickNotes.h-1_2
          Elements.h-1_2
            Element(label="Hive Core" src="/docs/hive_core.md")
</template>

<script>
import Reveal from '@/components/base/Reveal.vue'

import DnDScene from '@/components/DnD/DnDScene.vue'
import StatBlock from '@/components/DnD/StatBlock.vue'
import InitiativeTracker from '@/components/DnD/InitiativeTracker.vue'
import QuickNotes from '@/components/DnD/QuickNotes.vue'
import PlayerTracker from '@/components/DnD/PlayerTracker.vue'
import Mobs from '@/components/DnD/Mobs.vue'
import NPCs from '@/components/DnD/NPCs.vue'
import Elements from '@/components/DnD/Elements.vue'
import Element from '@/components/DnD/Element.vue'
import { useCampaignStore } from '@/store/campaign'

/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Home',
  setup() {
    const store = useCampaignStore()
    
    // Set initial scene based on first slide or default
    store.setActiveScene('ten_forward')

    const handleSlideChange = (event) => {
      // Find the DnDScene component inside the current slide
      // Since DnDScene renders a section with data-scene, checking currentSlide dataset directly:
      const sceneName = event.currentSlide.dataset.scene
      if (sceneName) {
        store.setActiveScene(sceneName)
      }
    }

    return { handleSlideChange }
  },
  components: {
    Reveal,
    DnDScene,
    StatBlock,
    InitiativeTracker,
    QuickNotes,
    PlayerTracker,
    Mobs,
    NPCs,
    Elements,
    Element
  }
}
</script>

<style lang='scss'>
@import
url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=IBM+Plex+Mono&family=Fugaz+One&display=swap');

/* Emoji rendering improvements */
button .emoji,
.actionButton .emoji,
[data-emoji] {
  font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif !important;
  font-size: 1.3em;
  vertical-align: middle;
  margin: 0 0.2em;
}

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white uppercase tracking-tight text-shadow shadow-black #{!important};
}

.monotitle {
  font-family: 'IBM Plex Mono', monospace !important;
  @apply mt-72 text-9xl text-white uppercase tracking-tight text-shadow shadow-black #{!important};
}

.title {
  font-family: 'Fugaz One', monospace !important;
  @apply mt-72 text-9xl text-white uppercase tracking-tight text-shadow shadow-black #{!important};
}

html {
  font-size: 36px;
}
</style>
