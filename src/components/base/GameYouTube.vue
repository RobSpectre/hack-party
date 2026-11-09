<template lang="pug">
GameSlide
  PlayersSidebar(:players='players')
  GameContent
    template(v-slot:content)
      .flex.h-full.w-full.items-center.justify-center
        iframe.game-youtube(
          :data-src='embedUrl'
          :title='title || "YouTube video"'
          allow='autoplay; encrypted-media; picture-in-picture'
          allowfullscreen
        )
    template(v-slot:footer)
      h1(v-if='title') {{ title }}
      slot(name='footer')
</template>

<script>
import { mapGetters } from 'pinia'
import { useGameStore } from '@/store'

import GameSlide from '@/components/base/GameSlide.vue'
import GameContent from '@/components/base/GameContent.vue'
import PlayersSidebar from '@/components/Players/PlayersSidebar.vue'

// Plays a YouTube video on a slide. reveal.js loads the iframe from data-src
// when the slide comes up and unloads it when you move on, so a video never
// keeps playing behind the next slide.
export default {
  name: 'GameYouTube',
  components: {
    GameSlide,
    GameContent,
    PlayersSidebar
  },
  props: {
    // A YouTube video id, e.g. 'dQw4w9WgXcQ'.
    video: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: undefined
    },
    // Seconds to start at.
    start: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters(useGameStore, ['getPlayersByScore']),
    players () {
      const players = this.getPlayersByScore

      players.forEach((player) => {
        player.value = player.score
      })

      return players
    },
    embedUrl () {
      const params = new URLSearchParams({ autoplay: '1', rel: '0', modestbranding: '1' })
      if (this.start > 0) params.set('start', String(this.start))
      return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.video)}?${params}`
    }
  }
}
</script>

<style scoped>
.game-youtube {
  width: min(100%, calc(70vh * 16 / 9));
  aspect-ratio: 16 / 9;
  border: 0;
}
</style>
