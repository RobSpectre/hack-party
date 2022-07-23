<template lang="pug">
Reveal
  .slides
    Title
    PlayerBoard
    Slide(class="darkgray")
      h2.text-white Video Game Characters
    LasikRacingRound(
      src='/images/mario.png'
      :answer="{ name: 'Mario', value: 'the character' }"
    )
    LasikRacingRound(
      src='/images/pikachu.png'
      :answer="{ name: 'Pikachu', value: 'the character' }"
    )
    LasikRacingRound(
      src='/images/pacman.webp'
      :answer="{ name: 'Pac-man', value: 'the character' }"
    )
    LasikRacingRound(
      src='/images/snooty.png'
      :answer="{ name: 'Snooty', value: 'the character' }"
    )
    LasikRacingRound(
      src='/images/peach.png'
      :answer="{ name: 'Princess Peach', value: 'the character' }"
    )
    LasikRacingRound(
      src='/images/jules.png'
      :answer="{ name: 'Jules', value: 'the character' }"
    )
    LasikRacingRound(
      src='/images/link.webp'
      :answer="{ name: 'Link', value: 'the character' }"
    )
    LasikRacingRound(
      src='/images/steve.png'
      :answer="{ name: 'Steve', value: 'the character' }"
    )
    LasikRacingRound(
      src='/images/bowser.png'
      :answer="{ name: 'Bowser', value: 'the character' }"
    )
    LasikRacingRound(
      src='/images/sonic.png'
      :answer="{ name: 'Sonic the Hedgehog', value: 'the character' }"
    )
    PlayerBoard
    PlayerBoard
    Slide(class="darkgray")
      h2.text-white Animated Villains
    LasikRacingRound(
      src='/images/ursula.png'
      :answer="{ name: 'Ursula', value: 'the villain' }"
      :prize='2'
    )
    LasikRacingRound(
      src='/images/gru.png'
      :answer="{ name: 'Gru', value: 'the villain' }"
      :prize='2'
    )
    LasikRacingRound(
      src='/images/cruella.png'
      :answer="{ name: 'Cruella', value: 'the villain' }"
      :prize='2'
    )
    LasikRacingRound(
      src='/images/syndrome.webp'
      :answer="{ name: 'Syndrome', value: 'the villain' }"
      :prize='2'
    )
    LasikRacingRound(
      src='/images/lotso.webp'
      :answer="{ name: 'Lotso', value: 'the villain' }"
      :prize='2'
    )
    LasikRacingRound(
      src='/images/farquaad.webp'
      :answer="{ name: 'Lord Farquaad', value: 'the villain' }"
      :prize='2'
    )
    LasikRacingRound(
      src='/images/scar.png'
      :answer="{ name: 'Scar', value: 'the villain' }"
      :prize='2'
    )
    LasikRacingRound(
      src='/images/shredder.png'
      :answer="{ name: 'Shredder', value: 'the villain' }"
      :prize='2'
    )
    PlayerBoard
    PlayerBoard
    Slide(class="darkgray")
      h2.text-white Grownups
    LasikRacingRound(
      src='/images/curly.jpg'
      :answer="{ name: 'Mama Erica', value: ' the grownup' }"
      :prize='3'
      :initialBlur='24'
    )
    LasikRacingRound(
      src='/images/aaron.jpg'
      :answer="{ name: 'Papa Aaron', value: ' the grownup' }"
      :prize='3'
      :initialBlur='24'
    )
    LasikRacingRound(
      src='/images/andrew.jpg'
      :answer="{ name: 'Papa Andrew', value: ' the grownup' }"
      :prize='3'
      :initialBlur='24'
    )
    LasikRacingRound(
      src='/images/diane.jpg'
      :answer="{ name: 'Mama Diane', value: ' the grownup' }"
      :prize='3'
      :initialBlur='24'
    )
    LasikRacingRound(
      src='/images/rob.jpg'
      :answer="{ name: 'Uncle Rob', value: ' the grownup' }"
      :prize='3'
      :initialBlur='24'
    )
    LasikRacingRound(
      src='/images/megan.jpg'
      :answer="{ name: 'Mama Megan', value: ' the grownup' }"
      :prize='3'
      :initialBlur='24'
    )
    LasikRacingRound(
      src='/images/michael.jpg'
      :answer="{ name: 'Papa Michael', value: ' the grownup' }"
      :prize='3'
      :initialBlur='24'
    )
    LasikRacingRound(
      src='/images/marilyn.jpg'
      :answer="{ name: 'Grandma Marilyn', value: ' the grownup' }"
      :prize='3'
      :initialBlur='24'
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

import LasikRacingRound from '@/components/LasikRacing/LasikRacingRound.vue'

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
    LasikRacingRound
  }
}
</script>

<style lang='scss'>
html {
  font-size: 36px;
}
</style>
