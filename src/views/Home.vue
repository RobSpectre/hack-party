<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/captain_morgan.mp4')
    Slide
      img.flex.justify-center.items-center(src='/images/will_smith.png')
      h1 You done messed up
    VideoSlide(background='/video/tammy_faye_cut.mp4')
      h2.text-white.text-9xl.monoton(style='margin-top: 24rem;') Apologizes For
      h3.text-white.text-6xl.poiret A game about forgiveness
    Slide
      h2.fragment Solo
      h2.fragment Presented with an apologetic headline
      h2.fragment Guess the reason why
      h2.fragment Closest wins
      h2.fragment Arbitrary bonus for funniest wrong answer
      h1 Rules
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Let's go!
    Slide(class='blue')
      h2.text-white Jason Momoa apologies for
      h2.text-white pictures inside ______ ______
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/jason_momoa.png')
    ChooseWinner(headerImage='/images/sorry1.jpg')
    Slide(class='blue')
      h2.text-white Pope apologizes for _____
      h2.text-white of __________ ________ in Canada's
      h2.text-white residential schools
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/pope.png')
    ChooseWinner(headerImage='/images/sorry1.jpg')
    Slide(class='blue')
      h2.text-white Lufthansa apologies for barring
      h2.text-white ______ passengers after mask dispute
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/lufthansa.png')
    ChooseWinner(headerImage='/images/sorry1.jpg')
    Slide(class='blue')
      h2.text-white The New York Times apologizes for
      h2.text-white featuring the word _____ on popular
      h2.text-white online game Wordle
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/wordle.png')
    ChooseWinner(headerImage='/images/sorry1.jpg')
    Slide(class='blue')
      h2.text-white Putin apologizes for Russian
      h2.text-white Foreign Minister's claims that
      h2.text-white Adolf Hitler had ______ _____
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/putin.png')
    ChooseWinner(headerImage='/images/sorry1.jpg')
    PlayerBoard
    VideoSlide(
      background='/video/viral_apology_video.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white 2x points!
    Slide(class='blue')
      h2.text-white Ulta Beauty apologizes for email
      h2.text-white with subject line
      h2.text-white "____ ____" with Kate Spade
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/ulta_beauty.png')
    ChooseWinner(:prize='2' headerImage='/images/sorry2.webp')
    Slide(class='blue')
      h2.text-white Canadian politician apologizes for
      h2.text-white participating in fraternity "_____ _______"
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/canadian_politician.png')
    ChooseWinner(:prize='2' headerImage='/images/sorry2.webp')
    Slide(class='blue')
      h2.text-white Supernatural actor Misha Collins apologies for
      h2.text-white claiming he was ________ at fan convention
    GameContentWithSidebar
      template(v-slot:content)
        Tweet(
          tweet-id='1517699906324074501'
          :width='550'
        )
    ChooseWinner(:prize='2' headerImage='/images/sorry2.webp')
    Slide(class='blue')
      h2.text-white Jane Campion apologizes for comments made about
      h2.text-white ____ and ______.
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/jane_campion.png')
    ChooseWinner(:prize='2' headerImage='/images/sorry2.webp')
    Slide(class='blue')
      h2.text-white US House Candidate apologies for
      h2.text-white behavior at _________
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/sleepover.png')
    ChooseWinner(:prize='2' headerImage='/images/sorry2.webp')
    PlayerBoard
    VideoSlide(
      background='/video/sorry.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Points are 3X!
    Slide(class='blue')
      h2.text-white New York Mayor Eric Adams apologizes for
      h2.text-white saying he "kicking those ______' _____"
      h2.text-white in 2019.
    VideoSlide(
      background='/video/eric_adams.mp4'
      :muted='false'
    )
    ChooseWinner(:prize='3' headerImage='/images/sorry.webp')
    Slide(class='blue')
      h2.text-white USC apologizes for offensive chant
      h2.text-white in game against BYU where crowd
      h2.text-white shouted ____ ___ _______
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/usc.png')
    ChooseWinner(:prize='3' headerImage='/images/sorry.webp')
    Slide(class='blue')
      h2.text-white California high school apologies for
      h2.text-white its football team's ____ to ____ victory
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/football.png')
    ChooseWinner(:prize='3' headerImage='/images/sorry.webp')
    Slide(class='blue')
      h2.text-white Pachinko star Jin Ha apologizes for
      h2.text-white his old ________ Tumblr
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/pachinko.png')
    ChooseWinner(:prize='3' headerImage='/images/sorry.webp')
    Slide(class='blue')
      h2.text-white South Dakota hockey team apologizes for
      h2.text-white making teachers ____ for ____
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/dashforcash.png')
    VideoSlide(
      background='/video/dash_for_cash.mp4'
      :muted='false'
    )
    ChooseWinner(:prize='3' headerImage='/images/sorry.webp')
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

import ChooseWinner from '@/components/Players/ChooseWinner.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'
import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

import Tweet from 'vue-tweet'

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
    ChooseWinner,
    GameContentWithSidebar,
    Tweet
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Monoton&family=Poiret+One&display=swap');

html {
  font-size: 36px;
}

.poiret {
  font-family: 'Poiret One', cursive !important;
}

.monoton {
  font-family: 'Monoton', cursive !important;
}
</style>
