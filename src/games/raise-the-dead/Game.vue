<template lang="pug">
Reveal
  .slides
    GameTitle
    VideoSlide(background='/games/raise-the-dead/video/re.mp4')
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
      background='/games/raise-the-dead/video/doucheoff.mp4'
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
      background='/games/raise-the-dead/video/totk.mp4'
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
import GameTitle from '@/components/base/GameTitle.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'
import Scoreboard from '@/components/Scoreboard/Scoreboard.vue'

export default {
  name: 'RaiseTheDeadGame',
  components: {
    PlayerBoard,
    GameTitle,
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
@reference '../../assets/styles/tailwind.css';
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Creepster&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72! text-9xl! text-white!;
}

.title {
  font-family: 'Creepster', cursive !important;
  @apply mt-72! text-9xl! text-white!;
}

html {
  font-size: 36px;
}
</style>
