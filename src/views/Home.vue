<template lang="pug">
Reveal
  .slides
    Title
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
      h2.text-white Chick-fil-A apologizes for tweet some say was _____ _____
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/chickfila_article.png')
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/chickfila_tweet.png')
    ChooseWinner(headerImage='/images/sorry1.jpg')
    Slide(class='blue')
      h2.text-white Nursing home hires _____ for veterans,
      h2.text-white apologizes for fiery _____ _____
    GameContentWithSidebar
      template(v-slot:content)
        a(href='https://www.tmz.com/2022/09/14/nursing-home-stripper-veterans-taiwan-apology-lapdance/')
          img(src='/images/nursing_home_stripper.png')
    ChooseWinner(headerImage='/images/sorry1.jpg')
    Slide(class='blue')
      h2.text-white Britney Spears Apologizes for That Weird Post _____ _____ing
      h2.text-white Christina Aguilera's Back-up Dancers
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/britney_fat_shame.png')
    ChooseWinner(headerImage='/images/sorry2.webp')
    Slide(class='blue')
      h2.text-white The Bachelorette Contestant Erich Schwer Apologizes For _____ _____From High School
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/bachelorette.png')
    ChooseWinner(headerImage='/images/sorry2.webp')
    Slide(class='blue')
      h2.text-white Dungeons & Dragons publisher apologizes for _____ _____ in Spelljammer
    GameContentWithSidebar
      template(v-slot:content)
      img(src='/images/wizards.png')
    ChooseWinner(headerImage='/images/sorry2.webp')
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/queen_hoon.mp4')
    CelebrityGuess(
      celebrity="Record reign length?"
      image='/images/queen.png'
      :price='7'
      :prize='3'
      question='How much longer did Queen Elizabeth reign than the next longest monarch?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/beetlejuice.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='blue')
      h2.text-white Nathaniel Hackett apologizes for Broncos’ _____ in Buffalo
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/broncos.png')
    ChooseWinner(
      headerImage='/images/sorry2.webp'
      :prize='2'
    )
    Slide(class='blue')
      h2.text-white Texas church apologizes for 'unauthorized' 'Hamilton' play comparing being ____ to _____ _____
    GameContentWithSidebar
      template(v-slot:content)
        a(href='https://www.nbcnews.com/news/latino/texas-church-apologizes-unauthorized-hamilton-play-comparing-gay-drug-rcna44611')
          img(src='/images/hamilton.png')
    ChooseWinner(
      headerImage='/images/sorry2.webp'
      :prize='2'
    )
    Slide(class='blue')
      h2.text-white Podcast Movement Apologizes For Ben Shapiro _____
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/podcast_movement.png')
    ChooseWinner(
      headerImage='/images/sorry2.webp'
      :prize='2'
    )
    Slide(class='blue')
      h2.text-white Finland’s leader apologizes for _____ _____ at summer home
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/party_photo.png')
    ChooseWinner(
      headerImage='/images/sorry2.webp'
      :prize='2'
    )
    Slide(class='blue')
      h2.text-white A Madison alderman apologizes for _____ _____ _____ in blog post
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/oathkeepers.png')
    ChooseWinner(
      headerImage='/images/sorry2.webp'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/queen_hoon.mp4')
    CelebrityGuess(
      celebrity="How many popes?"
      image='/images/queen.png'
      :price='5'
      :prize='5'
      question='How many popes did Queen Elizabeth meet?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/still_alive.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='blue')
      h2.text-white An Alabama GOP county chair apologizes for posting an _____ logo with _____ imagery.
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/elephant.png')
    ChooseWinner(
      headerImage='/images/sorry2.webp'
      :prize='3'
    )
    Slide(class='blue')
      h2.text-white CEO Joe Marsh apologizes for calling this T1 player a _____ _____.
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/thirst_trap.png')
    ChooseWinner(
      headerImage='/images/sorry2.webp'
      :prize='3'
    )
    Slide(class='blue')
      h2.text-white Justin Timberlake apologizes for _____ _____ in khakis
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/timberlake.png')
    ChooseWinner(
      headerImage='/images/sorry2.webp'
      :prize='3'
    )
    Slide(class='blue')
      h2.text-white Jill Biden apologizes for comparing Hispanic people to _____ _____
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/jill_biden.png')
    ChooseWinner(
      headerImage='/images/sorry2.webp'
      :prize='3'
    )
    Slide(class='blue')
      h2.text-white Japan PM apologizes for party’s _____ _____, will cut ties
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/japan.png')
    ChooseWinner(
      headerImage='/images/sorry2.webp'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/queen_hoon.mp4')
    CelebrityGuess(
      celebrity="How many bailed?"
      image='/images/queen.png'
      :price='22'
      :prize='10'
      question="How many colonies left the UK during Queen Elizabeth's reign?"
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
    GameVideo
  }
}
</script>

<style lang='scss'>
@import
url('https://fonts.googleapis.com/css2?family=Monoton&family=Poiret+One&family=Press+Start+2P&display=swap');
html {
  font-size: 36px;
}

.poiret {
  font-family: 'Poiret One', cursive !important;
}

.monoton {
  font-family: 'Monoton', cursive !important;
}

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
}
</style>
