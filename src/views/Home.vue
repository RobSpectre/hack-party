<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/re.mp4')
      .title Raise The Dead
    Slide
      h2.fragment Solo
      h2.fragment A large language model will impersonate a famous dead writer
      h2.fragment Ask questions to uncover who the model is impersonating
      h2.fragment You cannot ask the same question twice
      h2.fragment Person who gets the model to confirm identity wins
      h2.fragment Clever questions get bonus points
      h1 Game Play
    PlayerBoard
    Scoreboard(
      question='Who identified the writer?'
      :prize='1'
    )
    PlayerBoard
    VideoSlide(
      background='/video/doucheoff.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Points are 2x!
    Scoreboard(
      question='Who identified the writer?'
      :prize='2'
    )
    PlayerBoard
    VideoSlide(
      background='/video/totk.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Points are 3x!
    Scoreboard(
      question='Who identified the writer?'
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
import Scoreboard from '../components/Scoreboard/Scoreboard.vue'

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
    Scoreboard
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Creepster&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Creepster', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
