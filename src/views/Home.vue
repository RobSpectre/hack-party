<template lang="pug">
Reveal
  .slides
    Title
    PlayerBoard
    DiffsquisiteCorpseRound(
      :hints='maga_hints'
    )
    DiffsquisiteCorpseRound(
      :hints='maga_hints'
    )
    DiffsquisiteCorpseRound(
      :hints='maga_hints'
    )
    DiffsquisiteCorpseRound(
      :hints='maga_hints'
    )
    PlayerBoard
    VideoSlide(
      background='/video/voldemort.mp4'
      :muted='false'
    )
    PlayerBoard
    DiffsquisiteCorpseRound(
      :hints='trek_hints'
      :prize='2'
    )
    DiffsquisiteCorpseRound(
      :hints='trek_hints'
      :prize='2'
    )
    DiffsquisiteCorpseRound(
      :hints='trek_hints'
      :prize='2'
    )
    DiffsquisiteCorpseRound(
      :hints='trek_hints'
      :prize='2'
    )
    PlayerBoard
    VideoSlide(
      background='/video/voldemort.mp4'
      :muted='false'
    )
    PlayerBoard
    DiffsquisiteCorpseRound(
      :hints='service_hints'
      :prize='3'
    )
    DiffsquisiteCorpseRound(
      :hints='service_hints'
      :prize='3'
    )
    DiffsquisiteCorpseRound(
      :hints='service_hints'
      :prize='3'
    )
    DiffsquisiteCorpseRound(
      :hints='service_hints'
      :prize='3'
    )
    PlayerBoard
</template>

<script>
import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import DiffsquisiteCorpseRound from '@/components/DiffsquisiteCorpse/DiffsquisiteCorpseRound.vue'

export default {
  name: 'Home',
  components: {
    PlayerBoard,
    Title,
    Slide,
    Reveal,
    BackgroundImageSlide,
    VideoSlide,
    ActionButton,
    GameVideo,
    DiffsquisiteCorpseRound
  },
  data () {
    return {
      maga_hints: null,
      trek_hints: null,
      service_hints: null
    }
  },
  async mounted () {
    this.maga_hints = await fetch('/data/maga.json').then(res => { return res.json() })
    this.trek_hints = await fetch('/data/trek.json').then(res => { return res.json() })
    this.service_hints = await fetch('/data/service.json').then(res => { return res.json() })
  }
}
</script>

<style lang='scss'>
html {
  font-size: 36px;
}
</style>
