<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/code.mp4')
    VideoSlide(background='/video/code.mp4')
      .title BadGPT
    Slide
      h2.fragment Solo
      h2.fragment You will be presented with an AI model
      h2.fragment It is trained to behave like a classic movie villain
      h2.fragment Ask questions to learn more about who the model is emulating
      h2.fragment Everyone can ask as many questions as they want...
      h2.fragment ...but each question can only be asked once
      h2.fragment To win, ask the model by name
      h1 Game Play
    PlayerBoard
    Scoreboard
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='blue')
      h2.text-white GO FIND TROLLS!
      AudioPlayer(src='/sounds/baby_shark_metal.mp3')
    PlayerBoard
    Scoreboard
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='blue')
      h2.text-white Get a grown up to count how many times you can jump to this song.
      AudioPlayer(src='/sounds/jump_around_clean.mp3')
    PlayerBoard
    Scoreboard
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

import Scoreboard from '@/components/Scoreboard/Scoreboard.vue'

import AudioPlayer from '@/components/AuctionEar/AudioPlayer.vue'

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
    Scoreboard,
    AudioPlayer
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Tektur&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-32 text-9xl text-white #{!important};
}

.title {
  font-family: 'Tektur', cursive !important;
  @apply mt-32 text-9xl  text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
