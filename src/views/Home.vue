<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/mbmbam.jpg')
    BackgroundImageSlide(background='/images/kidzbop.jpg')
    VideoSlide(
      background='/video/wap.mp4'
      :muted='false'
    )
    VideoSlide(
      background='/video/kidz-bop-wap.mp4'
      :muted='false'
    )
    BackgroundImageSlide(background='/images/kidzbop.jpg')
    BackgroundImageSlide(background='/images/kidzbop.jpg')
      .title Lyrical Gymnast
    Slide
      h2.fragment Solo
      h2.fragment Presented with an original lyric from a terrible pop song
      h2.fragment Guess how the Kidz Bop "composers" changed it
      h2.fragment Closest (in the judgment of Science) wins
      h2.fragment Triple points for getting it right!
      h1 Game Play
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Ariana Grande - "7 Rings"
      template(v-slot:content)
        h2.fragment Bought matching diamond rings for six of my bitches
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Ariana Grande - "7 Rings"
      template(v-slot:content)
        h2.fragment I'd rather spoil all my friends with my riches
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='1'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Lizzo — "Truth Hurts"
      template(v-slot:content)
        h2.fragment You coulda been a bad bitch, non-committal
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Lizzo — "Truth Hurts"
      template(v-slot:content)
        h2.fragment You coulda had a good friend, non-committal
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='1'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Rihanna — "Love On The Brain"
      template(v-slot:content)
        h2.fragment It beats me black and blue but it fucks me so good
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Rihanna — "Love On The Brain"
      template(v-slot:content)
        h2.fragment It makes me feel it's true but it tricks me so good.
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='1'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Bruno Mars — "It Will Rain"
      template(v-slot:content)
        .flex.flex-col
          h2.fragment If you ever leave me, baby, leave some morphine at my door
          h2.fragment cause it will take a whole lot of medication....
          h2.fragment there's no religion that could save me
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Bruno Mars — "It Will Rain"
      template(v-slot:content)
        .flex.flex-col
          h2.fragment If you ever leave me, baby, leave our memories at my door
          h2.fragment cause it will take a whole lot of remembering...
          h2.fragment there's no decision that could save me.
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='1'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Katy Perry — "Hot N Cold"
      template(v-slot:content)
        h2.fragment You PMS like a bitch - I would know
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Katy Perry — "Hot N Cold"
      template(v-slot:content)
        h2.fragment You change your mind - I would know
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='1'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    BackgroundImageSlide(background='/images/chansley.png')
    BackgroundImageSlide(background='/images/chansley_web_store.png')
    BackgroundImageSlide(background='/images/chansley_suppressed.png')
    VideoSlide(background='/video/chansley_intro.mp4')
    Slide
      h2.fragment Solo
      h2.fragment Presented with quality Qanon Shaman merch
      h2.fragment Guess the price!
      h2.fragment Price is Right rules in effect
      h2.fragment Exact amount gets double points!
      h1 Game Play
    CameoPriceIsRightRound(
      celebrity='Coffee Mug'
      hint1='Staple of any right wing loony merch stand'
      hint2='Features the most iconic image of 6 Jan'
      hint3='Pretty sure he does not have the rights to this photo?'
      image='/images/chansley_coffee_mug.png'
      question='How much is this Qanon Shaman merch?'
      :price='17.00'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(
      background='/video/totk.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Jason Derulo & Jawsh 85 — "Savage Love"
      template(v-slot:content)
        h2.fragment When you kiss me, I know you don't give two fucks
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Jason Derulo & Jawsh 85 — "Savage Love"
      template(v-slot:content)
        h2.fragment When you see me, I know you don't love enough
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='2'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Lady Gaga ft. Beyoncé "Telephone"
      template(v-slot:content)
        h2.fragment Out in the club and I'm sippin that bubb
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Lady Gaga ft. Beyoncé "Telephone"
      template(v-slot:content)
        h2.fragment Out in the club and I'm eating that grub
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='2'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Bruno Mars & Cardi B — "Finesse"
      template(v-slot:content)
        h2.fragment My big fat ass got all them boys hooked
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Bruno Mars & Cardi B — "Finesse"
      template(v-slot:content)
        h2.fragment The big dance moves got all them kids hooked
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='2'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Nicki Minaj — "Starships"
      template(v-slot:content)
        h2.fragment We're higher than a motherfucker
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Nicki Minaj — "Starships"
      template(v-slot:content)
        h2.fragment We’re KidzBop and we’re taking over
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='2'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white The Chainsmokers — "Closer"
      template(v-slot:content)
        .flex.flex-col
          h2.fragment So, baby, pull me closer
          h2.fragment In the back seat of your Rover
          h2.fragment That I know you can't afford
          h2.fragment Bite that tattoo on your shoulder
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white The Chainsmokers — "Closer"
      template(v-slot:content)
        .flex.flex-col
          h2.fragment So baby pull me closer
          h2.fragment As we stand against the Rover
          h2.fragment That I know they can't afford
          h2.fragment Brush that stress right off your shoulder
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='2'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/chansley_intro.mp4')
    CameoPriceIsRightRound(
      celebrity='Qbacca Shirt'
      hint1='Shrewd repossession of a pejorative'
      hint2='Never heard this phrase, but QAA says it was common'
      hint3='Available in no fewer than 18 colorways'
      image='/images/qbacca.png'
      question='How much is this Qanon Shaman merch?'
      :price='33.00'
      :prize='5'
    )
    PlayerBoard
    VideoSlide(
      background='/video/aliens.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Nick Jonas — "Jealous"
      template(v-slot:content)
        h2.fragment You're too sexy beautiful, and everybody wants a taste
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Nick Jonas — "Jealous"
      template(v-slot:content)
        h2.fragment You're too pretty beautiful, and everybody likes you, too
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='3'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Drake — "In My Feelings"
      template(v-slot:content)
        h2.fragment Two bad bitches and we kissin' in the Wraith
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Drake — "In My Feelings"
      template(v-slot:content)
        h2.fragment All of us kids, and we hangin' in the Wraith
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='3'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Bruno Mars — "That's What I Like"
      template(v-slot:content)
        h2.fragment Sex by the fire at night/ Silk sheets and diamonds all white
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Bruno Mars — "That's What I Like"
      template(v-slot:content)
        h2.fragment Hang by the fire at night/ Those shinny diamonds all white
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='3'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Macklemore & Ryan Lewis — "Thrift Shop"
      template(v-slot:content)
        h2.fragment Walk into the club, like whaddup, I got a big cock
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Macklemore & Ryan Lewis — "Thrift Shop"
      template(v-slot:content)
        h2.fragmentNow walk into the club like 'What up?! I got a hit song!
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='3'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Bruno Mars — "The Lazy Song"
      template(v-slot:content)
        .flex.flex-col
          h2.fragment Meet a really nice girl, have some really nice sex
          h2.fragment and she's gonna scream out 'This is great
      template(v-slot:footer)
        h1 Original Lyric
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Bruno Mars — "The Lazy Song"
      template(v-slot:content)
        .flex.flex-col
          h2.fragment Meet a really nice girl, send a really nice text
          h2.fragment and she's gonna write back 'You're so great
      template(v-slot:footer)
        h1 Kidz Bop Lyric
    ChooseWinner(
      :prize='3'
      headerImage='/images/lyrical-gymnast-header.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/chansley_intro.mp4')
    CameoPriceIsRightRound(
      celebrity='Skater Dress'
      hint1='Second highest price point on the store'
      hint2="Don't suspect there is a ton of demand for this item"
      hint3="Clearest indication of this guy's delusion"
      image='/images/skater_dress.png'
      question='How much is this Qanon Shaman merch?'
      :price='55.00'
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

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import ChooseWinner from '@/components/Players/ChooseWinner.vue'

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

import AudioPlayer from '@/components/AuctionEar/AudioPlayer.vue'

import CameoPriceIsRightRound from '@/components/CameoPriceIsRight/CameoPriceIsRightRound.vue'

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
    AudioPlayer,
    CameoPriceIsRightRound
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Kablammo&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Kablammo', cursive !important;
  @apply mt-36 skew-y-12 text-9xl text-green tracking-tight text-shadow shadow-black #{!important};
}

html {
  font-size: 36px;
}
</style>
