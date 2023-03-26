<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/zillow_website.png')
    BackgroundImageSlide(background='/images/zillow_gone_wild.png')
    BackgroundImageSlide(background='/images/zillow_gone_wild.png')
      .title Zillow Gone Wild
    Slide
      h2.fragment Solo
      h2.fragment A property featured on Zillow Gone Wild
      h2.fragment Value the property
      h2.fragment Price is Right Rules in effect
      h2.fragment 2x bonus for exactly right
      h1 Game Play
    Slide(class='green')
      h2.text-white Let's Go!
    ImageCarousel(:images='barbie')
      template(v-slot:header)
        h2 Ann Arbor, Michigan
    CelebrityGuess(
      celebrity='Barbie House'
      :image='barbie[0]'
      :price='315000'
      question='Was is the listing price for this property?'
    )
    ImageCarousel(:images='desert')
      template(v-slot:header)
        h2 Castle Rock, Colorado
    CelebrityGuess(
      celebrity='Space House'
      :image='desert[0]'
      :price='1000000'
      question='What is the listing price for this property?'
    )
    ImageCarousel(:images='football')
      template(v-slot:header)
        h2 London, England
    CelebrityGuess(
      celebrity='Football View'
      :image='football[3]'
      :price='385150'
      question='What is the listing price for this property?'
    )
    ImageCarousel(:images='castle')
      template(v-slot:header)
        h2 Portland, Oregon
    CelebrityGuess(
      celebrity='Castle Portland'
      :image='castle[0]'
      :price='5000000'
      question='What is the listing price for this property?'
    )
    ImageCarousel(:images='slide')
      template(v-slot:header)
        h2 Wichita, Kansas
    CelebrityGuess(
      celebrity='Big Ass Waterslide'
      :image='slide[2]'
      :price='1795000'
      question='What is the listing price for this property?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/cunts.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Points are 2x!
    ImageCarousel(:images='mickey')
      template(v-slot:header)
        h2 Thornton, Colorado
    CelebrityGuess(
      celebrity='Mickey House'
      :image='mickey[0]'
      :price='1100000'
      question='What is the listing price for this property?'
      :prize='2'
    )
    ImageCarousel(:images='siegfried')
      template(v-slot:header)
        h2 Las Vegas, Nevada
    CelebrityGuess(
      celebrity="Siegfried's Crib"
      :image='siegfried[0]'
      :price='3000000'
      question='What is the listing price for this property?'
      :prize='2'
    )
    ImageCarousel(:images='rockstar')
      template(v-slot:header)
        h2 Park City, Utah
    CelebrityGuess(
      celebrity="Rockstar Energy Compound"
      :image='rockstar[0]'
      :price='50000000'
      question='What is the listing price for this property?'
      :prize='2'
    )
    ImageCarousel(:images='loft')
      template(v-slot:header)
        h2 New York, New York
    CelebrityGuess(
      celebrity='Crazy Waterfall Loft'
      :image='loft[3]'
      :price='7500000'
      question='What is the listing price for this property?'
      :prize='2'
    )
    ImageCarousel(:images='jail')
      template(v-slot:header)
        h2 Cass County, Missouri
    CelebrityGuess(
      celebrity='Former Jail'
      :image='jail[0]'
      :price='195000'
      question='What is the listing price for this property?'
      :prize='2'
    )
    PlayerBoard
    VideoSlide(
      background='/video/free_real_estate.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Points are 3x!
    ImageCarousel(:images='duke')
      template(v-slot:header)
        h2 New York, New York
    CelebrityGuess(
      celebrity='Duke Mansion 5th Avenue'
      :image='duke[0]'
      :price='80000000'
      question='What is the listing price for this property?'
      :prize='3'
    )
    ImageCarousel(:images='hotsauce')
      template(v-slot:header)
        h2 Los Angeles, California
    CelebrityGuess(
      celebrity='Sauce Closet'
      :image='hotsauce[3]'
      :price='15000000'
      question='What is the listing price for this property?'
      :prize='3'
    )
    ImageCarousel(:images='garcia')
      template(v-slot:header)
        h2 Los Angeles, California
    CelebrityGuess(
      celebrity='Garcia House'
      :image='garcia[0]'
      :price='16000000'
      question='What is the listing price for this property?'
      :prize='3'
    )
    ImageCarousel(:images='invisible')
      template(v-slot:header)
        h2 Joshua Tree, California
    CelebrityGuess(
      celebrity='Invisible House'
      :image='invisible[0]'
      :price='18000000'
      question='What is the listing price for this property?'
      :prize='3'
    )
    ImageCarousel(:images='northpole')
      template(v-slot:header)
        h2 North Pole, Canada
    CelebrityGuess(
      celebrity="Santa's House"
      :image='northpole[0]'
      :price='1154137'
      question='What is the listing price for this property?'
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

import ImageCarousel from '@/components/base/ImageCarousel.vue'

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
    ImageCarousel,
    CelebrityGuess
  },
  data () {
    return {
      barbie: [
        '/images/barbie_1.jpeg',
        '/images/barbie_2.jpeg',
        '/images/barbie_3.jpeg',
        '/images/barbie_4.jpeg'
      ],
      mickey: [
        '/images/mickey_1.jpeg',
        '/images/mickey_2.jpeg',
        '/images/mickey_3.jpeg',
        '/images/mickey_4.jpeg'
      ],
      desert: [
        '/images/desert_1.webp',
        '/images/desert_2.webp',
        '/images/desert_3.webp',
        '/images/desert_4.webp'
      ],
      football: [
        '/images/football_1.jpg',
        '/images/football_2.jpg',
        '/images/football_3.jpg',
        '/images/football_4.jpg'
      ],
      castle: [
        '/images/castle_1.webp',
        '/images/castle_2.webp',
        '/images/castle_3.webp',
        '/images/castle_4.webp'
      ],
      slide: [
        '/images/slide_1.jpeg',
        '/images/slide_2.jpeg',
        '/images/slide_3.jpeg',
        '/images/slide_4.jpeg'
      ],
      siegfried: [
        '/images/siegfried_1.jpeg',
        '/images/siegfried_2.jpeg',
        '/images/siegfried_3.jpeg',
        '/images/siegfried_4.jpeg'
      ],
      rockstar: [
        '/images/rockstar_1.jpeg',
        '/images/rockstar_2.jpeg',
        '/images/rockstar_3.jpeg',
        '/images/rockstar_4.jpeg'
      ],
      loft: [
        '/images/loft_1.jpeg',
        '/images/loft_2.jpeg',
        '/images/loft_3.jpeg',
        '/images/loft_4.jpeg'
      ],
      jail: [
        '/images/jail_1.jpeg',
        '/images/jail_2.jpeg',
        '/images/jail_3.jpeg',
        '/images/jail_4.jpeg'
      ],
      duke: [
        '/images/duke_1.jpeg',
        '/images/duke_2.jpeg',
        '/images/duke_3.jpeg',
        '/images/duke_4.jpeg'
      ],
      hotsauce: [
        '/images/hotsauce.jpeg',
        '/images/hotsauce_2.jpeg',
        '/images/hotsauce_3.jpeg',
        '/images/hotsauce_4.jpeg'
      ],
      garcia: [
        '/images/garcia_1.jpeg',
        '/images/garcia_2.jpeg',
        '/images/garcia_3.jpeg',
        '/images/garcia_4.jpeg'
      ],
      invisible: [
        '/images/invisible_1.jpeg',
        '/images/invisible_2.jpeg',
        '/images/invisible_3.jpeg',
        '/images/invisible_4.jpeg'
      ],
      northpole: [
        '/images/northpole_1.jpeg',
        '/images/northpole_2.jpeg',
        '/images/northpole_3.jpeg',
        '/images/northpole_4.jpeg'
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title{
  font-family: 'Bubblegum Sans', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
