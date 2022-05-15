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
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/dylan.mp4')
    Slide
      h2.fragment Solo
      h2.fragment Present with something someone lost
      h2.fragment Guess how many Dylans it cost
      h2.fragment Price is Right rules
      h2.fragment 3 points
      h2.fragment 2x for dead one
      h1 Rules
    GameContentWithSidebar
      template(v-slot:header)
        h2.fragment This is a beautiful Italian property
        h2.fragment Owned by Dmitry Mazepin
        h2.fragment Son is former F1 driver Nikita Mazepin
        h2.fragment Seized by Italian authorities after Ukrainian invasion
      template(v-slot:content)
        img.fragment(src='/images/mazepin_villa.png')
      template(v-slot:footer)
        h1.fragment Mazepin's Italian Villa
    CelebrityGuess(
      celebrity="Mazepin's Sardinian Villa"
      image='/images/mazepin_villa.png'
      :price='0.25'
      :prize='3'
    )
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
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    GameContentWithSidebar
      template(v-slot:header)
        h2.fragment Eclipsed all other business news this week
        h2.fragment Elon claimed deal is "on hold"
        h2.fragment Wriggling out of a breakup fee
      template(v-slot:content)
        img.fragment(src='/images/elon.png')
      template(v-slot:footer)
        h1.fragment Twitter breakup fee
    CelebrityGuess(
      celebrity="Twitter breakup fee"
      image='/images/elon.png'
      :price='2'
      :prize='5'
    )
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
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    GameContentWithSidebar
      template(v-slot:header)
        h2.fragment Cryptocurrency markets ate shit this week
        h2.fragment All major coins experienced at least 20% drops
        h2.fragment Stablecoin ecosystem $UST went to zero
        h2.fragment On Monday it was 4th most valuable coin
      template(v-slot:content)
        img.fragment(src='/images/luna_graph.png')
      template(v-slot:footer)
        h1.fragment Luna Market Cap Loss
    CelebrityGuess(
      celebrity='Luna Market Cap Loss'
      image='/images/luna_graph.png'
      :price='78.79'
      :prize='10'
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

import ChooseWinner from '@/components/Players/ChooseWinner.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'
import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'
import CelebrityGuess from '@/components/CameoPriceIsRight/CelebrityGuess.vue'

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
    Tweet,
    CelebrityGuess
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
