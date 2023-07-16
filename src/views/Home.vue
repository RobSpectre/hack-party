<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/geoguessr.mp4')
    BackgroundImageSlide(background='/images/geoguessr_ fornite.png')
    BackgroundImageSlide(background='/images/midjourney_release.png')
    VideoSlide(background='/video/geoguessr.mp4')
      .title Muppet Guessr
    Slide
      h2.fragment Solo
      h2.fragment A Midjourney generated muppet...
      h2.fragment ...that used a prompt placing that muppet somewhere other than Sesame Street
      h2.fragment Guess which country was used to generate the image
      h2.fragment 2x points for getting the city
      h1 Game Play
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/gonzo_in_anchorage.png')
      template(v-slot:footer)
        h1 Gonzo
    Scoreboard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/sam_the_eagle_in_rome.png')
      template(v-slot:footer)
        h1 Sam The Eagle
    Scoreboard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/swedish_chef_in_stockholm.png')
      template(v-slot:footer)
        h1 Swedish Chef
    Scoreboard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/big_bird_in_buenos_aires.png')
      template(v-slot:footer)
        h1 Big Bird
    Scoreboard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/dr._teeth_if_he_grew_up_in_cairo.png')
      template(v-slot:footer)
        h1 Dr. Teeth
    Scoreboard
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    BackgroundImageSlide(background='/images/apecoin.png')
    VideoSlide(
      background='/video/nftglasses.mp4'
    )
      .bossfight Non Flushable Turds
    Slide
      h2.fragment Solo
      h2.fragment Bored Ape
      h2.fragment Guess what it is worth today
      h2.fragment Price is Right rules in effect
      h2.fragment Exact money wins 2x!
      h1 Game Play
    CelebrityIntro(
      hint1="Rob's former neighbor featured on NFT games past"
      hint2='This Bored Ape was bought in January 2002 for $1.3 million'
      hint3='Owned by Justin Bieber'
      celebrity='Bored Ape #3001'
      image='/images/ape_3001.avif'
    )
    CelebrityGuess(
      image='/images/ape_3001.avif'
      celebrity='Bored Ape #3001'
      question='What is the highest current offer for this NFT?'
      :price='59000'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(
      background='/video/mtg.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/animal_in_paris.png')
      template(v-slot:footer)
        h1 Animal
    Scoreboard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/fozzie_in_east_berlin.png')
      template(v-slot:footer)
        h1 Fozzie Bear
    Scoreboard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/oscar_in_shanghai.png')
      template(v-slot:footer)
        h1 Oscar
    Scoreboard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/rizzo_the_rat_in_morocco.png')
      template(v-slot:footer)
        h1 Rizzo the Rat
    Scoreboard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/rowlf_in_rio_de_janiero.png')
      template(v-slot:footer)
        h1 Rowlf
    Scoreboard
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    BackgroundImageSlide(background='/images/apecoin.png')

    CelebrityIntro(
      hint1='This celebrity was early to the party buying this ape in August 2021'
      hint2='Got it for a comparative steal for $180k'
      hint3='Owned by Stephen Curry'
      celebrity='Bored Ape #7990'
      image='/images/ape_7990.avif'
    )
    CelebrityGuess(
      image='/images/ape_7990.avif'
      celebrity='Bored Ape #7990'
      question='What is the highest current offer for this NFT?'
      :prize='5'
      :price='63000'
    )
    PlayerBoard
    VideoSlide(
      background='/video/cart_narcs.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/elmo_in_boston.png')
      template(v-slot:footer)
        h1 Elmo
    Scoreboard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/beaker_in_amsterdam.png')
      template(v-slot:footer)
        h1 Beaker
    Scoreboard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/kermit_in_monaco.png')
      template(v-slot:footer)
        h1 Kermit
    Scoreboard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/miss_piggy_in_capetown.png')
      template(v-slot:footer)
        h1 Miss Piggy
    Scoreboard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/statler_and_waldorf_in_pyongyang.png')
      template(v-slot:footer)
        h1 Statler and Waldorf
    Scoreboard
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    PlayerBoard
    CelebrityIntro(
      hint1='This celebrity is named in a few lawsuits for promoting Bored Apes'
      hint2='Prompted the creation of our first NFT with her appearance on The Tonight Show'
      hint3='Bought by Paris Hilton for $330k'
      celebrity='Bored Ape #1294'
      image='/images/ape_1294.avif'
    )
    CelebrityGuess(
      image='/images/ape_1294.avif'
      celebrity='Bored Ape #1294'
      question='What is the highest current offer for this NFT?'
      :prize='10'
      :price='41000'
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

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'
import Scoreboard from '@/components/Scoreboard/Scoreboard.vue'

import CelebrityIntro from '@/components/CameoPriceIsRight/CelebrityIntro.vue'
import CelebrityGuess from '@/components/CameoPriceIsRight/CelebrityGuess.vue'

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
    GameContentWithSidebar,
    Scoreboard,
    CelebrityIntro,
    CelebrityGuess
  }
}
</script>

<style lang='scss'>
@import
url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Tektur&family=Graduate&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Tektur', cursive !important;
  @apply mt-36 skew-y-12 text-9xl text-green tracking-tight text-shadow shadow-black #{!important};
}

.bossfight {
  font-family: 'Graduate', cursive !important;
  @apply text-8xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
